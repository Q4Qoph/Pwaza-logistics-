"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="w-full bg-background text-foreground shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="relative w-24 h-12 sm:w-28 sm:h-14 lg:w-32 lg:h-24"> 
              <Image 
                src="/logo.png" 
                alt="Pweza Logistics Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm xl:text-base font-medium">
            <Link href="/" className="hover:text-orange transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-orange transition-colors duration-200">
              About Us
            </Link>
            <Link href="/solutions" className="hover:text-orange transition-colors duration-200">
              Solutions
            </Link>
            <Link href="/technologies" className="hover:text-orange transition-colors duration-200">
              Technologies
            </Link>
            <Link href="/contact" className="hover:text-orange transition-colors duration-200">
              Contact Us
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/quote"
              className="px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-primary text-white text-sm lg:text-base font-semibold hover:bg-orange transition-colors duration-200 whitespace-nowrap"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <nav className="py-4 space-y-4 border-t border-gray-200">
            <Link 
              href="/" 
              className="block py-2 text-base font-medium hover:text-orange transition-colors duration-200"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block py-2 text-base font-medium hover:text-orange transition-colors duration-200"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link 
              href="/solutions" 
              className="block py-2 text-base font-medium hover:text-orange transition-colors duration-200"
              onClick={closeMenu}
            >
              Solutions
            </Link>
            <Link 
              href="/technologies" 
              className="block py-2 text-base font-medium hover:text-orange transition-colors duration-200"
              onClick={closeMenu}
            >
              Technologies
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 text-base font-medium hover:text-orange transition-colors duration-200"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
            
            {/* Mobile CTA Button */}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/quote"
                className="block w-full px-6 py-3 rounded-full bg-primary text-white text-center font-semibold hover:bg-orange transition-colors duration-200"
                onClick={closeMenu}
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}