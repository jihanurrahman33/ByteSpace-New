"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CourseCard } from "@/components/features/courses/course-card";
import { CoursesFilterBar } from "@/components/features/courses/courses-filter-bar";
import { LogoLoader } from "@/components/ui/logo-loader";
import { CourseService } from "@/services/course.service";
import { useUIStore } from "@/stores/use-ui-store";

export default function CreatorProfilePage() {
  const { isCreatorFollowed, toggleFollowCreator } = useUIStore();
  const isFollowing = isCreatorFollowed("purepearl");

  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedSort, setSelectedSort] = useState("relevant");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isLoadingGrid, setIsLoadingGrid] = useState(false);

  const triggerLoading = () => {
    setIsLoadingGrid(true);
    setTimeout(() => {
      setIsLoadingGrid(false);
    }, 280);
  };

  // 6 courses shown in Figma frame 78:2503
  const creatorCourses = useMemo(() => {
    const result = CourseService.getAllCourses().filter((c) => {
      const matchesLevel =
        selectedLevel === "All Levels" || c.level === selectedLevel;
      const matchesCategory =
        selectedCategory === "All Categories" ||
        (c.category &&
          c.category.toLowerCase().includes(selectedCategory.toLowerCase()));

      let matchesFilter = true;
      if (selectedFilter === "top-rated") {
        matchesFilter = c.rating >= 4.5;
      } else if (selectedFilter === "under-30") {
        const priceNum = parseFloat(c.price.replace(/[^0-9.]/g, "")) || 0;
        matchesFilter = priceNum <= 30;
      }

      return matchesLevel && matchesCategory && matchesFilter;
    });

    if (selectedSort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === "price-asc") {
      result.sort((a, b) => {
        const pA = parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0;
        const pB = parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0;
        return pA - pB;
      });
    } else if (selectedSort === "price-desc") {
      result.sort((a, b) => {
        const pA = parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0;
        const pB = parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0;
        return pB - pA;
      });
    }

    return result.slice(0, 6);
  }, [selectedLevel, selectedCategory, selectedSort, selectedFilter]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Creator Hero & Profile Card Banner (Figma 60:2155, height: 592px) */}
      <section className="relative w-full min-h-[592px] bg-brand-blue text-neutral-50 overflow-hidden pb-16">
        {/* 120px Architectural Grid Pattern (matching Figma 60:2454 Group 4) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
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
                  strokeWidth="2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#creator-grid)" />
          </svg>
        </div>

        {/* Embedded Header Variant Hero */}
        <Header variant="hero" />

        {/* Profile Details Container (Figma 60:2171: 1198x338 at y=1920) */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] pt-4 md:pt-8 flex flex-col justify-between">
          <div className="flex flex-col gap-5 sm:gap-6 max-w-[1198px]">
            {/* Header info row: Avatar + Name + Creator Tag + Subtitle */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              {/* Avatar: 96x96 with 24px border radius as in Figma node 60:2175 */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[20px] sm:rounded-[24px] overflow-hidden shrink-0 bg-neutral-100 shadow-md">
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
              <div className="flex flex-col gap-1 sm:gap-1.5">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <h1 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl text-[#F5F5F6] tracking-tight">
                    PurePearl Studio
                  </h1>
                  <span className="h-[30px] sm:h-[35px] px-3 sm:px-4 rounded-full bg-[#D4FB20] text-[#242528] font-sans text-xs font-semibold flex items-center justify-center">
                    Creator
                  </span>
                </div>
                <p className="font-sans text-[#F5F5F6] text-sm sm:text-base md:text-lg font-normal">
                  Passionate UI/UX, Web designer
                </p>
              </div>
            </div>

            {/* Bio text from Figma node 60:2185 */}
            <div className="font-sans text-[#F5F5F6] text-sm sm:text-base leading-relaxed space-y-2">
              <p>
                Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
              </p>
              <p>
                Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
              </p>
            </div>

            {/* Stats pills & Follow Button (Figma 60:2186) */}
            <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Products Stat Pill (Figma 60:2188: 140x46, radius 24) */}
                <div className="h-[40px] sm:h-[46px] px-4 sm:px-6 rounded-full bg-white flex items-center gap-2 shadow-xs">
                  <span className="font-heading font-semibold text-base sm:text-lg text-[#003BE2]">6</span>
                  <span className="font-sans font-medium text-sm sm:text-base text-[#242528]">Products</span>
                </div>

                {/* Followers Stat Pill (Figma 60:2191: 150x46, radius 24) */}
                <div className="h-[40px] sm:h-[46px] px-4 sm:px-6 rounded-full bg-white flex items-center gap-2 shadow-xs">
                  <span className="font-heading font-semibold text-base sm:text-lg text-[#003BE2]">
                    {isFollowing ? "13" : "12"}
                  </span>
                  <span className="font-sans font-medium text-sm sm:text-base text-[#242528]">Followers</span>
                </div>
              </div>

              {/* Follow Button (Figma 60:2194: 101x46, radius 24, bg #D4FB20) */}
              <button
                type="button"
                onClick={() => toggleFollowCreator("purepearl")}
                className={`h-[40px] sm:h-[46px] px-6 sm:px-8 rounded-full font-sans font-medium text-sm sm:text-base transition-all cursor-pointer shadow-xs shrink-0 ${
                  isFollowing
                    ? "bg-white text-[#003BE2] border border-white hover:bg-neutral-100"
                    : "bg-[#D4FB20] text-[#242528] hover:bg-[#c2ea1b]"
                }`}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Creator Courses Section with Filters Bar (Figma 60:1928) */}
      <main className="flex-1 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] w-full py-8 sm:py-12 md:py-16 min-h-[450px]">
        {/* Filters Bar (Figma 60:1930) */}
        <CoursesFilterBar
          selectedLevel={selectedLevel}
          onLevelChange={(lvl) => {
            setSelectedLevel(lvl);
            triggerLoading();
          }}
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => {
            setSelectedCategory(cat);
            triggerLoading();
          }}
          selectedSort={selectedSort}
          onSortChange={(sort) => {
            setSelectedSort(sort);
            triggerLoading();
          }}
          selectedFilter={selectedFilter}
          onFilterChange={(flt) => {
            setSelectedFilter(flt);
            triggerLoading();
          }}
        />

        {/* 6 Course Cards Grid with Loading State */}
        {isLoadingGrid ? (
          <div className="w-full py-24 flex items-center justify-center">
            <LogoLoader size="md" />
          </div>
        ) : creatorCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-10">
            {creatorCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-2">
              No courses found
            </h3>
            <p className="text-neutral-500 font-sans text-sm">
              Try adjusting your filter selection.
            </p>
          </div>
        )}
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
