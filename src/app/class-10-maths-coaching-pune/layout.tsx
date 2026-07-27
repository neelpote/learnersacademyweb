import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Class 10 Maths Coaching in Pune",
  description:
    "Class 10 Maths coaching in Baner, Pune for CBSE, ICSE, and SSC board preparation. Build strong concepts through small batches, guided practice, and regular tests.",
  path: "/class-10-maths-coaching-pune",
  image: "/class10-maths-coaching-baner-classroom.png",
  imageAlt: "Class 10 Mathematics coaching in Baner, Pune",
  imageWidth: 1920,
  imageHeight: 600,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
