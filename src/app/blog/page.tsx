import { client, urlFor } from '@/lib/sanity'
import { BlogListView } from '@/components/BlogListView'

export const revalidate = 60 // revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, mainImage, excerpt, publishedAt, author->{name, photo}
  }`).catch(() => [])

  return <BlogListView posts={posts} />
}
