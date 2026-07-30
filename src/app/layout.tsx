import type { Metadata, Viewport } from "next";
import { Inter, Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { JsonLd } from "@/components/JsonLd";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { sitewideSchema } from "@/lib/schema";
import { absoluteUrl, siteConfig, SITE_URL } from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const lato = Lato({
  variable: "--font-sub",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#800000",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: siteConfig.name,
  title: {
    default: "Best Tuition Classes in Baner Pune | The Learners' Academy",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Expert tuition classes in Baner, Pune for Classes 7–12. Small batches, concept-based Maths and Science coaching, board exam preparation, and personal guidance.",
  authors: [{ name: siteConfig.name, url: SITE_URL }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "education",
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: SITE_URL,
    siteName: siteConfig.name,
    title: "Best Tuition Classes in Baner Pune | The Learners' Academy",
    description:
      "Expert tuition for Classes 7–12 in Baner, Pune, with small batches, concept-based learning, and board exam preparation.",
    images: [
      {
        url: siteConfig.socialImage,
        width: 1200,
        height: 630,
        alt: "Students learning Mathematics at The Learners' Academy in Baner, Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Tuition Classes in Baner Pune | The Learners' Academy",
    description:
      "Expert tuition for Classes 7–12 in Baner, Pune, with small batches and concept-based learning.",
    images: [siteConfig.socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Baner, Pune",
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang={siteConfig.language}
      className={`${playfair.variable} ${inter.variable} ${lato.variable}`}
    >
      <head>
        <JsonLd data={sitewideSchema()} />
        <link
          rel="alternate"
          type="text/plain"
          href={absoluteUrl("/llms.txt")}
          title={`${siteConfig.name} AI-readable site guide`}
        />
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_location: window.location.href,
                    page_title: document.title
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="app-root antialiased">
        <BackgroundAnimation />
        {children}
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
