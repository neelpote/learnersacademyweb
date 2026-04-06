'use client'

import { Calendar } from 'lucide-react'

interface FloatingBookDemoProps {
  onBookDemo: () => void
}

export function FloatingBookDemo({ onBookDemo }: FloatingBookDemoProps) {
  return (
    <button
      onClick={onBookDemo}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-brand-maroon text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none"
      style={{ boxShadow: '0 4px 20px rgba(128, 0, 0, 0.35)' }}
      aria-label="Book Free Demo"
    >
      <Calendar className="h-5 w-5" style={{ color: 'white' }} />
      <span className="font-medium text-sm" style={{ color: 'white', fontFamily: 'var(--font-sub)' }}>
        Book Free Demo
      </span>
    </button>
  )
}
