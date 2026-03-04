"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const scrollImages = [
  { src: "/images/hero-leopard.jpg", alt: "Leopard" },
  { src: "/images/hero-zebras.jpg", alt: "Zebras" },
  { src: "/images/kilimanjaro-uhuru-peak.jpg", alt: "Kilimanjaro" },
  { src: "/images/serengeti.jpg", alt: "Serengeti" },
  { src: "/images/rhino-ngorongoro.jpg", alt: "Rhino" },
  { src: "/images/kilimanjaro-porters-sunrise.jpg", alt: "Sunrise" },
  { src: "/images/tarangire.jpg", alt: "Elephants" },
  { src: "/images/mt-meru-landscape.jpg", alt: "Mount Meru" },
  { src: "/images/lake-manyara-new.jpg", alt: "Lake Manyara" },
  { src: "/images/lushoto-mountains.jpg", alt: "Usambara" },
]

export function GalleryHighlightSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-brand-ocean overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-brand-gold text-sm font-medium tracking-widest uppercase mb-6">
            Visual Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Moments from the Wild
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Glimpse the incredible wildlife and breathtaking landscapes that await you 
            on your Tanzanian adventure with Sambuo Tours.
          </p>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-chocolate font-semibold rounded-full hover:bg-brand-gold/90 transition-all duration-300 hover:scale-105"
          >
            View Full Gallery
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      {/* Scrolling Images - Row 1 (Left to Right) */}
      <div
        className={`mb-4 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex gap-4 animate-scroll-left">
          {[...scrollImages, ...scrollImages].map((image, index) => (
            <div
              key={`row1-${index}`}
              className="relative h-64 w-96 flex-shrink-0 rounded-2xl overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Images - Row 2 (Right to Left) */}
      <div
        className={`transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex gap-4 animate-scroll-right">
          {[...scrollImages.slice().reverse(), ...scrollImages.slice().reverse()].map((image, index) => (
            <div
              key={`row2-${index}`}
              className="relative h-64 w-96 flex-shrink-0 rounded-2xl overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
