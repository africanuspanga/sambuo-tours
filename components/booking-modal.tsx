"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

interface BookingModalProps {
  tourName: string
  children: React.ReactNode
}

export function BookingModal({ tourName, children }: BookingModalProps) {
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
    const message = `*TOUR BOOKING REQUEST*%0A%0A*Tour:* ${tourName}%0A%0A*Contact Details:*%0AName: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0A*Trip Details:*%0ATravel Date: ${formData.travelDate}%0ADuration: ${formData.duration}%0AAdults: ${formData.adults}%0AChildren: ${formData.children}%0AAccommodation: ${formData.accommodation}%0A%0A*Message:*%0A${formData.message || "No additional message"}`

    // Open WhatsApp
    window.open(`https://wa.me/255769418702?text=${message}`, "_blank")

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

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">BOOK THIS TOUR NOW</h2>
                <p className="text-brand-orange font-semibold mt-1">{tourName}</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-brand-orange rounded-lg focus:outline-none focus:border-brand-dark text-gray-900"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-brand-orange rounded-lg focus:outline-none focus:border-brand-dark text-gray-900"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-brand-orange rounded-lg focus:outline-none focus:border-brand-dark text-gray-900"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="123-456-7890"
                    className="w-full px-4 py-3 border-2 border-brand-orange rounded-lg focus:outline-none focus:border-brand-dark text-gray-900"
                  />
                </div>

                {/* Travel Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    When Are You Planning to Come? <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-brand-orange rounded-lg focus:outline-none focus:border-brand-dark text-gray-900"
                  />
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    How long do you plan to stay? <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="e.g., 7 Days"
                    className="w-full px-4 py-3 border-2 border-brand-orange rounded-lg focus:outline-none focus:border-brand-dark text-gray-900"
                  />
                </div>

                {/* Adults */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    No. of Adults <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={formData.adults}
                    onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-brand-orange rounded-lg focus:outline-none focus:border-brand-dark text-gray-900"
                  />
                </div>

                {/* Children */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">No. of Children</label>
                  <input
                    type="number"
                    min="0"
                    value={formData.children}
                    onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-brand-orange rounded-lg focus:outline-none focus:border-brand-dark text-gray-900"
                  />
                </div>
              </div>

              {/* Accommodation Type */}
              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  What type of accommodation do you prefer?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="accommodation"
                      value="Budget"
                      checked={formData.accommodation === "Budget"}
                      onChange={(e) => setFormData({ ...formData, accommodation: e.target.value })}
                      className="w-4 h-4 text-brand-orange"
                    />
                    <span className="text-gray-700">Budget</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="accommodation"
                      value="Mid-Range"
                      checked={formData.accommodation === "Mid-Range"}
                      onChange={(e) => setFormData({ ...formData, accommodation: e.target.value })}
                      className="w-4 h-4 text-brand-orange"
                    />
                    <span className="text-gray-700">Mid-Range</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="accommodation"
                      value="Luxury"
                      checked={formData.accommodation === "Luxury"}
                      onChange={(e) => setFormData({ ...formData, accommodation: e.target.value })}
                      className="w-4 h-4 text-brand-orange"
                    />
                    <span className="text-gray-700">Luxury</span>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us more about your trip preferences..."
                  className="w-full px-4 py-3 border-2 border-brand-orange rounded-lg focus:outline-none focus:border-brand-dark resize-none text-gray-900"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-8 bg-brand-orange text-white py-4 rounded-lg text-lg font-bold hover:bg-opacity-90 transition-colors"
              >
                BOOK THIS TOUR
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
