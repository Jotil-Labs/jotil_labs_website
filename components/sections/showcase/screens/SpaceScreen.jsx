'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, ChevronDown, Check, Paperclip, Mic } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const BRAND_BLUE = '#3859a8'

const MODELS = [
  { name: 'GPT-4o', provider: 'OpenAI', color: '#10a37f' },
  { name: 'Claude 4.7', provider: 'Anthropic', color: '#d97706' },
  { name: 'Gemini 2.5', provider: 'Google', color: '#4285f4' },
  { name: 'Llama 3', provider: 'Meta', color: '#7c3aed' },
]

const TURNS = [
  {
    user: 'Prepare my quarterly sales report',
    ai: 'Q4 totals: $847K revenue, up 23% YoY. 312 deals closed across all channels.',
  },
  {
    user: 'Break it down by channel',
    ai: 'Voice $342K, Email $251K, Web $172K, SMS $82K. Voice converts highest at 34%.',
  },
  {
    user: 'Email me the full report',
    ai: 'Sent. Full PDF with charts and forecasts is in your inbox.',
  },
]

export function SpaceScreen({ isActive, onAction }) {
  const [phase, setPhase] = useState('idle')
  const [selectedModel, setSelectedModel] = useState(0)
  const [highlightedModel, setHighlightedModel] = useState(-1)
  const [pickerOpen, setPickerOpen] = useState(false)
  const [typedInput, setTypedInput] = useState('')
  const [sentMessages, setSentMessages] = useState([])
  const [aiInflight, setAiInflight] = useState(null)
  const [sendPulse, setSendPulse] = useState(false)
  const loopRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [sentMessages, aiInflight, typedInput])

  useEffect(() => {
    if (!isActive) {
      setPhase('idle')
      setSelectedModel(0)
      setHighlightedModel(-1)
      setPickerOpen(false)
      setTypedInput('')
      setSentMessages([])
      setAiInflight(null)
      setSendPulse(false)
      if (loopRef.current) loopRef.current.forEach(clearTimeout)
      return
    }

    const timers = []
    const t = (fn, ms) => { const id = setTimeout(fn, ms); timers.push(id); return id }

    const runLoop = () => {
      setPhase('idle')
      setPickerOpen(false)
      setHighlightedModel(-1)
      setTypedInput('')
      setSentMessages([])
      setAiInflight(null)
      setSendPulse(false)
      setSelectedModel(0)

      t(() => {
        setPhase('picker')
        setPickerOpen(true)
      }, 600)

      const hoverSchedule = [0, 1, 2, 1]
      hoverSchedule.forEach((idx, i) => {
        t(() => setHighlightedModel(idx), 1100 + i * 280)
      })

      t(() => {
        setSelectedModel(1)
        setHighlightedModel(-1)
      }, 2400)

      t(() => setPickerOpen(false), 2700)
      t(() => setPhase('conversation'), 3100)

      let now = 3300

      TURNS.forEach((turn) => {
        const userText = turn.user
        const userSpeed = 32

        t(() => setTypedInput(''), now)
        userText.split('').forEach((_, i) => {
          t(() => setTypedInput(userText.slice(0, i + 1)), now + (i + 1) * userSpeed)
        })
        now += userText.length * userSpeed + 250

        const pulseAt = now
        t(() => setSendPulse(true), pulseAt)
        t(() => setSendPulse(false), pulseAt + 280)
        now += 280

        t(() => {
          setSentMessages((prev) => [...prev, { role: 'user', text: userText }])
          setTypedInput('')
        }, now)
        now += 400

        t(() => setAiInflight({ phase: 'thinking', text: '' }), now)
        now += 1100

        const aiText = turn.ai
        const aiSpeed = 22
        t(() => setAiInflight({ phase: 'typing', text: '' }), now)

        aiText.split('').forEach((_, i) => {
          t(() => setAiInflight({ phase: 'typing', text: aiText.slice(0, i + 1) }), now + (i + 1) * aiSpeed)
        })
        now += aiText.length * aiSpeed + 80

        t(() => {
          setSentMessages((prev) => [...prev, { role: 'ai', text: aiText }])
          setAiInflight(null)
        }, now)
        now += 700
      })

      t(runLoop, now + 2500)
    }

    runLoop()
    loopRef.current = timers
    return () => timers.forEach(clearTimeout)
  }, [isActive])

  const model = MODELS[selectedModel]
  const showGreeting = sentMessages.length === 0 && !aiInflight

  return (
    <div className="w-full h-full flex flex-col bg-white text-[10px] relative overflow-hidden">
      {/* Top bar with model picker */}
      <div className="shrink-0 flex items-center justify-between px-3 pt-3 pb-2 border-b border-gray-100 relative">
        <div className="relative">
          <button
            className="flex items-center gap-1.5 px-2 py-1 rounded-lg transition-colors"
            style={{
              backgroundColor: pickerOpen ? `${model.color}10` : 'transparent',
              border: `1px solid ${pickerOpen ? `${model.color}40` : '#e5e7eb'}`,
            }}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: model.color }} />
            <span className="text-[10px] font-semibold text-gray-900">{model.name}</span>
            <ChevronDown
              className="w-2.5 h-2.5 text-gray-400 transition-transform duration-300"
              strokeWidth={2}
              style={{ transform: pickerOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>

          <AnimatePresence>
            {pickerOpen && (
              <motion.div
                initial={{ opacity: 0, y: -4, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-1 w-[170px] rounded-xl bg-white z-30 overflow-hidden"
                style={{
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 12px 32px rgba(15,17,41,0.10), 0 2px 8px rgba(15,17,41,0.05)',
                }}
              >
                <div className="px-2 py-1.5 border-b border-gray-100">
                  <p className="text-[8px] uppercase tracking-wider text-gray-400 font-semibold">Models</p>
                </div>
                <div className="py-1">
                  {MODELS.map((m, i) => {
                    const isHighlighted = i === highlightedModel
                    const isSelected = i === selectedModel
                    return (
                      <div
                        key={m.name}
                        className="flex items-center gap-2 px-2 py-1.5 transition-colors"
                        style={{
                          backgroundColor: isHighlighted ? `${m.color}10` : 'transparent',
                        }}
                      >
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: m.color }} />
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-semibold text-gray-900">{m.name}</p>
                          <p className="text-[8px] text-gray-400">{m.provider}</p>
                        </div>
                        {isSelected && (
                          <Check className="w-2.5 h-2.5" style={{ color: m.color }} strokeWidth={2.5} />
                        )}
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="text-[8px] text-green-600">Online</span>
        </div>
      </div>

      {/* Chat area */}
      <div ref={scrollRef} className="flex-1 px-3 py-3 overflow-y-auto flex flex-col">
        <AnimatePresence mode="wait">
          {showGreeting ? (
            <motion.div
              key="greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col items-center justify-center gap-2"
            >
              <div
                className="w-9 h-9 rounded-2xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_BLUE}cc)`,
                  boxShadow: `0 4px 14px ${BRAND_BLUE}33`,
                }}
              >
                <Logo size={16} tone="on-dark" animate={false} />
              </div>
              <div className="text-center">
                <p className="text-[12px] font-bold text-gray-900">Good afternoon</p>
                <p className="text-[9px] text-gray-400 mt-0.5">Powered by {model.name}</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="conversation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col gap-2"
            >
              {sentMessages.map((msg, i) => {
                if (msg.role === 'user') {
                  return (
                    <motion.div
                      key={`msg-${i}`}
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-end"
                    >
                      <div
                        className="max-w-[80%] px-2.5 py-1.5 text-[10px] leading-[1.4] rounded-xl rounded-br-sm text-gray-900"
                        style={{ backgroundColor: '#f1f3f5' }}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  )
                }
                return (
                  <motion.div
                    key={`msg-${i}`}
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-end gap-1.5"
                  >
                    <div
                      className="w-5.5 h-5.5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_BLUE}cc)` }}
                    >
                      <Logo size={10} tone="on-dark" animate={false} />
                    </div>
                    <div
                      className="max-w-[82%] px-2.5 py-1.5 text-[10px] leading-[1.4] rounded-xl rounded-bl-sm text-white"
                      style={{ backgroundColor: BRAND_BLUE }}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                )
              })}

              {aiInflight && (
                <div className="flex items-end gap-1.5">
                  <div className="relative shrink-0" style={{ width: 22, height: 22 }}>
                    {aiInflight.phase === 'thinking' && [0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="absolute rounded-full"
                        style={{
                          width: 22, height: 22,
                          top: 0, left: 0,
                          border: `1.5px solid ${BRAND_BLUE}`,
                          opacity: 0.35 - i * 0.08,
                          animation: `ring-expand 1.4s ease-out ${i * 0.35}s infinite`,
                        }}
                      />
                    ))}
                    <div
                      className="w-5.5 h-5.5 rounded-full flex items-center justify-center relative"
                      style={{
                        background: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_BLUE}cc)`,
                        animation: aiInflight.phase === 'thinking' ? 'orb-pulse 1.2s ease-in-out infinite' : 'none',
                      }}
                    >
                      <Logo size={10} tone="on-dark" animate={false} />
                    </div>
                  </div>

                  {aiInflight.phase === 'thinking' ? (
                    <div
                      className="flex items-center gap-1 px-2.5 py-2 rounded-xl rounded-bl-sm"
                      style={{ backgroundColor: BRAND_BLUE }}
                    >
                      {[0, 1, 2].map((d) => (
                        <span
                          key={d}
                          className="w-1 h-1 rounded-full"
                          style={{
                            backgroundColor: '#ffffff',
                            opacity: 0.7,
                            animation: `typing-dot 1.4s ease-in-out ${d * 0.2}s infinite`,
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <div
                      className="max-w-[82%] px-2.5 py-1.5 text-[10px] leading-[1.4] rounded-xl rounded-bl-sm text-white"
                      style={{ backgroundColor: BRAND_BLUE }}
                    >
                      {aiInflight.text}
                      <span
                        className="inline-block w-px ml-px align-middle"
                        style={{
                          height: 9,
                          backgroundColor: 'rgba(255,255,255,0.8)',
                          animation: 'caret-blink 0.8s step-end infinite',
                        }}
                      />
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input bar */}
      <div className="shrink-0 px-3 py-2 border-t border-gray-100 flex items-center gap-2">
        <Paperclip className="w-3 h-3 text-gray-400 shrink-0" strokeWidth={1.6} />
        <div className="flex-1 bg-gray-50 rounded-full px-3 py-1 text-[9px] flex items-center min-h-5">
          {typedInput ? (
            <span className="text-gray-800">
              {typedInput}
              <span
                className="inline-block w-px ml-px align-middle"
                style={{
                  height: 9,
                  backgroundColor: BRAND_BLUE,
                  animation: 'caret-blink 0.8s step-end infinite',
                }}
              />
            </span>
          ) : (
            <span className="text-gray-400">Ask anything...</span>
          )}
        </div>
        <Mic className="w-3 h-3 text-gray-400 shrink-0" strokeWidth={1.6} />
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
          style={{
            backgroundColor: BRAND_BLUE,
            transform: sendPulse ? 'scale(1.18)' : 'scale(1)',
            boxShadow: sendPulse ? `0 0 0 4px ${BRAND_BLUE}33` : 'none',
            transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out',
          }}
        >
          <Send className="w-2.5 h-2.5 text-white" strokeWidth={1.8} />
        </div>
      </div>
    </div>
  )
}
