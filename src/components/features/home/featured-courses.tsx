"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { ALL_COURSES } from "@/lib/constants/courses-data";
import { LogoLoader } from "@/components/ui/logo-loader";

interface Course {
  id: string;
  title: string;
  category: string;
  author: string;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
  price: string;
  period: string;
  rating: number;
  image: string;
}

const DEFAULT_COURSES: Course[] = [
  {
    id: "figma-basic",
    title: "Learn Figma from Basic",
    category: "UI/UX Design",
    author: "by purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    image: "/assets/courses/course-figma.png",
  },
  {
    id: "digital-asset",
    title: "Build Digital Asset",
    category: "Design",
    author: "by purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    image: "/assets/courses/course-digital-asset.png",
  },
  {
    id: "big-data",
    title: "the Power of Big Data",
    category: "Data Science",
    author: "by purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    image: "/assets/courses/course-big-data.png",
  },
  {
    id: "productivity-self-care",
    title: "Balancing Productivity and Self-Care",
    category: "Productivity",
    author: "by purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    image: "/assets/courses/course-productivity.png",
  },
  {
    id: "money-management",
    title: "Mastering Money Management",
    category: "Marketing",
    author: "by purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    image: "/assets/courses/course-money-management.png",
  },
  {
    id: "idea-to-startup",
    title: "From Idea to Startup Success",
    category: "Freelance & Entrepreneurship",
    author: "by purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    image: "/assets/courses/course-startup-success.png",
  },
];

const ROW_1_TABS = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
];

const ROW_2_TABS = [
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
];

const ROW_3_TABS = [
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const ALL_TABS = [...ROW_1_TABS, ...ROW_2_TABS, ...ROW_3_TABS];

export function FeaturedCoursesSection() {
  const [activeTab, setActiveTab] = useState("Featured");
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 280);
  };

  const displayedCourses = useMemo(() => {
    if (activeTab === "Featured") {
      return DEFAULT_COURSES;
    }

    // Try finding courses in ALL_COURSES matching this category
    const exactMatches = ALL_COURSES.filter(
      (c) =>
        c.category &&
        (c.category.toLowerCase().includes(activeTab.toLowerCase()) ||
          activeTab.toLowerCase().includes(c.category.toLowerCase()))
    ).map((c) => ({
      id: c.id,
      title: c.title,
      category: c.category || activeTab,
      author: c.author,
      lessons: c.lessons,
      duration: c.duration,
      comments: c.comments,
      level: c.level,
      price: c.price,
      period: c.period,
      rating: c.rating,
      image: c.image,
    }));

    if (exactMatches.length >= 6) {
      return exactMatches.slice(0, 6);
    }

    // Fallback/fill with default courses tailored for this category
    const remainingCount = 6 - exactMatches.length;
    const fillers = DEFAULT_COURSES.slice(0, remainingCount).map((c) => ({
      ...c,
      id: c.id,
      category: activeTab,
    }));

    return [...exactMatches, ...fillers];
  }, [activeTab]);

  return (
    <section className="w-full bg-white pb-14 sm:pb-20 md:pb-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px]">
        {/* Mobile Category Tabs Sidescroll (< md) */}
        <div className="flex md:hidden w-full overflow-x-auto no-scrollbar gap-2 px-4 -mx-4 pb-2 mb-8 items-center scroll-smooth">
          {ALL_TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={`mobile-${tab}`}
                type="button"
                onClick={() => handleTabChange(tab)}
                className={`h-9 px-4 rounded-[24px] text-xs font-medium font-sans whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#D4FB20] text-[#242528] font-semibold shadow-xs"
                    : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E8E8EA]"
                }`}
              >
                {tab}
              </button>
            );
          })}
          <Link
            href="/courses"
            className="h-9 px-3 flex items-center text-xs font-medium font-sans text-[#003BE2] hover:underline cursor-pointer whitespace-nowrap shrink-0"
          >
            + More
          </Link>
        </div>

        {/* Category Tabs for Tablet & Desktop (Figma Tab_Categories_21_33, >= md) */}
        <div className="hidden md:flex flex-col items-center gap-2.5 sm:gap-3 md:gap-4 mb-10 sm:mb-14 md:mb-16">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3">
            {ROW_1_TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleTabChange(tab)}
                  className={`h-9 sm:h-11 px-3 sm:px-5 rounded-[24px] text-xs sm:text-sm md:text-[16px] font-medium font-sans transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#D4FB20] text-[#242528] font-semibold shadow-xs"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E8E8EA]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3">
            {ROW_2_TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleTabChange(tab)}
                  className={`h-9 sm:h-11 px-3 sm:px-5 rounded-[24px] text-xs sm:text-sm md:text-[16px] font-medium font-sans transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#D4FB20] text-[#242528] font-semibold shadow-xs"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E8E8EA]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3">
            {ROW_3_TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleTabChange(tab)}
                  className={`h-9 sm:h-11 px-3 sm:px-5 rounded-[24px] text-xs sm:text-sm md:text-[16px] font-medium font-sans transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#D4FB20] text-[#242528] font-semibold shadow-xs"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E8E8EA]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
            <Link
              href="/courses"
              className="h-9 sm:h-11 px-3 sm:px-4 flex items-center text-xs sm:text-sm md:text-[16px] font-medium font-sans text-[#003BE2] hover:underline cursor-pointer"
            >
              + More
            </Link>
          </div>
        </div>

        {/* 6 Course Cards Grid (Figma Frame 8_33_683) with Loading State */}
        {isLoading ? (
          <div className="w-full py-28 flex items-center justify-center">
            <LogoLoader size="md" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {displayedCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-[24px] border border-[#CED0D3] p-4 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between group"
              >
                {/* Course Thumbnail Link */}
                <Link
                  href={`/courses/${course.id}`}
                  className="block relative w-full h-[180px] sm:h-[195px] rounded-[12px] overflow-hidden bg-[#443131] cursor-pointer"
                >
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 373px"
                  />
                  {/* Frosted Badges at bottom of thumbnail (Figma 13:251) */}
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between gap-1 z-10">
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-[24px] bg-[#F6F6F6]/70 backdrop-blur-[8px] text-[10px] sm:text-[11px] font-medium text-[#242528] font-sans truncate">
                      {course.lessons}
                    </span>
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-[24px] bg-[#F6F6F6]/70 backdrop-blur-[8px] text-[10px] sm:text-[11px] font-medium text-[#242528] font-sans truncate">
                      {course.duration}
                    </span>
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-[24px] bg-[#F6F6F6]/70 backdrop-blur-[8px] text-[10px] sm:text-[11px] font-medium text-[#242528] font-sans truncate">
                      {course.comments}
                    </span>
                  </div>
                </Link>

                {/* Course Details Body */}
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    {/* Title & Rating Row (Figma 13:259 & 13:276) */}
                    <div className="flex items-start justify-between gap-2 mt-4">
                      <div className="flex-1 min-w-0">
                        <Link href={`/courses/${course.id}`}>
                          <h3 className="font-heading font-semibold text-lg sm:text-[20px] text-[#242528] leading-[1.2] group-hover:text-[#003BE2] transition-colors truncate">
                            {course.title}
                          </h3>
                        </Link>
                        <p className="font-sans text-[12px] text-[#82868E] mt-1">
                          {course.author}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 shrink-0 mt-0.5">
                        <span className="text-base sm:text-[18px] text-[#242528] font-sans font-medium leading-none">
                          {course.rating}
                        </span>
                        <Star className="w-4 h-4 fill-[#94969C] text-[#94969C]" />
                      </div>
                    </div>

                    {/* Level & Student Count with Mini Avatars and 26+ circle badge (Figma 13:262) */}
                    <div className="flex items-center gap-2.5 sm:gap-3 mt-4">
                      <span className="px-3 py-1 rounded-[24px] bg-[#F5F5F6] text-[#4B4C53] text-[12px] font-medium font-sans flex items-center gap-1.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#4B4C53]">
                          <path d="M2 17h4v4H2v-4zm6-5h4v9H8v-9zm6-5h4v14h-4V7zm6-5h4v19h-4V2z" />
                        </svg>
                        {course.level}
                      </span>
                      <div className="flex items-center -space-x-1.5">
                        {[
                          "/assets/testimonials/sarah-m.png",
                          "/assets/creators/student-1.png",
                          "/assets/creators/student-2.png",
                          "/assets/creators/student-3.png",
                        ].map((avatar, idx) => (
                          <div
                            key={idx}
                            className="w-5 h-5 rounded-full border border-white overflow-hidden relative shrink-0"
                          >
                            <Image src={avatar} alt="student" fill className="object-cover" sizes="20px" />
                          </div>
                        ))}
                        <div className="w-5 h-5 rounded-full border border-white bg-[#D4FB20] text-[#242528] text-[9px] font-bold flex items-center justify-center shrink-0">
                          26+
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price (Figma 13:273) */}
                  <div className="flex items-baseline gap-1 mt-4 pt-1">
                    <span className="font-heading font-semibold text-lg sm:text-[20px] text-[#003BE2]">
                      {course.price}
                    </span>
                    <span className="font-sans text-[12px] text-[#82868E]">
                      {course.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
