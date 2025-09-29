import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="heading-2 text-gray-900 mb-4">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join 500+ healthcare practices that have modernized their operations and improved patient care with our technology.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-semibold mb-2">Free Consultation</h3>
                <p className="text-sm text-gray-600">30-minute strategy session with our healthcare technology experts</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-semibold mb-2">Custom Assessment</h3>
                <p className="text-sm text-gray-600">Detailed analysis of your practice&apos;s technology needs</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-semibold mb-2">ROI Projection</h3>
                <p className="text-sm text-gray-600">Personalized savings and growth calculations</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Schedule Free Consultation
                <svg className="ml-2 w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
              <a href="tel:1-800-HEALTH-TECH" className="btn-secondary text-lg px-8 py-4">
                <svg className="mr-2 w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 1-800-HEALTH-TECH
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              No commitment required • Free assessment • Results in 48 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}