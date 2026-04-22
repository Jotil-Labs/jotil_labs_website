'use client'

import { Phone, Shield, Users, Clock } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CountUp } from '@/components/ui/CountUp'

const STATS = [
  {
    end: 80,
    suffix: '%',
    label: 'Fewer missed calls for our clients',
    icon: Phone,
    color: '#3859a8',
    colorAlpha: 'rgba(56, 89, 168,0.10)',
  },
  {
    end: 3,
    prefix: '<',
    suffix: 's',
    label: 'Average customer response time',
    icon: Shield,
    color: '#3B82F6',
    colorAlpha: 'rgba(59, 130, 246,0.10)',
  },
  {
    end: 12,
    suffix: '+',
    label: 'Hours saved per week, per team',
    icon: Users,
    color: '#3B82F6',
    colorAlpha: 'rgba(59, 130, 246,0.10)',
  },
  {
    end: 4,
    suffix: 'hr',
    label: 'From signup to live, on average',
    icon: Clock,
    color: '#3859a8',
    colorAlpha: 'rgba(56, 89, 168,0.10)',
  },
]

export function Stats() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Optional section label */}
        <AnimatedSection className="text-center mb-12">
          <p
            className="text-[11px] font-semibold tracking-[0.14em] uppercase"
            style={{
              color: 'var(--color-text-secondary)',
              fontFamily: 'var(--font-display)',
            }}
          >
            Results that speak for themselves
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {STATS.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.08}>
              <StatCard stat={stat} />
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}

function StatCard({ stat }) {
  const { end, suffix, decimals = 0, label, icon: Icon, color, colorAlpha } = stat

  return (
    <div
      className="rounded-[20px] p-5 sm:p-7 flex flex-col gap-3 sm:gap-4 transition-all duration-300"
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(0,0,0,0.05)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = `0 12px 40px ${color}14, 0 4px 12px rgba(0,0,0,0.04)`
        e.currentTarget.style.borderColor = `${color}20`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'
      }}
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-[11px] flex items-center justify-center"
        style={{ background: colorAlpha, border: `1px solid ${color}22` }}
      >
        <Icon size={18} strokeWidth={1.75} style={{ color }} />
      </div>

      {/* Number */}
      <div>
        <p
          className="text-[clamp(2rem,4vw,2.75rem)] font-extrabold leading-none tracking-[-0.04em] text-gradient"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <CountUp end={end} suffix={suffix} decimals={decimals} duration={2.2} />
        </p>

        {/* Label */}
        <p
          className="text-sm text-text-secondary mt-2 leading-snug"
          style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
        >
          {label}
        </p>
      </div>
    </div>
  )
}
