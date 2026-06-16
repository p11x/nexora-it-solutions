import { motion } from 'framer-motion'

export function PageHero({ title, subtitle, badge }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 dot-grid-bg opacity-20" />
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', filter: 'blur(100px)' }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {badge && (
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-indigo/15 text-accent-indigo text-sm font-medium border border-accent-indigo/20 mb-6">
            {badge}
          </span>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  )
}
