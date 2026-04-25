export function LaptopMockup({ children }) {
  return (
    <div
      className="w-[480px] rounded-xl overflow-hidden"
      style={{
        boxShadow:
          '0 25px 60px rgba(15,17,41,0.2), 0 8px 20px rgba(15,17,41,0.12)',
        border: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#f6f6f6] border-b border-black/5">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-8">
          <div className="bg-white rounded-md px-3 py-1 text-[11px] text-gray-400 text-center border border-black/5">
            app.jotillabs.com
          </div>
        </div>
      </div>
      <div className="bg-white aspect-[16/10] overflow-hidden relative">
        {children}
      </div>
    </div>
  )
}
