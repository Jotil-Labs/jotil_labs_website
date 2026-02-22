import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export function Button({ children, variant = 'primary', size = 'md', className, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold cursor-pointer',
        'transition-all duration-300',
        'focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2',
        size === 'sm' && 'px-4 py-2 text-sm rounded-[10px]',
        size === 'md' && 'px-6 py-3 text-sm rounded-[10px]',
        size === 'lg' && 'px-8 py-4 text-base rounded-[12px]',
        variant === 'primary' &&
          'btn-gradient text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35',
        variant === 'outline' &&
          'border border-border bg-white/60 text-text hover:border-border-hover hover:bg-white/80 hover:shadow-lg hover:shadow-primary/5',
        variant === 'ghost' &&
          'text-text-secondary hover:text-text hover:bg-surface',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
