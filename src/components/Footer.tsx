import Link from 'next/link'
import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site'

const siteLinks = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'Educational Blog', href: '/blog' },
  { label: 'Free Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
]

const programLinks = [
  { label: 'Tuition Classes in Baner', href: '/best-tuition-classes-baner' },
  { label: 'Maths Tuition in Baner', href: '/maths-tuition-baner' },
  { label: 'Science Tuition in Baner', href: '/science-tuition-baner' },
  { label: 'Class 10 Maths Coaching', href: '/class-10-maths-coaching-pune' },
  { label: 'Tutor in Baner Pune', href: '/tutor-in-baner-pune' },
]

export function Footer() {
  return (
    <footer className="bg-brand-maroon bg-opacity-95 backdrop-blur-sm relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <GraduationCap className="h-8 w-8 text-white" />
              <span className="font-sans font-bold text-xl text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-white text-sm max-w-sm leading-6">
              Concept-based tuition and academic guidance for Classes 7–12 in
              Baner, Pune.
            </p>
          </div>

          <nav aria-label="Footer site links">
            <h2 className="font-sans font-semibold text-white mb-4 text-lg">
              Explore
            </h2>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-brand-silver transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Popular tuition programs">
            <h2 className="font-sans font-semibold text-white mb-4 text-lg">
              Popular Programs
            </h2>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-brand-silver transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans font-semibold text-white mb-4 text-lg">
              Contact Us
            </h2>
            <address className="not-italic space-y-3">
              <a
                href="tel:+918605468382"
                className="flex items-center gap-2 text-white hover:text-brand-silver transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">{siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-white hover:text-brand-silver transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">{siteConfig.email}</span>
              </a>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white hover:text-brand-silver transition-colors"
              >
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  302, Tejas Eternity, Balewadi Phata
                  <br />
                  Baner, Pune – 411045
                </span>
              </a>
            </address>
          </div>
        </div>

        <div className="border-t border-white border-opacity-30 pt-6 text-center">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
