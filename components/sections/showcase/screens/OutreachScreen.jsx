'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileSpreadsheet, Phone, MessageCircle, Mail, Check, Upload } from 'lucide-react'

const CONTACTS_TOTAL = 247

const CHANNELS = [
  { id: 'call', icon: Phone, label: 'Calling leads', color: '#3859a8', cardId: 'dialer' },
  { id: 'sms', icon: MessageCircle, label: 'Sending SMS', color: '#22D3EE', cardId: 'dialer' },
  { id: 'email', icon: Mail, label: 'Sending emails', color: '#6366F1', cardId: 'email' },
]

const FINAL_STATS = [
  { label: 'Contacted', target: 247 },
  { label: 'Reached', target: 68, suffix: '%' },
  { label: 'Booked', target: 34 },
]

const PHASE_TIMES = {
  uploadStart: 300,
  uploadDuration: 1800,
  parsed: 2500,
  channelStart: 3300,
  channelDuration: 1700,
  finalStats: 9300,
  loop: 12000,
}

function ProgressBar({ progress, color }) {
  return (
    <div className="w-full h-1 rounded-full bg-gray-100 overflow-hidden">
      <div
        className="h-full rounded-full transition-[width] duration-[60ms] ease-linear"
        style={{ width: `${progress * 100}%`, backgroundColor: color }}
      />
    </div>
  )
}

function ChannelRow({ channel, state, count }) {
  const Icon = channel.icon
  const isActive = state === 'active'
  const isDone = state === 'done'
  const progress = isDone ? 1 : isActive ? Math.min(count / CONTACTS_TOTAL, 1) : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: state === 'pending' ? 0.4 : 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-2.5 py-2 px-2.5 rounded-xl"
      style={{
        backgroundColor: isActive ? `${channel.color}10` : '#f8f9fb',
        border: `1px solid ${isActive ? `${channel.color}30` : 'transparent'}`,
        transition: 'background-color 0.3s, border-color 0.3s',
      }}
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 relative"
        style={{
          backgroundColor: isActive || isDone ? `${channel.color}18` : 'rgba(0,0,0,0.04)',
          transition: 'background-color 0.3s',
        }}
      >
        {isActive && (
          <span
            className="absolute inset-0 rounded-lg"
            style={{
              border: `1.5px solid ${channel.color}`,
              animation: 'ring-expand 1.4s ease-out infinite',
              opacity: 0.4,
            }}
          />
        )}
        <Icon className="w-4 h-4" style={{ color: isActive || isDone ? channel.color : '#9ca3af' }} strokeWidth={1.6} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[10.5px] font-semibold text-gray-900">{channel.label}</p>
          <p className="text-[10px] font-mono tabular-nums" style={{ color: isActive || isDone ? channel.color : '#9ca3af' }}>
            {Math.floor(progress * CONTACTS_TOTAL)}/{CONTACTS_TOTAL}
          </p>
        </div>
        <ProgressBar progress={progress} color={channel.color} />
      </div>
      {isDone && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: '#22c55e' }}
        >
          <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
        </motion.div>
      )}
    </motion.div>
  )
}

function FinalStatCard({ label, target, suffix = '', progress }) {
  const value = Math.min(Math.floor(target * progress), target)
  return (
    <div className="flex-1 rounded-lg border border-gray-100 bg-white px-2 py-2 text-center">
      <p className="text-[15px] font-bold tabular-nums" style={{ color: '#3859a8' }}>{value}{suffix}</p>
      <p className="text-[8.5px] text-gray-400 mt-0.5">{label}</p>
    </div>
  )
}

export function OutreachScreen({ isActive, onAction }) {
  const [phase, setPhase] = useState('idle')
  const [uploadProgress, setUploadProgress] = useState(0)
  const [channelStates, setChannelStates] = useState(['pending', 'pending', 'pending'])
  const [channelCounts, setChannelCounts] = useState([0, 0, 0])
  const [finalStatsProgress, setFinalStatsProgress] = useState(0)
  const loopRef = useRef(null)

  useEffect(() => {
    if (!isActive) {
      setPhase('idle')
      setUploadProgress(0)
      setChannelStates(['pending', 'pending', 'pending'])
      setChannelCounts([0, 0, 0])
      setFinalStatsProgress(0)
      if (loopRef.current) loopRef.current.forEach(clearTimeout)
      return
    }

    const timers = []
    const schedule = (fn, ms) => { const id = setTimeout(fn, ms); timers.push(id); return id }

    const runLoop = () => {
      setPhase('idle')
      setUploadProgress(0)
      setChannelStates(['pending', 'pending', 'pending'])
      setChannelCounts([0, 0, 0])
      setFinalStatsProgress(0)

      schedule(() => setPhase('upload'), PHASE_TIMES.uploadStart)

      const uploadSteps = 30
      for (let i = 0; i <= uploadSteps; i++) {
        schedule(() => setUploadProgress(i / uploadSteps), PHASE_TIMES.uploadStart + (i / uploadSteps) * PHASE_TIMES.uploadDuration)
      }

      schedule(() => setPhase('parsed'), PHASE_TIMES.parsed)
      schedule(() => setPhase('channels'), PHASE_TIMES.channelStart)

      CHANNELS.forEach((ch, idx) => {
        const start = PHASE_TIMES.channelStart + idx * PHASE_TIMES.channelDuration
        schedule(() => {
          setChannelStates((prev) => {
            const next = [...prev]
            next[idx] = 'active'
            return next
          })
          if (onAction) onAction(ch.cardId)
        }, start)

        const countSteps = 24
        for (let s = 1; s <= countSteps; s++) {
          schedule(() => {
            setChannelCounts((prev) => {
              const next = [...prev]
              next[idx] = Math.floor(CONTACTS_TOTAL * (s / countSteps))
              return next
            })
          }, start + (s / countSteps) * (PHASE_TIMES.channelDuration - 200))
        }

        schedule(() => {
          setChannelStates((prev) => {
            const next = [...prev]
            next[idx] = 'done'
            return next
          })
        }, start + PHASE_TIMES.channelDuration - 100)
      })

      schedule(() => {
        setPhase('summary')
        if (onAction) onAction('analytics')
      }, PHASE_TIMES.finalStats)

      const statSteps = 24
      for (let s = 1; s <= statSteps; s++) {
        schedule(() => setFinalStatsProgress(s / statSteps), PHASE_TIMES.finalStats + 200 + (s / statSteps) * 1400)
      }

      schedule(runLoop, PHASE_TIMES.loop)
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
        <p className="text-[10px] text-gray-400">AI-powered multi-channel outreach</p>
      </div>

      <div className="flex-1 px-3 py-3 overflow-hidden flex flex-col gap-3">
        {/* Upload card */}
        <AnimatePresence mode="wait">
          {(phase === 'idle' || phase === 'upload') && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="rounded-xl p-4 flex flex-col items-center gap-3"
              style={{
                background: 'linear-gradient(160deg, rgba(56,89,168,0.04), rgba(56,89,168,0.08))',
                border: '1.5px dashed rgba(56,89,168,0.25)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center relative"
                style={{
                  backgroundColor: '#fff',
                  boxShadow: '0 4px 16px rgba(56,89,168,0.12)',
                  border: '1px solid rgba(56,89,168,0.1)',
                }}
              >
                {phase === 'upload' && (
                  <>
                    <span
                      className="absolute inset-0 rounded-xl"
                      style={{
                        border: '1.5px solid rgba(56,89,168,0.4)',
                        animation: 'ring-expand 1.5s ease-out infinite',
                      }}
                    />
                    <span
                      className="absolute inset-0 rounded-xl"
                      style={{
                        border: '1.5px solid rgba(56,89,168,0.25)',
                        animation: 'ring-expand 1.5s ease-out 0.5s infinite',
                      }}
                    />
                  </>
                )}
                <FileSpreadsheet className="w-6 h-6" style={{ color: '#3859a8' }} strokeWidth={1.5} />
              </div>

              <div className="text-center">
                <p className="text-[11px] font-semibold text-gray-900">leads_q2.xlsx</p>
                <p className="text-[9px] text-gray-400 mt-0.5">{CONTACTS_TOTAL} contacts</p>
              </div>

              <div className="w-full">
                <div className="flex items-center gap-1 mb-1.5">
                  <Upload className="w-2.5 h-2.5" style={{ color: '#3859a8' }} strokeWidth={1.8} />
                  <p className="text-[9px] font-semibold" style={{ color: '#3859a8' }}>
                    {phase === 'idle' ? 'Ready to upload' : `Importing... ${Math.round(uploadProgress * 100)}%`}
                  </p>
                </div>
                <ProgressBar progress={uploadProgress} color="#3859a8" />
              </div>
            </motion.div>
          )}

          {phase === 'parsed' && (
            <motion.div
              key="parsed"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl p-4 flex items-center gap-3"
              style={{
                background: 'linear-gradient(135deg, rgba(34,197,94,0.06), rgba(34,197,94,0.12))',
                border: '1px solid rgba(34,197,94,0.2)',
              }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#22c55e' }}
              >
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </motion.div>
              <div className="flex-1">
                <p className="text-[11px] font-semibold text-gray-900">{CONTACTS_TOTAL} contacts imported</p>
                <p className="text-[9px] text-gray-400 mt-0.5">Ready for outreach</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Channels sequence */}
        {(phase === 'channels' || phase === 'summary') && (
          <motion.div
            key="channels"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col gap-1.5"
          >
            <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5 px-1">
              Outreach in progress
            </p>
            {CHANNELS.map((ch, i) => (
              <ChannelRow
                key={ch.id}
                channel={ch}
                state={channelStates[i]}
                count={channelCounts[i]}
              />
            ))}
          </motion.div>
        )}

        {/* Final stats */}
        <AnimatePresence>
          {phase === 'summary' && (
            <motion.div
              key="summary"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-auto"
            >
              <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5 px-1">
                Campaign results
              </p>
              <div className="flex gap-1.5">
                {FINAL_STATS.map((stat) => (
                  <FinalStatCard key={stat.label} {...stat} progress={finalStatsProgress} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
