import { stats } from '../../../data/content'
import { AnimatedCounter } from '../../ui/AnimatedCounter'
import { ScrollReveal } from '../../ui/ScrollReveal'

export function StatsSection() {
  return (
    <section className="py-16 bg-bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className={`text-center ${i < stats.length - 1 ? 'lg:border-r lg:border-border' : ''}`}>
                <div className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
