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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-3 group animate-fade-in-left"
          >
            <div className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-brand rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <Image
                src="/logo.png"
                alt="The Learners' Academy Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-sans font-bold text-xl text-brand-red group-hover:text-red-600 transition-colors">
                The Learners'
              </span>
              <span className="font-sans font-bold text-xl text-brand-blue -mt-1 group-hover:text-blue-600 transition-colors">
                Academy
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 animate-fade-in-up">
            {navigation.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative text-zinc-700 dark:text-zinc-300 hover:text-brand-red transition-all duration-300 font-medium group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-brand group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <Button 
              size="sm" 
              onClick={onBookDemo} 
              className="bg-gradient-brand hover:shadow-lg hover:scale-105 transition-all duration-300 animate-pulse-slow"
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              {isMenuOpen ? 
                <X className="h-6 w-6 text-brand-red" /> : 
                <Menu className="h-6 w-6 text-foreground" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 glass rounded-2xl m-4 animate-scale-in">
            <div className="flex flex-col gap-4 px-6">
              {navigation.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-2 text-zinc-700 dark:text-zinc-300 hover:text-brand-red transition-colors font-medium animate-fade-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </button>
              ))}
              <Button 
                size="sm" 
                className="w-fit bg-gradient-brand mt-2 animate-fade-in-up" 
                onClick={onBookDemo}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}