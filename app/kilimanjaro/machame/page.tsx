import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/booking-modal"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, X } from "lucide-react"
import { company } from "@/lib/sambuo-data"

export const metadata = {
  title: `Machame Route (7 Days) - Whiskey Route | ${company.shortName}`,
  description:
    "Climb Kilimanjaro via the Machame Route. Steeper and more challenging with excellent acclimatization. 7-day trek to Uhuru Peak.",
}

const itinerary = [
  {
    day: 1,
    title: "Machame Gate to Machame Camp",
    description: "Trek through lush rainforest",
    image: "/images/machame-gate.avif",
  },
  {
    day: 2,
    title: "Machame Camp to Shira 2 Camp",
    description: "Steep ridges with stunning views",
    image: "/images/shira-camp.jpg",
  },
  {
    day: 3,
    title: "Shira 2 to Lava Tower to Barranco Camp",
    description: "Key acclimatization day with climb high, sleep low",
    image: "/images/barranco-camp.webp",
  },
  {
    day: 4,
    title: "Barranco Camp to Karanga Camp",
    description: "Conquering the famous Barranco Wall",
    image: "/images/karanga-camp.jpg",
  },
  {
    day: 5,
    title: "Karanga Camp to Barafu Camp",
    description: "High desert trek to base camp",
    image: "/images/machame-hut-camps.jpg",
  },
  {
    day: 6,
    title: "Barafu Camp to Uhuru Peak, then to Mweka Camp",
    description: "Summit day followed by long descent",
    image: "/images/mweka-camp.webp",
  },
  {
    day: 7,
    title: "Mweka Camp to Mweka Gate",
    description: "Final descent through rainforest",
  },
]

const included = [
  "2 transfers between Moshi and Machame Gate",
  "3 meals per day while trekking (Veg/Non-Veg)",
  "7 days Kilimanjaro trek on the Machame Route",
  "Camping accommodation while trekking",
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

export default function MachameRoutePage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] bg-gray-900">
          <Image
            src="/images/machame-route-map.jpg"
            alt="Machame Route Map - Kilimanjaro"
            fill
            className="object-contain"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 z-10 text-center px-4 py-8 md:py-12">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Machame Route</h1>
            <p className="text-2xl md:text-3xl text-brand-gold font-bold mb-4">Whiskey Route</p>
            <p className="text-lg md:text-xl text-white/90">7 Days / 6 Nights</p>
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
              <h2 className="text-3xl md:text-4xl font-black text-brand-chocolate mb-6">About the Route</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The Machame route is famously known as the Whiskey route. It is steeper and more challenging than
                Marangu but offers much better acclimatization because of the climb high, sleep low topography.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This is one of the most popular routes due to its stunning scenery and excellent success rates. The
                varied landscapes provide an unforgettable trekking experience.
              </p>
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section className="py-12 md:py-16 bg-brand-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-brand-chocolate mb-12 text-center">Daily Itinerary</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {itinerary.map((day) => (
                <div key={day.day} className="bg-brand-cream rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  {day.image && (
                    <div className="relative aspect-video w-full">
                      <Image src={day.image || "/placeholder.svg"} alt={day.title} fill className="object-cover" />
                    </div>
                  )}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-brand-gold text-brand-chocolate rounded-full flex items-center justify-center font-black text-lg">
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
            <h2 className="text-3xl md:text-4xl font-black text-brand-chocolate mb-12 text-center">Package Details</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-brand-cream rounded-2xl p-6 md:p-8 border-2 border-green-200">
                <h3 className="text-2xl font-black text-brand-chocolate mb-6 flex items-center gap-3">
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
                <h3 className="text-2xl font-black text-brand-chocolate mb-6 flex items-center gap-3">
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
              <h3 className="text-2xl font-black text-brand-chocolate mb-4">Health & Preparation</h3>
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
            <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Book This Route?</h2>
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
              tourName="Machame Route (7 Days)"
            />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
