import { Cloud, Shield, Cpu, Globe, Code2, Network } from 'lucide-react'
import { ScrollReveal, GlowCard, SectionHeader } from '../../ui'
import { services } from '../../../data/content'

const iconMap = { Cloud, Shield, Cpu, Globe, Code2, Network }

export function FeaturedServices() {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader eyebrow="What We Do" title="Services Built for Scale" subtitle="Enterprise-grade solutions designed to accelerate your digital transformation journey." centered />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <ScrollReveal key={service.title} direction="up" delay={i * 0.1}>
                <GlowCard glowColor={service.color} className="group h-full">
                  <div className="mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${service.color}20` }}
                    >
                      <div className="p-2 rounded-lg" style={{ background: `linear-gradient(135deg, ${service.color}40, ${service.color}10)` }}>
                        <Icon className="w-6 h-6" style={{ color: service.color }} />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-text-primary text-lg mb-2">{service.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{service.desc}</p>
                  <span className="text-accent-indigo text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Learn More <span>→</span>
                  </span>
                </GlowCard>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
