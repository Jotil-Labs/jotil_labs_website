import { cn } from '../../../lib/utils'

export function Aurora({ className, ...props }) {
  return (
    <div
      className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}
      aria-hidden="true"
      {...props}
    >
      {/* Aurora layer 1 — primary blue sweep */}
      <div
        className="absolute w-[140%] h-[60%] opacity-[0.12]"
        style={{
          top: '-10%',
          left: '-20%',
          background: 'linear-gradient(135deg, transparent 20%, rgba(37, 99, 235, 0.4) 40%, rgba(99, 102, 241, 0.3) 60%, transparent 80%)',
          filter: 'blur(80px)',
          animation: 'aurora-drift-1 12s ease-in-out infinite',
        }}
      />
      {/* Aurora layer 2 — accent cyan ribbon */}
      <div
        className="absolute w-[120%] h-[50%] opacity-[0.10]"
        style={{
          top: '10%',
          left: '-10%',
          background: 'linear-gradient(160deg, transparent 25%, rgba(14, 165, 233, 0.35) 45%, rgba(37, 99, 235, 0.25) 65%, transparent 85%)',
          filter: 'blur(100px)',
          animation: 'aurora-drift-2 16s ease-in-out infinite',
        }}
      />
      {/* Aurora layer 3 — secondary violet */}
      <div
        className="absolute w-[100%] h-[40%] opacity-[0.08]"
        style={{
          bottom: '5%',
          right: '-15%',
          background: 'linear-gradient(200deg, transparent 30%, rgba(99, 102, 241, 0.35) 50%, rgba(14, 165, 233, 0.2) 70%, transparent 90%)',
          filter: 'blur(120px)',
          animation: 'aurora-drift-3 20s ease-in-out infinite',
        }}
      />
    </div>
  )
}
