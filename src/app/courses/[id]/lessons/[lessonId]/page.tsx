import { redirect } from "next/navigation";

export default async function CourseLessonsRedirect({
  params,
}: {
  params: Promise<{ id: string; lessonId: string }>;
}) {
  const { id } = await params;
  redirect(`/courses/${id}?tab=lessons`);
}
