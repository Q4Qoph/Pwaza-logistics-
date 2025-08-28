"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-32 h-16">
                <Image 
                  src="/logo.png" 
                  alt="Pweza Logistics Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Smart logistics solutions connecting East Africa to global markets through 
              technology, transparency, and reliability.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:text-orange transition-colors duration-200">Freight Forwarding</Link></li>
              <li><Link href="#" className="hover:text-orange transition-colors duration-200">Customs Clearance</Link></li>
              <li><Link href="#" className="hover:text-orange transition-colors duration-200">Warehousing</Link></li>
              <li><Link href="#" className="hover:text-orange transition-colors duration-200">Last-Mile Delivery</Link></li>
              <li><Link href="#" className="hover:text-orange transition-colors duration-200">Shipment Tracking</Link></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-orange transition-colors duration-200">About Us</Link></li>
              <li><Link href="/services" className="hover:text-orange transition-colors duration-200">Our Services</Link></li>
              <li><Link href="/technology" className="hover:text-orange transition-colors duration-200">Technology</Link></li>
              <li><Link href="/contact" className="hover:text-orange transition-colors duration-200">Contact</Link></li>
              <li><Link href="/quote" className="hover:text-orange transition-colors duration-200">Get Quote</Link></li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Follow us for logistics insights and company updates.
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Pweza Logistics. All rights reserved. | 
            <Link href="/privacy" className="hover:text-orange transition-colors duration-200 ml-1">Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-orange transition-colors duration-200 ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}