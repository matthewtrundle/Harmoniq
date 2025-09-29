import Link from 'next/link'

export default function ROICalculatorCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6">
            Calculate Your Practice&apos;s ROI
          </h2>
          <p className="text-xl mb-8 text-white/90">
            See exactly how much time and money you could save with our healthcare technology solutions.
            Get a personalized ROI report in less than 5 minutes.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold mb-2">$125K</div>
                <div className="text-white/80">Average Annual Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15 Hours</div>
                <div className="text-white/80">Weekly Time Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">90 Days</div>
                <div className="text-white/80">Time to Positive ROI</div>
              </div>
            </div>

            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Personalized calculations based on your practice size and specialty</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Compare costs with your current technology spending</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Get a detailed breakdown of savings and efficiency gains</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/roi-calculator"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg"
            >
              Calculate Your ROI Now
              <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </Link>
            <Link
              href="/resources/roi-whitepaper"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-primary-600 transition-colors text-lg"
            >
              Download ROI Guide
              <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}