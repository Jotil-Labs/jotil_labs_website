export function LaptopMockup({ children }) {
  return (
    <div className="flex flex-col items-center">
      {/* Screen */}
      <div
        className="w-[480px] rounded-t-xl overflow-hidden relative"
        style={{
          border: '2px solid #1a1a1e',
          borderBottom: 'none',
          boxShadow: [
            '0 4px 12px rgba(15,17,41,0.12)',
            '0 12px 32px rgba(15,17,41,0.18)',
            '0 32px 64px rgba(15,17,41,0.14)',
          ].join(', '),
        }}
      >
        {/* Browser chrome */}
        <div
          className="flex items-center gap-2 px-4 py-2.5 border-b border-black/5"
          style={{ background: 'linear-gradient(180deg, #f8f8f8, #f0f0f0)' }}
        >
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 mx-6">
            <div className="bg-white/80 rounded-md px-3 py-1 text-[10px] text-gray-400 text-center border border-black/5">
              app.jotillabs.com
            </div>
          </div>
        </div>
        <div className="bg-white aspect-[16/10] overflow-hidden relative">
          {children}
        </div>
      </div>
      {/* Keyboard deck */}
      <div
        className="w-[520px] h-[14px] rounded-b-lg"
        style={{
          background: 'linear-gradient(180deg, #c8c8cc, #b0b0b4)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)',
        }}
      />
    </div>
  )
}
