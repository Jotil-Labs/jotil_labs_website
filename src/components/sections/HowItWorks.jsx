import { Link2, Zap, TrendingUp } from 'lucide-react'
import { GlassCard } from '../ui/GlassCard'
import { IconBox } from '../ui/IconBox'
import { AnimatedSection } from '../ui/AnimatedSection'

const STEPS = [
  {
    number: '01',
    icon: Link2,
    title: 'Connect',
    description: 'Integrate Jotil with your existing phone system, website, and CRM in minutes. No code changes required.',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Automate',
    description: 'AI agents start handling calls, chats, and messages immediately. Train them on your specific business context.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Grow',
    description: 'Scale your customer operations without scaling headcount. Real-time analytics show the impact from day one.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-28 relative">
      <div className="gradient-divider absolute top-0 left-6 right-6" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-[40px] font-bold tracking-[-0.03em] text-text mt-3 leading-tight">
            Three Steps to{' '}
            <span className="text-gradient">Automation</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Static connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-1/2 left-[16.67%] right-[16.67%] -translate-y-1/2 z-0 h-[2px] rounded-full"
            style={{
              background: 'linear-gradient(90deg, rgba(37, 99, 235, 0.1), rgba(37, 99, 235, 0.3), rgba(37, 99, 235, 0.1))',
            }}
          />

          {STEPS.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.08}>
              <GlassCard premium className="relative z-10 text-center h-full flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xs font-mono font-semibold text-primary">
                    {step.number}
                  </span>
                </div>
                <IconBox size="lg" glow className="mb-5">
                  <step.icon size={24} strokeWidth={1.5} className="text-primary" />
                </IconBox>
                <h3 className="text-lg font-semibold text-text mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
