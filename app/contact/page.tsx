"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2 } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      const response = await fetch('/api/contact', {
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
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        })
      } else {
        setError(result.error || 'Failed to send contact message')
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

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Our Office",
      details: [
        "Pweza Logistics Hub",
        "Mombasa Road, Nairobi",
        "Kenya, East Africa"
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: [
        "+254 700 000 000",
        "+254 800 000 000",
        "24/7 Emergency: +254 900 000 000"
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: [
        "info@pwezalogistics.com",
        "support@pwezalogistics.com",
        "sales@pwezalogistics.com"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8AM - 6PM",
        "Saturday: 9AM - 2PM",
        "Sunday: Emergency only"
      ]
    }
  ]

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
          <h2 className="text-2xl font-bold text-navy mb-4">Message Sent Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-orange hover:bg-orange-600 text-white rounded-full font-semibold transition-colors duration-300"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Contact Us
          </h1>
          <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to streamline your logistics? Get in touch with our expert team and 
            discover how we can help your business thrive.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-navy mb-8">Send us a Message</h2>
              
              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors duration-200"
                  required
                >
                  <option value="">Select Subject *</option>
                  <option value="general">General Inquiry</option>
                  <option value="quote">Request a Quote</option>
                  <option value="support">Customer Support</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="careers">Careers</option>
                  <option value="other">Other</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Your message... *"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent transition-colors duration-200"
                  required
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-orange hover:bg-orange-600 disabled:bg-gray-400 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange/10 rounded-lg text-orange">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-navy mb-4">
                Find Us Here
              </h3>
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Interactive map would go here</p>
                  <p className="text-xs">Mombasa Road, Nairobi</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What regions do you serve?",
                answer: "We provide comprehensive logistics services across East Africa and have partnerships for global reach."
              },
              {
                question: "How do I track my shipment?",
                answer: "Use our online tracking system with your shipment ID, or contact our support team for real-time updates."
              },
              {
                question: "What are your payment terms?",
                answer: "We offer flexible payment options including credit terms for established clients and various payment methods."
              },
              {
                question: "Do you handle customs clearance?",
                answer: "Yes, we provide full customs brokerage services with expert knowledge of East African trade regulations."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h4 className="text-lg font-semibold text-navy mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}