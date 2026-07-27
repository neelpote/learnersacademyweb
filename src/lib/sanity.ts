import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { sanityRateLimiter } from './rateLimit'

const DEFAULT_SANITY_PROJECT_ID = 'nxtrkki6'
const DEFAULT_SANITY_DATASET = 'production'

function resolveSanityConfig() {
  const configuredProjectId =
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim()
  const configuredDataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim()

  const projectId = configuredProjectId || DEFAULT_SANITY_PROJECT_ID
  const dataset =
    !configuredDataset ||
    configuredDataset === projectId ||
    configuredDataset === DEFAULT_SANITY_PROJECT_ID
      ? DEFAULT_SANITY_DATASET
      : configuredDataset

  if (
    configuredDataset &&
    configuredDataset !== dataset &&
    process.env.NODE_ENV !== 'test'
  ) {
    console.warn(
      `[sanity] Ignoring invalid dataset "${configuredDataset}" and using "${dataset}".`,
    )
  }

  return { projectId, dataset }
}

const { projectId, dataset } = resolveSanityConfig()

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false, // Set to false for real-time updates
  token: process.env.SANITY_API_TOKEN, // Optional: for authenticated requests
  perspective: 'published', // Only fetch published documents
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Rate-limited fetch function
export async function rateLimitedFetch(query: string, params?: any) {
  const clientId = 'sanity_client'
  
  if (!sanityRateLimiter.isAllowed(clientId)) {
    const resetTime = sanityRateLimiter.getResetTime(clientId)
    const waitTime = Math.ceil((resetTime - Date.now()) / 1000)
    console.warn(`Sanity API rate limit exceeded. Try again in ${waitTime} seconds.`)
    throw new Error(`Rate limit exceeded. Please wait ${waitTime} seconds.`)
  }

  try {
    return await client.fetch(query, params)
  } catch (error) {
    console.error('Sanity fetch error:', error)
    throw error
  }
}

// Force fresh data fetch (bypasses any caching)
export async function fetchFreshData(query: string, params?: any) {
  try {
    // Add timestamp to force fresh data
    const freshQuery = query.includes('|') ? query : `${query} | order(_updatedAt desc)`
    return await client.fetch(freshQuery, { ...params, _cacheBuster: Date.now() })
  } catch (error) {
    console.error('Fresh data fetch error:', error)
    throw error
  }
}

// GROQ queries
export const queries = {
  teachers: `*[_type == "teacher"] | order(name asc) {
    _id,
    name,
    photo,
    qualification,
    subject,
    teachingPhilosophy
  }`,
  
  courses: `*[_type == "course"] | order(gradeLevel asc) {
    _id,
    title,
    gradeLevel,
    subject,
    syllabus,
    slug
  }`,
  
  courseBySlug: `*[_type == "course" && slug.current == $slug][0] {
    _id,
    title,
    gradeLevel,
    subject,
    syllabus,
    slug
  }`,
  
  successStories: `*[_type == "successStory"] | order(year desc) {
    _id,
    studentName,
    photo,
    marks,
    rank,
    testimonialQuote,
    year
  }`,
  
  posts: `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    publishedAt,
    author->{name, photo}
  }`,
  
  postBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    body,
    publishedAt,
    author->{name, photo, qualification}
  }`,
  
  resources: `*[_type == "resource"] | order(title asc) {
    _id,
    title,
    description,
    pdfFile{
      asset->{
        _id,
        url
      }
    },
    slug,
    category
  }`,
}
