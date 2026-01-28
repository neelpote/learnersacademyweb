import type { Metadata } from "next";
import { Outfit, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { ScrollToTop } from "@/components/ScrollToTop";

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

const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://learners-kohl.vercel.app' 
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "The Learners' Academy - Premier Tuition Center in Baner, Pune | Classes 7-12",
    template: "%s | The Learners' Academy"
  },
  description: "Transform your academic journey with The Learners' Academy - Baner, Pune's premier tuition center. Expert teachers, proven results, personalized learning for CBSE, ICSE, State Board classes 7-12. JEE, NEET coaching available.",
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
    title: "The Learners' Academy - Premier Tuition Center in Baner, Pune",
    description: "Transform your academic journey with expert teachers, proven results, and personalized learning for classes 7-12. CBSE, ICSE, State Board coaching available in Baner, Pune.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "The Learners' Academy - Premier Tuition Center in Baner, Pune",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Learners' Academy - Premier Tuition Center in Baner, Pune",
    description: "Transform your academic journey with expert teachers, proven results, and personalized learning for classes 7-12 in Baner, Pune.",
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': `${baseUrl}/#organization`,
  name: "The Learners' Academy",
  alternateName: "Learners Academy Baner Pune",
  description: "Premier tuition center providing quality education for classes 7-12 with expert teachers and proven results in Baner, Pune",
  url: baseUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${baseUrl}/logo.png`,
    width: 200,
    height: 200
  },
  image: `${baseUrl}/og-image.jpg`,
  telephone: '+91-9876543210',
  email: 'info@learnersacademy.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Education Street, Baner',
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
  areaServed: [
    {
      '@type': 'City',
      name: 'Pune',
      '@id': 'https://en.wikipedia.org/wiki/Pune'
    },
    {
      '@type': 'Place',
      name: 'Baner',
      containedInPlace: {
        '@type': 'City',
        name: 'Pune'
      }
    },
    {
      '@type': 'State',
      name: 'Maharashtra'
    }
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-9876543210',
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi', 'Marathi'],
      areaServed: 'IN'
    }
  ],
  sameAs: [
    'https://facebook.com/learnersacademy',
    'https://instagram.com/learnersacademy',
    'https://youtube.com/learnersacademy'
  ],
  foundingDate: '2014',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 15
  },
  priceRange: '₹₹',
  paymentAccepted: ['Cash', 'Credit Card', 'UPI', 'Bank Transfer'],
  currenciesAccepted: 'INR',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Educational Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'CBSE Coaching Classes 7-12',
          description: 'Comprehensive CBSE board preparation in Baner, Pune'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'ICSE Coaching Classes 7-12',
          description: 'Expert ICSE board coaching in Baner, Pune'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'JEE Preparation',
          description: 'Joint Entrance Examination coaching in Pune'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: 'NEET Preparation',
          description: 'Medical entrance exam preparation in Baner, Pune'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href={baseUrl} />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="p:domain_verify" content="your-pinterest-verification-code" />
        
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
        className={`${outfit.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <BackgroundAnimation />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
