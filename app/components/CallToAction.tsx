"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="relative py-20 text-white overflow-hidden">
      {/* Next.js Image Background */}
      <Image
        src="/logistics-bg.jpg"
        alt="Logistics operations background"
        fill
        className="object-cover object-center"
        quality={85}
        sizes="100vw"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-blue-800/80"></div>
      
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Simplify Your Logistics?
          </h2>
          <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Transform your supply chain with our innovative logistics solutions. 
            Get started today and experience the Pweza difference.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="/quote">
            <motion.button
              className="group bg-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 min-w-[200px] justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Quote
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </Link>

          <Link href="/contact">
            <motion.button
              className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="h-5 w-5" />
              Contact Us
            </motion.button>
          </Link>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-200 mb-4">Need immediate assistance?</p>
          <div className="flex justify-center items-center gap-2 text-orange font-semibold">
            <Phone className="h-5 w-5" />
            <a href="tel:+254700000000" className="hover:text-white transition-colors duration-200">
              +254 700 000 000
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}