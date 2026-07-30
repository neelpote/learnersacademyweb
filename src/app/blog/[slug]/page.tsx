import { client, urlFor } from '@/lib/sanity'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlogPostView } from '@/components/BlogPostView'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { absoluteUrl, siteConfig, SITE_URL } from '@/lib/site'

// Revalidate every 60 seconds — new posts work without full rebuild
export const revalidate = 60
// Allow slugs not returned by generateStaticParams to be rendered on demand
export const dynamicParams = true

interface Props {
  params: Promise<{ slug: string }>
}

interface StaticPostSlug {
  slug: string
}

export async function generateStaticParams() {
  const posts = await client.fetch<StaticPostSlug[]>(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
  )
  return posts
    .filter((post) => typeof post.slug === 'string' && post.slug.length > 0)
    .map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title, excerpt, mainImage, publishedAt, _updatedAt, author->{name}
    }`,
    { slug }
  )

  if (!post) {
    return {
      title: 'Article not found',
      robots: { index: false, follow: false },
    }
  }

  const canonical = absoluteUrl(`/blog/${slug}`)
  const image = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : absoluteUrl(siteConfig.socialImage)

  return {
    title: post.title,
    description:
      post.excerpt ||
      "Educational guidance from The Learners' Academy in Baner, Pune.",
    authors: post.author?.name ? [{ name: post.author.name }] : [{ name: siteConfig.name }],
    alternates: {
      canonical: canonical,
      languages: { 'en-IN': canonical },
    },
    openGraph: {
      type: 'article',
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: post.title,
      description: post.excerpt,
      url: canonical,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      authors: post.author?.name ? [post.author.name] : [siteConfig.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id, _updatedAt, title, slug, mainImage, excerpt, publishedAt,
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

  if (!post) {
    notFound()
  }

  const canonical = absoluteUrl(`/blog/${slug}`)
  const image = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : absoluteUrl(siteConfig.socialImage)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${canonical}#article`,
    headline: post.title,
    description: post.excerpt,
    image: [image],
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    inLanguage: siteConfig.language,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    author: post.author?.name
      ? {
          '@type': 'Person',
          name: post.author.name,
        }
      : {
          '@type': 'Organization',
          name: siteConfig.name,
          url: SITE_URL,
        },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  }

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(post.title, `/blog/${slug}`, {
          name: 'Educational Blog',
          path: '/blog',
        })}
      />
      <JsonLd data={articleSchema} />
      <BlogPostView post={post} slug={slug} />
    </>
  )
}
