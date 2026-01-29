import Link from 'next/link'
import { GraduationCap, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-brand-maroon bg-opacity-95 backdrop-blur-sm relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <GraduationCap className="h-8 w-8 text-white" />
              <span className="font-sans font-bold text-xl text-white">
                The Learners' Academy
              </span>
            </Link>
            <p className="text-white text-sm mb-4 max-w-sm mx-auto md:mx-0">
              Transforming academic journeys with expert teaching and proven results for classes 7-12.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity p-2 bg-black bg-opacity-20 rounded-lg hover:bg-opacity-30">
                <svg className="h-6 w-6" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity p-2 bg-black bg-opacity-20 rounded-lg hover:bg-opacity-30">
                <svg className="h-6 w-6" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.017 2.154c3.198 0 3.586.012 4.85.07 3.259.148 4.771 1.691 4.919 4.919.058 1.265.069 1.650.069 4.849 0 3.198-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.109c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity p-2 bg-black bg-opacity-20 rounded-lg hover:bg-opacity-30">
                <svg className="h-6 w-6" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-sans font-semibold text-white mb-4 text-lg">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white hover:text-gray-200 transition-colors text-sm py-1"
              >
                Courses
              </button>
              <button 
                onClick={() => document.querySelector('#teachers')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white hover:text-gray-200 transition-colors text-sm py-1"
              >
                Teachers
              </button>
              <button 
                onClick={() => document.querySelector('#success-stories')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white hover:text-gray-200 transition-colors text-sm py-1"
              >
                Success Stories
              </button>
              <button 
                onClick={() => document.querySelector('#blog')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white hover:text-gray-200 transition-colors text-sm py-1"
              >
                Blog
              </button>
              <button 
                onClick={() => document.querySelector('#resources')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white hover:text-gray-200 transition-colors text-sm py-1"
              >
                Resources
              </button>
              <button 
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white hover:text-gray-200 transition-colors text-sm py-1"
              >
                About
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="font-sans font-semibold text-white mb-4 text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end gap-2 text-white">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91-9876543210</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2 text-white">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@learnersacademy.com</span>
              </div>
              <div className="flex items-start justify-center md:justify-end gap-2 text-white">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm text-center md:text-right">
                  123 Education Street, Baner<br />Pune, Maharashtra 411045
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-30 pt-6 text-center">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} The Learners' Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}