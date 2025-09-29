'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import NavigationMinimal from '@/components/NavigationMinimal'
import FooterMinimal from '@/components/FooterMinimal'

export default function ServicesPage() {
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

  const services = [
    {
      title: "Practice Website & Brand Identity",
      duration: "Fast turnaround",
      description: "Beautiful, conversion-focused websites that make your practice stand out",
      features: [
        "Custom design tailored to your specialty",
        "Mobile-first responsive development",
        "SEO optimization for local search",
        "Patient-focused user experience",
        "Professional photography coordination",
        "Brand identity development"
      ],
      gradient: "from-teal-500 to-cyan-500",
      ideal: "Perfect for new practices or those ready for a complete digital transformation"
    },
    {
      title: "Patient Portal & Communication",
      duration: "Quick setup",
      description: "Streamline patient interactions with modern, secure communication tools",
      features: [
        "Secure patient messaging system",
        "Online appointment booking",
        "Digital intake forms",
        "Document sharing portal",
        "Automated appointment reminders",
        "HIPAA-compliant infrastructure"
      ],
      gradient: "from-purple-500 to-violet-500",
      ideal: "Ideal for practices looking to reduce phone calls and improve patient satisfaction"
    },
    {
      title: "Payment & Billing Integration",
      duration: "Rapid deployment",
      description: "Seamless payment processing that increases collections and reduces admin work",
      features: [
        "Stripe payment integration",
        "Subscription billing setup",
        "Payment plan management",
        "Automated invoice generation",
        "Financial reporting dashboard",
        "Insurance verification tools"
      ],
      gradient: "from-emerald-500 to-teal-500",
      ideal: "Essential for practices wanting to modernize their revenue cycle"
    },
    {
      title: "E-Learning & Patient Education",
      duration: "Custom timeline",
      description: "Engage patients between visits with educational content that improves outcomes",
      features: [
        "Custom course creation platform",
        "Video content management",
        "Progress tracking system",
        "Certificate generation",
        "Resource library",
        "Patient homework assignments"
      ],
      gradient: "from-indigo-500 to-purple-500",
      ideal: "Perfect for therapy practices and specialists with patient education programs"
    },
    {
      title: "Practice Management Integration",
      duration: "Flexible schedule",
      description: "Connect all your tools into one seamless ecosystem",
      features: [
        "SimplePractice integration",
        "Practice Better connection",
        "Google Calendar sync",
        "Zoom telehealth setup",
        "Email automation workflows",
        "Custom API development"
      ],
      gradient: "from-rose-500 to-pink-500",
      ideal: "For practices using multiple tools that need everything working together"
    },
    {
      title: "Complete Digital Transformation",
      duration: "Comprehensive rollout",
      description: "Everything you need to become a fully digital practice",
      features: [
        "All services included",
        "Priority development",
        "Dedicated project manager",
        "Staff training included",
        "6 months of support",
        "Quarterly optimization reviews"
      ],
      gradient: "from-amber-500 to-orange-500",
      ideal: "For ambitious practices ready to lead in their market"
    },
    {
      title: "AI-Optimized Content (AIO)",
      duration: "Continuous optimization",
      description: "Dominate search with AI-powered content that ranks and converts",
      features: [
        "AI-enhanced medical content creation",
        "Answer Engine Optimization (AEO)",
        "Featured snippet targeting",
        "Voice search optimization",
        "Automated content calendar",
        "Performance tracking dashboard"
      ],
      gradient: "from-blue-500 to-indigo-500",
      ideal: "Essential for practices wanting to be found by AI assistants and search engines"
    },
    {
      title: "Semantic SEO Strategy (SSEO)",
      duration: "Strategic implementation",
      description: "Beyond keywords - build topical authority in your medical specialty",
      features: [
        "Entity-based optimization",
        "Medical knowledge graph building",
        "Schema markup implementation",
        "Topic cluster development",
        "Local healthcare SEO",
        "Competitor gap analysis"
      ],
      gradient: "from-violet-500 to-purple-500",
      ideal: "For practices ready to dominate their local market and specialty searches"
    },
    {
      title: "Google Ads Management",
      duration: "Ongoing management",
      description: "Precision-targeted campaigns that bring qualified patients to your door",
      features: [
        "Healthcare-compliant ad copy",
        "Conversion tracking setup",
        "Landing page optimization",
        "Retargeting campaigns",
        "Budget optimization",
        "Monthly performance reports"
      ],
      gradient: "from-red-500 to-orange-500",
      ideal: "Perfect for practices wanting immediate visibility and patient acquisition"
    }
  ]

  return (
    <>
      <NavigationMinimal isScrolled={isScrolled} />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-8 md:px-16 lg:px-24 overflow-hidden">
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
                <span className="text-gray-900">Our </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete digital growth solutions: Beautiful websites, AI-powered content,
                semantic SEO, and Google Ads management. Get found everywhere patients search.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-teal-600 mb-2">100%</div>
                <div className="text-gray-600">Custom Design</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">2-8</div>
                <div className="text-gray-600">Week Delivery</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Included</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-8 md:px-16 lg:px-24 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm">
                        <span className={`px-3 py-1 bg-gradient-to-r ${service.gradient} text-white rounded-full font-medium`}>
                          {service.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Ideal For */}
                    <div className="pt-6 border-t border-gray-100">
                      <p className="text-sm text-gray-500 italic">
                        {service.ideal}
                      </p>
                    </div>

                    {/* CTA */}
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`mt-6 w-full py-3 bg-gradient-to-r ${service.gradient} text-white font-medium rounded-lg hover:shadow-lg transition-all`}
                      >
                        Get Started
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="px-8 md:px-16 lg:px-24 py-20 bg-gradient-to-br from-slate-900 to-purple-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Process
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Simple, transparent, and designed to get you results fast
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Discovery", desc: "Understand your practice and goals" },
                { step: "2", title: "Design", desc: "Create beautiful, custom designs" },
                { step: "3", title: "Build", desc: "Develop with latest technologies" },
                { step: "4", title: "Launch", desc: "Go live and start growing" }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-purple-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
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
                Ready to Transform Your Practice?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how we can help you create a beautiful digital presence that grows your practice.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:shadow-xl transition-all"
                >
                  Schedule Free Consultation
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