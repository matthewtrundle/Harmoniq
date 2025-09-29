'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import NavigationMinimal from '@/components/NavigationMinimal'
import FooterMinimal from '@/components/FooterMinimal'
import Link from 'next/link'

export default function AboutPage() {
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

  const values = [
    {
      icon: '💙',
      title: 'Patient-First',
      description: 'Every solution we create puts patient experience and outcomes at the center of design.'
    },
    {
      icon: '🤝',
      title: 'True Partnership',
      description: 'We become an extension of your team, understanding your unique needs and goals.'
    },
    {
      icon: '✨',
      title: 'Innovation',
      description: 'Bringing the latest technology to healthcare while maintaining the human touch.'
    },
    {
      icon: '🔒',
      title: 'Trust & Security',
      description: 'HIPAA-compliant, secure, and ethical practices protect your patients and practice.'
    }
  ]

  const team = [
    {
      name: 'Our Founding Team',
      role: 'Healthcare Technology Experts',
      bio: 'Built and operate Bloom Psychology, bringing real-world experience to every project.',
      expertise: 'Full-Stack Development'
    },
    {
      name: 'Bloom Psychology',
      role: 'Our Living Laboratory',
      bio: 'Our own practice serves as a testing ground for new features and integrations.',
      expertise: 'Real-World Validation'
    },
    {
      name: 'Partner Network',
      role: 'Integration Specialists',
      bio: 'Certified partners with SimplePractice, Practice Better, Stripe, and more.',
      expertise: 'Seamless Connections'
    },
    {
      name: 'Your Success Team',
      role: 'Dedicated Support',
      bio: 'White-glove service to ensure your practice transformation is smooth and successful.',
      expertise: 'Practice Growth'
    }
  ]

  const milestones = [
    { year: '2025', event: 'Built Bloom Psychology platform from the ground up' },
    { year: '2025', event: 'Integrated with SimplePractice, Practice Better, and Stripe' },
    { year: 'Today', event: 'Launched Harmoniq AI to serve more practices' },
    { year: 'Now', event: 'Ready to transform your practice' },
    { year: 'Future', event: 'Your practice transformation begins here' }
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
                <span className="text-gray-900">Built for </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
                  Healthcare
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're on a mission to empower healthcare practices with beautiful websites
                and powerful integrations that transform patient care and drive practice growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-8 md:px-16 lg:px-24 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: 'Fast', label: 'Turnaround Time' },
                { value: 'Full', label: 'Service Offering' },
                { value: '12+', label: 'Integrations' },
                { value: '100%', label: 'HIPAA Compliant' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center"
                >
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="px-8 md:px-16 lg:px-24 py-20 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Harmoniq AI was born from firsthand experience. We built Bloom Psychology's
                  digital infrastructure from scratch and saw how the right technology could transform a practice.
                </p>
                <p>
                  We realized that every healthcare practice deserves the same level of digital
                  excellence - beautiful patient experiences, seamless operations, and technology
                  that actually works with existing tools like SimplePractice and Practice Better.
                </p>
                <p>
                  Today, we're ready to share our platform and expertise with other practices,
                  offering the same powerful technology that drives Bloom Psychology's success
                  while maintaining the personal touch that defines great healthcare.
                </p>
              </div>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-8 py-4 bg-gradient-to-r from-teal-600 to-purple-600 text-white font-bold rounded-full hover:shadow-xl transition-all"
                >
                  Start Your Journey
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-teal-50 to-purple-50 rounded-3xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Our Journey</h3>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-16 text-sm font-bold text-teal-600">
                        {milestone.year}
                      </div>
                      <div className="flex-1 text-gray-700">
                        {milestone.event}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-8 md:px-16 lg:px-24 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Healthcare Section */}
        <section className="px-8 md:px-16 lg:px-24 py-20 bg-gradient-to-br from-teal-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why We Focus on Healthcare
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Healthcare practices have unique needs that generic agencies don't understand.
                We specialize because your practice deserves specialized expertise.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'We Understand Compliance',
                  description: 'HIPAA, patient privacy, and healthcare regulations are second nature to us.',
                  icon: '🏥'
                },
                {
                  title: 'We Know Your Tools',
                  description: 'Deep integrations with SimplePractice, Practice Better, and major EMRs.',
                  icon: '🔧'
                },
                {
                  title: 'We Speak Healthcare',
                  description: 'From intake forms to superbills, we understand your workflows.',
                  icon: '💬'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 text-center"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-8 md:px-16 lg:px-24 py-20 bg-gradient-to-br from-slate-900 to-purple-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Meet the Team
              </h2>
              <p className="text-xl text-slate-300">
                Healthcare technology experts dedicated to your success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-teal-400 text-sm mb-2">{member.role}</p>
                  <p className="text-slate-400 text-sm mb-3">{member.bio}</p>
                  <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full">
                    {member.expertise}
                  </span>
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
                Join the growing community of healthcare practices experiencing the Harmoniq difference.
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