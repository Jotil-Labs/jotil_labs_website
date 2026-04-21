'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'

const TESTIMONIALS = [
  {
    quote:
      'We cut missed calls by 80% in the first month. Patients get scheduled instantly now, even at 2am.',
    name: 'Sarah M.',
    role: 'Practice Manager',
    company: 'Meridian Health',
    initials: 'SM',
    avatarColor: '#3859a8',
  },
  {
    quote:
      'We were skeptical AI could handle our complex inquiries. It handles them better than most of our staff.',
    name: 'James T.',
    role: 'CEO',
    company: 'Apex Realty Group',
    initials: 'JT',
    avatarColor: '#3B82F6',
  },
  {
    quote:
      'The ROI was clear in week one. AI-powered outreach is now our highest-performing lead channel.',
    name: 'Rachel K.',
    role: 'VP Sales',
    company: 'Summit Finance',
    initials: 'RK',
    avatarColor: '#3B82F6',
  },
]

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <AnimatedSection className="text-center mb-14">
          <p className="badge mx-auto mb-4 w-fit">Testimonials</p>
          <h2
            className="text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold tracking-[-0.04em] text-text"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            What our{' '}
            <span className="text-gradient">clients say</span>
          </h2>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.09}>
              <TestimonialCard testimonial={t} />
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }) {
  const { quote, name, role, company, initials, avatarColor } = testimonial

  return (
    <div
      className="card-premium flex flex-col gap-5 h-full"
      style={{ padding: '28px 28px 24px' }}
    >
      {/* Decorative quote mark */}
      <div
        aria-hidden="true"
        className="font-extrabold leading-none select-none"
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: 72,
          lineHeight: 0.7,
          background: 'linear-gradient(135deg, rgba(56, 89, 168,0.14), rgba(59, 130, 246,0.08))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.03em',
        }}
      >
        &ldquo;
      </div>

      {/* Quote */}
      <blockquote
        className="flex-1 text-[15px] text-text leading-[1.7]"
        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
      >
        {quote}
      </blockquote>

      {/* Divider */}
      <div className="gradient-divider" />

      {/* Author */}
      <div className="flex items-center gap-3 pt-1">
        {/* Avatar */}
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold"
          style={{
            background: `linear-gradient(135deg, ${avatarColor}, ${avatarColor}cc)`,
            fontFamily: 'var(--font-display)',
            letterSpacing: '0.02em',
          }}
        >
          {initials}
        </div>

        <div>
          <p
            className="text-[13px] font-semibold text-text leading-none tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {name}
          </p>
          <p
            className="text-[12px] text-text-secondary mt-1 leading-none"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  )
}
