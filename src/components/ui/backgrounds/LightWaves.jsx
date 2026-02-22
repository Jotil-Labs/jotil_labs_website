import { cn } from '../../../lib/utils'

export function LightWaves({ className, ...props }) {
  return (
    <div
      className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}
      aria-hidden="true"
      {...props}
    >
      {/* Wave 1 — top sweep */}
      <svg
        className="absolute w-full opacity-[0.06]"
        style={{ top: '10%' }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke="url(#wave-grad-1)"
          strokeWidth="1.5"
          d="M0,160 C360,60 720,260 1080,120 C1260,60 1380,100 1440,160"
          style={{ animation: 'wave-flow-1 8s ease-in-out infinite' }}
        />
        <defs>
          <linearGradient id="wave-grad-1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#2563EB" />
            <stop offset="70%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wave 2 — middle */}
      <svg
        className="absolute w-full opacity-[0.05]"
        style={{ top: '35%' }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke="url(#wave-grad-2)"
          strokeWidth="1.5"
          d="M0,200 C240,280 480,80 720,200 C960,320 1200,100 1440,180"
          style={{ animation: 'wave-flow-2 12s ease-in-out infinite' }}
        />
        <defs>
          <linearGradient id="wave-grad-2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="#0EA5E9" />
            <stop offset="80%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wave 3 — lower */}
      <svg
        className="absolute w-full opacity-[0.04]"
        style={{ top: '60%' }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke="url(#wave-grad-3)"
          strokeWidth="1"
          d="M0,120 C480,240 720,40 1080,180 C1260,260 1380,120 1440,160"
          style={{ animation: 'wave-flow-3 16s ease-in-out infinite' }}
        />
        <defs>
          <linearGradient id="wave-grad-3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor="#6366F1" />
            <stop offset="60%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
