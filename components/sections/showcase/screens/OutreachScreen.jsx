'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail, PhoneOff } from 'lucide-react'

function CountUp({ target, suffix = '', isActive }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) {
      setCount(0)
      return
    }
    const duration = 1500
    const steps = 30
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isActive, target])

  return `${count}${suffix}`
}

const stats = [
  { label: 'Contacted', value: 247, suffix: '' },
  { label: 'Reached', value: 68, suffix: '%' },
  { label: 'Booked', value: 34, suffix: '' },
]

const activityFeed = [
  { icon: Phone, name: 'Mike Torres', action: 'AI call completed', time: '2m ago' },
  { icon: MessageCircle, name: 'Lisa Park', action: 'AI SMS sent', time: '5m ago' },
  { icon: Mail, name: 'David Chen', action: 'AI email delivered', time: '8m ago' },
  { icon: PhoneOff, name: 'Ana Rivera', action: 'AI voicemail left', time: '12m ago' },
]

export function OutreachScreen({ isActive }) {
  return (
    <div className="w-full h-full flex flex-col bg-white text-[11px]">
      {/* Campaign header */}
      <div className="pt-9 px-4 pb-3 border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <p className="font-semibold text-xs text-gray-900">Campaign: Spring Launch</p>
        </div>
        <p className="text-[10px] text-gray-400">Running since 9:00 AM</p>
      </div>

      {/* Stat cards */}
      <div className="flex gap-2 px-3 py-3 shrink-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex-1 rounded-lg border border-gray-100 px-2 py-2 text-center"
          >
            <p className="text-base font-bold" style={{ color: '#3859a8' }}>
              <CountUp target={stat.value} suffix={stat.suffix} isActive={isActive} />
            </p>
            <p className="text-[9px] text-gray-400 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Activity feed */}
      <div className="px-3 flex-1 overflow-hidden">
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Recent Activity
        </p>
        <div className="space-y-1.5">
          {activityFeed.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                transition={{ duration: 0.35, delay: isActive ? i * 0.12 : 0, ease: 'easeOut' }}
                className="flex items-center gap-2 py-1.5 px-2 rounded-lg bg-gray-50/80"
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(56, 89, 168, 0.08)' }}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: '#3859a8' }} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10.5px] font-semibold text-gray-900 truncate">{item.name}</p>
                  <p className="text-[9px] text-gray-400 truncate">{item.action}</p>
                </div>
                <p className="text-[9px] text-gray-300 shrink-0">{item.time}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
