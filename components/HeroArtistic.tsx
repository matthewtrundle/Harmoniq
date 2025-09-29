'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { useSpring as useReactSpring, animated } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import CyclingBackground from './CyclingBackground'
import MouseFollowEffect from './MouseFollowEffect'

export default function HeroArtistic() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentPhrase, setCurrentPhrase] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Practice transformation phrases
  const phrases = [
    "Beautiful Websites.",
    "Seamless Integrations.",
    "Growing Practices.",
    "Happy Patients.",
    "Thriving Business.",
    "Modern Care."
  ]

  // Draggable element physics
  const [{ x: dragX, y: dragY }, api] = useReactSpring(() => ({
    x: 0,
    y: 0,
    config: { mass: 1, tension: 350, friction: 40 }
  }))

  const bind = useDrag(({ offset: [x, y] }) => {
    api.start({ x, y })
  }, {
    bounds: { left: -200, right: 200, top: -200, bottom: 200 }
  })

  // Mouse follower
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Phrase rotation - slower timing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 4000) // Slowed down from 2000ms to 4000ms
    return () => clearInterval(interval)
  }, [phrases.length])

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Mouse-following video background */}
      <MouseFollowEffect intensity={0.2} />

      {/* Clean, elegant overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-blue-50/80 backdrop-blur-sm" />

        {/* Floating light orbs - more subtle */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-[600px] h-[600px] -left-[200px] -top-[200px]"
        >
          <div className="w-full h-full bg-gradient-to-br from-cyan-200/20 to-blue-200/10 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute w-[500px] h-[500px] -right-[150px] -bottom-[150px]"
        >
          <div className="w-full h-full bg-gradient-to-br from-violet-200/20 to-purple-200/10 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 min-h-screen flex items-center px-8 md:px-16 lg:px-24"
      >
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-6"
            >
              <span className="w-2 h-2 bg-gradient-to-r from-teal-600 to-purple-600 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Therapy • Pediatrics • Small Practices</span>
            </motion.div>

            {/* Main headline - Enhanced readability with fixed height */}
            <div className="relative h-[80px] md:h-[90px] lg:h-[100px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhrase}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 flex items-center"
                >
                  <h1 className="text-[clamp(48px,5vw,72px)] font-luxury font-bold leading-[1.1] tracking-tight text-gray-900 whitespace-nowrap">
                    {phrases[currentPhrase]}
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Subtitle with enhanced contrast */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="space-y-4"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 max-w-xl leading-tight">
                Your Practice, Beautifully Transformed
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
                Websites, AI marketing, and growth systems for thriving healthcare practices.
                <span className="block mt-2 text-base text-gray-500">
                  AI-Optimized Content • Semantic SEO • Google Ads • Practice Integrations
                </span>
              </p>
            </motion.div>

            {/* CTA and Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="space-y-8"
            >
              {/* CTA Button */}
              <div>
                <Link href="/contact">
                  <motion.button
                    className="group relative px-10 py-5 text-lg font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 font-semibold text-white">Start Your Transformation</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal-600 via-purple-600 to-indigo-600 rounded-full shadow-lg"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal-600 via-purple-600 to-indigo-600 rounded-full blur-xl opacity-50"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.3 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Built on Bloom Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Full Support</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Video showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 lg:p-10 border border-gray-100">
              {/* Decorative gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl opacity-10" />

              {/* Video player */}
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/harmoniq-hero.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Caption */}
              <div className="mt-4 text-center space-y-2">
                <p className="text-sm font-elegant text-gray-700 font-medium">Healthcare Digital Transformation</p>
                <Link href="/work" className="text-sm text-teal-600 hover:text-teal-700 font-medium underline">
                  View Portfolio →
                </Link>
              </div>
            </div>

            {/* Floating accent elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}