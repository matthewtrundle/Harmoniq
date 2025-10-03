'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import NavigationMinimal from '@/components/NavigationMinimal'
import FooterMinimal from '@/components/FooterMinimal'
import Link from 'next/link'

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    practice: '',
    phone: '',
    practiceType: '',
    currentWebsite: '',
    services: [] as string[],
    timeline: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      setSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your form. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const services = [
    'New Website',
    'Patient Portal',
    'Online Scheduling',
    'SimplePractice Integration',
    'Payment Processing',
    'Telehealth Setup',
    'E-Learning Platform',
    'Multi-Location Support'
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
                <span className="text-gray-900">Let's </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
                  Transform
                </span>
                <span className="text-gray-900"> Your Practice</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Start your journey to a beautiful, modern practice website with seamless integrations.
                Get a free consultation and custom growth strategy tailored to your needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="px-8 md:px-16 lg:px-24 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Tell Us About Your Practice
                  </h2>

                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Basic Info */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                            placeholder="Dr. Jane Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                            placeholder="jane@practice.com"
                          />
                        </div>
                      </div>

                      {/* Practice Info */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Practice Name *
                          </label>
                          <input
                            type="text"
                            name="practice"
                            required
                            value={formData.practice}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                            placeholder="Bloom Psychology"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      {/* Practice Type */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Practice Type *
                        </label>
                        <select
                          name="practiceType"
                          required
                          value={formData.practiceType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                        >
                          <option value="">Select your practice type</option>
                          <option value="therapy">Therapy/Mental Health</option>
                          <option value="pediatrics">Pediatrics</option>
                          <option value="family">Family Practice</option>
                          <option value="wellness">Wellness Center</option>
                          <option value="specialty">Other Specialty</option>
                        </select>
                      </div>

                      {/* Current Website */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Current Website (if any)
                        </label>
                        <input
                          type="url"
                          name="currentWebsite"
                          value={formData.currentWebsite}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                          placeholder="https://www.yourpractice.com"
                        />
                      </div>

                      {/* Services Interested In */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Services You're Interested In
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {services.map(service => (
                            <label
                              key={service}
                              className="flex items-center space-x-2 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={formData.services.includes(service)}
                                onChange={() => handleServiceToggle(service)}
                                className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                              />
                              <span className="text-sm text-gray-700">{service}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Timeline and Budget */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                          >
                            <option value="">Select timeline</option>
                            <option value="asap">ASAP</option>
                            <option value="1month">Within 1 month</option>
                            <option value="3months">1-3 months</option>
                            <option value="6months">3-6 months</option>
                            <option value="planning">Just planning</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                          >
                            <option value="">Select budget</option>
                            <option value="5-10k">$5,000 - $10,000</option>
                            <option value="10-25k">$10,000 - $25,000</option>
                            <option value="25-50k">$25,000 - $50,000</option>
                            <option value="50k+">$50,000+</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Tell us about your goals and challenges
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                          placeholder="What are your biggest challenges? What would success look like for your practice?"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full px-8 py-4 bg-gradient-to-r from-teal-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all ${
                          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          'Get Your Free Consultation'
                        )}
                      </motion.button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <div className="w-24 h-24 bg-gradient-to-br from-teal-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h3>
                      <p className="text-lg text-gray-600">
                        We've received your information and will contact you within 24 hours.
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Check your email for next steps and helpful resources.
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Right Column - Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-8"
              >
                {/* Why Choose Us */}
                <div className="bg-gradient-to-br from-teal-600 to-purple-600 rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Harmoniq AI?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Built on Real Experience</p>
                        <p className="text-white/80 text-sm">Real-world healthcare platform experience means we understand your needs</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">HIPAA-Compliant Integrations</p>
                        <p className="text-white/80 text-sm">Seamlessly connect with HIPAA-compliant systems and platforms</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Full Support</p>
                        <p className="text-white/80 text-sm">We're here to help you succeed every step of the way</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What Happens Next */}
                <div className="bg-white rounded-3xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Your Success Path
                  </h3>
                  <div className="space-y-4">
                    {[
                      { step: '01', title: 'Free Consultation', desc: '30-minute call to understand your practice needs' },
                      { step: '02', title: 'Custom Proposal', desc: 'Tailored solution with clear pricing and timeline' },
                      { step: '03', title: 'Design & Build', desc: 'Beautiful website with seamless integrations' },
                      { step: '04', title: 'Launch & Support', desc: 'Go live with ongoing support and optimization' }
                    ].map((item, index) => (
                      <motion.div
                        key={item.step}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">{item.step}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-br from-teal-50 to-purple-50 rounded-3xl p-8">
                  <h4 className="font-bold text-gray-900 mb-4">Why Practices Choose Harmoniq</h4>
                  <ul className="space-y-3">
                    {[
                      'Healthcare-specific expertise',
                      'HIPAA-compliant integrations',
                      'SimplePractice & EMR integrations',
                      'Beautiful, modern designs',
                      '24/7 support included',
                      'Proven results with 5.2x average ROI'
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-8 md:px-16 lg:px-24 py-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Common Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about working with us
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  q: 'How long does a typical project take?',
                  a: 'Most practice websites are completed in 2-4 weeks. More complex projects with integrations typically take 4-8 weeks.'
                },
                {
                  q: 'Do you work with my existing EMR/practice management system?',
                  a: 'Yes! We have deep integrations with SimplePractice, Practice Better, and most major EMR systems.'
                },
                {
                  q: 'Do you provide HIPAA-compliant solutions?',
                  a: 'We specialize in integrating with HIPAA-compliant platforms and systems. While we don\'t build HIPAA-compliant infrastructure ourselves, we ensure seamless connections to certified systems that meet all compliance requirements.'
                },
                {
                  q: 'What kind of ongoing support do you provide?',
                  a: '24/7 technical support, monthly optimization reviews, and continuous updates to keep your site running perfectly.'
                },
                {
                  q: 'Can you help with our existing website?',
                  a: 'Yes, we can either enhance your current site or build a completely new one, depending on your needs and goals.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-teal-50 to-purple-50 rounded-2xl p-8"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterMinimal />
    </>
  )
}