'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Calendar, Bell, Ticket, Sparkles, MessageSquare, Globe, MessageCircle, Users } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const CHANNELS = [
  { id: 'sms', label: 'SMS', icon: MessageSquare, color: '#3859a8' },
  { id: 'web', label: 'Web Chat', icon: Globe, color: '#6366F1' },
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle, color: '#25d366' },
  { id: 'teams', label: 'Teams', icon: Users, color: '#5b5fc7' },
]

const CHANNEL_SCRIPTS = {
  0: [
    { type: 'msg', role: 'user', text: 'Hey, do you have any openings this week?' },
    { type: 'msg', role: 'ai', text: 'I have Thursday at 10 AM and Friday at 3 PM. Which works?' },
    { type: 'msg', role: 'user', text: 'Thursday at 10, please.' },
    { type: 'action', id: 'calendar', icon: Calendar, label: 'Appointment booked', sublabel: 'Thu, 10:00 AM' },
    { type: 'msg', role: 'ai', text: "You're all set! I'll send a confirmation." },
  ],
  1: [
    { type: 'msg', role: 'user', text: "What's on the lunch menu today?" },
    { type: 'msg', role: 'ai', text: "Today's specials: Grilled Salmon, Pasta Primavera, and Thai Curry Bowl." },
    { type: 'msg', role: 'user', text: 'Can you remind me about my appointment tomorrow?' },
    { type: 'action', id: 'reminder', icon: Bell, label: 'Reminder set', sublabel: 'SMS at 9:00 AM' },
    { type: 'msg', role: 'ai', text: "Done! You'll get an SMS at 9 AM tomorrow." },
  ],
  2: [
    { type: 'msg', role: 'user', text: 'I need to reschedule my Friday meeting.' },
    { type: 'msg', role: 'ai', text: 'Monday 2 PM or Tuesday 11 AM available. Preference?' },
    { type: 'msg', role: 'user', text: 'Tuesday 11 works.' },
    { type: 'action', id: 'reschedule', icon: Calendar, label: 'Rescheduled', sublabel: 'Tue, 11:00 AM' },
    { type: 'msg', role: 'ai', text: 'Updated! Calendar invite sent.' },
  ],
  3: [
    { type: 'msg', role: 'user', text: 'Can you create a support ticket for the billing issue?' },
    { type: 'msg', role: 'ai', text: "I'll create that with all conversation details." },
    { type: 'action', id: 'ticket', icon: Ticket, label: 'Ticket created', sublabel: 'Added to CRM' },
    { type: 'msg', role: 'ai', text: 'Ticket #4821 assigned to your account manager.' },
  ],
}

const LOOP_DURATION = 40000
const TYPE_DUR = 1000
const MSG_GAP = 400
const USER_GAP = 500
const ACTION_LEAD = 200
const ACTION_DUR = 1000
const ACTION_TAIL = 300
const CHANNEL_SWITCH = 1200

function ChannelStrip({ channel, isActive }) {
  const Icon = channel.icon
  return (
    <motion.div
      layout
      className="flex items-center gap-2 px-2.5 overflow-hidden"
      animate={{
        height: isActive ? 32 : 22,
        opacity: isActive ? 1 : 0.45,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        borderLeft: isActive ? `3px solid ${channel.color}` : '3px solid transparent',
        background: isActive ? `${channel.color}08` : 'transparent',
      }}
    >
      <div
        className="shrink-0 rounded flex items-center justify-center"
        style={{
          width: isActive ? 18 : 14,
          height: isActive ? 18 : 14,
          backgroundColor: `${channel.color}15`,
          transition: 'width 0.4s, height 0.4s',
        }}
      >
        <Icon size={isActive ? 10 : 8} strokeWidth={1.5} style={{ color: channel.color }} />
      </div>
      <span
        className="font-semibold truncate"
        style={{
          fontSize: isActive ? 10 : 8,
          color: isActive ? channel.color : '#999',
          transition: 'font-size 0.4s, color 0.4s',
        }}
      >
        {channel.label}
      </span>
      {isActive && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="ml-auto w-1.5 h-1.5 rounded-full shrink-0"
          style={{ backgroundColor: channel.color }}
        />
      )}
    </motion.div>
  )
}

function ChatBubble({ msg }) {
  const isUser = msg.role === 'user'
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`flex mb-1.5 ${isUser ? 'justify-end' : 'items-end gap-1.5'}`}
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
          isUser ? 'rounded-xl rounded-br-sm text-white' : 'rounded-xl rounded-bl-sm text-gray-900'
        }`}
        style={{ backgroundColor: isUser ? '#3859a8' : '#f1f3f5' }}
      >
        {msg.text}
      </div>
    </motion.div>
  )
}

function BlingAction({ action }) {
  const Icon = action.icon
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center py-2 my-1"
    >
      <div className="relative">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: 6, height: 6,
              top: '50%', left: '50%',
              marginTop: [-14, -14, 8, 8][i],
              marginLeft: [-14, 8, -14, 8][i],
              animation: `bling-sparkle 0.8s ease-out ${i * 0.1}s`,
              animationFillMode: 'forwards',
              opacity: 0,
            }}
          >
            <Sparkles size={6} className="text-amber-400" />
          </div>
        ))}
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, rgba(56,89,168,0.12), rgba(56,89,168,0.06))',
            animation: 'bling-in 0.5s ease-out',
          }}
        >
          <Icon size={16} strokeWidth={1.5} style={{ color: '#3859a8' }} />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.2 }}
        className="flex items-center gap-1 mt-1.5"
      >
        <div className="w-3 h-3 rounded-full bg-green-500/15 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
        </div>
        <span className="text-[9px] font-semibold" style={{ color: '#3859a8' }}>{action.label}</span>
        <span className="text-[8px] text-gray-400">{action.sublabel}</span>
      </motion.div>
    </motion.div>
  )
}

function TypingOrb() {
  return (
    <div className="flex justify-start mb-1.5">
      <div className="flex items-center gap-1.5">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
          style={{
            background: 'linear-gradient(135deg, #4a6fc2, #3859a8, #2a4688)',
            animation: 'orb-pulse 1.2s ease-in-out infinite',
          }}
        >
          <Logo size={12} tone="on-dark" animate={false} />
        </div>
        <div className="flex items-center gap-[2px] px-2 py-1.5 rounded-xl rounded-bl-sm bg-[#f1f3f5]">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="w-[2.5px] rounded-full"
              style={{
                height: 12,
                backgroundColor: '#3859a8',
                animation: `wave-bar 0.7s ease-in-out ${i * 0.08}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function MessengerScreen({ isActive, onAction }) {
  const [items, setItems] = useState([])
  const [activeChannel, setActiveChannel] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [blingAction, setBlingAction] = useState(null)
  const scrollRef = useRef(null)
  const loopRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [items, isTyping, blingAction])

  useEffect(() => {
    if (!isActive) {
      setItems([])
      setActiveChannel(0)
      setIsTyping(false)
      setBlingAction(null)
      if (loopRef.current) loopRef.current.forEach(clearTimeout)
      return
    }

    const timers = []
    const schedule = (fn, ms) => {
      const id = setTimeout(fn, ms)
      timers.push(id)
      return id
    }

    const playChannel = (chIdx, startAt) => {
      let t = startAt
      const script = CHANNEL_SCRIPTS[chIdx]

      script.forEach((step) => {
        if (step.type === 'msg') {
          if (step.role === 'ai') {
            schedule(() => setIsTyping(true), t)
            t += TYPE_DUR
            const msg = step
            schedule(() => {
              setIsTyping(false)
              setItems((prev) => [...prev, msg])
            }, t)
            t += MSG_GAP
          } else {
            const msg = step
            schedule(() => setItems((prev) => [...prev, msg]), t)
            t += USER_GAP
          }
        } else if (step.type === 'action') {
          t += ACTION_LEAD
          const action = step
          schedule(() => {
            setBlingAction(action)
            if (onAction) onAction(action.id)
          }, t)
          t += ACTION_DUR
          schedule(() => {
            setBlingAction(null)
            setItems((prev) => [...prev, action])
          }, t)
          t += ACTION_TAIL
        }
      })

      return t
    }

    const runLoop = () => {
      setItems([])
      setActiveChannel(0)
      setIsTyping(false)
      setBlingAction(null)

      let t = 600
      t = playChannel(0, t)

      for (let ch = 1; ch < CHANNELS.length; ch++) {
        t += 400
        const chIdx = ch
        schedule(() => {
          setActiveChannel(chIdx)
          setItems([])
          setIsTyping(false)
          setBlingAction(null)
        }, t)
        t += 800
        t = playChannel(chIdx, t)
      }

      schedule(runLoop, Math.max(t + 2000, LOOP_DURATION))
    }

    runLoop()
    loopRef.current = timers
    return () => timers.forEach(clearTimeout)
  }, [isActive, onAction])

  return (
    <div className="w-full h-full flex flex-col bg-white text-[11px] relative overflow-hidden">
      {/* Channel strip stack */}
      <div className="pt-7 shrink-0 border-b border-gray-100">
        {CHANNELS.map((ch, i) => (
          <ChannelStrip key={ch.id} channel={ch} isActive={activeChannel === i} />
        ))}
      </div>

      {/* Chat header */}
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-gray-50 shrink-0">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
          style={{ background: 'linear-gradient(135deg, #4a6fc2, #3859a8)' }}
        >
          <Logo size={11} tone="on-dark" animate={false} />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-gray-900">JotilLabs AI</p>
          <p className="text-[9px] text-green-600 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            Online now
          </p>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 px-2.5 py-1.5 overflow-hidden">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => {
            if (item.type === 'msg') {
              return <ChatBubble key={`msg-${activeChannel}-${i}`} msg={item} />
            }
            if (item.type === 'action') {
              return (
                <motion.div
                  key={`action-${activeChannel}-${item.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <BlingAction action={item} />
                </motion.div>
              )
            }
            return null
          })}

          {isTyping && (
            <motion.div
              key={`typing-${activeChannel}-${items.length}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <TypingOrb />
            </motion.div>
          )}

          {blingAction && (
            <motion.div
              key={`bling-${activeChannel}-${blingAction.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <BlingAction action={blingAction} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom orb + input */}
      <div className="shrink-0 px-3 py-2 border-t border-gray-100 flex items-center gap-2">
        <div className="relative">
          {isTyping && [0, 1].map((i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 28, height: 28,
                top: '50%', left: '50%',
                marginTop: -14, marginLeft: -14,
                border: '1px solid rgba(56,89,168,0.12)',
                animation: `ring-expand 1.4s ease-out ${i * 0.35}s infinite`,
              }}
            />
          ))}
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{
              background: isTyping
                ? 'linear-gradient(135deg, #22D3EE, #3859a8, #6366F1)'
                : 'linear-gradient(135deg, #4a6fc2, #3859a8)',
              boxShadow: isTyping
                ? '0 0 12px rgba(34,211,238,0.4), 0 0 20px rgba(56,89,168,0.2)'
                : '0 2px 6px rgba(56,89,168,0.2)',
              animation: isTyping ? 'orb-pulse 1s ease-in-out infinite' : 'none',
              transition: 'background 0.4s, box-shadow 0.4s',
            }}
          >
            <Logo size={11} tone="on-dark" animate={false} />
          </div>
        </div>
        <div className="flex-1 bg-gray-50 rounded-full px-3 py-1.5 text-[10px] text-gray-400">Type a message...</div>
        <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#3859a8' }}>
          <Send className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  )
}
