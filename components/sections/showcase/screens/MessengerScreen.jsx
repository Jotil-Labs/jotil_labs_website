'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send } from 'lucide-react'

const channels = ['Web', 'SMS', 'WhatsApp', 'Teams']

const chatMessages = [
  { role: 'user', text: 'Hi, do you offer same-day service?' },
  { role: 'ai', text: 'Yes! We have same-day availability today. Would you like me to check open slots for your area?' },
  { role: 'user', text: "Yes please, I'm in downtown Lehi" },
  { role: 'typing', text: '' },
  { role: 'ai', text: "Great news! We have a 2:30 PM and a 4:00 PM slot available today. Want me to book one?" },
  { role: 'user', text: '2:30 works. Book it!' },
]

function JAvatar({ size = 18 }) {
  return (
    <div
      className="rounded-full flex items-center justify-center text-white font-bold shrink-0"
      style={{
        width: size,
        height: size,
        background: 'linear-gradient(135deg, #3859a8, #2a4688)',
        fontSize: size * 0.5,
      }}
    >
      J
    </div>
  )
}

export function MessengerScreen({ isActive }) {
  const [visibleMessages, setVisibleMessages] = useState(0)
  const [activeTab, setActiveTab] = useState(0)
  const [showWhatsAppBanner, setShowWhatsAppBanner] = useState(false)

  useEffect(() => {
    if (!isActive) {
      setVisibleMessages(0)
      setShowWhatsAppBanner(false)
      return
    }

    let msgIndex = 0
    const timer = setInterval(() => {
      msgIndex++
      if (msgIndex >= chatMessages.length) {
        setVisibleMessages(chatMessages.length)
        clearInterval(timer)
      } else {
        setVisibleMessages(msgIndex)
      }
    }, 600)

    setVisibleMessages(1)

    return () => clearInterval(timer)
  }, [isActive])

  // WhatsApp notification after message 3 appears
  useEffect(() => {
    if (visibleMessages === 3) {
      setShowWhatsAppBanner(true)
      const hideTimer = setTimeout(() => setShowWhatsAppBanner(false), 2000)
      return () => clearTimeout(hideTimer)
    }
  }, [visibleMessages])

  return (
    <div className="w-full h-full flex flex-col bg-white text-[11px] relative overflow-hidden">
      {/* WhatsApp notification banner */}
      <AnimatePresence>
        {showWhatsAppBanner && (
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
          <button
            key={ch}
            onClick={() => setActiveTab(i)}
            className="flex-1 pb-1.5 text-center text-[9px] font-medium relative"
            style={{ color: i === activeTab ? '#3859a8' : '#999' }}
          >
            {ch}
            {i === activeTab && (
              <span
                className="absolute bottom-0 left-1/4 right-1/4 h-[2px] rounded-full"
                style={{ backgroundColor: '#3859a8' }}
              />
            )}
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

      {/* Chat messages */}
      <div className="flex-1 px-3 py-2 overflow-hidden space-y-2">
        <AnimatePresence>
          {chatMessages.slice(0, visibleMessages).map((msg, i) => {
            if (msg.role === 'typing') {
              return (
                <motion.div
                  key={`typing-${i}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-end gap-1.5"
                >
                  <JAvatar size={16} />
                  <div className="bg-[#f1f3f5] rounded-xl rounded-bl-sm px-3 py-2 flex gap-1">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="w-1.5 h-1.5 rounded-full bg-gray-400"
                        style={{
                          animation: `typing-dot 1.2s ease-in-out ${d * 0.2}s infinite`,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )
            }

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
                    isUser
                      ? 'rounded-xl rounded-br-sm text-white'
                      : 'rounded-xl rounded-bl-sm text-gray-900'
                  }`}
                  style={{
                    backgroundColor: isUser ? '#3859a8' : '#f1f3f5',
                  }}
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
        <div className="flex-1 bg-gray-50 rounded-full px-3 py-1.5 text-[10px] text-gray-400">
          Type a message...
        </div>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: '#3859a8' }}
        >
          <Send className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  )
}
