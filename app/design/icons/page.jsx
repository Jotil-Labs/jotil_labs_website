'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Badge } from '@/components/ui/Badge'
import { HexContainer } from '@/components/ui/Logo'

/* ─────────────────────────────────────────────────
   UNIFIED COLOR: All icons use brand blue family
   Primary: #3B7BF2  Light: #6B9AEA  Dark: #2D6AE0
───────────────────────────────────────────────────── */
const C = { primary: '#3B7BF2', light: '#6B9AEA', dark: '#2D6AE0' }

/* ═══ RECEPTIONIST: Waveform bars ═══ */
function ReceptionistV1({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect x="4" y="16" width="5" height="8" rx="2.5" fill={C.light} className="rc-bar1" />
      <rect x="11" y="10" width="5" height="20" rx="2.5" fill={C.primary} className="rc-bar2" />
      <rect x="18" y="6" width="5" height="28" rx="2.5" fill={C.dark} className="rc-bar3" />
      <rect x="25" y="12" width="5" height="16" rx="2.5" fill={C.primary} className="rc-bar4" />
      <rect x="32" y="14" width="5" height="12" rx="2.5" fill={C.light} className="rc-bar5" />
    </svg>
  )
}

function ReceptionistV2({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect x="6" y="18" width="4" height="4" rx="2" fill={C.light} className="rc-bar1" />
      <rect x="13" y="12" width="4" height="16" rx="2" fill={C.light} className="rc-bar2" />
      <rect x="20" y="6" width="4" height="28" rx="2" fill={C.primary} className="rc-bar3" />
      <rect x="27" y="10" width="4" height="20" rx="2" fill={C.light} className="rc-bar4" />
      <rect x="34" y="16" width="4" height="8" rx="2" fill={C.light} className="rc-bar5" />
    </svg>
  )
}

function ReceptionistV3({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect x="5" y="17" width="3.5" height="6" rx="1.75" fill={C.light} className="rc-bar1" />
      <rect x="11" y="12" width="3.5" height="16" rx="1.75" fill={C.light} className="rc-bar2" />
      <rect x="17" y="7" width="4" height="26" rx="2" fill={C.primary} className="rc-bar3" />
      <rect x="23.5" y="9" width="3.5" height="22" rx="1.75" fill={C.primary} className="rc-bar4" />
      <rect x="29.5" y="13" width="3.5" height="14" rx="1.75" fill={C.light} className="rc-bar5" />
      <rect x="35.5" y="17" width="3.5" height="6" rx="1.75" fill={C.light} className="rc-bar6" />
    </svg>
  )
}

/* ═══ MESSENGER: Typing dots (V2 picked) ═══ */
function MessengerV2({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="10" cy="20" r="3" fill={C.primary} className="msg-dot1" />
      <circle cx="20" cy="20" r="3" fill={C.primary} className="msg-dot2" />
      <circle cx="30" cy="20" r="3" fill={C.primary} className="msg-dot3" />
    </svg>
  )
}

/* ═══ OUTREACH: Paper plane (V1 picked) ═══ */
function OutreachV1({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className="outreach-plane">
      <path d="M6 20l28-14-8 16-6-4-14 2z" fill={C.primary} opacity="0.12" />
      <path d="M6 20l28-14-8 16-6-4-14 2z" stroke={C.primary} strokeWidth="1.8" strokeLinejoin="round" fill="none" />
      <path d="M20 18l6 14" stroke={C.primary} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/* ═══ SPACE: Mixed shapes (V1 picked) ═══ */
function SpaceV1({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="12" cy="12" r="6" fill={C.primary} className="sp-shape1" />
      <rect x="22" y="6" width="12" height="12" rx="2" fill={C.primary} className="sp-shape2" />
      <polygon points="12,28 18,40 6,40" fill={C.primary} className="sp-shape3" />
      <polygon points="28,26 34,32 28,38 22,32" fill={C.primary} className="sp-shape4" />
    </svg>
  )
}

/* ═══ FLOW: Branching (V3 picked) ═══ */
function FlowV3({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="6" cy="20" r="4" fill={C.primary} className="fl-dot-in" />
      <path d="M10 20H18" stroke={C.primary} strokeWidth="2" strokeLinecap="round" className="fl-line" />
      <path d="M18 20Q22 20 26 12" stroke={C.primary} strokeWidth="2" strokeLinecap="round" fill="none" className="fl-branch1" />
      <path d="M18 20Q22 20 26 20" stroke={C.primary} strokeWidth="2" strokeLinecap="round" fill="none" className="fl-branch2" />
      <path d="M18 20Q22 20 26 28" stroke={C.primary} strokeWidth="2" strokeLinecap="round" fill="none" className="fl-branch3" />
      <circle cx="30" cy="12" r="3" fill={C.light} className="fl-dot1" />
      <circle cx="30" cy="20" r="3" fill={C.primary} className="fl-dot2" />
      <circle cx="30" cy="28" r="3" fill={C.light} className="fl-dot3" />
    </svg>
  )
}

/* ═══ AVATAR: New variations ═══ */
function AvatarV1({ size = 40 }) {
  // Pulsing rings + face
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="16" stroke={C.light} strokeWidth="1.2" fill="none" className="av-ring1" />
      <circle cx="20" cy="20" r="11" stroke={C.primary} strokeWidth="1.2" fill="none" className="av-ring2" />
      <circle cx="20" cy="18" r="6" fill={C.primary} opacity="0.08" />
      <circle cx="18" cy="16.5" r="1.2" fill={C.primary} />
      <circle cx="22" cy="16.5" r="1.2" fill={C.primary} />
      <path d="M17 20.5Q20 23 23 20.5" stroke={C.primary} strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M12 32Q20 27 28 32" stroke={C.light} strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function AvatarV2({ size = 40 }) {
  // Face + speaking waveform
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="16" r="8" fill={C.primary} opacity="0.06" stroke={C.primary} strokeWidth="1.5" />
      <circle cx="17.5" cy="14.5" r="1.3" fill={C.primary} />
      <circle cx="22.5" cy="14.5" r="1.3" fill={C.primary} />
      <path d="M17 19Q20 22 23 19" stroke={C.primary} strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <rect x="11" y="30" width="2.5" height="5" rx="1.25" fill={C.light} className="rc-bar1" />
      <rect x="15.5" y="28" width="2.5" height="9" rx="1.25" fill={C.primary} className="rc-bar2" />
      <rect x="20" y="27" width="2.5" height="11" rx="1.25" fill={C.dark} className="rc-bar3" />
      <rect x="24.5" y="29" width="2.5" height="7" rx="1.25" fill={C.primary} className="rc-bar4" />
      <rect x="29" y="31" width="2.5" height="3" rx="1.25" fill={C.light} className="rc-bar5" />
    </svg>
  )
}

function AvatarV3({ size = 40 }) {
  // Glowing orb with face
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="16" fill={C.primary} opacity="0.04" className="av-ring1" />
      <circle cx="20" cy="20" r="12" fill={C.primary} opacity="0.06" />
      <circle cx="20" cy="18" r="7" fill={C.primary} opacity="0.04" stroke={C.primary} strokeWidth="1.2" />
      <circle cx="17.5" cy="16" r="1.5" fill={C.primary} opacity="0.8" />
      <circle cx="22.5" cy="16" r="1.5" fill={C.primary} opacity="0.8" />
      <path d="M17 21Q20 24 23 21" stroke={C.primary} strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function AvatarV4({ size = 40 }) {
  // Two merging circles (human meets AI)
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="15" cy="20" r="10" stroke={C.light} strokeWidth="1.5" fill={C.primary} opacity="0.04" className="av-merge1" />
      <circle cx="25" cy="20" r="10" stroke={C.light} strokeWidth="1.5" fill={C.primary} opacity="0.04" className="av-merge2" />
      <circle cx="18.5" cy="18" r="1.2" fill={C.primary} />
      <circle cx="21.5" cy="18" r="1.2" fill={C.primary} />
      <path d="M18 22Q20 24.5 22 22" stroke={C.primary} strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

/* ═══ HEX VERSIONS: Show accent inside subtle hex outline ═══ */
function HexReceptionist({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="220 130 320 280">
      <HexContainer />
      <rect x="424.5" y="188" width="5" height="14" rx="2.5" fill={C.light} className="rc-bar1" />
      <rect x="435.5" y="178" width="5" height="24" rx="2.5" fill={C.primary} className="rc-bar2" />
      <rect x="446.5" y="170" width="5" height="30" rx="2.5" fill={C.dark} className="rc-bar3" />
      <rect x="457.5" y="170" width="5" height="20" rx="2.5" fill={C.primary} className="rc-bar4" />
      <rect x="468.5" y="167" width="5" height="16" rx="2.5" fill={C.light} className="rc-bar5" />
    </svg>
  )
}

function HexMessenger({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="220 130 320 280">
      <HexContainer />
      <circle cx="430" cy="197" r="5" fill={C.primary} className="msg-dot1" />
      <circle cx="455" cy="187" r="7" fill={C.primary} className="msg-dot2" />
      <circle cx="485" cy="177" r="9" fill={C.primary} className="msg-dot3" />
    </svg>
  )
}

function HexOutreach({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="220 130 320 280">
      <HexContainer />
      <g className="outreach-plane">
        <path d="M430 190l35-16-10 18-7-4-18 2z" fill={C.primary} opacity="0.12" />
        <path d="M430 190l35-16-10 18-7-4-18 2z" stroke={C.primary} strokeWidth="2" strokeLinejoin="round" fill="none" />
        <path d="M448 188l6 14" stroke={C.primary} strokeWidth="1.8" strokeLinecap="round" />
      </g>
    </svg>
  )
}

function HexSpace({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="220 130 320 280">
      <HexContainer />
      <circle cx="440" cy="175" r="7" fill={C.primary} className="sp-shape1" />
      <rect x="455" y="168" width="14" height="14" rx="2" fill={C.primary} className="sp-shape2" />
      <polygon points="440,190 447,203 433,203" fill={C.primary} className="sp-shape3" />
      <polygon points="462,190 469,197 462,204 455,197" fill={C.primary} className="sp-shape4" />
    </svg>
  )
}

function HexFlow({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="220 130 320 280">
      <HexContainer />
      <circle cx="425" cy="185" r="5" fill={C.primary} className="fl-dot-in" />
      <path d="M430 185H445" stroke={C.primary} strokeWidth="2.5" strokeLinecap="round" className="fl-line" />
      <path d="M445 185Q452 185 460 172" stroke={C.primary} strokeWidth="2" strokeLinecap="round" fill="none" className="fl-branch1" />
      <path d="M445 185Q452 185 460 185" stroke={C.primary} strokeWidth="2" strokeLinecap="round" fill="none" className="fl-branch2" />
      <path d="M445 185Q452 185 460 198" stroke={C.primary} strokeWidth="2" strokeLinecap="round" fill="none" className="fl-branch3" />
      <circle cx="464" cy="172" r="4" fill={C.light} className="fl-dot1" />
      <circle cx="464" cy="185" r="4" fill={C.primary} className="fl-dot2" />
      <circle cx="464" cy="198" r="4" fill={C.light} className="fl-dot3" />
    </svg>
  )
}

function HexAvatar({ size = 80, variant = 1 }) {
  return (
    <svg width={size} height={size} viewBox="220 130 320 280">
      <HexContainer />
      <circle cx="455" cy="175" r="12" stroke={C.light} strokeWidth="2" fill={C.primary} opacity="0.06" className="av-ring2" />
      <circle cx="452" cy="173" r="2" fill={C.primary} />
      <circle cx="458" cy="173" r="2" fill={C.primary} />
      <path d="M451 178Q455 182 459 178" stroke={C.primary} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M442 195Q455 188 468 195" stroke={C.light} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

/* ═══ DISPLAY COMPONENTS ═══ */
function IconRow({ label, description, variants, hexComponent: HexComp, sizes = [16, 24, 32, 40, 64] }) {
  return (
    <div className="mb-16">
      <h3 className="text-xl font-bold text-text mb-1 tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
        {label}
      </h3>
      {description && <p className="text-sm text-text-secondary mb-6">{description}</p>}

      {/* Hex version */}
      {HexComp && (
        <div className="mb-8">
          <p className="text-[10px] font-semibold text-text-secondary uppercase tracking-wider mb-3">Hex Logo Version</p>
          <div className="flex items-end gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center rounded-xl p-3" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.04)' }}>
                <HexComp size={100} />
              </div>
              <span className="text-[10px] text-text-secondary font-mono">100px hex</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center rounded-xl p-2" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.04)' }}>
                <HexComp size={48} />
              </div>
              <span className="text-[10px] text-text-secondary font-mono">48px hex</span>
            </div>
          </div>
        </div>
      )}

      {/* Accent-only variants */}
      <div className="space-y-8">
        {variants.map(({ name, Component, picked }, vi) => (
          <div key={vi} className={picked ? 'rounded-2xl p-5 -mx-5' : ''} style={picked ? { background: 'rgba(59,123,242,0.04)', border: '1px solid rgba(59,123,242,0.1)' } : {}}>
            <div className="flex items-center gap-2 mb-3">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">V{vi + 1}: {name}</p>
              {picked && <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">PICKED</span>}
            </div>
            <div className="flex items-end gap-6 flex-wrap">
              {sizes.map((s) => (
                <div key={s} className="flex flex-col items-center gap-2">
                  <div className="flex items-center justify-center rounded-xl"
                    style={{ width: Math.max(s + 16, 40), height: Math.max(s + 16, 40), background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.04)' }}>
                    <Component size={s} />
                  </div>
                  <span className="text-[10px] text-text-secondary font-mono">{s}px</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ═══ PAGE ═══ */
export default function IconExplorationPage() {
  return (
    <div className="min-h-screen bg-bg pt-28 pb-20">
      {/* All animations using brand blue only */}
      <style jsx global>{`
        /* Receptionist: waveform bars - heartbeat style from original */
        .rc-bar1 { animation: rcPulse 10s ease-in-out infinite 0s; transform-box: fill-box; transform-origin: center bottom; }
        .rc-bar2 { animation: rcPulse 10s ease-in-out infinite 0.1s; transform-box: fill-box; transform-origin: center bottom; }
        .rc-bar3 { animation: rcPulse 10s ease-in-out infinite 0.2s; transform-box: fill-box; transform-origin: center bottom; }
        .rc-bar4 { animation: rcPulse 10s ease-in-out infinite 0.3s; transform-box: fill-box; transform-origin: center bottom; }
        .rc-bar5 { animation: rcPulse 10s ease-in-out infinite 0.4s; transform-box: fill-box; transform-origin: center bottom; }
        .rc-bar6 { animation: rcPulse 10s ease-in-out infinite 0.5s; transform-box: fill-box; transform-origin: center bottom; }
        @keyframes rcPulse {
          0%   { opacity: 0.45; transform: scaleY(0.7); }
          3%   { opacity: 1;    transform: scaleY(1.15); }
          5%   { opacity: 0.6;  transform: scaleY(0.85); }
          7%   { opacity: 1;    transform: scaleY(1.05); }
          10%  { opacity: 0.45; transform: scaleY(0.7); }
          100% { opacity: 0.45; transform: scaleY(0.7); }
        }

        /* Messenger: typing dots - scale pulse from original */
        .msg-dot1 { animation: msgDot 1.4s ease-in-out infinite 0s; transform-box: fill-box; transform-origin: center; }
        .msg-dot2 { animation: msgDot 1.4s ease-in-out infinite 0.2s; transform-box: fill-box; transform-origin: center; }
        .msg-dot3 { animation: msgDot 1.4s ease-in-out infinite 0.4s; transform-box: fill-box; transform-origin: center; }
        @keyframes msgDot {
          0%, 60%, 100% { transform: scale(1); opacity: 0.35; }
          30% { transform: scale(1.4); opacity: 1; }
        }

        /* Outreach: paper plane gentle float */
        .outreach-plane {
          animation: planeDrift 3s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        @keyframes planeDrift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(3px, -2px); }
        }

        /* Space: shapes carousel - each pulses in sequence */
        .sp-shape1 { animation: spCarousel 16s ease-in-out infinite 0s; transform-box: fill-box; transform-origin: center; }
        .sp-shape2 { animation: spCarousel 16s ease-in-out infinite 4s; transform-box: fill-box; transform-origin: center; }
        .sp-shape3 { animation: spCarousel 16s ease-in-out infinite 8s; transform-box: fill-box; transform-origin: center; }
        .sp-shape4 { animation: spCarousel 16s ease-in-out infinite 12s; transform-box: fill-box; transform-origin: center; }
        @keyframes spCarousel {
          0%   { opacity: 0.3; transform: scale(0.85); }
          6%   { opacity: 1;   transform: scale(1.1); }
          20%  { opacity: 1;   transform: scale(1); }
          25%  { opacity: 0.3; transform: scale(0.85); }
          100% { opacity: 0.3; transform: scale(0.85); }
        }

        /* Flow: branching lines + dots pulse */
        .fl-dot-in { animation: flDotPulse 10s ease-in-out infinite 0s; transform-box: fill-box; transform-origin: center; }
        .fl-dot1 { animation: flDotPulse 10s ease-in-out infinite 0.2s; transform-box: fill-box; transform-origin: center; }
        .fl-dot2 { animation: flDotPulse 10s ease-in-out infinite 0.4s; transform-box: fill-box; transform-origin: center; }
        .fl-dot3 { animation: flDotPulse 10s ease-in-out infinite 0.6s; transform-box: fill-box; transform-origin: center; }
        .fl-line, .fl-branch1, .fl-branch2, .fl-branch3 { animation: flLinePulse 10s ease-in-out infinite; }
        @keyframes flDotPulse {
          0%   { opacity: 0.35; transform: scale(1); }
          3%   { opacity: 1;    transform: scale(1.3); }
          5%   { opacity: 0.5;  transform: scale(1); }
          7%   { opacity: 1;    transform: scale(1.2); }
          10%  { opacity: 0.35; transform: scale(1); }
          100% { opacity: 0.35; transform: scale(1); }
        }
        @keyframes flLinePulse {
          0%   { opacity: 0.3; stroke: ${C.light}; }
          3%   { opacity: 1;   stroke: ${C.dark}; }
          5%   { opacity: 0.4; stroke: ${C.light}; }
          7%   { opacity: 0.9; stroke: ${C.dark}; }
          10%  { opacity: 0.3; stroke: ${C.light}; }
          100% { opacity: 0.3; stroke: ${C.light}; }
        }

        /* Avatar: rings pulse */
        .av-ring1 { animation: avRing 3s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
        .av-ring2 { animation: avRing 3s ease-in-out 0.5s infinite; transform-box: fill-box; transform-origin: center; }
        @keyframes avRing {
          0%, 100% { opacity: 0.15; transform: scale(0.97); }
          50% { opacity: 0.4; transform: scale(1.03); }
        }
        .av-merge1 { animation: avMerge 4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
        .av-merge2 { animation: avMerge 4s ease-in-out 2s infinite; transform-box: fill-box; transform-origin: center; }
        @keyframes avMerge {
          0%, 100% { opacity: 0.04; transform: scale(1); }
          50% { opacity: 0.12; transform: scale(1.05); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <Badge variant="blue" className="mb-4">Design Exploration v2</Badge>
          <h1 className="text-4xl font-extrabold text-text tracking-tight mb-3" style={{ fontFamily: 'var(--font-outfit)' }}>
            Product Icon Family (Animated + Hex)
          </h1>
          <p className="text-text-secondary max-w-2xl mb-2">
            All icons use unified brand blue (#3B7BF2 / #6B9AEA / #2D6AE0).
            Animations match the original hex accent patterns (10s cycle, brief burst then rest).
            Each product shows: hex logo version + accent-only variants at multiple sizes.
          </p>
        </AnimatedSection>

        <div className="gradient-divider my-10" />

        <IconRow label="Receptionist" description="Voice waveform bars. Undecided. All three use the same heartbeat animation pattern." hexComponent={HexReceptionist}
          variants={[
            { name: 'Symmetric 5-bar', Component: ReceptionistV1 },
            { name: 'Thin 5-bar', Component: ReceptionistV2 },
            { name: 'Asymmetric 6-bar', Component: ReceptionistV3 },
          ]}
        />

        <div className="gradient-divider my-10" />

        <IconRow label="Messenger" description="Typing indicator dots. V2 picked." hexComponent={HexMessenger}
          variants={[
            { name: 'Three inline dots (scale pulse)', Component: MessengerV2, picked: true },
          ]}
        />

        <div className="gradient-divider my-10" />

        <IconRow label="Outreach" description="Paper plane. V1 picked." hexComponent={HexOutreach}
          variants={[
            { name: 'Single paper plane (gentle drift)', Component: OutreachV1, picked: true },
          ]}
        />

        <div className="gradient-divider my-10" />

        <IconRow label="Space" description="Multi-tool shapes carousel. V1 picked." hexComponent={HexSpace}
          variants={[
            { name: 'Mixed shapes (circle, square, triangle, diamond)', Component: SpaceV1, picked: true },
          ]}
        />

        <div className="gradient-divider my-10" />

        <IconRow label="Flow" description="Branching data flow. V3 picked." hexComponent={HexFlow}
          variants={[
            { name: 'Branching flow (1 to 3) with pulsing dots', Component: FlowV3, picked: true },
          ]}
        />

        <div className="gradient-divider my-10" />

        <IconRow label="Avatar" description="Human-like AI presence. 4 variations. None picked yet." hexComponent={HexAvatar}
          variants={[
            { name: 'Pulsing rings + face (video call)' , Component: AvatarV1 },
            { name: 'Face + speaking waveform bars', Component: AvatarV2 },
            { name: 'Glowing orb with face', Component: AvatarV3 },
            { name: 'Two merging circles (human meets AI)', Component: AvatarV4 },
          ]}
        />
      </div>
    </div>
  )
}
