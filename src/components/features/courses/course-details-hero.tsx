"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Play, Share2 } from "lucide-react";
import { Header } from "@/components/layout/header";
import { CourseSidebarCard } from "./course-sidebar-card";
import { FullCourseDetails } from "@/lib/constants/courses-data";

interface CourseDetailsHeroProps {
  course: FullCourseDetails;
}

export function CourseDetailsHero({ course }: CourseDetailsHeroProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full min-h-[960px] bg-brand-blue text-neutral-50 overflow-visible">
      {/* 120px Architectural Grid Lines (matching Figma 57:171 Group 4) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.12] overflow-hidden">
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
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cd-grid)" />
        </svg>
      </div>

      {/* Embedded Header Variant Hero */}
      <Header variant="hero" />

      {/* Main Course Details Header Container (Figma 55:4183) */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] pt-4 md:pt-8 flex flex-col">
        {/* Top Metadata Row: Title, Subtitle, Badges & Share button */}
        <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-semibold text-[32px] sm:text-[40px] md:text-[44px] text-white tracking-tight leading-[1.2] mb-3">
              Build Digital Asset: A Comprehensive Guide
            </h1>
            <p className="font-sans text-neutral-100 text-base md:text-lg mb-2">
              Unlock the Power of Digital Creation with Expert Guidance
            </p>
            <Link
              href="/creators/purepearl-studio"
              className="font-sans text-sm text-[#CBFC01] hover:underline mb-4 inline-block"
            >
              by purepearl studio
            </Link>

            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="h-[36px] px-4 rounded-full bg-white text-[#242528] text-xs font-medium font-sans flex items-center gap-1.5 shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#4B4C53]">
                  <path d="M2 17h4v4H2v-4zm6-5h4v9H8v-9zm6-5h4v14h-4V7zm6-5h4v19h-4V2z" />
                </svg>
                Intermediate
              </span>
              <span className="h-[36px] px-4 rounded-full bg-white text-[#242528] text-xs font-medium font-sans flex items-center gap-1.5 shadow-sm">
                <Star className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
                4.8 (172 reviews)
              </span>
              <span className="h-[36px] px-4 rounded-full bg-white text-[#242528] text-xs font-medium font-sans flex items-center gap-1.5 shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#4B4C53]">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                199 Students
              </span>
            </div>
          </div>

          {/* Share Button (Figma 55:4200: #CBFC01 pill button) */}
          <div>
            <button
              type="button"
              className="h-[46px] px-6 rounded-full bg-[#CBFC01] hover:bg-[#b8e400] text-neutral-950 font-sans font-medium text-sm flex items-center gap-2 transition-colors shadow-md cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Video Preview on Left + Floating Sidebar Card on Right */}
        <div className="relative flex flex-col lg:flex-row items-start justify-between gap-8 pb-16 lg:pb-0">
          {/* Large Video Preview (Figma 55:4202: 720x479) */}
          <div className="w-full lg:w-[720px] h-[340px] sm:h-[420px] lg:h-[479px] lg:mb-16 rounded-[24px] overflow-hidden relative bg-black shadow-2xl shrink-0">
            {!isPlaying ? (
              <>
                <Image
                  src="/assets/courses/video-preview-girl.png"
                  alt="Build Digital Asset Preview"
                  fill
                  className="object-cover"
                  priority
                />
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer group"
                  aria-label="Play course preview"
                >
                  <div className="w-16 h-16 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-neutral-900 ml-1 text-neutral-900" />
                  </div>
                </button>
              </>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Course Preview Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Floating Sidebar Card (Figma 55:4206: 412x959) */}
          <div className="w-full lg:w-[412px] shrink-0 lg:absolute lg:top-0 lg:right-0 z-20">
            <CourseSidebarCard course={course} />
          </div>
        </div>
      </div>
    </section>
  );
}
