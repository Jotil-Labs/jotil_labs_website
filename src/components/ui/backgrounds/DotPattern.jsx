import { cn } from '../../../lib/utils'

export function DotPattern({
  className,
  size = 32,
  dotSize = 1,
  color = 'rgba(37, 99, 235, 0.08)',
  ...props
}) {
  const patternId = `dot-pattern-${size}-${dotSize}`

  return (
    <svg
      className={cn('absolute inset-0 w-full h-full pointer-events-none', className)}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={size / 2} cy={size / 2} r={dotSize} fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}
