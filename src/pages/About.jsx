import { PageHero } from '../components/sections'
import { ScrollReveal, GlowCard, SectionHeader, Badge } from '../components/ui'
import { team } from '../data/content'

export default function About() {
  return (
    <div>
      <PageHero title="About Viprove" subtitle="Pioneering enterprise technology solutions since 2012." />

      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader eyebrow="Our Journey" title="Milestones That Define Us" subtitle="A decade of growth, innovation, and industry leadership." centered />
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['2012', '2015', '2018', '2021', '2024'].map((year, i) => (
              <ScrollReveal key={year} direction="up" delay={i * 0.1}>
                <div className="glass-card p-6 text-center">
                  <div className="font-display text-3xl font-bold gradient-text mb-2">{year}</div>
                  <p className="text-text-muted text-sm">{
                    ['Founded', '50 Clients', 'Series A', '500 Projects', 'Global Scale'][i]
                  }</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-y border-[rgba(79,70,229,0.12)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader eyebrow="Leadership" title="Meet the Team" subtitle="Experienced leaders driving innovation." centered />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} direction="up" delay={i * 0.1}>
                <GlowCard glowColor={member.color} className="p-6 text-center">
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold font-display"
                    style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}80)` }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="font-display font-semibold text-text-primary text-lg">{member.name}</h3>
                  <p className="text-accent-indigo text-sm mb-3">{member.role}</p>
                  <p className="text-text-secondary text-xs leading-relaxed">{member.bio}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
