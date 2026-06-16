import { useState } from 'react'
import { PageHero } from '../components/sections'
import { ScrollReveal, GlowCard, Badge } from '../components/ui'
import { products } from '../data/content'
import { SectionHeader } from '../components/ui'
import { Button } from '../components/ui'

const categories = ['All', 'Cloud', 'Security', 'Analytics', 'DevOps']

const badgeColors = {
  New: 'cyan',
  Popular: 'indigo',
  Enterprise: 'violet',
  Beta: 'default',
}

export default function Products() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? products : products.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <PageHero title="Our Products" subtitle="Battle-tested software platforms built for modern enterprises." badge={`${products.length} Products`} />

      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === cat
                      ? 'bg-accent-indigo text-white shadow-lg shadow-indigo-500/20'
                      : 'glass-card text-text-secondary hover:text-accent-indigo'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((product, i) => (
              <ScrollReveal key={product.name} direction="up" delay={i * 0.1}>
                <GlowCard glowColor="#6366f1" className="h-full flex flex-col">
                  <div className="h-1.5 rounded-t-xl bg-gradient-to-r from-accent-indigo via-accent-violet to-accent-cyan mb-6 -mx-6 -mt-6 px-6" />
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge variant={badgeColors[product.badge] || 'default'}>{product.badge}</Badge>
                      <h3 className="font-display font-bold text-text-primary text-2xl mt-2">{product.name}</h3>
                      <p className="text-text-muted text-sm">{product.category}</p>
                    </div>
                    <span className="text-accent-indigo font-display font-bold text-lg">{product.price}</span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">{product.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" className="w-full">Get Started</Button>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
