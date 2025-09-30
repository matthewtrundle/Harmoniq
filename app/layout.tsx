import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://harmoniq.ai'),
  title: {
    default: 'Harmoniq AI - Healthcare Digital Transformation | Websites, AI Marketing & SEO',
    template: '%s | Harmoniq AI'
  },
  description: 'Transform your healthcare practice with HIPAA-compliant websites, AI-optimized content (AIO), semantic SEO, and Google Ads management. Built on proven Bloom Psychology platform. 40% patient growth in 90 days.',
  keywords: [
    'healthcare website design',
    'medical practice marketing',
    'HIPAA compliant websites',
    'AI healthcare content',
    'semantic SEO healthcare',
    'medical practice SEO',
    'healthcare digital transformation',
    'practice management integration',
    'SimplePractice integration',
    'Practice Better website',
    'therapy practice website',
    'pediatric practice marketing',
    'healthcare Google Ads',
    'patient acquisition',
    'AI optimized content healthcare',
    'answer engine optimization healthcare',
    'medical practice growth',
    'Bloom Psychology platform',
    'healthcare e-learning platform'
  ],
  authors: [{ name: 'Harmoniq AI', url: 'https://harmoniq.ai' }],
  creator: 'Harmoniq AI',
  publisher: 'Harmoniq AI',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harmoniq.ai',
    siteName: 'Harmoniq AI',
    title: 'Harmoniq AI - Healthcare Digital Transformation Specialists',
    description: 'HIPAA-compliant websites, AI marketing, and growth systems for thriving healthcare practices. Built on proven Bloom Psychology platform.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Harmoniq AI - Healthcare Digital Transformation',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harmoniq AI - Healthcare Digital Transformation',
    description: 'HIPAA-compliant websites, AI marketing, and growth systems for healthcare practices.',
    images: ['/og-image.jpg'],
    creator: '@harmoniqai',
  },
  alternates: {
    canonical: 'https://harmoniq.ai',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'Healthcare Technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}