import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { company } from "@/lib/sambuo-data"
import Link from "next/link"
import Image from "next/image"
import { Check, Compass, Anchor, Trees } from "lucide-react"

const destinations = [
  {
    title: "Selous Game Reserve (Nyerere NP)",
    image: "/images/tour-crocodile.jpg",
    description:
      "Africa's largest stand-alone national park and one of the largest in the world. Selous offers diverse activities including boat safaris on the Rufiji River, walking safaris, and classic game drives. It's home to massive elephant herds, hippos, crocodiles, and wild dogs.",
    highlights: [
      "Boat safaris on Rufiji River",
      "Guided walking safaris",
      "Huge elephant populations",
      "African wild dog packs",
    ],
  },
  {
    title: "Ruaha National Park",
    image: "/images/tour-ruaha-buffalo.jpg",
    description:
      "Tanzania's second-largest national park and one of Africa's best-kept secrets. Ruaha boasts incredible predator concentrations, including large lion prides and endangered wild dogs. The Great Ruaha River attracts diverse wildlife, especially during the dry season.",
    highlights: [
      "Large lion prides",
      "Endangered wild dogs",
      "Greater kudu & sable antelope",
      "Dramatic baobab landscapes",
    ],
  },
  {
    title: "Mikumi National Park",
    image: "/images/tour-baobab.jpg",
    description:
      "The most accessible Southern Circuit park, Mikumi offers excellent wildlife viewing along the Mkata Floodplain. Often called 'Little Serengeti,' it features similar wildlife concentrations including elephants, zebras, giraffes, and lions, all within easy reach of Dar es Salaam.",
    highlights: [
      "Mkata Floodplain game viewing",
      "Easy access from Dar es Salaam",
      "Big Five opportunities",
      "African wild dog sightings",
    ],
  },
  {
    title: "Saadani National Park",
    image: "/images/tour-saadani-beach.jpg",
    description:
      "Tanzania's only coastal wildlife sanctuary where the bush meets the beach. Saadani offers a unique combination of game viewing and Indian Ocean relaxation. Spot wildlife on the beach, take boat safaris on the Wami River, and enjoy pristine coastal scenery.",
    highlights: [
      "Beach & bush combination",
      "Wami River boat safaris",
      "Swimming with dolphins nearby",
      "Historical Saadani village",
    ],
  },
  {
    title: "Udzungwa Mountains NP",
    image: "/images/udzungwa-waterfall.jpg",
    description:
      "Known as the 'Galapagos of Africa' for its rich biodiversity, Udzungwa is a hiker's paradise with no roads—only trails. Discover endemic primates, colorful butterflies, and stunning waterfalls including the 170m Sanje Falls with panoramic views.",
    highlights: [
      "Hiking & trekking paradise",
      "Endemic primates",
      "Spectacular waterfalls",
      "Biodiversity hotspot",
    ],
  },
]

export const metadata = {
  title: `Southern Circuit Safaris - Selous & Ruaha | ${company.name}`,
  description:
    "Explore Tanzania's hidden Southern Circuit including Selous Game Reserve, Ruaha National Park, Mikumi, and Saadani. Experience untouched wilderness with fewer crowds.",
}

export default function SouthernCircuitPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-brand-ocean">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/tour-elephants.jpg')] bg-cover bg-center" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-ocean/80 to-brand-ocean" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-brand-gold text-sm font-medium tracking-widest uppercase mb-6">
              Hidden Gems
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Southern Circuit Safaris
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Discover Tanzania&apos;s best-kept secrets—untouched wilderness, diverse activities, 
              and incredible wildlife without the crowds.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-6">
              The Road Less Traveled
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              While the Northern Circuit draws the crowds, Tanzania&apos;s Southern Circuit offers 
              something truly special—vast wilderness areas where you can experience authentic 
              safari moments without jostling for position. Here, nature reigns supreme.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From boat safaris on the Rufiji River to tracking wild dogs in Ruaha, the Southern 
              Circuit delivers diverse activities and exceptional wildlife viewing. It&apos;s perfect 
              for travelers seeking a more exclusive safari experience.
            </p>
          </div>
        </section>

        {/* Activities Highlight */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Anchor, title: "Boat Safaris", desc: "On Rufiji & Wami Rivers" },
                { icon: Trees, title: "Walking Safaris", desc: "Guided bush walks" },
                { icon: Compass, title: "Game Drives", desc: "Classic 4x4 safaris" },
                { icon: Check, title: "Fly Camping", desc: "Wilderness camping" },
              ].map((activity, index) => (
                <div key={index} className="text-center p-6 bg-brand-cream rounded-2xl">
                  <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <activity.icon size={24} className="text-brand-gold" />
                  </div>
                  <h3 className="font-serif font-bold text-brand-chocolate mb-1">{activity.title}</h3>
                  <p className="text-sm text-gray-600">{activity.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16 md:py-24">
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
                      <span className="uppercase tracking-wider">Southern Circuit</span>
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
        <section className="py-16 md:py-24 bg-brand-gold">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-6">
              Experience the Wild South
            </h2>
            <p className="text-lg text-brand-chocolate/80 mb-8 max-w-2xl mx-auto">
              Escape the crowds and discover Tanzania&apos;s hidden wilderness. 
              Your exclusive safari adventure awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/our-itineraries"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-chocolate text-white font-semibold rounded-full hover:bg-brand-chocolate/90 transition-all duration-300 hover:scale-105"
              >
                View Packages
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-brand-chocolate text-brand-chocolate font-semibold rounded-full hover:bg-brand-chocolate hover:text-white transition-all duration-300"
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
