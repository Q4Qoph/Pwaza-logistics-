"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function WhyChooseUs() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section
      id="why-choose-us"
      className="relative py-20 text-white overflow-hidden"
    >
      {/* Next.js Image Background */}
      <Image
        src="/whychoose-bg.jpg"
        alt="Logistics operations background"
        fill
        className="object-cover object-center"
        quality={85}
        sizes="100vw"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-blue-800/80"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Choose Pweza Logistics?</h2>
          <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology with deep regional expertise to deliver 
            exceptional logistics solutions that drive your business forward.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              icon: "📊",
              title: "Real-time Digital Tracking",
              description:
                "Complete shipment visibility with live updates and detailed analytics dashboard.",
            },
            {
              icon: "🌍",
              title: "Regional Expertise",
              description:
                "Deep understanding of East African markets, regulations, and trade routes.",
            },
            {
              icon: "📈",
              title: "Scalable Solutions",
              description:
                "Flexible services that grow with your business, from startups to enterprises.",
            },
            {
              icon: "✅",
              title: "Trusted Partner",
              description:
                "Proven track record with global and regional clients across diverse industries.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 hover:border-orange/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-orange transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}