"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Package } from "lucide-react";

export default function Hero() {
  // Animation variants for slide-in from left
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInLeftDelayed = {
    hidden: { opacity: 0, x: -80 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const slideInLeftButtons = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Next.js Image Background */}
      <Image
        src="/hero-bg.webp"
        alt="Pweza Logistics - Cargo containers and logistics operations"
        fill
        className="object-cover object-center"
        priority
        quality={90}
        sizes="100vw"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-blue-600/20 z-10"></div>
      
      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl">
          {/* Main Heading - Slide in from left */}
          <motion.h1
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Smart Logistics. <br />
            <span className="text-primary hover:text-orange-600 transition-colors duration-300">
              Seamless Connections.
            </span>
          </motion.h1>
          
          {/* Subtitle - Slide in from left with delay */}
          <motion.p
            variants={slideInLeftDelayed}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl leading-relaxed"
          >
            Speed, visibility, and reliability across East Africa & beyond. 
            Experience technology-driven logistics solutions that keep your business moving forward.
          </motion.p>
          
          {/* CTA Buttons - Slide in from left with more delay */}
          <motion.div
            variants={slideInLeftButtons}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-start items-start"
          >
            <motion.button
              className="bg-primary hover:bg-orange text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
            >
              Request a Quote
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>
            
            <motion.button
              className="bg-transparent border-2 border-white text-white hover:bg-orange hover:border-orange px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
            >
              Track Shipment
              <Package className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Optional: Stats or Key Points - Slide in from left with most delay */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
        >
          <div className="text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-bold text-orange">24/7</div>
            <div className="text-sm text-gray-200">Real-time Tracking</div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-bold text-orange">10+</div>
            <div className="text-sm text-gray-200">Countries Served</div>
          </div>
          <div className="text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-bold text-orange">99.9%</div>
            <div className="text-sm text-gray-200">On-time Delivery</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}