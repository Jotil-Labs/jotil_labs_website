import Link from 'next/link'
import {
  HeartPulse,
  Home,
  Scale,
  UtensilsCrossed,
  TrendingUp,
  ShoppingCart,
  ArrowRight,
} from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Badge } from '@/components/ui/Badge'

export const metadata = {
  title: 'Use Cases & Industry Solutions',
  description:
    'See how JotilLabs AI voice agents, chatbots, and SMS automation solve real problems across healthcare, real estate, legal, hospitality, finance, and e-commerce.',
}

const INDUSTRIES = [
  {
    icon: HeartPulse,
    name: 'Healthcare',
    color: '#0EA5E9',
    painPoints: [
      'Book and reschedule appointments without adding front desk staff',
      'Send patient follow-ups and reminders automatically',
      'Answer after-hours calls so no patient is left waiting',
    ],
    products: ['JotilReceptionist', 'JotilMessenger'],
    stat: 'Up to 80% reduction in missed calls',
  },
  {
    icon: Home,
    name: 'Real Estate',
    color: '#3B7BF2',
    painPoints: [
      'Qualify leads automatically before your agents spend time on them',
      'Answer property listing questions 24/7, even on weekends',
      'Let buyers book property tours without back-and-forth calls',
    ],
    products: ['JotilReceptionist', 'JotilOutreach', 'JotilMessenger'],
    stat: '3x more qualified leads per agent',
  },
  {
    icon: Scale,
    name: 'Legal',
    color: '#6366F1',
    painPoints: [
      'Capture case details on the first call, before the consult even starts',
      'Let potential clients book consultations without tying up staff time',
      'Answer common process questions so your team focuses on billable work',
    ],
    products: ['JotilReceptionist', 'JotilMessenger', 'JotilSpace'],
    stat: '60% of intakes handled without staff',
  },
  {
    icon: UtensilsCrossed,
    name: 'Hospitality',
    color: '#F59E0B',
    painPoints: [
      'Handle reservations and availability questions by phone or text',
      'Answer guest inquiries during peak hours without extra staff',
      'Automatically follow up after each stay to collect reviews',
    ],
    products: ['JotilReceptionist', 'JotilMessenger', 'JotilOutreach'],
    stat: '40% fewer front-desk interruptions',
  },
  {
    icon: TrendingUp,
    name: 'Finance',
    color: '#10B981',
    painPoints: [
      'Qualify prospects before they reach your advisors or brokers',
      'Let clients book meetings that sync directly with advisor calendars',
      'Send compliant text follow-ups with built-in opt-in management',
    ],
    products: ['JotilReceptionist', 'JotilOutreach', 'JotilSpace'],
    stat: 'Up to 70% reduction in no-show appointments',
  },
  {
    icon: ShoppingCart,
    name: 'E-commerce',
    color: '#EC4899',
    painPoints: [
      'Keep customers updated on order status automatically by text',
      'Recover abandoned carts with well-timed follow-up messages',
      'Handle returns, tracking, and common questions without staff',
    ],
    products: ['JotilMessenger', 'JotilOutreach', 'JotilFlow'],
    stat: '25% cart recovery rate with AI follow-up',
  },
]

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div
          className="pointer-events-none absolute top-[-140px] right-[-100px] rounded-full"
          aria-hidden="true"
          style={{
            width: 580,
            height: 580,
            background: 'radial-gradient(circle, rgba(59,123,242,0.09) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="pointer-events-none absolute bottom-[-60px] left-[-80px] rounded-full"
          aria-hidden="true"
          style={{
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <Badge variant="blue" className="mb-6">Industry Solutions</Badge>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h1
              className="font-extrabold tracking-[-0.04em] leading-[1.06] text-text mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.75rem)' }}
            >
              AI Solutions for{' '}
              <span className="text-gradient">Every Industry</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.14}>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              From a two-person medical practice to a regional real estate firm, JotilLabs adapts to the specific communication challenges of your industry. Stop losing business to unanswered calls and slow follow-ups.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="gradient-divider max-w-6xl mx-auto" />

      {/* ── Industry Grid ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2
              className="font-bold tracking-[-0.03em] text-text mb-3"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Built for your industry
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto">
              We did not build generic software. Every setup targets the specific challenges your business faces.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((industry, i) => {
              const Icon = industry.icon
              return (
                <AnimatedSection key={industry.name} delay={i * 0.07}>
                  <div className="card-premium h-full flex flex-col p-7">
                    {/* Icon + name */}
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-11 h-11 rounded-[14px] flex items-center justify-center shrink-0"
                        style={{ background: `${industry.color}15` }}
                      >
                        <Icon size={20} color={industry.color} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-bold text-text text-lg">{industry.name}</h3>
                    </div>

                    {/* Pain points */}
                    <ul className="space-y-2.5 mb-5 flex-1">
                      {industry.painPoints.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                            style={{ background: industry.color }}
                          />
                          <span className="text-sm text-text-secondary leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Products */}
                    <div className="mb-5">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-2.5">
                        Recommended Products
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {industry.products.map((p) => (
                          <span
                            key={p}
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
                            style={{
                              background: `${industry.color}12`,
                              color: industry.color,
                              border: `1px solid ${industry.color}20`,
                            }}
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stat */}
                    <div
                      className="rounded-[12px] px-4 py-3 mt-auto"
                      style={{
                        background: `${industry.color}08`,
                        border: `1px solid ${industry.color}18`,
                      }}
                    >
                      <p
                        className="text-xs font-semibold"
                        style={{ color: industry.color }}
                      >
                        {industry.stat}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <div className="gradient-divider max-w-6xl mx-auto" />

      {/* ROI section */}
      <section className="py-24 bg-bg-alt/40">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center">
            <Badge variant="blue" className="mb-5">Save Time and Money</Badge>
            <h2
              className="font-bold tracking-[-0.03em] text-text mb-3"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              See what changes for your business
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto mb-10">
              Most businesses see measurable results within the first week.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="card text-center py-8">
                <p className="text-3xl font-extrabold text-gradient mb-1">80%</p>
                <p className="text-sm text-text-secondary">Fewer missed calls</p>
              </div>
              <div className="card text-center py-8">
                <p className="text-3xl font-extrabold text-gradient mb-1">12+ hrs</p>
                <p className="text-sm text-text-secondary">Saved per week</p>
              </div>
              <div className="card text-center py-8">
                <p className="text-3xl font-extrabold text-gradient mb-1">3x</p>
                <p className="text-sm text-text-secondary">More leads contacted</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="gradient-divider max-w-6xl mx-auto" />

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div
              className="rounded-[24px] p-10 md:p-14 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(59,123,242,0.07), rgba(99,102,241,0.05), rgba(14,165,233,0.04))',
                border: '1px solid rgba(59,123,242,0.12)',
              }}
            >
              <h2
                className="font-bold tracking-[-0.03em] text-text mb-4"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)' }}
              >
                See it live. Talk to our AI.
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8 max-w-lg mx-auto">
                Book a 15-minute demo and watch our AI handle a real inbound call, answer questions, and book appointments. Live, in front of you.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 no-underline text-sm font-semibold text-white btn-gradient px-7 py-3.5 rounded-[11px] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book a Demo
                  <ArrowRight size={15} strokeWidth={2} />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center no-underline text-sm font-semibold text-text px-7 py-3.5 rounded-[11px] transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.07)' }}
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
