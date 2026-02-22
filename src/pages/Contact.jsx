import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight, Clock, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { GlassCard } from '../components/ui/GlassCard'
import { IconBox } from '../components/ui/IconBox'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Button } from '../components/ui/Button'
import { Aurora } from '../components/ui/backgrounds/Aurora'

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

const FAQ_ITEMS = [
  {
    question: 'How long does setup take?',
    answer: 'Most businesses are live within a few hours. Our team handles integration with your existing phone system, website, and CRM — no code changes required on your end.',
  },
  {
    question: 'Do I need technical expertise?',
    answer: 'Not at all. Jotil Labs is designed for business operators, not developers. We handle the technical setup and provide a simple dashboard to manage everything.',
  },
  {
    question: 'Is Jotil Labs TCPA compliant?',
    answer: 'Yes. All our voice and SMS products are built with TCPA compliance at the core, including proper opt-in/opt-out handling, AI disclosure, and consent management.',
  },
  {
    question: 'Can I try before I commit?',
    answer: 'Absolutely. We offer personalized demos and pilot programs so you can see the impact on your business before making a decision. Book a demo to get started.',
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <GlassCard hover={false} className="!p-0 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer bg-transparent border-none"
      >
        <span className="text-sm font-medium text-text">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown size={16} strokeWidth={1.5} className="text-text-secondary" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-4">
              <p className="text-sm text-text-secondary leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  )
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    message: '',
  })

  const [openFAQ, setOpenFAQ] = useState(null)

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
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Aurora />
          <div
            className="absolute w-[500px] h-[500px] opacity-20"
            style={{
              top: '5%',
              left: '65%',
              background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, transparent 60%)',
              filter: 'blur(100px)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection blur>
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] text-text mt-3 leading-tight">
              Let&apos;s Build Something{' '}
              <span className="text-gradient">Together</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary mt-5 max-w-xl mx-auto leading-[1.8]">
              Whether you need a demo, have a question, or want to discuss a custom
              solution — we would love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <GlassCard premium className="p-8 sm:p-10">
                <h2 className="text-xl font-semibold text-text mb-8">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-2" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/60 border border-border rounded-[10px] px-4 py-3 text-sm text-text placeholder:text-text-secondary/50 outline-none focus:border-primary/30 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.06)] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-2" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/60 border border-border rounded-[10px] px-4 py-3 text-sm text-text placeholder:text-text-secondary/50 outline-none focus:border-primary/30 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.06)] transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-2" htmlFor="company">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-white/60 border border-border rounded-[10px] px-4 py-3 text-sm text-text placeholder:text-text-secondary/50 outline-none focus:border-primary/30 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.06)] transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-2" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/60 border border-border rounded-[10px] px-4 py-3 text-sm text-text placeholder:text-text-secondary/50 outline-none focus:border-primary/30 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.06)] transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2" htmlFor="inquiryType">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full bg-white/60 border border-border rounded-[10px] px-4 py-3 text-sm text-text outline-none focus:border-primary/30 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.06)] transition-all cursor-pointer"
                    >
                      <option value="">Select an option</option>
                      {INQUIRY_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white/60 border border-border rounded-[10px] px-4 py-3 text-sm text-text placeholder:text-text-secondary/50 outline-none focus:border-primary/30 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.06)] transition-all resize-none"
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
            <AnimatedSection delay={0.15} className="lg:col-span-2 space-y-6">
              {/* Contact info */}
              <GlassCard premium>
                <h3 className="text-lg font-semibold text-text mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  {CONTACT_INFO.map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <IconBox size="sm" glow>
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
                className="rounded-[20px] p-7 text-white relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #2563EB 0%, #4F46E5 50%, #6366F1 100%)' }}
              >
                <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2">Book a Demo</h3>
                  <p className="text-sm text-white/60 mb-6 leading-relaxed">
                    See Jotil Labs in action. Get a personalized walkthrough of our
                    AI voice agents and automation tools.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-white px-5 py-2.5 rounded-[10px] border-none no-underline hover:bg-white/90 transition-colors shadow-lg"
                  >
                    Schedule Now
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection blur className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-text">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AnimatedSection key={item.question} delay={i * 0.06}>
                <FAQItem
                  item={item}
                  isOpen={openFAQ === i}
                  onToggle={() => setOpenFAQ(openFAQ === i ? null : i)}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
