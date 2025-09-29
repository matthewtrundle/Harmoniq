'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ArtisticBackgroundProps {
  prompt: string
  className?: string
  overlay?: boolean
}

export default function ArtisticBackground({ prompt, className = '', overlay = true }: ArtisticBackgroundProps) {
  const [imagePrompt, setImagePrompt] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const generateImagePrompt = async () => {
      try {
        const response = await fetch('/api/generate-image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt, style: 'artistic' })
        })

        const data = await response.json()
        if (data.success && data.prompt) {
          setImagePrompt(data.prompt)
        }
      } catch (error) {
        console.error('Error generating image:', error)
      } finally {
        setIsLoading(false)
      }
    }

    generateImagePrompt()
  }, [prompt])

  // Use index 0 to avoid hydration mismatch
  const artisticGradients = [
    'radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(0, 255, 136, 0.3) 0%, transparent 50%)',
    'conic-gradient(from 180deg at 50% 50%, #00d4ff 0deg, #ff00ff 120deg, #00ff88 240deg, #00d4ff 360deg)',
    'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(255, 0, 255, 0.2) 25%, rgba(0, 255, 136, 0.2) 50%, rgba(255, 0, 255, 0.2) 75%, rgba(0, 212, 255, 0.2) 100%)'
  ]

  // Use stable gradient index to avoid hydration issues
  const gradientIndex = prompt.length % artisticGradients.length
  const selectedGradient = artisticGradients[gradientIndex]

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
        style={{
          backgroundImage: selectedGradient,
          backgroundSize: '200% 200%',
          filter: 'blur(60px)',
        }}
      />

      {/* Organic shapes */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"
        animate={{
          borderRadius: [
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '30% 60% 70% 40% / 50% 60% 30% 60%',
            '60% 40% 30% 70% / 60% 30% 70% 40%'
          ],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{ filter: 'blur(40px)' }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-pink-500/20 to-green-500/20"
        animate={{
          borderRadius: [
            '30% 70% 70% 30% / 30% 30% 70% 70%',
            '70% 30% 30% 70% / 70% 70% 30% 30%',
            '30% 70% 70% 30% / 30% 30% 70% 70%'
          ],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{ filter: 'blur(50px)' }}
      />

      {/* Overlay for readability */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      )}

      {/* Display generated prompt (for development) */}
      {!isLoading && imagePrompt && (
        <div className="absolute bottom-4 left-4 right-4 p-2 bg-black/80 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
          <p className="text-xs text-gray-400 font-mono">
            Generated Prompt: {imagePrompt.slice(0, 150)}...
          </p>
        </div>
      )}
    </div>
  )
}