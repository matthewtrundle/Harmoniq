import { Metadata } from 'next'

export const generatePageMetadata = (
  title: string,
  description: string,
  path: string,
  keywords?: string[]
): Metadata => {
  const baseUrl = 'https://harmoniq.ai'
  const url = `${baseUrl}${path}`

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Harmoniq AI',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: url,
    },
  }
}

export const pageMetadata = {
  home: {
    title: 'Harmoniq AI - Healthcare Digital Transformation | Websites, AI Marketing & SEO',
    description: 'Transform your healthcare practice with HIPAA-compliant websites, AI-optimized content (AIO), semantic SEO, and Google Ads management. Built on proven Bloom Psychology platform. 40% patient growth in 90 days.',
    keywords: [
      'healthcare website design',
      'medical practice marketing',
      'HIPAA compliant websites',
      'AI healthcare content',
      'semantic SEO healthcare',
      'patient acquisition'
    ]
  },
  services: {
    title: 'Healthcare Digital Services | Website Design, AI Marketing & SEO',
    description: 'Complete digital growth solutions for healthcare practices: HIPAA-compliant websites, AI-optimized content (AIO), semantic SEO strategy, Google Ads management, and Practice Better/SimplePractice integration. 2-8 week delivery.',
    keywords: [
      'healthcare website design services',
      'medical practice SEO',
      'SimplePractice integration',
      'Practice Better website',
      'healthcare Google Ads',
      'AI medical content',
      'therapy practice website',
      'pediatric practice marketing',
      'HIPAA website development'
    ]
  },
  work: {
    title: 'Our Work - Bloom Psychology Platform | Healthcare Technology Case Study',
    description: 'See how we built Bloom Psychology from the ground up: HIPAA-compliant platform with patient portal, e-learning courses, and practice integrations. The proven foundation powering Harmoniq AI services.',
    keywords: [
      'healthcare website portfolio',
      'Bloom Psychology',
      'medical practice platform',
      'therapy practice website example',
      'HIPAA compliant platform',
      'healthcare case study'
    ]
  },
  integrations: {
    title: 'Healthcare Integrations | SimplePractice, Practice Better, Stripe & EMR',
    description: 'Seamless integrations with SimplePractice, Practice Better, Stripe payments, Google Calendar, Zoom telehealth, and custom EMR systems. Built for modern healthcare practices.',
    keywords: [
      'SimplePractice integration',
      'Practice Better API',
      'healthcare payment processing',
      'EMR integration',
      'telehealth integration',
      'medical practice automation'
    ]
  },
  about: {
    title: 'About Harmoniq AI | Healthcare Technology Specialists',
    description: 'Built on the proven Bloom Psychology platform, Harmoniq AI specializes in healthcare digital transformation. HIPAA-compliant technology, real clinical experience, and measurable results.',
    keywords: [
      'healthcare technology company',
      'medical practice software',
      'Bloom Psychology platform',
      'HIPAA compliant solutions',
      'healthcare digital transformation'
    ]
  },
  contact: {
    title: 'Contact Harmoniq AI | Free Healthcare Practice Assessment',
    description: 'Schedule a free consultation to discuss your practice\'s digital transformation. Get a custom plan for websites, AI marketing, SEO, and practice integration. Response within 24 hours.',
    keywords: [
      'healthcare marketing consultation',
      'medical practice website quote',
      'healthcare SEO consultation',
      'practice transformation assessment'
    ]
  },
  roiCalculator: {
    title: 'ROI Calculator | Healthcare Digital Transformation Returns',
    description: 'Calculate potential ROI from digital transformation: patient acquisition, time savings, and revenue growth. See how investing in websites, AI marketing, and SEO impacts your practice.',
    keywords: [
      'healthcare ROI calculator',
      'medical practice marketing ROI',
      'patient acquisition calculator',
      'practice growth calculator'
    ]
  }
}