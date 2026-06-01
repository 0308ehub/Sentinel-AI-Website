import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  verification: {
    google: 'EsCLA0JY-PPf3YWMq0NBs2mTdvRtbzkwDBrx-dG0nRM',
  },
  title: 'Sentinel – AI Product Discovery',
  description: 'Turn customer feedback into prioritized product opportunities. Sentinel synthesizes support tickets, interviews, and user research into actionable insights for product teams.',
  openGraph: {
    title: 'Sentinel – AI Product Discovery',
    description: 'Turn customer feedback into prioritized product opportunities.',
    url: 'https://sentinelai.one',
    siteName: 'Sentinel',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sentinel – AI Product Discovery',
    description: 'Turn customer feedback into prioritized product opportunities.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
