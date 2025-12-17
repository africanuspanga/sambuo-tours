import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Shield, Users, Clock, Award, Camera, Mountain, Umbrella, Globe, Car, Hotel } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Us - KiliSafari Organizing | Expert Tanzania Tour Operators",
  description:
    "Meet KiliSafari Organizing - Tanzania's trusted tour operator with 10+ years of experience in safaris, Kilimanjaro treks, and beach holidays. Local expertise, 24/7 support.",
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
    description: "Guided climbs of Kilimanjaro, Meru, and more",
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
    description: "Airport transfers and inter-city transport",
  },
  {
    icon: Hotel,
    title: "Accommodation",
    description: "Hotel bookings and lodge arrangements",
  },
]

const whyChooseUs = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Your safety is our top priority. We maintain the highest safety standards with experienced guides, well-maintained equipment, and comprehensive insurance coverage for all our tours.",
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
    title: "Reliability & Excellence",
    description:
      "Recognized for excellence in service and sustainable tourism practices. We're committed to delivering exceptional experiences while protecting Tanzania's natural heritage.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center bg-gradient-to-r from-brand-dark to-brand-green">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">About KiliSafari Organizing</h1>
            <p className="text-lg md:text-xl text-white/90">
              Your trusted partner for unforgettable Tanzania adventures
            </p>
          </div>
        </section>

        {/* Company Story Section with First Image */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12">
              <Image
                src="/images/about-1.jpg"
                alt="Safari vehicle adventure"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-8 text-center">
                Experience, Passion, and Local Knowledge
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  KiliSafari Organizing is an experienced tour operator in Tanzania with over 10 years of expertise in
                  creating unforgettable African adventures. We are passionate about sharing the incredible beauty and
                  diversity of Tanzania with travelers from around the world.
                </p>
                <p>
                  We ensure safety, reliability, and 24-hour support for all our clients. From the moment you arrive in
                  Tanzania until your departure, our dedicated team is committed to making your journey seamless and
                  memorable. Your peace of mind is our priority.
                </p>
                <p>
                  We offer comprehensive services including expert guides, comfortable transportation, airport pickups,
                  hotel transfers, and much more. Our all-inclusive approach means you can focus on enjoying your
                  adventure while we handle all the logistics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Middle Section with Second Image */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image src="/images/about-2.jpg" alt="Wildlife viewing experience" fill className="object-cover" />
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Our team consists of expert guides who are passionate about sharing Tanzania's wonders. Each guide
                  brings years of experience, deep knowledge of wildlife and ecosystems, and a genuine love for what
                  they do. They don't just show you Tanzania—they bring it to life.
                </p>
                <p>
                  We are committed to sustainable tourism and supporting local communities. We believe in responsible
                  travel that benefits both our guests and the people and wildlife of Tanzania. Through partnerships
                  with local communities and conservation initiatives, we ensure that tourism creates positive impact.
                </p>
                <p>
                  We provide personalized itineraries tailored to each client's preferences and budget. Whether you're
                  seeking an adrenaline-filled adventure, a relaxing beach escape, or a cultural immersion, we craft
                  experiences that match your dreams and exceed your expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive tour services for every type of adventure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center mb-4">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">Why Choose KiliSafari</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                What sets us apart as Tanzania's premier tour operator
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-brand-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Start Your Adventure?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let our experienced team create the perfect Tanzania experience for you
            </p>
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
