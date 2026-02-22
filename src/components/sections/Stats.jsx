import { motion } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'
import { CountUp } from '../ui/CountUp'
import { AnimatedSection } from '../ui/AnimatedSection'

const STATS = [
  { value: 99.9, suffix: '%', label: 'Uptime guarantee', decimals: 1 },
  { value: 24, suffix: '/7', label: 'Always available', decimals: 0 },
  { value: 50, suffix: '+', label: 'Integrations', decimals: 0 },
  { value: 4, prefix: '<', suffix: 'hr', label: 'Avg. setup time', decimals: 0 },
]

export function Stats() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Gradient divider */}
        <div className="gradient-divider mb-20" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <GlassCard className="text-center py-10">
                <p className="text-4xl sm:text-5xl font-bold text-gradient mb-3 tracking-tight">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals}
                  />
                </p>
                <p className="text-sm text-text-secondary font-medium">
                  {stat.label}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Gradient divider */}
        <div className="gradient-divider mt-20" />
      </div>
    </section>
  )
}
