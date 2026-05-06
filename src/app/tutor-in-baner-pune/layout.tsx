import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Tutor in Baner Pune | The Learners' Academy",
  description: "Looking for a reliable tutor in Baner, Pune? The Learners' Academy offers expert tutoring for Class 7–10 CBSE, ICSE & SSC students. Small batches, personal attention. Call 86054 68382.",
  keywords: [
    "tutor in baner pune", "tutor baner", "home tutor baner pune", "private tutor baner",
    "tuition teacher baner pune", "best tutor baner", "maths tutor baner pune",
    "science tutor baner", "cbse tutor baner pune"
  ],
  alternates: {
    canonical: 'https://www.thelearnersacademy.in/tutor-in-baner-pune',
  },
  openGraph: {
    title: "Tutor in Baner Pune | The Learners' Academy",
    description: "Expert tutoring for Class 7–10 in Baner, Pune. CBSE, ICSE & SSC students. Small batches, personal attention. Call 86054 68382.",
    url: 'https://www.thelearnersacademy.in/tutor-in-baner-pune',
    type: 'website',
    locale: 'en_IN',
    siteName: "The Learners' Academy",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
