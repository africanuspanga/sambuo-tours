import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookingModal } from "@/components/booking-modal"
import Link from "next/link"
import Image from "next/image"
import { TrendingUp, Check, Mountain, MapPin, Shield, Clock } from "lucide-react"

export const metadata = {
  title: "Mount Meru Climbing - Tanzania's Second Highest Peak | KiliSafari",
  description:
    "Climb Mount Meru (4,566m) in Arusha National Park. Perfect Kilimanjaro warm-up trek with wildlife viewing, crater views, and 90% success rate. 3-4 day climbs available.",
}

export default function MtMeruPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px] w-full flex items-center justify-center">
          <Image
            src="/images/meru-kilimanjaro-view.jpg"
            alt="Mount Meru with Mount Kilimanjaro in the background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 drop-shadow-lg">
              Mount Meru Trek
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-2 font-semibold">Tanzania's Second Highest Peak</p>
            <p className="text-2xl md:text-4xl text-white font-black mb-6">4,566m / 14,980ft</p>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Spectacular views of Kilimanjaro and abundant wildlife make this the perfect preparation hike
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6">Why Climb Mount Meru?</h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Meru is a great preparation hike for climbing Kilimanjaro, or a spectacular trek for those not
                    compelled to do Kilimanjaro. You will hike past wildlife, the landscape is spectacular, and sunrise
                    on the summit has Kilimanjaro as the backdrop.
                  </p>
                  <p>
                    While typically done in 3-4 days, it is not an easy peak to summit. To reach the top, there is some
                    scrambling on rocks in the dark and at high altitude. You should be prepared for at least 10 hours
                    of hiking on summit day.
                  </p>
                  <p>
                    Mt. Meru is in Arusha National Park. The park requires all groups to be accompanied by a park ranger
                    who will carry a rifle to scare away any advancing animals such as elephant or cape buffalo.
                  </p>
                </div>
              </div>
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/meru-crater-rim.jpg"
                  alt="Mount Meru crater rim with dramatic rocky terrain"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-12 text-center">Trek Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: MapPin,
                  title: "Location",
                  description: "Arusha National Park",
                },
                {
                  icon: Clock,
                  title: "Duration",
                  description: "3-4 Days",
                },
                {
                  icon: TrendingUp,
                  title: "Success Rate",
                  description: "90%+",
                },
                {
                  icon: Shield,
                  title: "Safety",
                  description: "Armed Ranger Escort",
                },
              ].map((feature, idx) => (
                <Card key={idx} className="text-center">
                  <CardContent className="pt-6">
                    <feature.icon className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-brand-dark mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trek Options */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">Choose Your Trek</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select between our standard 3-day trek or the recommended 4-day trek for better acclimatization
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 3 Day Trek */}
              <Card className="relative overflow-hidden border-2 hover:border-brand-orange transition-colors">
                <CardHeader className="bg-gradient-to-br from-gray-50 to-white pb-8">
                  <CardTitle className="text-2xl md:text-3xl font-black text-brand-dark">3 Days 2 Nights</CardTitle>
                  <CardDescription className="text-base">Standard Itinerary</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {/* Pricing Table */}
                  <div className="mb-6 bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-brand-dark mb-3">Pricing Per Person (USD)</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">1 Person</span>
                        <span className="font-bold text-lg text-brand-dark">$1,580</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">2 People</span>
                        <span className="font-bold text-lg text-brand-green">$1,175</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-700">4+ People</span>
                        <span className="font-bold text-lg text-brand-green">$880</span>
                      </div>
                    </div>
                  </div>

                  {/* Itinerary Overview */}
                  <div className="space-y-4 mb-6">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <div>
                        <h5 className="font-bold text-brand-dark mb-1">Momela Gate to Miriakamba Hut</h5>
                        <p className="text-sm text-gray-600">
                          Hike through montane forest with wildlife viewing opportunities
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <div>
                        <h5 className="font-bold text-brand-dark mb-1">Miriakamba to Saddle Hut</h5>
                        <p className="text-sm text-gray-600">
                          Steep climb through moorland, optional Little Meru summit (3,820m)
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <div>
                        <h5 className="font-bold text-brand-dark mb-1">Summit Day & Descent</h5>
                        <p className="text-sm text-gray-600">
                          Midnight start, summit Socialist Peak (4,566m), return to gate
                        </p>
                      </div>
                    </div>
                  </div>

                  <BookingModal
                    tourName="Mount Meru 3-Day Trek"
                    trigger={
                      <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white" size="lg">
                        Book 3-Day Trek
                      </Button>
                    }
                  />
                </CardContent>
              </Card>

              {/* 4 Day Trek */}
              <Card className="relative overflow-hidden border-2 border-brand-green hover:border-brand-orange transition-colors">
                <div className="absolute top-4 right-4 bg-brand-green text-white px-3 py-1 rounded-full text-sm font-bold">
                  Recommended
                </div>
                <CardHeader className="bg-gradient-to-br from-green-50 to-white pb-8">
                  <CardTitle className="text-2xl md:text-3xl font-black text-brand-dark">4 Days 3 Nights</CardTitle>
                  <CardDescription className="text-base">Better Acclimatization</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {/* Pricing Table */}
                  <div className="mb-6 bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-brand-dark mb-3">Pricing Per Person (USD)</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">1 Person</span>
                        <span className="font-bold text-lg text-brand-dark">$1,950</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">2 People</span>
                        <span className="font-bold text-lg text-brand-green">$1,335</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-700">4+ People</span>
                        <span className="font-bold text-lg text-brand-green">$865</span>
                      </div>
                    </div>
                  </div>

                  {/* Itinerary Overview */}
                  <div className="space-y-4 mb-6">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <div>
                        <h5 className="font-bold text-brand-dark mb-1">Momela Gate to Miriakamba Hut</h5>
                        <p className="text-sm text-gray-600">
                          Gradual ascent through forest with wildlife and scenic clearings
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <div>
                        <h5 className="font-bold text-brand-dark mb-1">Miriakamba to Saddle Hut</h5>
                        <p className="text-sm text-gray-600">
                          Alpine zone climb, afternoon acclimatization hike to Little Meru
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <div>
                        <h5 className="font-bold text-brand-dark mb-1">Summit Day to Miriakamba</h5>
                        <p className="text-sm text-gray-600">Early summit push, return to Miriakamba Hut for rest</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-sm">
                        4
                      </div>
                      <div>
                        <h5 className="font-bold text-brand-dark mb-1">Descent to Momela Gate</h5>
                        <p className="text-sm text-gray-600">
                          Relaxed descent with waterfall visit and final game viewing
                        </p>
                      </div>
                    </div>
                  </div>

                  <BookingModal
                    tourName="Mount Meru 4-Day Trek"
                    trigger={
                      <Button className="w-full bg-brand-green hover:bg-brand-green/90 text-white" size="lg">
                        Book 4-Day Trek
                      </Button>
                    }
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-12 text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-green flex items-center gap-2">
                    <Check className="w-6 h-6" />
                    Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Professional mountain guide and armed park ranger",
                      "All park fees and permits",
                      "Mountain hut accommodation",
                      "All meals during the trek",
                      "Porters and mountain crew",
                      "Emergency oxygen and first aid kit",
                      "Airport transfers (if booked)",
                      "Pre-trek briefing",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={20} className="text-brand-green mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-gray-600">Not Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "International flights",
                      "Tanzania visa fees",
                      "Travel insurance (required)",
                      "Personal trekking gear",
                      "Tips for guides and crew",
                      "Personal expenses and souvenirs",
                      "Additional hotel nights in Arusha/Moshi",
                      "Alcoholic beverages",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-gray-400 mt-1">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-8 text-center">Important Information</h2>
            <Card className="bg-orange-50 border-brand-orange">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {[
                    "Park ranger accompaniment is mandatory in Arusha National Park",
                    "Summit day involves approximately 10 hours of hiking",
                    "Some scrambling on rocks in the dark at high altitude is required to reach the summit",
                    "For an easier option, you can climb just to Rhino Point (3,800m) for sunrise",
                    "The trek offers opportunities to see wildlife including buffalo, warthogs, elephants and giraffes",
                    "Good physical fitness and mental preparation are essential",
                    "The 4-day trek is recommended for better acclimatization and higher success rates",
                  ].map((info, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Shield size={20} className="text-brand-orange mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{info}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-brand-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Mountain className="w-16 h-16 mx-auto mb-6 text-brand-orange" />
            <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Climb Mount Meru?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to book your Mount Meru adventure or to customize your trek to fit your schedule and
              preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingModal
                tourName="Mount Meru Trek"
                trigger={
                  <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                    Book Your Trek
                  </Button>
                }
              />
              <Button asChild size="lg" variant="outline" className="bg-white text-brand-dark hover:bg-gray-100">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
