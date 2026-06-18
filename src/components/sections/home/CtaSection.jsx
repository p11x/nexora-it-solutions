import { Hexagon, Square } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #0891B2 100%)',
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 8s ease infinite',
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rotate-45" style={{ animation: 'float 8s ease-in-out infinite' }} />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/10 rotate-12" style={{ animation: 'float 6s ease-in-out infinite 1s' }} />
        <Hexagon className="absolute top-20 right-1/4 w-16 h-16 text-white/10" style={{ animation: 'spin-slow 20s linear infinite' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to Build the Future?
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss your project and explore how Viprove can help you achieve your technology goals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/contact">
            <button className="px-8 py-4 bg-white text-accent-indigo font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              Start Your Project
            </button>
          </a>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  )
}
