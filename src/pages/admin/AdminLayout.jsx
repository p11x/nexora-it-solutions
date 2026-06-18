import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Mail, Users, Settings, LogOut, Menu, X } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'
import { useState } from 'react'
import AnimatedLogo from '../../components/ui/AnimatedLogo'

const navItems = [
  { to: '/admin/dashboard', icon: Home, label: 'Overview' },
  { to: '/admin/inquiries', icon: Mail, label: 'Inquiries' },
  { to: '/admin/newsletter', icon: Users, label: 'Newsletter' },
  { to: '/admin/settings', icon: Settings, label: 'Settings' }
]

export default function AdminLayout() {
  const { user, profile, signOut } = useAuth()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-bg-base flex">
      <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-[rgba(79,70,229,0.15)] transform transition-transform duration-300 ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-[rgba(79,70,229,0.15)]">
            <AnimatedLogo size="sm" showText={true} linkTo="/" />
            <div className="text-text-muted text-xs mt-1">Admin Panel</div>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive ? 'bg-accent-indigo text-white' : 'text-text-secondary hover:bg-bg-elevated'
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="p-4 border-t border-[rgba(79,70,229,0.15)]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-accent-indigo flex items-center justify-center text-white font-medium">
                {profile?.full_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-text-primary truncate">{profile?.full_name || 'User'}</div>
                <div className="text-xs text-text-muted truncate">{user?.email}</div>
              </div>
            </div>
            <button
              onClick={signOut}
              className="flex items-center gap-2 w-full px-4 py-2 text-red-500 rounded-lg hover:bg-red-50 transition-colors text-sm"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div className="flex-1 lg:ml-0">
        <header className="lg:hidden bg-white border-b border-[rgba(79,70,229,0.15)] px-4 py-3 flex items-center justify-between">
          <div className="font-display font-bold text-text-primary">Admin Panel</div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-text-secondary"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}