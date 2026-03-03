"use client"

import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle, Send } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"
import Image from "next/image"
import { company } from "@/lib/sambuo-data"

const faqs = [
  {
    question: "What's included in your safari packages?",
    answer:
      "Our safari packages include professional English-speaking guides, all park entrance fees, accommodation, meals during safari, transportation in 4x4 safari vehicles with viewing roof, and airport transfers. Camping equipment is provided for camping safaris. Specific inclusions vary by package - contact us for detailed information.",
  },
  {
    question: "Do I need a visa to visit Tanzania?",
    answer:
      "Most visitors require a visa to enter Tanzania. You can obtain a visa on arrival at major entry points or apply for an e-visa online in advance. US citizens pay $100 for a multiple-entry visa, while most other nationalities pay $50 for a single-entry visa. We recommend checking with your local Tanzanian embassy for the most current requirements.",
  },
  {
    question: "When is the best time to visit Tanzania?",
    answer:
      "Tanzania is a fantastic year-round destination. For wildlife safaris, June to October (dry season) offers excellent game viewing. December to March is ideal for witnessing the Serengeti calving season. For climbing Kilimanjaro, January-March and June-October provide the best conditions. Zanzibar is wonderful from June to October and December to February.",
  },
  {
    question: "How do I book a tour with Sambuo?",
    answer:
      "Simply fill out our contact form with your preferences, or reach out via WhatsApp, email, or phone. We'll discuss your interests, create a custom itinerary tailored to your needs, and provide a detailed quote. Once you're satisfied with the plan, we'll confirm your booking with a deposit.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, major credit cards, and PayPal. A deposit (typically 30%) is required to confirm your booking, with the balance due 30 days before your arrival. We'll provide detailed payment instructions and a secure payment link upon booking confirmation.",
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
*New Safari Inquiry - SAMBUO TOURS*

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
    window.open(`https://wa.me/${company.whatsapp.replace(/\+/g, "")}?text=${encodedMessage}`, "_blank")

    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-brand-cream">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-brand-chocolate">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/contact-hero.jpg')] bg-cover bg-center" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-chocolate/80 to-brand-chocolate" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full text-brand-gold text-sm font-medium tracking-widest uppercase mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Let&apos;s Plan Your Adventure
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Ready to explore Tanzania? We&apos;re here to help you craft the perfect safari experience.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-chocolate mb-6">
                    Send Us Your Inquiry
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName" className="text-brand-chocolate font-medium">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="fullName"
                          required
                          placeholder="John Doe"
                          className="mt-2 rounded-xl border-gray-200 focus:border-brand-gold focus:ring-brand-gold"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-brand-chocolate font-medium">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="mt-2 rounded-xl border-gray-200 focus:border-brand-gold focus:ring-brand-gold"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-brand-chocolate font-medium">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 234 567 8900"
                          className="mt-2 rounded-xl border-gray-200 focus:border-brand-gold focus:ring-brand-gold"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label className="text-brand-chocolate font-medium">Country</Label>
                        <Select onValueChange={(value) => handleInputChange("country", value)}>
                          <SelectTrigger className="mt-2 rounded-xl border-gray-200 focus:border-brand-gold focus:ring-brand-gold">
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
                        <Label className="text-brand-chocolate font-medium">Tour Interest</Label>
                        <Select onValueChange={(value) => handleInputChange("tourInterest", value)}>
                          <SelectTrigger className="mt-2 rounded-xl border-gray-200 focus:border-brand-gold focus:ring-brand-gold">
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
                        <Label htmlFor="travelers" className="text-brand-chocolate font-medium">
                          Number of Travelers
                        </Label>
                        <Input
                          id="travelers"
                          type="number"
                          min="1"
                          placeholder="2"
                          className="mt-2 rounded-xl border-gray-200 focus:border-brand-gold focus:ring-brand-gold"
                          value={formData.travelers}
                          onChange={(e) => handleInputChange("travelers", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="travelDates" className="text-brand-chocolate font-medium">
                          Preferred Travel Dates
                        </Label>
                        <Input
                          id="travelDates"
                          type="date"
                          className="mt-2 rounded-xl border-gray-200 focus:border-brand-gold focus:ring-brand-gold"
                          value={formData.travelDates}
                          onChange={(e) => handleInputChange("travelDates", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label className="text-brand-chocolate font-medium">Budget Range</Label>
                        <Select onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger className="mt-2 rounded-xl border-gray-200 focus:border-brand-gold focus:ring-brand-gold">
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
                      <Label htmlFor="message" className="text-brand-chocolate font-medium">
                        Your Message
                      </Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your dream Tanzania adventure..."
                        className="mt-2 rounded-xl border-gray-200 focus:border-brand-gold focus:ring-brand-gold resize-none"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full md:w-auto bg-brand-gold text-brand-chocolate font-bold py-4 px-8 rounded-full hover:bg-brand-gold/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      Send Inquiry
                    </button>

                    {formSubmitted && (
                      <div className="flex items-center gap-2 text-brand-ocean bg-brand-ocean/10 p-4 rounded-xl">
                        <CheckCircle size={20} />
                        <span className="font-medium">Thank you! We&apos;ll get back to you within 24 hours.</span>
                      </div>
                    )}
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="bg-brand-chocolate text-white rounded-3xl p-8 sticky top-28">
                  <h3 className="text-2xl font-serif font-bold mb-6 text-brand-gold">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin size={18} className="text-brand-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Address</h4>
                        <p className="text-white/70 text-sm">{company.address}</p>
                        <p className="text-white/70 text-sm">{company.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone size={18} className="text-brand-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <a
                          href={`tel:${company.phone}`}
                          className="text-white/70 hover:text-brand-gold transition-colors text-sm"
                        >
                          {company.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail size={18} className="text-brand-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a
                          href={`mailto:${company.email}`}
                          className="text-white/70 hover:text-brand-gold transition-colors text-sm"
                        >
                          {company.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageCircle size={18} className="text-brand-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">WhatsApp</h4>
                        <a
                          href={`https://wa.me/${company.whatsapp.replace(/\+/g, "")}`}
                          className="text-white/70 hover:text-brand-gold transition-colors text-sm"
                        >
                          {company.whatsapp}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock size={18} className="text-brand-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Office Hours</h4>
                        <p className="text-white/70 text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="text-white/70 text-sm">Saturday: 9:00 AM - 4:00 PM</p>
                        <p className="text-white/70 text-sm">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Contact Us Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-brand-gold/10 rounded-full text-brand-gold text-sm font-medium tracking-widest uppercase mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate">
                The Sambuo Promise
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Fast Response",
                  description: "We respond to all inquiries within 24 hours, often much sooner. Your adventure planning starts immediately.",
                },
                {
                  icon: CheckCircle,
                  title: "Expert Advice",
                  description: `${company.yearsExperience}+ years of experience helping travelers plan perfect Tanzania trips with insider knowledge.`,
                },
                {
                  icon: MapPin,
                  title: "Custom Itineraries",
                  description: "Tailored experiences designed specifically for your interests, pace, and budget. No cookie-cutter tours.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-brand-cream rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <item.icon size={32} className="text-brand-gold" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brand-chocolate mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-brand-ocean/10 rounded-full text-brand-ocean text-sm font-medium tracking-widest uppercase mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-gray-100 rounded-2xl px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-brand-chocolate hover:text-brand-ocean py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
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
