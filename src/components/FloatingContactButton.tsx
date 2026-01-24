'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

interface FloatingContactButtonProps {
  onOpenDemo: () => void
}

export function FloatingContactButton({ onOpenDemo }: FloatingContactButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-lg shadow-lg border border-brand-blue p-4 w-64 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-brand-maroon">Need Help?</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <p className="text-sm text-brand-blue mb-4">
            Get in touch with us for admissions, course details, or any questions!
          </p>
          
          <div className="space-y-2">
            <button
              onClick={() => {
                onOpenDemo()
                setIsExpanded(false)
              }}
              className="w-full text-left px-3 py-2 text-sm bg-brand-maroon text-white rounded hover:bg-opacity-90 transition-colors"
            >
              📚 Book Free Demo Class
            </button>
            
            <a
              href="tel:+919876543210"
              className="block w-full text-left px-3 py-2 text-sm bg-brand-blue text-white rounded hover:bg-opacity-90 transition-colors"
            >
              📞 Call Us Now
            </a>
            
            <a
              href="mailto:info@learnersacademy.com"
              className="block w-full text-left px-3 py-2 text-sm border border-brand-blue text-brand-blue rounded hover:bg-brand-blue hover:text-white transition-colors"
            >
              ✉️ Send Email
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-brand-maroon text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-110"
        aria-label="Contact Support"
      >
        {isExpanded ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  )
}