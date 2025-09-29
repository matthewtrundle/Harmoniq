import Link from 'next/link'

const services = [
  {
    tier: 1,
    title: 'Digital Practice Foundation',
    price: '$15K-$50K',
    description: 'Transform your online presence with a HIPAA-compliant website and patient portal.',
    features: [
      'Modern, mobile-responsive website',
      'Patient portal integration',
      'Online appointment booking',
      'Basic EMR integration'
    ],
    ideal: 'Small practices starting their digital journey',
    color: 'from-blue-500 to-blue-600'
  },
  {
    tier: 2,
    title: 'Patient Engagement Platform',
    price: '$25K-$75K',
    description: 'Build lasting relationships through automated education and communication.',
    features: [
      'Custom patient education portal',
      'Automated engagement workflows',
      'Two-way secure messaging',
      'Treatment compliance tracking'
    ],
    ideal: 'Practices wanting better patient relationships',
    color: 'from-purple-500 to-purple-600'
  },
  {
    tier: 3,
    title: 'Practice Analytics & Intelligence',
    price: '$35K-$100K',
    description: 'Transform data into actionable insights for growth and efficiency.',
    features: [
      'Business intelligence dashboard',
      'Predictive analytics engine',
      'Revenue cycle optimization',
      'Automated reporting'
    ],
    ideal: 'Data-driven practices seeking insights',
    color: 'from-green-500 to-green-600'
  },
  {
    tier: 4,
    title: 'Multi-Location Infrastructure',
    price: '$50K-$150K',
    description: 'Unified digital ecosystem for growing healthcare organizations.',
    features: [
      'Centralized management platform',
      'Cross-location scheduling',
      'Enterprise communication',
      'Scalable infrastructure'
    ],
    ideal: 'Multi-location practices needing unity',
    color: 'from-orange-500 to-orange-600'
  },
  {
    tier: 5,
    title: 'Specialty Practice Accelerator',
    price: '$75K-$200K',
    description: 'Custom AI-powered solutions for market leadership.',
    features: [
      'Specialty-specific platform',
      'AI-powered features',
      'Advanced automation',
      'Innovation lab access'
    ],
    ideal: 'Specialty practices wanting market leadership',
    color: 'from-red-500 to-pink-600'
  }
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            Healthcare Technology Solutions
            <span className="block text-gradient">Tailored to Your Practice</span>
          </h2>
          <p className="text-xl text-gray-600">
            From foundation to transformation, we offer comprehensive solutions that grow with your practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.tier}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-500">TIER {service.tier}</span>
                  <span className="text-lg font-bold text-primary-600">{service.price}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-500 italic">
                    Ideal for: {service.ideal}
                  </p>
                </div>

                <Link
                  href={`/services/tier-${service.tier}`}
                  className="block text-center py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-primary-600 hover:text-white transition-colors group-hover:bg-primary-600 group-hover:text-white"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}

          {/* Custom Solution Card */}
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl shadow-lg text-white p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
            <p className="mb-6">
              Every practice is unique. Let&apos;s discuss your specific needs and create a tailored solution.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}