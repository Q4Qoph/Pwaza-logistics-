"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CheckCircle, Package, Truck, Globe, Clock, Calculator, Loader2 } from "lucide-react"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    origin: '',
    destination: '',
    cargoType: '',
    weight: '',
    dimensions: '',
    timeline: '',
    requirements: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          origin: '',
          destination: '',
          cargoType: '',
          weight: '',
          dimensions: '',
          timeline: '',
          requirements: ''
        })
      } else {
        setError(result.error || 'Failed to send quote request')
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-xl text-center max-w-md"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-navy mb-4">Quote Request Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest. Our team will review your requirements and get back to you within 24 hours with a detailed quote.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-orange hover:bg-orange-600 text-white rounded-full font-semibold transition-colors duration-300"
          >
            Submit Another Request
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Get Your Custom Quote
          </h1>
          <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tell us about your logistics needs and we'll provide a tailored solution with competitive pricing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-navy mb-8">Quote Request Form</h2>
              
              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}
              
              {/* Personal Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors duration-200"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors duration-200"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors duration-200"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Service Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Service Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors duration-200"
                    required
                  >
                    <option value="">Select Service *</option>
                    <option value="freight-forwarding">Freight Forwarding</option>
                    <option value="customs-clearance">Customs Clearance</option>
                    <option value="warehousing">Warehousing & Distribution</option>
                    <option value="last-mile">Last-Mile Delivery</option>
                    <option value="full-service">Complete Logistics Solution</option>
                  </select>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Timeline</option>
                    <option value="urgent">Urgent (1-3 days)</option>
                    <option value="standard">Standard (1-2 weeks)</option>
                    <option value="flexible">Flexible (1 month+)</option>
                  </select>
                </div>
              </div>

              {/* Shipment Details */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Shipment Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <input
                    type="text"
                    name="origin"
                    placeholder="Origin City/Country"
                    value={formData.origin}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors duration-200"
                  />
                  <input
                    type="text"
                    name="destination"
                    placeholder="Destination City/Country"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors duration-200"
                  />
                  <input
                    type="text"
                    name="cargoType"
                    placeholder="Cargo Type"
                    value={formData.cargoType}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors duration-200"
                  />
                  <input
                    type="text"
                    name="weight"
                    placeholder="Approximate Weight (kg)"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors duration-200"
                  />
                </div>
                <input
                  type="text"
                  name="dimensions"
                  placeholder="Dimensions (L x W x H in cm)"
                  value={formData.dimensions}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors duration-200 mb-6"
                />
              </div>

              <textarea
                name="requirements"
                placeholder="Additional requirements or special handling instructions..."
                rows={4}
                value={formData.requirements}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors duration-200 mb-8"
              />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange hover:bg-orange-600 disabled:bg-gray-400 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  'Request Detailed Quote'
                )}
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-navy mb-4">Why Get a Quote?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calculator className="h-5 w-5 text-orange" />
                  <span className="text-gray-700">Competitive pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-orange" />
                  <span className="text-gray-700">24-hour response time</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-orange" />
                  <span className="text-gray-700">Regional expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-orange" />
                  <span className="text-gray-700">Customized solutions</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-navy rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-gray-200 mb-4">
                Our logistics experts are here to help you find the perfect solution.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Phone:</strong> +254 700 000 000</p>
                <p><strong>Email:</strong> quotes@pwezalogistics.com</p>
                <p><strong>Hours:</strong> Mon-Fri 8AM-6PM EAT</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}