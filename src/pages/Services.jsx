import { useState } from 'react'
import { Search, Layers, Zap, Shield, Rocket, Headphones } from 'lucide-react'
import { PageHero, ScrollReveal } from '../components/sections'
import { operations } from '../data/content'
import { GlowCard, SectionHeader, AnimatedCounter } from '../components/ui'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const iconMap = { Search, Layers, Zap, Shield, Rocket, Headphones }

export default function Services() {
  return (
    <div>
      <PageHero title="Our Services" subtitle="Comprehensive IT solutions engineered for enterprise scale, security, and performance." />

      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader eyebrow="What We Do" title="Services Built for Scale" subtitle="End-to-end technology solutions that drive measurable business outcomes." centered />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operations.map((op, i) => {
              const Icon = iconMap[op.icon] || Search
              return (
                <ScrollReveal key={op.title} direction="up" delay={i * 0.1}>
                  <GlowCard glowColor="#4F46E5" className="h-full">
                    <div className="w-12 h-12 rounded-xl bg-accent-indigo/15 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent-indigo" />
                    </div>
                    <h3 className="font-display font-semibold text-text-primary text-lg mb-2">{op.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{op.desc}</p>
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
