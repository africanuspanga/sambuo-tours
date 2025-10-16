"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"
import Image from "next/image"

const faqs = [
  {
    question: "What's included in safari packages?",
    answer:
      "Our safari packages typically include professional guides, park fees, accommodation, meals, transportation in 4x4 vehicles, and airport transfers. Specific inclusions vary by package - contact us for detailed information.",
  },
  {
    question: "Do I need a visa for Tanzania?",
    answer:
      "Most visitors need a visa to enter Tanzania. You can obtain a visa on arrival at major entry points or apply online in advance. US citizens pay $100, while most other nationalities pay $50. Check with your local Tanzanian embassy for specific requirements.",
  },
  {
    question: "What's the best time to visit?",
    answer:
      "Tanzania is a year-round destination. For safaris, June-October (dry season) offers excellent wildlife viewing. December-March is great for the Serengeti calving season. For Kilimanjaro, January-March and June-October are ideal. Zanzibar is best visited June-October and December-February.",
  },
  {
    question: "How do I book a tour?",
    answer:
      "Simply fill out our contact form with your preferences, or reach out via email, phone, or WhatsApp. We'll discuss your interests, create a custom itinerary, and provide a detailed quote. Once you're happy with the plan, we'll confirm your booking with a deposit.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, credit cards, and PayPal. A deposit (typically 30-50%) is required to confirm your booking, with the balance due before your trip begins. We'll provide detailed payment instructions upon booking confirmation.",
  },
]

export default function ContactClientPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    tourInterest: "",
    travelers: "",
    travelDates: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `
*New Tour Inquiry from KiliSafari Website*

*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone || "Not provided"}
*Country:* ${formData.country || "Not provided"}
*Tour Interest:* ${formData.tourInterest || "Not specified"}
*Number of Travelers:* ${formData.travelers || "Not specified"}
*Travel Dates:* ${formData.travelDates || "Not specified"}
*Budget:* ${formData.budget || "Not specified"}

*Message:*
${formData.message || "No additional message"}
    `.trim()

    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/255769418702?text=${encodedMessage}`, "_blank")

    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center">
          <Image src="/images/contact-hero.jpg" alt="Dar es Salaam cityscape" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 to-brand-green/80" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">Get in Touch</h1>
            <p className="text-lg md:text-xl text-white/90">Let's Plan Your Perfect Tanzania Adventure</p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-black text-brand-dark mb-6">Send Us an Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        required
                        placeholder="John Doe"
                        className="mt-2"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="mt-2"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 234 567 8900"
                        className="mt-2"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Select onValueChange={(value) => handleInputChange("country", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="de">Germany</SelectItem>
                          <SelectItem value="fr">France</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="tourInterest">Tour Interest</Label>
                      <Select onValueChange={(value) => handleInputChange("tourInterest", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select tour type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="safari">Safari Tours</SelectItem>
                          <SelectItem value="kilimanjaro">Mountain Trekking</SelectItem>
                          <SelectItem value="zanzibar">Zanzibar Beach Holiday</SelectItem>
                          <SelectItem value="cultural">Cultural Tours</SelectItem>
                          <SelectItem value="custom">Custom Itinerary</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="travelers">Number of Travelers</Label>
                      <Input
                        id="travelers"
                        type="number"
                        min="1"
                        placeholder="2"
                        className="mt-2"
                        value={formData.travelers}
                        onChange={(e) => handleInputChange("travelers", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="travelDates">Preferred Travel Dates</Label>
                      <Input
                        id="travelDates"
                        type="date"
                        className="mt-2"
                        value={formData.travelDates}
                        onChange={(e) => handleInputChange("travelDates", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="budget">Budget ($1,000 - $2,500)</SelectItem>
                          <SelectItem value="mid">Mid-range ($2,500 - $5,000)</SelectItem>
                          <SelectItem value="luxury">Luxury ($5,000+)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message / Special Requests</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us about your dream Tanzania adventure..."
                      className="mt-2"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white px-12"
                  >
                    Send Inquiry
                  </Button>

                  {formSubmitted && (
                    <div className="flex items-center gap-2 text-brand-green">
                      <CheckCircle size={20} />
                      <span className="font-medium">Thank you! We'll get back to you within 24 hours.</span>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-8 sticky top-24">
                  <h3 className="text-2xl font-black text-brand-dark mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-brand-dark mb-2">Address</h4>
                      <div className="flex items-start gap-3">
                        <MapPin size={20} className="text-brand-orange mt-1 flex-shrink-0" />
                        <div className="text-gray-700 text-sm">
                          <p>KiliSafari Organizing</p>
                          <p>Dar es Salaam, Arusha, and Kilimanjaro</p>
                          <p>Tanzania</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-brand-dark mb-2">Phone</h4>
                      <div className="flex items-center gap-3">
                        <Phone size={20} className="text-brand-orange flex-shrink-0" />
                        <a
                          href="tel:+255769418702"
                          className="text-gray-700 hover:text-brand-orange transition-colors text-sm"
                        >
                          +255 769 418 702
                        </a>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-brand-dark mb-2">Email</h4>
                      <div className="flex items-center gap-3">
                        <Mail size={20} className="text-brand-orange flex-shrink-0" />
                        <a
                          href="mailto:Kilisafariorganising@gmail.com"
                          className="text-gray-700 hover:text-brand-orange transition-colors text-sm"
                        >
                          Kilisafariorganising@gmail.com
                        </a>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-brand-dark mb-2">WhatsApp</h4>
                      <div className="flex items-center gap-3">
                        <MessageCircle size={20} className="text-brand-orange flex-shrink-0" />
                        <a
                          href="https://wa.me/255769418702"
                          className="text-gray-700 hover:text-brand-orange transition-colors text-sm"
                        >
                          +255 769 418 702
                        </a>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-brand-dark mb-2">Office Hours</h4>
                      <div className="flex items-start gap-3">
                        <Clock size={20} className="text-brand-orange mt-1 flex-shrink-0" />
                        <div className="text-gray-700 text-sm">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Contact Us Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-12 text-center">Why Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Fast Response</h3>
                <p className="text-gray-600">We respond to all inquiries within 24 hours, often much sooner</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Expert Advice</h3>
                <p className="text-gray-600">10+ years of experience helping travelers plan perfect Tanzania trips</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">Custom Itineraries</h3>
                <p className="text-gray-600">Tailored experiences designed specifically for your needs and budget</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-bold text-brand-dark hover:text-brand-orange">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
