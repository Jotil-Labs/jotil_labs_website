'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  PhoneCall,
  PhoneOff,
  MessageSquare,
  MessageCircle,
  Mic,
  Wifi,
  ChevronLeft,
  Plus,
  Send,
  Zap,
} from 'lucide-react'

const FEATURES = [
  {
    key: 'voice',
    label: 'Voice',
    icon: PhoneCall,
    color: '#3B7BF2',
    tagline: 'AI answers every call',
  },
  {
    key: 'chat',
    label: 'Chat',
    icon: MessageSquare,
    color: '#6366F1',
    tagline: 'AI replies in seconds',
  },
  {
    key: 'sms',
    label: 'SMS',
    icon: MessageCircle,
    color: '#10B981',
    tagline: 'AI follows up by text',
  },
]

const CYCLE_MS = 5500

const LIVE_INDICATORS = [
  { icon: PhoneCall, label: 'Missed calls recovered', value: '80%', color: '#3B7BF2' },
  { icon: MessageSquare, label: 'Faster response time', value: '< 3s', color: '#6366F1' },
  { icon: Zap, label: 'Avg. setup time', value: '4 hrs', color: '#0EA5E9' },
]

const WAVEFORM_BARS = Array.from({ length: 16 }, (_, i) => ({
  delay: i * 0.05,
  height: 6 + Math.sin(i * 0.7) * 16 + Math.abs(Math.sin(i * 0.4)) * 8,
}))

function StatusBar() {
  return (
    <div className="absolute top-0 left-0 right-0 h-9 flex items-center justify-between px-6 z-30">
      <span
        className="text-[13px] font-semibold text-text"
        style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
      >
        9:41
      </span>
      <span className="flex items-center gap-1.5">
        {/* Signal */}
        <span className="flex items-end gap-[1.5px] h-2.5">
          <span className="w-[2px] h-1 rounded-[1px] bg-text" />
          <span className="w-[2px] h-1.5 rounded-[1px] bg-text" />
          <span className="w-[2px] h-2 rounded-[1px] bg-text" />
          <span className="w-[2px] h-2.5 rounded-[1px] bg-text" />
        </span>
        <Wifi size={11} className="text-text" strokeWidth={2.5} />
        {/* Battery */}
        <span className="flex items-center">
          <span className="relative w-[22px] h-2.5 rounded-[3px] flex items-center px-[1.5px]"
            style={{ border: '1px solid rgba(15,17,41,0.7)' }}
          >
            <span className="w-[78%] h-full rounded-[1px] bg-text" />
          </span>
          <span className="w-[1.5px] h-[5px] rounded-r-sm bg-text/70 ml-[1px]" />
        </span>
      </span>
    </div>
  )
}

function PhoneFrame({ children, accent }) {
  return (
    <div className="relative w-[260px] mx-auto">
      {/* Side buttons */}
      <span className="absolute -left-[3px] top-20 w-[3px] h-6 rounded-l-md bg-[#0a0c1a]" />
      <span className="absolute -left-[3px] top-28 w-[3px] h-10 rounded-l-md bg-[#0a0c1a]" />
      <span className="absolute -left-[3px] top-40 w-[3px] h-10 rounded-l-md bg-[#0a0c1a]" />
      <span className="absolute -right-[3px] top-24 w-[3px] h-14 rounded-r-md bg-[#0a0c1a]" />

      <div
        className="relative w-full h-[520px] rounded-[40px] p-[8px]"
        style={{
          background: 'linear-gradient(180deg, #1a1d2e 0%, #0a0c1a 100%)',
          boxShadow:
            '0 40px 100px -24px rgba(15,17,41,0.45), 0 12px 32px rgba(15,17,41,0.18), inset 0 0 0 1.5px rgba(255,255,255,0.06)',
        }}
      >
        <div
          className="relative w-full h-full rounded-[34px] overflow-hidden"
          style={{ background: '#FAFBFD' }}
        >
          {/* Notch / Dynamic Island */}
          <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] rounded-full bg-[#0a0c1a] z-30" />

          <StatusBar />

          {/* Accent halo behind screen */}
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background: `radial-gradient(80% 60% at 50% 0%, ${accent}1f 0%, transparent 60%)`,
            }}
          />

          <div className="absolute top-9 left-0 right-0 bottom-0">{children}</div>

          {/* Home indicator */}
          <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[110px] h-[4px] rounded-full bg-text/30 z-30" />
        </div>
      </div>
    </div>
  )
}

function VoicePanel() {
  return (
    <div className="h-full flex flex-col items-center justify-between px-7 pt-10 pb-10">
      <div className="text-center">
        <p
          className="text-[10px] uppercase tracking-[0.22em] font-semibold text-text-secondary"
          style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
        >
          Incoming call
        </p>
        <p
          className="text-[10px] text-text-secondary/80 mt-1"
          style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
        >
          via JotilLabs AI
        </p>
      </div>

      <div className="flex flex-col items-center gap-5">
        {/* Avatar with rings */}
        <div className="relative w-[112px] h-[112px] flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full animate-ring-pulse"
            style={{ border: '1px solid rgba(59,123,242,0.25)' }}
          />
          <div
            className="absolute inset-3 rounded-full animate-ring-pulse-reverse"
            style={{ border: '1px dashed rgba(99,102,241,0.20)' }}
          />
          <div
            className="relative w-[88px] h-[88px] rounded-full flex items-center justify-center text-white text-[26px] font-bold"
            style={{
              background: 'linear-gradient(135deg, #3B7BF2, #6366F1)',
              boxShadow: '0 14px 40px rgba(59,123,242,0.4)',
              fontFamily: 'var(--font-outfit), Outfit, sans-serif',
              letterSpacing: '0.02em',
            }}
          >
            SK
          </div>
        </div>

        <div className="text-center">
          <p
            className="text-[20px] font-extrabold text-text leading-none tracking-[-0.02em]"
            style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
          >
            Sarah K.
          </p>
          <p
            className="text-[11px] text-text-secondary mt-1.5"
            style={{ fontFamily: 'var(--font-jetbrains), JetBrains Mono, monospace' }}
          >
            +1 (415) 555 · 0124
          </p>
        </div>

        <div className="flex items-end gap-[3px] h-7">
          {WAVEFORM_BARS.map((b, i) => (
            <motion.div
              key={i}
              className="w-[3px] rounded-full"
              style={{ background: 'linear-gradient(to top, #3B7BF2, #0EA5E9)' }}
              animate={{ height: [6, b.height, 6] }}
              transition={{ duration: 0.6, delay: b.delay, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>

        <p
          className="text-[12px] text-center text-text-secondary leading-relaxed max-w-[210px]"
          style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
        >
          &ldquo;I have 2pm or 4pm open Tuesday. Which works for you?&rdquo;
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-12">
        <button
          aria-label="Decline"
          className="w-[52px] h-[52px] rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #ef4444, #dc2626)',
            boxShadow: '0 10px 28px rgba(220,38,38,0.4)',
          }}
        >
          <PhoneOff size={20} color="#fff" strokeWidth={2} />
        </button>
        <button
          aria-label="Answer"
          className="w-[52px] h-[52px] rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #10b981, #059669)',
            boxShadow: '0 10px 28px rgba(16,185,129,0.4)',
          }}
        >
          <PhoneCall size={20} color="#fff" strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}

function ChatBubble({ who, delay, children, variant = 'chat' }) {
  const isAI = who === 'ai'
  const radius = variant === 'sms' ? 18 : 16
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`flex ${isAI
        ? variant === 'sms' ? 'justify-end' : 'justify-start'
        : variant === 'sms' ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className="max-w-[78%] px-3.5 py-2 text-[12.5px] leading-snug"
        style={{
          background: isAI
            ? variant === 'sms'
              ? 'linear-gradient(135deg, #3B7BF2, #2D6AE0)'
              : 'rgba(99,102,241,0.10)'
            : variant === 'sms'
              ? 'rgba(15,17,41,0.07)'
              : 'linear-gradient(135deg, #3B7BF2, #2D6AE0)',
          color:
            (isAI && variant === 'sms') || (!isAI && variant !== 'sms')
              ? '#fff'
              : '#0F1129',
          borderRadius: radius,
          borderTopLeftRadius: variant === 'chat' && isAI ? 4 : radius,
          borderTopRightRadius: variant === 'chat' && !isAI ? 4 : radius,
          fontFamily: 'var(--font-inter), Inter, sans-serif',
        }}
      >
        {children}
      </div>
    </motion.div>
  )
}

function ChatPanel() {
  return (
    <div className="h-full flex flex-col" style={{ background: '#FFFFFF' }}>
      {/* App header */}
      <div className="px-4 py-3 flex items-center gap-3" style={{ borderBottom: '1px solid rgba(15,17,41,0.06)' }}>
        <ChevronLeft size={18} className="text-primary shrink-0" strokeWidth={2.25} />
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
          style={{
            background: 'linear-gradient(135deg, #6366F1, #3B7BF2)',
            fontFamily: 'var(--font-outfit), Outfit, sans-serif',
          }}
        >
          JL
        </div>
        <div className="flex-1 min-w-0">
          <p
            className="text-[13px] font-bold text-text leading-tight truncate"
            style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
          >
            JotilLabs Support
          </p>
          <p className="text-[10px] text-emerald-600 mt-0.5 flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-emerald-500" />
            Online · AI
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-3 py-4 flex flex-col gap-2 overflow-hidden">
        <ChatBubble who="ai" delay={0.1}>Hi! How can I help today?</ChatBubble>
        <ChatBubble who="user" delay={0.55}>Do you have any availability tomorrow afternoon?</ChatBubble>
        <ChatBubble who="ai" delay={1.05}>I have 2pm or 4pm open. Which works for you?</ChatBubble>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.4 }}
          className="flex justify-end items-center gap-1.5 mt-1"
        >
          <span className="text-[9px] text-text-secondary tracking-wide">Sarah is typing</span>
          <span
            className="flex gap-1 px-2.5 py-1.5 rounded-2xl"
            style={{ background: 'rgba(15,17,41,0.05)' }}
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                className="w-[3px] h-[3px] rounded-full"
                style={{ background: 'rgba(15,17,41,0.55)' }}
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                transition={{ duration: 1.1, delay: i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </span>
        </motion.div>
      </div>

      {/* Compose */}
      <div className="px-3 py-2.5 flex items-center gap-2" style={{ borderTop: '1px solid rgba(15,17,41,0.06)' }}>
        <div
          className="flex-1 px-3.5 py-2 rounded-full text-[11px] text-text-secondary"
          style={{ background: 'rgba(15,17,41,0.04)' }}
        >
          Type a message…
        </div>
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #3B7BF2, #2D6AE0)',
            boxShadow: '0 6px 16px rgba(59,123,242,0.35)',
          }}
        >
          <Send size={13} color="#fff" strokeWidth={2.25} />
        </span>
      </div>
    </div>
  )
}

function SmsPanel() {
  return (
    <div className="h-full flex flex-col" style={{ background: '#FAFBFD' }}>
      {/* Header */}
      <div className="relative px-4 py-3 flex flex-col items-center" style={{ borderBottom: '1px solid rgba(15,17,41,0.06)', background: '#FFFFFF' }}>
        <ChevronLeft size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" strokeWidth={2.25} />
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-bold mb-1"
          style={{
            background: 'linear-gradient(135deg, #3B7BF2, #6366F1)',
            fontFamily: 'var(--font-outfit), Outfit, sans-serif',
          }}
        >
          SK
        </div>
        <p
          className="text-[10px] font-semibold text-text leading-none"
          style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
        >
          Sarah K.
        </p>
        <p className="text-[9px] text-text-secondary mt-0.5">+1 (415) 555 · 0124</p>
      </div>

      {/* Messages */}
      <div className="flex-1 px-3 py-3 flex flex-col gap-1.5 overflow-hidden">
        <ChatBubble who="user" delay={0.1} variant="sms">Hey, are you guys open Sunday?</ChatBubble>
        <ChatBubble who="ai" delay={0.5} variant="sms">Yes! We&rsquo;re open 10am to 5pm.</ChatBubble>
        <ChatBubble who="ai" delay={0.8} variant="sms">Want me to hold a slot?</ChatBubble>
        <ChatBubble who="user" delay={1.25} variant="sms">Yes, 11am please.</ChatBubble>
        <ChatBubble who="ai" delay={1.65} variant="sms">Booked. See you Sunday.</ChatBubble>
      </div>

      {/* Compose */}
      <div className="px-2.5 py-2 flex items-center gap-2" style={{ borderTop: '1px solid rgba(15,17,41,0.06)', background: '#FFFFFF' }}>
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
          style={{ background: 'rgba(15,17,41,0.04)' }}
        >
          <Plus size={14} className="text-text-secondary" strokeWidth={2} />
        </span>
        <div
          className="flex-1 px-3 py-1.5 rounded-full text-[11px] text-text-secondary"
          style={{ background: '#FFFFFF', border: '1px solid rgba(15,17,41,0.08)' }}
        >
          iMessage
        </div>
        <Mic size={14} className="text-text-secondary shrink-0" strokeWidth={2} />
      </div>
    </div>
  )
}

function FeatureShowcase() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % FEATURES.length), CYCLE_MS)
    return () => clearInterval(t)
  }, [])

  const feature = FEATURES[active]

  return (
    <div className="relative w-full max-w-[360px] mx-auto lg:mx-0 lg:ml-auto">
      {/* Ambient glow behind phone */}
      <div
        className="absolute inset-0 -m-12 rounded-[64px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(50% 50% at 30% 25%, rgba(59,123,242,0.22), transparent 70%), radial-gradient(50% 50% at 75% 80%, rgba(99,102,241,0.18), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <PhoneFrame accent={feature.color}>
          <AnimatePresence mode="wait">
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="h-full"
            >
              {feature.key === 'voice' && <VoicePanel />}
              {feature.key === 'chat' && <ChatPanel />}
              {feature.key === 'sms' && <SmsPanel />}
            </motion.div>
          </AnimatePresence>
        </PhoneFrame>
      </motion.div>

      {/* Tab switcher below the phone */}
      <div className="mt-5 flex flex-col items-center gap-2">
        <div
          className="inline-flex items-center gap-1 p-1 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(15,17,41,0.06)',
            boxShadow: '0 8px 24px -8px rgba(15,17,41,0.12)',
          }}
        >
          {FEATURES.map((f, i) => {
            const isActive = i === active
            const Icon = f.icon
            return (
              <button
                key={f.key}
                onClick={() => setActive(i)}
                className="relative flex items-center gap-1.5 px-3.5 py-2 rounded-full cursor-pointer transition-colors duration-300"
                style={{
                  background: isActive ? `${f.color}10` : 'transparent',
                  color: isActive ? f.color : '#6B7098',
                }}
              >
                <Icon size={12} strokeWidth={2} />
                <span
                  className="text-[11px] font-semibold tracking-wide"
                  style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
                >
                  {f.label}
                </span>
              </button>
            )
          })}
        </div>

        <div className="flex items-center gap-2.5">
          <span
            className="text-[10px] uppercase tracking-[0.2em] font-semibold text-text-secondary"
            style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
          >
            {feature.tagline}
          </span>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20">
      {/* Background gradient mesh */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(59,123,242,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,123,242,0.03) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div
          className="absolute rounded-full animate-orb-1"
          style={{
            width: 600,
            height: 600,
            top: '-10%',
            left: '-10%',
            background: 'radial-gradient(circle, rgba(59,123,242,0.10) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute rounded-full animate-orb-2"
          style={{
            width: 500,
            height: 500,
            top: '10%',
            right: '-8%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute rounded-full animate-orb-3"
          style={{
            width: 400,
            height: 400,
            bottom: '0%',
            left: '30%',
            background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[calc(100vh-80px)] py-6 lg:py-4">

          {/* Left: Copy */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 w-fit rounded-full px-4 py-2 mb-6"
              style={{
                background: 'rgba(59,123,242,0.06)',
                border: '1px solid rgba(59,123,242,0.14)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span
                className="text-[11px] font-semibold text-primary tracking-[0.22em] uppercase"
                style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
              >
                Built for small business
              </span>
            </motion.div>

            <h1 className="overflow-hidden mb-5">
              {[
                { text: 'Answer every call.', gradient: false },
                { text: 'Reply to every message.', gradient: false },
                { text: 'Win every customer.', gradient: true },
              ].map((line, i) => (
                <motion.span
                  key={line.text}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={`block leading-[1.05] tracking-[-0.045em] font-extrabold ${line.gradient ? 'text-gradient' : 'text-text'}`}
                  style={{
                    fontFamily: 'var(--font-outfit), Outfit, sans-serif',
                    fontSize: 'clamp(1.85rem, 4vw, 3.1rem)',
                  }}
                >
                  {line.text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="text-[15px] text-text-secondary leading-[1.65] max-w-[500px] mb-7"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
            >
              AI teammates handle your calls, chats, and follow-ups around the
              clock. Across voice, web, and SMS. Your team focuses on closing
              while the AI runs the rest.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 no-underline text-sm font-semibold text-white btn-gradient px-5 py-3 rounded-[11px] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
              >
                Book a Demo
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 no-underline text-sm font-semibold text-text px-5 py-3 rounded-[11px] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                style={{
                  background: 'rgba(0,0,0,0.04)',
                  border: '1px solid rgba(0,0,0,0.07)',
                  fontFamily: 'var(--font-outfit), Outfit, sans-serif',
                }}
              >
                See it in action
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-x-6 gap-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              {LIVE_INDICATORS.map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center"
                    style={{ background: `${color}14`, border: `1px solid ${color}24` }}
                  >
                    <Icon size={11} style={{ color }} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p
                      className="text-[11px] font-bold text-text leading-none"
                      style={{
                        fontFamily: 'var(--font-jetbrains), JetBrains Mono, monospace',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {value}
                    </p>
                    <p className="text-[10px] text-text-secondary mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Phone showcase */}
          <div className="lg:col-span-5">{mounted && <FeatureShowcase />}</div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-bg))' }}
      />
    </section>
  )
}
