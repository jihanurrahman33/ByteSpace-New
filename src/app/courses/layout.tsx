import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Courses",
  description: "Browse top-rated courses in design, development, business, and creativity on ByteSpace.",
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
