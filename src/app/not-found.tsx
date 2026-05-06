import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Page Not Found | The Learners' Academy",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-silver to-white px-4">
      <div className="text-center max-w-lg">

        {/* Big 404 */}
        <p className="text-9xl font-bold text-brand-maroon opacity-10 leading-none select-none" style={{ fontFamily: 'var(--font-heading)' }}>
          404
        </p>

        <div className="-mt-8">
          <h1 className="text-3xl sm:text-4xl text-brand-maroon mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
            Page Not Found
          </h1>
          <p className="text-lg mb-8" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, color: '#4A4A4A' }}>
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-brand-maroon px-8 py-3 rounded-lg font-medium transition-colors"
              style={{ color: 'white', fontFamily: 'var(--font-sub)' }}
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="border-2 border-brand-maroon px-8 py-3 rounded-lg font-medium transition-colors"
              style={{ color: '#800000', fontFamily: 'var(--font-sub)' }}
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm mb-4" style={{ fontFamily: 'var(--font-sub)', color: '#4A4A4A' }}>
              Looking for something specific?
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { label: 'Maths Tuition', href: '/maths-tuition-baner' },
                { label: 'Science Tuition', href: '/science-tuition-baner' },
                { label: 'Blog', href: '/blog' },
                { label: 'Resources', href: '/resources' },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-brand-blue hover:text-brand-maroon transition-colors underline"
                  style={{ fontFamily: 'var(--font-sub)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
