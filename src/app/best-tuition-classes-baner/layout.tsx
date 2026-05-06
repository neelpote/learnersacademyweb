import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Best Tuition Classes in Baner Pune | The Learners' Academy",
  description: "Looking for the best tuition classes in Baner? The Learners' Academy offers expert coaching for Class 7–10 CBSE, ICSE & SSC students. Small batches, proven results. Call 86054 68382.",
  keywords: [
    "best tuition classes baner", "tuition classes baner pune", "coaching classes baner",
    "best tuition baner pune", "tuition near baner", "coaching classes near baner pune",
    "cbse tuition baner", "icse tuition baner", "ssc coaching baner pune"
  ],
  alternates: {
    canonical: 'https://www.thelearnersacademy.in/best-tuition-classes-baner',
  },
  openGraph: {
    title: "Best Tuition Classes in Baner Pune | The Learners' Academy",
    description: "Expert coaching for Class 7–10 CBSE, ICSE & SSC students in Baner, Pune. Small batches, concept-based learning. Call 86054 68382.",
    url: 'https://www.thelearnersacademy.in/best-tuition-classes-baner',
    type: 'website',
    locale: 'en_IN',
    siteName: "The Learners' Academy",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
