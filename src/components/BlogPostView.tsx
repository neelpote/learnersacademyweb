'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, MapPin, Phone } from 'lucide-react'
import { Header } from './Header'
import { Footer } from './Footer'
import { FloatingBookDemo } from './FloatingBookDemo'
import { BookDemoForm } from './BookDemoForm'
import { urlFor } from '@/lib/sanity'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  mainImage: any
  excerpt: string
  body: any[]
  publishedAt: string
  author: { name: string; photo: any; qualification: string }
}

function renderBlock(block: any, index: number) {
  if (block._type !== 'block') return null
  const text = block.children?.map((c: any) => c.text).join('') || ''
  if (!text) return null

  switch (block.style) {
    case 'h1':
      return <h2 key={index} className="text-3xl text-brand-maroon mt-10 mb-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>{text}</h2>
    case 'h2':
      return <h3 key={index} className="text-2xl text-brand-maroon mt-8 mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>{text}</h3>
    case 'h3':
      return <h4 key={index} className="text-xl text-brand-blue mt-6 mb-2" style={{ fontFamily: 'var(--font-sub)', fontWeight: 600 }}>{text}</h4>
    case 'blockquote':
      return (
        <blockquote key={index} className="border-l-4 border-brand-maroon pl-6 my-8 py-2" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: '#800000', fontSize: '1.25rem', lineHeight: 1.7 }}>
          {text}
        </blockquote>
      )
    default:
      return <p key={index} className="mb-6" style={{ fontFamily: 'var(--font-body)', fontWeight: 400, color: '#2d2d2d', lineHeight: 1.9, fontSize: '1.1rem' }}>{text}</p>
  }
}

export function BlogPostView({ post, slug }: { post: Post | null; slug: string }) {
  const [isOpen, setIsOpen] = useState(false)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-brand-maroon text-xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Post not found</p>
          <Link href="/blog" className="text-brand-blue underline" style={{ fontFamily: 'var(--font-sub)' }}>← Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative z-10">
      <Header onBookDemo={() => setIsOpen(true)} />

      <main className="min-h-screen pt-20 relative z-20">

        {/* Hero / Title Section */}
        <section className="relative py-16 bg-gradient-to-br from-brand-silver to-white z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Breadcrumb */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-brand-maroon mb-8 hover:underline" style={{ fontFamily: 'var(--font-sub)' }}>
              <ArrowLeft className="h-4 w-4" />
              All Posts
            </Link>

            {/* Label */}
            <p className="text-xs uppercase tracking-widest text-brand-maroon mb-3" style={{ fontFamily: 'var(--font-sub)' }}>
              The Learners' Academy · Blog
            </p>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl text-brand-maroon mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, lineHeight: 1.15 }}>
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm pb-8 border-b border-gray-200" style={{ color: '#4A4A4A', fontFamily: 'var(--font-sub)' }}>
              {post.author?.name && (
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-brand-maroon" />
                  {post.author.name}
                  {post.author.qualification && <span className="text-xs opacity-60">· {post.author.qualification}</span>}
                </span>
              )}
              {post.publishedAt && (
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-brand-maroon" />
                  {new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Hero Image */}
        {post.mainImage && (
          <section className="relative z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden -mt-4 mb-0" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
                <Image
                  src={urlFor(post.mainImage).width(1200).height(600).url()}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>
        )}

        {/* Article Body */}
        <section className="py-16 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Main content */}
              <article className="lg:col-span-2">
                {post.excerpt && (
                  <p className="text-xl mb-8 pb-8 border-b border-gray-100" style={{ fontFamily: 'var(--font-body)', fontWeight: 400, color: '#4A4A4A', lineHeight: 1.8 }}>
                    {post.excerpt}
                  </p>
                )}
                {post.body?.map((block, index) => renderBlock(block, index))}
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-28 space-y-6">

                  {/* About the Academy */}
                  <div className="bg-white rounded-2xl p-6" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
                    <h3 className="text-base text-brand-maroon mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                      The Learners' Academy
                    </h3>
                    <p className="text-sm mb-4" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, color: '#4A4A4A', lineHeight: 1.7 }}>
                      Expert coaching for Class 7–10 in Maths and Science. Small batches, concept-based learning, proven results.
                    </p>
                    <div className="space-y-2 text-xs" style={{ color: '#4A4A4A', fontFamily: 'var(--font-sub)' }}>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3 text-brand-maroon flex-shrink-0" />
                        <span>Baner, Pune – 411045</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-3 w-3 text-brand-maroon flex-shrink-0" />
                        <span>86054 68382</span>
                      </div>
                    </div>
                    <a
                      href="/contact"
                      className="mt-4 w-full block text-center py-2.5 px-4 rounded-lg text-sm font-semibold bg-brand-maroon transition-colors"
                      style={{ color: 'white', fontFamily: 'var(--font-sub)' }}
                    >
                      Book Free Demo
                    </a>
                  </div>

                  {/* Related pages */}
                  <div className="bg-brand-silver bg-opacity-50 rounded-2xl p-6">
                    <h3 className="text-sm text-brand-maroon mb-3 uppercase tracking-wider" style={{ fontFamily: 'var(--font-sub)', fontWeight: 700 }}>
                      Our Courses
                    </h3>
                    <div className="space-y-2">
                      {[
                        { label: 'Maths Tuition Baner', href: '/maths-tuition-baner' },
                        { label: 'Science Tuition Baner', href: '/science-tuition-baner' },
                        { label: 'Class 10 Maths Coaching', href: '/class-10-maths-coaching-pune' },
                        { label: 'Best Tuition Classes', href: '/best-tuition-classes-baner' },
                      ].map(link => (
                        <Link key={link.href} href={link.href} className="block text-sm text-brand-blue hover:text-brand-maroon transition-colors py-1 border-b border-gray-100 last:border-0" style={{ fontFamily: 'var(--font-sub)' }}>
                          → {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-maroon relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'white' }}>
              Want Expert Guidance for Your Child?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, color: 'rgba(255,255,255,0.85)' }}>
              Join The Learners' Academy in Baner, Pune for concept-based coaching in Maths and Science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8605468382"
                style={{ backgroundColor: '#800000', color: 'white', padding: '12px 32px', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', border: '2px solid white', fontFamily: 'var(--font-sub)' }}
              >
                📞 Call: 86054 68382
              </a>
              <a
                href="/contact"
                style={{ border: '2px solid white', color: 'white', padding: '12px 32px', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', textDecoration: 'none', fontFamily: 'var(--font-sub)' }}
              >
                Book Free Demo Class
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-center justify-center gap-2"><span>📞</span><span style={{ color: 'white' }}>86054 68382</span></div>
              <div className="flex items-center justify-center gap-2"><span>✉️</span><span style={{ color: 'white' }}>info@learnersacademy.com</span></div>
              <div className="flex items-center justify-center gap-2"><span>📍</span><span style={{ color: 'white' }}>Baner, Pune</span></div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingBookDemo onBookDemo={() => setIsOpen(true)} />
      <BookDemoForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}
