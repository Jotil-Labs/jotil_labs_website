import { Link } from 'react-router-dom'
import {
  Phone, MessageSquare, Mic, MessageCircle,
  Users, Ticket, Calendar,
  PhoneOutgoing, Send,
  BarChart3, GraduationCap,
  ArrowRight, Check,
} from 'lucide-react'
import { SpotlightCard } from '../components/ui/SpotlightCard'
import { GlassCard } from '../components/ui/GlassCard'
import { IconBox } from '../components/ui/IconBox'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { productCategories } from '../data/products'

const ICON_MAP = {
  Phone, MessageSquare, Mic, MessageCircle,
  Users, Ticket, Calendar,
  PhoneOutgoing, Send,
  BarChart3, GraduationCap,
}

const CATEGORY_DESCRIPTIONS = {
  inbound: 'AI agents that handle incoming calls, chats, and messages — so no customer inquiry goes unanswered.',
  lead: 'Organize, score, and nurture leads with AI that works across every communication channel.',
  outbound: 'Reach more customers with personalized AI-powered calls and SMS campaigns at scale.',
  enterprise: 'Custom automation solutions and strategic guidance for organizations ready to transform with AI.',
}

const WHY_CHOOSE = [
  'Live within hours, not weeks',
  'No code changes required',
  'TCPA and SOC 2 compliant',
  '24/7 uptime guarantee',
  'Custom AI training on your data',
  'Dedicated support team',
]

export function Products() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute rounded-full"
            style={{
              width: 500,
              height: 500,
              top: '-10%',
              right: '-5%',
              background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 400,
              height: 400,
              bottom: '10%',
              left: '-5%',
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">
              Our Products
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] text-text mt-3 leading-tight">
              Everything You Need to{' '}
              <span className="text-gradient">Automate</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary mt-5 max-w-2xl mx-auto leading-[1.8]">
              From AI phone agents to enterprise automation, explore the full suite of
              tools designed to transform your customer communications.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Product categories */}
      {productCategories.map((category) => (
        <section key={category.id} className="py-14">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <div className="flex items-start gap-4 mb-10">
                <div className="w-1 h-12 rounded-full bg-primary shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-text">
                    {category.label}
                  </h2>
                  <p className="text-text-secondary mt-1.5 leading-relaxed max-w-xl">
                    {CATEGORY_DESCRIPTIONS[category.id]}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((product, i) => {
                const Icon = ICON_MAP[product.icon]
                return (
                  <AnimatedSection key={product.name} delay={i * 0.08}>
                    <SpotlightCard
                      className="h-full flex flex-col"
                      spotlightColor="rgba(37, 99, 235, 0.06)"
                    >
                      <div className="flex items-start gap-4 mb-5">
                        <IconBox size="lg" glow className="shrink-0">
                          {Icon && <Icon size={24} strokeWidth={1.5} className="text-primary" />}
                        </IconBox>
                        <div>
                          <h3 className="text-lg font-semibold text-text">
                            {product.name}
                          </h3>
                          <p className="text-sm text-text-secondary leading-relaxed mt-1.5">
                            {product.description}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2.5 mt-auto pt-5 border-t border-border/40">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                            <span className="text-sm text-text-secondary leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 pt-4 border-t border-border/40">
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary cursor-pointer hover:gap-2.5 transition-all duration-300">
                          Learn More
                          <ArrowRight size={14} strokeWidth={1.5} />
                        </span>
                      </div>
                    </SpotlightCard>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Why choose section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-[40px] font-bold tracking-[-0.03em] text-text leading-tight">
              Why Businesses Choose{' '}
              <span className="text-gradient">Jotil Labs</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE.map((item, i) => (
              <AnimatedSection key={item} delay={i * 0.06}>
                <GlassCard className="flex items-center gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check size={14} strokeWidth={2} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-text">{item}</span>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">
              Compare
            </span>
            <h2 className="text-3xl sm:text-[40px] font-bold tracking-[-0.03em] text-text mt-3 leading-tight">
              Feature{' '}
              <span className="text-gradient">Comparison</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <GlassCard className="overflow-x-auto !p-0">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left px-6 py-4 font-semibold text-text">Feature</th>
                    <th className="text-center px-4 py-4 font-semibold text-text">Inbound</th>
                    <th className="text-center px-4 py-4 font-semibold text-text">Lead Mgmt</th>
                    <th className="text-center px-4 py-4 font-semibold text-text">Outbound</th>
                    <th className="text-center px-4 py-4 font-semibold text-text">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['AI Voice Calls', true, false, true, true],
                    ['Web Chatbot', true, false, false, true],
                    ['SMS Automation', true, false, true, true],
                    ['Lead Scoring', false, true, false, true],
                    ['CRM Integration', true, true, true, true],
                    ['Calendar Booking', true, true, false, true],
                    ['Analytics Dashboard', true, true, true, true],
                    ['Custom Workflows', false, false, false, true],
                    ['Dedicated Support', false, false, false, true],
                    ['TCPA Compliance', true, true, true, true],
                  ].map(([feature, ...cols], i) => (
                    <tr key={feature} className={i % 2 === 0 ? 'bg-white/30' : ''}>
                      <td className="px-6 py-3 text-text font-medium">{feature}</td>
                      {cols.map((has, j) => (
                        <td key={j} className="text-center px-4 py-3">
                          {has ? (
                            <Check size={16} strokeWidth={2} className="text-primary mx-auto" />
                          ) : (
                            <span className="text-text-secondary/40">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <GlassCard premium className="text-center py-14 px-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-text mb-4">
                Not sure which product fits?
              </h2>
              <p className="text-text-secondary max-w-lg mx-auto mb-8 leading-[1.8]">
                Our team will analyze your current workflow and recommend the right
                combination of AI tools for your business.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white btn-gradient px-6 py-3.5 rounded-[12px] shadow-lg shadow-primary/25 no-underline hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get a Free Consultation
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
