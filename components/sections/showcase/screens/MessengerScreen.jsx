'use client'

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { Calendar, Bell, Ticket, Send, MessageSquare, Globe, MessageCircle, Users } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const CHANNELS = [
  { id: 'web', label: 'Web Chat', icon: Globe, color: '#6366F1' },
  { id: 'sms', label: 'SMS', icon: MessageSquare, color: '#3859a8' },
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle, color: '#25d366' },
  { id: 'teams', label: 'Teams', icon: Users, color: '#5b5fc7' },
]

const CONVERSATIONS = [
  {
    messages: [
      { role: 'user', text: "What's on the lunch menu today?" },
      { role: 'ai', text: "Today's specials: Grilled Salmon, Pasta Primavera, and Thai Curry Bowl." },
      { role: 'user', text: 'Can you remind me about my appointment tomorrow?' },
    ],
    action: { icon: Bell, label: 'Reminder set', sublabel: 'SMS at 9:00 AM' },
    finalMsg: "Done! You'll get an SMS at 9 AM tomorrow.",
  },
  {
    messages: [
      { role: 'user', text: 'Hey, do you have any openings this week?' },
      { role: 'ai', text: 'I have Thursday at 10 AM and Friday at 3 PM. Which works?' },
      { role: 'user', text: 'Thursday at 10, please.' },
    ],
    action: { icon: Calendar, label: 'Appointment booked', sublabel: 'Thu, 10:00 AM' },
    finalMsg: "You're all set! I'll send a confirmation.",
  },
  {
    messages: [
      { role: 'user', text: 'I need to reschedule my Friday meeting.' },
      { role: 'ai', text: 'Monday 2 PM or Tuesday 11 AM available. Preference?' },
      { role: 'user', text: 'Tuesday 11 works.' },
    ],
    action: { icon: Calendar, label: 'Rescheduled', sublabel: 'Tue, 11:00 AM' },
    finalMsg: 'Updated! Calendar invite sent.',
  },
  {
    messages: [
      { role: 'user', text: 'Can you create a support ticket for the billing issue?' },
      { role: 'ai', text: "I'll log it now with all conversation details. What's the impact?" },
      { role: 'user', text: 'High priority. Affecting payouts this week.' },
    ],
    action: { icon: Ticket, label: 'Ticket created', sublabel: 'Added to CRM' },
    finalMsg: 'Ticket #4821 assigned to your account manager.',
  },
]

const STACK_OFFSETS = [
  { x: 0, y: 0, scale: 1, opacity: 1 },
  { x: 18, y: -28, scale: 0.93, opacity: 0.7 },
  { x: 34, y: -52, scale: 0.86, opacity: 0.45 },
  { x: 48, y: -72, scale: 0.8, opacity: 0.25 },
]

function lerp(a, b, t) {
  return a + (b - a) * t
}

function ChannelCard({ channel, conversation, isActive, isFront, animated }) {
  const Icon = channel.icon
  const ActionIcon = conversation.action.icon
  const [phase, setPhase] = useState('idle')
  const [currentRole, setCurrentRole] = useState(null)
  const [typedText, setTypedText] = useState('')
  const [sentItems, setSentItems] = useState([])
  const [sendPulse, setSendPulse] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    const fullItems = [
      ...conversation.messages.map((m) => ({ kind: 'msg', ...m })),
      { kind: 'action' },
      { kind: 'msg', role: 'ai', text: conversation.finalMsg },
    ]

    if (!isActive || !isFront) {
      setPhase('idle')
      setCurrentRole(null)
      setTypedText('')
      setSentItems([])
      setSendPulse(false)
      return
    }

    if (!animated) {
      setPhase('idle')
      setCurrentRole(null)
      setTypedText('')
      setSentItems(fullItems)
      setSendPulse(false)
      return
    }

    const timers = []
    const t = (fn, ms) => { const id = setTimeout(fn, ms); timers.push(id); return id }

    const runCycle = () => {
      setPhase('idle')
      setCurrentRole(null)
      setTypedText('')
      setSentItems([])
      setSendPulse(false)

      const events = fullItems

      let now = 600

      events.forEach((event) => {
        if (event.kind === 'msg') {
          const isAI = event.role === 'ai'
          const text = event.text
          const speed = isAI ? 26 : 32

          if (isAI) {
            const startNow = now
            t(() => {
              setPhase('thinking')
              setCurrentRole('ai')
              setTypedText('')
            }, startNow)
            now += 850
            t(() => setPhase('typing'), now)
          } else {
            const startNow = now
            t(() => {
              setPhase('typing')
              setCurrentRole('user')
              setTypedText('')
            }, startNow)
          }

          const charsStart = now
          text.split('').forEach((_, i) => {
            t(() => setTypedText(text.slice(0, i + 1)), charsStart + (i + 1) * speed)
          })
          now += text.length * speed

          now += 220
          const pulseAt = now
          t(() => setSendPulse(true), pulseAt)
          t(() => setSendPulse(false), pulseAt + 280)

          now += 280
          const role = event.role
          t(() => {
            setSentItems((prev) => [...prev, { kind: 'msg', role, text }])
            setTypedText('')
            setPhase('idle')
            setCurrentRole(null)
          }, now)
          now += 480
        } else if (event.kind === 'action') {
          t(() => {
            setSentItems((prev) => [...prev, { kind: 'action' }])
          }, now)
          now += 1300
        }
      })

      t(runCycle, now + 2800)
    }

    const startId = setTimeout(runCycle, 200)
    timers.push(startId)

    return () => timers.forEach(clearTimeout)
  }, [isActive, isFront, animated, conversation])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [sentItems, phase, typedText])

  const showAvatarRings = phase === 'thinking' && currentRole === 'ai'
  const showAvatarPulse = (phase === 'thinking' || phase === 'typing') && currentRole === 'ai'
  const inputCaretColor = currentRole === 'ai' ? channel.color : '#3859a8'

  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden" style={{ borderRadius: 30 }}>
      <div
        className="flex items-center gap-2 px-3 shrink-0"
        style={{ paddingTop: 28, paddingBottom: 8, borderBottom: `2px solid ${channel.color}15` }}
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${channel.color}15` }}
        >
          <Icon size={18} strokeWidth={1.5} style={{ color: channel.color }} />
        </div>
        <div>
          <p className="text-[15px] font-bold leading-tight" style={{ color: channel.color }}>{channel.label}</p>
          <p className="text-[9px] text-gray-400">JotilLabs AI</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="text-[8px] text-green-600">Online</span>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 px-3 py-2 overflow-hidden">
        {sentItems.map((item, i) => {
          if (item.kind === 'msg') {
            const isUser = item.role === 'user'
            return (
              <div
                key={`item-${i}`}
                className={`flex mb-3 ${isUser ? 'justify-end' : 'items-end gap-1.5'}`}
                style={{ animation: 'sent-bubble-in 0.4s ease-out' }}
              >
                {!isUser && (
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'linear-gradient(135deg, #4a6fc2, #3859a8)' }}
                  >
                    <Logo size={9} tone="on-dark" animate={false} />
                  </div>
                )}
                <div
                  className={`max-w-[78%] px-2.5 py-1.5 text-[10px] leading-[1.4] ${
                    isUser
                      ? 'rounded-xl rounded-br-sm text-gray-900'
                      : 'rounded-xl rounded-bl-sm text-white'
                  }`}
                  style={{ backgroundColor: isUser ? '#f1f3f5' : channel.color }}
                >
                  {item.text}
                </div>
              </div>
            )
          }
          return (
            <div
              key={`item-${i}`}
              className="flex flex-col items-center py-2 my-1"
              style={{ animation: 'sent-bubble-in 0.4s ease-out' }}
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${channel.color}18, ${channel.color}08)` }}
              >
                <ActionIcon size={14} strokeWidth={1.5} style={{ color: channel.color }} />
              </div>
              <div className="flex items-center gap-1 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-[8px] font-semibold" style={{ color: channel.color }}>
                  {conversation.action.label}
                </span>
                <span className="text-[7px] text-gray-400">{conversation.action.sublabel}</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="shrink-0 px-3 py-2 border-t border-gray-100 flex items-center gap-2">
        <div className="relative shrink-0" style={{ width: 24, height: 24 }}>
          {showAvatarRings && [0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute rounded-full"
              style={{
                width: 24, height: 24,
                top: 0, left: 0,
                border: `1.5px solid ${channel.color}`,
                opacity: 0.35 - i * 0.08,
                animation: `ring-expand 1.4s ease-out ${i * 0.35}s infinite`,
              }}
            />
          ))}
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center relative"
            style={{
              background: `linear-gradient(135deg, ${channel.color}, ${channel.color}cc)`,
              animation: showAvatarPulse ? 'orb-pulse 1.2s ease-in-out infinite' : 'none',
            }}
          >
            <Logo size={10} tone="on-dark" animate={false} />
          </div>
        </div>
        <div className="flex-1 bg-gray-50 rounded-full px-3 py-1 text-[9px] flex items-center min-h-5">
          {phase === 'thinking' ? (
            <span className="flex items-center gap-0.75">
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="w-1 h-1 rounded-full"
                  style={{
                    backgroundColor: channel.color,
                    opacity: 0.6,
                    animation: `typing-dot 1.4s ease-in-out ${d * 0.2}s infinite`,
                  }}
                />
              ))}
            </span>
          ) : phase === 'typing' ? (
            <span className="text-gray-800">
              {typedText}
              <span
                className="inline-block w-px ml-px align-middle"
                style={{
                  height: 9,
                  backgroundColor: inputCaretColor,
                  animation: 'caret-blink 0.8s step-end infinite',
                }}
              />
            </span>
          ) : (
            <span className="text-gray-400">Type a message...</span>
          )}
        </div>
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
          style={{
            backgroundColor: channel.color,
            transform: sendPulse ? 'scale(1.18)' : 'scale(1)',
            boxShadow: sendPulse ? `0 0 0 4px ${channel.color}33` : 'none',
            transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out',
          }}
        >
          <Send className="w-3 h-3 text-white" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  )
}

export function MessengerScreen({ isActive, onAction, progressRef }) {
  const cardRefs = useRef([])
  const tickerRef = useRef(null)
  const [activeChannelIdx, setActiveChannelIdx] = useState(0)
  const lastActiveIdxRef = useRef(0)

  useEffect(() => {
    if (!isActive) {
      cardRefs.current.forEach((card) => {
        if (card) gsap.set(card, { clearProps: 'all' })
      })
      lastActiveIdxRef.current = 0
      setActiveChannelIdx(0)
      return
    }

    const updateCards = () => {
      const progress = progressRef?.current ?? 0
      const activeFloat = progress * (CHANNELS.length - 1)
      const newIdx = Math.max(0, Math.min(CHANNELS.length - 1, Math.round(activeFloat)))
      if (newIdx !== lastActiveIdxRef.current) {
        lastActiveIdxRef.current = newIdx
        setActiveChannelIdx(newIdx)
      }

      cardRefs.current.forEach((card, i) => {
        if (!card) return

        const rawDepth = i - activeFloat

        if (rawDepth < -0.8) {
          gsap.set(card, { x: -30, y: 30, scale: 0.8, opacity: 0, zIndex: 0 })
        } else if (rawDepth < 0) {
          const t = (rawDepth + 0.8) / 0.8
          gsap.set(card, {
            x: lerp(-30, STACK_OFFSETS[0].x, t),
            y: lerp(30, STACK_OFFSETS[0].y, t),
            scale: lerp(0.8, STACK_OFFSETS[0].scale, t),
            opacity: lerp(0, STACK_OFFSETS[0].opacity, t),
            zIndex: 10,
          })
        } else {
          const floor = Math.floor(rawDepth)
          const ceil = Math.min(floor + 1, 3)
          const frac = rawDepth - floor
          const fromIdx = Math.min(floor, 3)
          const toIdx = Math.min(ceil, 3)
          const from = STACK_OFFSETS[fromIdx]
          const to = STACK_OFFSETS[toIdx]

          gsap.set(card, {
            x: lerp(from.x, to.x, frac),
            y: lerp(from.y, to.y, frac),
            scale: lerp(from.scale, to.scale, frac),
            opacity: lerp(from.opacity, to.opacity, frac),
            zIndex: 10 - Math.round(rawDepth),
          })
        }
      })
    }

    updateCards()
    gsap.ticker.add(updateCards)
    tickerRef.current = updateCards

    return () => {
      gsap.ticker.remove(updateCards)
    }
  }, [isActive, progressRef])

  return (
    <div className="relative" style={{ width: 300, height: 640 }}>
      {CHANNELS.map((ch, i) => (
        <div
          key={ch.id}
          ref={(el) => { cardRefs.current[i] = el }}
          className="absolute inset-0"
          style={{
            willChange: 'transform, opacity',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
            borderRadius: 30,
            overflow: 'hidden',
          }}
        >
          <ChannelCard
            channel={ch}
            conversation={CONVERSATIONS[i]}
            isActive={isActive}
            isFront={i === activeChannelIdx}
            animated={ch.id === 'web'}
          />
        </div>
      ))}
    </div>
  )
}
