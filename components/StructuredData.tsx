import React from 'react'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://harmoniq.ai/#organization",
    "name": "Harmoniq AI",
    "alternateName": "Harmoniq",
    "url": "https://harmoniq.ai",
    "logo": {
      "@type": "ImageObject",
      "url": "https://harmoniq.ai/logo.png",
      "width": "250",
      "height": "60"
    },
    "description": "Healthcare digital transformation specialists providing HIPAA-compliant websites, AI-optimized content, semantic SEO, and Google Ads management for medical practices.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "url": "https://harmoniq.ai/contact"
    },
    "sameAs": [
      "https://www.linkedin.com/company/harmoniq-ai",
      "https://twitter.com/harmoniqai"
    ],
    "foundingDate": "2024",
    "slogan": "Practice Transformation Specialists"
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://harmoniq.ai/#website",
    "url": "https://harmoniq.ai",
    "name": "Harmoniq AI",
    "description": "Healthcare Digital Transformation Platform",
    "publisher": {
      "@id": "https://harmoniq.ai/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://harmoniq.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Healthcare Website Design and Digital Marketing",
    "provider": {
      "@id": "https://harmoniq.ai/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Healthcare Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HIPAA-Compliant Website Design",
            "description": "Custom healthcare website design with patient portals and practice integrations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Optimized Content (AIO)",
            "description": "AI-enhanced medical content creation optimized for search engines and AI assistants"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Semantic SEO Strategy",
            "description": "Entity-based optimization and medical knowledge graph building for healthcare practices"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads Management",
            "description": "Healthcare-compliant advertising campaigns for patient acquisition"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Practice Management Integration",
            "description": "SimplePractice, Practice Better, and EMR system integration"
          }
        }
      ]
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://harmoniq.ai"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://harmoniq.ai/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Our Work",
        "item": "https://harmoniq.ai/work"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Integrations",
        "item": "https://harmoniq.ai/integrations"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI-Optimized Content (AIO) for healthcare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI-Optimized Content (AIO) is medical content specifically created and enhanced to rank well in AI-powered search engines like ChatGPT, Google's AI Overview, and other AI assistants. It combines traditional SEO with Answer Engine Optimization (AEO) to ensure your practice appears when patients ask AI assistants health-related questions."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from healthcare SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our clients typically see measurable improvements within 90 days, with a 40% average increase in patient acquisition. Initial ranking improvements often appear within 4-6 weeks for local healthcare searches."
        }
      },
      {
        "@type": "Question",
        "name": "Are your websites HIPAA compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our websites are built with HIPAA compliance from the ground up. We use encrypted patient portals, secure data transmission, and sign Business Associate Agreements (BAA) with all healthcare clients."
        }
      },
      {
        "@type": "Question",
        "name": "Do you integrate with SimplePractice and Practice Better?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in integrating with SimplePractice, Practice Better, and other popular practice management systems. We can also connect with Stripe for payments, Google Calendar, Zoom, and custom EMR systems."
        }
      },
      {
        "@type": "Question",
        "name": "What makes semantic SEO different from traditional SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Semantic SEO focuses on topic authority and entity relationships rather than just keywords. It helps search engines understand your medical expertise through knowledge graph building, schema markup, and topical clusters, resulting in better rankings for healthcare-related searches."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}