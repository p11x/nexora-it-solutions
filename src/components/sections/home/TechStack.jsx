import { ScrollReveal, SectionHeader } from '../../ui'

export function TechStack() {
  const stack = [
    'React', 'Node.js', 'Python', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'TensorFlow', 'PostgreSQL', 'Redis', 'Docker', 'GraphQL'
  ]
  const row1 = [...stack, ...stack]
  const row2 = [...stack.reverse(), ...stack.reverse()]

  const TechPill = ({ name }) => (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8EEFF] border border-[rgba(79,70,229,0.2)] text-[#334155] text-sm font-mono whitespace-nowrap">
      <span className="w-2 h-2 rounded-full bg-accent-indigo" />
      {name}
    </span>
  )

  return (
    <section className="py-20 bg-bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ScrollReveal>
          <SectionHeader eyebrow="Our Stack" title="Technologies We Master" subtitle="We leverage the best tools and platforms to build future-proof solutions." centered />
        </ScrollReveal>
      </div>

      <div className="space-y-4">
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {row1.map((name, i) => <TechPill key={`r1-${name}-${i}`} name={name} />)}
          </div>
        </div>
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
            {row2.map((name, i) => <TechPill key={`r2-${name}-${i}`} name={name} />)}
          </div>
        </div>
      </div>

      <style>{`
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 30s linear infinite; }
      `}</style>
    </section>
  )
}
