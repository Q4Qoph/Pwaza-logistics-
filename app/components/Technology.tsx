"use client"
import { motion } from "framer-motion"
import { CheckCircle, Play, Truck, MapPin } from "lucide-react"

export default function Technology() {
  return (
    <section id="technology" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold text-navy mb-4"
          >
            Technology & Tracking
          </motion.h2>
          <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Our state-of-the-art digital platform provides complete transparency 
            and control over your logistics operations.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Features List */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-semibold text-navy">
                Advanced Dashboard Features
              </h3>
              <div className="space-y-4">
                {[
                  "Real-time shipment tracking and notifications",
                  "Automated customs documentation",
                  "Performance analytics and reporting",
                  "API integration for seamless connectivity",
                  "Mobile-responsive client portal",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-orange flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-700 group-hover:text-navy transition-colors duration-200">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button 
              className="bg-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="h-5 w-5" />
              View Demo
            </motion.button>
          </motion.div>

          {/* Enhanced Tracking Widget Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white shadow-xl rounded-3xl p-8 border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-navy/5 rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative z-10 space-y-6">
              
              {/* Header with icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange/10 rounded-lg">
                  <Truck className="h-6 w-6 text-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Live Tracking Demo</h4>
                  <p className="text-sm text-gray-500">Real-time shipment updates</p>
                </div>
              </div>

              {/* Shipment Info */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-orange rounded-full animate-pulse"></div>
                  <span className="text-navy font-semibold">Shipment #PW2024001</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Origin:</span>
                    </div>
                    <span className="font-medium text-gray-800">Mombasa, KE</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-gray-600">Destination:</span>
                    </div>
                    <span className="font-medium text-gray-800">Kampala, UG</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Status:</span>
                    <span className="px-3 py-1 bg-orange/20 text-orange font-semibold rounded-full text-sm">
                      In Transit
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Progress Section */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Tracking Progress</span>
                  <span className="text-sm text-orange font-semibold">70% Complete</span>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div 
                      className="bg-gradient-to-r from-orange to-orange-600 h-3 rounded-full relative overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </motion.div>
                  </div>
                </div>
                
                {/* ETA */}
                <div className="text-center py-3 bg-navy/5 rounded-lg">
                  <p className="text-sm text-gray-600">Estimated Arrival</p>
                  <p className="font-semibold text-navy">Tomorrow, 2:30 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}