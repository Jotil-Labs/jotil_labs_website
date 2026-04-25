export function MonitorMockup({ children }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-[460px] rounded-xl overflow-hidden"
        style={{
          boxShadow:
            '0 25px 60px rgba(15,17,41,0.2), 0 8px 20px rgba(15,17,41,0.12)',
          border: '2px solid #1a1a1a',
        }}
      >
        <div className="bg-white aspect-[16/10] overflow-hidden relative">
          {children}
        </div>
      </div>
      <div className="w-20 h-6 bg-[#2a2a2a] rounded-b-lg" />
      <div className="w-32 h-1.5 bg-[#3a3a3a] rounded-b-md" />
    </div>
  )
}
