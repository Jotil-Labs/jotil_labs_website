import { cn } from '../../lib/utils'

export function GlassCard({ children, className, hover = true, ...props }) {
  return (
    <div
      className={cn(
        'glass rounded-[20px] p-6',
        hover && 'glass-hover transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
