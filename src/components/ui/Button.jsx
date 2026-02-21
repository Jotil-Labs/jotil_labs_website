const variants = {
  primary:
    'bg-gradient-to-r from-primary to-accent text-white shadow-lg hover:shadow-xl hover:brightness-110',
  ghost:
    'bg-transparent text-primary hover:bg-primary/10',
  outline:
    'border border-primary text-primary hover:bg-primary hover:text-white',
}

export function Button({ variant = 'primary', className = '', children, onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-200 cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
