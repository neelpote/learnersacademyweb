import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Science Tuition Classes in Baner Pune | The Learners\' Academy',
  description: 'Expert Science tuition in Baner for Class 7-10. CBSE, ICSE, SSC coaching with concept-based learning, practical demonstrations, small batches & proven results. Call 86054 68382',
  keywords: 'science tuition baner, science coaching pune, class 10 science tuition, CBSE science classes baner, best science teacher baner pune, physics chemistry biology tuition baner',
  openGraph: {
    title: 'Best Science Tuition Classes in Baner Pune | The Learners\' Academy',
    description: 'Expert Science tuition in Baner for Class 7-10. CBSE, ICSE, SSC coaching with concept-based learning, practical demonstrations & proven results.',
    url: 'https://www.thelearnersacademy.in/science-tuition-baner',
  },
}

export default function ScienceTuitionBanerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
