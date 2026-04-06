import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #3B7BF2 0%, #1B4FBA 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Hex icon */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 32 32"
          style={{ marginBottom: 32 }}
        >
          <path
            d="M16 1.5 L28.5 8.75 L28.5 23.25 L16 30.5 L3.5 23.25 L3.5 8.75 Z"
            fill="rgba(255,255,255,0.15)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="0.5"
          />
          <path
            d="M18.5 9 L18.5 20.5 Q18.5 23.5 15.5 23.5 Q12.5 23.5 12.5 20.5 L12.5 19 L14.8 19 L14.8 20.5 Q14.8 21.5 15.5 21.5 Q16.2 21.5 16.2 20.5 L16.2 9 Z"
            fill="white"
          />
          <circle cx="17.35" cy="7.8" r="1.2" fill="white" opacity="0.7" />
        </svg>

        {/* Company name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-2px',
            lineHeight: 1,
            marginBottom: 16,
          }}
        >
          Jotil Labs
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.8)',
            letterSpacing: '-0.5px',
          }}
        >
          Never Miss a Customer Again.
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
