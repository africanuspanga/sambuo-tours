"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { ChevronDown, Play, Pause } from "lucide-react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-leopard.jpg"
        >
          <source src="/SAMBUO HERO  VIDEO .mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-chocolate/60 via-brand-chocolate/40 to-brand-chocolate/70" />
      </div>

      {/* Animated decorative elements */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 border border-brand-gold/20 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-20 w-48 h-48 border border-white/10 rounded-full animate-pulse delay-500" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-brand-gold rounded-full animate-ping" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-brand-gold/20 backdrop-blur-sm rounded-full text-brand-gold text-sm font-medium tracking-widest uppercase mb-6 border border-brand-gold/30">
            Welcome to Tanzania
          </span>
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white mb-6 text-balance leading-tight transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Where Adventure Meets
          <span className="block text-brand-gold mt-2">The African Wild</span>
        </h1>

        <p
          className={`text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto text-pretty font-light leading-relaxed transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Journey through Tanzania&apos;s untamed wilderness with Sambuo—where every sunrise brings new wonders and every moment becomes a lifelong memory
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="bg-brand-gold hover:bg-brand-gold/90 text-brand-chocolate shadow-2xl hover:shadow-brand-gold/25 transition-all duration-300 hover:scale-105 rounded-full px-8 py-6 text-lg font-semibold btn-shine"
          >
            <Link href="/our-itineraries">Explore Safaris</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-white text-brand-chocolate hover:bg-white/90 shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105 rounded-full px-8 py-6 text-lg font-semibold"
          >
            <Link href="/contact">Plan Your Trip</Link>
          </Button>
        </div>
      </div>

      {/* Video Control */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-24 right-6 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-white/70 text-xs tracking-widest uppercase">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <ChevronDown size={16} className="text-white/70 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
