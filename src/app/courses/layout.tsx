import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/metadata";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Tuition Plans and Courses",
  description:
    "Compare Super 15, Super 10, and Super 10 Plus tuition plans at The Learners' Academy in Baner, Pune, including batch sizes, teaching hours, tests, and support.",
  path: "/courses",
  imageAlt: "Tuition plans at The Learners' Academy in Baner, Pune",
});

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": absoluteUrl("/courses#collection"),
  url: absoluteUrl("/courses"),
  name: "Tuition Plans and Courses",
  description:
    "Tuition plans offered by The Learners' Academy in Baner, Pune.",
  provider: {
    "@id": `${absoluteUrl("/")}#organization`,
    name: siteConfig.name,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: ["Super 15", "Super 10", "Super 10 Plus"].map(
      (name, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
        url: absoluteUrl("/courses"),
      }),
    ),
  },
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Courses", "/courses")} />
      <JsonLd data={collectionSchema} />
      {children}
    </>
  );
}
