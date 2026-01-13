'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'

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
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Teachers', href: '#teachers' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'Blog', href: '#blog' },
    { name: 'Resources', href: '#resources' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="nav-bar relative w-full z-40 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-14 h-14 group-hover:opacity-80 transition-opacity duration-300">
              <div className="absolute inset-0 bg-brand-maroon rounded-full opacity-20"></div>
              <Image
                src="/logo.png"
                alt="The Learners' Academy Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-heading font-bold text-xl nav-link">
                The Learners'
              </span>
              <span className="font-heading font-bold text-xl nav-link -mt-1">
                Academy
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="nav-link relative font-body font-medium group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-silver group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button
              onClick={onBookDemo}
              className="btn-primary"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg nav-link hover:opacity-80 transition-opacity duration-300"
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
          <div className="md:hidden py-6 bg-brand-silver border-2 border-brand-blue rounded-lg m-4">
            <div className="flex flex-col gap-4 px-6">
              {navigation.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-2 text-brand-blue hover:text-brand-maroon transition-colors font-body font-medium"
                >
                  {item.name}
                </button>
              ))}
              <button
                className="btn-primary w-fit mt-2"
                onClick={onBookDemo}
              >
                Book a Demo
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}