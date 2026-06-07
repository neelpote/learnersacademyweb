import type { Metadata } from "next";
import { Playfair_Display, Inter, Lato } from "next/font/google";
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// Serif font for headings — elegant and authoritative
const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

// Clean sans-serif for body — highly readable
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

// Light sans-serif for subheadings and labels
const lato = Lato({
  variable: "--font-sub",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});

const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://www.thelearnersacademy.in' 
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Best Tuition Classes in Baner Pune | The Learners' Academy",
    template: "%s | The Learners' Academy"
  },
  description: "The Learners' Academy is a premium tuition centre in Baner, Pune offering expert coaching for Class 7–12 with a focus on strong concepts and board exam success.",
  keywords: [
    "tuition center Baner", "coaching classes Pune", "tuition Baner Pune", "CBSE tuition Baner", "ICSE coaching Pune", 
    "State Board classes Baner", "JEE coaching Pune", "NEET preparation Baner", "board exam coaching Pune",
    "mathematics tuition Baner", "physics coaching Pune", "chemistry classes Baner", "biology tuition Pune",
    "English coaching Baner", "academic excellence Pune", "personalized learning Baner", "expert teachers Pune",
    "classes 7-12 Baner", "Pune education", "Baner tuition center", "Learners Academy Pune", "tuition near Baner",
    "coaching classes near me Pune", "best tuition center Baner", "Maharashtra board coaching"
  ],
  authors: [{ name: "The Learners' Academy", url: baseUrl }],
  creator: "The Learners' Academy",
  publisher: "The Learners' Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: "The Learners' Academy",
    title: "Best Tuition Classes in Baner Pune | The Learners' Academy",
    description: "The Learners' Academy is a premium tuition centre in Baner, Pune offering expert coaching for Class 7–12 with a focus on strong concepts and board exam success.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Best Tuition Classes in Baner Pune | The Learners' Academy",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Tuition Classes in Baner Pune | The Learners' Academy",
    description: "The Learners' Academy is a premium tuition centre in Baner, Pune offering expert coaching for Class 7–12 with a focus on strong concepts and board exam success.",
    images: [`${baseUrl}/og-image.jpg`],
    creator: "@learnersacademy",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  category: 'education',
  classification: 'Education, Tuition, Coaching',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#800000' },
    { media: '(prefers-color-scheme: dark)', color: '#800000' }
  ],
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#800000' },
    ],
  },
  verification: {
    // Add your actual verification codes here when you have them
    // google: 'your-actual-google-verification-code',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    '@id': `${baseUrl}/#organization`,
    name: "The Learners' Academy",
    alternateName: "Learners Academy Baner Pune",
    description: "Premium tuition center providing quality education for classes 7-10 with expert teachers and proven results in Baner, Pune",
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/academy Logo - Background Removed.png`,
      width: 200,
      height: 200
    },
    image: `${baseUrl}/maths-tuition-baner-classroom.jpeg`,
    telephone: '+91-86054-68382',
    email: 'info@learnersacademy.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '302, Tejas Eternity, Balewadi Phata, Baner',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411045',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '18.5679',
      longitude: '73.7781'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '21:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '08:00',
        closes: '18:00'
      }
    ],
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: ['Cash', 'UPI', 'Bank Transfer'],
    areaServed: [
      { '@type': 'Place', name: 'Baner, Pune' },
      { '@type': 'Place', name: 'Aundh, Pune' },
      { '@type': 'Place', name: 'Pashan, Pune' },
      { '@type': 'Place', name: 'Balewadi, Pune' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-86054-68382',
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi', 'Marathi'],
      areaServed: 'IN'
    },
    sameAs: [
      'https://facebook.com/learnersacademy',
      'https://instagram.com/learnersacademy',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tuition & Coaching Programs',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'Maths Tuition in Baner',
            description: 'Expert Mathematics coaching for Class 7-10 CBSE, ICSE and SSC students in Baner, Pune',
            url: `${baseUrl}/maths-tuition-baner`,
            provider: { '@type': 'Organization', name: "The Learners' Academy" }
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'Science Tuition in Baner',
            description: 'Expert Science coaching for Class 7-10 CBSE, ICSE and SSC students in Baner, Pune',
            url: `${baseUrl}/science-tuition-baner`,
            provider: { '@type': 'Organization', name: "The Learners' Academy" }
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'Class 10 Maths Coaching Pune',
            description: 'Specialized Class 10 Mathematics board exam preparation in Baner, Pune',
            url: `${baseUrl}/class-10-maths-coaching-pune`,
            provider: { '@type': 'Organization', name: "The Learners' Academy" }
          }
        }
      ]
    }
  },
  // Speakable schema — marks content suitable for AI/voice assistants to read
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${baseUrl}/#webpage`,
    url: baseUrl,
    name: "Best Tuition Classes in Baner Pune | The Learners' Academy",
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.speakable']
    }
  },
  // SiteLinksSearchBox — enables search box in Google results
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: "The Learners' Academy",
    description: "Best tuition classes in Baner, Pune for Class 7-10 Maths and Science",
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/blog?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en-IN">
      <head>
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <link rel="canonical" href={baseUrl} />
        
        {/* Google Analytics */}
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_location: window.location.href,
                    page_title: document.title,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`app-root ${playfair.variable} ${inter.variable} ${lato.variable} antialiased`}
      >
        <BackgroundAnimation />
        {children}
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
