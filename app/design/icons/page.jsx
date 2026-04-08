'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Badge } from '@/components/ui/Badge'

/* ─────────────────────────────────────────────────
   ACCENT-FORWARD ANIMATED ICONS
   Each icon has its own CSS keyframe animation
   matching the original hex accent behavior.
───────────────────────────────────────────────────── */

// ── RECEPTIONIST: Waveform bars ──
function ReceptionistV1({ size = 40, color = '#3B7BF2' }) {
  const barAnim = (delay) => ({
    animation: `waveBar 1.2s ease-in-out ${delay}s infinite alternate`,
    transformBox: 'fill-box',
    transformOrigin: 'center bottom',
  })
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect x="4" y="16" width="5" height="8" rx="2.5" fill={color} opacity="0.5" style={barAnim(0)} />
      <rect x="11" y="10" width="5" height="20" rx="2.5" fill={color} opacity="0.65" style={barAnim(0.1)} />
      <rect x="18" y="6" width="5" height="28" rx="2.5" fill={color} style={barAnim(0.2)} />
      <rect x="25" y="12" width="5" height="16" rx="2.5" fill={color} opacity="0.65" style={barAnim(0.3)} />
      <rect x="32" y="14" width="5" height="12" rx="2.5" fill={color} opacity="0.5" style={barAnim(0.4)} />
    </svg>
  )
}

function ReceptionistV2({ size = 40, color = '#3B7BF2' }) {
  const barAnim = (delay) => ({
    animation: `waveBar 1.4s ease-in-out ${delay}s infinite alternate`,
    transformBox: 'fill-box',
    transformOrigin: 'center bottom',
  })
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect x="6" y="18" width="4" height="4" rx="2" fill={color} opacity="0.4" style={barAnim(0)} />
      <rect x="13" y="12" width="4" height="16" rx="2" fill={color} opacity="0.6" style={barAnim(0.12)} />
      <rect x="20" y="6" width="4" height="28" rx="2" fill={color} style={barAnim(0.24)} />
      <rect x="27" y="10" width="4" height="20" rx="2" fill={color} opacity="0.6" style={barAnim(0.36)} />
      <rect x="34" y="16" width="4" height="8" rx="2" fill={color} opacity="0.4" style={barAnim(0.48)} />
    </svg>
  )
}

function ReceptionistV3({ size = 40, color = '#3B7BF2' }) {
  const barAnim = (delay) => ({
    animation: `waveBar 1.0s ease-in-out ${delay}s infinite alternate`,
    transformBox: 'fill-box',
    transformOrigin: 'center bottom',
  })
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect x="5" y="17" width="3.5" height="6" rx="1.75" fill={color} opacity="0.45" style={barAnim(0)} />
      <rect x="11" y="12" width="3.5" height="16" rx="1.75" fill={color} opacity="0.6" style={barAnim(0.08)} />
      <rect x="17" y="7" width="4" height="26" rx="2" fill={color} style={barAnim(0.16)} />
      <rect x="23.5" y="9" width="3.5" height="22" rx="1.75" fill={color} opacity="0.75" style={barAnim(0.24)} />
      <rect x="29.5" y="13" width="3.5" height="14" rx="1.75" fill={color} opacity="0.55" style={barAnim(0.32)} />
      <rect x="35.5" y="17" width="3.5" height="6" rx="1.75" fill={color} opacity="0.35" style={barAnim(0.4)} />
    </svg>
  )
}

// ── MESSENGER: Typing dots ── (V2 is the pick)
function MessengerV1({ size = 40, color = '#6366F1' }) {
  const dotAnim = (delay) => ({
    animation: `typingDot 1.4s ease-in-out ${delay}s infinite`,
    transformBox: 'fill-box',
    transformOrigin: 'center',
  })
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="10" cy="24" r="4" stroke={color} strokeWidth="2" fill="none" opacity="0.5" style={dotAnim(0)} />
      <circle cx="20" cy="18" r="5.5" stroke={color} strokeWidth="2" fill="none" opacity="0.7" style={dotAnim(0.15)} />
      <circle cx="31" cy="14" r="7" stroke={color} strokeWidth="2" fill="none" style={dotAnim(0.3)} />
    </svg>
  )
}

function MessengerV2({ size = 40, color = '#6366F1' }) {
  const dotAnim = (delay) => ({
    animation: `typingDot 1.4s ease-in-out ${delay}s infinite`,
    transformBox: 'fill-box',
    transformOrigin: 'center',
  })
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="10" cy="20" r="3" fill={color} opacity="0.35" style={dotAnim(0)} />
      <circle cx="20" cy="20" r="3" fill={color} opacity="0.6" style={dotAnim(0.2)} />
      <circle cx="30" cy="20" r="3" fill={color} style={dotAnim(0.4)} />
    </svg>
  )
}

function MessengerV3({ size = 40, color = '#6366F1' }) {
  const dotAnim = (delay) => ({
    animation: `typingDot 1.4s ease-in-out ${delay}s infinite`,
    transformBox: 'fill-box',
    transformOrigin: 'center',
  })
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M6 10h28a2 2 0 012 2v14a2 2 0 01-2 2H14l-6 5v-5H6a2 2 0 01-2-2V12a2 2 0 012-2z" stroke={color} strokeWidth="1.8" fill="none" opacity="0.25" />
      <circle cx="13" cy="19" r="2.5" fill={color} opacity="0.4" style={dotAnim(0)} />
      <circle cx="20" cy="19" r="2.5" fill={color} opacity="0.65" style={dotAnim(0.2)} />
      <circle cx="27" cy="19" r="2.5" fill={color} style={dotAnim(0.4)} />
    </svg>
  )
}

// ── OUTREACH: Paper planes ── (V1 is the pick)
function OutreachV1({ size = 40, color = '#0EA5E9' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <g style={{ animation: 'planeFly 3s ease-in-out infinite' }}>
        <path d="M6 20l28-14-8 16-6-4-14 2z" fill={color} opacity="0.12" />
        <path d="M6 20l28-14-8 16-6-4-14 2z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill="none" />
        <path d="M20 18l6 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  )
}

function OutreachV2({ size = 40, color = '#0EA5E9' }) {
  const planeAnim = (delay) => ({
    animation: `planeDispatch 2.5s ease-in-out ${delay}s infinite`,
    transformBox: 'fill-box',
    transformOrigin: 'center',
  })
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <g opacity="0.35" transform="translate(4, 24) scale(0.6)" style={planeAnim(0)}>
        <path d="M0 8l20-8-6 10-4-3L0 8z" fill={color} />
      </g>
      <g opacity="0.65" transform="translate(12, 14) scale(0.8)" style={planeAnim(0.6)}>
        <path d="M0 8l20-8-6 10-4-3L0 8z" fill={color} />
      </g>
      <g transform="translate(18, 4) scale(1)" style={planeAnim(1.2)}>
        <path d="M0 8l20-8-6 10-4-3L0 8z" fill={color} />
      </g>
    </svg>
  )
}

function OutreachV3({ size = 40, color = '#0EA5E9' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <g style={{ animation: 'planeFly 3s ease-in-out infinite' }}>
        <path d="M6 34L8 20 34 6 20 32 16 22z" fill={color} opacity="0.12" />
        <path d="M6 34L34 6" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M34 6L20 32" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M20 32L16 22L6 34" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

// ── SPACE: Shape carousel ── (V1 is the pick)
function SpaceV1({ size = 40, color = '#3B7BF2' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="12" cy="12" r="6" fill={color} opacity="0.7" style={{ animation: 'shapeRotate 8s ease-in-out infinite 0s' }} />
      <rect x="22" y="6" width="12" height="12" rx="2" fill={color} opacity="0.5" style={{ animation: 'shapeRotate 8s ease-in-out infinite 2s' }} />
      <polygon points="12,28 18,40 6,40" fill={color} opacity="0.4" style={{ animation: 'shapeRotate 8s ease-in-out infinite 4s' }} />
      <polygon points="28,26 34,32 28,38 22,32" fill={color} opacity="0.6" style={{ animation: 'shapeRotate 8s ease-in-out infinite 6s' }} />
    </svg>
  )
}

function SpaceV2({ size = 40, color = '#3B7BF2' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect x="4" y="4" width="14" height="14" rx="4" fill={color} opacity="0.8" style={{ animation: 'shapePulse 2s ease-in-out infinite 0s' }} />
      <rect x="22" y="4" width="14" height="14" rx="4" fill={color} opacity="0.5" style={{ animation: 'shapePulse 2s ease-in-out infinite 0.3s' }} />
      <rect x="4" y="22" width="14" height="14" rx="4" fill={color} opacity="0.5" style={{ animation: 'shapePulse 2s ease-in-out infinite 0.6s' }} />
      <rect x="22" y="22" width="14" height="14" rx="4" fill={color} opacity="0.3" style={{ animation: 'shapePulse 2s ease-in-out infinite 0.9s' }} />
    </svg>
  )
}

function SpaceV3({ size = 40, color = '#3B7BF2' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="3" fill={color} style={{ animation: 'shapePulse 2s ease-in-out infinite' }} />
      <circle cx="20" cy="6" r="4" fill={color} opacity="0.7" style={{ animation: 'orbitSpin 6s linear infinite' , transformOrigin: '20px 20px' }} />
      <rect x="30" y="16" width="8" height="8" rx="2" fill={color} opacity="0.5" style={{ animation: 'orbitSpin 6s linear infinite reverse', transformOrigin: '20px 20px' }} />
      <polygon points="20,34 24,40 16,40" fill={color} opacity="0.4" />
      <polygon points="4,20 8,16 8,24" fill={color} opacity="0.6" />
    </svg>
  )
}

// ── FLOW: Curved paths with dots ── (V3 is the pick)
function FlowV1({ size = 40, color = '#6366F1' }) {
  const lineAnim = (delay) => ({
    animation: `flowPulse 2s ease-in-out ${delay}s infinite`,
  })
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M4 30Q14 10 20 20T36 10" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" style={lineAnim(0)} />
      <circle cx="4" cy="30" r="3" fill={color} style={{ animation: 'dotPulse 2s ease-in-out infinite 0s' }} />
      <circle cx="20" cy="20" r="2.5" fill={color} opacity="0.6" style={{ animation: 'dotPulse 2s ease-in-out infinite 0.3s' }} />
      <circle cx="36" cy="10" r="3" fill={color} style={{ animation: 'dotPulse 2s ease-in-out infinite 0.6s' }} />
    </svg>
  )
}

function FlowV2({ size = 40, color = '#6366F1' }) {
  const lineAnim = (delay) => ({
    animation: `flowPulse 2s ease-in-out ${delay}s infinite`,
  })
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M4 12Q16 6 36 12" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" style={lineAnim(0)} />
      <path d="M4 20Q16 14 36 20" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" style={lineAnim(0.15)} />
      <path d="M4 28Q16 22 36 28" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" style={lineAnim(0.3)} />
      <circle cx="36" cy="12" r="2.5" fill={color} opacity="0.4" style={{ animation: 'dotPulse 2s ease-in-out infinite 0s' }} />
      <circle cx="36" cy="20" r="3" fill={color} style={{ animation: 'dotPulse 2s ease-in-out infinite 0.2s' }} />
      <circle cx="36" cy="28" r="2.5" fill={color} opacity="0.4" style={{ animation: 'dotPulse 2s ease-in-out infinite 0.4s' }} />
    </svg>
  )
}

function FlowV3({ size = 40, color = '#6366F1' }) {
  const dotAnim = (delay) => ({
    animation: `dotPulse 2s ease-in-out ${delay}s infinite`,
  })
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="6" cy="20" r="4" fill={color} style={dotAnim(0)} />
      <path d="M10 20H18" stroke={color} strokeWidth="2" strokeLinecap="round" style={{ animation: 'flowPulse 2s ease-in-out infinite' }} />
      <path d="M18 20Q22 20 26 12" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" style={{ animation: 'flowPulse 2s ease-in-out 0.1s infinite' }} />
      <path d="M18 20Q22 20 26 20" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" style={{ animation: 'flowPulse 2s ease-in-out 0.2s infinite' }} />
      <path d="M18 20Q22 20 26 28" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" style={{ animation: 'flowPulse 2s ease-in-out 0.3s infinite' }} />
      <circle cx="30" cy="12" r="3" fill={color} opacity="0.5" style={dotAnim(0.2)} />
      <circle cx="30" cy="20" r="3" fill={color} opacity="0.7" style={dotAnim(0.4)} />
      <circle cx="30" cy="28" r="3" fill={color} opacity="0.5" style={dotAnim(0.6)} />
    </svg>
  )
}

// ── AVATAR: New variations ──
function AvatarV1({ size = 40, color = '#0EA5E9' }) {
  // Pulsing concentric circles (like a video call ring)
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="16" stroke={color} strokeWidth="1.5" fill="none" opacity="0.15" style={{ animation: 'ringPulse 2s ease-out infinite' }} />
      <circle cx="20" cy="20" r="11" stroke={color} strokeWidth="1.5" fill="none" opacity="0.3" style={{ animation: 'ringPulse 2s ease-out 0.3s infinite' }} />
      <circle cx="20" cy="18" r="6" fill={color} opacity="0.12" />
      <circle cx="18" cy="16.5" r="1.2" fill={color} />
      <circle cx="22" cy="16.5" r="1.2" fill={color} />
      <path d="M17 20.5Q20 23 23 20.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M12 32Q20 27 28 32" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  )
}

function AvatarV2({ size = 40, color = '#0EA5E9' }) {
  // Waveform + face (speaking avatar)
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="16" r="8" fill={color} opacity="0.08" stroke={color} strokeWidth="1.5" />
      <circle cx="17.5" cy="14.5" r="1.3" fill={color} />
      <circle cx="22.5" cy="14.5" r="1.3" fill={color} />
      <path d="M17 19Q20 22 23 19" stroke={color} strokeWidth="1.3" strokeLinecap="round" fill="none" />
      {/* Speaking waveform below face */}
      <rect x="11" y="30" width="2.5" height="5" rx="1.25" fill={color} opacity="0.3" style={{ animation: 'waveBar 1s ease-in-out 0s infinite alternate' }} />
      <rect x="15.5" y="28" width="2.5" height="9" rx="1.25" fill={color} opacity="0.5" style={{ animation: 'waveBar 1s ease-in-out 0.1s infinite alternate' }} />
      <rect x="20" y="27" width="2.5" height="11" rx="1.25" fill={color} opacity="0.7" style={{ animation: 'waveBar 1s ease-in-out 0.2s infinite alternate' }} />
      <rect x="24.5" y="29" width="2.5" height="7" rx="1.25" fill={color} opacity="0.5" style={{ animation: 'waveBar 1s ease-in-out 0.3s infinite alternate' }} />
      <rect x="29" y="31" width="2.5" height="3" rx="1.25" fill={color} opacity="0.3" style={{ animation: 'waveBar 1s ease-in-out 0.4s infinite alternate' }} />
    </svg>
  )
}

function AvatarV3({ size = 40, color = '#0EA5E9' }) {
  // Glowing orb with face emerging
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="16" fill={color} opacity="0.06" style={{ animation: 'ringPulse 3s ease-out infinite' }} />
      <circle cx="20" cy="20" r="12" fill={color} opacity="0.08" />
      <circle cx="20" cy="18" r="7" fill={color} opacity="0.04" stroke={color} strokeWidth="1.2" />
      <circle cx="17.5" cy="16" r="1.5" fill={color} opacity="0.8" />
      <circle cx="22.5" cy="16" r="1.5" fill={color} opacity="0.8" />
      <path d="M17 21Q20 24 23 21" stroke={color} strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function AvatarV4({ size = 40, color = '#0EA5E9' }) {
  // Abstract: two overlapping circles (human + AI merging)
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="15" cy="20" r="10" stroke={color} strokeWidth="1.8" fill={color} opacity="0.06" style={{ animation: 'shapePulse 3s ease-in-out infinite' }} />
      <circle cx="25" cy="20" r="10" stroke={color} strokeWidth="1.8" fill={color} opacity="0.06" style={{ animation: 'shapePulse 3s ease-in-out 0.5s infinite' }} />
      {/* Face in the overlap zone */}
      <circle cx="18.5" cy="18" r="1.2" fill={color} />
      <circle cx="21.5" cy="18" r="1.2" fill={color} />
      <path d="M18 22Q20 24.5 22 22" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

// ── DISPLAY COMPONENTS ──
function IconRow({ label, description, variants, sizes = [16, 24, 32, 40, 64, 80] }) {
  return (
    <div className="mb-14">
      <h3
        className="text-xl font-bold text-text mb-1 tracking-tight"
        style={{ fontFamily: 'var(--font-outfit)' }}
      >
        {label}
      </h3>
      {description && <p className="text-sm text-text-secondary mb-6">{description}</p>}
      <div className="space-y-8">
        {variants.map(({ name, Component, color, picked }, vi) => (
          <div key={vi} className={picked ? 'rounded-2xl p-5 -mx-5' : ''} style={picked ? { background: 'rgba(59,123,242,0.04)', border: '1px solid rgba(59,123,242,0.1)' } : {}}>
            <div className="flex items-center gap-2 mb-3">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                Variant {vi + 1}: {name}
              </p>
              {picked && <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">PICKED</span>}
            </div>
            <div className="flex items-end gap-6 flex-wrap">
              {sizes.map((s) => (
                <div key={s} className="flex flex-col items-center gap-2">
                  <div
                    className="flex items-center justify-center rounded-xl"
                    style={{
                      width: Math.max(s + 16, 40),
                      height: Math.max(s + 16, 40),
                      background: 'rgba(0,0,0,0.02)',
                      border: '1px solid rgba(0,0,0,0.04)',
                    }}
                  >
                    <Component size={s} color={color} />
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

// ── PAGE ──
export default function IconExplorationPage() {
  return (
    <div className="min-h-screen bg-bg pt-28 pb-20">
      <style jsx global>{`
        @keyframes waveBar {
          0% { transform: scaleY(0.6); opacity: 0.4; }
          100% { transform: scaleY(1); opacity: 1; }
        }
        @keyframes typingDot {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.4); opacity: 1; }
        }
        @keyframes planeFly {
          0% { transform: translate(0, 0); }
          50% { transform: translate(3px, -2px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes planeDispatch {
          0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(4px, -3px) scale(1.1); opacity: 1; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
        }
        @keyframes shapeRotate {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          25% { transform: scale(1.15); opacity: 1; }
          50% { transform: scale(1); opacity: 0.5; }
        }
        @keyframes shapePulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        @keyframes flowPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.25); opacity: 1; }
        }
        @keyframes ringPulse {
          0% { transform: scale(0.95); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.15; }
          100% { transform: scale(0.95); opacity: 0.3; }
        }
        @keyframes orbitSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">

        <AnimatedSection>
          <Badge variant="blue" className="mb-4">Design Exploration</Badge>
          <h1
            className="text-4xl font-extrabold text-text tracking-tight mb-3"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Product Icon Family (Animated)
          </h1>
          <p className="text-text-secondary max-w-2xl mb-2">
            Accent-forward animated icons. Each reflects its product's hex accent theme.
            Picked variants are highlighted. Avatar has 4 new variations.
          </p>
          <p className="text-xs text-text-secondary">
            Internal design review only. Not indexed.
          </p>
        </AnimatedSection>

        <div className="gradient-divider my-10" />

        <IconRow
          label="Receptionist"
          description="Voice/audio waveform. Undecided, review all three with animation."
          variants={[
            { name: 'Symmetric 5-bar waveform', Component: ReceptionistV1, color: '#3B7BF2' },
            { name: 'Thin symmetric 5-bar', Component: ReceptionistV2, color: '#3B7BF2' },
            { name: 'Asymmetric 6-bar waveform', Component: ReceptionistV3, color: '#3B7BF2' },
          ]}
        />

        <div className="gradient-divider my-10" />

        <IconRow
          label="Messenger"
          description="Chat typing indicator. V2 picked."
          variants={[
            { name: 'Ascending hollow circles', Component: MessengerV1, color: '#6366F1' },
            { name: 'Three inline dots (typing)', Component: MessengerV2, color: '#6366F1', picked: true },
            { name: 'Chat bubble with dots', Component: MessengerV3, color: '#6366F1' },
          ]}
        />

        <div className="gradient-divider my-10" />

        <IconRow
          label="Outreach"
          description="Message dispatched outward. V1 picked."
          variants={[
            { name: 'Single paper plane', Component: OutreachV1, color: '#0EA5E9', picked: true },
            { name: 'Three planes dispatching', Component: OutreachV2, color: '#0EA5E9' },
            { name: 'Bold send arrow', Component: OutreachV3, color: '#0EA5E9' },
          ]}
        />

        <div className="gradient-divider my-10" />

        <IconRow
          label="Space"
          description="Multi-tool workspace. V1 picked."
          variants={[
            { name: 'Mixed shapes (circle, square, triangle, diamond)', Component: SpaceV1, color: '#3B7BF2', picked: true },
            { name: '2x2 rounded grid', Component: SpaceV2, color: '#3B7BF2' },
            { name: 'Shapes orbiting center', Component: SpaceV3, color: '#3B7BF2' },
          ]}
        />

        <div className="gradient-divider my-10" />

        <IconRow
          label="Flow"
          description="Data flowing through connected paths. V3 picked."
          variants={[
            { name: 'S-curve with endpoint dots', Component: FlowV1, color: '#6366F1' },
            { name: 'Three parallel flow lines', Component: FlowV2, color: '#6366F1' },
            { name: 'Branching flow (1 to 3)', Component: FlowV3, color: '#6366F1', picked: true },
          ]}
        />

        <div className="gradient-divider my-10" />

        <IconRow
          label="Avatar"
          description="Human-like AI presence. 4 new variations. None picked yet."
          variants={[
            { name: 'Pulsing rings + face (video call)', Component: AvatarV1, color: '#0EA5E9' },
            { name: 'Face + speaking waveform', Component: AvatarV2, color: '#0EA5E9' },
            { name: 'Glowing orb with face', Component: AvatarV3, color: '#0EA5E9' },
            { name: 'Two merging circles + face (human meets AI)', Component: AvatarV4, color: '#0EA5E9' },
          ]}
        />

      </div>
    </div>
  )
}
