'use client'

import { useState, useEffect } from 'react'
import HeroArtistic from '@/components/HeroArtistic'
import ServicesMinimal from '@/components/ServicesMinimal'
import StatsSection from '@/components/StatsSection'
import IntegrationShowcase from '@/components/IntegrationShowcase'
import PortfolioGallery from '@/components/PortfolioGallery'
import NavigationMinimal from '@/components/NavigationMinimal'
import FooterMinimal from '@/components/FooterMinimal'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <NavigationMinimal isScrolled={isScrolled} />
      <main className="bg-black">
        <HeroArtistic />
        <StatsSection />
        <ServicesMinimal />
        <IntegrationShowcase />
        <PortfolioGallery />
        <FooterMinimal />
      </main>
    </>
  )
}