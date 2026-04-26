'use client'

import { motion } from 'framer-motion'
import { Plug, SlidersHorizontal, Zap } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const STEPS = [
  {
    number: '01',
    icon: Plug,
    title: 'Connect',
    desc: 'Link your phone numbers, website, and tools. No code required.',
    color: '#3859a8',
    colorAlpha: 'rgba(56, 89, 168,0.10)',
  },
  {
    number: '02',
    icon: SlidersHorizontal,
    title: 'Configure',
    desc: 'Tell the AI about your business. Train it on your FAQs and workflows.',
    color: '#3B82F6',
    colorAlpha: 'rgba(59, 130, 246,0.10)',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Automate',
    desc: 'Go live. Your AI handles calls, chats, and follow-ups around the clock.',
    color: '#3B82F6',
    colorAlpha: 'rgba(59, 130, 246,0.10)',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <AnimatedSection className="text-center mb-16">
          <p className="badge mx-auto mb-4 w-fit">How it works</p>
          <h2
            className="text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold tracking-[-0.04em] text-text mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Up and running in{' '}
            <span className="text-gradient">hours, not months</span>
          </h2>
          <p
            className="text-base text-text-secondary leading-relaxed max-w-md mx-auto"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            Three straightforward steps stand between you and a fully automated
            communication layer.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="relative flex flex-col lg:flex-row gap-0 lg:gap-0 items-stretch">

          {STEPS.map((step, i) => (
            <div key={step.number} className="flex-1 flex flex-col lg:flex-row items-stretch">

              {/* Step card */}
              <AnimatedSection delay={i * 0.12} className="flex-1">
                <StepCard step={step} index={i} />
              </AnimatedSection>

              {/* Connector — visible between steps on desktop */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:flex items-center justify-center w-14 shrink-0 self-center">
                  <Connector />
                </div>
              )}

              {/* Vertical connector for mobile */}
              {i < STEPS.length - 1 && (
                <div className="lg:hidden flex justify-center my-3">
                  <div
                    className="w-px h-10"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(56, 89, 168,0.25), rgba(59, 130, 246,0.15))',
                    }}
                  />
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function StepCard({ step, index }) {
  const { number, icon: Icon, title, desc, color, colorAlpha } = step

  return (
    <div
      className="h-full p-8 rounded-[20px] flex flex-col gap-5 transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(16px) saturate(1.8)',
        WebkitBackdropFilter: 'blur(16px) saturate(1.8)',
        border: '1px solid rgba(255,255,255,0.70)',
        boxShadow: '0 2px 8px rgba(15,17,41,0.04), inset 0 1px 0 rgba(255,255,255,0.95)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.70)'
        e.currentTarget.style.boxShadow = `0 16px 48px ${color}14, 0 4px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1)`
        e.currentTarget.style.borderColor = `${color}25`
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.55)'
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(15,17,41,0.04), inset 0 1px 0 rgba(255,255,255,0.95)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.70)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Step number */}
      <span
        className="text-[3.5rem] font-extrabold leading-none select-none"
        style={{
          fontFamily: 'var(--font-jetbrains), JetBrains Mono, monospace',
          background: `linear-gradient(135deg, ${color}, ${color}55)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.04em',
        }}
      >
        {number}
      </span>

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-[12px] flex items-center justify-center"
        style={{ background: colorAlpha, border: `1px solid ${color}22` }}
      >
        <Icon size={20} strokeWidth={1.75} style={{ color }} />
      </div>

      {/* Title */}
      <div>
        <h3
          className="text-lg font-bold text-text mb-2 tracking-[-0.025em]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {title}
        </h3>
        <p
          className="text-sm text-text-secondary leading-relaxed"
          style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
        >
          {desc}
        </p>
      </div>
    </div>
  )
}

function Connector() {
  return (
    <div className="flex flex-col items-center gap-1">
      {/* Dashed line */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="rounded-full"
          style={{
            width: 3,
            height: 3,
            background: i % 2 === 0
              ? 'rgba(56, 89, 168,0.30)'
              : 'rgba(59, 130, 246,0.15)',
          }}
        />
      ))}
      {/* Arrow tip */}
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <path
          d="M2 2L8 5L2 8"
          stroke="rgba(56, 89, 168,0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
