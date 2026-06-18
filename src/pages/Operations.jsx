import { PageHero } from '../components/sections'
import { ScrollReveal, GlowCard, SectionHeader, AnimatedCounter } from '../components/ui'
import { operations } from '../data/content'
import * as Icons from 'lucide-react'

const iconMap = {
  Search: Icons.Search, Layers: Icons.Layers, Zap: Icons.Zap,
  Shield: Icons.Shield, Rocket: Icons.Rocket, Headphones: Icons.Headphones
}

const slaMetrics = [
  { value: 99.9, suffix: '%', label: 'Uptime SLA', Icon: Icons.Shield },
  { value: 2, suffix: 'hr', label: 'Response Time', prefix: '<', Icon: Icons.Zap },
  { value: 4, suffix: 'wks', label: 'MVP Delivery', Icon: Icons.Rocket },
  { value: 27001, suffix: '', label: 'ISO Certified', prefix: 'ISO ', Icon: Icons.Search },
]

export default function Operations() {
  return (
    <div>
      <PageHero title="How We Operate" subtitle="Our proven methodology ensures consistent delivery, security, and quality at every phase." />

      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader eyebrow="Our Process" title="The Viprove Way" subtitle="A structured approach refined over 500+ successful projects." centered />
          </ScrollReveal>

          <div className="space-y-6">
            {operations.map((op, i) => {
              const Icon = iconMap[op.icon]
              return (
                <ScrollReveal key={op.title} direction="left" delay={i * 0.1}>
                  <GlowCard glowColor="#4F46E5" className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-accent-indigo/15 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-accent-indigo" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-accent-cyan font-mono text-sm font-bold">{op.phase}</span>
                        <h3 className="font-display font-semibold text-text-primary text-xl">{op.title}</h3>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed">{op.desc}</p>
                    </div>
                  </GlowCard>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-y border-[rgba(79,70,229,0.12)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader eyebrow="SLA" title="Our Commitments" subtitle="Industry-leading guarantees backed by real infrastructure." centered />
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {slaMetrics.map((m, i) => {
              const Icon = m.Icon
              return (
                <ScrollReveal key={m.label} direction="up" delay={i * 0.1}>
                  <GlowCard glowColor="#4F46E5" className="text-center p-6">
                    <Icon className="w-8 h-8 text-accent-indigo mx-auto mb-3" />
                    <div className="font-display text-3xl font-bold text-text-primary mb-1">
                      <AnimatedCounter value={m.value} suffix={m.suffix} prefix={m.prefix || ''} />
                    </div>
                    <div className="text-text-muted text-sm">{m.label}</div>
                  </GlowCard>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
