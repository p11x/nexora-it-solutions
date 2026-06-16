import { Star } from 'lucide-react'
import { testimonials } from '../../../data/content'
import { ScrollReveal, GlowCard, SectionHeader } from '../../ui'

export function Testimonials() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-indigo/5 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader eyebrow="Client Stories" title="Hear From Our Partners" subtitle="Real feedback from the teams we've helped transform." centered />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} direction="up" delay={i * 0.15}>
              <GlowCard className="h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-text-secondary italic leading-relaxed flex-1 mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-indigo to-accent-violet flex items-center justify-center text-white text-sm font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-text-primary font-medium text-sm">{t.name}</div>
                    <div className="text-text-muted text-xs">{t.role}, {t.company}</div>
                  </div>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
