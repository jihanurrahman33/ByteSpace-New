import type { Metadata } from "next";
import { CourseService } from "@/services/course.service";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const normalizedId = id.replace(/-[0-9]+$/, "");
  const course =
    CourseService.getCourseById(normalizedId) ||
    CourseService.getCourseById(id);

  const title = course ? `${course.title} | ByteSpace` : "Course Details | ByteSpace";
  const description = course
    ? `Learn ${course.title} with ${course.author} on ByteSpace.`
    : "Explore course details on ByteSpace.";

  return {
    title,
    description,
  };
}

export default function CourseDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
