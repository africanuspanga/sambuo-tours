"use client"

import { useEffect, useRef, useState } from "react"

const partners = [
  { name: "Tanzania Tourist Board", abbr: "TTB" },
  { name: "Tanzania National Parks", abbr: "TANAPA" },
  { name: "Kilimanjaro National Park", abbr: "KINAPA" },
  { name: "Ngorongoro Conservation", abbr: "NCAA" },
  { name: "Zanzibar Commission", abbr: "ZCT" },
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
    <section ref={sectionRef} className="py-12 md:py-16 bg-brand-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className={`text-center text-sm text-gray-500 uppercase tracking-widest mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Licensed & Approved By
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 bg-brand-chocolate/10 rounded-lg flex items-center justify-center">
                <span className="text-brand-chocolate font-bold text-xs">{partner.abbr}</span>
              </div>
              <span className="text-brand-chocolate/70 font-medium text-sm hidden sm:block">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
