import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Mic } from 'lucide-react'
import { SplitText } from '../ui/SplitText'
import { Button } from '../ui/Button'

const PULSE_RINGS = [
  { delay: 0, duration: 2.4, scale: 1.5 },
  { delay: 0.6, duration: 3.0, scale: 1.9 },
  { delay: 1.2, duration: 3.6, scale: 2.3 },
]

const WAVEFORM_BARS = Array.from({ length: 9 }, (_, i) => ({
  delay: i * 0.08,
  height: 16 + Math.sin(i * 1.2) * 20 + Math.random() * 10,
}))

function VoiceVisualization() {
  const [active, setActive] = useState(false)

  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)',
          transform: 'scale(1.4)',
        }}
      />

      {/* Glass circle */}
      <div className="glass rounded-full w-72 h-72 sm:w-80 sm:h-80 flex flex-col items-center justify-center relative">
        {/* Ambient ring */}
        <div className="absolute inset-2 rounded-full border border-primary/10" />
        <div className="absolute inset-4 rounded-full border border-primary/5" />

        {/* Pulse rings */}
        {PULSE_RINGS.map((ring, i) => (
          <motion.span
            key={i}
            className="absolute inset-0 rounded-full border border-primary/15"
            animate={active ? {
              scale: [1, ring.scale],
              opacity: [0.4, 0],
            } : {
              scale: [1, 1.2],
              opacity: [0.1, 0],
            }}
            transition={{
              duration: active ? ring.duration : 4,
              delay: ring.delay,
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}

        {/* Mic button */}
        <motion.button
          className={`relative z-10 w-20 h-20 rounded-full border-none cursor-pointer flex items-center justify-center transition-shadow duration-500 ${
            active
              ? 'bg-primary shadow-[0_0_40px_rgba(37,99,235,0.5),0_0_80px_rgba(37,99,235,0.2)]'
              : 'btn-gradient shadow-xl shadow-primary/30'
          }`}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActive((v) => !v)}
          aria-label={active ? 'Stop listening' : 'Start voice interaction'}
        >
          <Mic size={28} color="#fff" strokeWidth={1.5} />
        </motion.button>

        {/* Waveform bars */}
        <div className="flex items-center gap-[3px] mt-5 h-10">
          {WAVEFORM_BARS.map((bar, i) => (
            <motion.div
              key={i}
              className={`w-[3px] rounded-full ${active ? 'bg-primary' : 'bg-primary/30'}`}
              animate={active ? {
                height: [6, bar.height, 6],
              } : {
                height: [6, 10, 6],
              }}
              transition={{
                duration: active ? 0.6 : 2,
                delay: bar.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ height: 6 }}
            />
          ))}
        </div>

        <p className={`text-xs mt-3 font-medium transition-colors duration-300 ${
          active ? 'text-primary' : 'text-text-secondary'
        }`}>
          {active ? 'Listening...' : 'Tap to speak'}
        </p>
      </div>
      {/* // TODO: Connect to Retell API */}
    </motion.div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Gradient mesh orbs */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-30 animate-blob-1"
          style={{
            top: '-10%',
            left: '-5%',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-25 animate-blob-2"
          style={{
            top: '30%',
            right: '-10%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 animate-blob-3"
          style={{
            bottom: '-5%',
            left: '25%',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        {/* Dot grid */}
        <div className="absolute inset-0 bg-dot-grid opacity-60" />
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
        <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-[-0.04em] leading-[1.08] mb-6">
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
          className="flex flex-wrap justify-center gap-4 mb-16"
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
