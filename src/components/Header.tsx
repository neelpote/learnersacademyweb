'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  onBookDemo: () => void
}

export function Header({ onBookDemo }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#pricing' },
    { name: 'Teachers', href: '#teachers' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'Blog', href: '#blog' },
    { name: 'Resources', href: '#resources' },
    { name: 'About', href: '#about' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const headerHeight = 120 // Approximate height of header (logo + nav bar)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="relative w-full z-40">
      {/* Top Branding Bar */}
      <div className="bg-transparent border-b-2 border-brand-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center py-4">
            <button
              onClick={() => scrollToSection('#home')}
              className="flex items-center gap-4 group"
            >
              <div className="relative w-20 h-20 group-hover:opacity-80 transition-opacity duration-300">
                <Image
                  src="/academy Logo - Background Removed.png"
                  alt="The Learners' Academy Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex items-center">
                <span className="font-heading font-bold text-2xl text-brand-maroon">
                  The Learners' Academy
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="bg-brand-maroon">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12 flex-1 justify-center">
              {navigation.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-brand-silver relative font-body font-medium group text-lg transition-colors"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-silver group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Book Demo Button - Desktop */}
            <div className="hidden md:block flex-shrink-0">
              <button
                onClick={onBookDemo}
                className="bg-white text-brand-maroon px-4 py-2 rounded font-medium hover:bg-brand-silver transition-colors text-sm"
              >
                Book Demo
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden w-full flex justify-between items-center">
              <span className="text-brand-silver font-medium">Menu</span>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-brand-silver hover:text-white transition-colors"
              >
                {isMenuOpen ?
                  <X className="h-6 w-6" /> :
                  <Menu className="h-6 w-6" />
                }
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-6 bg-brand-silver border-2 border-brand-silver rounded-lg m-4">
              <div className="flex flex-col gap-4 px-6">
                {navigation.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left py-2 text-brand-maroon hover:text-brand-blue transition-colors font-body font-medium"
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  className="bg-white text-brand-maroon border-2 border-brand-maroon px-6 py-2 rounded font-medium hover:bg-brand-maroon hover:text-white transition-colors w-fit mt-2"
                  onClick={() => {
                    onBookDemo()
                    setIsMenuOpen(false)
                  }}
                >
                  Book a Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}