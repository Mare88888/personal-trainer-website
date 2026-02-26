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
  title: 'Petra Kovač | Osebna Trenerka Ljubljana',
  description:
    'Premium osebni trening in spletni coaching za ženske v Ljubljani, Slovenija. Preoblikuj telo in dvigni samozavest s certificirano trenerko Petro Kovač.',
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
    locale: 'sl_SI',
    url: 'https://www.petrakovac.com',
    siteName: 'Petra Kovač | Osebna Trenerka',
    title: 'Petra Kovač | Osebna Trenerka Ljubljana',
    description:
      'Premium osebni trening in spletni coaching za ženske. Preoblikuj telo, dvigni samozavest.',
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
    title: 'Petra Kovač | Osebna Trenerka Ljubljana',
    description: 'Preoblikuj telo in dvigni samozavest s premium coachingom.',
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
    <html lang="sl" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
