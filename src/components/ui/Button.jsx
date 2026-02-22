const baseStyle = {
  fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
}

const variantStyles = {
  primary: {
    background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
    color: '#FFFFFF',
    border: 'none',
    boxShadow: '0 4px 16px rgba(79, 70, 229, 0.35), 0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  ghost: {
    background: 'transparent',
    color: '#4F46E5',
    border: '1.5px solid rgba(79, 70, 229, 0.3)',
    boxShadow: 'none',
  },
}

const hoverStyles = {
  primary: {
    boxShadow: '0 8px 28px rgba(79, 70, 229, 0.45), 0 2px 6px rgba(0, 0, 0, 0.12)',
    transform: 'translateY(-2px)',
  },
  ghost: {
    background: 'rgba(255, 255, 255, 0.55)',
    backdropFilter: 'blur(20px) saturate(180%)',
    borderColor: 'rgba(79, 70, 229, 0.4)',
    boxShadow: '0 4px 16px rgba(79, 70, 229, 0.1)',
  },
}

export function Button({ variant = 'primary', className = '', children, onClick, ...props }) {
  const handleMouseEnter = (e) => {
    Object.assign(e.currentTarget.style, hoverStyles[variant])
  }

  const handleMouseLeave = (e) => {
    Object.assign(e.currentTarget.style, {
      ...variantStyles[variant],
      transform: 'translateY(0)',
    })
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ ...baseStyle, ...variantStyles[variant] }}
      className={`px-7 py-3 rounded-2xl font-medium cursor-pointer transition-all duration-300 ease-out ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
