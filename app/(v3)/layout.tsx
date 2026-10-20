import { Analytics } from '@vercel/analytics/next'
import { Geist } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

export const metadata: Metadata = {
  title: 'Be Resilient | Book Your Private Consult',
  description: 'Book a private consult with Dr. Pete’s team and explore what may be missing beneath the surface.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/v3/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/v3/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/v3/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/v3/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background light">
      <head>
        <link rel="preconnect" href="https://api.leadconnectorhq.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://link.msgsndr.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geist.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
