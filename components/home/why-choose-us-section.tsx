"use client"

import { useEffect, useRef, useState } from "react"
import { Compass, Shield, Leaf, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Compass,
    title: "Expert Local Guides",
    description: "Our certified guides have deep knowledge of Tanzania's wildlife, ecosystems, and hidden gems.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Comprehensive safety protocols, quality equipment, and 24/7 support throughout your journey.",
  },
  {
    icon: Leaf,
    title: "Sustainable Travel",
    description: "Committed to responsible tourism that protects wildlife and supports local communities.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    description: "Tailored itineraries designed around your interests, pace, and travel style.",
  },
]

export function WhyChooseUsSection() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-white border-y border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-gold/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
                <feature.icon size={28} className="text-brand-gold group-hover:text-brand-chocolate transition-colors" />
              </div>
              <h3 className="font-serif font-bold text-brand-chocolate mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
