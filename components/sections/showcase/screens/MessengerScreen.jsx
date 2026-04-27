'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Calendar, Bell, Ticket, Send, MessageSquare, Globe, MessageCircle, Users } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const CHANNELS = [
  { id: 'sms', label: 'SMS', icon: MessageSquare, color: '#3859a8' },
  { id: 'web', label: 'Web Chat', icon: Globe, color: '#6366F1' },
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle, color: '#25d366' },
  { id: 'teams', label: 'Teams', icon: Users, color: '#5b5fc7' },
]

const CONVERSATIONS = [
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
      { role: 'user', text: "What's on the lunch menu today?" },
      { role: 'ai', text: "Today's specials: Grilled Salmon, Pasta Primavera, and Thai Curry Bowl." },
      { role: 'user', text: 'Can you remind me about my appointment tomorrow?' },
    ],
    action: { icon: Bell, label: 'Reminder set', sublabel: 'SMS at 9:00 AM' },
    finalMsg: "Done! You'll get an SMS at 9 AM tomorrow.",
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
      { role: 'ai', text: "I'll create that with all conversation details." },
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

function ChannelCard({ channel, conversation }) {
  const Icon = channel.icon
  const ActionIcon = conversation.action.icon

  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden" style={{ borderRadius: 30 }}>
      <div
        className="flex items-center gap-2 px-3 shrink-0"
        style={{ paddingTop: 28, paddingBottom: 8, borderBottom: `2px solid ${channel.color}15` }}
      >
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${channel.color}15` }}
        >
          <Icon size={14} strokeWidth={1.5} style={{ color: channel.color }} />
        </div>
        <div>
          <p className="text-[11px] font-bold" style={{ color: channel.color }}>{channel.label}</p>
          <p className="text-[8px] text-gray-400">JotilLabs AI</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="text-[8px] text-green-600">Online</span>
        </div>
      </div>

      <div className="flex-1 px-3 py-2 overflow-hidden">
        {conversation.messages.map((msg, i) => (
          <div
            key={i}
            className={`flex mb-1.5 ${msg.role === 'user' ? 'justify-end' : 'items-end gap-1.5'}`}
          >
            {msg.role === 'ai' && (
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(135deg, #4a6fc2, #3859a8)' }}
              >
                <Logo size={9} tone="on-dark" animate={false} />
              </div>
            )}
            <div
              className={`max-w-[78%] px-2.5 py-1.5 text-[10px] leading-[1.4] ${
                msg.role === 'user'
                  ? 'rounded-xl rounded-br-sm text-white'
                  : 'rounded-xl rounded-bl-sm text-gray-900'
              }`}
              style={{ backgroundColor: msg.role === 'user' ? channel.color : '#f1f3f5' }}
            >
              {msg.text}
            </div>
          </div>
        ))}

        <div className="flex flex-col items-center py-2 my-1">
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

        <div className="flex items-end gap-1.5 mb-1.5">
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
            style={{ background: 'linear-gradient(135deg, #4a6fc2, #3859a8)' }}
          >
            <Logo size={9} tone="on-dark" animate={false} />
          </div>
          <div className="max-w-[78%] px-2.5 py-1.5 text-[10px] leading-[1.4] rounded-xl rounded-bl-sm text-gray-900 bg-[#f1f3f5]">
            {conversation.finalMsg}
          </div>
        </div>

        <div className="flex items-end gap-1.5">
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
            style={{ background: 'linear-gradient(135deg, #4a6fc2, #3859a8)' }}
          >
            <Logo size={9} tone="on-dark" animate={false} />
          </div>
          <div className="flex items-center gap-[3px] px-2.5 py-2 rounded-xl rounded-bl-sm bg-[#f1f3f5]">
            {[0, 1, 2].map((dot) => (
              <div
                key={dot}
                className="w-[5px] h-[5px] rounded-full"
                style={{
                  backgroundColor: channel.color,
                  opacity: 0.5,
                  animation: `typing-dot 1.4s ease-in-out ${dot * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="shrink-0 px-3 py-2 border-t border-gray-100 flex items-center gap-2">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
          style={{ background: `linear-gradient(135deg, ${channel.color}, ${channel.color}cc)` }}
        >
          <Logo size={10} tone="on-dark" animate={false} />
        </div>
        <div className="flex-1 bg-gray-50 rounded-full px-3 py-1 text-[9px] text-gray-400">
          Type a message...
        </div>
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: channel.color }}
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

  useEffect(() => {
    if (!isActive) {
      cardRefs.current.forEach((card) => {
        if (card) gsap.set(card, { clearProps: 'all' })
      })
      return
    }

    const updateCards = () => {
      const progress = progressRef?.current ?? 0
      const activeFloat = progress * (CHANNELS.length - 1)

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
          <ChannelCard channel={ch} conversation={CONVERSATIONS[i]} />
        </div>
      ))}
    </div>
  )
}
