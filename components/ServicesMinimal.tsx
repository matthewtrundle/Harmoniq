'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import ParallaxSection from './ParallaxSection'

export default function ServicesMinimal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], [-100, 100])

  const services = [
    {
      number: '01',
      title: 'Beautiful Patient Portals',
      description: 'Modern, HIPAA-compliant portals that patients actually want to use',
      gradient: 'from-teal-400 to-cyan-400',
      features: ['Online Booking', 'Secure Messaging', 'Patient Forms'],
      link: '/services#portals',
      image: '/images/ai/mockup-office-bright.png'
    },
    {
      number: '02',
      title: 'Seamless Payment Integration',
      description: 'Stripe-powered payments that increase collections by 40%',
      gradient: 'from-purple-400 to-violet-400',
      features: ['Stripe Payments', 'Subscription Billing', 'Payment Plans'],
      link: '/services#payments',
      image: '/images/ai/mockup-studio-purple.png'
    },
    {
      number: '03',
      title: 'Practice Management APIs',
      description: 'Connect with SimplePractice, Practice Better, and more',
      gradient: 'from-emerald-400 to-teal-400',
      features: ['EMR Integration', 'Calendar Sync', 'Automated Workflows'],
      link: '/services#integrations',
      image: '/images/ai/mockup-executive.png'
    },
    {
      number: '04',
      title: 'Patient Education Platforms',
      description: 'Beautiful e-learning systems that improve outcomes',
      gradient: 'from-indigo-400 to-purple-400',
      features: ['Course Builder', 'Progress Tracking', 'Certificates'],
      link: '/services#education',
      image: '/images/ai/mockup-desk-modern.png'
    }
  ]

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Parallax background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50" />
      </motion.div>
      {/* Floating elements background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [20, -15, 20], rotate: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-tr from-purple-400/8 to-pink-400/5 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-bl from-cyan-400/10 to-blue-400/5 rounded-full blur-lg"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Minimal header with artistic treatment */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-[clamp(40px,8vw,100px)] font-luxury font-bold leading-[0.9] tracking-[-0.01em]">
            <span className="block text-gray-300">Transform Your</span>
            <span className="block text-gray-900 -mt-6">Practice</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-purple-600 to-violet-600 -mt-6">
              Beautiful websites. Powerful integrations.
            </span>
          </h2>
        </motion.div>

        {/* Services grid with parallax */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <ParallaxSection
              key={service.number}
              className=""
              offset={["start end", "end start"]}
            >
              <Link href={service.link}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative h-96 overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    {/* Service number */}
                    <div className={cn(
                      "text-6xl font-luxury font-bold bg-gradient-to-r bg-clip-text text-transparent mb-2",
                      service.gradient
                    )}>
                      {service.number}
                    </div>

                    {/* Service title */}
                    <h3 className="text-3xl font-luxury font-bold text-white mb-2 group-hover:translate-y-[-4px] transition-transform drop-shadow-lg">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-100 font-elegant text-lg font-medium mb-4 drop-shadow-md">
                      {service.description}
                    </p>

                    {/* Feature tags - visible on hover */}
                    <motion.div
                      className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs text-white font-medium bg-black/40 backdrop-blur-sm rounded-full border border-white/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </motion.div>

                    {/* Arrow indicator */}
                    <motion.div
                      className="absolute top-6 right-6 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </ParallaxSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-20"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 px-8 py-4 text-lg font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors"
            >
              Explore All Services
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14m0 0l-7-7m7 7l-7 7" />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}