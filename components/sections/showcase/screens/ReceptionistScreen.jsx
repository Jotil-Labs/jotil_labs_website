'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PhoneCall, PhoneOff, Check } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const CONVERSATION = [
  { role: 'ai', text: 'Good morning! How can I help you today?' },
  { role: 'caller', text: "I'd like to schedule a consultation." },
  { role: 'ai', text: 'I have Thursday at 10 AM open. Does that work?' },
  { role: 'caller', text: 'Thursday at 10 works great.' },
]

const ACTIONS = [
  { id: 'calendar', label: 'Appointment booked', delay: 8800 },
  { id: 'sms', label: 'Confirmation SMS sent', delay: 9400 },
  { id: 'crm', label: 'Contact saved to CRM', delay: 10000 },
]

const FINAL_MSG = { role: 'ai', text: "All set! You'll get a confirmation shortly." }

const LOOP_DURATION = 13000

function RingingPhase() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#3859a8] to-[#2a4688] text-white">
      <div className="relative mb-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border-2 border-white/20"
            style={{
              animation: `ring-expand 2s ease-out ${i * 0.5}s infinite`,
              width: 72,
              height: 72,
              top: '50%',
              left: '50%',
              marginTop: -36,
              marginLeft: -36,
            }}
          />
        ))}
        <div className="w-[72px] h-[72px] rounded-full bg-white/15 flex items-center justify-center">
          <Logo size={36} tone="on-dark" animate={false} />
        </div>
      </div>
      <p className="text-sm font-semibold mt-2">JotilLabs AI</p>
      <p className="text-[11px] text-white/60 mt-0.5">Incoming Call...</p>

      <div className="flex gap-12 mt-10">
        <div className="flex flex-col items-center gap-1.5">
          <div className="w-12 h-12 rounded-full bg-red-500/90 flex items-center justify-center">
            <PhoneOff size={18} strokeWidth={1.5} />
          </div>
          <span className="text-[9px] text-white/50">Decline</span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center"
          >
            <PhoneCall size={18} strokeWidth={1.5} />
          </motion.div>
          <span className="text-[9px] text-white/50">Accept</span>
        </div>
      </div>
    </div>
  )
}

function WaveformBubble({ isAI }) {
  const barCount = 5
  return (
    <div className={`flex mb-1.5 ${isAI ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`px-3 py-2.5 ${
          isAI ? 'rounded-xl rounded-bl-sm bg-[#f1f3f5]' : 'rounded-xl rounded-br-sm'
        }`}
        style={isAI ? {} : { backgroundColor: '#3859a8' }}
      >
        <div className="flex items-center gap-[3px] h-[14px]">
          {Array.from({ length: barCount }).map((_, i) => (
            <div
              key={i}
              className="w-[3px] rounded-full"
              style={{
                backgroundColor: isAI ? '#3859a8' : 'rgba(255,255,255,0.8)',
                animation: `wave-bar 0.8s ease-in-out ${i * 0.1}s infinite`,
                height: 14,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ChatBubble({ line, index }) {
  const isAI = line.role === 'ai'
  return (
    <motion.div
      key={`msg-${index}`}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`flex mb-1.5 ${isAI ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className={`max-w-[80%] px-2.5 py-1.5 text-[10.5px] leading-[1.4] ${
          isAI ? 'rounded-xl rounded-bl-sm bg-[#f1f3f5] text-gray-900' : 'rounded-xl rounded-br-sm text-white'
        }`}
        style={isAI ? {} : { backgroundColor: '#3859a8' }}
      >
        {line.text}
      </div>
    </motion.div>
  )
}

function ActiveCallPhase({ messages, speakingRole, actions }) {
  return (
    <div className="w-full h-full flex flex-col bg-white text-[11px]">
      {/* Call header */}
      <div className="pt-8 pb-2 px-4 text-center" style={{ background: 'linear-gradient(to bottom, #3859a8, #2a4688)' }}>
        <p className="font-semibold text-sm text-white">Sarah Mitchell</p>
        <p className="text-[10px] text-white/60 mt-0.5">JotilLabs AI Answering</p>
        {/* Waveform */}
        <div className="flex items-center justify-center gap-[3px] mt-2 mb-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="w-[3px] rounded-full"
              style={{
                height: 16,
                backgroundColor: 'rgba(255,255,255,0.7)',
                animation: speakingRole ? `wave-bar 1.2s ease-in-out ${i * 0.12}s infinite` : 'none',
                transform: speakingRole ? undefined : 'scaleY(0.3)',
                transition: 'transform 0.3s',
              }}
            />
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 px-3 py-2 overflow-hidden">
        <AnimatePresence mode="popLayout">
          {messages.map((msg, i) => (
            <ChatBubble key={`bubble-${i}`} line={msg} index={i} />
          ))}

          {/* Active waveform for whoever is currently speaking */}
          {speakingRole && (
            <motion.div
              key={`wave-${speakingRole}-${messages.length}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <WaveformBubble isAI={speakingRole === 'ai'} />
            </motion.div>
          )}

          {/* Action indicators */}
          {actions.map((action) => (
            <motion.div
              key={`action-${action.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="flex items-center justify-center gap-1.5 py-1"
            >
              <div className="w-3.5 h-3.5 rounded-full bg-green-500/10 flex items-center justify-center">
                <Check size={8} strokeWidth={2.5} className="text-green-600" />
              </div>
              <span className="text-[9px] text-gray-400">{action.label}</span>
            </motion.div>
          ))}

          {/* Final AI message */}
          {actions.length === ACTIONS.length && (
            <motion.div
              key="final"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex justify-start mb-1.5"
            >
              <div className="max-w-[80%] px-2.5 py-1.5 text-[10.5px] leading-[1.4] rounded-xl rounded-bl-sm bg-[#f1f3f5] text-gray-900">
                {FINAL_MSG.text}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export function ReceptionistScreen({ isActive, onAction }) {
  const [phase, setPhase] = useState('ring')
  const [messages, setMessages] = useState([])
  const [speakingRole, setSpeakingRole] = useState(null)
  const [firedActions, setFiredActions] = useState([])
  const loopRef = useRef(null)

  useEffect(() => {
    if (!isActive) {
      setPhase('ring')
      setMessages([])
      setSpeakingRole(null)
      setFiredActions([])
      if (loopRef.current) loopRef.current.forEach(clearTimeout)
      return
    }

    const timers = []
    const schedule = (fn, ms) => {
      const id = setTimeout(fn, ms)
      timers.push(id)
      return id
    }

    const runLoop = () => {
      setPhase('ring')
      setMessages([])
      setSpeakingRole(null)
      setFiredActions([])

      schedule(() => setPhase('connect'), 2200)
      schedule(() => setPhase('active'), 3000)

      // Message 1: AI speaks (waveform first, then text)
      schedule(() => setSpeakingRole('ai'), 3000)
      schedule(() => { setSpeakingRole(null); setMessages([CONVERSATION[0]]) }, 3800)

      // Message 2: Caller speaks
      schedule(() => setSpeakingRole('caller'), 4200)
      schedule(() => { setSpeakingRole(null); setMessages([CONVERSATION[0], CONVERSATION[1]]) }, 5000)

      // Message 3: AI speaks
      schedule(() => setSpeakingRole('ai'), 5400)
      schedule(() => { setSpeakingRole(null); setMessages([CONVERSATION[0], CONVERSATION[1], CONVERSATION[2]]) }, 6400)

      // Message 4: Caller speaks
      schedule(() => setSpeakingRole('caller'), 6800)
      schedule(() => { setSpeakingRole(null); setMessages(CONVERSATION.slice(0, 4)) }, 7600)

      // Actions
      ACTIONS.forEach((action) => {
        schedule(() => {
          setFiredActions((prev) => [...prev, action])
          if (onAction) onAction(action.id)
        }, action.delay)
      })

      schedule(runLoop, LOOP_DURATION)
    }

    runLoop()
    loopRef.current = timers

    return () => timers.forEach(clearTimeout)
  }, [isActive, onAction])

  return (
    <AnimatePresence mode="wait">
      {(phase === 'ring' || phase === 'connect') && (
        <motion.div
          key="ring"
          className="absolute inset-0"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <RingingPhase />
        </motion.div>
      )}
      {phase === 'active' && (
        <motion.div
          key="active"
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ActiveCallPhase
            messages={messages}
            speakingRole={speakingRole}
            actions={firedActions}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
