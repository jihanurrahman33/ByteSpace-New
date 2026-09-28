"use client";

import { use, useMemo, useState } from "react";
import { notFound } from "next/navigation";
import { CourseDetailsHero } from "@/components/features/courses/course-details-hero";
import { CourseSidebarCard } from "@/components/features/courses/course-sidebar-card";
import { CourseReviewsList } from "@/components/features/courses/course-reviews-list";
import { Footer } from "@/components/layout/footer";
import { ALL_COURSES } from "@/lib/constants/courses-data";

export default function CourseReviewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const [filterRating, setFilterRating] = useState<number | null>(null);

  const course = useMemo(() => {
    return ALL_COURSES.find((c) => c.id === resolvedParams.id) || ALL_COURSES[0];
  }, [resolvedParams.id]);

  if (!course) {
    notFound();
  }

  const filteredReviews = useMemo(() => {
    if (filterRating === null) return course.reviews;
    return course.reviews.filter((r) => Math.floor(r.rating) === filterRating);
  }, [course.reviews, filterRating]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Hero Banner with Course Title, Meta, and Navigation Tabs with Reviews Active */}
      <CourseDetailsHero course={course} activeTab="reviews" />

      {/* 2. Main Content + Right Sticky Sidebar Layout */}
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] w-full py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Left 2-Columns: Detailed Reviews & Filter */}
          <div className="lg:col-span-2 space-y-10">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setFilterRating(null)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  filterRating === null
                    ? "bg-secondary-400 text-neutral-950 font-bold"
                    : "bg-neutral-50 hover:bg-neutral-100 text-neutral-700"
                }`}
              >
                All Reviews
              </button>
              {[5, 4, 3, 2, 1].map((stars) => (
                <button
                  key={stars}
                  onClick={() => setFilterRating(stars)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    filterRating === stars
                      ? "bg-secondary-400 text-neutral-950 font-bold"
                      : "bg-neutral-50 hover:bg-neutral-100 text-neutral-700"
                  }`}
                >
                  {stars} Stars
                </button>
              ))}
            </div>

            {/* Reviews Component */}
            <CourseReviewsList rating={course.rating} reviews={filteredReviews} />
          </div>

          {/* Right Column: Sticky Video Preview & Enrollment Card */}
          <div className="lg:col-span-1">
            <CourseSidebarCard course={course} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
