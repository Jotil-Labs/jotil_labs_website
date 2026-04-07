import { cn } from '@/lib/utils'

const variantStyles = {
  default: 'bg-bg-alt text-primary',
  blue: 'bg-[#E8F0FE] text-[#3B7BF2]',
  dark: 'bg-[#1B4FBA] text-white',
}

export function Badge({
  children,
  variant = 'default',
  className,
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
