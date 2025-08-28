"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by businesses across East Africa for reliable, transparent logistics solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              quote: "Pweza Logistics transformed our supply chain with their real-time tracking system. We've reduced delivery times by 30% and our customers love the transparency.",
              author: "Sarah Kimani",
              role: "Operations Manager",
              company: "East Africa Trading Co.",
              rating: 5
            },
            {
              quote: "Their customs clearance expertise saved us countless hours and headaches. Professional, reliable, and always available when we need them.",
              author: "James Ochieng",
              role: "Logistics Director",
              company: "Global Import Solutions",
              rating: 5
            },
            {
              quote: "The API integration was seamless and their warehouse management system is top-notch. Our e-commerce business has scaled efficiently with their support.",
              author: "Amina Hassan",
              role: "CEO",
              company: "AfriTech Marketplace",
              rating: 5
            }
          ].map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-300"></div>
              
              {/* Quote icon */}
              <div className="relative z-10 flex items-center justify-between mb-6">
                <Quote className="h-8 w-8 text-orange" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange text-orange" />
                  ))}
                </div>
              </div>
              
              {/* Quote text */}
              <p className="text-gray-700 mb-8 leading-relaxed text-base relative z-10 italic">
                {testimonial.quote}
              </p>
              
              {/* Author info */}
              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 bg-gradient-to-br from-navy to-orange rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div>
                    <div className="font-semibold text-navy group-hover:text-orange transition-colors duration-200">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-orange font-semibold">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to join our satisfied clients?
          </p>
          <motion.button
            className="px-8 py-4 bg-navy hover:bg-orange text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}