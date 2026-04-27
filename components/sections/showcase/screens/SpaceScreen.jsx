'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Users, BarChart3, Cpu, Settings } from 'lucide-react'

const sidebarIcons = [MessageCircle, Users, BarChart3, Cpu, Settings]

const PROMPT_TEXT = 'Compare response quality for receptionist v2.1 vs v2.3'
const RESPONSE_V1 = 'Response quality: 87%. Average handle time: 45s. Customer satisfaction: 4.2/5.'
const RESPONSE_V2 = 'Response quality: 94%. Average handle time: 38s. Customer satisfaction: 4.7/5.'

const LOOP_DURATION = 10000

export function SpaceScreen({ isActive, onAction }) {
  const [typedChars, setTypedChars] = useState(0)
  const [responseChars1, setResponseChars1] = useState(0)
  const [responseChars2, setResponseChars2] = useState(0)
  const [showMetrics, setShowMetrics] = useState(false)
  const loopRef = useRef(null)

  useEffect(() => {
    if (!isActive) {
      setTypedChars(0)
      setResponseChars1(0)
      setResponseChars2(0)
      setShowMetrics(false)
      if (loopRef.current) loopRef.current.forEach(clearTimeout)
      return
    }

    const timers = []
    const schedule = (fn, ms) => { const id = setTimeout(fn, ms); timers.push(id); return id }

    const runLoop = () => {
      setTypedChars(0)
      setResponseChars1(0)
      setResponseChars2(0)
      setShowMetrics(false)

      for (let i = 1; i <= PROMPT_TEXT.length; i++) {
        schedule(() => setTypedChars(i), 500 + i * 40)
      }

      const promptDone = 500 + PROMPT_TEXT.length * 40 + 300
      schedule(() => { if (onAction) onAction('model') }, promptDone)

      for (let i = 1; i <= RESPONSE_V1.length; i++) {
        schedule(() => setResponseChars1(i), promptDone + i * 20)
      }
      for (let i = 1; i <= RESPONSE_V2.length; i++) {
        schedule(() => setResponseChars2(i), promptDone + 200 + i * 20)
      }

      const responseDone = promptDone + Math.max(RESPONSE_V1.length, RESPONSE_V2.length + 200) * 20 + 300
      schedule(() => {
        setShowMetrics(true)
        if (onAction) onAction('perf')
      }, responseDone)

      schedule(() => { if (onAction) onAction('inbox') }, responseDone + 800)

      schedule(runLoop, LOOP_DURATION)
    }

    runLoop()
    loopRef.current = timers
    return () => timers.forEach(clearTimeout)
  }, [isActive, onAction])

  return (
    <div className="w-full h-full flex bg-[#fafbfd] text-[10px] overflow-hidden">
      <div className="w-12 bg-white border-r border-gray-100 flex flex-col items-center py-4 gap-4 shrink-0">
        {sidebarIcons.map((Icon, i) => (
          <div key={i} className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: i === 3 ? 'rgba(56, 89, 168, 0.1)' : 'transparent' }}>
            <Icon className="w-4 h-4" strokeWidth={1.5} style={{ color: i === 3 ? '#3859a8' : '#a0a0a0' }} />
          </div>
        ))}
      </div>

      <div className="flex-1 flex flex-col p-3 min-w-0">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold text-gray-900">AI Model Playground</p>
          <div className="px-2 py-0.5 rounded-full text-[9px] font-medium text-white" style={{ backgroundColor: '#3859a8' }}>Compare</div>
        </div>

        {/* Prompt input */}
        <div className="bg-white rounded-lg border border-gray-200 px-2.5 py-1.5 mb-3 text-[10px] text-gray-700 min-h-[28px]">
          {PROMPT_TEXT.slice(0, typedChars)}
          {typedChars < PROMPT_TEXT.length && typedChars > 0 && (
            <span className="inline-block w-px h-3 bg-gray-800 ml-px animate-pulse" />
          )}
          {typedChars === 0 && <span className="text-gray-300">Type a prompt...</span>}
        </div>

        {/* Model comparison panels */}
        <div className="flex gap-2 flex-1">
          {[
            { name: 'v2.1', response: RESPONSE_V1, chars: responseChars1, highlighted: false },
            { name: 'v2.3', response: RESPONSE_V2, chars: responseChars2, highlighted: true },
          ].map((model) => (
            <div
              key={model.name}
              className="flex-1 rounded-lg border p-2 flex flex-col"
              style={{
                borderColor: model.highlighted ? 'rgba(56, 89, 168, 0.25)' : '#e5e7eb',
                backgroundColor: model.highlighted ? 'rgba(56, 89, 168, 0.02)' : '#fff',
              }}
            >
              <p className="text-[10px] font-semibold text-gray-900 mb-1.5">Receptionist {model.name}</p>
              <p className="text-[9px] text-gray-600 leading-[1.4] flex-1">
                {model.response.slice(0, model.chars)}
                {model.chars > 0 && model.chars < model.response.length && (
                  <span className="inline-block w-px h-2.5 bg-gray-400 ml-px animate-pulse" />
                )}
              </p>
              <AnimatePresence>
                {showMetrics && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1.5 pt-1.5 border-t border-gray-100 text-[8px] text-gray-400"
                  >
                    Score: <span style={{ color: model.highlighted ? '#3859a8' : '#374151', fontWeight: 600 }}>{model.highlighted ? '94%' : '87%'}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
