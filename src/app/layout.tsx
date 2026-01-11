import type { Metadata } from "next";
import { Outfit, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Learners' Academy - Premier Tuition Center",
    template: "%s | The Learners' Academy"
  },
  description: "Transform your academic journey with The Learners' Academy. Expert teachers, proven results, and personalized learning for classes 6-12.",
  keywords: ["tuition center", "coaching classes", "academic excellence", "CBSE", "ICSE", "board exams"],
  authors: [{ name: "The Learners' Academy" }],
  creator: "The Learners' Academy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://learnersacademy.com",
    siteName: "The Learners' Academy",
    title: "The Learners' Academy - Premier Tuition Center",
    description: "Transform your academic journey with expert teachers and proven results.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Learners' Academy - Premier Tuition Center",
    description: "Transform your academic journey with expert teachers and proven results.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: "The Learners' Academy",
  description: "Premier tuition center providing quality education for classes 6-12",
  url: 'https://learnersacademy.com',
  logo: 'https://learnersacademy.com/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Education Street',
    addressLocality: 'Your City',
    addressRegion: 'Your State',
    postalCode: '12345',
    addressCountry: 'IN'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9876543210',
    contactType: 'customer service'
  },
  sameAs: [
    'https://facebook.com/learnersacademy',
    'https://instagram.com/learnersacademy'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
