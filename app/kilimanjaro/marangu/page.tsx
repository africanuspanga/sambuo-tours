import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/booking-modal"
import Link from "next/link"
import { ArrowLeft, Check, X } from "lucide-react"
import Image from "next/image"
import { company } from "@/lib/sambuo-data"

export const metadata = {
  title: `Marangu Route (6 Days) - Coca-Cola Route | ${company.shortName}`,
  description:
    "Climb Kilimanjaro via the Marangu Route with hut accommodations. The classic 6-day trek with steady ascent to Uhuru Peak.",
}

const itinerary = [
  {
    day: 1,
    title: "Marangu Gate to Mandara Hut",
    description: "Rainforest trek through lush vegetation",
    image: "/images/marangu-gate.jpg",
  },
  {
    day: 2,
    title: "Mandara Hut to Horombo Hut",
    description: "Moorland views and changing landscapes",
    image: "/images/mandara-huts.jpg",
  },
  {
    day: 3,
    title: "Acclimatization Day at Horombo Hut",
    description: "Hike to Zebra Rocks for altitude adjustment",
    image: "/images/horombo-huts.jpg",
  },
  {
    day: 4,
    title: "Horombo Hut to Kibo Hut",
    description: "Alpine Desert crossing to base camp",
    image: "/images/marangu-route-signboard.jpg",
  },
  {
    day: 5,
    title: "Kibo Hut to Uhuru Peak, then to Horombo Hut",
    description: "Summit day followed by descent",
    image: "/images/uhuru-peak-sign.jpg",
  },
  {
    day: 6,
    title: "Horombo Hut to Marangu Gate",
    description: "Final descent with certificate ceremony",
  },
]

const included = [
  "2 transfers between Moshi and Marangu Gate",
  "3 meals per day while trekking (Veg/Non-Veg)",
  "6 days Kilimanjaro trek on the Marangu Route",
  "5 nights accommodation in huts while trekking",
  "Pre/Post nights B&B at Zebra Hotel or equivalent",
  "All park entrance fees and government levies",
]

const notIncluded = [
  "Personal mountain gear",
  "Meals outside the regular itinerary",
  "Tips for guide and porters",
  "Airfares and airport taxes",
  "Double room supplement for hotel",
  "International visas & Medical/Travel Insurance",
]

export default function MaranguRoutePage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navigation />
      <main>
        <section className="relative h-[60vh] min-h-[500px] bg-gray-900">
          <Image src="/images/marangu-route-map.jpg" alt="Marangu Route Map" fill className="object-contain" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 z-10 text-center px-4 max-w-4xl mx-auto pb-12">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Marangu Route</h1>
            <p className="text-2xl md:text-3xl text-brand-gold font-bold mb-4">Coca-Cola Route</p>
            <p className="text-lg md:text-xl text-white/90">6 Days / 5 Nights</p>
          </div>
        </section>

        {/* Back Button */}
        <section className="bg-brand-cream border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Button asChild variant="ghost" className="gap-2">
              <Link href="/kilimanjaro">
                <ArrowLeft size={20} />
                Back to All Routes
              </Link>
            </Button>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 md:py-16 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-6">About the Route</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The Marangu route is the oldest and most established path. It is the only route that offers hut
                accommodations instead of camping. It is ideal for those who want a classic experience without sleeping
                in tents.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This route approaches from the south and uses the same path for ascent and descent. While often
                considered the easiest route, proper acclimatization is still essential for success.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-brand-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-12 text-center">Daily Itinerary</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {itinerary.map((day) => (
                <div key={day.day} className="bg-brand-cream rounded-xl overflow-hidden border border-gray-200">
                  {day.image && (
                    <div className="relative aspect-video bg-gray-200">
                      <Image src={day.image || "/placeholder.svg"} alt={day.title} fill className="object-cover" />
                    </div>
                  )}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-brand-gold text-brand-chocolate rounded-full flex items-center justify-center font-serif font-bold text-lg">
                        {day.day}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-brand-chocolate mb-2">{day.title}</h3>
                        <p className="text-gray-700">{day.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Included/Excluded */}
        <section className="py-12 md:py-16 bg-brand-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-12 text-center">Package Details</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-brand-cream rounded-2xl p-6 md:p-8 border-2 border-green-200">
                <h3 className="text-2xl font-serif font-bold text-brand-chocolate mb-6 flex items-center gap-3">
                  <Check className="text-green-600" size={28} />
                  Included
                </h3>
                <ul className="space-y-3">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-cream rounded-2xl p-6 md:p-8 border-2 border-red-200">
                <h3 className="text-2xl font-serif font-bold text-brand-chocolate mb-6 flex items-center gap-3">
                  <X className="text-red-600" size={28} />
                  Not Included
                </h3>
                <ul className="space-y-3">
                  {notIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <X className="text-red-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Health & Prep */}
        <section className="py-12 md:py-16 bg-brand-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 rounded-2xl p-6 md:p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-serif font-bold text-brand-chocolate mb-4">Health & Preparation</h3>
              <p className="text-gray-700 leading-relaxed">
                Most able-bodied persons aged 10+ can hike; however, preparation and care are essential for safety. We
                recommend 1 month of physical preparation and ensuring you have waterproof equipment for the rainy
                season.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Book This Route?</h2>
            <p className="text-lg text-white/90 mb-8">Contact us today to start planning your Kilimanjaro adventure</p>
            <BookingModal
              trigger={
                <button
                  className="inline-flex items-center justify-center rounded-md text-lg font-bold px-8 py-4 transition-all hover:scale-105"
                  style={{ backgroundColor: "#D4A017", color: "#3B2314" }}
                >
                  BOOK NOW
                </button>
              }
              tourName="Marangu Route (6 Days)"
            />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
