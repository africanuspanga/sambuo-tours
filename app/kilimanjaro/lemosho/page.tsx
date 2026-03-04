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
  title: `Lemosho Route (8 Days) - The Scenic Route | ${company.shortName}`,
  description:
    "Climb Kilimanjaro via the Lemosho Route. The most beautiful route with excellent acclimatization. 8-day trek to Uhuru Peak.",
}

const itinerary = [
  {
    day: 1,
    title: "Londorossi Gate to Mti Mkubwa (Big Tree) Camp",
    description: "Start of the western approach",
    images: ["/images/londorossi-gate.jpg", "/images/mti-mkubwa-camp.jpg"],
  },
  {
    day: 2,
    title: "Mti Mkubwa to Shira 1 Camp",
    description: "Crossing the Shira Ridge",
    images: ["/images/shira-1-camp.jpg"],
  },
  {
    day: 3,
    title: "Shira 1 to Shira 2 Camp",
    description: "High altitude moorland exploration",
    images: ["/images/shira-2-camp.jpg"],
  },
  {
    day: 4,
    title: "Shira 2 to Lava Tower to Barranco Camp",
    description: "The climb high, sleep low acclimatization day",
    images: ["/images/barranco-camp.jpg"],
  },
  {
    day: 5,
    title: "Barranco Camp to Karanga Camp",
    description: "Conquering the Barranco Wall",
    images: [],
  },
  {
    day: 6,
    title: "Karanga Camp to Barafu Camp",
    description: "Final preparation for the summit",
    images: [],
  },
  {
    day: 7,
    title: "Barafu to Uhuru Peak, then to Mweka Camp",
    description: "Summit day followed by descent",
    images: ["/images/uhuru-peak.webp"],
  },
  {
    day: 8,
    title: "Mweka Camp to Mweka Gate",
    description: "Final descent and certificate ceremony",
    images: ["/images/mweka-camp.jpg"],
  },
]

const included = [
  "2 transfers between Moshi and Londorossi Gate",
  "3 meals per day while trekking (Veg/Non-Veg)",
  "8 days Kilimanjaro trek on the Lemosho Route",
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

export default function LemoshoRoutePage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navigation />
      <main>
        <section className="relative h-[60vh] md:h-[70vh] min-h-[500px] bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center">
          <Image
            src="/images/lemosho-route-map.jpg"
            alt="Lemosho Route Map - Kilimanjaro"
            fill
            className="object-contain p-4 md:p-8"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-auto pb-8 md:pb-12">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">Lemosho Route</h1>
            <p className="text-2xl md:text-3xl text-brand-gold font-bold mb-4 drop-shadow-lg">The Scenic Route</p>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-lg">8 Days / 7 Nights</p>
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
                Lemosho is widely considered the most beautiful route on Kilimanjaro. It starts on the western side of
                the mountain and offers a remote, wilderness feel for the first few days before joining the main trail.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The 8-day duration is perfect for excellent acclimatization, resulting in high success rates. This route
                provides the ideal balance of scenery, solitude, and summit success.
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
                <div key={day.day} className="bg-brand-cream rounded-xl overflow-hidden border border-gray-200">
                  {day.images && day.images.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 p-2 sm:p-4">
                      {day.images.map((image, idx) => (
                        <div
                          key={idx}
                          className={`relative aspect-video rounded-lg overflow-hidden ${
                            day.images.length === 1 ? "sm:col-span-2" : ""
                          }`}
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${day.title}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                          />
                        </div>
                      ))}
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
              tourName="Lemosho Route (8 Days)"
            />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
