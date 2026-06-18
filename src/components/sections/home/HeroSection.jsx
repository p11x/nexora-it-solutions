import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { ParticleCanvas } from '../../ui/ParticleCanvas'
import { Button } from '../../ui/Button'
import { TypewriterText } from '../../ui/TypewriterText'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-bg-base" />
      <ParticleCanvas />
      <Orbs />
      <div className="absolute inset-0 dot-grid-bg opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-accent-indigo animate-pulse">
                🚀 Trusted by 500+ companies worldwide
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-display font-bold text-text-primary leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              We Build the
              <br />
              <TypewriterText
                sequences={['Digital Future', 'Cloud Infrastructure', 'AI Ecosystems', 'Secure Systems']}
              />
              <br />
              You Deserve
            </motion.h1>

            <motion.p variants={itemVariants} className="text-text-secondary max-w-2xl text-lg mb-8">
              Viprove Infotech delivers enterprise-grade cloud architecture, cybersecurity, and AI-powered systems that scale with your ambition.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <a href="/contact">
                <Button variant="primary" size="lg">Get Started</Button>
              </a>
              <Button variant="ghost" size="lg" icon={ChevronRight}>See Our Work</Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {['JD', 'MK', 'AR'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-indigo to-accent-cyan flex items-center justify-center text-xs font-bold text-white border-2 border-bg-base"
                    style={{ marginLeft: i > 0 ? '-8px' : '0', zIndex: 3 - i }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-text-secondary text-sm">Trusted by 500+ clients globally</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <FloatCard />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-text-muted" />
      </div>
    </section>
  )
}

function Orbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite',
          filter: 'blur(600px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(8,145,178,0.10) 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite 2s',
          filter: 'blur(400px)',
        }}
      />
    </div>
  )
}

function FloatCard() {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="glass-card p-6 max-w-md"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-text-muted text-xs mb-1">Active Projects</div>
          <div className="font-display text-2xl font-bold text-text-primary">127</div>
        </div>
        <div className="px-3 py-1 rounded-full bg-green-500/15 text-green-400 text-xs font-medium">Live</div>
      </div>
      <div className="space-y-4">
        {['Cloud Migration', 'Security Audit', 'ML Pipeline'].map((proj, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent-indigo" />
            <span className="text-text-secondary text-sm flex-1">{proj}</span>
            <div className="h-1.5 flex-1 bg-bg-elevated rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent-indigo to-accent-cyan rounded-full"
                style={{ width: `${[80, 65, 45][i]}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border">
<svg viewBox="0 0 200 60" className="w-full h-12">
           <path
             d="M0,45 Q25,35 50,40 T100,25 T150,35 T200,15"
             fill="none"
             stroke="#4F46E5"
             strokeWidth="2"
           />
           <circle cx="200" cy="15" r="4" fill="#4F46E5" />
         </svg>
      </div>
    </motion.div>
  )
}
