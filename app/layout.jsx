import './globals.css'
import { Outfit, Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { OrganizationJsonLd, WebsiteJsonLd } from '@/components/layout/JsonLd'
import { AIWidget } from '@/components/widgets/AIWidget'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata = {
  title: {
    default: 'Jotil Labs — AI Voice, Chat & Automation Platform',
    template: '%s | Jotil Labs',
  },
  description:
    'Jotil Labs builds AI systems that handle your calls, chats, leads, and workflows. Voice agents, chatbots, SMS automation, and CRM tools for modern businesses.',
  metadataBase: new URL('https://jotillabs.com'),
  keywords: [
    'AI voice agent',
    'AI chatbot',
    'business automation',
    'AI receptionist',
    'SMS automation',
    'Jotil Labs',
    'AI CRM',
    'workflow automation',
  ],
  authors: [{ name: 'Jotil Labs' }],
  creator: 'Jotil Labs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jotillabs.com',
    siteName: 'Jotil Labs',
    title: 'Jotil Labs — AI Voice, Chat & Automation Platform',
    description:
      'AI systems that handle your calls, chats, leads, and workflows. Built for modern businesses.',
    images: [{ url: '/og/default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jotil Labs — AI Voice, Chat & Automation Platform',
    description:
      'AI systems that handle your calls, chats, leads, and workflows.',
    images: ['/og/default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${outfit.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        {/* Google Analytics 4 — replace GA_MEASUREMENT_ID with your actual ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen bg-bg text-text antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AIWidget />
        <Analytics />
      </body>
    </html>
  )
}
