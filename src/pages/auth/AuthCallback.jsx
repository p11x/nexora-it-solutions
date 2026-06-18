import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { supabase } from '../../lib/supabase'
import { toast } from 'react-hot-toast'
import { useAuth } from '../../hooks/useAuth'

export default function AuthCallback() {
  const navigate = useNavigate()
  const { isAdmin } = useAuth()

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { data, error } = await supabase.auth.exchangeCodeForSession(
        new URLSearchParams(window.location.search).get('code')
      )

      if (error) {
        toast.error('Authentication failed')
        navigate('/login')
        return
      }

      navigate('/admin/dashboard')
    }

    handleAuthCallback()
  }, [navigate])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="w-8 h-8 border-2 border-accent-indigo border-t-transparent rounded-full"
      />
      <span className="ml-3 text-text-muted">Processing authentication...</span>
    </div>
  )
}