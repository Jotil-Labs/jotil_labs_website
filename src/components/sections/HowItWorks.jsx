import { motion } from 'framer-motion'
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
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-text mt-3">
            Three Steps to Automation
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-[16.67%] right-[16.67%] -translate-y-1/2 z-0">
            <motion.div
              className="h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          {STEPS.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.15}>
              <GlassCard className="relative z-10 text-center h-full flex flex-col items-center">
                <span className="text-xs font-mono font-medium text-primary/50 mb-3">
                  {step.number}
                </span>
                <IconBox size="lg" className="mb-4">
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
