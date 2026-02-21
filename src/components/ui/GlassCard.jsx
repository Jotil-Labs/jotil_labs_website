export function GlassCard({ className = '', children }) {
  return (
    <div
      className={`bg-white/60 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl ${className}`}
    >
      {children}
    </div>
  )
}
