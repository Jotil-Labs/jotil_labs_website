'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send } from 'lucide-react'

const channels = ['Web', 'SMS', 'WhatsApp', 'Teams']

const MESSAGES = [
  { role: 'user', text: 'Do you offer same-day service?' },
  { role: 'ai', text: 'Yes! I have 2:30 PM and 4:00 PM today.' },
  { role: 'user', text: '2:30 works. Book it!' },
  { role: 'ai', text: "Booked! I'll send confirmation to WhatsApp." },
]

const LOOP_DURATION = 10000

function JAvatar({ size = 18 }) {
  return (
    <div
      className="rounded-full flex items-center justify-center text-white font-bold shrink-0"
      style={{ width: size, height: size, background: 'linear-gradient(135deg, #3859a8, #2a4688)', fontSize: size * 0.5 }}
    >
      J
    </div>
  )
}

export function MessengerScreen({ isActive, onAction }) {
  const [visibleMessages, setVisibleMessages] = useState(0)
  const [showWhatsApp, setShowWhatsApp] = useState(false)
  const loopRef = useRef(null)

  useEffect(() => {
    if (!isActive) {
      setVisibleMessages(0)
      setShowWhatsApp(false)
      if (loopRef.current) loopRef.current.forEach(clearTimeout)
      return
    }

    const timers = []
    const schedule = (fn, ms) => { const id = setTimeout(fn, ms); timers.push(id); return id }

    const runLoop = () => {
      setVisibleMessages(0)
      setShowWhatsApp(false)

      schedule(() => setVisibleMessages(1), 800)
      schedule(() => setVisibleMessages(2), 2000)
      schedule(() => setVisibleMessages(3), 3200)

      schedule(() => {
        setShowWhatsApp(true)
        if (onAction) onAction('whatsapp')
      }, 4000)
      schedule(() => setShowWhatsApp(false), 5500)

      schedule(() => setVisibleMessages(4), 5000)

      schedule(() => { if (onAction) onAction('teams') }, 6500)
      schedule(() => { if (onAction) onAction('handoff') }, 7500)

      schedule(runLoop, LOOP_DURATION)
    }

    runLoop()
    loopRef.current = timers
    return () => timers.forEach(clearTimeout)
  }, [isActive, onAction])

  return (
    <div className="w-full h-full flex flex-col bg-white text-[11px] relative overflow-hidden">
      {/* WhatsApp banner */}
      <AnimatePresence>
        {showWhatsApp && (
          <motion.div
            initial={{ y: -40 }}
            animate={{ y: 0 }}
            exit={{ y: -40 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 right-0 z-20 bg-[#25d366] text-white px-3 py-2 flex items-center gap-2"
          >
            <span className="text-[10px] font-semibold">WhatsApp</span>
            <span className="text-[10px]">New message from a customer</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Channel tabs */}
      <div className="pt-8 px-2 flex border-b border-gray-100 shrink-0">
        {channels.map((ch, i) => (
          <button key={ch} className="flex-1 pb-1.5 text-center text-[9px] font-medium relative" style={{ color: i === 0 ? '#3859a8' : '#999' }}>
            {ch}
            {i === 0 && <span className="absolute bottom-0 left-1/4 right-1/4 h-[2px] rounded-full" style={{ backgroundColor: '#3859a8' }} />}
          </button>
        ))}
      </div>

      {/* Chat header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-50 shrink-0">
        <JAvatar size={24} />
        <div>
          <p className="text-[11px] font-semibold text-gray-900">JotilLabs AI</p>
          <p className="text-[9px] text-green-600 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            Online now
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-3 py-2 overflow-hidden space-y-2">
        <AnimatePresence>
          {MESSAGES.slice(0, visibleMessages).map((msg, i) => {
            const isUser = msg.role === 'user'
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`flex ${isUser ? 'justify-end' : 'items-end gap-1.5'}`}
              >
                {!isUser && <JAvatar size={16} />}
                <div
                  className={`max-w-[75%] px-2.5 py-1.5 text-[10.5px] leading-[1.4] ${
                    isUser ? 'rounded-xl rounded-br-sm text-white' : 'rounded-xl rounded-bl-sm text-gray-900'
                  }`}
                  style={{ backgroundColor: isUser ? '#3859a8' : '#f1f3f5' }}
                >
                  {msg.text}
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Input bar */}
      <div className="px-3 py-2 border-t border-gray-100 flex items-center gap-2 shrink-0">
        <div className="flex-1 bg-gray-50 rounded-full px-3 py-1.5 text-[10px] text-gray-400">Type a message...</div>
        <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#3859a8' }}>
          <Send className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  )
}
