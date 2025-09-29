import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harmoniq AI - Elevate Your Medical Practice',
  description: 'Elevate your medical practice with sophisticated AI-powered solutions. Premium design, advanced technology, and seamless patient experiences.',
  keywords: 'medical practice elevation, AI healthcare solutions, premium practice design, sophisticated medical technology, practice transformation',
  authors: [{ name: 'Harmoniq AI' }],
  openGraph: {
    title: 'Harmoniq AI - Elevate Your Medical Practice',
    description: 'Elevate your medical practice with sophisticated AI-powered solutions.',
    url: 'https://harmoniq.ai',
    siteName: 'Harmoniq AI',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}