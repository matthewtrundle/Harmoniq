'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function FooterMinimal() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const footerLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Contact', href: '/contact' }
  ]

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'GitHub', href: 'https://github.com' }
  ]

  return (
    <footer className="relative border-t border-gray-200 bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Top section with big statement */}
      <div className="relative px-8 md:px-16 lg:px-24 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Big CTA */}
          <h2 className="text-5xl md:text-6xl font-luxury font-bold text-gray-900 mb-8">
            Ready to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
              transform your practice?
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-end justify-between">
            {/* Contact info */}
            <div className="space-y-4">
              <Link href="mailto:hello@harmoniq.ai">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="text-2xl md:text-3xl font-elegant text-gray-600 hover:text-gray-900 transition-colors"
                >
                  hello@harmoniq.ai →
                </motion.div>
              </Link>
              <Link href="tel:+1234567890">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="text-2xl md:text-3xl font-elegant text-gray-600 hover:text-gray-900 transition-colors"
                >
                  +1 (234) 567-890 →
                </motion.div>
              </Link>
            </div>

            {/* Quick links */}
            <div className="flex gap-8">
              <div className="space-y-3">
                {footerLinks.map((link) => (
                  <Link key={link.label} href={link.href}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="font-elegant text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </motion.div>
                  </Link>
                ))}
              </div>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="font-elegant text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label} ↗
                    </motion.div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-900">
        <div className="px-8 md:px-16 lg:px-24 py-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <div className="text-2xl font-luxury font-bold text-gray-900">
              Harmoniq<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AI</span>
            </div>

            {/* Live elements */}
            <div className="flex items-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="hidden md:block">{currentTime} EST</div>
            </div>

            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © 2024 Harmoniq AI. Beautiful websites. Powerful integrations.
            </div>
          </div>
        </div>
      </div>

      {/* Background image and floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 to-purple-50/30" />
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-500/30 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: '100%'
            }}
            animate={{
              y: '-100%',
              transition: {
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 2
              }
            }}
          />
        ))}
      </div>
    </footer>
  )
}