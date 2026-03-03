import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/booking-modal"
import Link from "next/link"
import { ArrowLeft, Check, X, Users } from "lucide-react"
import Image from "next/image"
import { company } from "@/lib/sambuo-data"

export const metadata = {
  title: `Rongai Route (7 Days) - The Northern Approach | ${company.shortName}`,
  description:
    "Climb Kilimanjaro via the Rongai Route from the north. Drier conditions and quieter trail. 7-day trek to Uhuru Peak.",
}

const itinerary = [
  {
    day: 1,
    title: "Rongai Gate to Simba Camp",
    description: "Trek through rainforest and farmland",
    images: ["/images/rongai-gate-sign.jpg", "/images/simba-camp.jpg"],
  },
  {
    day: 2,
    title: "Simba Camp to Second Cave Camp",
    description: "Moorland with views of Kibo",
    images: ["/images/second-cave.jpg"],
  },
  {
    day: 3,
    title: "Second Cave to Kikelewa Camp",
    description: "Scenic wilderness trek",
    images: ["/images/kikelewa-camp.jpg"],
  },
  {
    day: 4,
    title: "Kikelewa Camp to Mawenzi Tarn Camp",
    description: "Acclimatization beneath Mawenzi Peak",
    images: ["/images/mawenzi-tarn-camp.jpg"],
  },
  {
    day: 5,
    title: "Mawenzi Tarn to Kibo Hut",
    description: "Crossing the desert Saddle",
    images: [],
  },
  {
    day: 6,
    title: "Kibo Hut to Uhuru Peak, then to Horombo Hut",
    description: "Summit day followed by descent",
    images: ["/images/uhuru-peak-rongai.jpg"],
  },
  {
    day: 7,
    title: "Horombo Hut to Marangu Gate",
    description: "Final descent through the forest",
    images: ["/images/horombo-hut.jpg"],
  },
]

const included = [
  "2 transfers between Moshi and Rongai Gate",
  "3 meals per day while trekking (Veg/Non-Veg)",
  "7 days Kilimanjaro trek on the Rongai Route",
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

const pricing = [
  { pax: "1 Person", price: "$2,589" },
  { pax: "2 People", price: "$2,104 per person" },
  { pax: "3 People", price: "$1,942 per person" },
  { pax: "4+ People", price: "$1,862 per person" },
]

export default function RongaiRoutePage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] min-h-[500px] flex items-end">
          <Image
            src="/images/rongai-route-map.jpg"
            alt="Rongai Route Map"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="relative z-10 w-full px-4 pb-12 md:pb-16">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Rongai Route</h1>
              <p className="text-2xl md:text-3xl text-brand-gold font-bold mb-4">The Northern Approach</p>
              <p className="text-lg md:text-xl text-white/90">7 Days / 6 Nights</p>
            </div>
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
                The Rongai route is the only path that approaches Kilimanjaro from the north near the Kenyan border. It
                is much drier and flatter, making it the best choice during the rainy season.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                You descend via the Marangu route, giving you a chance to see both sides of the mountain. The northern
                approach offers unique perspectives and wildlife viewing opportunities.
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
                  {day.images.length > 0 && (
                    <div
                      className={`grid ${day.images.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"} gap-0`}
                    >
                      {day.images.map((image, idx) => (
                        <div key={idx} className="relative aspect-video">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${day.title} - Image ${idx + 1}`}
                            fill
                            className="object-cover"
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

        {/* Pricing */}
        <section className="py-12 md:py-16 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-brand-chocolate mb-12 text-center">Pricing</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-brand-cream rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-brand-ocean to-blue-600 p-6 text-white">
                  <h3 className="text-2xl font-black mb-2">Rongai Route</h3>
                  <p className="text-blue-100">7 Days / 6 Nights</p>
                </div>
                <div className="p-6 md:p-8">
                  <div className="space-y-4">
                    {pricing.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-4 border-b border-gray-200 last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <Users size={20} className="text-brand-ocean" />
                          <span className="font-semibold text-gray-900">{item.pax}</span>
                        </div>
                        <span className="text-xl md:text-2xl font-black text-brand-chocolate">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
              tourName="Rongai Route (7 Days)"
            />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
