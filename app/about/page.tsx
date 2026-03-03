import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { company, whyChooseUs } from "@/lib/sambuo-data"
import Link from "next/link"
import Image from "next/image"
import { Shield, Users, Clock, Award, Camera, Mountain, Umbrella, Globe, Car, Compass } from "lucide-react"

export const metadata = {
  title: `About Us - ${company.name} | Expert Tanzania Tour Operators`,
  description:
    `Meet ${company.name} - Tanzania's trusted tour operator with ${company.yearsExperience}+ years of experience in safaris, Kilimanjaro treks, and beach holidays. Local expertise, 24/7 support.`,
}

const services = [
  {
    icon: Camera,
    title: "Safari Tours",
    description: "Wildlife safaris across Tanzania's national parks with expert guides",
  },
  {
    icon: Mountain,
    title: "Mountain Trekking",
    description: "Guided climbs of Kilimanjaro, Meru, and Udzungwa peaks",
  },
  {
    icon: Umbrella,
    title: "Beach Holidays",
    description: "Relaxing getaways in Zanzibar's pristine beaches",
  },
  {
    icon: Globe,
    title: "Cultural Tours",
    description: "Authentic cultural experiences with local communities",
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Airport transfers and comfortable inter-city transport",
  },
  {
    icon: Compass,
    title: "Custom Itineraries",
    description: "Personalized journeys tailored to your preferences",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-brand-chocolate">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/NEW SAMBUO IMAGES/About 1.jpg')] bg-cover bg-center" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-chocolate/80 to-brand-chocolate" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full text-brand-gold text-sm font-medium tracking-widest uppercase mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              The Sambuo Story
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Your trusted partner for unforgettable Tanzania adventures
            </p>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <div className="relative">
                <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/NEW SAMBUO IMAGES/About 1.jpg"
                    alt="Sambuo Tours safari adventure"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold/10 rounded-3xl -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-brand-gold/30 rounded-3xl -z-10" />
              </div>

              {/* Content */}
              <div>
                <span className="inline-block px-4 py-2 bg-brand-ocean/10 rounded-full text-brand-ocean text-sm font-medium tracking-widest uppercase mb-6">
                  Our Heritage
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-6">
                  Rooted in Tanzania, <span className="text-brand-ocean">Built on Passion</span>
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Founded in the heart of Tanga Region, {company.name} has grown from a small local 
                    operation to one of Tanzania&apos;s most respected tour companies. With over {company.yearsExperience} years 
                    of experience, we&apos;ve dedicated ourselves to sharing the incredible beauty and 
                    diversity of our homeland with travelers from around the world.
                  </p>
                  <p>
                    Our name, &ldquo;Sambuo,&rdquo; reflects our deep connection to the land and our commitment 
                    to authentic Tanzanian hospitality. We believe that the best adventures come from 
                    genuine local knowledge, sustainable practices, and a true love for what we do.
                  </p>
                  <p>
                    Every journey we craft is infused with our passion for Tanzania&apos;s wildlife, 
                    landscapes, and cultures. We don&apos;t just show you Tanzania—we invite you to 
                    experience it as we do, with wonder, respect, and joy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-brand-chocolate text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: company.yearsExperience + "+", label: "Years Experience" },
                { value: company.travelersServed, label: "Happy Travelers" },
                { value: company.destinations + "+", label: "Destinations" },
                { value: "100%", label: "Local Expertise" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-serif font-bold text-brand-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-brand-gold/10 rounded-full text-brand-gold text-sm font-medium tracking-widest uppercase mb-4">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive tour services designed to create your perfect Tanzanian adventure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="group bg-brand-cream rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
                      <Icon size={28} className="text-brand-gold group-hover:text-brand-chocolate" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-brand-chocolate mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-brand-ocean/10 rounded-full text-brand-ocean text-sm font-medium tracking-widest uppercase mb-4">
                Why Sambuo
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-4">
                The Sambuo Difference
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                What sets us apart as Tanzania&apos;s premier locally-owned tour operator
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Safety First",
                  description:
                    "Your safety is our top priority. We maintain the highest safety standards with experienced guides, well-maintained equipment, and comprehensive support throughout your journey.",
                },
                {
                  icon: Users,
                  title: "Local Expertise",
                  description:
                    "Born and raised in Tanzania, our team has intimate knowledge of the land, wildlife, and culture. We know the hidden gems and best spots that only locals can show you.",
                },
                {
                  icon: Clock,
                  title: "24/7 Support",
                  description:
                    "Round-the-clock assistance throughout your journey. Our support team is always available to ensure your adventure goes smoothly, no matter the time or situation.",
                },
                {
                  icon: Award,
                  title: "Excellence & Reliability",
                  description:
                    "Recognized for excellence in service and sustainable tourism practices. We're committed to delivering exceptional experiences while protecting Tanzania's natural heritage.",
                },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="flex gap-6 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={28} className="text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-brand-chocolate mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team/Values Image Section */}
        <section className="py-16 md:py-24 bg-brand-chocolate text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full text-brand-gold text-sm font-medium tracking-widest uppercase mb-6">
                  Our Commitment
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Sustainable Tourism for Future Generations
                </h2>
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    At Sambuo Tours, we believe that responsible tourism is the key to preserving 
                    Tanzania&apos;s incredible natural heritage. We work closely with local communities, 
                    support conservation initiatives, and minimize our environmental footprint 
                    on every journey.
                  </p>
                  <p>
                    Our commitment extends beyond providing exceptional experiences—we strive to 
                    create positive impact for the people and wildlife of Tanzania. By choosing 
                    Sambuo, you become part of this mission.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  {["Community Support", "Wildlife Conservation", "Eco-Friendly Practices", "Local Employment"].map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative h-[400px] md:h-[450px] rounded-3xl overflow-hidden">
                  <Image
                    src="/NEW SAMBUO IMAGES/Aboout 2.jpg"
                    alt="Sambuo Tours team"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative */}
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-gold/20 rounded-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-brand-gold">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-lg text-brand-chocolate/80 mb-8 max-w-2xl mx-auto">
              Let our experienced team create the perfect Tanzania experience for you. 
              Your journey into the wild heart of Africa begins here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-chocolate text-white font-semibold rounded-full hover:bg-brand-chocolate/90 transition-all duration-300 hover:scale-105"
              >
                Contact Us Today
              </Link>
              <Link
                href="/our-itineraries"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-chocolate font-semibold rounded-full hover:bg-white/90 transition-all duration-300"
              >
                View Our Safaris
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
