"use client";

import { Search } from "lucide-react";
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
    <section className="relative w-full bg-brand-blue text-neutral-50 overflow-hidden pb-14">
      {/* 120px Architectural Grid Lines (matching Figma 55:1693 Group 4) */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
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
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#search-grid)" />
        </svg>
      </div>

      {/* Floating 3D Ornaments (Cones in Silver & Lime, matching Figma 55:845) */}
      <div className="absolute left-10 top-24 w-12 h-12 pointer-events-none drop-shadow-xl hidden sm:block">
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="sb-lime-cone" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5FFAE" />
              <stop offset="60%" stopColor="#D4FB20" />
              <stop offset="100%" stopColor="#8FB500" />
            </linearGradient>
          </defs>
          <polygon points="32,6 56,52 8,52" fill="url(#sb-lime-cone)" />
          <ellipse cx="32" cy="52" rx="24" ry="6" fill="#8FB500" />
        </svg>
      </div>

      <div className="absolute right-12 bottom-8 w-14 h-14 pointer-events-none drop-shadow-xl hidden sm:block">
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="sb-silver-cone" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#C0C4CC" />
              <stop offset="100%" stopColor="#8E929B" />
            </linearGradient>
          </defs>
          <polygon points="32,4 58,54 6,54" fill="url(#sb-silver-cone)" />
          <ellipse cx="32" cy="54" rx="26" ry="6" fill="#8E929B" />
        </svg>
      </div>

      {/* Embedded Header Variant Hero */}
      <Header variant="hero" />

      {/* Title & Search Bar (Figma 55:857) */}
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] pt-4 md:pt-8 flex flex-col items-center text-center">
        <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-[44px] text-white tracking-tight leading-[1.2] mb-8">
          Find Your Next Course
        </h1>

        <div className="w-full max-w-[624px] z-10">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="h-[52px] bg-white rounded-full pl-5 pr-1.5 flex items-center justify-between shadow-[0_12px_32px_rgba(0,0,0,0.2)]"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Search className="w-5 h-5 text-neutral-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Course, topic, creator"
                className="w-full bg-transparent border-none outline-none text-neutral-900 placeholder:text-neutral-400 font-sans text-sm md:text-base"
              />
            </div>
            <button
              type="submit"
              className="h-10 px-6 rounded-full bg-secondary-400 hover:bg-[#c2ea1b] text-neutral-950 font-medium font-sans text-sm tracking-wide transition-colors cursor-pointer shrink-0"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
