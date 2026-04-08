import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Badge } from '@/components/ui/Badge'

export const metadata = {
  title: 'Icon Design Exploration',
  robots: { index: false },
}

/* ─────────────────────────────────────────────────
   ACCENT-FORWARD ICONS (no hex container)
   Each product's accent element as a standalone icon.
   Multiple variations per product to explore.
───────────────────────────────────────────────────── */

// ── RECEPTIONIST: Waveform bars ──
function ReceptionistV1({ size = 40, color = '#3B7BF2' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect x="4" y="16" width="5" height="8" rx="2.5" fill={color} opacity="0.5" />
      <rect x="11" y="10" width="5" height="20" rx="2.5" fill={color} opacity="0.65" />
      <rect x="18" y="6" width="5" height="28" rx="2.5" fill={color} />
      <rect x="25" y="12" width="5" height="16" rx="2.5" fill={color} opacity="0.65" />
      <rect x="32" y="14" width="5" height="12" rx="2.5" fill={color} opacity="0.5" />
    </svg>
  )
}

function ReceptionistV2({ size = 40, color = '#3B7BF2' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect x="6" y="18" width="4" height="4" rx="2" fill={color} opacity="0.4" />
      <rect x="13" y="12" width="4" height="16" rx="2" fill={color} opacity="0.6" />
      <rect x="20" y="6" width="4" height="28" rx="2" fill={color} />
      <rect x="27" y="10" width="4" height="20" rx="2" fill={color} opacity="0.6" />
      <rect x="34" y="16" width="4" height="8" rx="2" fill={color} opacity="0.4" />
    </svg>
  )
}

function ReceptionistV3({ size = 40, color = '#3B7BF2' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect x="5" y="17" width="3.5" height="6" rx="1.75" fill={color} opacity="0.45" />
      <rect x="11" y="12" width="3.5" height="16" rx="1.75" fill={color} opacity="0.6" />
      <rect x="17" y="7" width="4" height="26" rx="2" fill={color} />
      <rect x="23.5" y="9" width="3.5" height="22" rx="1.75" fill={color} opacity="0.75" />
      <rect x="29.5" y="13" width="3.5" height="14" rx="1.75" fill={color} opacity="0.55" />
      <rect x="35.5" y="17" width="3.5" height="6" rx="1.75" fill={color} opacity="0.35" />
    </svg>
  )
}

// ── MESSENGER: Typing/chat dots ──
function MessengerV1({ size = 40, color = '#6366F1' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="10" cy="24" r="4" stroke={color} strokeWidth="2" fill="none" opacity="0.5" />
      <circle cx="20" cy="18" r="5.5" stroke={color} strokeWidth="2" fill="none" opacity="0.7" />
      <circle cx="31" cy="14" r="7" stroke={color} strokeWidth="2" fill="none" />
    </svg>
  )
}

function MessengerV2({ size = 40, color = '#6366F1' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="10" cy="20" r="3" fill={color} opacity="0.35" />
      <circle cx="20" cy="20" r="3" fill={color} opacity="0.6" />
      <circle cx="30" cy="20" r="3" fill={color} />
    </svg>
  )
}

function MessengerV3({ size = 40, color = '#6366F1' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Chat bubble shape with dots inside */}
      <path d="M6 10h28a2 2 0 012 2v14a2 2 0 01-2 2H14l-6 5v-5H6a2 2 0 01-2-2V12a2 2 0 012-2z" stroke={color} strokeWidth="1.8" fill="none" opacity="0.25" />
      <circle cx="13" cy="19" r="2.5" fill={color} opacity="0.4" />
      <circle cx="20" cy="19" r="2.5" fill={color} opacity="0.65" />
      <circle cx="27" cy="19" r="2.5" fill={color} />
    </svg>
  )
}

// ── OUTREACH: Paper planes ──
function OutreachV1({ size = 40, color = '#0EA5E9' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M6 20l28-14-8 16-6-4-14 2z" fill={color} opacity="0.15" />
      <path d="M6 20l28-14-8 16-6-4-14 2z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" fill="none" />
      <path d="M20 18l6 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function OutreachV2({ size = 40, color = '#0EA5E9' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Three small planes at different positions like dispatching */}
      <g opacity="0.35" transform="translate(4, 24) scale(0.6)">
        <path d="M0 8l20-8-6 10-4-3L0 8z" fill={color} />
      </g>
      <g opacity="0.65" transform="translate(12, 14) scale(0.8)">
        <path d="M0 8l20-8-6 10-4-3L0 8z" fill={color} />
      </g>
      <g transform="translate(18, 4) scale(1)">
        <path d="M0 8l20-8-6 10-4-3L0 8z" fill={color} />
      </g>
    </svg>
  )
}

function OutreachV3({ size = 40, color = '#0EA5E9' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Single bold send arrow */}
      <path d="M6 34L8 20 34 6 20 32 16 22z" fill={color} opacity="0.12" />
      <path d="M6 34L34 6" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M34 6L20 32" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 32L16 22L6 34" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── SPACE: Shape grid / multi-tool ──
function SpaceV1({ size = 40, color = '#3B7BF2' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="12" cy="12" r="6" fill={color} opacity="0.7" />
      <rect x="22" y="6" width="12" height="12" rx="2" fill={color} opacity="0.5" />
      <polygon points="12,28 18,40 6,40" fill={color} opacity="0.4" />
      <polygon points="28,26 34,32 28,38 22,32" fill={color} opacity="0.6" />
    </svg>
  )
}

function SpaceV2({ size = 40, color = '#3B7BF2' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* 2x2 grid of rounded squares */}
      <rect x="4" y="4" width="14" height="14" rx="4" fill={color} opacity="0.8" />
      <rect x="22" y="4" width="14" height="14" rx="4" fill={color} opacity="0.5" />
      <rect x="4" y="22" width="14" height="14" rx="4" fill={color} opacity="0.5" />
      <rect x="22" y="22" width="14" height="14" rx="4" fill={color} opacity="0.3" />
    </svg>
  )
}

function SpaceV3({ size = 40, color = '#3B7BF2' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Mixed shapes in orbit around center */}
      <circle cx="20" cy="20" r="3" fill={color} />
      <circle cx="20" cy="6" r="4" fill={color} opacity="0.7" />
      <rect x="30" y="16" width="8" height="8" rx="2" fill={color} opacity="0.5" />
      <polygon points="20,34 24,40 16,40" fill={color} opacity="0.4" />
      <polygon points="4,20 8,16 8,24" fill={color} opacity="0.6" />
    </svg>
  )
}

// ── FLOW: Curved paths with dots ──
function FlowV1({ size = 40, color = '#6366F1' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M4 30Q14 10 20 20T36 10" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="4" cy="30" r="3" fill={color} />
      <circle cx="20" cy="20" r="2.5" fill={color} opacity="0.6" />
      <circle cx="36" cy="10" r="3" fill={color} />
    </svg>
  )
}

function FlowV2({ size = 40, color = '#6366F1' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Three parallel flow lines */}
      <path d="M4 12Q16 6 36 12" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" />
      <path d="M4 20Q16 14 36 20" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M4 28Q16 22 36 28" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" />
      <circle cx="36" cy="12" r="2.5" fill={color} opacity="0.4" />
      <circle cx="36" cy="20" r="3" fill={color} />
      <circle cx="36" cy="28" r="2.5" fill={color} opacity="0.4" />
    </svg>
  )
}

function FlowV3({ size = 40, color = '#6366F1' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Branching flow: one input splits to three outputs */}
      <circle cx="6" cy="20" r="4" fill={color} />
      <path d="M10 20H18" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M18 20Q22 20 26 12" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M18 20Q22 20 26 20" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M18 20Q22 20 26 28" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="30" cy="12" r="3" fill={color} opacity="0.5" />
      <circle cx="30" cy="20" r="3" fill={color} opacity="0.7" />
      <circle cx="30" cy="28" r="3" fill={color} opacity="0.5" />
    </svg>
  )
}

// ── AVATAR: Face / human presence ──
function AvatarV1({ size = 40, color = '#0EA5E9' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="16" r="10" stroke={color} strokeWidth="2" fill="none" />
      <circle cx="16" cy="14" r="2" fill={color} />
      <circle cx="24" cy="14" r="2" fill={color} />
      <path d="M15 20Q20 25 25 20" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M10 32Q20 26 30 32" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function AvatarV2({ size = 40, color = '#0EA5E9' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Simplified head + shoulders silhouette */}
      <circle cx="20" cy="14" r="8" fill={color} opacity="0.15" stroke={color} strokeWidth="1.8" />
      <circle cx="17" cy="12.5" r="1.5" fill={color} opacity="0.7" />
      <circle cx="23" cy="12.5" r="1.5" fill={color} opacity="0.7" />
      <path d="M16.5 17Q20 20.5 23.5 17" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M6 36Q20 28 34 36" fill={color} opacity="0.1" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function AvatarV3({ size = 40, color = '#0EA5E9' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Video frame with face inside */}
      <rect x="3" y="6" width="34" height="24" rx="4" stroke={color} strokeWidth="1.8" fill="none" opacity="0.3" />
      <circle cx="20" cy="15" r="5" fill={color} opacity="0.2" stroke={color} strokeWidth="1.5" />
      <circle cx="18" cy="14" r="1" fill={color} />
      <circle cx="22" cy="14" r="1" fill={color} />
      <path d="M17.5 17.5Q20 19.5 22.5 17.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" />
      {/* Record dot */}
      <circle cx="33" cy="10" r="2" fill="#EF4444" />
    </svg>
  )
}

// ── HEX WITH SUBTLE CONTAINER (Mode 2) ──
function HexOutline({ size = 80 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path
        d="M20 2L37 11V29L20 38L3 29V11Z"
        stroke="#3B7BF2"
        strokeWidth="1"
        fill="none"
        opacity="0.15"
      />
    </svg>
  )
}

// ── DISPLAY COMPONENTS ──
function IconRow({ label, variants, sizes = [16, 24, 32, 40, 64, 80] }) {
  return (
    <div className="mb-12">
      <h3
        className="text-lg font-bold text-text mb-1 tracking-tight"
        style={{ fontFamily: 'var(--font-outfit)' }}
      >
        {label}
      </h3>
      <div className="space-y-6">
        {variants.map(({ name, Component, color }, vi) => (
          <div key={vi}>
            <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">
              Variant {vi + 1}: {name}
            </p>
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
      <div className="max-w-6xl mx-auto px-6">

        <AnimatedSection>
          <Badge variant="blue" className="mb-4">Design Exploration</Badge>
          <h1
            className="text-4xl font-extrabold text-text tracking-tight mb-3"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Product Icon Family
          </h1>
          <p className="text-text-secondary max-w-2xl mb-4">
            Accent-forward icons derived from each product's hex logo animation.
            Three variations per product at multiple sizes. Pick your favorites.
          </p>
          <p className="text-xs text-text-secondary">
            This page is not indexed. For internal design review only.
          </p>
        </AnimatedSection>

        <div className="gradient-divider my-10" />

        <IconRow
          label="Receptionist"
          variants={[
            { name: 'Symmetric waveform (5 bars)', Component: ReceptionistV1, color: '#3B7BF2' },
            { name: 'Thin symmetric (5 bars)', Component: ReceptionistV2, color: '#3B7BF2' },
            { name: 'Asymmetric waveform (6 bars)', Component: ReceptionistV3, color: '#3B7BF2' },
          ]}
        />

        <div className="gradient-divider my-10" />

        <IconRow
          label="Messenger"
          variants={[
            { name: 'Ascending hollow circles', Component: MessengerV1, color: '#6366F1' },
            { name: 'Three inline dots', Component: MessengerV2, color: '#6366F1' },
            { name: 'Chat bubble with dots', Component: MessengerV3, color: '#6366F1' },
          ]}
        />

        <div className="gradient-divider my-10" />

        <IconRow
          label="Outreach"
          variants={[
            { name: 'Single paper plane', Component: OutreachV1, color: '#0EA5E9' },
            { name: 'Three planes dispatching', Component: OutreachV2, color: '#0EA5E9' },
            { name: 'Bold send arrow', Component: OutreachV3, color: '#0EA5E9' },
          ]}
        />

        <div className="gradient-divider my-10" />

        <IconRow
          label="Space"
          variants={[
            { name: 'Mixed shapes (circle, square, triangle, diamond)', Component: SpaceV1, color: '#3B7BF2' },
            { name: '2x2 rounded grid', Component: SpaceV2, color: '#3B7BF2' },
            { name: 'Shapes orbiting center', Component: SpaceV3, color: '#3B7BF2' },
          ]}
        />

        <div className="gradient-divider my-10" />

        <IconRow
          label="Flow"
          variants={[
            { name: 'S-curve with endpoint dots', Component: FlowV1, color: '#6366F1' },
            { name: 'Three parallel flow lines', Component: FlowV2, color: '#6366F1' },
            { name: 'Branching flow (1 to 3)', Component: FlowV3, color: '#6366F1' },
          ]}
        />

        <div className="gradient-divider my-10" />

        <IconRow
          label="Avatar"
          variants={[
            { name: 'Face outline with smile', Component: AvatarV1, color: '#0EA5E9' },
            { name: 'Soft face with body silhouette', Component: AvatarV2, color: '#0EA5E9' },
            { name: 'Video frame with face + record dot', Component: AvatarV3, color: '#0EA5E9' },
          ]}
        />

      </div>
    </div>
  )
}
