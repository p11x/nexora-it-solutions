import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'
import { supabase } from '../../lib/supabase'
import { toast } from 'react-hot-toast'

export function AuthModal({ isOpen, onClose }) {
  const [mode, setMode] = useState('signin')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})
  const { signIn, signUp } = useAuth()

  const validatePassword = (password) => {
    if (!password || password.length < 8) return 'weak'
    if (password.length >= 8 && password.length < 12) return 'medium'
    if (/^(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password)) return 'strong'
    return 'medium'
  }

  const handleSignIn = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrors({})

    const { data, error } = await signIn(formData.email, formData.password)

    if (error) {
      setErrors({ submit: error.message })
      toast.error('Invalid credentials')
    } else {
      onClose()
      toast.success('Welcome back!')
    }
    setLoading(false)
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrors({})

    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' })
      setLoading(false)
      return
    }

    const { data, error } = await signUp(formData.email, formData.password, formData.fullName)

    if (error) {
      setErrors({ submit: error.message })
      toast.error('Signup failed')
    } else {
      onClose()
      toast.success('Account created! Welcome to Viprove Infotech')
    }
    setLoading(false)
  }

  const handleForgotPassword = async () => {
    if (!formData.email) {
      toast.error('Enter your email first')
      return
    }
    const { error } = await supabase.auth.resetPasswordForEmail(formData.email)
    if (error) {
      toast.error('Failed to send reset email')
    } else {
      toast.success('Password reset email sent')
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="glass-card w-full max-w-md p-6 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-text-muted hover:text-text-primary"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-6">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-2">
              {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-text-secondary text-sm">
              {mode === 'signin' ? 'Sign in to your account' : 'Join Viprove Infotech'}
            </p>
          </div>

          <div className="flex gap-1 mb-6 bg-bg-elevated p-1 rounded-lg">
            <button
              onClick={() => setMode('signin')}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                mode === 'signin' ? 'bg-accent-indigo text-white' : 'text-text-secondary'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                mode === 'signup' ? 'bg-accent-indigo text-white' : 'text-text-secondary'
              }`}
            >
              Sign Up
            </button>
          </div>

          {mode === 'signin' ? (
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-[rgba(79,70,229,0.2)] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-accent-indigo"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full bg-white border border-[rgba(79,70,229,0.2)] rounded-lg px-3 py-2 text-sm pr-10 focus:outline-none focus:border-accent-indigo"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {errors.submit && (
                <p className="text-red-500 text-sm animate-shake">{errors.submit}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 bg-accent-indigo text-white rounded-lg font-medium hover:bg-indigo-600 transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Signing in...
                  </span>
                ) : (
                  'Sign In'
                )}
              </button>

              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-accent-indigo hover:underline"
              >
                Forgot password?
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-white border border-[rgba(79,70,229,0.2)] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-accent-indigo"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-[rgba(79,70,229,0.2)] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-accent-indigo"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full bg-white border border-[rgba(79,70,229,0.2)] rounded-lg px-3 py-2 text-sm pr-10 focus:outline-none focus:border-accent-indigo"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <div className="mt-2">
                  <div className="flex gap-1 h-1">
                    <div className={`flex-1 rounded ${
                      validatePassword(formData.password) === 'weak' ? 'bg-red-500' :
                      validatePassword(formData.password) === 'medium' ? 'bg-yellow-500' :
                      validatePassword(formData.password) === 'strong' ? 'bg-green-500' : 'bg-bg-elevated'
                    }`} />
                    <div className={`flex-1 rounded ${
                      validatePassword(formData.password) === 'medium' || validatePassword(formData.password) === 'strong' ? 'bg-yellow-500' :
                      validatePassword(formData.password) === 'strong' ? 'bg-green-500' : 'bg-bg-elevated'
                    }`} />
                    <div className={`flex-1 rounded ${
                      validatePassword(formData.password) === 'strong' ? 'bg-green-500' : 'bg-bg-elevated'
                    }`} />
                  </div>
                  <p className="text-xs text-text-muted mt-1 capitalize">
                    Password strength: {validatePassword(formData.password)}
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full bg-white border border-[rgba(79,70,229,0.2)] rounded-lg px-3 py-2 text-sm pr-10 focus:outline-none focus:border-accent-indigo"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                )}
              </div>

              {errors.submit && (
                <p className="text-red-500 text-sm animate-shake">{errors.submit}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 bg-accent-indigo text-white rounded-lg font-medium hover:bg-indigo-600 transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Creating account...
                  </span>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}