'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileSpreadsheet, Phone, MessageCircle, Mail, Check, Upload, User } from 'lucide-react'

const CONTACTS_TOTAL = 247

const CHANNELS = [
  { id: 'call', icon: Phone, label: 'Calling leads', color: '#3859a8' },
  { id: 'sms', icon: MessageCircle, label: 'Sending SMS', color: '#22D3EE' },
  { id: 'email', icon: Mail, label: 'Sending emails', color: '#6366F1' },
]

const CONTACTS = [
  { name: 'Sarah Johnson', phone: '+1 (555) 123-4567', email: 'sarah@acmeco.com' },
  { name: 'Michael Chen', phone: '+1 (555) 234-5678', email: 'mchen@plus.io' },
  { name: 'Emily Davis', phone: '+1 (555) 345-6789', email: 'emily@flux.com' },
  { name: 'David Park', phone: '+1 (555) 456-7890', email: 'd.park@nova.co' },
]

const SMS_TEMPLATE = "Hi {name}, this is JotilLabs. Got 2 mins to chat about your sales pipeline?"
const EMAIL_SUBJECT = 'Quick idea for your team'

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
  channelDuration: 2700,
  finalStats: 11500,
  loop: 14500,
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

function CallVisual({ contact, channel }) {
  return (
    <div className="flex flex-col items-center gap-2.5 py-3">
      <div className="relative" style={{ width: 64, height: 64 }}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              width: 64,
              height: 64,
              top: 0,
              left: 0,
              border: `1.5px solid ${channel.color}`,
              opacity: 0.4 - i * 0.1,
              animation: `ring-expand 1.6s ease-out ${i * 0.4}s infinite`,
            }}
          />
        ))}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${channel.color}, ${channel.color}cc)`,
            boxShadow: `0 6px 20px ${channel.color}40`,
          }}
        >
          <Phone className="w-6 h-6 text-white" strokeWidth={1.5} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={contact.phone}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25 }}
          className="text-center"
        >
          <p className="text-[11px] font-bold text-gray-900">{contact.name}</p>
          <p className="text-[9px] text-gray-500 font-mono">{contact.phone}</p>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center gap-1.5">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: channel.color,
            animation: 'orb-pulse 1.2s ease-in-out infinite',
          }}
        />
        <span className="text-[9px] font-semibold" style={{ color: channel.color }}>
          Calling...
        </span>
      </div>
    </div>
  )
}

function SmsVisual({ contact, channel }) {
  const firstName = contact.name.split(' ')[0]
  return (
    <div className="flex flex-col gap-2 py-2.5">
      <div className="flex items-center gap-2 px-1">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${channel.color}25` }}
        >
          <User className="w-3.5 h-3.5" style={{ color: channel.color }} strokeWidth={1.6} />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={contact.phone}
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -2 }}
            transition={{ duration: 0.2 }}
            className="min-w-0"
          >
            <p className="text-[10px] font-bold text-gray-900 truncate">{contact.name}</p>
            <p className="text-[8.5px] text-gray-500 font-mono truncate">{contact.phone}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={contact.phone}
          initial={{ opacity: 0, scale: 0.95, y: 6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="flex justify-end px-1"
        >
          <div
            className="max-w-[88%] px-2.5 py-1.5 rounded-xl rounded-br-sm text-white"
            style={{
              backgroundColor: channel.color,
              boxShadow: `0 2px 10px ${channel.color}40`,
            }}
          >
            <p className="text-[9.5px] leading-snug">
              {SMS_TEMPLATE.replace('{name}', firstName)}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-end items-center gap-0.5 px-2">
        <Check className="w-2.5 h-2.5" style={{ color: channel.color }} strokeWidth={2.5} />
        <Check className="w-2.5 h-2.5 -ml-1.5" style={{ color: channel.color }} strokeWidth={2.5} />
        <span className="text-[8px] text-gray-400 ml-0.5">Delivered</span>
      </div>
    </div>
  )
}

function EmailVisual({ contact, channel }) {
  const firstName = contact.name.split(' ')[0]
  return (
    <div className="flex flex-col gap-2 py-2.5">
      <div
        className="rounded-lg bg-white overflow-hidden"
        style={{ border: `1px solid ${channel.color}25`, boxShadow: `0 2px 10px ${channel.color}15` }}
      >
        <div className="px-2.5 py-1.5 border-b border-gray-100 flex items-center gap-1.5">
          <Mail className="w-3 h-3 shrink-0" style={{ color: channel.color }} strokeWidth={1.6} />
          <AnimatePresence mode="wait">
            <motion.p
              key={contact.email}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[9px] text-gray-500 truncate"
            >
              To: <span className="text-gray-900 font-mono">{contact.email}</span>
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="px-2.5 py-1.5 border-b border-gray-100">
          <p className="text-[10px] font-bold text-gray-900 truncate">{EMAIL_SUBJECT}</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={contact.email}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="px-2.5 py-2"
          >
            <p className="text-[9px] text-gray-700 leading-snug">
              Hi {firstName},
            </p>
            <p className="text-[9px] text-gray-600 leading-snug mt-1">
              Noticed your team has been growing fast. Quick idea on streamlining your outreach...
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-1.5 px-1">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: channel.color,
            animation: 'orb-pulse 1.2s ease-in-out infinite',
          }}
        />
        <span className="text-[9px] font-semibold" style={{ color: channel.color }}>
          Delivering...
        </span>
      </div>
    </div>
  )
}

function ChannelStage({ channel, progress, isDone }) {
  const Icon = channel.icon
  const contactIdx = Math.min(Math.floor(progress * CONTACTS.length * 0.999), CONTACTS.length - 1)
  const contact = CONTACTS[contactIdx]
  const count = Math.floor(progress * CONTACTS_TOTAL)

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2 px-1">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${channel.color}18` }}
        >
          <Icon className="w-4 h-4" style={{ color: channel.color }} strokeWidth={1.6} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-bold text-gray-900">{channel.label}</p>
        </div>
        {isDone && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundColor: '#22c55e' }}
          >
            <Check className="w-3 h-3 text-white" strokeWidth={3} />
          </motion.div>
        )}
      </div>

      <div
        className="rounded-xl px-3"
        style={{
          background: `linear-gradient(160deg, ${channel.color}06, ${channel.color}14)`,
          border: `1px solid ${channel.color}25`,
        }}
      >
        {channel.id === 'call' && <CallVisual contact={contact} channel={channel} />}
        {channel.id === 'sms' && <SmsVisual contact={contact} channel={channel} />}
        {channel.id === 'email' && <EmailVisual contact={contact} channel={channel} />}
      </div>

      <div className="flex items-center gap-2 px-1">
        <ProgressBar progress={progress} color={channel.color} />
        <p className="text-[10px] font-mono tabular-nums whitespace-nowrap" style={{ color: channel.color }}>
          {count}/{CONTACTS_TOTAL}
        </p>
      </div>
    </div>
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
  const [activeChannelIdx, setActiveChannelIdx] = useState(-1)
  const [channelProgress, setChannelProgress] = useState([0, 0, 0])
  const [channelDone, setChannelDone] = useState([false, false, false])
  const [finalStatsProgress, setFinalStatsProgress] = useState(0)
  const loopRef = useRef(null)

  useEffect(() => {
    if (!isActive) {
      setPhase('idle')
      setUploadProgress(0)
      setActiveChannelIdx(-1)
      setChannelProgress([0, 0, 0])
      setChannelDone([false, false, false])
      setFinalStatsProgress(0)
      if (loopRef.current) loopRef.current.forEach(clearTimeout)
      return
    }

    const timers = []
    const schedule = (fn, ms) => { const id = setTimeout(fn, ms); timers.push(id); return id }

    const runLoop = () => {
      setPhase('idle')
      setUploadProgress(0)
      setActiveChannelIdx(-1)
      setChannelProgress([0, 0, 0])
      setChannelDone([false, false, false])
      setFinalStatsProgress(0)

      schedule(() => setPhase('upload'), PHASE_TIMES.uploadStart)
      const uploadSteps = 30
      for (let i = 0; i <= uploadSteps; i++) {
        schedule(
          () => setUploadProgress(i / uploadSteps),
          PHASE_TIMES.uploadStart + (i / uploadSteps) * PHASE_TIMES.uploadDuration,
        )
      }

      schedule(() => setPhase('parsed'), PHASE_TIMES.parsed)

      CHANNELS.forEach((ch, idx) => {
        const start = PHASE_TIMES.channelStart + idx * PHASE_TIMES.channelDuration

        schedule(() => {
          setPhase('channels')
          setActiveChannelIdx(idx)
        }, start)

        const countSteps = 30
        for (let s = 1; s <= countSteps; s++) {
          schedule(() => {
            setChannelProgress((prev) => {
              const next = [...prev]
              next[idx] = s / countSteps
              return next
            })
          }, start + (s / countSteps) * (PHASE_TIMES.channelDuration - 300))
        }

        schedule(() => {
          setChannelDone((prev) => {
            const next = [...prev]
            next[idx] = true
            return next
          })
        }, start + PHASE_TIMES.channelDuration - 250)
      })

      schedule(() => setPhase('summary'), PHASE_TIMES.finalStats)
      const statSteps = 24
      for (let s = 1; s <= statSteps; s++) {
        schedule(
          () => setFinalStatsProgress(s / statSteps),
          PHASE_TIMES.finalStats + 200 + (s / statSteps) * 1400,
        )
      }

      schedule(runLoop, PHASE_TIMES.loop)
    }

    runLoop()
    loopRef.current = timers
    return () => timers.forEach(clearTimeout)
  }, [isActive])

  const activeChannel = activeChannelIdx >= 0 ? CHANNELS[activeChannelIdx] : null

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
                <p className="text-[9px] text-gray-400 mt-0.5">Starting outreach...</p>
              </div>
            </motion.div>
          )}

          {phase === 'channels' && activeChannel && (
            <motion.div
              key={`channel-${activeChannelIdx}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              <ChannelStage
                channel={activeChannel}
                progress={channelProgress[activeChannelIdx]}
                isDone={channelDone[activeChannelIdx]}
              />
            </motion.div>
          )}
        </AnimatePresence>

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
