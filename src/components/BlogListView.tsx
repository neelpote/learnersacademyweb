'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from './Header'
import { Footer } from './Footer'
import { BookDemoForm } from './BookDemoForm'
import { FloatingBookDemo } from './FloatingBookDemo'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { urlFor } from '@/lib/sanity'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  mainImage: any
  excerpt: string
  publishedAt: string
  author: { name: string; photo: any }
}

export function BlogListView({ posts }: { posts: BlogPost[] }) {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)

  return (
    <div className="min-h-screen relative z-10">
      <Header onBookDemo={() => setIsDemoFormOpen(true)} />

      <main className="min-h-screen pt-20 relative z-20">

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-brand-silver to-white z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-brand-maroon mb-3" style={{ fontFamily: 'var(--font-sub)' }}>
                From Our Teachers
              </p>
              <h1 className="text-4xl sm:text-5xl text-brand-maroon mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                Educational Blog
              </h1>
              <p className="text-xl max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, color: '#4A4A4A' }}>
                Study tips, exam strategies, and academic insights from the expert faculty at The Learners' Academy, Baner, Pune.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.filter((post) => post.slug?.current).map((post, index) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug.current}`}
                    className="group block bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                    style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
                  >
                    {post.mainImage ? (
                      <div className="relative h-52 w-full overflow-hidden">
                        <Image
                          src={urlFor(post.mainImage).width(600).height(300).url()}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="h-52 bg-brand-maroon bg-opacity-5 flex items-center justify-center border-b border-gray-100">
                        <span className="text-6xl font-bold text-brand-maroon opacity-10" style={{ fontFamily: 'var(--font-heading)' }}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    )}

                    <div className="p-6">
                      <p className="text-xs uppercase tracking-wider text-brand-maroon mb-2" style={{ fontFamily: 'var(--font-sub)' }}>
                        The Learners' Academy
                      </p>
                      <h2 className="text-lg text-brand-blue mb-3 group-hover:text-brand-maroon transition-colors line-clamp-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, lineHeight: 1.35 }}>
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-sm mb-4 line-clamp-2" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, color: '#4A4A4A', lineHeight: 1.7 }}>
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-3 text-xs" style={{ color: '#4A4A4A', fontFamily: 'var(--font-sub)' }}>
                          {post.author?.name && (
                            <span className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {post.author.name}
                            </span>
                          )}
                          {post.publishedAt && (
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </span>
                          )}
                        </div>
                        <ArrowRight className="h-4 w-4 text-brand-maroon opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-brand-maroon mb-2" style={{ fontFamily: 'var(--font-heading)' }}>No posts yet</p>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, color: '#4A4A4A' }}>
                  Blog posts will appear here once added from the Sanity dashboard.
                </p>
              </div>
            )}
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
              <a href="tel:8605468382" style={{ backgroundColor: '#800000', color: 'white', padding: '12px 32px', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', border: '2px solid white', fontFamily: 'var(--font-sub)' }}>
                📞 Call: 86054 68382
              </a>
              <a href="/contact" style={{ border: '2px solid white', color: 'white', padding: '12px 32px', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', textDecoration: 'none', fontFamily: 'var(--font-sub)' }}>
                Book Free Demo Class
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <BookDemoForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
      <FloatingBookDemo onBookDemo={() => setIsDemoFormOpen(true)} />
    </div>
  )
}
