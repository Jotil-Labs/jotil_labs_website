import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Mic } from 'lucide-react'
import { SplitText } from '../ui/SplitText'
import { Button } from '../ui/Button'

const PULSE_RINGS = [
  { delay: 0, duration: 2.4, scale: 1.6 },
  { delay: 0.5, duration: 3.0, scale: 2.0 },
  { delay: 1.0, duration: 3.6, scale: 2.4 },
]

const WAVEFORM_BARS = [
  { delay: 0, height: 24 },
  { delay: 0.1, height: 36 },
  { delay: 0.2, height: 20 },
  { delay: 0.3, height: 40 },
  { delay: 0.15, height: 28 },
  { delay: 0.25, height: 32 },
  { delay: 0.05, height: 18 },
]

function VoiceVisualization() {
  const [active, setActive] = useState(false)

  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Glass circle container */}
      <div className="glass rounded-full w-64 h-64 sm:w-72 sm:h-72 flex flex-col items-center justify-center relative">
        {/* Pulse rings */}
        {active && PULSE_RINGS.map((ring, i) => (
          <motion.span
            key={i}
            className="absolute inset-0 rounded-full border border-primary/20"
            animate={{
              scale: [1, ring.scale],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: ring.duration,
              delay: ring.delay,
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}

        {/* Mic button */}
        <motion.button
          className="relative z-10 w-20 h-20 rounded-full btn-gradient border-none cursor-pointer flex items-center justify-center shadow-xl shadow-primary/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActive((v) => !v)}
          aria-label={active ? 'Stop listening' : 'Start voice interaction'}
        >
          <Mic size={28} color="#fff" strokeWidth={1.5} />
        </motion.button>

        {/* Waveform bars */}
        <div className="flex items-end gap-1 mt-4 h-10">
          {WAVEFORM_BARS.map((bar, i) => (
            <motion.div
              key={i}
              className="w-1 rounded-full bg-primary/40"
              animate={active ? {
                height: [8, bar.height, 8],
              } : {
                height: 8,
              }}
              transition={active ? {
                duration: 0.8,
                delay: bar.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              } : {
                duration: 0.3,
              }}
              style={{ height: 8 }}
            />
          ))}
        </div>

        <p className="text-xs text-text-secondary mt-2 font-medium">
          {active ? 'Listening...' : 'Tap to speak'}
        </p>
      </div>
      {/* // TODO: Connect to Retell API */}
    </motion.div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30 animate-blob-1"
          style={{
            top: '5%',
            left: '10%',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-25 animate-blob-2"
          style={{
            top: '40%',
            right: '5%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute w-[450px] h-[450px] rounded-full opacity-20 animate-blob-3"
          style={{
            bottom: '10%',
            left: '30%',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-text-secondary tracking-wide">
              AI-Powered Voice and Automation
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.1] mb-6">
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
            className="text-lg text-text-secondary leading-relaxed max-w-lg mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Jotil Labs builds AI systems that handle your calls, chats, leads,
            and workflows — so your team can focus on what actually matters.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
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

        {/* Right — voice visualization */}
        <div className="flex justify-center lg:justify-end">
          <VoiceVisualization />
        </div>
      </div>
    </section>
  )
}
