'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface NavigationProps {
  isScrolled: boolean
}

export default function NavigationMinimal({ isScrolled }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100" : "bg-white/80 backdrop-blur-md border-b border-gray-100/50"
      )}>
        <div className="px-8 md:px-16 lg:px-24">
          <div className="flex items-center justify-between h-24">
            {/* Logo with Tagline */}
            <Link href="/" className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative flex flex-col"
              >
                {/* Main logo */}
                <div className="text-2xl font-luxury font-bold text-gray-900">
                  Harmoniq<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600"> AI</span>
                </div>
                {/* Tagline */}
                <div className="text-xs font-medium text-gray-600 tracking-wider mt-1">
                  Practice Transformation Specialists
                </div>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-12">
              {['Services', 'Our Work', 'Integrations'].map((item, index) => (
                <Link
                  key={item}
                  href={item === 'Our Work' ? '/work' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="relative group"
                >
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                    {item}
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-teal-600 to-purple-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}

              {/* CTA buttons */}
              <div className="flex items-center gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-6 py-2.5 font-medium rounded-full overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-purple-600" />
                    <span className="relative z-10 text-white text-sm">Book Consultation</span>
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <motion.span
                  animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
                  className="block h-0.5 w-full bg-gradient-to-r from-cyan-400 to-pink-400"
                />
                <motion.span
                  animate={{ opacity: isMenuOpen ? 0 : 1 }}
                  className="block h-0.5 w-full bg-gradient-to-r from-cyan-400 to-pink-400"
                />
                <motion.span
                  animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
                  className="block h-0.5 w-full bg-gradient-to-r from-cyan-400 to-pink-400"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-slate-900 to-purple-900 z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-bold text-white hover:text-teal-400 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/work"
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-bold text-white hover:text-teal-400 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/integrations"
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-bold text-white hover:text-teal-400 transition-colors"
              >
                Integrations
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 px-8 py-3 bg-gradient-to-r from-teal-600 to-purple-600 text-white font-bold rounded-full hover:scale-105 transition-transform"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}