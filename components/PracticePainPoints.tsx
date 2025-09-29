'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PracticePainPoints() {
  const painPoints = [
    {
      problem: "Spending more time on paperwork than patients?",
      solution: "Our automated systems give you back 12+ hours weekly",
      icon: "⏰"
    },
    {
      problem: "Losing patients to competitors online?",
      solution: "Dominate local search and capture referrals 24/7",
      icon: "🎯"
    },
    {
      problem: "Revenue trapped in inefficient processes?",
      solution: "Optimize collections and increase patient value by 150%",
      icon: "💰"
    },
    {
      problem: "Overwhelmed by technology decisions?",
      solution: "One integrated platform that just works",
      icon: "🛡️"
    }
  ]

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, gray 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-luxury font-bold text-gray-900 mb-6">
            Remember Why You Became a Doctor
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-elegant">
            You didn't spend years in medical school to become a business manager.
            It's time to reclaim your vision.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-100/50 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{point.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {point.problem}
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {point.solution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-luxury font-bold mb-4">
            What If Your Practice Ran So Efficiently,
            <br />
            You Could Focus Purely on Patient Care?
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join 200+ practices that have transformed their operations and rediscovered
            their passion for medicine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Schedule Your Practice Assessment
              </motion.button>
            </Link>
            <Link href="/work">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/30 transition-colors"
              >
                See Success Stories
              </motion.button>
            </Link>
          </div>
          <p className="text-sm text-white/70 mt-6">
            Free 45-minute consultation • No sales pitch • Actionable insights you can implement immediately
          </p>
        </motion.div>
      </div>
    </section>
  )
}