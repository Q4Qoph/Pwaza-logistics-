"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Users, Globe, Award, Target, Eye, Heart } from "lucide-react"

const stats = [
  { number: "500+", label: "Happy Clients" },
  { number: "10k+", label: "Shipments Delivered" },
  { number: "15+", label: "Regional Partners" },
  { number: "99.9%", label: "On-time Delivery" }
]

const values = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our operations, from customer service to delivery execution."
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: "Transparency",
    description: "Complete visibility and honest communication at every step of your logistics journey."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Reliability",
    description: "Consistent, dependable service that you can count on for your most critical shipments."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Innovation",
    description: "Leveraging cutting-edge technology to continuously improve our services and your experience."
  }
]

const whyChooseUs = [
  {
    title: "Real-time Digital Tracking",
    description: "Complete shipment visibility with live updates and detailed analytics dashboard.",
    icon: "📊"
  },
  {
    title: "Regional Expertise", 
    description: "Deep understanding of East African markets, regulations, and trade routes.",
    icon: "🌍"
  },
  {
    title: "Scalable Solutions",
    description: "Flexible services that grow with your business, from startups to enterprises.",
    icon: "📈"
  },
  {
    title: "Trusted Partner",
    description: "Proven track record with global and regional clients across diverse industries.",
    icon: "✅"
  }
]

export default function AboutUsPage() {
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
              About Pweza Logistics
            </h1>
            <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              East Africa's premier logistics innovator, transforming how businesses move goods 
              across the continent and beyond through cutting-edge technology and regional expertise.
            </p>
          </motion.div>

          {/* Company Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-navy">
                Revolutionizing East African Logistics
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are East Africa's premier logistics innovator, transforming how businesses 
                move goods across the continent and beyond. Our cutting-edge technology platform 
                delivers unprecedented visibility and control over your supply chain.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From freight forwarding to last-mile delivery, we combine regional expertise 
                with global best practices to ensure your cargo arrives safely, on time, 
                every time. Our digital-first approach means you're always connected to 
                your shipments.
              </p>
              <Link href="/quote">
                <motion.button
                  className="bg-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
            </div>

            <div className="relative">
              <Image 
                src="/about-img.png"
                alt="Pweza Logistics truck illustration"
                width={600}
                height={400}
                className="object-contain drop-shadow-2xl w-full h-auto"
                priority
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute top-1/2 -right-6 w-6 h-6 bg-navy rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-2 left-1/3 w-4 h-4 bg-orange rounded-full opacity-40 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={cardVariants} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-orange mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-navy to-blue-800 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-orange rounded-full"></div>
                  <h3 className="text-2xl lg:text-3xl font-bold">Our Mission</h3>
                </div>
                
                <p className="text-gray-100 leading-relaxed text-lg mb-6">
                  To be East Africa's most trusted logistics partner, connecting businesses 
                  to global markets through innovative, technology-driven supply chain solutions 
                  that prioritize speed, transparency, and reliability.
                </p>
                
                {/* Mission highlight points */}
                <div className="flex flex-wrap gap-2">
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
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-orange to-orange-600 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-navy/20 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <h3 className="text-2xl lg:text-3xl font-bold">Our Vision</h3>
                </div>
                
                <p className="text-white/90 leading-relaxed text-lg mb-6">
                  To revolutionize logistics across Africa by creating a seamless, 
                  technology-enabled supply chain network that empowers businesses 
                  of all sizes to compete globally and drive economic growth.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                    Innovation
                  </span>
                  <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                    Growth
                  </span>
                  <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                    Empowerment
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide every decision we make and every service we provide.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={cardVariants}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange group-hover:bg-orange group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-orange transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-navy text-white relative overflow-hidden">
        <Image
          src="/whychoose-bg.jpg"
          alt="Logistics operations background"
          fill
          className="object-cover object-center opacity-20"
          quality={85}
          sizes="100vw"
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose Pweza Logistics?</h2>
            <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge technology with deep regional expertise to deliver 
              exceptional logistics solutions that drive your business forward.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((benefit, index) => (
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

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join hundreds of satisfied clients who trust us with their most important shipments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <motion.button
                  className="bg-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 justify-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Your Quote
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="bg-navy hover:bg-orange text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 justify-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Our Team
                  <Users className="h-5 w-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}