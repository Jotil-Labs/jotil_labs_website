export function MonitorMockup({ children, glass = false }) {
  return (
    <div className="flex flex-col items-center">
      {/* Screen */}
      <div
        className="w-[460px] rounded-xl overflow-hidden relative"
        style={{
          border: glass ? '2px solid rgba(26, 26, 30, 0.5)' : '2px solid #1a1a1e',
          boxShadow: [
            'inset 0 0 0 1px rgba(255,255,255,0.04)',
            '0 4px 12px rgba(15,17,41,0.12)',
            '0 12px 32px rgba(15,17,41,0.18)',
            '0 32px 64px rgba(15,17,41,0.14)',
          ].join(', '),
        }}
      >
        <div className="bg-white aspect-[16/10] overflow-hidden relative">
          {children}
        </div>
        {/* Chin */}
        <div
          className="h-[6px] flex items-center justify-center"
          style={{ background: glass ? 'rgba(42, 42, 46, 0.6)' : 'linear-gradient(180deg, #2a2a2e, #1a1a1e)' }}
        />
      </div>
      {/* Stand neck */}
      <div
        className="w-[60px] h-[28px]"
        style={{
          background: glass ? 'rgba(192, 192, 196, 0.6)' : 'linear-gradient(90deg, #c0c0c4, #d4d4d8, #c0c0c4)',
        }}
      />
      {/* Stand base */}
      <div
        className="w-[120px] h-[6px] rounded-b-md"
        style={{
          background: 'linear-gradient(180deg, #c8c8cc, #b0b0b4)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
        }}
      />
    </div>
  )
}
