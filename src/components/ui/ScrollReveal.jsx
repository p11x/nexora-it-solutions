import { motion } from 'framer-motion'
import { cn } from '../../hooks/useCn'

export function ScrollReveal({ children, direction = 'up', delay = 0, className = '' }) {
  const variants = {
    up: { hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left: { hidden: { x: -60, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: 60, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    fade: { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants[direction]}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
