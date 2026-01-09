import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false, // Set to false for development
  token: process.env.SANITY_API_TOKEN, // Optional: for authenticated requests
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
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
    pdfFile,
    slug,
    category
  }`,
}