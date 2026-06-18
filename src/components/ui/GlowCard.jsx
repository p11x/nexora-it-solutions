import { useRef } from 'react'
import { motion } from 'framer-motion'

export function GlowCard({ children, glowColor = '#4F46E5', className = '', ...props }) {
  const cardRef = useRef(null)

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={className}
      onMouseEnter={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        e.currentTarget.style.background = `radial-gradient(600px circle at ${x}px ${y}px, ${glowColor}15, transparent 40%), rgba(255,255,255,0.75)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.75)'
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}