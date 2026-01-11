import Link from 'next/link'
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white dark:bg-white border-t border-zinc-200 dark:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-foreground" />
              <span className="font-sans font-semibold text-xl text-foreground">
                The Learners' Academy
              </span>
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-md">
              Transforming academic journeys with expert teaching, personalized attention, 
              and proven results for students from classes 6-12.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/courses" className="text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors">Courses</Link></li>
              <li><Link href="/teachers" className="text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors">Teachers</Link></li>
              <li><Link href="/success-stories" className="text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors">Success Stories</Link></li>
              <li><Link href="/blog" className="text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/resources" className="text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-sans font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <Phone className="h-4 w-4" />
                <span>+91-9876543210</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <Mail className="h-4 w-4" />
                <span>info@learnersacademy.com</span>
              </li>
              <li className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400">
                <MapPin className="h-4 w-4 mt-1" />
                <span>123 Education Street<br />Your City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-200 mt-12 pt-8 text-center">
          <p className="text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} The Learners' Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}