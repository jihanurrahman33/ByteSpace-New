"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Bookmark, Signal } from "lucide-react";

interface Course {
  id: string;
  title: string;
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

const COURSES_DATA: Course[] = [
  {
    id: "figma-basic",
    title: "Learn Figma from Basic",
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
    author: "by purepearl studio",
    lessons: "24 Lessons",
    duration: "3 hours 40 mins",
    comments: "82 Comments",
    level: "Intermediate",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    image: "/assets/courses/course-digital-asset.png",
  },
  {
    id: "big-data",
    title: "the Power of Big Data",
    author: "by purepearl studio",
    lessons: "19 Lessons",
    duration: "4 hours 10 mins",
    comments: "45 Comments",
    level: "All Levels",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    image: "/assets/courses/course-big-data.png",
  },
  {
    id: "productivity-self-care",
    title: "Balancing Productivity and Self-Care",
    author: "by purepearl studio",
    lessons: "12 Lessons",
    duration: "1 hour 45 mins",
    comments: "37 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    image: "/assets/courses/course-productivity.png",
  },
  {
    id: "money-management",
    title: "Mastering Money Management",
    author: "by purepearl studio",
    lessons: "28 Lessons",
    duration: "5 hours 12 mins",
    comments: "94 Comments",
    level: "Intermediate",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    image: "/assets/courses/course-money-management.png",
  },
  {
    id: "idea-to-startup",
    title: "From Idea to Startup Success",
    author: "by purepearl studio",
    lessons: "32 Lessons",
    duration: "6 hours 30 mins",
    comments: "118 Comments",
    level: "Advanced",
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

export function FeaturedCoursesSection() {
  const [activeTab, setActiveTab] = useState("Featured");
  const [bookmarked, setBookmarked] = useState<Record<string, boolean>>({});

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        {/* Section Heading & Subtitle (Figma Frame 3_12_101) */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-14">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-[44px] text-[#040819] leading-[1.2] mb-4">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="font-sans text-neutral-400 text-base md:text-lg leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Tabs (Figma Tab_Categories_21_33, Frame 6_21_56, Frame 7_21_63) */}
        <div className="flex flex-col items-center gap-3 md:gap-4 mb-14 md:mb-16">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {ROW_1_TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`h-11 px-4 sm:px-5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-secondary-400 text-neutral-950 font-semibold shadow-xs"
                      : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {ROW_2_TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`h-11 px-4 sm:px-5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-secondary-400 text-neutral-950 font-semibold shadow-xs"
                      : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {ROW_3_TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`h-11 px-4 sm:px-5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-secondary-400 text-neutral-950 font-semibold shadow-xs"
                      : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
            <Link
              href="/courses"
              className="h-11 px-4 flex items-center text-sm font-semibold text-brand-blue hover:underline cursor-pointer"
            >
              + More
            </Link>
          </div>
        </div>

        {/* 6 Course Cards Grid (Figma Frame 8_33_683) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-[24px] border border-neutral-100 p-4 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Course Thumbnail with Floating Badges */}
              <div className="relative w-full h-[210px] rounded-[16px] overflow-hidden mb-4">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 373px"
                />
                {/* Overlay Top Badges */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-1 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-[11px] font-medium text-neutral-800 shadow-xs">
                    {course.lessons}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-[11px] font-medium text-neutral-800 shadow-xs">
                    {course.duration}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-[11px] font-medium text-neutral-800 shadow-xs">
                    {course.comments}
                  </span>
                </div>
              </div>

              {/* Course Title & Author */}
              <div className="mb-4">
                <h3 className="font-heading font-semibold text-lg sm:text-xl text-neutral-950 mb-1 group-hover:text-brand-blue transition-colors line-clamp-1">
                  {course.title}
                </h3>
                <p className="font-sans text-xs text-neutral-400">{course.author}</p>
              </div>

              {/* Level & Student Avatars */}
              <div className="flex items-center justify-between py-2 border-t border-neutral-100 mb-4">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-50 text-neutral-800 text-xs font-medium">
                  <Signal className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{course.level}</span>
                </div>
                {/* Mini student avatars stack */}
                <div className="flex items-center -space-x-1.5">
                  {[
                    "/assets/testimonials/sarah-m.png",
                    "/assets/creators/student-1.png",
                    "/assets/creators/student-2.png",
                  ].map((avatar, idx) => (
                    <div
                      key={idx}
                      className="w-5 h-5 rounded-full border border-white overflow-hidden relative"
                    >
                      <Image src={avatar} alt="student" fill className="object-cover" sizes="20px" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Price, Rating & Bookmark Button */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading font-semibold text-xl text-brand-blue">
                    {course.price}
                  </span>
                  <span className="font-sans text-xs text-neutral-500">{course.period}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium text-neutral-700">{course.rating}</span>
                    <Star className="w-4 h-4 fill-secondary-400 text-secondary-400" />
                  </div>
                  <button
                    onClick={(e) => toggleBookmark(course.id, e)}
                    className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
                      bookmarked[course.id]
                        ? "bg-secondary-400 border-secondary-400 text-neutral-950"
                        : "border-neutral-200 text-neutral-400 hover:text-neutral-950 hover:bg-neutral-50"
                    }`}
                    aria-label="Bookmark course"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        bookmarked[course.id] ? "fill-neutral-950" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
