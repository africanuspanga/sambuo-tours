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
  title: `Northern Circuit Route (9 Days) - The Grand Traverse | ${company.shortName}`,
  description:
    "Climb Kilimanjaro via the Northern Circuit Route. The longest route with the highest success rate. 9-day trek to Uhuru Peak.",
}

const itinerary = [
  {
    day: 1,
    title: "Londorossi Gate to Mti Mkubwa",
    description:
      "Start of the western approach through forest. Register at the gate and begin your trek through lush montane forest to your first camp.",
    image: "/images/londorossi-gate.jpg",
  },
  {
    day: 2,
    title: "Mti Mkubwa to Shira 1 Camp",
    description:
      "Ascending to the Shira Plateau through moorland zone. Experience changing vegetation as you gain altitude.",
    image: "/images/shira-1-camp.jpg",
  },
  {
    day: 3,
    title: "Shira 1 to Shira 2 Camp",
    description:
      "Exploring the moorland plateau with stunning views. Walk across the volcanic plateau with Kibo peak in sight.",
    image: "/images/shira-2-camp.jpg",
  },
  {
    day: 4,
    title: "Shira 2 to Moir Hut",
    description:
      "Heading north away from the crowds into remote wilderness. Enjoy solitude on this less-traveled section.",
    image: "/images/shira-camp.jpg",
  },
  {
    day: 5,
    title: "Moir Hut to Buffalo Camp",
    description: "Remote northern slopes exploration with panoramic views of the mountain and surrounding plains.",
    image: "/images/buffalo-camp.jpg",
  },
  {
    day: 6,
    title: "Buffalo Camp to Third Cave Camp",
    description: "Continuing along the northern circuit through alpine desert landscape with dramatic sunset views.",
    image: "/images/third-cave-camp.jpg",
  },
  {
    day: 7,
    title: "Third Cave to School Hut",
    description: "Final approach to base camp. Prepare mentally and physically for tomorrow's summit attempt.",
    image: "/images/second-cave.jpg",
  },
  {
    day: 8,
    title: "School Hut to Uhuru Peak, then to Mweka Camp",
    description:
      "Summit day! Midnight start to reach Uhuru Peak at sunrise, then descend to Mweka Camp for celebration.",
    image: "/images/uhuru-peak-sign.jpg",
  },
  {
    day: 9,
    title: "Descent to Mweka Gate",
    description: "Final descent through rainforest. Receive your summit certificate and celebrate your achievement!",
    image: "/images/mweka-camp.jpg",
  },
]

const included = [
  "2 transfers between Moshi and Londorossi Gate",
  "3 meals per day while trekking (Veg/Non-Veg)",
  "9 days Kilimanjaro trek on the Northern Circuit",
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

export default function NorthernCircuitRoutePage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Northern Circuit</h1>
            <p className="text-2xl md:text-3xl text-brand-gold font-bold mb-4">The Grand Traverse</p>
            <p className="text-lg md:text-xl text-white/90">9 Days / 8 Nights</p>
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
                This is the ultimate Kilimanjaro experience. As the longest route, it circles the quiet northern slopes
                and offers nearly 360-degree views of the mountain.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                It has the highest success rate of any route because the 9-day pace allows almost anyone to adjust to
                the altitude. Perfect for those wanting the most comprehensive Kilimanjaro experience in pristine
                wilderness.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-brand-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-12 text-center">Daily Itinerary</h2>
            <div className="max-w-5xl mx-auto space-y-8">
              {itinerary.map((day) => (
                <div key={day.day} className="bg-brand-cream rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Image */}
                    <div className="relative h-48 md:h-full md:min-h-[200px]">
                      <Image src={day.image || "/placeholder.svg"} alt={day.title} fill className="object-cover" />
                    </div>
                    {/* Content */}
                    <div className="md:col-span-2 p-6 md:p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-brand-gold text-brand-chocolate rounded-full flex items-center justify-center font-serif font-bold text-lg">
                          {day.day}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-brand-chocolate mb-2">{day.title}</h3>
                          <p className="text-gray-700 leading-relaxed">{day.description}</p>
                        </div>
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
              tourName="Northern Circuit Route (9 Days)"
            />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
