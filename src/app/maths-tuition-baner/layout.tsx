import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Maths Tuition Classes in Baner Pune",
  description:
    "Maths tuition in Baner for Classes 7–10 across CBSE, ICSE, and SSC. Concept-based teaching, small batches, guided problem solving, and board exam preparation.",
  path: "/maths-tuition-baner",
  image: "/maths-coaching-classroom-baner-pune.png",
  imageAlt: "Maths tuition class at The Learners' Academy in Baner",
});

export default function MathsTuitionBanerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
