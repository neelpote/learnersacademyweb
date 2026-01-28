'use client'

import { useEffect, useState } from 'react'
import { client, queries } from '@/lib/sanity'
import { BookOpen, ChevronDown } from 'lucide-react'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  mainImage: any
  excerpt: string
  publishedAt: string
}

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [expandedPosts, setExpandedPosts] = useState<Set<string>>(new Set())

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await client.fetch(queries.posts)
        setPosts(data.slice(0, 6)) // Show first 6 posts
        setError(false)
      } catch (error) {
        console.log('Error fetching blog posts:', error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const toggleExpanded = (postId: string) => {
    const newExpanded = new Set(expandedPosts)
    if (newExpanded.has(postId)) {
      newExpanded.delete(postId)
    } else {
      newExpanded.add(postId)
    }
    setExpandedPosts(newExpanded)
  }

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-maroon mb-4">
            Educational Blog
          </h2>
          <p className="text-xl text-brand-blue max-w-3xl mx-auto">
            Discover valuable insights, study tips, and exam preparation strategies 
            from our experienced educators to help you excel in your academic journey.
          </p>
        </div>

        {!loading && posts.length > 0 ? (
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-8 min-w-max">
              {posts.map((post) => {
                const isExpanded = expandedPosts.has(post._id)
                return (
                  <div
                    key={post._id}
                    className="bg-brand-silver bg-opacity-80 backdrop-blur-sm rounded-lg p-6 border border-brand-blue hover:border-brand-maroon transition-colors w-80 flex-shrink-0"
                  >
                    <h3 className="text-xl font-sans font-semibold text-brand-maroon mb-3 break-words overflow-wrap-anywhere">
                      {post.title}
                    </h3>

                    <p className="text-brand-blue mb-4 break-words overflow-wrap-anywhere">
                      {post.excerpt}
                    </p>

                    <button
                      onClick={() => toggleExpanded(post._id)}
                      className="inline-flex items-center gap-2 text-brand-maroon hover:text-brand-blue font-medium transition-colors"
                    >
                      {isExpanded ? 'Show Less' : 'Read More'}
                      <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-brand-blue">
                        <p className="text-brand-blue leading-relaxed break-words overflow-wrap-anywhere">
                          Full blog content will be displayed here when available from Sanity CMS.
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            {loading ? (
              <div>
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-brand-maroon mx-auto"></div>
                <p className="mt-4 text-brand-blue">Loading blog posts...</p>
              </div>
            ) : (
              <div>
                <BookOpen className="h-16 w-16 text-brand-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brand-maroon mb-2">No Blog Posts Available</h3>
                <p className="text-brand-blue max-w-md mx-auto">
                  Blog posts will appear here once they are added through the Sanity dashboard.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}