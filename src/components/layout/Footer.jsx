import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '../ui/ScrollReveal'
import { supabase } from '../../lib/supabase'
import { toast } from 'react-hot-toast'
import AnimatedLogo from '../ui/AnimatedLogo'

const socialLinks = [
  {
    label: 'Twitter',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
]

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    if (!newsletterEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error('Enter a valid email')
      return
    }

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email: newsletterEmail }])

    if (error?.code === '23505') {
      toast('You are already subscribed!', { icon: 'ℹ️' })
    } else if (error) {
      toast.error('Subscription failed. Try again.')
    } else {
      toast.success('Subscribed! Welcome to Viprove Infotech updates.')
      setNewsletterEmail('')
    }
  }

  return (
    <footer className="relative bg-[#E8EEFF] border-t border-[rgba(79,70,229,0.15)] overflow-hidden">
      <div className="absolute inset-0 dot-grid-bg opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <ScrollReveal>
            <div className="lg:col-span-1">
              <AnimatedLogo size="md" showText={true} linkTo="/" />
              <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-xs pt-2">
                Engineering tomorrow's infrastructure today. Empowering enterprises with cutting-edge cloud, security, and AI solutions.
              </p>
              <div className="flex gap-4">
                {socialLinks.map(({ label, svg }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="p-2 rounded-lg bg-bg-elevated text-text-muted hover:text-accent-indigo hover:scale-110 transition-all duration-300"
                  >
                    {svg}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div>
              <h4 className="font-display font-semibold text-text-primary mb-4">Company</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Careers', 'Blog', 'Press'].map((link) => (
                  <li key={link}>
                    <Link
                      to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                      className="text-text-secondary hover:text-accent-indigo transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h4 className="font-display font-semibold text-text-primary mb-4">Services</h4>
              <ul className="space-y-3">
                {['Cloud', 'Security', 'AI/ML', 'Infrastructure', 'Consulting'].map((link) => (
                  <li key={link}>
                    <Link
                      to="/services"
                      className="text-text-secondary hover:text-accent-indigo transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div>
              <h4 className="font-display font-semibold text-text-primary mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li>HITEC City, Hyderabad, Telangana - 500081, India</li>
                <li>
                  <a href="mailto:info@viprove.in" className="hover:text-accent-indigo transition-colors">
                    info@viprove.in
                  </a>
                </li>
                <li>+1 (555) 123-4567</li>
              </ul>
              <form onSubmit={handleNewsletterSubmit} className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white border border-[rgba(79,70,229,0.2)] rounded-lg px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-indigo transition-colors"
                />
                <button className="px-4 py-2 bg-accent-indigo hover:bg-indigo-400 text-white text-sm rounded-lg transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="relative border-t border-[rgba(79,70,229,0.15)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © 2024 Viprove Infotech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-muted">
            <Link to="#" className="hover:text-accent-indigo transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-accent-indigo transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-accent-indigo transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}