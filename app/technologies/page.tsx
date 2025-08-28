"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  CheckCircle, 
  Play, 
  Truck, 
  MapPin, 
  Smartphone, 
  Monitor, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Code, 
  Globe,
  ArrowRight,
  Eye,
  Bell,
  Database
} from "lucide-react"

const techFeatures = [
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Real-time Visibility",
    description: "Track your shipments in real-time with GPS-enabled monitoring and live status updates."
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: "Smart Notifications",
    description: "Receive instant alerts via SMS, email, or push notifications for shipment milestones."
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Advanced Analytics",
    description: "Gain insights with comprehensive reporting and performance analytics dashboards."
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "API Integration",
    description: "Seamlessly integrate with your existing systems using our robust REST APIs."
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud-based Platform",
    description: "Access your logistics data anywhere with our secure, scalable cloud infrastructure."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Bank-grade security protocols protect your sensitive logistics and business data."
  }
]

const platforms = [
  {
    icon: <Monitor className="h-8 w-8" />,
    title: "Web Dashboard",
    description: "Comprehensive web-based control center for managing all your logistics operations.",
    features: ["Real-time tracking maps", "Shipment management", "Analytics & reporting", "User management", "API documentation"]
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Apps",
    description: "Native iOS and Android apps for on-the-go logistics management and tracking.",
    features: ["Mobile tracking", "Push notifications", "Barcode scanning", "Offline capability", "Driver apps"]
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "API & Integrations",
    description: "Robust APIs and pre-built integrations with popular business management systems.",
    features: ["REST APIs", "Webhook support", "ERP integrations", "E-commerce plugins", "Custom solutions"]
  }
]

const trackingSteps = [
  { status: "Order Received", time: "2 hours ago", completed: true, description: "Your shipment has been registered in our system" },
  { status: "Documentation Complete", time: "1.5 hours ago", completed: true, description: "All shipping documents have been processed" },
  { status: "In Transit", time: "45 minutes ago", completed: true, description: "Package is on route to destination" },
  { status: "Out for Delivery", time: "Expected in 2 hours", completed: false, description: "Package will be delivered today" },
  { status: "Delivered", time: "Pending", completed: false, description: "Package delivered to recipient" }
]

export default function TechnologyPage() {
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
              Technology & Innovation
            </h1>
            <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our cutting-edge technology platform provides complete transparency and control over 
              your logistics operations. Experience the future of supply chain management with 
              real-time tracking, advanced analytics, and seamless integrations.
            </p>
          </motion.div>

          {/* Hero Image/Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-6">
                  Advanced Digital Platform
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our state-of-the-art digital platform combines GPS tracking, IoT sensors, 
                  and machine learning to provide unprecedented visibility into your supply chain operations.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Real-time shipment tracking and notifications",
                    "Automated customs documentation",
                    "Performance analytics and reporting",
                    "API integration for seamless connectivity",
                    "Mobile-responsive client portal",
                    "24/7 system monitoring and support"
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 group"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                      <CheckCircle className="h-5 w-5 text-orange flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-gray-700 group-hover:text-navy transition-colors duration-200">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button 
                  className="bg-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="h-5 w-5" />
                  Watch Demo
                </motion.button>
              </div>

              {/* Live Tracking Demo */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-navy/5 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-orange/10 rounded-lg">
                      <Truck className="h-6 w-6 text-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">Live Tracking Dashboard</h4>
                      <p className="text-sm text-gray-500">Shipment #PW2024001</p>
                    </div>
                  </div>

                  {/* Route Progress */}
                  <div className="space-y-4">
                    {trackingSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className={`w-4 h-4 rounded-full mt-1 flex-shrink-0 ${
                          step.completed ? 'bg-orange' : 'bg-gray-300'
                        } ${!step.completed && index === 3 ? 'bg-orange animate-pulse' : ''}`}></div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <span className={`font-medium text-sm ${
                              step.completed ? 'text-navy' : 'text-gray-500'
                            }`}>{step.status}</span>
                            <span className="text-xs text-gray-400">{step.time}</span>
                          </div>
                          <p className="text-xs text-gray-500">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Live Stats */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-orange">72%</div>
                      <div className="text-xs text-gray-500">Progress</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-navy">2.5h</div>
                      <div className="text-xs text-gray-500">ETA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Features */}
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
              Powerful Features
            </h2>
            <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our technology stack is designed to provide maximum efficiency, security, and scalability 
              for modern logistics operations.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {techFeatures.map((feature, index) => (
              <motion.div key={index} variants={cardVariants}>
                <div className="bg-white border-2 border-gray-100 hover:border-orange/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
                  <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange group-hover:bg-orange group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-orange transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
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
              Multi-Platform Access
            </h2>
            <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access your logistics operations from anywhere with our comprehensive suite of 
              web, mobile, and API solutions.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {platforms.map((platform, index) => (
              <motion.div key={index} variants={cardVariants}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                      {platform.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-4">
                      {platform.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {platform.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-orange flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 lg:py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Seamless Integrations
            </h2>
            <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Connect with your existing business systems through our robust APIs and 
              pre-built integrations with popular platforms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Popular Integrations</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Shopify", "WooCommerce", "SAP", "Salesforce", "QuickBooks", "Odoo", "Microsoft Dynamics", "Custom ERP"].map((integration, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm border border-white/20">
                    <span className="font-semibold">{integration}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-200 leading-relaxed">
                Don't see your platform? Our development team can create custom integrations 
                to fit your specific business needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <Code className="h-8 w-8 text-orange" />
                <h4 className="text-xl font-bold">API Documentation</h4>
              </div>
              <p className="text-gray-200 mb-6">
                Comprehensive RESTful APIs with detailed documentation, code examples, 
                and SDKs for popular programming languages.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>REST API</span>
                  <span className="text-orange">Available</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Webhooks</span>
                  <span className="text-orange">Available</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>SDKs</span>
                  <span className="text-orange">Node.js, Python, PHP</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Rate Limiting</span>
                  <span className="text-orange">1000 req/min</span>
                </div>
              </div>
            </motion.div>
          </div>
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
              Ready to Experience Our Technology?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Schedule a demo to see our platform in action or start integrating 
              with our APIs today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="h-5 w-5" />
                Schedule Demo
              </motion.button>
              <Link href="/contact">
                <motion.button
                  className="bg-navy hover:bg-orange text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 justify-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="h-5 w-5" />
                  API Documentation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}