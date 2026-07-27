import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Science Tuition Classes in Baner Pune",
  description:
    "Science tuition in Baner for Classes 7–10 across CBSE, ICSE, and SSC. Learn Physics, Chemistry, and Biology through clear concepts, practical examples, and regular tests.",
  path: "/science-tuition-baner",
  image: "/science-classroom-baner-pune.webp",
  imageAlt: "Science tuition class at The Learners' Academy in Baner",
  imageWidth: 1360,
  imageHeight: 907,
});

export default function ScienceTuitionBanerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
