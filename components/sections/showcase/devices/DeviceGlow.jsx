export function DeviceGlow({ radius = 60, inset = -18, intensity = 1 }) {
  return (
    <>
      {/* Outer wash — soft, large blur */}
      <div
        aria-hidden="true"
        className="device-glow-outer pointer-events-none"
        style={{
          position: 'absolute',
          inset,
          borderRadius: radius,
          background:
            'linear-gradient(135deg, rgba(6,182,212,0.55), rgba(59,130,246,0.55), rgba(139,92,246,0.6), rgba(217,70,239,0.55))',
          filter: 'blur(36px)',
          opacity: 0.55 * intensity,
        }}
      />
      {/* Inner halo — tighter, sharper colour */}
      <div
        aria-hidden="true"
        className="device-glow-inner pointer-events-none"
        style={{
          position: 'absolute',
          inset: typeof inset === 'number' ? inset + 8 : inset,
          borderRadius: radius,
          background:
            'linear-gradient(135deg, rgba(6,182,212,0.7), rgba(139,92,246,0.7), rgba(217,70,239,0.6))',
          filter: 'blur(14px)',
          opacity: 0.35 * intensity,
        }}
      />
    </>
  )
}
