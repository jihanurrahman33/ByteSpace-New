"use client";

import { use, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import { CourseDetailsHero } from "@/components/features/courses/course-details-hero";
import { CourseSidebarCard } from "@/components/features/courses/course-sidebar-card";
import { Footer } from "@/components/layout/footer";
import { ALL_COURSES } from "@/lib/constants/courses-data";

export default function CourseReviewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const [selectedFilter, setSelectedFilter] = useState<string>("All rating");

  const course = useMemo(() => {
    return ALL_COURSES.find((c) => c.id === resolvedParams.id) || ALL_COURSES[0];
  }, [resolvedParams.id]);

  if (!course) {
    notFound();
  }

  const reviews = [
    {
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      time: "a year ago",
      rating: 5,
      avatar: "/assets/creators/purepearl-studio.png",
      comment:
        "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
    },
    {
      name: "Albert Flores",
      role: "UI/UX Designer",
      time: "a year ago",
      rating: 5,
      avatar: "/assets/testimonials/james-l.png",
      comment:
        "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      name: "Cody Fisher",
      role: "UI/UX Designer",
      time: "a year ago",
      rating: 5,
      avatar: "/assets/testimonials/alex-b.png",
      comment:
        "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      time: "a year ago",
      rating: 5,
      avatar: "/assets/testimonials/sarah-m.png",
      comment:
        "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
  ];

  const ratingBars = [
    { stars: 5, count: 720, percent: "80%" },
    { stars: 4, count: 120, percent: "45%" },
    { stars: 3, count: 21, percent: "20%" },
    { stars: 2, count: 12, percent: "12%" },
    { stars: 1, count: 16, percent: "16%" },
  ];

  const filterButtons = ["All rating", "5", "4", "3", "2", "1"];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Royal Blue Hero Banner (matching Figma 60:681) */}
      <CourseDetailsHero course={course} activeTab="reviews" />

      {/* 2. Main Content + Right Sticky Sidebar Layout */}
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] w-full py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Left 2-Columns: Ratings Breakdown & Individual Reviews */}
          <div className="lg:col-span-2 space-y-10">
            {/* Pill Tabs (Figma 60:681 - About / Lesson / Reviews) */}
            <div className="flex items-center gap-3">
              <Link
                href={`/courses/${course.id}`}
                className="h-9 px-5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-sans font-medium text-sm flex items-center justify-center transition-colors"
              >
                About
              </Link>
              <Link
                href={`/courses/${course.id}/lessons/${course.modules[0]?.lessons[0]?.id || "intro"}`}
                className="h-9 px-5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-sans font-medium text-sm flex items-center justify-center transition-colors"
              >
                Lesson
              </Link>
              <Link
                href={`/courses/${course.id}/reviews`}
                className="h-9 px-5 rounded-full bg-secondary-400 text-neutral-950 font-sans font-medium text-sm flex items-center justify-center shadow-xs"
              >
                Reviews
              </Link>
            </div>

            {/* What Learners Are Saying Section */}
            <div>
              <h2 className="font-heading font-semibold text-2xl text-neutral-950 mb-3">
                What Learners Are Saying
              </h2>
              <p className="font-sans text-neutral-700 text-sm md:text-base leading-relaxed">
                Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
              </p>
            </div>

            {/* Ratings Summary Box (Figma 60:681) */}
            <div className="p-6 md:p-8 rounded-3xl border border-neutral-200/80 bg-white flex flex-col sm:flex-row items-center gap-8 shadow-xs">
              {/* Neon Lime Rating Square */}
              <div className="w-28 h-28 rounded-2xl bg-secondary-400 text-neutral-950 flex flex-col items-center justify-center shrink-0 shadow-xs">
                <span className="font-sans text-xs font-medium">Ratings</span>
                <span className="font-heading font-bold text-4xl">4.7</span>
              </div>

              {/* Breakdown Bars */}
              <div className="flex-1 w-full space-y-2.5">
                {ratingBars.map((bar) => (
                  <div key={bar.stars} className="flex items-center gap-3 text-xs text-neutral-600">
                    <div className="w-full bg-neutral-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-secondary-400 h-full rounded-full"
                        style={{ width: bar.percent }}
                      />
                    </div>
                    <div className="flex items-center gap-0.5 shrink-0">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < bar.stars ? "fill-neutral-950 text-neutral-950" : "text-neutral-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="w-8 text-right font-medium text-neutral-700 shrink-0">
                      {bar.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Individual Reviews Section */}
            <div className="space-y-6">
              <h3 className="font-heading font-semibold text-xl text-neutral-950">
                Individual Reviews:
              </h3>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {filterButtons.map((btn) => {
                  const isActive = selectedFilter === btn;
                  return (
                    <button
                      key={btn}
                      onClick={() => setSelectedFilter(btn)}
                      className={`h-9 px-4 rounded-full text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? "bg-secondary-400 text-neutral-950 font-bold shadow-xs"
                          : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
                      }`}
                    >
                      {btn !== "All rating" && (
                        <Star className="w-3 h-3 fill-current text-current" />
                      )}
                      <span>{btn}</span>
                    </button>
                  );
                })}
              </div>

              {/* Reviews List */}
              <div className="space-y-4">
                {reviews.map((rev, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-neutral-100 bg-white hover:border-neutral-200 transition-colors shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-neutral-100">
                          <Image
                            src={rev.avatar}
                            alt={rev.name}
                            fill
                            className="object-cover"
                            sizes="40px"
                          />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-sm text-neutral-950">
                            {rev.name}
                          </h4>
                          <p className="font-sans text-[11px] text-neutral-500">{rev.role}</p>
                        </div>
                      </div>
                      <span className="font-sans text-xs text-neutral-400">{rev.time}</span>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-neutral-950 text-neutral-950" />
                      ))}
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed">
                      &quot;{rev.comment}&quot;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Video Preview & Enrollment Card */}
          <div className="lg:col-span-1">
            <CourseSidebarCard course={course} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
