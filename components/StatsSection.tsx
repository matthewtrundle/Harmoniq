'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion'
import CountUp from 'react-countup'

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]), {
    stiffness: 100,
    damping: 30
  })

  const stats = [
    {
      value: '',
      label: 'AI-Powered Marketing',
      description: 'Content optimized for AI assistants and search engines',
      suffix: '',
      color: 'from-teal-400 to-cyan-400',
      bgColor: 'from-teal-400/20 to-cyan-400/20',
      icon: (
        <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      value: '',
      label: 'First Page Rankings',
      description: 'Semantic SEO that dominates local healthcare searches',
      suffix: '',
      color: 'from-purple-400 to-violet-400',
      bgColor: 'from-purple-400/20 to-violet-400/20',
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      )
    },
    {
      value: '',
      label: 'Multiple Growth Channels',
      description: 'Organic, paid, and AI-optimized patient acquisition',
      suffix: '',
      color: 'from-indigo-400 to-purple-400',
      bgColor: 'from-indigo-400/20 to-purple-400/20',
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
        </svg>
      )
    },
    {
      value: '',
      label: 'Always-On Patient Acquisition',
      description: 'Automated systems that work while you sleep',
      suffix: '',
      color: 'from-emerald-400 to-teal-400',
      bgColor: 'from-emerald-400/20 to-teal-400/20',
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
        </svg>
      )
    }
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 overflow-hidden py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [45, 40, 45]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-r from-violet-400/15 to-purple-400/15 rounded-2xl rotate-45 blur-xl"
        />

        {/* Executive practice image overlay */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 2 }}
          className="absolute right-0 top-0 w-2/3 h-full"
        >
          <img
            src="/images/ai/practice-executive.png"
            alt="Executive practice environment"
            className="w-full h-full object-cover object-left"
          />
        </motion.div>

        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70" />

        {/* Medical Practice Icons - Subtle */}
        <div className="absolute inset-0 opacity-[0.05]">
          <motion.svg
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24"
          >
            <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 8h8v2H4zM4 13h8v2H4zM4 18h8v2H4z"/>
          </motion.svg>
          <motion.svg
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/3 w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </motion.svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Hero Text Section with enhanced parallax */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            style={{ opacity, y: parallaxY }}
            className="space-y-8"
          >
            {/* Eyebrow Text */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
              <span className="text-teal-400 font-medium tracking-wider uppercase text-sm">
                Proven Results
              </span>
            </div>

            {/* Main Headline with Gradient */}
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block text-white">Complete Digital</span>
              <span className="block bg-gradient-to-r from-teal-400 via-purple-500 to-violet-500 bg-clip-text text-transparent">
                Growth Solutions
              </span>
              <span className="block text-slate-300 text-3xl lg:text-4xl font-light mt-4">
                Websites + AI Marketing + Patient Acquisition
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
              We build stunning, conversion-focused websites integrated with Stripe, SimplePractice,
              and the tools you already use. Built on our proven Bloom Psychology platform.
            </p>
          </motion.div>

          {/* Visual Element with 3D transform */}
          <motion.div
            style={{
              scale,
              rotateY: useTransform(scrollYProgress, [0, 1], [0, 10]),
              perspective: 1000
            }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 backdrop-blur-sm border border-white/10 p-8">
              <div className="w-full h-full rounded-2xl bg-slate-800/50 border border-slate-700/50 overflow-hidden flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    Complete Growth Solutions
                  </div>
                  <p className="text-slate-400 text-sm uppercase tracking-wider">For Healthcare Practices</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.21, 1.11, 0.81, 0.99]
              }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.bgColor} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
              <div className="relative bg-slate-800/70 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 transform hover:-translate-y-2">
                {stat.value && (
                  <div className={`text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}>
                    {stat.value}
                  </div>
                )}
                <div className="text-slate-300 text-lg font-medium mb-2">{stat.label}</div>
                <div className="text-slate-400 text-sm leading-relaxed">
                  {stat.description}
                </div>
                <div className="absolute top-6 right-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.bgColor} flex items-center justify-center`}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}