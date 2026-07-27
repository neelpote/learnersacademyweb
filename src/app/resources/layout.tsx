import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Free Study Resources",
  description:
    "Free study materials, practice papers, exam tips, and syllabus guides from The Learners' Academy in Baner, Pune.",
  path: "/resources",
  imageAlt: "Free study resources from The Learners' Academy",
});

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": absoluteUrl("/resources#collection"),
  url: absoluteUrl("/resources"),
  name: "Free Study Resources",
  description:
    "Study materials, practice papers, exam tips, and syllabus guides published by The Learners' Academy.",
  inLanguage: "en-IN",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Study Resources", "/resources")} />
      <JsonLd data={collectionSchema} />
      {children}
    </>
  );
}
