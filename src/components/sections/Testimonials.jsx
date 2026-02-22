import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { GlassCard } from '../ui/GlassCard'

const TESTIMONIALS = [
  {
    quote: 'Jotil Labs cut our missed calls by 90%. The AI receptionist sounds so natural that most callers have no idea they are talking to AI.',
    name: 'Sarah Mitchell',
    role: 'Operations Director',
    company: 'Greenfield Dental Group',
  },
  {
    quote: 'We went from 3 full-time receptionists to 1, and our customer satisfaction scores actually went up. The ROI was immediate.',
    name: 'David Chen',
    role: 'CEO',
    company: 'Apex Property Management',
  },
  {
    quote: 'The SMS automation alone saved our team 15 hours a week on appointment reminders. Setup was incredibly fast.',
    name: 'Maria Gonzalez',
    role: 'Practice Manager',
    company: 'Valley Health Clinic',
  },
  {
    quote: 'We needed something that could handle our call volume during peak hours. Jotil\'s AI handles 200+ calls a day without breaking a sweat.',
    name: 'James Wright',
    role: 'VP of Operations',
    company: 'Sterling Auto Group',
  },
  {
    quote: 'The AI chatbot captures 3x more leads than our old contact form. It qualifies prospects before they even reach our sales team.',
    name: 'Priya Sharma',
    role: 'Marketing Director',
    company: 'NovaTech Solutions',
  },
  {
    quote: 'What impressed me most was how quickly the AI learned our business context. Within a week, it was handling 80% of inquiries autonomously.',
    name: 'Robert Torres',
    role: 'Founder',
    company: 'BrightPath Financial',
  },
]

function QuoteIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mb-4 opacity-15">
      <path
        d="M10.5 18.5C10.5 21.5 8.5 24 5 24V21.5C7 21.5 8 20 8 18.5H5V12H12V18.5H10.5ZM23.5 18.5C23.5 21.5 21.5 24 18 24V21.5C20 21.5 21 20 21 18.5H18V12H25V18.5H23.5Z"
        fill="#2563EB"
      />
    </svg>
  )
}

function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <GlassCard premium className="h-full flex flex-col">
        <QuoteIcon />
        <p className="text-sm text-text leading-[1.8] flex-1 mb-6">
          {testimonial.quote}
        </p>
        <div className="flex items-center gap-3 pt-4 border-t border-border/40">
          <div className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center text-white text-xs font-bold shrink-0">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="text-sm font-semibold text-text">
              {testimonial.name}
            </p>
            <p className="text-xs text-text-secondary">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}

export function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection blur className="text-center mb-14">
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-[40px] font-bold tracking-[-0.03em] text-text mt-3 leading-tight">
            Trusted by{' '}
            <span className="text-gradient">Growing Businesses</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
