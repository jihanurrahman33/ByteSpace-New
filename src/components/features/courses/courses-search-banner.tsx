"use client";

import { Header } from "@/components/layout/header";

interface CoursesSearchBannerProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function CoursesSearchBanner({
  searchQuery,
  onSearchChange,
}: CoursesSearchBannerProps) {
  return (
    <section className="relative w-full h-[360px] bg-brand-blue text-neutral-50 overflow-hidden flex flex-col justify-between">
      {/* 120px Architectural Grid Lines (matching Figma 55:1693 Group 4) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
        <svg
          className="w-full h-full"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="search-grid"
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
          <rect width="100%" height="100%" fill="url(#search-grid)" />
        </svg>
      </div>

      {/* Embedded Header Variant Hero */}
      <Header variant="hero" />

      {/* Title & Search Bar (Figma 55:857: 624x127 at y: 1912) */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] w-full flex flex-col items-center text-center pb-8 sm:pb-12 pt-2 sm:pt-0">
        <h1 className="font-heading font-semibold text-[28px] sm:text-[36px] md:text-[44px] text-white tracking-tight leading-[1.2] mb-4 sm:mb-6">
          Find Your Next Course
        </h1>

        <div className="w-full max-w-[624px] h-[50px] sm:h-[54px] bg-white rounded-full p-1 sm:p-1.5 pl-4 sm:pl-6 flex items-center shadow-lg">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-[#82868E] shrink-0 mr-2 sm:mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="flex-1 min-w-0 bg-transparent border-none text-[#242528] placeholder-[#82868E] font-sans text-sm sm:text-base outline-none"
          />
          <button
            type="button"
            className="h-[38px] sm:h-[42px] px-3.5 sm:px-6 rounded-full bg-[#CBFC01] hover:bg-[#b8e400] text-neutral-950 font-sans font-medium text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition-colors cursor-pointer shrink-0"
          >
            <span>Courses</span>
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
