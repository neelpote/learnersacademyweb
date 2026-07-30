'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  onBookDemo?: () => void
}

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses' },
  { name: 'Teachers', href: '/#teachers' },
  { name: 'Success Stories', href: '/#success-stories' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/#about' },
]

export function Header({ onBookDemo }: HeaderProps) {
  void onBookDemo
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative w-full z-40">
      <div className="bg-transparent border-b-2 border-brand-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center items-center py-4">
            <Link href="/" className="flex items-center gap-4 group" aria-label="The Learners' Academy home">
              <div className="relative w-20 h-20 group-hover:opacity-80 transition-opacity duration-300">
                <Image
                  src="/academy Logo - Background Removed.png"
                  alt="The Learners' Academy logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-heading font-bold text-2xl text-brand-maroon">
                {"The Learners' Academy"}
              </span>
            </Link>
          </div>
        </div>
      </div>

      <nav className="bg-brand-maroon" aria-label="Primary navigation">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="hidden md:flex items-center gap-12 flex-1 justify-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-brand-silver relative font-medium group text-lg transition-colors"
                  style={{ fontFamily: 'var(--font-sub)' }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-silver group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            <div className="md:hidden w-full flex justify-between items-center">
              <span className="text-brand-silver font-medium" style={{ fontFamily: 'var(--font-sub)' }}>Menu</span>
              <button
                type="button"
                onClick={() => setIsMenuOpen((open) => !open)}
                className="p-2 rounded-lg text-brand-silver hover:text-white transition-colors"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div id="mobile-navigation" className="md:hidden py-6 bg-brand-silver border-2 border-brand-silver rounded-lg m-4">
              <div className="flex flex-col gap-4 px-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-left py-2 text-brand-maroon hover:text-brand-blue transition-colors font-medium"
                    style={{ fontFamily: 'var(--font-sub)' }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
