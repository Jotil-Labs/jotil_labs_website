'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, Mail, PhoneOff } from 'lucide-react'

const stats = [
  { label: 'Contacted', target: 247 },
  { label: 'Reached', target: 68, suffix: '%' },
  { label: 'Booked', target: 34 },
]

const activityFeed = [
  { icon: Phone, name: 'John D.', action: 'Booked meeting', cardId: 'dialer' },
  { icon: MessageCircle, name: 'Lisa R.', action: 'Replied interested', cardId: 'dialer' },
  { icon: Mail, name: 'Mark T.', action: 'Email opened', cardId: 'email' },
  { icon: PhoneOff, name: 'Ana R.', action: 'Voicemail left', cardId: 'dialer' },
]

const LOOP_DURATION = 10000

function AnimatedStat({ label, target, suffix = '', progress }) {
  const value = Math.min(Math.floor(target * progress), target)
  return (
    <div className="flex-1 rounded-lg border border-gray-100 px-2 py-2 text-center">
      <p className="text-base font-bold" style={{ color: '#3859a8' }}>{value}{suffix}</p>
      <p className="text-[9px] text-gray-400 mt-0.5">{label}</p>
    </div>
  )
}

export function OutreachScreen({ isActive, onAction }) {
  const [visibleItems, setVisibleItems] = useState(0)
  const [statProgress, setStatProgress] = useState(0)
  const loopRef = useRef(null)

  useEffect(() => {
    if (!isActive) {
      setVisibleItems(0)
      setStatProgress(0)
      if (loopRef.current) loopRef.current.forEach(clearTimeout)
      return
    }

    const timers = []
    const schedule = (fn, ms) => { const id = setTimeout(fn, ms); timers.push(id); return id }

    const runLoop = () => {
      setVisibleItems(0)
      setStatProgress(0)

      for (let step = 1; step <= 20; step++) {
        schedule(() => setStatProgress(step / 20), 400 + step * 60)
      }

      activityFeed.forEach((item, i) => {
        schedule(() => {
          setVisibleItems(i + 1)
          if (onAction) onAction(item.cardId)
        }, 2000 + i * 1200)
      })

      schedule(() => { if (onAction) onAction('analytics') }, 7500)

      schedule(runLoop, LOOP_DURATION)
    }

    runLoop()
    loopRef.current = timers
    return () => timers.forEach(clearTimeout)
  }, [isActive, onAction])

  return (
    <div className="w-full h-full flex flex-col bg-white text-[11px]">
      <div className="pt-9 px-4 pb-3 border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <p className="font-semibold text-xs text-gray-900">Campaign: Spring Launch</p>
        </div>
        <p className="text-[10px] text-gray-400">Running since 9:00 AM</p>
      </div>

      <div className="flex gap-2 px-3 py-3 shrink-0">
        {stats.map((stat) => (
          <AnimatedStat key={stat.label} {...stat} progress={statProgress} />
        ))}
      </div>

      <div className="px-3 flex-1 overflow-hidden">
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Recent Activity</p>
        <div className="space-y-1.5">
          <AnimatePresence>
            {activityFeed.slice(0, visibleItems).map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="flex items-center gap-2 py-1.5 px-2 rounded-lg bg-gray-50/80"
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(56, 89, 168, 0.08)' }}>
                    <Icon className="w-3.5 h-3.5" style={{ color: '#3859a8' }} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10.5px] font-semibold text-gray-900 truncate">{item.name}</p>
                    <p className="text-[9px] text-gray-400 truncate">{item.action}</p>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
