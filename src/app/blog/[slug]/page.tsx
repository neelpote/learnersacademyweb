import { client, urlFor } from '@/lib/sanity'
import { Metadata } from 'next'
import { BlogPostView } from '@/components/BlogPostView'

// Revalidate every 60 seconds — new posts work without full rebuild
export const revalidate = 60
// Allow slugs not returned by generateStaticParams to be rendered on demand
export const dynamicParams = true

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await client.fetch(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
  )
  return posts
    .filter((post: any) => typeof post.slug === 'string' && post.slug.length > 0)
    .map((post: any) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{ title, excerpt, mainImage }`,
    { slug }
  )
  return {
    title: post?.title ? `${post.title} | The Learners' Academy` : "Blog | The Learners' Academy",
    description: post?.excerpt || "Educational blog from The Learners' Academy, Baner Pune.",
    alternates: { canonical: `https://www.thelearnersacademy.in/blog/${slug}` },
    openGraph: {
      title: post?.title,
      description: post?.excerpt,
      url: `https://www.thelearnersacademy.in/blog/${slug}`,
      images: post?.mainImage ? [{ url: urlFor(post.mainImage).width(1200).height(630).url() }] : [],
    }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id, title, slug, mainImage, excerpt, publishedAt,
      body[]{
        ...,
        _type == "image" => {
          ...,
          asset->
        }
      },
      author->{name, photo, qualification}
    }`,
    { slug }
  )

  return <BlogPostView post={post} slug={slug} />
}
