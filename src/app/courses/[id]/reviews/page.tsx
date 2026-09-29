"use client";

import { use, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import { CourseDetailsHero } from "@/components/features/courses/course-details-hero";
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
      avatar: "/assets/testimonials/james-l.png",
      comment:
        "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
    },
    {
      name: "Albert Flores",
      role: "UI/UX Designer",
      time: "a year ago",
      rating: 5,
      avatar: "/assets/testimonials/sarah-m.png",
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
      avatar: "/assets/testimonials/james-l.png",
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
      {/* 1. Hero Banner with Course Title, Meta, Video, and Floating Sidebar (Figma 60:681) */}
      <CourseDetailsHero course={course} />

      {/* 2. Main Content (Left Column 723px) */}
      <main className="relative w-full bg-white flex-1">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] pt-12 md:pt-16 pb-24">
          <div className="w-full lg:w-[723px] flex flex-col">
            {/* Pill Tabs (Figma 60:683 - About / Lesson / Reviews) */}
            <div className="flex items-center gap-3 mb-10">
              <Link
                href={`/courses/${course.id}`}
                className="h-[43px] px-6 rounded-full bg-[#F5F5F6] text-[#4B4C53] hover:text-[#242528] font-sans font-medium text-base flex items-center justify-center transition-colors"
              >
                About
              </Link>
              <Link
                href={`/courses/${course.id}/lessons/${course.modules[0]?.lessons[0]?.id || "intro"}`}
                className="h-[43px] px-6 rounded-full bg-[#F5F5F6] text-[#4B4C53] hover:text-[#242528] font-sans font-medium text-base flex items-center justify-center transition-colors"
              >
                Lesson
              </Link>
              <Link
                href={`/courses/${course.id}/reviews`}
                className="h-[43px] px-6 rounded-full bg-[#D4FB20] text-[#242528] font-sans font-medium text-base flex items-center justify-center transition-colors"
              >
                Reviews
              </Link>
            </div>

            {/* What Learners Are Saying Section */}
            <div className="mb-10">
              <h2 className="font-heading font-semibold text-[20px] text-[#242528] mb-3">
                What Learners Are Saying
              </h2>
              <p className="font-sans text-base text-[#4B4C53] leading-relaxed">
                Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
              </p>
            </div>

            {/* Ratings Summary Box (Figma 60:1294: 723x226) */}
            <div className="w-full rounded-[16px] border border-[#CED0D3] bg-white p-6 md:p-8 flex flex-col sm:flex-row items-center gap-8 mb-10">
              {/* Neon Lime Rating Square */}
              <div className="w-[104px] h-[104px] rounded-[16px] bg-[#D4FB20] text-[#242528] flex flex-col items-center justify-center shrink-0">
                <span className="font-sans text-xs font-medium text-[#242528]">Ratings</span>
                <span className="font-heading font-bold text-4xl text-[#242528]">4.7</span>
              </div>

              {/* Breakdown Bars */}
              <div className="flex-1 w-full space-y-3">
                {ratingBars.map((bar) => (
                  <div key={bar.stars} className="flex items-center gap-3 text-xs text-[#4B4C53]">
                    <div className="w-full bg-[#E5E6E8] h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#D4FB20] h-full rounded-full"
                        style={{ width: bar.percent }}
                      />
                    </div>
                    <div className="flex items-center gap-0.5 shrink-0">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-[#242528] text-[#242528]"
                        />
                      ))}
                    </div>
                    <span className="w-8 text-right font-medium text-[#4B4C53] shrink-0 font-sans">
                      {bar.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Individual Reviews Section */}
            <div>
              <h3 className="font-heading font-semibold text-[20px] text-[#242528] mb-4">
                Individual Reviews:
              </h3>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {filterButtons.map((btn) => {
                  const isActive = selectedFilter === btn;
                  return (
                    <button
                      key={btn}
                      onClick={() => setSelectedFilter(btn)}
                      className={`h-[40px] px-5 rounded-full text-sm font-medium font-sans transition-colors cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? "bg-[#D4FB20] text-[#242528]"
                          : "bg-white border border-[#CED0D3] text-[#242528] hover:bg-[#F5F5F6]"
                      }`}
                    >
                      {btn !== "All rating" && (
                        <Star className="w-3.5 h-3.5 fill-current text-current" />
                      )}
                      <span>{btn}</span>
                    </button>
                  );
                })}
              </div>

              {/* Reviews Cards (Figma 60:1373 etc: rounded-24px border border-[#CED0D3]) */}
              <div className="space-y-6">
                {reviews.map((rev, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-[24px] border border-[#CED0D3] bg-white flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#CED0D3]">
                          <Image
                            src={rev.avatar}
                            alt={rev.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-base text-[#242528]">
                            {rev.name}
                          </h4>
                          <p className="font-sans text-xs text-[#82868E]">{rev.role}</p>
                        </div>
                      </div>
                      <span className="font-sans text-xs text-[#82868E]">{rev.time}</span>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#242528] text-[#242528]" />
                      ))}
                    </div>

                    <p className="font-sans text-base text-[#4B4C53] leading-relaxed">
                      &quot;{rev.comment}&quot;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
