import { motion } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'
import { AnimatedSection } from '../ui/AnimatedSection'

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

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-text mt-3">
            Trusted by Growing Businesses
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((testimonial, i) => (
            <AnimatedSection key={testimonial.name} delay={i * 0.08}>
              <GlassCard className="h-full flex flex-col">
                <p className="text-sm text-text leading-relaxed flex-1 mb-5">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center text-white text-sm font-semibold shrink-0">
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
