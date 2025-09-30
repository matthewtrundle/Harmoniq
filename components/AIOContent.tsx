'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
  category: string
}

export default function AIOContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQ[] = [
    {
      category: "AI-Optimized Content",
      question: "What is AI-Optimized Content (AIO) for healthcare practices?",
      answer: "AI-Optimized Content (AIO) is medical content specifically engineered to rank in AI-powered search engines like ChatGPT, Google's AI Overview, Perplexity, and Claude. Unlike traditional SEO, AIO focuses on answering natural language queries that patients ask AI assistants. We optimize content for Answer Engine Optimization (AEO), ensuring your practice appears when patients ask questions like 'best therapy practice near me' or 'how to find a pediatrician who accepts my insurance.'"
    },
    {
      category: "Semantic SEO",
      question: "How is semantic SEO different from traditional SEO for medical practices?",
      answer: "Semantic SEO focuses on building topical authority through entity-based optimization rather than just targeting keywords. For healthcare practices, this means creating comprehensive content clusters around your specialty, implementing medical knowledge graphs, and using schema markup to help search engines understand your expertise. This approach results in rankings for hundreds of related healthcare terms, not just your target keywords."
    },
    {
      category: "HIPAA Compliance",
      question: "Are Harmoniq AI websites HIPAA compliant?",
      answer: "Yes, all Harmoniq AI websites are built with HIPAA compliance from day one. We implement encrypted patient portals, secure data transmission (TLS 1.3+), audit logging, access controls, and sign Business Associate Agreements (BAA) with every healthcare client. Our platform is built on the proven Bloom Psychology infrastructure, which handles real patient data for mental health services."
    },
    {
      category: "Practice Integration",
      question: "Which practice management systems does Harmoniq AI integrate with?",
      answer: "Harmoniq AI integrates seamlessly with SimplePractice, Practice Better, TherapyNotes, and other popular EMR systems. We also connect with Stripe for payment processing, Google Calendar for scheduling, Zoom for telehealth, and can build custom API integrations for proprietary practice management systems. All integrations maintain HIPAA compliance and include automated data sync."
    },
    {
      category: "Results Timeline",
      question: "How long does it take to see patient growth from digital transformation?",
      answer: "Most healthcare practices see measurable results within 90 days. Initial SEO improvements often appear within 4-6 weeks for local healthcare searches. AI-optimized content typically starts ranking in AI assistants within 2-3 months. Our average client experiences 40% patient acquisition growth within the first quarter, with 30% reduction in administrative time from automation and integrations."
    },
    {
      category: "Cost & ROI",
      question: "What is the typical ROI for healthcare digital transformation?",
      answer: "Healthcare practices typically see positive ROI within 90 days. With an average 40% increase in patient acquisition and 30% reduction in admin time, most practices recoup their investment quickly. For example, if a therapy practice adds 10 new patients per month at $150/session, that's $18,000 in additional annual revenue from just the first month's growth. Combined with time savings worth $15,000+ annually, the ROI often exceeds 400% in the first year."
    },
    {
      category: "Google Ads",
      question: "How does Google Ads for healthcare practices differ from other industries?",
      answer: "Healthcare Google Ads require specialized compliance knowledge. We create healthcare-compliant ad copy that follows HIPAA regulations, avoid prohibited health condition targeting, implement proper consent forms, and use healthcare-specific landing pages with required disclaimers. Our campaigns focus on high-intent searches like 'therapy near me accepting new patients' or 'pediatrician same-day appointments,' resulting in higher conversion rates than general healthcare advertising."
    },
    {
      category: "Specialties",
      question: "Which medical specialties does Harmoniq AI serve?",
      answer: "Harmoniq AI specializes in therapy practices, mental health services, pediatric practices, OB/GYN clinics, and small multi-specialty medical groups. Our Bloom Psychology platform was originally built for mental health services, giving us deep expertise in behavioral health compliance, therapy-specific workflows, and patient engagement for sensitive healthcare services. We also serve general practitioners, urgent care centers, and specialty clinics."
    },
    {
      category: "Technology",
      question: "What technology stack does Harmoniq AI use?",
      answer: "Harmoniq AI builds on a modern, enterprise-grade stack: Next.js 14+ with App Router for websites, Supabase for HIPAA-compliant data storage, Stripe for PCI-DSS compliant payments, OAuth2 for secure integrations, and React with TypeScript for type-safe development. All infrastructure is hosted on HIPAA-compliant servers with automatic backups, 99.9% uptime SLA, and 24/7 monitoring. This is the same proven stack that powers Bloom Psychology's production platform."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header optimized for AI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 mb-6">
            <svg className="w-4 h-4 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Optimized for AI Assistants & Search Engines
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about healthcare digital transformation,
            AI-optimized content, and practice growth strategies
          </p>
        </motion.div>

        {/* FAQ Accordion - Structured for AIO */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-100 to-purple-100 text-cyan-700 text-xs font-medium rounded-full mb-2">
                    {faq.category}
                  </span>
                  <h3
                    className="text-lg font-semibold text-gray-900"
                    itemProp="name"
                  >
                    {faq.question}
                  </h3>
                </div>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="px-6 pb-5">
                  <p
                    className="text-gray-600 leading-relaxed"
                    itemProp="text"
                  >
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Healthcare Practice?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Get AI-optimized content, semantic SEO, and complete digital transformation
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Schedule Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}