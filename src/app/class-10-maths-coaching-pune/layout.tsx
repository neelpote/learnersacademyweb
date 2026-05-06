import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Class 10 Maths Coaching Pune | The Learners' Academy Baner",
  description: "Expert Class 10 Maths coaching in Pune. Board exam preparation for CBSE, ICSE & SSC students in Baner with small batches, concept-based learning & proven results. Call 86054 68382.",
  keywords: [
    "class 10 maths coaching pune", "class 10 maths tuition baner", "10th maths coaching pune",
    "board exam maths coaching baner", "class 10 cbse maths tuition pune", "class 10 icse maths baner",
    "maths coaching baner pune", "class 10 board preparation pune"
  ],
  alternates: {
    canonical: 'https://www.thelearnersacademy.in/class-10-maths-coaching-pune',
  },
  openGraph: {
    title: "Class 10 Maths Coaching Pune | The Learners' Academy",
    description: "Expert Class 10 Maths coaching in Pune for CBSE, ICSE & SSC board exam preparation. Small batches, concept-based learning. Call 86054 68382.",
    url: 'https://www.thelearnersacademy.in/class-10-maths-coaching-pune',
    type: 'website',
    locale: 'en_IN',
    siteName: "The Learners' Academy",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
