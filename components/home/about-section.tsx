import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-dark mb-6 text-balance">
              Your Gateway to Tanzania's Wonders
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                KiliSafari Organizing is a premier Tanzanian tour company dedicated to providing unforgettable
                experiences across Tanzania's most spectacular destinations. With over 10 years of expertise, we
                specialize in creating authentic safari adventures, mountain trekking expeditions, and cultural
                journeys.
              </p>
              <p>
                Our team of experienced guides and tour operators ensures your safety, comfort, and satisfaction
                throughout your journey. From the endless plains of the Serengeti to the summit of Mount Kilimanjaro, we
                bring Tanzania's natural wonders to life.
              </p>
              <p>
                We provide comprehensive services including expert guides, comfortable transportation, airport pickups,
                hotel transfers, and personalized itineraries tailored to your preferences and budget. Your adventure,
                your way.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-brand-orange mb-2">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-brand-orange mb-2">1000+</div>
                <div className="text-sm text-gray-600">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-brand-orange mb-2">20+</div>
                <div className="text-sm text-gray-600">Destinations</div>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/about-homepage.jpg"
              alt="Safari experience with KiliSafari"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
