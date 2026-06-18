import { useAuth } from '../../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import { useEffect } from 'react'

export default function AdminRoute({ children }) {
  const { user, loading, isAdmin } = useAuth()
  const location = useLocation()

  useEffect(() => {
    if (!loading && user && !isAdmin) {
      toast.error('Access denied')
    }
  }, [loading, user, isAdmin])

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

  if (!isAdmin) {
    return <Navigate to="/" replace />
  }

  return children
}