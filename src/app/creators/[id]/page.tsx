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
          <div className="flex flex-col gap-6 max-w-4xl">
            {/* Header info row: Avatar + Name + Role */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Avatar: 96x96 with 24px border radius as in Figma node 60:2175 */}
              <div className="relative w-24 h-24 rounded-[24px] overflow-hidden shrink-0 shadow-lg bg-neutral-100">
                <Image
                  src="/assets/creators/purepearl-studio.png"
                  alt="PurePearl Studio"
                  fill
                  priority
                  className="object-cover"
                  sizes="96px"
                />
              </div>

              {/* Profile Name & Subtitle */}
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="font-heading font-semibold text-3xl sm:text-4xl text-[#f5f5f6] tracking-tight">
                    PurePearl Studio
                  </h1>
                  <span className="px-3 py-1 rounded-full bg-secondary-400 text-neutral-900 font-sans text-xs font-semibold">
                    Creator
                  </span>
                </div>
                <p className="font-sans text-[#f5f5f6]/90 text-lg font-normal mt-1">
                  Passionate UI/UX, Web designer
                </p>
              </div>
            </div>

            {/* Bio text from Figma */}
            <p className="font-sans text-[#f5f5f6] text-base sm:text-lg leading-relaxed whitespace-pre-line">
              Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
              {"\n"}Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>

            {/* Stats pills & Follow Button */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-3">
                {/* Products Stat Pill */}
                <div className="bg-white rounded-full px-5 py-2 flex items-center gap-2 shadow-sm">
                  <span className="font-sans font-medium text-lg text-brand-blue">3</span>
                  <span className="font-sans font-medium text-lg text-neutral-900">Products</span>
                </div>

                {/* Followers Stat Pill */}
                <div className="bg-white rounded-full px-5 py-2 flex items-center gap-2 shadow-sm">
                  <span className="font-sans font-medium text-lg text-brand-blue">{isFollowing ? "13" : "12"}</span>
                  <span className="font-sans font-medium text-lg text-neutral-900">Followers</span>
                </div>
              </div>

              {/* Follow Button */}
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className="h-11 px-8 rounded-full bg-secondary-400 hover:bg-[#c2ea1b] text-neutral-950 font-sans font-medium text-lg transition-all cursor-pointer shadow-sm ml-auto sm:ml-0"
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
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
