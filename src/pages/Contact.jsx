import { useState } from 'react'
import { Mail, Phone, MapPin, ArrowRight, Clock } from 'lucide-react'
import { GlassCard } from '../components/ui/GlassCard'
import { IconBox } from '../components/ui/IconBox'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Button } from '../components/ui/Button'

const INQUIRY_TYPES = [
  'General Inquiry',
  'Product Demo',
  'Enterprise Sales',
  'Technical Support',
  'Partnership',
]

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'support@jotillabs.com', href: 'mailto:support@jotillabs.com' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, label: 'Location', value: 'New York, NY', href: null },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to backend API
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute w-[400px] h-[400px] opacity-20"
            style={{
              top: '10%',
              left: '70%',
              background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-[-0.03em] text-text mt-3">
              Let&apos;s Build Something{' '}
              <span className="text-gradient">Together</span>
            </h1>
            <p className="text-lg text-text-secondary mt-4 max-w-xl mx-auto">
              Whether you need a demo, have a question, or want to discuss a custom
              solution — we would love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <GlassCard className="p-8">
                <h2 className="text-xl font-semibold text-text mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/60 border border-border rounded-[10px] px-4 py-3 text-sm text-text placeholder:text-text-secondary/50 outline-none focus:border-border-hover transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/60 border border-border rounded-[10px] px-4 py-3 text-sm text-text placeholder:text-text-secondary/50 outline-none focus:border-border-hover transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5" htmlFor="company">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-white/60 border border-border rounded-[10px] px-4 py-3 text-sm text-text placeholder:text-text-secondary/50 outline-none focus:border-border-hover transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/60 border border-border rounded-[10px] px-4 py-3 text-sm text-text placeholder:text-text-secondary/50 outline-none focus:border-border-hover transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5" htmlFor="inquiryType">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full bg-white/60 border border-border rounded-[10px] px-4 py-3 text-sm text-text outline-none focus:border-border-hover transition-colors cursor-pointer"
                    >
                      <option value="">Select an option</option>
                      {INQUIRY_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white/60 border border-border rounded-[10px] px-4 py-3 text-sm text-text placeholder:text-text-secondary/50 outline-none focus:border-border-hover transition-colors resize-none"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send Message
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </Button>
                </form>
              </GlassCard>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={0.2} className="lg:col-span-2 space-y-5">
              {/* Contact info */}
              <GlassCard>
                <h3 className="text-lg font-semibold text-text mb-5">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {CONTACT_INFO.map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <IconBox size="sm">
                        <item.icon size={18} strokeWidth={1.5} className="text-primary" />
                      </IconBox>
                      <div>
                        <p className="text-xs text-text-secondary">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium text-text no-underline hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-text">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Book a Demo card */}
              <div
                className="rounded-[20px] p-6 text-white"
                style={{ background: 'linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)' }}
              >
                <h3 className="text-lg font-semibold mb-2">Book a Demo</h3>
                <p className="text-sm text-white/70 mb-5 leading-relaxed">
                  See Jotil Labs in action. Get a personalized walkthrough of our
                  AI voice agents and automation tools.
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-white px-5 py-2.5 rounded-[10px] border-none cursor-pointer hover:bg-white/90 transition-colors">
                  Schedule Now
                  <ArrowRight size={14} strokeWidth={1.5} />
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
