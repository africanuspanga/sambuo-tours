"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const partners = [
  { name: "TripAdvisor", logo: "/RECCOMENDED BY/tripadvisor.webp" },
  { name: "Google Reviews", logo: "/RECCOMENDED BY/google-reviews.png" },
  { name: "Trustpilot", logo: "/RECCOMENDED BY/trustpilot.png" },
  { name: "SafariGo", logo: "/RECCOMENDED BY/safarigo.png" },
  { name: "Get Your Guide", logo: "/RECCOMENDED BY/get-your-guide.png" },
  { name: "Tanzania Tourist Board", logo: "/RECCOMENDED BY/tanzania-tourist-board.jpg" },
  { name: "APTA", logo: "/RECCOMENDED BY/apta.jpg" },
]

export function RecommendedBySection() {
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
    <section ref={sectionRef} className="py-12 md:py-16 bg-brand-sand/50 border-t border-brand-chocolate/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className={`text-center text-sm text-gray-500 uppercase tracking-widest mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Recommended By
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`relative h-12 w-24 md:h-14 md:w-28 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
