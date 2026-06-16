import { motion } from 'framer-motion'
import { Home } from 'lucide-react'
import { Button } from '../components/ui'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-bg-base" />
      <div className="absolute inset-0 dot-grid-bg opacity-20" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 text-center px-4"
      >
        <h1
          className="font-display text-8xl md:text-9xl font-bold gradient-text mb-4 inline-block"
          style={{ animation: 'glitch 0.3s linear infinite', animationPlayState: 'running' }}
        >
          404
        </h1>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-text-secondary max-w-md mx-auto mb-8">
          The page you're looking for has been moved, deleted, or doesn't exist.
        </p>
        <a href="/">
          <Button variant="primary" icon={Home} size="lg">
            Back to Home
          </Button>
        </a>
      </motion.div>
    </div>
  )
}
