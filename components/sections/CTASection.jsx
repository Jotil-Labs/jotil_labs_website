'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, PhoneCall } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function CTASection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #3B7BF2 0%, #1B4FBA 50%, #6366F1 100%)',
      }}
    >
      {/* Dot pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Ambient glow orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: '-20%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          bottom: '-15%',
          left: '-8%',
          background: 'radial-gradient(circle, rgba(59,123,242,0.30) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <AnimatedSection>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.20)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-white"
              style={{ opacity: 0.85 }}
            />
            <span
              className="text-[11px] font-semibold text-white tracking-[0.1em] uppercase"
              style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif', opacity: 0.9 }}
            >
              Get started today
            </span>
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={0.07}>
          <h2
            className="text-white font-extrabold tracking-[-0.04em] mb-6"
            style={{
              fontFamily: 'var(--font-outfit), Outfit, sans-serif',
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              lineHeight: 1.1,
            }}
          >
            Stop losing customers{'\u00A0'}
            <br className="hidden sm:block" />
            to missed conversations.
          </h2>
        </AnimatedSection>

        {/* Sub-copy */}
        <AnimatedSection delay={0.13}>
          <p
            className="text-[1.05rem] leading-[1.75] mb-10 max-w-xl mx-auto"
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              color: 'rgba(255,255,255,0.72)',
            }}
          >
            Join hundreds of businesses already using Jotil to handle calls,
            chats, and follow-ups. 24/7, without extra headcount.
          </p>
        </AnimatedSection>

        {/* CTAs */}
        <AnimatedSection delay={0.18}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Primary: white bg */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 no-underline text-sm font-semibold rounded-[11px] px-6 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              style={{
                fontFamily: 'var(--font-outfit), Outfit, sans-serif',
                background: '#FFFFFF',
                color: 'var(--color-primary)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              }}
            >
              Book a Demo
              <ArrowRight size={15} strokeWidth={2} />
            </Link>

            {/* Secondary: frosted */}
            <Link
              href="/products/receptionist"
              className="inline-flex items-center gap-2 no-underline text-sm font-semibold text-white rounded-[11px] px-6 py-3.5 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              style={{
                fontFamily: 'var(--font-outfit), Outfit, sans-serif',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.22)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <PhoneCall size={15} strokeWidth={1.75} />
              Talk to Our AI
            </Link>
          </div>
        </AnimatedSection>

        {/* Trust note */}
        <AnimatedSection delay={0.24}>
          <p
            className="mt-8 text-[12px]"
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              color: 'rgba(255,255,255,0.45)',
            }}
          >
            No credit card required. Setup in under a day.
          </p>
        </AnimatedSection>

      </div>
    </section>
  )
}
