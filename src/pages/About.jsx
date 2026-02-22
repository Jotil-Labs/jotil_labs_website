import { Target, Eye, Lightbulb, Shield, Clock, HeartHandshake, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GlassCard } from '../components/ui/GlassCard'
import { IconBox } from '../components/ui/IconBox'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { CountUp } from '../components/ui/CountUp'

const VALUES = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We push the boundaries of what AI can do for business communication, constantly shipping new capabilities.',
  },
  {
    icon: Shield,
    title: 'Trust & Compliance',
    description: 'TCPA compliant, SOC 2 aligned, and transparent about AI. Your customers and data are always protected.',
  },
  {
    icon: Clock,
    title: 'Speed to Value',
    description: 'Most clients are live within hours, not weeks. We designed every product for rapid deployment and immediate ROI.',
  },
  {
    icon: HeartHandshake,
    title: 'Partner Mindset',
    description: 'We succeed when you succeed. Dedicated support, custom training, and a team that treats your business like our own.',
  },
]

const TEAM = [
  { name: 'Qratul Ain', role: 'Founder & CEO', initials: 'QA' },
  { name: 'Alex Rivera', role: 'CTO', initials: 'AR' },
  { name: 'Nadia Patel', role: 'Head of AI', initials: 'NP' },
  { name: 'Marcus Chen', role: 'Head of Product', initials: 'MC' },
]

const MILESTONES = [
  { year: '2024', title: 'Founded', description: 'Jotil Labs launched with a mission to make AI automation accessible to every business.' },
  { year: '2024', title: 'Product Suite', description: 'Expanded from voice AI to a full communication platform: chatbots, SMS, CRM, and automation.' },
  { year: '2025', title: 'Enterprise', description: 'Launched enterprise solutions and AI consultancy for mid-market and large organizations.' },
  { year: '2026', title: 'Scale', description: 'Serving businesses across industries with 50+ integrations and 99.9% uptime.' },
]

const COMPANY_STATS = [
  { value: 500, suffix: '+', label: 'Businesses Served' },
  { value: 11, suffix: '', label: 'Products' },
  { value: 99.9, suffix: '%', label: 'Uptime', decimals: 1 },
  { value: 50, suffix: '+', label: 'Integrations' },
]

export function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute rounded-full"
            style={{
              width: 500,
              height: 500,
              top: '-5%',
              left: '55%',
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.10) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection blur className="max-w-3xl">
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] text-text mt-3 leading-tight">
              Building the Future of{' '}
              <span className="text-gradient">Business Communication</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary mt-5 leading-[1.8]">
              Jotil Labs was founded on a simple observation: businesses spend too much
              time on repetitive communication tasks that AI can handle better, faster,
              and around the clock.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story + Mission/Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-[40px] font-bold tracking-[-0.03em] text-text mb-5 leading-tight">
                Our Story
              </h2>
              <div className="space-y-5 text-text-secondary leading-[1.8]">
                <p>
                  We started Jotil Labs after watching small and mid-size businesses
                  struggle with the same problem: they were losing customers because
                  they couldn&apos;t answer every call, respond to every chat, or follow
                  up with every lead.
                </p>
                <p>
                  Hiring more staff wasn&apos;t scalable. Off-the-shelf tools were too
                  generic. What businesses needed was AI that understood their context,
                  spoke their language, and integrated seamlessly into their existing
                  workflows.
                </p>
                <p>
                  Today, Jotil Labs provides a complete AI communication platform —
                  from voice agents that answer calls with human-like conversation,
                  to chatbots that capture and qualify leads 24/7, to SMS automation
                  that keeps customers engaged.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-5">
                <GlassCard premium className="text-center py-10">
                  <div className="flex items-center justify-center mb-4">
                    <IconBox size="lg" glow>
                      <Target size={24} strokeWidth={1.5} className="text-primary" />
                    </IconBox>
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2">Mission</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Make AI automation accessible to every business, regardless of size or technical expertise.
                  </p>
                </GlassCard>
                <GlassCard premium className="text-center py-10">
                  <div className="flex items-center justify-center mb-4">
                    <IconBox size="lg" glow>
                      <Eye size={24} strokeWidth={1.5} className="text-primary" />
                    </IconBox>
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2">Vision</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    A world where no business loses a customer due to missed communication.
                  </p>
                </GlassCard>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="gradient-divider mb-16" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {COMPANY_STATS.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <GlassCard className="text-center py-8">
                  <p className="text-3xl sm:text-4xl font-bold text-gradient mb-2 tracking-tight">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                    />
                  </p>
                  <p className="text-sm text-text-secondary font-medium">{stat.label}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
          <div className="gradient-divider mt-16" />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection blur className="text-center mb-14">
            <h2 className="text-3xl sm:text-[40px] font-bold tracking-[-0.03em] text-text leading-tight">
              Our <span className="text-gradient">Journey</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MILESTONES.map((milestone, i) => (
              <AnimatedSection key={milestone.year} delay={i * 0.1}>
                <GlassCard premium className="h-full relative">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-sm font-bold text-primary font-mono">{milestone.year}</span>
                  </div>
                  <h3 className="text-base font-semibold text-text mb-2">{milestone.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{milestone.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Jotil Labs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection blur className="text-center mb-14">
            <h2 className="text-3xl sm:text-[40px] font-bold tracking-[-0.03em] text-text leading-tight">
              Why{' '}
              <span className="text-gradient">Jotil Labs</span>
            </h2>
            <p className="text-lg text-text-secondary mt-4 max-w-xl mx-auto leading-[1.8]">
              We combine cutting-edge AI with deep business understanding to deliver
              automation that actually works.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <GlassCard premium className="h-full">
                  <div className="flex items-start gap-4">
                    <IconBox size="lg" glow className="shrink-0">
                      <value.icon size={24} strokeWidth={1.5} className="text-primary" />
                    </IconBox>
                    <div>
                      <h3 className="text-base font-semibold text-text mb-1.5">
                        {value.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection blur className="text-center mb-14">
            <h2 className="text-3xl sm:text-[40px] font-bold tracking-[-0.03em] text-text leading-tight">
              The Team
            </h2>
            <p className="text-lg text-text-secondary mt-4 max-w-xl mx-auto leading-[1.8]">
              A small, focused team of engineers, AI researchers, and business operators.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <GlassCard premium className="text-center py-8">
                  <div className="rounded-full mx-auto mb-5 flex items-center justify-center text-xl font-bold text-white relative"
                    style={{
                      width: 72,
                      height: 72,
                      background: 'linear-gradient(135deg, #2563EB, #6366F1)',
                    }}
                  >
                    <div className="absolute inset-[-4px] rounded-full border border-primary/20" />
                    {member.initials}
                  </div>
                  <h3 className="text-base font-semibold text-text">
                    {member.name}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">
                    {member.role}
                  </p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <GlassCard premium className="text-center py-14 px-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-text mb-4">
                Want to join our mission?
              </h2>
              <p className="text-text-secondary max-w-lg mx-auto mb-8 leading-[1.8]">
                We are always looking for talented people passionate about AI and
                building products that make a real difference for businesses.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white btn-gradient px-6 py-3.5 rounded-[12px] shadow-lg shadow-primary/25 no-underline hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get in Touch
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
