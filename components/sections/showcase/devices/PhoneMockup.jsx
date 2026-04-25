export function PhoneMockup({ children, vibrate = false }) {
  return (
    <div style={{ perspective: 1200 }}>
      <div
        className={`w-[280px] h-[580px] rounded-[40px] p-3 relative ${vibrate ? 'animate-phone-vibrate' : ''}`}
        style={{
          background: '#0a0a0a',
          boxShadow:
            '0 0 0 1px rgba(255,255,255,0.1), 0 25px 60px rgba(15,17,41,0.25), 0 8px 20px rgba(15,17,41,0.15), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-7 rounded-b-2xl z-10"
          style={{ background: '#0a0a0a' }}
        />
        <div className="w-full h-full rounded-[30px] overflow-hidden bg-white relative">
          {children}
        </div>
      </div>
    </div>
  )
}
