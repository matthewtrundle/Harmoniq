'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import NavigationMinimal from '@/components/NavigationMinimal'
import FooterMinimal from '@/components/FooterMinimal'
import Link from 'next/link'

export default function WorkPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const bloomCase = {
    id: 1,
    title: 'Bloom Psychology Group',
    type: 'Our Flagship Platform',
    isReal: true,
    results: {
      growth: 'Thriving Practice',
      efficiency: 'Streamlined Operations',
      roi: 'Proven Platform'
    },
    description: 'Our own practice - built from the ground up with modern patient portal, automated scheduling, and online course delivery for postpartum wellness programs.',
    image: '/images/ai/mockup-executive.png',
    tags: ['Patient Portal', 'SimplePractice', 'E-Learning', 'Stripe Payments', 'HIPAA Compliant'],
    features: [
      'Custom patient portal with secure messaging',
      'Automated appointment scheduling and reminders',
      'Online course platform for patient education',
      'Integrated billing with Stripe',
      'SimplePractice EMR integration',
      'HIPAA-compliant infrastructure'
    ],
    testimonial: {
      quote: 'We built this platform for our own practice first, ensuring every feature truly serves healthcare providers and their patients.',
      author: 'Harmoniq AI Team',
      role: 'Built on Bloom Platform'
    }
  }

  return (
    <>
      <NavigationMinimal isScrolled={isScrolled} />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-8 md:px-16 lg:px-24 overflow-hidden">
          {/* Background Effects */}
          <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 opacity-10"
          >
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-violet-400 rounded-full blur-3xl" />
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gray-900">Bloom Psychology </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">Success Story</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how we built and operate our own successful healthcare practice platform,
                now available as a foundation for your practice transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Case Study */}
        <section className="px-8 md:px-16 lg:px-24 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Image Section */}
              <div className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-br from-teal-50 to-purple-50">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-100/50 to-purple-100/50">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="text-8xl mb-4">🏥</div>
                      <p className="text-2xl text-gray-700 font-semibold">{bloomCase.title}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Tags Overlay */}
                <div className="absolute bottom-8 left-8 flex flex-wrap gap-3">
                  {bloomCase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm font-medium text-white bg-black/30 backdrop-blur-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-12">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
                      {bloomCase.type}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                      Live Platform
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {bloomCase.title}
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {bloomCase.description}
                  </p>
                </div>

                {/* Results Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
                    <div className="text-3xl font-bold text-teal-600 mb-2">
                      {bloomCase.results.growth}
                    </div>
                    <p className="text-gray-600">Practice Growth</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {bloomCase.results.efficiency}
                    </div>
                    <p className="text-gray-600">Operational Excellence</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">
                      {bloomCase.results.roi}
                    </div>
                    <p className="text-gray-600">Technology Investment</p>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Platform Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {bloomCase.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8">
                  <svg className="w-10 h-10 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xl text-gray-700 italic mb-4">
                    "{bloomCase.testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{bloomCase.testimonial.author}</p>
                    <p className="text-sm text-gray-500">{bloomCase.testimonial.role}</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Transform Your Practice?
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Get the same powerful platform we use for Bloom Psychology, customized for your practice.
                  </p>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-teal-600 to-purple-600 text-white font-bold rounded-full hover:shadow-xl transition-all"
                    >
                      Start Your Transformation
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <FooterMinimal />
      </main>
    </>
  )
}