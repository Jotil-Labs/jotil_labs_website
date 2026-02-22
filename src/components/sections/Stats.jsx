import { GlassCard } from '../ui/GlassCard'
import { CountUp } from '../ui/CountUp'
import { AnimatedSection } from '../ui/AnimatedSection'

const STATS = [
  { value: 99.9, suffix: '%', label: 'Uptime', decimals: 1 },
  { value: 24, suffix: '/7', label: 'Available', decimals: 0 },
  { value: 50, suffix: '+', label: 'Integrations', decimals: 0 },
  { value: 4, prefix: '<', suffix: 'hr', label: 'Setup', decimals: 0 },
]

export function Stats() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <GlassCard className="text-center py-8">
                <p className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
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
      </div>
    </section>
  )
}
