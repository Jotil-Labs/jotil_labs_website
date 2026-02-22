import { motion } from 'framer-motion'
import { Check, Phone, Clock, Activity } from 'lucide-react'
import { GlassCard } from '../ui/GlassCard'
import { AnimatedSection } from '../ui/AnimatedSection'

const FEATURES = [
  'Answers every call within 2 rings',
  'Qualifies leads with natural conversation',
  'Books appointments directly in your calendar',
  'Handles objections and FAQ automatically',
  'Transfers to human agents when needed',
]

function MockCallUI() {
  return (
    <GlassCard premium className="max-w-sm mx-auto">
      {/* Call header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center">
            <Phone size={18} color="#fff" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-sm font-semibold text-text">Sarah Johnson</p>
            <p className="text-xs text-text-secondary">+1 (555) 234-5678</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium text-green-700">Live</span>
        </div>
      </div>

      {/* Duration */}
      <div className="flex items-center gap-2 mb-4">
        <Clock size={14} strokeWidth={1.5} className="text-text-secondary" />
        <span className="text-xs text-text-secondary font-mono">02:34</span>
      </div>

      {/* Waveform visualization */}
      <div className="flex items-center gap-[2px] h-8 mb-4">
        {Array.from({ length: 24 }, (_, i) => {
          const h = 4 + Math.sin(i * 0.6) * 12 + Math.random() * 8
          return (
            <motion.div
              key={i}
              className="w-[2px] rounded-full bg-primary/40"
              animate={{ height: [h * 0.5, h, h * 0.5] }}
              transition={{
                duration: 0.8 + Math.random() * 0.4,
                delay: i * 0.03,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ height: h * 0.5 }}
            />
          )
        })}
      </div>

      {/* AI indicator */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-[10px] bg-primary/5 border border-primary/10">
        <Activity size={14} strokeWidth={1.5} className="text-primary" />
        <span className="text-xs font-medium text-primary">AI is speaking</span>
        <div className="flex gap-0.5 ml-auto">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-primary"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </div>
      </div>

      {/* Transcript preview */}
      <div className="mt-4 space-y-2">
        <div className="px-3 py-2 rounded-[10px] bg-white/50 border border-border/50">
          <p className="text-xs text-text-secondary">
            <span className="font-semibold text-text">Caller:</span> Hi, I'd like to schedule an appointment for next week.
          </p>
        </div>
        <div className="px-3 py-2 rounded-[10px] bg-primary/5 border border-primary/10">
          <p className="text-xs text-text-secondary">
            <span className="font-semibold text-primary">AI:</span> I'd be happy to help you with that. Let me check available times...
          </p>
        </div>
      </div>
    </GlassCard>
  )
}

export function FeatureHighlight() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            top: '10%',
            left: '-5%',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: mock call UI */}
          <AnimatedSection>
            <MockCallUI />
          </AnimatedSection>

          {/* Right: content */}
          <AnimatedSection delay={0.15}>
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">
              Flagship Product
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-text mt-3 mb-4">
              Your AI Receptionist{' '}
              <span className="text-gradient">Never Sleeps</span>
            </h2>
            <p className="text-lg text-text-secondary leading-[1.8] mb-8">
              Every missed call is a missed opportunity. Our AI phone agent handles
              inbound calls with human-like conversation, 24 hours a day, 7 days a week.
            </p>

            <ul className="space-y-3.5">
              {FEATURES.map((feature, i) => (
                <motion.li
                  key={feature}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                    <Check size={12} strokeWidth={2} className="text-primary" />
                  </div>
                  <span className="text-sm text-text-secondary leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
