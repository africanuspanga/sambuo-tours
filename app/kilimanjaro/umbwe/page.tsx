import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/booking-modal"
import Link from "next/link"
import { ArrowLeft, Check, X, AlertTriangle } from "lucide-react"
import Image from "next/image"
import { company } from "@/lib/sambuo-data"

export const metadata = {
  title: `Umbwe Route (6 Days) - Double Whiskey Route | ${company.shortName}`,
  description:
    "Climb Kilimanjaro via the Umbwe Route. The steepest and most challenging route for experienced trekkers. 6-day trek to Uhuru Peak.",
}

const itinerary = [
  {
    day: 1,
    title: "Umbwe Gate to Umbwe Cave Camp",
    elevation: "1,600m to 2,940m",
    distance: "10 km",
    time: "5-6 hours",
    description:
      "A steep, strenuous trek through the rainforest along a narrow ridge between two deep valleys. The trail is muddy and slippery, passing through lush vegetation with occasional glimpses of wildlife. You'll camp at Umbwe Cave, a rock overhang that provides natural shelter.",
    image: "",
  },
  {
    day: 2,
    title: "Umbwe Cave Camp to Barranco Camp",
    elevation: "2,940m to 3,960m",
    distance: "6 km",
    time: "4-5 hours",
    description:
      "The forest thins into giant heather as you continue ascending. You'll climb toward the Great Barranco Wall with stunning views of the Western Breach and the southern ice fields. The landscape transforms from moorland to alpine desert as you reach Barranco Camp.",
    image: "/images/barranco-camp.jpg",
  },
  {
    day: 3,
    title: "Barranco Camp to Karanga Camp",
    elevation: "3,960m to 3,995m",
    distance: "5 km",
    time: "4-5 hours",
    description:
      "Conquer the famous Barranco Wall—a non-technical but exciting scramble that rewards you with incredible views. The trail then descends into the Karanga Valley before climbing to Karanga Camp, your last water point before the summit.",
    image: "/images/karanga-camp.jpg",
  },
  {
    day: 4,
    title: "Karanga Camp to Barafu Camp",
    elevation: "3,995m to 4,673m",
    distance: "4 km",
    time: "3-4 hours",
    description:
      "A short but steep climb through the alpine desert to reach Barafu Camp, your base camp for the summit push. The afternoon is spent resting, hydrating, and preparing for the midnight summit attempt. Early dinner and sleep before the big day.",
    image: "",
  },
  {
    day: 5,
    title: "Barafu Camp to Uhuru Peak to Mweka Camp",
    elevation: "4,673m to 5,895m to 3,100m",
    distance: "17 km",
    time: "12-14 hours",
    description:
      "Summit day begins around midnight. You'll climb through scree and switchbacks to Stella Point (5,756m) on the crater rim, then continue along the crater rim to Uhuru Peak—the Roof of Africa at 5,895m. After celebrating and photos, descend via Mweka route to Mweka Camp.",
    image: "/images/uhuru-peak-sign.jpg",
  },
  {
    day: 6,
    title: "Mweka Camp to Mweka Gate",
    elevation: "3,100m to 1,640m",
    distance: "10 km",
    time: "3-4 hours",
    description:
      "Final descent through the beautiful rainforest to Mweka Gate. Collect your summit certificates, tip your guides and porters, and transfer back to Moshi to celebrate your incredible achievement.",
    image: "/images/mweka-camp.jpg",
  },
]

const included = [
  "2 transfers between Moshi and Umbwe/Mweka Gates",
  "3 meals per day while trekking (Veg/Non-Veg)",
  "6 days Kilimanjaro trek on the Umbwe Route",
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

export default function UmbweRoutePage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[400px] bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center">
          <Image src="/images/umbwe-route.jpg" alt="Umbwe Route - Kilimanjaro" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
              Umbwe Route
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-brand-gold font-bold mb-3 sm:mb-4 drop-shadow-lg">
              The Double Whiskey Route
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/90 drop-shadow-lg">6 Days / 5 Nights</p>
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

        {/* Warning Banner */}
        <section className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={24} />
              <div>
                <h3 className="font-bold text-amber-800">Challenging Route for Experienced Trekkers</h3>
                <p className="text-amber-700 text-sm sm:text-base">
                  The Umbwe Route is the steepest and most demanding path up Kilimanjaro. It's recommended only for
                  those with previous high-altitude trekking experience and excellent physical fitness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-10 sm:py-12 md:py-16 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-4 sm:mb-6">
                About the Route
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                Known as the "Double Whiskey" route, Umbwe is for the experienced trekker seeking a serious challenge.
                It features steep ridges and scrambling through rainforest and moorland before joining the southern
                circuit near the Barranco Wall.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                This route offers a direct and rapid ascent, making it one of the shorter options but also one with a
                lower success rate due to the fast altitude gain. The trail is less crowded, providing a more solitary
                wilderness experience.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                The Umbwe Route approaches through pristine rainforest, offering incredible biodiversity before
                transitioning to the dramatic landscapes of the alpine desert and glacial zones.
              </p>
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section className="py-10 sm:py-12 md:py-16 bg-brand-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-8 sm:mb-12 text-center">
              Daily Itinerary
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
              {itinerary.map((day) => (
                <div key={day.day} className="bg-brand-cream rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  {/* Image placeholder for future */}
                  {day.image && (
                    <div className="relative aspect-video sm:aspect-[21/9] w-full">
                      <Image
                        src={day.image || "/placeholder.svg"}
                        alt={day.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 896px"
                      />
                    </div>
                  )}

                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-brand-gold text-brand-chocolate rounded-full flex items-center justify-center font-serif font-bold text-lg">
                        {day.day}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-chocolate mb-2">{day.title}</h3>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-2 sm:gap-4 mb-3 text-sm text-gray-600">
                          <span className="bg-brand-sand px-2 py-1 rounded">{day.elevation}</span>
                          <span className="bg-brand-sand px-2 py-1 rounded">{day.distance}</span>
                          <span className="bg-brand-sand px-2 py-1 rounded">{day.time}</span>
                        </div>

                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{day.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Included/Excluded */}
        <section className="py-10 sm:py-12 md:py-16 bg-brand-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-8 sm:mb-12 text-center">
              Package Details
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <div className="bg-brand-cream rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-green-200">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-chocolate mb-4 sm:mb-6 flex items-center gap-3">
                  <Check className="text-green-600" size={24} />
                  Included
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <Check className="text-green-600 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-cream rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-red-200">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-chocolate mb-4 sm:mb-6 flex items-center gap-3">
                  <X className="text-red-600" size={24} />
                  Not Included
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {notIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <X className="text-red-600 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Health & Prep */}
        <section className="py-10 sm:py-12 md:py-16 bg-brand-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-blue-200">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-chocolate mb-3 sm:mb-4">Health & Preparation</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                The Umbwe Route requires excellent physical fitness and ideally previous high-altitude trekking
                experience. We strongly recommend at least 2-3 months of cardiovascular training and strength exercises
                before attempting this route. Due to the rapid altitude gain, proper acclimatization is crucial—stay
                well hydrated and listen to your body. Ensure you have waterproof equipment as conditions can change
                quickly.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 sm:mb-6">Ready for the Challenge?</h2>
            <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8">
              Contact us today to discuss if the Umbwe Route is right for you
            </p>
            <BookingModal
              trigger={
                <button className="inline-flex items-center justify-center rounded-md text-base sm:text-lg font-bold px-6 sm:px-8 py-3 sm:py-4 transition-all hover:scale-105 bg-brand-gold text-brand-chocolate hover:bg-brand-gold/90">
                  Book Now
                </button>
              }
              tourName="Umbwe Route (6 Days)"
            />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
