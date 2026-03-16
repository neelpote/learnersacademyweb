import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Maths Tuition Classes in Baner Pune | The Learners\' Academy',
  description: 'Expert Maths tuition in Baner for Class 7-10. CBSE, ICSE, SSC coaching with concept-based learning, small batches & proven results. Call 86054 68382',
  keywords: 'maths tuition baner, mathematics coaching pune, class 10 maths tuition, CBSE maths classes baner, best maths teacher baner pune',
  openGraph: {
    title: 'Best Maths Tuition Classes in Baner Pune | The Learners\' Academy',
    description: 'Expert Maths tuition in Baner for Class 7-10. CBSE, ICSE, SSC coaching with concept-based learning, small batches & proven results.',
    url: 'https://www.thelearnersacademy.in/maths-tuition-baner',
  },
}

export default function MathsTuitionBanerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}