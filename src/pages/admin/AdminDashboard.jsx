import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import { useAuth } from '../../hooks/useAuth'
import { ChevronDown, ChevronRight, Check, Archive, Reply } from 'lucide-react'

const statusColors = {
  new: 'bg-accent-indigo text-white',
  read: 'bg-bg-elevated text-text-secondary',
  replied: 'bg-green-500 text-white',
  archived: 'bg-red-500/20 text-red-600'
}

const statusTabs = ['all', 'new', 'read', 'replied', 'archived']

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([])
  const [subscribers, setSubscribers] = useState([])
  const [stats, setStats] = useState({ total: 0, new: 0, subscribers: 0, thisWeek: 0 })
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('all')
  const [expandedRow, setExpandedRow] = useState(null)
  const { isAdmin } = useAuth()

  useEffect(() => {
    if (!isAdmin) return

    const fetchData = async () => {
      setLoading(true)

      const { data: submissionsData, error: submissionsError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      if (submissionsError) {
        console.error('Error fetching submissions:', submissionsError)
      } else {
        setSubmissions(submissionsData)
      }

      const { data: subscribersData } = await supabase
        .from('newsletter_subscribers')
        .select('*')

      setSubscribers(subscribersData || [])
      setStats({
        total: submissionsData?.length || 0,
        new: submissionsData?.filter(s => s.status === 'new').length || 0,
        subscribers: (subscribersData || []).length,
        thisWeek: submissionsData?.filter(s => {
          const created = new Date(s.created_at)
          const weekAgo = new Date()
          weekAgo.setDate(weekAgo.getDate() - 7)
          return created > weekAgo
        }).length || 0
      })
      setLoading(false)
    }

    fetchData()

    const channel = supabase
      .channel('contact-changes')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'contact_submissions'
      }, (payload) => {
        setSubmissions(prev => [payload.new, ...prev])
        setStats(prev => ({ ...prev, total: prev.total + 1, new: prev.new + 1 }))
        toast('📬 New inquiry from ' + payload.new.full_name)
      })
      .subscribe()

    return () => supabase.removeChannel(channel)
  }, [isAdmin])

  const updateStatus = async (id, status) => {
    const { error } = await supabase
      .from('contact_submissions')
      .update({ status })
      .eq('id', id)

    if (!error) {
      setSubmissions(prev => prev.map(s => s.id === id ? { ...s, status } : s))
      toast.success('Status updated')
    }
  }

  const unsubscribe = async (id, email) => {
    const { error } = await supabase
      .from('newsletter_subscribers')
      .update({ status: 'unsubscribed' })
      .eq('id', id)

    if (!error) {
      setSubscribers(prev => prev.filter(s => s.id !== id))
      setStats(prev => ({ ...prev, subscribers: prev.subscribers - 1 }))
      toast.success(email + ' unsubscribed')
    }
  }

  const filteredSubmissions = activeTab === 'all'
    ? submissions
    : submissions.filter(s => s.status === activeTab)

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="font-display text-3xl font-bold text-text-primary mb-2">Admin Dashboard</h1>
        <p className="text-text-secondary">Manage contact inquiries and newsletter subscribers</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="glass-card p-4 text-center">
          <div className="font-display text-3xl font-bold gradient-text">{stats.total}</div>
          <div className="text-text-muted text-sm">Total Inquiries</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="font-display text-3xl font-bold text-accent-indigo">{stats.new}</div>
          <div className="text-text-muted text-sm">New / Unread</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="font-display text-3xl font-bold text-accent-cyan">{stats.subscribers}</div>
          <div className="text-text-muted text-sm">Subscribers</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="font-display text-3xl font-bold text-accent-violet">{stats.thisWeek}</div>
          <div className="text-text-muted text-sm">This Week</div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {statusTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab ? 'bg-accent-indigo text-white' : 'glass-card text-text-secondary'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="glass-card overflow-hidden mb-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[rgba(79,70,229,0.12)]">
              <th className="px-4 py-3 text-left text-xs font-medium text-text-muted uppercase">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-text-muted uppercase">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-text-muted uppercase">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-text-muted uppercase">Company</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-text-muted uppercase">Service</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-text-muted uppercase">Budget</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-text-muted uppercase">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-text-muted uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubmissions.map((submission) => (
              <motion.tr
                key={submission.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-b border-[rgba(79,70,229,0.08)] last:border-0"
              >
                <td className="px-4 py-3 text-sm text-text-secondary">
                  {new Date(submission.created_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-sm font-medium text-text-primary">
                  {submission.full_name}
                </td>
                <td className="px-4 py-3 text-sm text-text-secondary">
                  {submission.email}
                </td>
                <td className="px-4 py-3 text-sm text-text-secondary">
                  {submission.company || '-'}
                </td>
                <td className="px-4 py-3 text-sm text-text-secondary">
                  {submission.service_interest || '-'}
                </td>
                <td className="px-4 py-3 text-sm text-text-secondary">
                  {submission.budget || '-'}
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[submission.status]}`}>
                    {submission.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    {submission.status !== 'read' && (
                      <button
                        onClick={() => updateStatus(submission.id, 'read')}
                        className="p-1 text-text-muted hover:text-accent-indigo"
                        title="Mark as Read"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                    )}
                    {submission.status !== 'replied' && (
                      <button
                        onClick={() => updateStatus(submission.id, 'replied')}
                        className="p-1 text-text-muted hover:text-green-500"
                        title="Mark as Replied"
                      >
                        <Reply className="w-4 h-4" />
                      </button>
                    )}
                    {submission.status !== 'archived' && (
                      <button
                        onClick={() => updateStatus(submission.id, 'archived')}
                        className="p-1 text-text-muted hover:text-red-500"
                        title="Archive"
                      >
                        <Archive className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => setExpandedRow(expandedRow === submission.id ? null : submission.id)}
                      className="p-1 text-text-muted hover:text-text-primary"
                      title="View Message"
                    >
                      {expandedRow === submission.id ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
            {filteredSubmissions.map((submission) => (
              expandedRow === submission.id && (
                <tr key={`expanded-${submission.id}`}>
                  <td colSpan={8} className="px-4 py-3 bg-bg-elevated/50">
                    <p className="text-sm text-text-secondary whitespace-pre-wrap">{submission.message}</p>
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="font-display text-xl font-bold text-text-primary mb-4">Newsletter Subscribers</h2>
      <div className="glass-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[rgba(79,70,229,0.12)]">
              <th className="px-4 py-3 text-left text-xs font-medium text-text-muted uppercase">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-text-muted uppercase">Subscribed On</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-text-muted uppercase">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-text-muted uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber) => (
              <tr key={subscriber.id} className="border-b border-[rgba(79,70,229,0.08)] last:border-0">
                <td className="px-4 py-3 text-sm font-medium text-text-primary">
                  {subscriber.email}
                </td>
                <td className="px-4 py-3 text-sm text-text-secondary">
                  {new Date(subscriber.created_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    subscriber.status === 'active' ? 'bg-green-500/20 text-green-600' : 'bg-red-500/20 text-red-600'
                  }`}>
                    {subscriber.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {subscriber.status === 'active' && (
                    <button
                      onClick={() => unsubscribe(subscriber.id, subscriber.email)}
                      className="text-red-500 hover:text-red-600 text-sm"
                    >
                      Unsubscribe
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}