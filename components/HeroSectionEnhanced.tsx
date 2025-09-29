'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function HeroSectionEnhanced() {
  const [currentWord, setCurrentWord] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  const rotatingWords = [
    { text: 'Outdated', gradient: 'from-amber-600 to-orange-600' },
    { text: 'Inefficient', gradient: 'from-red-600 to-pink-600' },
    { text: 'Manual', gradient: 'from-purple-600 to-indigo-600' },
    { text: 'Disconnected', gradient: 'from-blue-600 to-cyan-600' },
    { text: 'Struggling', gradient: 'from-gray-600 to-slate-600' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [rotatingWords.length])

  // Floating animation for cards
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }

  return (
    <section ref={containerRef} className="relative min-h-[120vh] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary-400/30 to-secondary-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-secondary-400/30 to-purple-400/30 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 min-h-screen flex items-center pt-20"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <div className="group relative inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 border border-primary-200/50 backdrop-blur-sm">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600/10 to-secondary-600/10 blur-xl group-hover:blur-2xl transition-all" />
                  <span className="relative flex items-center gap-2">
                    <span className="flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                    </span>
                    <span className="text-sm font-semibold text-gray-700">500+ Practices Transformed</span>
                  </span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <div className="space-y-4">
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="block text-gray-900">Is Your Practice</span>
                  <span className="block h-20 relative">
                    <motion.span
                      key={currentWord}
                      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                      transition={{ duration: 0.5 }}
                      className={cn(
                        "absolute inset-0 bg-gradient-to-r bg-clip-text text-transparent",
                        rotatingWords[currentWord].gradient
                      )}
                    >
                      {rotatingWords[currentWord].text}?
                    </motion.span>
                  </span>
                  <span className="block">
                    <span className="relative">
                      <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-purple-600 bg-clip-text text-transparent">
                        We Transform It
                      </span>
                      <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 400 8">
                        <motion.path
                          d="M0,4 Q100,8 200,4 T400,4"
                          stroke="url(#gradient)"
                          strokeWidth="3"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0ea5e9" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#a855f7" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Stop losing patients to practices with better technology.
                  Our <span className="font-semibold text-gray-900">HIPAA-compliant platform</span> delivers
                  <span className="text-primary-600 font-semibold"> 40% more patients</span> and
                  <span className="text-secondary-600 font-semibold"> 30% less admin time</span>.
                </motion.p>
              </div>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link href="/contact" className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <button className="relative px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full leading-none flex items-center">
                    <span className="text-white font-semibold">Get Your Free Assessment</span>
                    <svg className="ml-2 w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </Link>

                <Link href="/roi-calculator" className="group relative">
                  <button className="relative px-8 py-4 bg-white border-2 border-gray-200 rounded-full leading-none flex items-center hover:border-primary-600 transition-colors">
                    <span className="text-gray-900 font-semibold group-hover:text-primary-600">Calculate Your ROI</span>
                    <svg className="ml-2 w-5 h-5 text-gray-600 group-hover:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </button>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex flex-wrap gap-6 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {['HIPAA Compliant', 'SOC 2 Certified', '24/7 Support'].map((item, index) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[600px] hidden lg:block"
            >
              {/* Main Stats Card */}
              <motion.div
                animate={floatingAnimation}
                className="absolute top-0 right-0 w-80"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative bg-white rounded-2xl p-6 shadow-xl">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Real-Time Impact</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">New Patients</span>
                        <motion.span
                          className="text-2xl font-bold text-green-600"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          +147
                        </motion.span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Time Saved</span>
                        <span className="text-2xl font-bold text-blue-600">52hrs</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Revenue Growth</span>
                        <span className="text-2xl font-bold text-purple-600">+34%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Feature Card 1 */}
              <motion.div
                animate={{
                  y: [0, -30, 0],
                  transition: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-48 left-0 w-64"
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-4 text-white shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Instant Setup</p>
                      <p className="text-xs opacity-90">Go live in 48 hours</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Feature Card 2 */}
              <motion.div
                animate={{
                  y: [0, -25, 0],
                  transition: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                className="absolute bottom-32 right-0 w-64"
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-4 text-white shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">2M+ Patients</p>
                      <p className="text-xs opacity-90">Served nationwide</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Feature Card 3 */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }
                }}
                className="absolute bottom-0 left-8 w-64"
              >
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 text-white shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">HIPAA Secure</p>
                      <p className="text-xs opacity-90">Bank-level encryption</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-600">Scroll to explore</span>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}