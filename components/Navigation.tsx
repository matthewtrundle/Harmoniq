'use client'

import { useState } from 'react'
import Link from 'next/link'

interface NavigationProps {
  isScrolled: boolean
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">HF</span>
            </div>
            <div>
              <span className="font-bold text-xl text-gray-900">HealthTech</span>
              <span className="font-bold text-xl text-gradient ml-1">Forge</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/solutions" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Solutions
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Case Studies
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Resources
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span className={`block h-0.5 w-6 bg-gray-900 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-6 bg-gray-900 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-gray-900 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-xl">
            <div className="px-4 py-6 space-y-4">
              <Link href="/services" className="block text-gray-700 hover:text-primary-600 font-medium">
                Services
              </Link>
              <Link href="/solutions" className="block text-gray-700 hover:text-primary-600 font-medium">
                Solutions
              </Link>
              <Link href="/case-studies" className="block text-gray-700 hover:text-primary-600 font-medium">
                Case Studies
              </Link>
              <Link href="/resources" className="block text-gray-700 hover:text-primary-600 font-medium">
                Resources
              </Link>
              <Link href="/about" className="block text-gray-700 hover:text-primary-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="btn-primary w-full text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}