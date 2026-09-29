"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Bookmark } from "lucide-react";

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

const COURSES_DATA: Course[] = [
  {
    id: "figma-basic",
    title: "Learn Figma from Basic",
    category: "Design",
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
    category: "Business",
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
    category: "Data",
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
    category: "Wellness",
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
    category: "Finance",
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
    category: "Business",
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

export function FeaturedCoursesSection() {
  const [activeTab, setActiveTab] = useState("Featured");
  const [bookmarked, setBookmarked] = useState<Record<string, boolean>>({});

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full bg-white pb-20 md:pb-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
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
                  className={`h-11 px-4 sm:px-5 rounded-[24px] text-[16px] font-medium font-sans transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#D4FB20] text-[#242528] font-medium shadow-xs"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E8E8EA]"
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
                  className={`h-11 px-4 sm:px-5 rounded-[24px] text-[16px] font-medium font-sans transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#D4FB20] text-[#242528] font-medium shadow-xs"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E8E8EA]"
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
                  className={`h-11 px-4 sm:px-5 rounded-[24px] text-[16px] font-medium font-sans transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#D4FB20] text-[#242528] font-medium shadow-xs"
                      : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E8E8EA]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
            <Link
              href="/courses"
              className="h-11 px-4 flex items-center text-[16px] font-medium font-sans text-[#003BE2] hover:underline cursor-pointer"
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
              className="bg-white rounded-[24px] border border-[#CED0D3] p-4 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between group"
            >
              {/* Course Thumbnail (Figma 13:250 341x195px corner:12px) */}
              <div className="relative w-full h-[195px] rounded-[12px] overflow-hidden bg-[#443131]">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 373px"
                />
                {/* Frosted Badges at bottom of thumbnail (Figma 13:251) */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-1.5 z-10">
                  <span className="px-2.5 py-1 rounded-[24px] bg-[#F6F6F6]/60 backdrop-blur-[8px] text-[10px] sm:text-[11px] font-medium text-[#242528] font-sans">
                    {course.lessons}
                  </span>
                  <span className="px-2.5 py-1 rounded-[24px] bg-[#F6F6F6]/60 backdrop-blur-[8px] text-[10px] sm:text-[11px] font-medium text-[#242528] font-sans">
                    {course.duration}
                  </span>
                  <span className="px-2.5 py-1 rounded-[24px] bg-[#F6F6F6]/60 backdrop-blur-[8px] text-[10px] sm:text-[11px] font-medium text-[#242528] font-sans">
                    {course.comments}
                  </span>
                </div>
              </div>

              {/* Course Details Body */}
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  {/* Title & Rating Row (Figma 13:259 & 13:276) */}
                  <div className="flex items-start justify-between gap-2 mt-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-semibold text-[20px] text-[#242528] leading-[1.2] group-hover:text-[#003BE2] transition-colors truncate">
                        {course.title}
                      </h3>
                      <p className="font-sans text-[12px] text-[#82868E] mt-1">
                        {course.author}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 mt-0.5">
                      <span className="text-[18px] text-[#242528] font-sans font-medium leading-none">
                        {course.rating}
                      </span>
                      <Star className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
                    </div>
                  </div>

                  {/* Level & Student Count with Mini Avatars (Figma 13:262) */}
                  <div className="flex items-center gap-3 mt-4">
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
                    </div>
                    <span className="text-[12px] font-medium text-[#242528] font-sans">
                      26+
                    </span>
                  </div>
                </div>

                {/* Price (Figma 13:273) */}
                <div className="flex items-baseline gap-1 mt-4 pt-1">
                  <span className="font-heading font-semibold text-[20px] text-[#003BE2]">
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
      </div>
    </section>
  );
}
