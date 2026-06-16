import { lazy, Suspense } from 'react'
import { PageHero } from '../components/sections/shared/PageHero'

const HeroSection = lazy(() => import('../components/sections/home/HeroSection').then(m => ({ default: m.HeroSection })))
const StatsSection = lazy(() => import('../components/sections/home/StatsSection').then(m => ({ default: m.StatsSection })))
const FeaturedServices = lazy(() => import('../components/sections/home/FeaturedServices').then(m => ({ default: m.FeaturedServices })))
const TechStack = lazy(() => import('../components/sections/home/TechStack').then(m => ({ default: m.TechStack })))
const Testimonials = lazy(() => import('../components/sections/home/Testimonials').then(m => ({ default: m.Testimonials })))
const CtaSection = lazy(() => import('../components/sections/home/CtaSection').then(m => ({ default: m.CtaSection })))

function SectionLoader() {
  return (
    <div className="min-h-[200px] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-accent-indigo border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <Suspense fallback={<SectionLoader />}><HeroSection /></Suspense>
      <Suspense fallback={<SectionLoader />}><StatsSection /></Suspense>
      <Suspense fallback={<SectionLoader />}><FeaturedServices /></Suspense>
      <Suspense fallback={<SectionLoader />}><TechStack /></Suspense>
      <Suspense fallback={<SectionLoader />}><Testimonials /></Suspense>
      <Suspense fallback={<SectionLoader />}><CtaSection /></Suspense>
    </div>
  )
}

export default Home
