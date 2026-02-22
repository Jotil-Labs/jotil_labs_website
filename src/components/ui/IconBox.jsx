import { cn } from '../../lib/utils'

export function IconBox({ children, className, size = 'md' }) {
  return (
    <div
      className={cn(
        'icon-gradient-bg flex items-center justify-center',
        size === 'sm' && 'w-10 h-10 rounded-[12px]',
        size === 'md' && 'w-12 h-12 rounded-[14px]',
        size === 'lg' && 'w-14 h-14 rounded-[16px]',
        className
      )}
    >
      {children}
    </div>
  )
}
