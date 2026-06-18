import { useState } from 'react'
import { toast } from 'react-hot-toast'
import * as Icons from 'lucide-react'
import { PageHero, ScrollReveal } from '../components/sections'
import { GlowCard, Badge, Button } from '../components/ui'
import { SectionHeader } from '../components/ui'
import { supabase } from '../lib/supabase'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Valid email required'
    if (!formData.message.trim() || formData.message.length < 20) errs.message = 'Message must be at least 20 characters'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) {
      toast.error('Please fix the errors below')
      return
    }
    setSubmitting(true)

    const { error } = await supabase
      .from('contact_submissions')
      .insert([{
        full_name: formData.name,
        email: formData.email,
        company: formData.company || null,
        service_interest: formData.service || null,
        budget: formData.budget || null,
        message: formData.message,
      }])

    if (error) {
      toast.error('Submission failed. Please try again.')
      console.error(error)
    } else {
      toast.success('Message sent! We will contact you within 24 hours.')
      setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' })
    }
    setSubmitting(false)
  }

  const inputCls = 'w-full bg-white border border-[rgba(79,70,229,0.2)] rounded-lg py-3 px-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo transition-all'

  return (
    <div>
      <PageHero title="Let's Build Something Great" subtitle="Connect with our team to discuss your next project." />

      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            <ScrollReveal className="lg:col-span-3">
              <GlowCard glowColor="#4F46E5" className="p-8">
                <h3 className="font-display font-semibold text-text-primary text-2xl mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-text-primary text-sm mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className={`${inputCls} ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-text-primary text-sm mb-2">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className={`${inputCls} ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="yourname@company.in"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-text-primary text-sm mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className={inputCls}
                      placeholder="Your company"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-text-primary text-sm mb-2">Service Interest</label>
                      <select
                        value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                        className={inputCls}
                      >
                        <option value="">Select a service</option>
                        <option>Cloud Architecture</option>
                        <option>Cybersecurity</option>
                        <option>AI & ML</option>
                        <option>Infrastructure</option>
                        <option>Custom Software</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-text-primary text-sm mb-2">Budget</label>
                      <select
                        value={formData.budget}
                        onChange={e => setFormData({ ...formData, budget: e.target.value })}
                        className={inputCls}
                      >
                        <option value="">Select budget</option>
                        <option>&lt;$10k</option>
                        <option>$10k–50k</option>
                        <option>$50k–200k</option>
                        <option>$200k+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-text-primary text-sm mb-2">Message *</label>
                    <textarea
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className={`${inputCls} resize-none ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <Button variant="primary" size="lg" className="w-full" disabled={submitting}>
                    {submitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </GlowCard>
            </ScrollReveal>

            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="grid gap-4">
                  {[
                    { icon: Icons.Mail, title: 'Email', value: 'info@viprove.in' },
                    { icon: Icons.Phone, title: 'Phone', value: '+91 40 6800 1234' },
                    { icon: Icons.MapPin, title: 'Office', value: 'Plot No. 12, HITEC City, Madhapur, Hyderabad, Telangana - 500081' },
                  ].map(item => (
                    <GlowCard key={item.title} glowColor="#4F46E5" className="flex items-center gap-4 p-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-indigo/15 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-accent-indigo" />
                      </div>
                      <div>
                        <div className="text-text-muted text-xs">{item.title}</div>
                        <div className="text-text-primary font-medium text-sm">{item.value}</div>
                      </div>
                    </GlowCard>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <GlowCard glowColor="#0891B2" className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Icons.Clock className="w-5 h-5 text-accent-cyan" />
                    <span className="text-text-primary font-medium">Office Hours</span>
                  </div>
                  <p className="text-text-secondary text-sm">Mon–Fri: 9:00 AM – 6:30 PM IST<br />Saturday: 10:00 AM – 2:00 PM IST</p>
                </GlowCard>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <GlowCard className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 dot-grid-bg opacity-30" />
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <Icons.MapPin className="w-8 h-8 text-accent-indigo mb-2" />
                    <span className="text-text-secondary text-sm ml-2">HITEC City, Hyderabad, India</span>
                  </div>
                </GlowCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}