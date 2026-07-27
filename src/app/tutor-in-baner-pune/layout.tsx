import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Tutor in Baner Pune",
  description:
    "Tutoring for Class 7–10 CBSE, ICSE, and SSC students in Baner, Pune. Small batches, personal attention, concept-based Maths and Science learning, and exam preparation.",
  path: "/tutor-in-baner-pune",
  image: "/tutor-in-baner-pune-classroom.png",
  imageAlt: "Tutor helping students at The Learners' Academy in Baner",
  imageWidth: 1920,
  imageHeight: 600,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
