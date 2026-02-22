import { cn } from '../../lib/utils'

export function GlassCard({ children, className, hover = true, premium = false, ...props }) {
  return (
    <div
      className={cn(
        'rounded-[20px] p-7',
        premium ? 'glass-premium' : 'glass',
        hover && !premium && 'glass-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
