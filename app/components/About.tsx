"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  // Animation variants
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full bg-background text-foreground py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div 
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-navy mb-6 leading-tight">
                About Pweza Logistics
              </h2>
              <div className="w-20 h-1 bg-orange mb-8"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                We are East Africa's premier logistics innovator, transforming how businesses 
                move goods across the continent and beyond. Our cutting-edge technology platform 
                delivers unprecedented visibility and control over your supply chain.
              </p>
              
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                From freight forwarding to last-mile delivery, we combine regional expertise 
                with global best practices to ensure your cargo arrives safely, on time, 
                every time. Our digital-first approach means you're always connected to 
                your shipments.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-orange">500+</div>
                <div className="text-sm text-gray-500 font-medium">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-orange">10k+</div>
                <div className="text-sm text-gray-500 font-medium">Shipments Delivered</div>
              </div>
              <div className="text-center lg:text-left col-span-2 sm:col-span-1">
                <div className="text-3xl lg:text-4xl font-bold text-orange">15+</div>
                <div className="text-sm text-gray-500 font-medium">Regional Partners</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Truck Image with Mission Card */}
          <motion.div 
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex flex-col items-center lg:items-end space-y-8"
          >
            {/* Truck Image */}
            <div className="relative w-full max-w-lg">
              <Image 
                src="/about-img.png"
                alt="Pweza Logistics truck illustration"
                width={600}
                height={400}
                className="object-contain drop-shadow-2xl w-full h-auto"
                priority
              />
              
              {/* Floating elements around truck */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute top-1/2 -right-6 w-6 h-6 bg-navy rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-2 left-1/3 w-4 h-4 bg-orange rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Mission Card */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="relative w-full max-w-md"
            >
              <div className="bg-gradient-to-br from-navy to-blue-800 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-orange rounded-full"></div>
                    <h3 className="text-2xl lg:text-3xl font-bold">Our Mission</h3>
                  </div>
                  
                  <p className="text-gray-100 leading-relaxed text-base lg:text-lg">
                    To be East Africa's most trusted logistics partner, connecting businesses 
                    to global markets through innovative, technology-driven supply chain solutions 
                    that prioritize speed, transparency, and reliability.
                  </p>
                  
                  {/* Mission highlight points */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1 bg-orange/20 text-orange text-sm font-medium rounded-full">
                      Speed
                    </span>
                    <span className="px-3 py-1 bg-orange/20 text-orange text-sm font-medium rounded-full">
                      Transparency
                    </span>
                    <span className="px-3 py-1 bg-orange/20 text-orange text-sm font-medium rounded-full">
                      Reliability
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}