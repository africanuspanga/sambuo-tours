"use client"

import type React from "react"
import { useState } from "react"
import { X } from "lucide-react"
import { company } from "@/lib/sambuo-data"

interface BookingModalProps {
  tourName: string
  trigger?: React.ReactNode
  children?: React.ReactNode
}

export function BookingModal({ tourName, trigger, children }: BookingModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    travelDate: "",
    duration: "",
    adults: "1",
    children: "0",
    accommodation: "Mid-Range",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message
    const message = `*SAFARI BOOKING REQUEST - SAMBUO TOURS*%0A%0A*Tour:* ${tourName}%0A%0A*Contact Details:*%0AName: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0A*Trip Details:*%0ATravel Date: ${formData.travelDate}%0ADuration: ${formData.duration}%0AAdults: ${formData.adults}%0AChildren: ${formData.children}%0AAccommodation: ${formData.accommodation}%0A%0A*Message:*%0A${formData.message || "No additional message"}`

    // Open WhatsApp
    window.open(`https://wa.me/${company.whatsapp.replace(/\+/g, "")}?text=${message}`, "_blank")

    // Close modal and reset form
    setIsOpen(false)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      travelDate: "",
      duration: "",
      adults: "1",
      children: "0",
      accommodation: "Mid-Range",
      message: "",
    })
  }

  const triggerElement = trigger || children

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="inline-block cursor-pointer">
        {triggerElement}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-brand-chocolate/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-brand-chocolate text-white p-6 flex items-center justify-between rounded-t-2xl">
              <div>
                <h2 className="text-xl md:text-2xl font-serif font-bold">Book Your Safari</h2>
                <p className="text-brand-gold font-medium mt-1 text-sm">{tourName}</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white/70 hover:text-white transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid md:grid-cols-2 gap-5">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-semibold text-brand-chocolate mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-gray-900 transition-all"
                    placeholder="Cletus"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-semibold text-brand-chocolate mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-gray-900 transition-all"
                    placeholder="Olomy"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-brand-chocolate mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-gray-900 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-brand-chocolate mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 234 567 890"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-gray-900 transition-all"
                  />
                </div>

                {/* Travel Date */}
                <div>
                  <label className="block text-sm font-semibold text-brand-chocolate mb-2">
                    Travel Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-gray-900 transition-all"
                  />
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-sm font-semibold text-brand-chocolate mb-2">
                    Duration <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="e.g., 7 Days"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-gray-900 transition-all"
                  />
                </div>

                {/* Adults */}
                <div>
                  <label className="block text-sm font-semibold text-brand-chocolate mb-2">
                    Adults <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={formData.adults}
                    onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-gray-900 transition-all"
                  />
                </div>

                {/* Children */}
                <div>
                  <label className="block text-sm font-semibold text-brand-chocolate mb-2">Children</label>
                  <input
                    type="number"
                    min="0"
                    value={formData.children}
                    onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 text-gray-900 transition-all"
                  />
                </div>
              </div>

              {/* Accommodation Type */}
              <div className="mt-5">
                <label className="block text-sm font-semibold text-brand-chocolate mb-3">
                  Accommodation Preference
                </label>
                <div className="flex flex-wrap gap-4">
                  {["Budget", "Mid-Range", "Luxury"].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="accommodation"
                        value={type}
                        checked={formData.accommodation === type}
                        onChange={(e) => setFormData({ ...formData, accommodation: e.target.value })}
                        className="w-4 h-4 text-brand-gold border-gray-300 focus:ring-brand-gold"
                      />
                      <span className="text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label className="block text-sm font-semibold text-brand-chocolate mb-2">Additional Message</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your preferences, dietary requirements, or any special requests..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 resize-none text-gray-900 transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-6 bg-brand-gold text-brand-chocolate py-4 rounded-xl text-lg font-bold hover:bg-brand-gold/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Booking Request
              </button>

              <p className="text-center text-xs text-gray-500 mt-4">
                Your request will be sent via WhatsApp to our team
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
