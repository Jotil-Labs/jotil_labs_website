'use client'

import { motion } from 'framer-motion'

/* ── Receptionist: phone call UI ── */
function ReceptionistDemo() {
  return (
    <div className="relative w-full max-w-sm mx-auto select-none">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card-premium p-0 overflow-hidden"
      >
        {/* Header bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-black/5 bg-[#F8FAFF]">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-[#6366F1] flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-text truncate" style={{ fontFamily: 'var(--font-outfit)' }}>Incoming Call</p>
            <p className="text-xs text-text-secondary">+1 (801) 555-0192</p>
          </div>
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600"
          >
            Live
          </motion.span>
        </div>

        {/* AI status */}
        <div className="px-5 py-4 flex items-center gap-2.5 border-b border-black/5">
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="h-2.5 w-2.5 rounded-full bg-[#3B7BF2] shrink-0"
          />
          <p className="text-sm text-text-secondary font-medium">AI Answering&hellip;</p>
        </div>

        {/* Transcript bubble */}
        <div className="px-5 py-5 space-y-3">
          <div className="flex items-start gap-2.5">
            <div className="h-6 w-6 rounded-full bg-[#EEF3FE] flex items-center justify-center shrink-0 mt-0.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3B7BF2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9a8.97 8.97 0 0 1-5.07-1.55L3 20l1.55-3.93A8.97 8.97 0 0 1 3 11a9 9 0 0 1 9-9z" />
              </svg>
            </div>
            <div className="bg-[#F0F4FF] rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[220px]">
              <p className="text-sm text-text leading-snug">How can I help you today?</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 justify-end">
            <div className="bg-white border border-black/5 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[200px]">
              <p className="text-sm text-text-secondary leading-snug">I'd like to schedule an appointment</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-start gap-2.5"
          >
            <div className="h-6 w-6 rounded-full bg-[#EEF3FE] flex items-center justify-center shrink-0 mt-0.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3B7BF2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9a8.97 8.97 0 0 1-5.07-1.55L3 20l1.55-3.93A8.97 8.97 0 0 1 3 11a9 9 0 0 1 9-9z" />
              </svg>
            </div>
            <div className="bg-[#F0F4FF] rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[220px]">
              <p className="text-sm text-text leading-snug">I have a few openings this week. What day works best for you?</p>
            </div>
          </motion.div>
        </div>

        {/* Waveform */}
        <div className="px-5 pb-5 flex items-center gap-1 justify-center">
          {[3, 6, 9, 12, 9, 6, 10, 7, 4, 8, 11, 5, 3, 7, 9, 6, 4].map((h, i) => (
            <motion.div
              key={i}
              className="w-1 rounded-full bg-[#3B7BF2]/40"
              style={{ height: h * 2 }}
              animate={{ height: [h * 2, h * 3.2, h * 1.5, h * 2.8, h * 2] }}
              transition={{ duration: 0.8 + i * 0.05, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

/* ── Messenger: chat bubble interface ── */
function MessengerDemo() {
  const messages = [
    { from: 'user', text: 'Hi, I saw your pricing page. What plan is right for me?', delay: 0 },
    { from: 'ai', text: "Great question! To help you find the best fit — how many customer conversations do you handle per month?", delay: 0.4 },
    { from: 'user', text: 'Around 500–800 per month across our team.', delay: 0.8 },
    { from: 'ai', text: "Based on that volume, the Professional plan would cover you. It includes unlimited messages, CRM integration, and custom AI training.", delay: 1.2 },
  ]

  return (
    <div className="relative w-full max-w-sm mx-auto select-none">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card-premium p-0 overflow-hidden"
      >
        {/* Chat header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-black/5 bg-[#F8FAFF]">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#3B7BF2] to-[#6366F1] flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-text" style={{ fontFamily: 'var(--font-outfit)' }}>Jotil AI</p>
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <p className="text-xs text-text-secondary">Online</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="px-5 py-5 space-y-3 min-h-[220px]">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: msg.delay, duration: 0.35 }}
              className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[220px] rounded-2xl px-4 py-2.5 text-sm leading-snug ${
                  msg.from === 'user'
                    ? 'bg-[#3B7BF2] text-white rounded-tr-sm'
                    : 'bg-[#F0F4FF] text-text rounded-tl-sm'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input bar */}
        <div className="px-4 pb-4">
          <div className="flex items-center gap-2 bg-[#F8FAFF] border border-black/6 rounded-xl px-4 py-2.5">
            <p className="flex-1 text-sm text-text-muted">Type a message&hellip;</p>
            <div className="h-7 w-7 rounded-lg bg-[#3B7BF2] flex items-center justify-center">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

/* ── Outreach: campaign stats card ── */
function OutreachDemo() {
  const stats = [
    { label: 'Contacts Loaded', value: 4200, color: 'text-text' },
    { label: 'Calls Sent', value: 2847, color: 'text-[#3B7BF2]' },
    { label: 'Connected', value: 1203, color: 'text-emerald-600' },
    { label: 'Responses', value: 847, color: 'text-[#6366F1]' },
  ]

  return (
    <div className="relative w-full max-w-sm mx-auto select-none">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card-premium p-0 overflow-hidden"
      >
        {/* Campaign header */}
        <div className="px-5 py-4 border-b border-black/5 bg-[#F8FAFF] flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-text" style={{ fontFamily: 'var(--font-outfit)' }}>Q2 Re-engagement</p>
            <p className="text-xs text-text-secondary mt-0.5">Outbound Voice Campaign</p>
          </div>
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#EEF3FE] text-[#3B7BF2]"
          >
            Running
          </motion.span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-px bg-black/5">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              className="bg-white px-5 py-4"
            >
              <p className={`text-2xl font-bold tabular-nums ${s.color}`} style={{ fontFamily: 'var(--font-jetbrains)' }}>
                {s.value.toLocaleString()}
              </p>
              <p className="text-xs text-text-secondary mt-0.5">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-text-secondary">Connection rate</p>
            <p className="text-xs font-semibold text-[#3B7BF2]">42.3%</p>
          </div>
          <div className="h-1.5 bg-[#F0F4FF] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '42.3%' }}
              transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-[#3B7BF2] to-[#6366F1] rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

/* ── Space: mini CRM dashboard ── */
function SpaceDemo() {
  const leads = [
    { name: 'Acme Corp', contact: 'Sarah Chen', score: 94, status: 'Hot', statusColor: 'text-red-500 bg-red-50' },
    { name: 'Meridian LLC', contact: 'James Okafor', score: 78, status: 'Warm', statusColor: 'text-amber-600 bg-amber-50' },
    { name: 'TechBridge Co', contact: 'Priya Nair', score: 61, status: 'Nurture', statusColor: 'text-blue-600 bg-blue-50' },
  ]

  return (
    <div className="relative w-full max-w-sm mx-auto select-none">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card-premium p-0 overflow-hidden"
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-black/5 bg-[#F8FAFF] flex items-center justify-between">
          <p className="text-sm font-semibold text-text" style={{ fontFamily: 'var(--font-outfit)' }}>AI Lead Scores</p>
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <p className="text-xs text-text-secondary">3 new today</p>
          </div>
        </div>

        {/* Column labels */}
        <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-5 pt-3 pb-1.5">
          <p className="text-[11px] font-medium text-text-muted uppercase tracking-wider">Company</p>
          <p className="text-[11px] font-medium text-text-muted uppercase tracking-wider">AI Score</p>
          <p className="text-[11px] font-medium text-text-muted uppercase tracking-wider">Stage</p>
        </div>

        {/* Leads */}
        <div className="divide-y divide-black/4">
          {leads.map((lead, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 * i + 0.2 }}
              className="grid grid-cols-[1fr_auto_auto] gap-4 items-center px-5 py-3.5"
            >
              <div>
                <p className="text-sm font-medium text-text">{lead.name}</p>
                <p className="text-xs text-text-secondary">{lead.contact}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-14 bg-[#F0F4FF] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${lead.score}%` }}
                    transition={{ duration: 0.9, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-[#3B7BF2] to-[#6366F1] rounded-full"
                  />
                </div>
                <span className="text-xs font-semibold text-[#3B7BF2] tabular-nums w-6" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                  {lead.score}
                </span>
              </div>
              <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${lead.statusColor}`}>
                {lead.status}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-black/5 bg-[#F8FAFF]">
          <p className="text-xs text-text-secondary">Synced from all channels &bull; Updated just now</p>
        </div>
      </motion.div>
    </div>
  )
}

/* ── Flow: workflow node diagram ── */
function FlowDemo() {
  const nodes = [
    { label: 'Trigger', sub: 'New Lead Created', icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z', color: 'from-[#3B7BF2] to-[#2D6AE0]' },
    { label: 'AI Decision', sub: 'Score & Classify', icon: 'M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 6v4l3 3', color: 'from-[#6366F1] to-[#4F46E5]' },
    { label: 'Action', sub: 'Assign + Notify', icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3', color: 'from-emerald-500 to-emerald-600' },
  ]

  return (
    <div className="relative w-full max-w-sm mx-auto select-none">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card-premium p-0 overflow-hidden"
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-black/5 bg-[#F8FAFF] flex items-center justify-between">
          <p className="text-sm font-semibold text-text" style={{ fontFamily: 'var(--font-outfit)' }}>Lead Routing Workflow</p>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600">Active</span>
        </div>

        {/* Node diagram */}
        <div className="px-5 py-6 flex flex-col items-center gap-0">
          {nodes.map((node, i) => (
            <div key={i} className="flex flex-col items-center w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 + 0.2, duration: 0.35 }}
                className="w-full flex items-center gap-4 bg-white border border-black/5 rounded-2xl px-4 py-3.5 shadow-sm"
              >
                <div className={`h-9 w-9 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center shrink-0`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={node.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text" style={{ fontFamily: 'var(--font-outfit)' }}>{node.label}</p>
                  <p className="text-xs text-text-secondary">{node.sub}</p>
                </div>
                {i === 1 && (
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-auto h-2 w-2 rounded-full bg-[#3B7BF2]"
                  />
                )}
              </motion.div>

              {i < nodes.length - 1 && (
                <div className="flex flex-col items-center my-1.5">
                  <motion.div
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }}
                    className="h-5 w-px bg-gradient-to-b from-[#3B7BF2] to-[#6366F1]"
                  />
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="#3B7BF2" className="opacity-60">
                    <path d="M5 6L0 0h10z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="px-5 pb-5 grid grid-cols-3 gap-3">
          {[['142', 'Runs today'], ['99.8%', 'Success'], ['0.4s', 'Avg time']].map(([val, lbl], i) => (
            <div key={i} className="bg-[#F8FAFF] rounded-xl px-3 py-2.5 text-center">
              <p className="text-sm font-bold text-[#3B7BF2]" style={{ fontFamily: 'var(--font-jetbrains)' }}>{val}</p>
              <p className="text-[10px] text-text-secondary mt-0.5">{lbl}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

/* ── Public export ── */
export function DemoVisualization({ slug }) {
  const demos = {
    receptionist: ReceptionistDemo,
    messenger: MessengerDemo,
    outreach: OutreachDemo,
    space: SpaceDemo,
    flow: FlowDemo,
  }

  const Demo = demos[slug]
  if (!Demo) return null

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Live Preview</p>
          <h2 className="text-3xl font-bold text-text tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
            See it in action
          </h2>
          <p className="text-text-secondary mt-3 max-w-md mx-auto">
            An interactive preview of how the product works in a real customer interaction.
          </p>
        </div>
        <Demo />
      </div>
    </div>
  )
}
