'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { client, urlFor } from '@/lib/sanity'
import { Calendar, ArrowRight, BookOpen } from 'lucide-react'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  mainImage: any
  excerpt: string
  publishedAt: string
  author: { name: string }
}

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...4] {
      _id, title, slug, mainImage, excerpt, publishedAt, author->{name}
    }`).then(setPosts).catch(console.error).finally(() => setLoading(false))
  }, [])

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-maroon mb-2" style={{ fontFamily: 'var(--font-sub)' }}>Latest Articles</p>
            <h2 className="text-3xl sm:text-4xl text-brand-maroon" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
              Educational Blog
            </h2>
          </div>
          <Link href="/blog" className="hidden sm:flex items-center gap-2 text-sm text-brand-maroon hover:underline" style={{ fontFamily: 'var(--font-sub)' }}>
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-brand-maroon mx-auto" />
          </div>
        ) : posts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {posts.map((post, index) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group block bg-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
                  style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                >
                  {post.mainImage ? (
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={urlFor(post.mainImage).width(400).height(200).url()}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="h-40 bg-brand-maroon bg-opacity-5 flex items-center justify-center">
                      <span className="text-4xl font-bold text-brand-maroon opacity-10" style={{ fontFamily: 'var(--font-heading)' }}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="text-sm font-semibold text-brand-maroon mb-2 line-clamp-2 group-hover:text-brand-blue transition-colors" style={{ fontFamily: 'var(--font-sub)', lineHeight: 1.4 }}>
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-xs line-clamp-2 mb-3" style={{ fontFamily: 'var(--font-body)', fontWeight: 300, color: '#4A4A4A' }}>
                        {post.excerpt}
                      </p>
                    )}
                    {post.publishedAt && (
                      <div className="flex items-center gap-1 text-xs" style={{ color: '#4A4A4A', fontFamily: 'var(--font-sub)' }}>
                        <Calendar className="h-3 w-3" />
                        {new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8 sm:hidden">
              <Link href="/blog" className="text-sm text-brand-maroon hover:underline" style={{ fontFamily: 'var(--font-sub)' }}>
                View all posts →
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-200 mx-auto mb-4" />
            <p style={{ color: '#4A4A4A', fontFamily: 'var(--font-body)', fontWeight: 300 }}>Blog posts will appear here once added from the Sanity dashboard.</p>
          </div>
        )}
      </div>
    </section>
  )
}
