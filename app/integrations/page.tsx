'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import NavigationMinimal from '@/components/NavigationMinimal'
import FooterMinimal from '@/components/FooterMinimal'
import IntegrationShowcase from '@/components/IntegrationShowcase'

export default function IntegrationsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categories = [
    { id: 'all', label: 'All Integrations' },
    { id: 'payment', label: 'Payments' },
    { id: 'practice', label: 'Practice Management' },
    { id: 'communication', label: 'Communication' },
    { id: 'marketing', label: 'Marketing' }
  ]

  const integrations = [
    {
      name: 'Stripe',
      category: 'payment',
      description: 'Complete payment processing solution',
      features: [
        'One-time payments',
        'Subscription billing',
        'Payment plans',
        'Automated invoicing'
      ],
      stats: {
        metric: '$2M+',
        label: 'Processed'
      },
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'SimplePractice',
      category: 'practice',
      description: 'Full practice management integration',
      features: [
        'Client management',
        'Appointment booking',
        'Documentation',
        'Insurance billing'
      ],
      stats: {
        metric: '500+',
        label: 'Practices'
      },
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      name: 'Practice Better',
      category: 'practice',
      description: 'Health & wellness practice platform',
      features: [
        'Client portal',
        'Forms & waivers',
        'Meal planning',
        'Program delivery'
      ],
      stats: {
        metric: '24/7',
        label: 'Sync'
      },
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      name: 'Google Calendar',
      category: 'practice',
      description: 'Seamless calendar synchronization',
      features: [
        'Two-way sync',
        'Availability blocking',
        'Reminder automation',
        'Team calendars'
      ],
      stats: {
        metric: '100%',
        label: 'Reliable'
      },
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Zoom',
      category: 'communication',
      description: 'Telehealth and virtual consultations',
      features: [
        'HIPAA compliant',
        'Auto-scheduling',
        'Waiting rooms',
        'Recording options'
      ],
      stats: {
        metric: '10K+',
        label: 'Sessions'
      },
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Mailchimp',
      category: 'marketing',
      description: 'Email marketing automation',
      features: [
        'Newsletter campaigns',
        'Patient segments',
        'Automated workflows',
        'Analytics tracking'
      ],
      stats: {
        metric: '85%',
        label: 'Open Rate'
      },
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Twilio',
      category: 'communication',
      description: 'SMS and voice communications',
      features: [
        'Appointment reminders',
        'Two-way messaging',
        'Voice notifications',
        'Bulk messaging'
      ],
      stats: {
        metric: '99.9%',
        label: 'Uptime'
      },
      gradient: 'from-red-500 to-pink-500'
    },
    {
      name: 'Square',
      category: 'payment',
      description: 'In-person payment processing',
      features: [
        'Card readers',
        'Contactless pay',
        'Inventory tracking',
        'Staff management'
      ],
      stats: {
        metric: '2.6%',
        label: 'Flat Rate'
      },
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      name: 'QuickBooks',
      category: 'payment',
      description: 'Financial management & accounting',
      features: [
        'Expense tracking',
        'Financial reports',
        'Tax preparation',
        'Payroll integration'
      ],
      stats: {
        metric: 'Real-time',
        label: 'Sync'
      },
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      name: 'Acuity Scheduling',
      category: 'practice',
      description: 'Advanced appointment scheduling',
      features: [
        'Online booking',
        'Class scheduling',
        'Package sales',
        'Intake forms'
      ],
      stats: {
        metric: '24/7',
        label: 'Booking'
      },
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Google Analytics',
      category: 'marketing',
      description: 'Website analytics and insights',
      features: [
        'Traffic analysis',
        'Conversion tracking',
        'User behavior',
        'Custom reports'
      ],
      stats: {
        metric: '100%',
        label: 'Free'
      },
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'Facebook Pixel',
      category: 'marketing',
      description: 'Social media advertising tracking',
      features: [
        'Ad performance',
        'Audience building',
        'Retargeting',
        'Conversion tracking'
      ],
      stats: {
        metric: '3x',
        label: 'ROAS'
      },
      gradient: 'from-blue-600 to-blue-800'
    }
  ]

  const filteredIntegrations = activeCategory === 'all'
    ? integrations
    : integrations.filter(i => i.category === activeCategory)

  return (
    <>
      <NavigationMinimal isScrolled={isScrolled} />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-8 md:px-16 lg:px-24 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-72 h-72 bg-teal-400 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-400 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gray-900">Powerful </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
                  Integrations
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect your practice with the tools you already love. Our seamless integrations
                create a unified ecosystem that saves time and delights patients.
              </p>
            </motion.div>

            {/* Stats Bar */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-teal-600">12+</div>
                <div className="text-gray-600 text-sm">Core Integrations</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-purple-600">API</div>
                <div className="text-gray-600 text-sm">Custom Development</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-emerald-600">99.9%</div>
                <div className="text-gray-600 text-sm">Uptime Guarantee</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-indigo-600">24/7</div>
                <div className="text-gray-600 text-sm">Support Available</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-8 md:px-16 lg:px-24 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-teal-600 to-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Grid */}
        <section className="px-8 md:px-16 lg:px-24 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIntegrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {integration.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {integration.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {integration.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-end">
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="text-sm font-medium text-teal-600 hover:text-teal-700"
                      >
                        Learn More →
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Integration Section */}
        <section className="px-8 md:px-16 lg:px-24 py-20 bg-gradient-to-br from-slate-900 to-purple-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Don't See Your Tool?
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We build custom integrations for any platform with an API.
                Let us connect your entire practice ecosystem.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Custom APIs</h3>
                <p className="text-slate-400">
                  We'll build secure, reliable connections to any platform your practice uses.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-400 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Real-time Sync</h3>
                <p className="text-slate-400">
                  Keep all your systems perfectly synchronized with automated, real-time updates.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Secure & Compliant</h3>
                <p className="text-slate-400">
                  All integrations are built with HIPAA compliance and security as top priorities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 md:px-16 lg:px-24 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-500 to-purple-500 rounded-3xl p-12 text-white"
            >
              <h2 className="text-4xl font-bold mb-4">
                Ready to Connect Everything?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss your integration needs and build a connected ecosystem for your practice.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:shadow-xl transition-all"
                >
                  Get Integration Support
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterMinimal />
    </>
  )
}