import { useAuth } from '../../hooks/useAuth'
import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-8 h-8 border-2 border-accent-indigo border-t-transparent rounded-full"
        />
        <span className="ml-3 text-text-muted">Authenticating...</span>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}