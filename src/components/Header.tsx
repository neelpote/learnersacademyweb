'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  onBookDemo: () => void
}

export function Header({ onBookDemo }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === '/'

  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'Courses', section: 'courses' },
    { name: 'Teachers', section: 'teachers' },
    { name: 'Success Stories', section: 'success-stories' },
    { name: 'Blog', section: 'blog', href: '/blog' },
    { name: 'Resources', section: 'resources', href: '/resources' },
    { name: 'About', section: 'about' },
  ]

  const handleNav = (item: typeof navItems[0]) => {
    setIsMenuOpen(false)
    // If item has a dedicated page (blog, resources), navigate there
    if (item.href && !isHome) {
      router.push(item.href)
      return
    }
    if (item.href && isHome) {
      // On home page, scroll to section if it exists, else navigate
      const el = document.querySelector(`#${item.section}`)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      } else {
        router.push(item.href)
      }
      return
    }
    // Scroll sections: if on home page scroll, else go to /#section
    if (isHome) {
      setTimeout(() => {
        document.querySelector(`#${item.section}`)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      router.push(`/#${item.section}`)
    }
  }

  const handleLogo = () => {
    if (isHome) {
      document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  return (
    <header className="relative w-full z-40">
      {/* Top Branding Bar */}
      <div className="bg-transparent border-b-2 border-brand-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center py-4">
            <button onClick={handleLogo} className="flex items-center gap-4 group">
              <div className="relative w-20 h-20 group-hover:opacity-80 transition-opacity duration-300">
                <Image
                  src="/academy Logo - Background Removed.png"
                  alt="The Learners' Academy Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-heading font-bold text-2xl text-brand-maroon">
                The Learners' Academy
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="bg-brand-maroon">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10 flex-1 justify-center">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNav(item)}
                  className="text-white hover:text-brand-silver relative font-medium group text-base transition-colors"
                  style={{ fontFamily: 'var(--font-sub)' }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-silver group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden w-full flex justify-between items-center">
              <span className="text-brand-silver font-medium" style={{ fontFamily: 'var(--font-sub)' }}>Menu</span>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-brand-silver hover:text-white transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-6 bg-brand-silver border-2 border-brand-silver rounded-lg m-4">
              <div className="flex flex-col gap-4 px-6">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNav(item)}
                    className="text-left py-2 text-brand-maroon hover:text-brand-blue transition-colors font-medium"
                    style={{ fontFamily: 'var(--font-sub)' }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
