export function PhoneMockup({ children, vibrate = false }) {
  return (
    <div className="relative" style={{ perspective: 1200 }}>
      {/* Side buttons - left */}
      <div
        className="absolute left-[-2.5px] top-[90px] w-[3px] h-[20px] rounded-l-sm"
        style={{ background: 'linear-gradient(180deg, #3a3a40, #2a2a30)' }}
      />
      <div
        className="absolute left-[-2.5px] top-[124px] w-[3px] h-[32px] rounded-l-sm"
        style={{ background: 'linear-gradient(180deg, #3a3a40, #2a2a30)' }}
      />
      <div
        className="absolute left-[-2.5px] top-[164px] w-[3px] h-[32px] rounded-l-sm"
        style={{ background: 'linear-gradient(180deg, #3a3a40, #2a2a30)' }}
      />
      {/* Side button - right (power) */}
      <div
        className="absolute right-[-2.5px] top-[130px] w-[3px] h-[40px] rounded-r-sm"
        style={{ background: 'linear-gradient(180deg, #3a3a40, #2a2a30)' }}
      />

      <div
        className={`w-[280px] h-[580px] rounded-[46px] p-[10px] relative ${vibrate ? 'animate-phone-vibrate' : ''}`}
        style={{
          background: 'linear-gradient(160deg, #2c2c30 0%, #1c1c20 40%, #0e0e12 100%)',
          boxShadow: [
            'inset 0 1px 0 rgba(255,255,255,0.06)',
            'inset 0 -1px 0 rgba(0,0,0,0.3)',
            '0 1px 2px rgba(0,0,0,0.15)',
            '0 4px 12px rgba(15,17,41,0.15)',
            '0 12px 32px rgba(15,17,41,0.2)',
            '0 32px 64px rgba(15,17,41,0.18)',
          ].join(', '),
        }}
      >
        {/* Top edge highlight */}
        <div
          className="absolute top-0 left-[25%] right-[25%] h-px rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)' }}
        />

        {/* Dynamic Island */}
        <div
          className="absolute top-[12px] left-1/2 -translate-x-1/2 z-10 flex items-center justify-center"
          style={{
            width: 92,
            height: 26,
            borderRadius: 13,
            background: '#0a0a0e',
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: 8,
              height: 8,
              background: 'radial-gradient(circle at 35% 35%, #1e1e3a, #0a0a0e)',
              boxShadow: 'inset 0 0 2px rgba(100,100,180,0.2)',
            }}
          />
        </div>

        {/* Screen area */}
        <div className="w-full h-full rounded-[36px] overflow-hidden bg-white relative">
          {children}
          {/* Glass reflection */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 35%, transparent 65%, rgba(255,255,255,0.02) 100%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
