'use client'

import { motion, AnimatePresence } from 'framer-motion'

export function AvatarScreen({ isActive }) {
  return (
    <div className="w-full h-full bg-[#f4f6fb] relative overflow-hidden text-[10px]">
      {/* Faux website */}
      <div className="w-full h-full flex flex-col opacity-60">
        {/* Nav bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-gray-100">
          <span className="text-[11px] font-bold text-gray-700">acme.co</span>
          <div className="flex gap-3">
            <span className="text-[9px] text-gray-400">Products</span>
            <span className="text-[9px] text-gray-400">About</span>
            <span className="text-[9px] text-gray-400">Contact</span>
          </div>
        </div>

        {/* Hero area */}
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <p className="text-lg font-bold text-gray-300 mb-2">Welcome to Acme</p>
          <div className="w-3/4 space-y-1.5">
            <div className="h-2 bg-gray-200 rounded-full" />
            <div className="h-2 bg-gray-200 rounded-full w-5/6" />
            <div className="h-2 bg-gray-200 rounded-full w-2/3" />
          </div>
          <div className="mt-4 w-24 h-7 bg-gray-200 rounded-md" />
        </div>
      </div>

      {/* Avatar widget - bottom right */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 12 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute bottom-3 right-3 z-10"
            style={{ width: 140 }}
          >
            {/* Widget card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
              {/* Widget header */}
              <div
                className="px-3 py-1.5 text-center"
                style={{ backgroundColor: '#3859a8' }}
              >
                <span className="text-[9px] font-semibold text-white tracking-wide">
                  JotilLabs
                </span>
              </div>

              {/* Avatar area */}
              <div className="flex flex-col items-center py-3 px-2">
                {/* Avatar silhouette with breathing animation */}
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-12 h-12 rounded-full mb-2"
                  style={{
                    background: 'radial-gradient(circle at 50% 35%, #5a7ec4 0%, #3859a8 50%, #2a4688 100%)',
                  }}
                >
                  {/* Head shape */}
                  <div className="w-full h-full relative flex items-center justify-center">
                    <div
                      className="w-5 h-5 rounded-full absolute"
                      style={{
                        top: '22%',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                      }}
                    />
                    <div
                      className="w-9 h-4 rounded-t-full absolute bottom-0"
                      style={{
                        background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.15) 0%, transparent 70%)',
                      }}
                    />
                  </div>
                </motion.div>

                {/* Speech bubble */}
                <div className="bg-gray-50 rounded-lg px-2 py-1.5 mb-2 relative">
                  <p className="text-[9px] text-gray-700 leading-[1.35] text-center">
                    Hi! Welcome. I&apos;m here to help you find the right plan.
                  </p>
                </div>

                {/* Response buttons */}
                <div className="flex flex-col gap-1 w-full px-1">
                  <button
                    className="w-full py-1 rounded-full text-[8px] font-medium border"
                    style={{ borderColor: '#3859a8', color: '#3859a8' }}
                  >
                    Tell me about pricing
                  </button>
                  <button
                    className="w-full py-1 rounded-full text-[8px] font-medium border"
                    style={{ borderColor: '#3859a8', color: '#3859a8' }}
                  >
                    I need a demo
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
