const glassStyle = {
  background: 'rgba(255, 255, 255, 0.55)',
  backdropFilter: 'blur(20px) saturate(180%)',
  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
  border: '1px solid rgba(255, 255, 255, 0.6)',
  boxShadow: '0 8px 32px rgba(79, 70, 229, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
  borderRadius: '24px',
}

export function GlassCard({ className = '', children }) {
  return (
    <div style={glassStyle} className={`transition-all duration-300 ${className}`}>
      {children}
    </div>
  )
}
