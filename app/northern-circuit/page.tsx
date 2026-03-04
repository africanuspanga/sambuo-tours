import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { company } from "@/lib/sambuo-data"
import Link from "next/link"
import Image from "next/image"
import { Check, Compass } from "lucide-react"

const destinations = [
  {
    title: "Mkomazi National Park",
    image: "/Mkomazi NP.webp",
    description:
      "Mkomazi National Park is a magnificent wilderness area located in northeastern Tanzania, at the foothills of the Pare and Usambara mountains. This 3,700 square kilometer park forms a vital part of the greater Tsavo ecosystem, sharing a border with Kenya's Tsavo West National Park. Mkomazi is renowned for its successful rhino and African wild dog conservation programs, offering visitors a chance to see these endangered species in their natural habitat.",
    highlights: [
      "Endangered black rhino sanctuary",
      "African wild dog conservation program",
      "Stunning views of Mount Kilimanjaro",
      "Unique dry-country wildlife species",
    ],
  },
  {
    title: "Serengeti National Park",
    image: "/images/serengeti.jpg",
    description:
      "Home to the spectacular Great Migration where millions of wildebeest traverse endless plains. The Serengeti hosts incredible wildlife diversity including all Big Five animals. Experience the most iconic African wilderness with vast savannas stretching to the horizon.",
    highlights: [
      "Witness the Great Migration",
      "Endless plains teeming with wildlife",
      "Big Five encounters",
      "World-class predator viewing",
    ],
  },
  {
    title: "Ngorongoro Crater",
    image: "/ngoro ngro crater.jpg",
    description:
      "The world's largest inactive volcanic caldera supporting 25,000 large animals year-round. This UNESCO World Heritage Site offers virtually guaranteed wildlife sightings in a unique ecosystem. Often called 'Africa's Eden' for its incredible concentration of wildlife.",
    highlights: [
      "Africa's highest wildlife density",
      "Unique crater ecosystem",
      "Black rhino sanctuary",
      "UNESCO World Heritage Site",
    ],
  },
  {
    title: "Lake Manyara National Park",
    image: "/images/lake-manyara-new.jpg",
    description:
      "Renowned for unique tree-climbing lions and massive flocks of pink flamingos. Lake Manyara offers incredible diversity with groundwater forests, acacia woodlands, and the alkaline lake itself—a photographer's paradise with stunning landscapes.",
    highlights: [
      "Tree-climbing lions",
      "Pink flamingo spectacles",
      "Diverse ecosystems",
      "Excellent bird watching",
    ],
  },
  {
    title: "Tarangire National Park",
    image: "/images/tarangire.jpg",
    description:
      "Famous for massive elephant herds and iconic baobab trees dotting the landscape. During the dry season, Tarangire attracts enormous wildlife concentrations along the Tarangire River, offering a more intimate safari experience.",
    highlights: [
      "Large elephant herds",
      "Ancient baobab trees",
      "Seasonal wildlife concentrations",
      "Less crowded than Serengeti",
    ],
  },
  {
    title: "Arusha National Park",
    image: "/images/arusha-national-park.jpg",
    description:
      "Small but diverse park dominated by majestic Mount Meru. Arusha National Park offers unique walking safaris and canoeing adventures on Momella Lakes, with varied landscapes including montane forests and crater lakes.",
    highlights: [
      "Walking safaris permitted",
      "Canoeing on Momella Lakes",
      "Mount Meru trekking gateway",
      "Close to Arusha city",
    ],
  },
]

export const metadata = {
  title: `Northern Circuit Safaris - Serengeti & Ngorongoro | ${company.name}`,
  description:
    "Explore Tanzania's Northern Circuit including Serengeti National Park, Ngorongoro Crater, Lake Manyara, Tarangire, and Arusha. Witness the Great Migration and Big Five wildlife.",
}

export default function NorthernCircuitPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-brand-chocolate">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/serengeti.jpg')] bg-cover bg-center" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-chocolate/80 to-brand-chocolate" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full text-brand-gold text-sm font-medium tracking-widest uppercase mb-6">
              Safari Destinations
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Northern Circuit Safaris
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Discover Tanzania&apos;s most iconic wildlife destinations—where the Great Migration 
              unfolds and the Big Five roam free.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-6">
              The Crown Jewel of African Safaris
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Northern Circuit is Tanzania&apos;s most celebrated wildlife destination, home to 
              the world-famous Serengeti and Ngorongoro Crater. This region offers unparalleled 
              game viewing opportunities with the highest concentration of wildlife in Africa.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From the Great Migration to guaranteed Big Five sightings, the Northern Circuit 
              delivers the ultimate safari experience. These parks represent the pinnacle of 
              African wildlife destinations.
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {destinations.map((destination, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}>
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-chocolate/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-2 text-brand-ocean text-sm font-medium mb-3">
                      <Compass size={16} />
                      <span className="uppercase tracking-wider">Northern Circuit</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-4">
                      {destination.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {destination.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3 mb-8">
                      {destination.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-brand-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={14} className="text-brand-gold" />
                          </div>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/our-itineraries"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-brand-chocolate font-semibold rounded-full hover:bg-brand-gold/90 transition-all duration-300"
                    >
                      View Safari Packages
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-brand-chocolate text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready for Your Northern Circuit Adventure?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Experience the best wildlife viewing in Africa with our expert local guides 
              and carefully crafted itineraries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/our-itineraries"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-brand-chocolate font-semibold rounded-full hover:bg-brand-gold/90 transition-all duration-300 hover:scale-105"
              >
                View Packages
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
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
