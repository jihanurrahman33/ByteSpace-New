"use client";

import Link from "next/link";
import { Star, Users, Signal, Share2 } from "lucide-react";
import { Header } from "@/components/layout/header";
import { FullCourseDetails } from "@/lib/constants/courses-data";

interface CourseDetailsHeroProps {
  course: FullCourseDetails;
  activeTab: "about" | "lessons" | "reviews";
}

export function CourseDetailsHero({
  course,
  activeTab,
}: CourseDetailsHeroProps) {
  return (
    <section className="relative w-full bg-brand-blue text-neutral-50 overflow-hidden pb-12">
      {/* 120px Architectural Grid Lines (matching Figma 57:171 Group 4) */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <svg
          className="w-full h-full"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="cd-grid"
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
          <rect width="100%" height="100%" fill="url(#cd-grid)" />
        </svg>
      </div>

      {/* Floating 3D Ornaments (Figma 55:4177, 55:4179, 55:4181) */}
      <div className="absolute left-6 top-24 w-12 h-12 pointer-events-none drop-shadow-xl hidden lg:block">
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="cd-silver-cone" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#C0C4CC" />
              <stop offset="100%" stopColor="#8E929B" />
            </linearGradient>
          </defs>
          <polygon points="32,4 58,54 6,54" fill="url(#cd-silver-cone)" />
          <ellipse cx="32" cy="54" rx="26" ry="6" fill="#8E929B" />
        </svg>
      </div>

      <div className="absolute right-10 top-20 w-16 h-16 pointer-events-none drop-shadow-xl hidden lg:block">
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="cd-lime-cone" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5FFAE" />
              <stop offset="60%" stopColor="#D4FB20" />
              <stop offset="100%" stopColor="#8FB500" />
            </linearGradient>
          </defs>
          <polygon points="32,6 56,52 8,52" fill="url(#cd-lime-cone)" />
          <ellipse cx="32" cy="52" rx="24" ry="6" fill="#8FB500" />
        </svg>
      </div>

      {/* Embedded Header Variant Hero */}
      <Header variant="hero" />

      {/* Main Course Details Header Container (Figma 55:4183) */}
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] pt-4 md:pt-8 flex flex-col">
        {/* Title */}
        <h1 className="font-heading font-semibold text-2xl sm:text-4xl md:text-[44px] text-white tracking-tight leading-[1.2] mb-3 max-w-4xl">
          {course.title}: A Comprehensive Guide
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-neutral-100 text-base md:text-lg mb-2 max-w-3xl">
          {course.description}
        </p>

        {/* Instructor link */}
        <Link
          href={`/creators/${course.instructor.id}`}
          className="font-sans text-sm md:text-base text-neutral-300 hover:text-white transition-colors mb-6 inline-block w-fit"
        >
          {course.author}
        </Link>

        {/* Metadata Pill Row & Right-Aligned Share Button (Figma 55:4189) */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Level */}
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs sm:text-sm font-medium text-neutral-100">
              <Signal className="w-4 h-4 text-secondary-400" />
              <span>{course.level}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs sm:text-sm font-medium text-neutral-100">
              <Star className="w-4 h-4 fill-secondary-400 text-secondary-400" />
              <span>{course.rating} (172 reviews)</span>
            </div>

            {/* Students */}
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs sm:text-sm font-medium text-neutral-100">
              <Users className="w-4 h-4 text-secondary-400" />
              <span>199 Students</span>
            </div>
          </div>

          {/* Figma Neon Lime Share Button */}
          <button
            onClick={() => {
              if (typeof navigator !== "undefined" && navigator.share) {
                navigator.share({ title: course.title, url: window.location.href });
              }
            }}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-secondary-400 hover:bg-[#c2ea1b] text-neutral-950 text-sm font-medium transition-colors shadow-xs cursor-pointer"
          >
            <Share2 className="w-4 h-4 stroke-[2.5]" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </section>
  );
}
