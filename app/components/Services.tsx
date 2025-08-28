"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Lottie from "lottie-react"

// Define services with their JSON paths in /public
const services = [
  { 
    title: "Freight Forwarding", 
    desc: "Air, sea, and land freight solutions with competitive rates and reliable scheduling across global trade routes.", 
    path: "/lottie/freight.json" 
  },
  { 
    title: "Customs Clearance", 
    desc: "Expert customs brokerage services ensuring smooth, compliant clearance processes with minimal delays.", 
    path: "/lottie/customs.json" 
  },
  { 
    title: "Warehousing & Distribution", 
    desc: "Modern warehouse facilities with advanced inventory management and efficient fulfillment services.", 
    path: "/lottie/warehouse.json" 
  },
  { 
    title: "Last-Mile Delivery", 
    desc: "Reliable final-mile delivery solutions ensuring safe and timely deliveries to your customers' doorsteps.", 
    path: "/lottie/delivery.json" 
  },
  { 
    title: "Real-time Tracking", 
    desc: "Advanced tracking technology providing complete shipment visibility and real-time status updates.", 
    path: "/lottie/tracking.json" 
  },
  { 
    title: "Supply Chain Consulting", 
    desc: "Strategic guidance to optimize logistics operations, reduce costs, and improve overall efficiency.", 
    path: "/lottie/consulting.json" 
  },
]

export default function Services() {
  const [animations, setAnimations] = useState<Record<string, any>>({})

  useEffect(() => {
    // Load all Lottie JSONs asynchronously
    services.forEach(async (service) => {
      try {
        const res = await fetch(service.path)
        const json = await res.json()
        setAnimations((prev) => ({ ...prev, [service.title]: json }))
      } catch (error) {
        console.error(`Failed to load animation: ${service.path}`, error)
      }
    })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive logistics solutions designed to streamline your supply chain 
            and accelerate your business growth across East Africa and beyond.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="relative group bg-white border-2 border-transparent hover:border-orange/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-80">
                
                {/* Title at the top */}
                <CardHeader className="text-center py-4 bg-gradient-to-r from-navy/5 to-orange/5 border-b border-gray-100">
                  <CardTitle className="text-xl font-bold text-navy group-hover:text-orange transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                {/* Lottie Animation Container */}
                <div className="relative flex-1 flex items-center justify-center p-6 bg-white">
                  {animations[service.title] ? (
                    <div className="w-32 h-32 group-hover:scale-110 transition-transform duration-500">
                      <Lottie 
                        animationData={animations[service.title]} 
                        loop 
                        className="w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="w-32 h-32 flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-orange border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}

                  {/* Hover Overlay with Description */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/90 to-navy/85 opacity-0 group-hover:opacity-80 transition-all duration-500 flex items-center justify-center p-6">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <motion.p 
                        className="text-white text-base leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {service.desc}
                      </motion.p>
                      
                      {/* Call to Action Button */}
                      <motion.button
                        className="mt-4 px-6 py-2 bg-orange hover:bg-orange-600 text-white font-semibold rounded-full text-sm transition-colors duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-orange/10 group-hover:border-t-orange/30 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[20px] border-r-transparent border-b-[20px] border-b-navy/10 group-hover:border-b-navy/30 transition-colors duration-300"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Need a custom logistics solution? Let's discuss your specific requirements.
          </p>
          <motion.button
            className="px-8 py-4 bg-navy hover:bg-orange text-white font-semibold rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Experts
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}