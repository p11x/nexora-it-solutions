import { lazy } from 'react'

export { ParticleCanvas } from '../ui/ParticleCanvas'
export { ScrollReveal } from '../ui/ScrollReveal'

export { PageHero } from './shared/PageHero'

const StatsSection = lazy(() => import('./home/StatsSection').then(m => ({ default: m.StatsSection })))
const FeaturedServices = lazy(() => import('./home/FeaturedServices').then(m => ({ default: m.FeaturedServices })))
const TechStack = lazy(() => import('./home/TechStack').then(m => ({ default: m.TechStack })))
const Testimonials = lazy(() => import('./home/Testimonials').then(m => ({ default: m.Testimonials })))
const CtaSection = lazy(() => import('./home/CtaSection').then(m => ({ default: m.CtaSection })))
const HeroSection = lazy(() => import('./home/HeroSection').then(m => ({ default: m.HeroSection })))

export { StatsSection, FeaturedServices, TechStack, Testimonials, CtaSection, HeroSection }
