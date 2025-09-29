'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CyclingBackgroundProps {
  images: string[]
  interval?: number
  className?: string
  overlay?: boolean
}

export default function CyclingBackground({
  images,
  interval = 5000,
  className = '',
  overlay = true
}: CyclingBackgroundProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}  // Slowed down transition
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex]}
            alt={`Background ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Optional overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/50" />
      )}

      {/* Cycling indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 right-6 flex gap-2">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gray-900 w-6'
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      )}
    </div>
  )
}