import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

const SIZES = {
  sm: { icon: 28, text: 'text-base' },
  md: { icon: 32, text: 'text-lg' },
  lg: { icon: 40, text: 'text-xl' },
}

function LogoIcon({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#logo-grad)" />
      {/* Stylized "J" formed by voice waveform bars */}
      <g transform="translate(10, 8)">
        {/* Main vertical bar of J */}
        <rect x="11" y="0" width="3" height="16" rx="1.5" fill="white" opacity="0.95" />
        {/* Curve of J */}
        <path
          d="M12.5 16C12.5 16 12.5 21 8 21C3.5 21 3.5 17 3.5 17"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.95"
        />
        {/* Waveform bars flanking the J */}
        <rect x="5" y="4" width="2.5" height="10" rx="1.25" fill="white" opacity="0.4" />
        <rect x="17" y="2" width="2.5" height="12" rx="1.25" fill="white" opacity="0.5" />
        <rect x="1" y="6" width="2" height="6" rx="1" fill="white" opacity="0.25" />
      </g>
    </svg>
  )
}

export function Logo({ size = 'md', showText = true, className, dark = false }) {
  const s = SIZES[size]

  return (
    <Link to="/" className={cn('flex items-center gap-2.5 no-underline', className)}>
      <LogoIcon size={s.icon} />
      {showText && (
        <span className={cn(s.text, 'tracking-[-0.02em] font-bold')}>
          <span className={dark ? 'text-white' : 'text-text'}>Jotil</span>
          <span className={dark ? 'text-accent' : 'text-primary'}>Labs</span>
        </span>
      )}
    </Link>
  )
}
