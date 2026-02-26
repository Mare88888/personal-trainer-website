import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Petra Kovač | Personal Trainer Ljubljana',
  description:
    'Premium personal training and online coaching for women in Ljubljana, Slovenia. Transform your body and elevate your confidence with certified trainer Petra Kovač.',
  keywords: [
    'personal trainer Ljubljana',
    'osebni trener Ljubljana',
    'online coaching Slovenia',
    'women fitness Slovenia',
    'body transformation',
    'personal training',
  ],
  authors: [{ name: 'Petra Kovač' }],
  creator: 'Petra Kovač',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.petrakovac.com',
    siteName: 'Petra Kovač | Personal Trainer',
    title: 'Petra Kovač | Personal Trainer Ljubljana',
    description:
      'Premium personal training and online coaching for women. Transform your body, elevate your confidence.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Petra Kovač Personal Trainer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Petra Kovač | Personal Trainer Ljubljana',
    description: 'Transform your body and elevate your confidence with premium coaching.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
