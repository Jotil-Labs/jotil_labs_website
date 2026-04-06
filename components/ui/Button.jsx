'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-gradient-to-r from-[#1B4FBA] to-[#3B7BF2] text-white shadow-md shadow-[#3B7BF2]/20 hover:shadow-lg hover:shadow-[#3B7BF2]/30',
  outline:
    'border border-[#3B7BF2]/30 text-[#3B7BF2] bg-transparent hover:bg-[#3B7BF2]/5',
  ghost:
    'text-[#3B7BF2] bg-transparent hover:bg-[#3B7BF2]/5',
}

const sizes = {
  sm: 'h-8 px-3.5 text-sm gap-1.5 rounded-[10px]',
  md: 'h-10 px-5 text-sm gap-2 rounded-[11px]',
  lg: 'h-12 px-7 text-base gap-2.5 rounded-[12px]',
}

export const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    className,
    href,
    disabled = false,
    ...props
  },
  ref
) {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      ref={ref}
      href={href}
      disabled={!href ? disabled : undefined}
      className={cn(
        'inline-flex items-center justify-center font-semibold tracking-[-0.01em] transition-all duration-200',
        'active:scale-[0.98] hover:scale-[1.02]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B7BF2]/40 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        'select-none cursor-pointer',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
})
