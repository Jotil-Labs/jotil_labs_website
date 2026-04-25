'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User } from 'lucide-react'

const transcriptLines = [
  { role: 'ai', text: 'Good morning! Thanks for calling. How can I help you today?' },
  { role: 'caller', text: "Hi, I'd like to schedule a consultation." },
  { role: 'ai', text: 'I have availability tomorrow at 2 PM or Thursday at 10 AM. Which works better?' },
  { role: 'caller', text: 'Thursday at 10 works great.' },
]

export function ReceptionistScreen({ isActive }) {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (!isActive) {
      setVisibleLines(0)
      return
    }

    let lineIndex = 0
    const timer = setInterval(() => {
      lineIndex++
      if (lineIndex >= transcriptLines.length) {
        setVisibleLines(transcriptLines.length)
        clearInterval(timer)
      } else {
        setVisibleLines(lineIndex)
      }
    }, 600)

    // Show first line immediately
    setVisibleLines(1)

    return () => clearInterval(timer)
  }, [isActive])

  return (
    <div className="w-full h-full flex flex-col bg-white text-[11px]">
      {/* Call header with gradient */}
      <div
        className="pt-9 pb-3 px-4 text-white text-center"
        style={{ background: 'linear-gradient(to bottom, #3859a8, #2a4688)' }}
      >
        {/* Caller avatar */}
        <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-1.5">
          <User className="w-6 h-6 text-white/80" strokeWidth={1.5} />
        </div>
        <p className="font-semibold text-sm">Sarah Mitchell</p>
        <p className="text-[10px] text-white/70 mt-0.5">JotilLabs AI Answering</p>
        <p className="text-xs font-mono mt-1 text-white/90">0:14</p>
      </div>

      {/* Waveform bars */}
      <div className="flex items-center justify-center gap-[3px] py-3 bg-gradient-to-b from-[#2a4688]/5 to-transparent">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="w-[3px] rounded-full"
            style={{
              height: 20,
              backgroundColor: '#3859a8',
              animation: isActive ? `wave-bar 1.2s ease-in-out ${i * 0.12}s infinite` : 'none',
              transform: isActive ? undefined : 'scaleY(0.4)',
            }}
          />
        ))}
      </div>

      {/* Live Transcript */}
      <div className="flex-1 px-3 overflow-hidden">
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Live Transcript
        </p>
        <div className="space-y-2">
          <AnimatePresence>
            {transcriptLines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <p className="text-[9px] font-semibold text-gray-400 mb-0.5">
                  {line.role === 'ai' ? 'AI Assistant' : 'Caller'}
                </p>
                <p
                  className="text-[10.5px] leading-[1.4]"
                  style={{ color: line.role === 'ai' ? '#3859a8' : '#1a1a2e' }}
                >
                  {line.text}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
