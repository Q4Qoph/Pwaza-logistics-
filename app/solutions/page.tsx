"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Lottie from "lottie-react"
import { ArrowRight, Check, Users, Building2, Store, Truck } from "lucide-react"

// Define solutions with their JSON paths
const solutions = [
  { 
    title: "Freight Forwarding", 
    shortDesc: "Comprehensive air, sea, and land freight solutions",
    fullDesc: "Our freight forwarding services cover all modes of transport across East Africa and beyond. We handle documentation, route optimization, and carrier negotiations to ensure your goods move efficiently and cost-effectively.",
    features: ["Multi-modal transport options", "Competitive rates", "Route optimization", "Documentation handling", "Carrier negotiations"],
    path: "/lottie/freight.json" 
  },
  { 
    title: "Customs Clearance", 
    shortDesc: "Expert customs brokerage and compliance services",
    fullDesc: "Navigate complex customs regulations with our expert brokerage team. We handle all documentation, duty calculations, and compliance requirements to ensure smooth clearance at all border points.",
    features: ["Expert customs brokerage", "Compliance management", "Duty optimization", "Documentation preparation", "Border clearance"],
    path: "/lottie/customs.json" 
  },
  { 
    title: "Warehousing & Distribution", 
    shortDesc: "Modern warehouse facilities with inventory management",
    fullDesc: "State-of-the-art warehousing facilities equipped with modern inventory management systems. From storage to fulfillment, we handle your goods with care and precision.",
    features: ["Climate-controlled storage", "Inventory management systems", "Order fulfillment", "Distribution networks", "Real-time reporting"],
    path: "/lottie/warehouse.json" 
  },
  { 
    title: "Last-Mile Delivery", 
    shortDesc: "Reliable final-mile delivery solutions",
    fullDesc: "Ensure your products reach customers safely and on time with our comprehensive last-mile delivery network. We cover urban and rural areas across East Africa.",
    features: ["Urban and rural coverage", "Flexible delivery options", "Real-time tracking", "Proof of delivery", "Returns handling"],
    path: "/lottie/delivery.json" 
  },
  { 
    title: "Real-time Tracking", 
    shortDesc: "Advanced tracking technology for complete visibility",
    fullDesc: "Our proprietary tracking platform provides real-time visibility into your shipments. Monitor progress, receive alerts, and access detailed analytics through our user-friendly dashboard.",
    features: ["Live shipment tracking", "SMS and email alerts", "Analytics dashboard", "API integration", "Mobile app access"],
    path: "/lottie/tracking.json" 
  },
  { 
    title: "Supply Chain Consulting", 
    shortDesc: "Strategic guidance for logistics optimization",
    fullDesc: "Optimize your supply chain with expert consulting services. We analyze your current operations and provide strategic recommendations to reduce costs and improve efficiency.",
    features: ["Supply chain analysis", "Cost optimization", "Process improvement", "Technology integration", "Performance metrics"],
    path: "/lottie/consulting.json" 
  },
]

const industries = [
  {
    icon: <Store className="h-8 w-8" />,
    title: "E-commerce",
    description: "Complete fulfillment solutions for online retailers, from warehousing to last-mile delivery."
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Manufacturing",
    description: "Streamlined supply chain solutions for manufacturers, including raw materials and finished goods logistics."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "SME Businesses",
    description: "Scalable logistics solutions designed for small and medium enterprises looking to expand regionally."
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Import/Export",
    description: "Comprehensive trade facilitation services including customs clearance and freight forwarding."
  }
]

export default function SolutionsPage() {
  const [animations, setAnimations] = useState<Record<string, any>>({})
  const [selectedSolution, setSelectedSolution] = useState(0)

  useEffect(() => {
    // Load all Lottie JSONs asynchronously
    solutions.forEach(async (solution) => {
      try {
        const res = await fetch(solution.path)
        const json = await res.json()
        setAnimations((prev) => ({ ...prev, [solution.title]: json }))
      } catch (error) {
        console.error(`Failed to load animation: ${solution.path}`, error)
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
    <div className="min-h-screen bg-background pt-20">
      
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Comprehensive Logistics Solutions
            </h1>
            <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From freight forwarding to last-mile delivery, we provide end-to-end logistics solutions 
              tailored to your business needs. Our technology-driven approach ensures efficiency, 
              transparency, and reliability at every step.
            </p>
          </motion.div>

          {/* Featured Solution Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-6">
                  {solutions[selectedSolution].title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {solutions[selectedSolution].fullDesc}
                </p>
                
                <div className="space-y-3 mb-8">
                  {solutions[selectedSolution].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-orange flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/quote">
                  <motion.button
                    className="bg-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Quote for This Service
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </Link>
              </div>

              <div className="flex items-center justify-center">
                {animations[solutions[selectedSolution].title] ? (
                  <div className="w-80 h-80">
                    <Lottie 
                      animationData={animations[solutions[selectedSolution].title]} 
                      loop 
                      className="w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="w-80 h-80 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-orange border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Solution Selector */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {solutions.map((solution, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSolution(index)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedSolution === index
                      ? 'border-orange bg-orange/10 text-orange'
                      : 'border-gray-200 hover:border-orange/50 text-gray-600 hover:text-orange'
                  }`}
                >
                  <div className="text-sm font-semibold text-center">
                    {solution.title}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Solutions Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              All Our Solutions
            </h2>
            <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our complete range of logistics services designed to meet your specific business requirements.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {solutions.map((solution, index) => (
              <motion.div key={index} variants={cardVariants}>
                <div className="bg-white border-2 border-gray-100 hover:border-orange/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                  
                  <div className="text-center mb-6">
                    {animations[solution.title] ? (
                      <div className="w-24 h-24 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Lottie 
                          animationData={animations[solution.title]} 
                          loop 
                          className="w-full h-full"
                        />
                      </div>
                    ) : (
                      <div className="w-24 h-24 mx-auto flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-orange border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-4 text-center group-hover:text-orange transition-colors duration-300">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    {solution.shortDesc}
                  </p>

                  <div className="space-y-2 mb-8">
                    {solution.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="h-4 w-4 text-orange flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/quote" className="block">
                    <motion.button
                      className="w-full bg-navy hover:bg-orange text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Industries We Serve
            </h2>
            <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our solutions are designed to meet the unique challenges and requirements of various industries.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {industries.map((industry, index) => (
              <motion.div key={index} variants={cardVariants}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange group-hover:bg-orange group-hover:text-white transition-all duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-orange transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Let our experts analyze your requirements and recommend the best solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <motion.button
                  className="bg-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Custom Quote
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 rounded-full font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Speak with Expert
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}