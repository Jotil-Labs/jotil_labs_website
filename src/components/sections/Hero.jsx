import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Mic } from 'lucide-react'
import { SplitText } from '../ui/SplitText'
import { Button } from '../ui/Button'

const WAVEFORM_BARS = Array.from({ length: 16 }, (_, i) => ({
  delay: i * 0.04,
  activeHeight: 8 + Math.sin(i * 0.8) * 28 + Math.abs(Math.sin(i * 0.4)) * 10,
}))

const FLOATING_DOTS = [
  { radius: 210, duration: 25, delay: 0, size: 3, opacity: 0.25 },
  { radius: 215, duration: 32, delay: -8, size: 4, opacity: 0.18 },
  { radius: 220, duration: 28, delay: -15, size: 3, opacity: 0.22 },
  { radius: 208, duration: 35, delay: -5, size: 3.5, opacity: 0.15 },
  { radius: 218, duration: 22, delay: -12, size: 3, opacity: 0.2 },
  { radius: 212, duration: 40, delay: -20, size: 4, opacity: 0.12 },
]

function VoiceOrb() {
  const [active, setActive] = useState(false)

  return (
    <div className="relative flex items-center justify-center" style={{ width: 420, height: 420 }}>
      {/* Background glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 500,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.10) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Ring 3 (outermost): dotted, pulsing opposite phase */}
      <div
        className="absolute rounded-full animate-ring-pulse-reverse pointer-events-none"
        style={{
          width: 410,
          height: 410,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          border: '1px dotted rgba(14, 165, 233, 0.08)',
        }}
      />

      {/* Ring 2: dashed, slowly rotating */}
      <div
        className="absolute rounded-full animate-ring-rotate pointer-events-none"
        style={{
          width: 395,
          height: 395,
          top: '50%',
          left: '50%',
          marginTop: -197.5,
          marginLeft: -197.5,
          border: '1px dashed rgba(99, 102, 241, 0.1)',
        }}
      />

      {/* Ring 1 (closest): solid, pulsing */}
      <div
        className="absolute rounded-full animate-ring-pulse pointer-events-none"
        style={{
          width: 384,
          height: 384,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          border: '1px solid rgba(37, 99, 235, 0.15)',
        }}
      />

      {/* Floating dots orbiting */}
      {FLOATING_DOTS.map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-orbit pointer-events-none"
          style={{
            width: dot.size,
            height: dot.size,
            background: `rgba(37, 99, 235, ${dot.opacity})`,
            top: '50%',
            left: '50%',
            marginTop: -(dot.size / 2),
            marginLeft: -(dot.size / 2),
            '--orbit-radius': `${dot.radius}px`,
            animationDuration: `${dot.duration}s`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}

      {/* Main glass circle */}
      <div
        className="relative rounded-full flex flex-col items-center justify-center"
        style={{
          width: 380,
          height: 380,
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
        }}
      >
        {/* Mic button */}
        <button
          className={`relative w-20 h-20 rounded-full border-none cursor-pointer flex items-center justify-center transition-all duration-300 ${
            active
              ? 'shadow-[0_0_40px_rgba(37,99,235,0.4),0_0_80px_rgba(37,99,235,0.1)]'
              : 'shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-[1.02]'
          }`}
          style={{ background: 'linear-gradient(135deg, #2563EB, #6366F1)' }}
          onClick={() => setActive((v) => !v)}
          aria-label={active ? 'Stop listening' : 'Start voice interaction'}
        >
          <Mic size={28} color="#fff" strokeWidth={1.5} />
        </button>

        {/* Waveform bars */}
        <div className="flex items-center gap-[3px] mt-6 h-10">
          {WAVEFORM_BARS.map((bar, i) => (
            <motion.div
              key={i}
              className="w-[3px] rounded-full"
              style={{
                background: active
                  ? 'linear-gradient(to top, #2563EB, #0EA5E9)'
                  : 'rgba(37, 99, 235, 0.25)',
              }}
              animate={active ? {
                height: [6, bar.activeHeight, 6],
              } : {
                height: 6,
              }}
              transition={active ? {
                duration: 0.6,
                delay: bar.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              } : {
                duration: 0.3,
              }}
            />
          ))}
        </div>

        {/* Status text */}
        <p className={`text-[13px] mt-3 font-medium transition-colors duration-300 ${
          active ? 'text-primary' : 'text-text-secondary'
        }`}>
          {active ? 'Listening...' : 'Tap to speak'}
        </p>
      </div>

      {/* // TODO: Connect to Retell API */}
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
      {/* CSS-only gradient orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute rounded-full animate-orb-1"
          style={{
            width: 500,
            height: 500,
            top: '-8%',
            left: '-5%',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute rounded-full animate-orb-2"
          style={{
            width: 450,
            height: 450,
            top: '20%',
            right: '-8%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.10) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute rounded-full animate-orb-3"
          style={{
            width: 400,
            height: 400,
            bottom: '5%',
            left: '25%',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute rounded-full animate-orb-4"
          style={{
            width: 350,
            height: 350,
            top: '40%',
            left: '60%',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.07) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 glass rounded-full px-5 py-2.5 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-text-secondary tracking-wide uppercase">
            AI-Powered Voice and Automation
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-[clamp(2.5rem,6vw,3.75rem)] font-bold tracking-[-0.04em] leading-[1.08] mb-6">
          <SplitText
            text="Intelligent Automation,"
            className="block text-text"
          />
          <SplitText
            text="Human Results"
            className="block text-gradient"
            delay={0.3}
          />
        </h1>

        {/* Subtext */}
        <motion.p
          className="text-lg sm:text-xl text-text-secondary leading-[1.8] max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
        >
          Jotil Labs builds AI systems that handle your calls, chats, leads,
          and workflows — so your team can focus on what actually matters.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
        >
          <Link to="/contact">
            <Button size="lg">
              Book a Demo
              <ArrowRight size={16} strokeWidth={1.5} />
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="outline" size="lg">
              See Products
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Voice Orb */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
      >
        <VoiceOrb />
      </motion.div>
    </section>
  )
}
