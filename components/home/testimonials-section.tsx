"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Marcus Odhiambo",
    location: "United States",
    rating: 5,
    text: "KiliSafari made our dream safari come true! The guides were knowledgeable, the accommodations were perfect, and we saw all the Big Five. An unforgettable experience!",
  },
  {
    name: "Priya Kapoor",
    location: "United Kingdom",
    rating: 5,
    text: "Climbing Kilimanjaro with KiliSafari was the adventure of a lifetime. The team's professionalism and support made all the difference. Highly recommended!",
  },
  {
    name: "Lars Bergström",
    location: "Germany",
    rating: 5,
    text: "From the Serengeti to Zanzibar, every moment was magical. The attention to detail and personalized service exceeded our expectations. Thank you KiliSafari!",
  },
  {
    name: "Yuki Tanaka",
    location: "Australia",
    rating: 5,
    text: "Best tour operator in Tanzania! They handled everything seamlessly from airport pickup to our final day. The cultural tours were particularly enlightening.",
  },
  {
    name: "Isabella Romano",
    location: "France",
    rating: 5,
    text: "The Ngorongoro Crater tour was breathtaking. Our guide's passion for wildlife and conservation was inspiring. KiliSafari truly cares about their clients and the environment.",
  },
  {
    name: "Henrik Johansson",
    location: "Canada",
    rating: 5,
    text: "Exceptional service from start to finish. The itinerary was perfectly paced, and the team went above and beyond to ensure we had an amazing experience. Will definitely return!",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      const newScrollLeft =
        direction === "left" ? scrollRef.current.scrollLeft - scrollAmount : scrollRef.current.scrollLeft + scrollAmount

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-dark mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from adventurers who explored Tanzania with us
          </p>
        </div>

        <div className="relative">
          {/* Left Navigation Button */}
          {canScrollLeft && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}

          {/* Testimonials Carousel */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 md:w-96 bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow snap-start"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-orange text-brand-orange" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{testimonial.text}"</p>

                {/* Customer Info */}
                <div>
                  <p className="font-bold text-brand-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation Button */}
          {canScrollRight && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
