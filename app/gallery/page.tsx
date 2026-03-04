import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { company } from "@/lib/sambuo-data"
import Image from "next/image"

export const metadata = {
  title: `Wildlife & Mountain Gallery | ${company.name}`,
  description:
    "Explore our stunning gallery of Tanzania's wildlife, mountains, and landscapes. See the incredible animals and breathtaking scenery that await you on your safari adventure.",
}

const galleryImages = [
  // Wildlife
  {
    src: "/images/hero-leopard.jpg",
    alt: "Leopard in the wild",
    category: "Wildlife",
  },
  {
    src: "/images/hero-zebras.jpg",
    alt: "Zebras in Serengeti",
    category: "Wildlife",
  },
  {
    src: "/images/rhino-ngorongoro.jpg",
    alt: "Rhino in Ngorongoro Crater",
    category: "Wildlife",
  },
  {
    src: "/images/lions-ngorongoro.jpg",
    alt: "Lions in Ngorongoro",
    category: "Wildlife",
  },
  {
    src: "/images/serengeti.jpg",
    alt: "Serengeti landscape",
    category: "Wildlife",
  },
  {
    src: "/images/tarangire.jpg",
    alt: "Elephants in Tarangire",
    category: "Wildlife",
  },
  {
    src: "/images/lake-manyara-new.jpg",
    alt: "Lake Manyara wildlife",
    category: "Wildlife",
  },
  {
    src: "/images/buffalo-camp.jpg",
    alt: "Buffalo in the wild",
    category: "Wildlife",
  },
  {
    src: "/images/elephants-ngorongoro.jpg",
    alt: "Elephants in Ngorongoro",
    category: "Wildlife",
  },
  {
    src: "/images/giraffes-sunset.jpg",
    alt: "Giraffes at sunset",
    category: "Wildlife",
  },
  {
    src: "/images/hippo-pool.jpg",
    alt: "Hippos in the pool",
    category: "Wildlife",
  },
  {
    src: "/images/cheetah-serengeti.jpg",
    alt: "Cheetah in Serengeti",
    category: "Wildlife",
  },
  // Mountains
  {
    src: "/images/kilimanjaro-uhuru-peak.jpg",
    alt: "Kilimanjaro Uhuru Peak",
    category: "Mountains",
  },
  {
    src: "/images/kilimanjaro-porters-sunrise.jpg",
    alt: "Kilimanjaro Sunrise",
    category: "Mountains",
  },
  {
    src: "/images/kilimanjaro-sunset-hiker.jpg",
    alt: "Hiker at sunset on Kilimanjaro",
    category: "Mountains",
  },
  {
    src: "/images/kilimanjaro-arms-open.jpg",
    alt: "Kilimanjaro adventure",
    category: "Mountains",
  },
  {
    src: "/images/kilimanjaro-aerial-crater.jpg",
    alt: "Kilimanjaro aerial view",
    category: "Mountains",
  },
  {
    src: "/images/mt-meru-landscape.jpg",
    alt: "Mount Meru landscape",
    category: "Mountains",
  },
  {
    src: "/images/meru-crater-rim.jpg",
    alt: "Mount Meru crater rim",
    category: "Mountains",
  },
  {
    src: "/images/meru-kilimanjaro-view.jpg",
    alt: "View of Kilimanjaro from Meru",
    category: "Mountains",
  },
  {
    src: "/images/lushoto-mountains.jpg",
    alt: "Lushoto Usambara Mountains",
    category: "Mountains",
  },
  {
    src: "/images/udzungwa-mountains.jpg",
    alt: "Udzungwa Mountains",
    category: "Mountains",
  },
  // Safari Experiences
  {
    src: "/images/crater-rim-view.jpg",
    alt: "Crater rim view",
    category: "Safari",
  },
  {
    src: "/images/sundowner-serengeti.jpg",
    alt: "Sundowner in Serengeti",
    category: "Safari",
  },
  {
    src: "/images/arusha-national-park.jpg",
    alt: "Arusha National Park",
    category: "Safari",
  },
  {
    src: "/images/hippo-saadani.jpg",
    alt: "Hippos in Saadani",
    category: "Safari",
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center bg-gradient-to-r from-brand-chocolate to-brand-ocean">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">Photo Gallery</h1>
            <p className="text-lg md:text-xl text-white/90">Wildlife, Mountains & Safari Moments</p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["All", "Wildlife", "Mountains", "Safari"].map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full bg-brand-chocolate text-white hover:bg-brand-gold hover:text-brand-chocolate transition-colors duration-300"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-sm">{image.alt}</p>
                      <span className="text-brand-gold text-xs uppercase tracking-wider">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-brand-chocolate text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Create Your Own Memories?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let us take you on an unforgettable journey through Tanzania&apos;s most spectacular 
              wildlife destinations and mountain landscapes.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-chocolate font-bold rounded-full hover:bg-brand-gold/90 transition-all duration-300 hover:scale-105"
            >
              Plan Your Adventure
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
