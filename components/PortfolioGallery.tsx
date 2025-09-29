'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const categories = [
    { id: 'all', label: 'All Projects', count: 12 },
    { id: 'therapy', label: 'Therapy Practices', count: 5 },
    { id: 'pediatric', label: 'Pediatrics', count: 3 },
    { id: 'wellness', label: 'Wellness Centers', count: 4 }
  ]

  const projects = [
    {
      id: 1,
      title: 'Bloom Psychology',
      category: 'therapy',
      type: 'Mental Health Practice',
      description: 'Complete digital transformation with patient portal and e-learning',
      image: '/images/portfolio/bloom.jpg',
      results: ['40% increase in new patients', '30% reduction in admin time', 'HIPAA compliant portal'],
      color: 'from-purple-600 to-indigo-600',
      testimonial: 'Harmoniq transformed how we connect with patients online.'
    },
    {
      id: 2,
      title: 'Mindful Pediatrics',
      category: 'pediatric',
      type: 'Pediatric Practice',
      description: 'Family-friendly website with online scheduling and parent resources',
      image: '/images/portfolio/pediatrics.jpg',
      results: ['60% online bookings', '95% patient satisfaction', 'Mobile-first design'],
      color: 'from-teal-600 to-cyan-600',
      testimonial: 'Parents love the convenience of our new portal.'
    },
    {
      id: 3,
      title: 'Serenity Therapy Group',
      category: 'therapy',
      type: 'Group Practice',
      description: 'Multi-therapist platform with individual provider pages',
      image: '/images/portfolio/serenity.jpg',
      results: ['8 therapist profiles', 'Unified booking system', 'Stripe payments integrated'],
      color: 'from-emerald-600 to-green-600',
      testimonial: 'Our practice finally has a professional online presence.'
    },
    {
      id: 4,
      title: 'Wellness360',
      category: 'wellness',
      type: 'Integrative Wellness',
      description: 'Holistic health center with course platform and membership portal',
      image: '/images/portfolio/wellness360.jpg',
      results: ['$50K in course sales', '200+ active members', 'Automated workflows'],
      color: 'from-amber-600 to-orange-600',
      testimonial: 'The e-learning platform has been a game-changer for us.'
    },
    {
      id: 5,
      title: 'Family First Therapy',
      category: 'therapy',
      type: 'Family Counseling',
      description: 'Warm, inviting design with secure family portals',
      image: '/images/portfolio/familyfirst.jpg',
      results: ['Secure family accounts', 'Telehealth integration', '50% faster intake'],
      color: 'from-rose-600 to-pink-600',
      testimonial: 'Families feel welcomed before they even walk in the door.'
    },
    {
      id: 6,
      title: 'Little Steps Pediatric',
      category: 'pediatric',
      type: 'Pediatric Therapy',
      description: 'Playful, engaging website for developmental therapy practice',
      image: '/images/portfolio/littlesteps.jpg',
      results: ['Interactive resources', 'Parent education portal', 'SimplePractice sync'],
      color: 'from-violet-600 to-purple-600',
      testimonial: 'Parents and kids both love our new website!'
    }
  ]

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
            </svg>
            Real Transformations
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Practice Success Stories
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Every practice is unique. See how we've helped healthcare providers create
            beautiful, functional websites that actually grow their practices.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-teal-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
                }`}
              >
                {cat.label} <span className="text-sm opacity-75">({cat.count})</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredItem(project.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.type}</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === project.id ? 1 : 0 }}
                  className="absolute inset-0 bg-black/80 flex items-center justify-center p-6"
                >
                  <div className="text-center text-white">
                    <p className="text-sm mb-4 italic">&ldquo;{project.testimonial}&rdquo;</p>
                    <a
                      href={`/portfolio/${project.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
                    >
                      View Case Study
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Results */}
                <div className="space-y-2 mb-4">
                  {project.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>

                {/* View Details Link */}
                <motion.a
                  href={`/portfolio/${project.id}`}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors"
                >
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center bg-gradient-to-r from-teal-50 to-purple-50 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Practice?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join these successful practices. Let's create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Start Your Transformation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all duration-300"
            >
              View Full Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}