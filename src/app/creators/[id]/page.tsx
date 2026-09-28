"use client";

import { use, useState } from "react";
import Image from "next/image";
import { Filter, ChevronDown, Check } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CourseCard } from "@/components/features/courses/course-card";
import { ALL_COURSES } from "@/lib/constants/courses-data";

export default function CreatorProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const [isFollowing, setIsFollowing] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const creatorCourses = ALL_COURSES.filter((c) => {
    const matchesLevel = selectedLevel === "All" || c.level === selectedLevel;
    const matchesCategory =
      selectedCategory === "All" ||
      c.category === selectedCategory ||
      (c.category && selectedCategory.toLowerCase().includes(c.category.toLowerCase()));
    return matchesLevel && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Creator Hero & Profile Card Banner (Figma 60:2155) */}
      <section className="relative w-full bg-brand-blue text-neutral-50 overflow-hidden pb-16">
        {/* 120px Architectural Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <svg
            className="w-full h-full"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="creator-grid"
                width="120"
                height="120"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 120 0 L 0 0 0 120"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#creator-grid)" />
          </svg>
        </div>

        {/* Embedded Header Variant Hero */}
        <Header variant="hero" />

        {/* Profile Details Container */}
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] pt-4 md:pt-8">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            {/* Avatar */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-2xl bg-white">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop"
                alt="PurePearl Studio"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 112px, 144px"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl text-white">
                  PurePearl Studio
                </h1>
                <span className="px-3 py-1 rounded-full bg-secondary-400 text-neutral-950 font-sans text-xs font-semibold">
                  Creator
                </span>
              </div>

              <p className="font-sans text-secondary-200 text-sm sm:text-base font-medium mb-4">
                Passionate UI/UX, Web designer
              </p>

              <p className="font-sans text-neutral-100 text-sm sm:text-base max-w-3xl leading-relaxed mb-6">
                Welcome to the creative world of PurePearl Studio. Here, you will discover the
                passion, expertise, and inspiration that drive our creative journey. Let&apos;s explore
                and learn together! Dive into our creative portfolio, showcasing a glimpse of artistic
                endeavors from digital designs to multimedia projects.
              </p>

              {/* Stats & Follow Button */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-10">
                <div>
                  <p className="font-heading font-bold text-2xl sm:text-3xl text-white">
                    {ALL_COURSES.length}
                  </p>
                  <p className="font-sans text-xs text-neutral-300">Products</p>
                </div>

                <div className="w-px h-8 bg-white/20" />

                <div>
                  <p className="font-heading font-bold text-2xl sm:text-3xl text-white">
                    {isFollowing ? "14,201" : "14,200"}
                  </p>
                  <p className="font-sans text-xs text-neutral-300">Followers</p>
                </div>

                <button
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`h-11 px-7 rounded-full font-sans font-semibold text-sm transition-all cursor-pointer shadow-md ${
                    isFollowing
                      ? "bg-white text-neutral-950"
                      : "bg-secondary-400 hover:bg-[#c2ea1b] text-neutral-950"
                  }`}
                >
                  {isFollowing ? "Following" : "Follow"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Creator Courses Section with Filters Bar (Figma 60:1928) */}
      <main className="flex-1 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] w-full py-12 md:py-16">
        {/* Filters Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-neutral-100 mb-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-neutral-950 font-heading">
              <Filter className="w-4 h-4 text-brand-blue" />
              <span>Filter:</span>
            </div>

            {/* Level Filter */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="h-10 px-4 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-sans text-neutral-700 outline-none hover:border-neutral-300 cursor-pointer"
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="h-10 px-4 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm font-sans text-neutral-700 outline-none hover:border-neutral-300 cursor-pointer"
            >
              <option value="All">All Categories</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Development">Development</option>
              <option value="Marketing">Marketing</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div className="text-xs text-neutral-400 font-sans">
            Showing <span className="font-semibold text-neutral-800">{creatorCourses.length}</span> courses
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {creatorCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
