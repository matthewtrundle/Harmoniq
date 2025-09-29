'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function IntegrationShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const integrations = [
    {
      name: 'Google Ads',
      category: 'Patient Acquisition',
      description: 'Healthcare-compliant PPC campaigns that convert',
      logo: '/images/integrations/google.svg',
      color: 'from-blue-500 to-red-500',
      features: ['Smart bidding', 'Local campaigns', 'Conversion tracking']
    },
    {
      name: 'ChatGPT & AI',
      category: 'Content Creation',
      description: 'AI-optimized content that ranks everywhere',
      logo: '/images/integrations/ai.svg',
      color: 'from-teal-500 to-purple-500',
      features: ['AIO content', 'Answer optimization', 'Featured snippets']
    },
    {
      name: 'Search Console',
      category: 'SEO Analytics',
      description: 'Track rankings and organic growth',
      logo: '/images/integrations/google.svg',
      color: 'from-green-500 to-emerald-500',
      features: ['Keyword tracking', 'SERP monitoring', 'Technical SEO']
    },
    {
      name: 'Stripe',
      category: 'Payments',
      description: 'Seamless payment processing with automated billing',
      logo: '/images/integrations/stripe.svg',
      color: 'from-purple-500 to-indigo-500',
      features: ['Subscription billing', 'Payment plans', 'Instant payouts']
    },
    {
      name: 'SimplePractice',
      category: 'EMR',
      description: 'Full practice management integration',
      logo: '/images/integrations/simplepractice.svg',
      color: 'from-teal-500 to-cyan-500',
      features: ['Calendar sync', 'Client records', 'Telehealth']
    },
    {
      name: 'Practice Better',
      category: 'EMR',
      description: 'Comprehensive health & wellness platform',
      logo: '/images/integrations/practicebetter.svg',
      color: 'from-emerald-500 to-green-500',
      features: ['Intake forms', 'Treatment plans', 'Secure messaging']
    }
  ]

  return (
    <section ref={containerRef} className="relative py-24 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-100 to-purple-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Growth Stack Integrations
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Marketing + Practice Tools
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
              Working Together
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete growth ecosystem: AI-powered marketing, Google Ads, semantic SEO, plus
            seamless integration with SimplePractice, Stripe, and your existing tools.
          </p>
        </motion.div>

        {/* Integration Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${integration.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center">
                    <div className={`w-10 h-10 bg-gradient-to-r ${integration.color} rounded-lg`} />
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    {integration.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {integration.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {integration.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {integration.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Don't see your tool? We can integrate with almost any healthcare platform.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Explore All Integrations
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}