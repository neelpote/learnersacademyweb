import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Best Tuition Classes in Baner Pune",
  description:
    "Expert tuition classes in Baner for Class 7–10 CBSE, ICSE, and SSC students. Small batches, concept-based learning, personal attention, and board exam preparation.",
  path: "/best-tuition-classes-baner",
  image: "/best-tuition-classes-baner-classroom.png",
  imageAlt: "Tuition class at The Learners' Academy in Baner, Pune",
  imageWidth: 1920,
  imageHeight: 600,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
