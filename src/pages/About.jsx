import { Target, Eye, Lightbulb, Shield, Clock, HeartHandshake } from 'lucide-react'
import { GlassCard } from '../components/ui/GlassCard'
import { IconBox } from '../components/ui/IconBox'
import { AnimatedSection } from '../components/ui/AnimatedSection'

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

export function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-grid-lines opacity-40" />
          <div
            className="absolute w-[500px] h-[500px] opacity-20"
            style={{
              top: '-5%',
              left: '55%',
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 60%)',
              filter: 'blur(100px)',
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

      {/* Story */}
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

      {/* Gradient divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="gradient-divider" />
      </div>

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
                  <div className="w-18 h-18 rounded-full mx-auto mb-5 flex items-center justify-center text-xl font-bold text-white relative"
                    style={{
                      width: 72,
                      height: 72,
                      background: 'linear-gradient(135deg, #2563EB, #6366F1)',
                    }}
                  >
                    {/* Glow ring */}
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
    </>
  )
}
