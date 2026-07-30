import { client } from '@/lib/sanity'
import { BlogListView } from '@/components/BlogListView'
import { JsonLd } from '@/components/JsonLd'
import { createPageMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import { absoluteUrl } from '@/lib/site'

export const revalidate = 60 // revalidate every 60 seconds

export const metadata = createPageMetadata({
  title: 'Educational Blog',
  description:
    'Study tips, exam strategies, subject guidance, and academic insights from the teachers at The Learners’ Academy in Baner, Pune.',
  path: '/blog',
  imageAlt: 'Educational blog from The Learners’ Academy',
})

export default async function BlogPage() {
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, mainImage, excerpt, publishedAt, author->{name, photo}
  }`).catch(() => [])

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': absoluteUrl('/blog#collection'),
    url: absoluteUrl('/blog'),
    name: 'Educational Blog',
    description:
      'Study tips, exam strategies, and academic insights from The Learners’ Academy.',
    inLanguage: 'en-IN',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts
        .filter((post: { slug?: { current?: string } }) => post.slug?.current)
        .map((post: { title: string; slug: { current: string } }, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: post.title,
          url: absoluteUrl(`/blog/${post.slug.current}`),
        })),
    },
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema('Educational Blog', '/blog')} />
      <JsonLd data={collectionSchema} />
      <BlogListView posts={posts} />
    </>
  )
}
