import { motion } from 'framer-motion'
import { AuthModal } from '../../components/auth/AuthModal'
import { useAuth } from '../../hooks/useAuth'
import { Navigate } from 'react-router-dom'

export default function LoginPage() {
  const { user, loading, isAdmin } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-8 h-8 border-2 border-accent-indigo border-t-transparent rounded-full"
        />
      </div>
    )
  }

  if (user) {
    return <Navigate to={isAdmin ? '/admin/dashboard' : '/'} replace />
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-bg-base" />
      <div className="absolute inset-0 dot-grid-bg opacity-20" />
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full opacity-15"
           style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)', filter: 'blur(100px)' }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl font-bold text-text-primary mb-4">
              Secure Access Portal
            </h1>
            <p className="text-text-secondary text-lg mb-8">
              Welcome to the Viprove Infotech admin dashboard. Manage inquiries, track submissions, and monitor newsletter subscriptions.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-indigo/15 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-accent-indigo rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Secure Authentication</h3>
                  <p className="text-sm text-text-muted">Your data is protected with industry-standard encryption</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-indigo/15 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Reliable Performance</h3>
                  <p className="text-sm text-text-muted">Real-time updates and instant notifications</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-indigo/15 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-accent-violet rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Professional Platform</h3>
                  <p className="text-sm text-text-muted">Built with Supabase for enterprise-grade infrastructure</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:hidden mb-6"
        >
          <h1 className="font-display text-3xl font-bold text-text-primary text-center mb-2">
            Viprove Infotech
          </h1>
          <p className="text-text-secondary text-center">Secure Access Portal</p>
        </motion.div>

        <AuthModal isOpen={true} onClose={() => {}} />
      </div>
    </div>
  )
}