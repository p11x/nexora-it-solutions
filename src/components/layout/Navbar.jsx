import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, LogOut } from 'lucide-react'
import { navLinks } from '../../data/content'
import { Button } from '../ui/Button'
import { useAuth } from '../../hooks/useAuth'
import AnimatedLogo from '../ui/AnimatedLogo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const dropdownRef = useRef(null)
  const { user, profile, loading, signOut, isAdmin } = useAuth()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSignOut = async () => {
    await signOut()
    setDropdownOpen(false)
  }

  const getInitials = () => {
    return (profile?.full_name || user?.email || 'U').charAt(0).toUpperCase()
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(240,244,255,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(79,70,229,0.15)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <AnimatedLogo size="md" showText={true} linkTo="/" />

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `relative py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-accent-indigo' : 'text-text-secondary hover:text-accent-indigo'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-indigo rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              {user ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-bg-elevated transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent-indigo flex items-center justify-center text-white text-sm font-medium">
                      {getInitials()}
                    </div>
                    <span className="text-sm text-text-secondary">{profile?.full_name?.split(' ')[0] || 'User'}</span>
                    <ChevronDown className={`w-4 h-4 text-text-muted transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 top-full mt-2 w-56 glass-card py-2"
                      >
                        <div className="px-4 py-2 border-b border-[rgba(79,70,229,0.1)]">
                          <div className="font-medium text-text-primary">{profile?.full_name || 'User'}</div>
                          <div className="text-xs text-text-muted">{user?.email}</div>
                        </div>
                        <div className="py-1">
                          {isAdmin && (
                            <button
                              onClick={() => {
                                navigate('/admin/dashboard')
                                setDropdownOpen(false)
                              }}
                              className="w-full px-4 py-2 text-left text-sm text-text-secondary hover:bg-bg-elevated"
                            >
                              Admin Dashboard
                            </button>
                          )}
                          <button
                            onClick={handleSignOut}
                            className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-red-50 flex items-center gap-2"
                          >
                            <LogOut className="w-4 h-4" />
                            Sign Out
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link to="/login">
                  <Button variant="ghost" size="sm">Login</Button>
                </Link>
              )}
              <Link to="/contact">
                <Button variant="primary" size="sm">Contact Us</Button>
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-text-secondary hover:text-accent-indigo transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-bg-base/95 backdrop-blur-xl border-b border-[rgba(79,70,229,0.15)]"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        `block text-2xl font-display font-medium py-2 transition-colors ${
                          isActive ? 'text-accent-indigo' : 'text-text-secondary'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4 space-y-3"
                >
                  {!user && (
                    <Link to="/login" className="block">
                      <Button variant="ghost" className="w-full">Login</Button>
                    </Link>
                  )}
                  <Link to="/contact" className="block">
                    <Button variant="primary" className="w-full">Contact Us</Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}