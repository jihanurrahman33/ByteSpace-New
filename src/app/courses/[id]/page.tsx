"use client";

import { use, useMemo } from "react";
import { notFound } from "next/navigation";
import { Check, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CourseDetailsHero } from "@/components/features/courses/course-details-hero";
import { CourseSidebarCard } from "@/components/features/courses/course-sidebar-card";
import { CourseSyllabus } from "@/components/features/courses/course-syllabus";
import { CourseReviewsList } from "@/components/features/courses/course-reviews-list";
import { CourseCard } from "@/components/features/courses/course-card";
import { Footer } from "@/components/layout/footer";
import { ALL_COURSES } from "@/lib/constants/courses-data";

export default function CourseDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const course = useMemo(() => {
    return ALL_COURSES.find((c) => c.id === resolvedParams.id) || ALL_COURSES[0];
  }, [resolvedParams.id]);

  if (!course) {
    notFound();
  }

  const relatedCourses = useMemo(() => {
    return ALL_COURSES.filter((c) => c.id !== course.id).slice(0, 3);
  }, [course.id]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Hero Banner with Course Title, Meta, and Navigation Tabs (Figma 55:4160) */}
      <CourseDetailsHero course={course} activeTab="about" />

      {/* 2. Main Content + Right Sticky Sidebar Layout */}
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] w-full py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Left 2-Columns: Course Description, Key Points, Syllabus & Instructor */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description (Figma Description 55:4125) */}
            <div>
              <h2 className="font-heading font-semibold text-2xl text-neutral-950 mb-4">
                Description
              </h2>
              <p className="font-sans text-neutral-700 text-base leading-relaxed whitespace-pre-line mb-6">
                {course.longDescription}
              </p>
            </div>

            {/* Key Points (Figma Key Points 55:4125) */}
            <div>
              <h3 className="font-heading font-semibold text-xl text-neutral-950 mb-4">
                Key Points
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "Foundational Concepts",
                  "Design Principles Mastery",
                  "Advanced Techniques in Digital Creation",
                  "Project Showcase and Critique",
                  "Optimizing for Various Platforms",
                  "Digital Asset Management Best Practices",
                  "Monetization Strategies",
                  "Capstone Project: Building Your Portfolio",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-neutral-950 stroke-[3]" />
                    </div>
                    <span className="font-sans text-sm font-medium text-neutral-800">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Preview (Syllabus) */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-semibold text-xl text-neutral-950">
                  Course Content
                </h3>
                <span className="font-sans text-xs text-neutral-500">
                  {course.lessons} • {course.duration} total length
                </span>
              </div>
              <CourseSyllabus courseId={course.id} modules={course.modules} />
            </div>

            {/* Instructor Card */}
            <div className="border border-neutral-100 rounded-3xl p-8 bg-neutral-50/70">
              <h3 className="font-heading font-semibold text-xl text-neutral-950 mb-6">
                Instructor
              </h3>
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                  <Image
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1">
                  <Link
                    href={`/creators/${course.instructor.id}`}
                    className="font-heading font-semibold text-lg text-neutral-950 hover:text-brand-blue transition-colors"
                  >
                    {course.instructor.name}
                  </Link>
                  <p className="font-sans text-xs text-neutral-500 mb-3">
                    {course.instructor.title}
                  </p>
                  <p className="font-sans text-sm text-neutral-700 leading-relaxed mb-4">
                    {course.instructor.bio}
                  </p>
                  <div className="flex items-center gap-6 text-xs text-neutral-600 font-sans">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-secondary-400 text-secondary-400" />
                      <span>{course.instructor.rating} Rating</span>
                    </div>
                    <div>
                      <span className="font-semibold text-neutral-900">{course.instructor.studentsCount.toLocaleString()}</span> Students
                    </div>
                    <div>
                      <span className="font-semibold text-neutral-900">{course.instructor.coursesCount}</span> Courses
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div>
              <CourseReviewsList rating={course.rating} reviews={course.reviews} />
            </div>
          </div>

          {/* Right Column: Sticky Video Preview & Enrollment Card */}
          <div className="lg:col-span-1">
            <CourseSidebarCard course={course} />
          </div>
        </div>

        {/* 3. Related Courses Section */}
        <div className="mt-20 pt-16 border-t border-neutral-100">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-neutral-950">
              Related Courses
            </h2>
            <Link href="/courses" className="text-sm font-semibold text-brand-blue hover:underline">
              View All Courses
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedCourses.map((rc) => (
              <CourseCard key={rc.id} course={rc} />
            ))}
          </div>
        </div>
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}
