export default function TrustSection() {
  const stats = [
    { value: '500+', label: 'Healthcare Practices Served' },
    { value: '2M+', label: 'Patient Interactions' },
    { value: '99.9%', label: 'Platform Uptime' },
    { value: '40%', label: 'Average Patient Growth' }
  ]

  const certifications = [
    { name: 'HIPAA Compliant', icon: '🔒' },
    { name: 'SOC 2 Type II', icon: '✓' },
    { name: 'HITRUST Certified', icon: '🛡️' },
    { name: '24/7 Support', icon: '🚀' }
  ]

  const testimonials = [
    {
      quote: "HealthTech Forge transformed our practice. We've seen a 45% increase in new patient bookings and our staff saves 10 hours per week on administrative tasks.",
      author: "Dr. Sarah Chen",
      role: "Medical Director, Austin Family Medicine",
      rating: 5
    },
    {
      quote: "The ROI was evident within 60 days. Our no-show rate dropped from 15% to 3%, and patient satisfaction scores are at an all-time high.",
      author: "Jennifer Martinez",
      role: "Practice Administrator, Dallas Multi-Specialty Clinic",
      rating: 5
    },
    {
      quote: "Finally, a technology partner that understands healthcare. The platform is HIPAA-compliant, intuitive, and our patients love the engagement features.",
      author: "Dr. Michael Thompson",
      role: "Lead Psychiatrist, Houston Mental Health Associates",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Enterprise-Grade Security & Compliance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-4xl mb-2">{cert.icon}</div>
                <span className="text-sm font-semibold text-gray-700">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">What Healthcare Leaders Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Logos (Placeholder) */}
        <div className="mt-16 pt-16 border-t">
          <p className="text-center text-gray-600 mb-8">Trusted Integration Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Practice Better</div>
            <div className="text-2xl font-bold text-gray-400">SimplePractice</div>
            <div className="text-2xl font-bold text-gray-400">DrChrono</div>
            <div className="text-2xl font-bold text-gray-400">Stripe Health</div>
            <div className="text-2xl font-bold text-gray-400">Square Health</div>
          </div>
        </div>
      </div>
    </section>
  )
}