import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'
import { absoluteUrl, SITE_URL } from '@/lib/site'

interface SitemapPost {
  slug: string
  updatedAt: string
  imageUrl?: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    {
      url: SITE_URL,
      changeFrequency: 'weekly' as const,
      priority: 1,
      images: [absoluteUrl('/maths-coaching-classroom-baner-pune.png')],
    },
    {
      url: absoluteUrl('/contact'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: absoluteUrl('/courses'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: absoluteUrl('/resources'),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: absoluteUrl('/maths-tuition-baner'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      images: [absoluteUrl('/maths-tuition-baner-classroom.jpeg')],
    },
    {
      url: absoluteUrl('/science-tuition-baner'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      images: [absoluteUrl('/science-classroom-baner-pune.webp')],
    },
    {
      url: absoluteUrl('/class-10-maths-coaching-pune'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      images: [absoluteUrl('/class10-maths-coaching-baner-classroom.png')],
    },
    {
      url: absoluteUrl('/best-tuition-classes-baner'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      images: [absoluteUrl('/best-tuition-classes-baner-classroom.png')],
    },
    {
      url: absoluteUrl('/tutor-in-baner-pune'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      images: [absoluteUrl('/tutor-in-baner-pune-classroom.png')],
    },
    {
      url: absoluteUrl('/blog'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  try {
    const posts = await client.fetch<SitemapPost[]>(
      `*[_type == "post" && defined(slug.current)] {
        "slug": slug.current,
        "updatedAt": _updatedAt,
        "imageUrl": mainImage.asset->url
      }`,
    )
    const blogPages = posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      ...(post.imageUrl ? { images: [post.imageUrl] } : {}),
    }))

    return [...staticPages, ...blogPages]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return staticPages
  }
}
