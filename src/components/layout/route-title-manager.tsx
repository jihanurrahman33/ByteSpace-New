"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { CourseService } from "@/services/course.service";
import { CreatorService } from "@/services/creator.service";

export function RouteTitleManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let title = "ByteSpace - Unlock Your Potential with Modern Learning";

    if (pathname === "/") {
      title = "ByteSpace - Unlock Your Potential with Modern Learning";
    } else if (pathname === "/courses") {
      title = "Explore Courses | ByteSpace";
    } else if (pathname.startsWith("/courses/")) {
      const segments = pathname.split("/").filter(Boolean);
      const courseId = segments[1];
      if (courseId) {
        const normalizedId = courseId.replace(/-[0-9]+$/, "");
        const course =
          CourseService.getCourseById(normalizedId) ||
          CourseService.getCourseById(courseId);
        const courseTitle = course ? course.title : "Course Details";

        const tab = searchParams?.get("tab");
        const subRoute = segments[2];
        if (subRoute === "lessons" || tab === "lessons") {
          title = `Lessons - ${courseTitle} | ByteSpace`;
        } else if (subRoute === "reviews" || tab === "reviews") {
          title = `Reviews - ${courseTitle} | ByteSpace`;
        } else {
          title = `${courseTitle} | ByteSpace`;
        }
      }
    } else if (pathname.startsWith("/creators")) {
      const segments = pathname.split("/").filter(Boolean);
      const creatorId = segments[1] || "purepearl";
      const creator = CreatorService.getCreatorById(creatorId);
      const creatorName = creator ? creator.name : "Creator Profile";
      title = `${creatorName} - Creator Profile | ByteSpace`;
    } else if (pathname === "/login") {
      title = "Sign In | ByteSpace";
    } else if (pathname === "/register") {
      title = "Create Account | ByteSpace";
    }

    document.title = title;
  }, [pathname, searchParams]);

  return null;
}
