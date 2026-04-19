'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Mic, PhoneCall, MessageSquare, Zap } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'

const WAVEFORM_BARS = Array.from({ length: 20 }, (_, i) => ({
  delay: i * 0.04,
  height: 6 + Math.sin(i * 0.7) * 24 + Math.abs(Math.sin(i * 0.4)) * 12,
}))

const FLOATING_DOTS = [
  { radius: 195, duration: 25, delay: 0, size: 3, opacity: 0.2 },
  { radius: 200, duration: 32, delay: -8, size: 4, opacity: 0.14 },
  { radius: 205, duration: 28, delay: -15, size: 3, opacity: 0.18 },
  { radius: 192, duration: 35, delay: -5, size: 3.5, opacity: 0.12 },
  { radius: 202, duration: 22, delay: -12, size: 3, opacity: 0.16 },
  { radius: 196, duration: 40, delay: -20, size: 4, opacity: 0.1 },
]

const LIVE_INDICATORS = [
  { icon: PhoneCall, label: 'Missed calls recovered', value: '80%', color: '#3B7BF2' },
  { icon: MessageSquare, label: 'Faster response time', value: '< 3s', color: '#6366F1' },
  { icon: Zap, label: 'Avg. setup time', value: '4 hrs', color: '#0EA5E9' },
]

function VoiceOrb() {
  const [active, setActive] = useState(false)

  return (
    <div className="relative flex items-center justify-center select-none scale-[0.72] sm:scale-[0.85] lg:scale-100 origin-center" style={{ width: 380, height: 380 }}>
      {/* Glow */}
      <div className="absolute rounded-full pointer-events-none" style={{ width: 460, height: 460, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(59,123,242,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      {/* Rings */}
      <div className="absolute rounded-full pointer-events-none animate-ring-pulse-reverse" style={{ width: 370, height: 370, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', border: '1px dotted rgba(59,123,242,0.07)' }} />
      <div className="absolute rounded-full pointer-events-none animate-ring-rotate" style={{ width: 355, height: 355, top: '50%', left: '50%', marginTop: -177.5, marginLeft: -177.5, border: '1px dashed rgba(99,102,241,0.09)' }} />
      <div className="absolute rounded-full pointer-events-none animate-ring-pulse" style={{ width: 344, height: 344, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', border: '1px solid rgba(59,123,242,0.12)' }} />

      {/* Floating dots */}
      {FLOATING_DOTS.map((dot, i) => (
        <div key={i} className="absolute rounded-full animate-orbit pointer-events-none" style={{ width: dot.size, height: dot.size, background: `rgba(59,123,242,${dot.opacity})`, top: '50%', left: '50%', marginTop: -(dot.size / 2), marginLeft: -(dot.size / 2), '--orbit-radius': `${dot.radius}px`, animationDuration: `${dot.duration}s`, animationDelay: `${dot.delay}s` }} />
      ))}

      {/* Main glass circle */}
      <div className="relative rounded-full flex flex-col items-center justify-center" style={{ width: 340, height: 340, background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.6)', boxShadow: '0 20px 60px rgba(59,123,242,0.08), 0 4px 20px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)' }}>
        {/* Mic button */}
        <button
          onClick={() => setActive(v => !v)}
          aria-label={active ? 'Stop' : 'Start voice demo'}
          className="relative w-[72px] h-[72px] rounded-full border-none cursor-pointer flex items-center justify-center transition-all duration-300"
          style={{
            background: active ? 'linear-gradient(135deg, #1B4FBA, #3B7BF2)' : 'linear-gradient(135deg, #3B7BF2, #2D6AE0)',
            boxShadow: active
              ? '0 0 40px rgba(59,123,242,0.5), 0 0 80px rgba(59,123,242,0.15)'
              : '0 8px 32px rgba(59,123,242,0.35)',
          }}
        >
          {active && (
            <span className="absolute inset-0 rounded-full animate-ping" style={{ background: 'rgba(59,123,242,0.25)' }} />
          )}
          <Mic size={26} color="#fff" strokeWidth={1.5} />
        </button>

        {/* Waveform */}
        <div className="flex items-center gap-[2.5px] mt-5 h-10">
          {WAVEFORM_BARS.map((bar, i) => (
            <motion.div
              key={i}
              className="w-[2.5px] rounded-full"
              style={{ background: active ? 'linear-gradient(to top, #3B7BF2, #0EA5E9)' : 'rgba(59,123,242,0.2)' }}
              animate={active ? { height: [5, bar.height, 5] } : { height: 5 }}
              transition={active ? { duration: 0.5, delay: bar.delay, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 }}
            />
          ))}
        </div>

        {/* Status */}
        <p className="text-[12px] mt-3 font-medium transition-colors duration-300" style={{ color: active ? '#3B7BF2' : '#6B7280', fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
          {active ? 'Listening...' : 'Tap to experience AI voice'}
        </p>
      </div>
    </div>
  )
}

export function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="bg-brand-wash-mark relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient mesh */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Soft grid pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(59,123,242,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,123,242,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

        {/* Gradient orbs */}
        <div className="absolute rounded-full animate-orb-1" style={{ width: 600, height: 600, top: '-10%', left: '-10%', background: 'radial-gradient(circle, rgba(59,123,242,0.10) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute rounded-full animate-orb-2" style={{ width: 500, height: 500, top: '10%', right: '-8%', background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute rounded-full animate-orb-3" style={{ width: 400, height: 400, bottom: '0%', left: '30%', background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute rounded-full animate-orb-4" style={{ width: 350, height: 350, top: '50%', left: '55%', background: 'radial-gradient(circle, rgba(59,123,242,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-80px)] py-16">

          {/* Left: Copy */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 w-fit rounded-full px-4 py-2 mb-8"
              style={{ background: 'rgba(59,123,242,0.06)', border: '1px solid rgba(59,123,242,0.12)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-semibold text-primary tracking-[0.25em] uppercase font-display">
                Automate. Empower. Scale.
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="overflow-hidden mb-6">
              {['Never Miss a', 'Customer', 'Again.'].map((line, i) => (
                <motion.span
                  key={line}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.65, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`block leading-[1.05] tracking-[-0.04em] font-extrabold ${i === 2 ? 'text-gradient' : 'text-text'}`}
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.75rem, 5.5vw, 4.25rem)' }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            {/* Subtext */}
            <motion.p
              className="text-lg text-text-secondary leading-[1.75] max-w-[480px] mb-10"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
            >
              Every call answered. Every lead followed up. Every conversation
              handled. Your AI teammate works around the clock so your team
              can focus on closing deals and growing your business.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 mb-14"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: 'easeOut' }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 no-underline text-sm font-semibold text-white btn-gradient px-6 py-3.5 rounded-[11px] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Book a Demo
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 no-underline text-sm font-semibold text-text px-6 py-3.5 rounded-[11px] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.07)', fontFamily: 'var(--font-display)' }}
              >
                See How It Works
              </Link>
            </motion.div>

            {/* Live stats strip */}
            <motion.div
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {LIVE_INDICATORS.map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${color}12` }}>
                    <Icon size={13} style={{ color }} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text leading-none" style={{ fontFamily: 'var(--font-jetbrains), JetBrains Mono, monospace', letterSpacing: '-0.02em' }}>
                      {value}
                    </p>
                    <p className="text-[10px] text-text-secondary mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Voice Orb */}
          <motion.div
            className="flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {mounted && <VoiceOrb />}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, var(--color-bg))' }} />
    </section>
  )
}
