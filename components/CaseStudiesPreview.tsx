import Link from 'next/link'

const caseStudies = [
  {
    title: 'Mental Health Practice Doubles Patient Engagement',
    practice: 'Bloom Psychology',
    challenge: 'Low patient adherence to treatment plans and missed appointments',
    solution: 'Integrated patient education portal with automated engagement workflows',
    results: {
      engagement: '+85%',
      noShows: '-60%',
      satisfaction: '98%'
    },
    image: '/images/case-study-mental-health.jpg',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Multi-Location Clinic Streamlines Operations',
    practice: 'Texas Family Health Centers',
    challenge: 'Inconsistent processes and data silos across 5 locations',
    solution: 'Centralized management platform with unified patient database',
    results: {
      efficiency: '+50%',
      revenue: '+30%',
      time: '-40%'
    },
    image: '/images/case-study-multi-location.jpg',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Pediatric Practice Transforms Parent Communication',
    practice: 'Austin Kids Care',
    challenge: 'Frequent missed appointments and poor parent engagement',
    solution: 'Automated reminders and educational content delivery system',
    results: {
      noShows: '-70%',
      reviews: '4.9★',
      growth: '+45%'
    },
    image: '/images/case-study-pediatric.jpg',
    color: 'from-green-500 to-teal-500'
  }
]

export default function CaseStudiesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            Success Stories from
            <span className="block text-gradient">Real Healthcare Practices</span>
          </h2>
          <p className="text-xl text-gray-600">
            See how we&apos;ve helped practices like yours achieve measurable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${study.color} p-6 text-white`}>
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-white/90 text-sm">{study.practice}</p>
              </div>

              <div className="p-6 space-y-4">
                {/* Challenge */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Challenge</h4>
                  <p className="text-gray-700">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Solution</h4>
                  <p className="text-gray-700">{study.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Results</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-gray-50 rounded">
                        <div className="text-lg font-bold text-primary-600">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/case-studies/${study.practice.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold pt-4"
                >
                  Read Full Case Study
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/case-studies" className="btn-primary">
            View All Case Studies
            <svg className="ml-2 w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}