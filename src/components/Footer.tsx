import Link from 'next/link'
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-brand-maroon bg-opacity-95 backdrop-blur-sm relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <GraduationCap className="h-8 w-8 text-brand-silver" />
              <span className="font-sans font-bold text-xl text-brand-silver">
                The Learners' Academy
              </span>
            </Link>
            <p className="text-brand-silver text-sm mb-4 max-w-sm mx-auto md:mx-0">
              Transforming academic journeys with expert teaching and proven results for classes 6-12.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="text-brand-silver hover:text-white transition-colors p-2 bg-white bg-opacity-10 rounded-full">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-brand-silver hover:text-white transition-colors p-2 bg-white bg-opacity-10 rounded-full">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-brand-silver hover:text-white transition-colors p-2 bg-white bg-opacity-10 rounded-full">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-sans font-semibold text-brand-silver mb-4 text-lg">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-brand-silver hover:text-white transition-colors text-sm py-1"
              >
                Courses
              </button>
              <button 
                onClick={() => document.querySelector('#teachers')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-brand-silver hover:text-white transition-colors text-sm py-1"
              >
                Teachers
              </button>
              <button 
                onClick={() => document.querySelector('#success-stories')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-brand-silver hover:text-white transition-colors text-sm py-1"
              >
                Success Stories
              </button>
              <button 
                onClick={() => document.querySelector('#blog')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-brand-silver hover:text-white transition-colors text-sm py-1"
              >
                Blog
              </button>
              <button 
                onClick={() => document.querySelector('#resources')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-brand-silver hover:text-white transition-colors text-sm py-1"
              >
                Resources
              </button>
              <button 
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-brand-silver hover:text-white transition-colors text-sm py-1"
              >
                About
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="font-sans font-semibold text-brand-silver mb-4 text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end gap-2 text-brand-silver">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91-9876543210</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2 text-brand-silver">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@learnersacademy.com</span>
              </div>
              <div className="flex items-start justify-center md:justify-end gap-2 text-brand-silver">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm text-center md:text-right">
                  123 Education Street<br />Your City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-silver border-opacity-30 pt-6 text-center">
          <p className="text-brand-silver text-sm">
            © {new Date().getFullYear()} The Learners' Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}