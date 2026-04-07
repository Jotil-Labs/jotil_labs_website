'use client'

import { MessageSquare, Zap, Calendar, Webhook, CreditCard, Database } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

/**
 * For integrations without a clean single Lucide match we use a compact
 * text abbreviation rendered inside the same square container.
 */
const INTEGRATIONS = [
  {
    label: 'Twilio',
    icon: null,
    abbrev: 'TW',
    color: '#F22F46',
  },
  {
    label: 'OpenAI',
    icon: null,
    abbrev: 'AI',
    color: '#10A37F',
  },
  {
    label: 'Slack',
    icon: null,
    abbrev: 'SL',
    color: '#4A154B',
  },
  {
    label: 'HubSpot',
    icon: null,
    abbrev: 'HS',
    color: '#FF7A59',
  },
  {
    label: 'Salesforce',
    icon: null,
    abbrev: 'SF',
    color: '#00A1E0',
  },
  {
    label: 'Google Calendar',
    icon: Calendar,
    color: '#4285F4',
  },
  {
    label: 'Teams',
    icon: null,
    abbrev: 'MT',
    color: '#6264A7',
  },
  {
    label: 'Zapier',
    icon: Zap,
    color: '#FF4A00',
  },
  {
    label: 'WhatsApp',
    icon: MessageSquare,
    color: '#25D366',
  },
  {
    label: 'Stripe',
    icon: CreditCard,
    color: '#635BFF',
  },
  {
    label: 'Airtable',
    icon: Database,
    color: '#18BFFF',
  },
  {
    label: 'Webhooks',
    icon: Webhook,
    color: '#3B7BF2',
  },
]

export function IntegrationStrip() {
  return (
    <section className="py-24" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <AnimatedSection className="text-center mb-14">
          <p className="badge mx-auto mb-4 w-fit">Integrations</p>
          <h2
            className="text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold tracking-[-0.04em] text-text mb-4"
            style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
          >
            Connects with the tools{' '}
            <span className="text-gradient">you already use</span>
          </h2>
          <p
            className="text-base text-text-secondary leading-relaxed max-w-md mx-auto"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            Plug Jotil into your existing stack in minutes. No ripping and
            replacing. Just seamless AI on top of what you already have.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 max-w-3xl mx-auto">
          {INTEGRATIONS.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.04}>
              <IntegrationItem item={item} />
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom note */}
        <AnimatedSection delay={0.5} className="text-center mt-10">
          <p
            className="text-sm text-text-secondary"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            Plus any REST API via native webhook support
          </p>
        </AnimatedSection>

      </div>
    </section>
  )
}

function IntegrationItem({ item }) {
  const { label, icon: Icon, abbrev, color } = item

  return (
    <div className="flex flex-col items-center gap-2.5 group cursor-default">
      {/* Icon container */}
      <div
        className="w-full aspect-square rounded-[14px] flex items-center justify-center transition-all duration-200"
        style={{
          background: 'var(--color-bg-alt)',
          border: '1px solid rgba(0,0,0,0.05)',
          minHeight: 56,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = `${color}10`
          e.currentTarget.style.borderColor = `${color}28`
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = `0 6px 20px ${color}18`
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'var(--color-bg-alt)'
          e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {Icon ? (
          <Icon size={22} strokeWidth={1.6} style={{ color }} />
        ) : (
          <span
            className="text-[11px] font-bold"
            style={{
              color,
              fontFamily: 'var(--font-outfit), Outfit, sans-serif',
              letterSpacing: '0.03em',
            }}
          >
            {abbrev}
          </span>
        )}
      </div>

      {/* Label */}
      <span
        className="text-[11px] text-center leading-tight text-text-secondary"
        style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
      >
        {label}
      </span>
    </div>
  )
}
