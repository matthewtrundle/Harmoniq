'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import VideoPlaceholder from './VideoPlaceholder'

interface MouseFollowEffectProps {
  videoSrc?: string
  intensity?: number
}

export default function MouseFollowEffect({ videoSrc, intensity = 0.3 }: MouseFollowEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const animationFrame = useRef<number>()
  const [hasVideo, setHasVideo] = useState(false)

  useEffect(() => {
    // Check if video exists
    if (videoSrc) {
      fetch(videoSrc, { method: 'HEAD' })
        .then(res => setHasVideo(res.ok))
        .catch(() => setHasVideo(false))
    }
  }, [videoSrc])

  useEffect(() => {
    const container = containerRef.current
    const video = videoRef.current
    if (!container) return
    if (!hasVideo || !video) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      
      mousePosition.current = { x, y }
      
      // Cancel previous animation frame
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
      
      // Schedule new animation frame
      animationFrame.current = requestAnimationFrame(() => {
        const translateX = (x - 0.5) * 100 * intensity
        const translateY = (y - 0.5) * 100 * intensity
        const scale = 1.1 + (Math.abs(x - 0.5) + Math.abs(y - 0.5)) * 0.1
        
        video.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`
      })
    }

    const handleMouseLeave = () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
      if (video) {
        video.style.transform = 'translate(0, 0) scale(1.1)'
      }
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [intensity, hasVideo])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
    >
      {hasVideo ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-700 ease-out"
            style={{ willChange: 'transform' }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
        </>
      ) : (
        <VideoPlaceholder />
      )}
    </div>
  )
}