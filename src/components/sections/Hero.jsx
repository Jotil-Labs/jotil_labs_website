import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Mic } from 'lucide-react'
import { SplitText } from '../ui/SplitText'
import { Button } from '../ui/Button'
import { Particles } from '../ui/backgrounds/Particles'
import { Aurora } from '../ui/backgrounds/Aurora'

const PULSE_RINGS = [
  { delay: 0, duration: 2.2, scale: 1.6 },
  { delay: 0.5, duration: 2.8, scale: 2.0 },
  { delay: 1.0, duration: 3.4, scale: 2.4 },
  { delay: 1.5, duration: 4.0, scale: 2.8 },
]

const WAVEFORM_BARS = Array.from({ length: 13 }, (_, i) => ({
  delay: i * 0.06,
  height: 20 + Math.sin(i * 1.1) * 28 + Math.random() * 12,
}))

const FLOATING_DOTS = Array.from({ length: 16 }, (_, i) => {
  const angle = (i / 16) * Math.PI * 2
  const radius = 200 + Math.random() * 60
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
    size: 2 + Math.random() * 3,
    duration: 5 + Math.random() * 4,
    delay: i * 0.3,
  }
})

function VoiceVisualization() {
  const [active, setActive] = useState(false)

  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Large radial glow behind everything */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(99, 102, 241, 0.06) 40%, transparent 70%)',
        }}
      />

      {/* Floating dots around the circle */}
      {FLOATING_DOTS.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: dot.size,
            height: dot.size,
            background: `rgba(37, 99, 235, ${0.15 + (i % 3) * 0.1})`,
            top: '50%',
            left: '50%',
          }}
          animate={{
            x: [dot.x, dot.x + (i % 2 ? 15 : -15), dot.x],
            y: [dot.y, dot.y - 20, dot.y],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Main glass circle — 420px */}
      <div
        className="glass rounded-full flex flex-col items-center justify-center relative"
        style={{ width: 340, height: 340 }}
      >
        {/* Ambient concentric rings */}
        <div className="absolute inset-2 rounded-full border border-primary/8" />
        <div className="absolute inset-5 rounded-full border border-primary/5" />
        <div className="absolute inset-8 rounded-full border border-primary/3" />

        {/* Gradient stroke pulse rings */}
        {PULSE_RINGS.map((ring, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full"
            style={{
              border: '1.5px solid transparent',
              backgroundImage: active
                ? 'linear-gradient(135deg, rgba(37,99,235,0.3), rgba(99,102,241,0.2), rgba(14,165,233,0.3))'
                : 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(99,102,241,0.05))',
              backgroundOrigin: 'border-box',
              backgroundClip: 'border-box',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
            animate={active ? {
              scale: [1, ring.scale],
              opacity: [0.6, 0],
            } : {
              scale: [1, 1.15],
              opacity: [0.15, 0],
            }}
            transition={{
              duration: active ? ring.duration : 5,
              delay: ring.delay,
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}

        {/* Mic button — larger */}
        <motion.button
          className={`relative z-10 w-24 h-24 rounded-full border-none cursor-pointer flex items-center justify-center transition-shadow duration-500 ${
            active
              ? 'bg-primary shadow-[0_0_60px_rgba(37,99,235,0.5),0_0_120px_rgba(37,99,235,0.15)]'
              : 'btn-gradient shadow-xl shadow-primary/30'
          }`}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActive((v) => !v)}
          aria-label={active ? 'Stop listening' : 'Start voice interaction'}
        >
          <Mic size={32} color="#fff" strokeWidth={1.5} />
          {/* Inner glow ring on active */}
          {active && (
            <motion.div
              className="absolute inset-[-6px] rounded-full border-2 border-primary/40"
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </motion.button>

        {/* Waveform bars — wider spread */}
        <div className="flex items-center gap-[3px] mt-6 h-12">
          {WAVEFORM_BARS.map((bar, i) => (
            <motion.div
              key={i}
              className={`w-[3px] rounded-full ${active ? 'bg-primary' : 'bg-primary/25'}`}
              animate={active ? {
                height: [6, bar.height, 6],
              } : {
                height: [4, 10, 4],
              }}
              transition={{
                duration: active ? 0.55 : 2.5,
                delay: bar.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ height: 4 }}
            />
          ))}
        </div>

        <p className={`text-xs mt-3 font-medium transition-colors duration-300 ${
          active ? 'text-primary' : 'text-text-secondary'
        }`}>
          {active ? 'Listening...' : 'Tap to speak'}
        </p>
      </div>

      {/* Outer decorative ring */}
      <div
        className="absolute rounded-full border border-primary/6 pointer-events-none"
        style={{
          width: 420,
          height: 420,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 450,
          height: 450,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          border: '1px dashed rgba(37, 99, 235, 0.06)',
        }}
      />

      {/* // TODO: Connect to Retell API */}
    </motion.div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Aurora sweep */}
        <Aurora />

        {/* Gradient mesh orbs */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-25 animate-blob-1"
          style={{
            top: '-15%',
            left: '-10%',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 60%)',
            filter: 'blur(120px)',
          }}
        />
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-20 animate-blob-2"
          style={{
            top: '25%',
            right: '-12%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 60%)',
            filter: 'blur(120px)',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-15 animate-blob-3"
          style={{
            bottom: '-10%',
            left: '20%',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, transparent 60%)',
            filter: 'blur(120px)',
          }}
        />

        {/* Particles canvas */}
        <Particles config={{ count: 40, speed: 0.2, connectDistance: 100, connectOpacity: 0.04 }} />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 glass rounded-full px-5 py-2.5 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-text-secondary tracking-wide uppercase">
            AI-Powered Voice and Automation
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-[-0.04em] leading-[1.06] mb-6">
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
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Jotil Labs builds AI systems that handle your calls, chats, leads,
          and workflows — so your team can focus on what actually matters.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
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

      {/* Voice visualization below CTAs */}
      <div className="relative z-10">
        <VoiceVisualization />
      </div>
    </section>
  )
}
