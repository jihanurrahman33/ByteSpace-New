"use client";

import Image from "next/image";
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

      {/* Floating 3D Ornaments from Figma Group 2 (search-decorations.png) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-between overflow-hidden">
        <div className="relative w-full h-full max-w-[1440px] mx-auto">
          {/* Left decorations */}
          <div className="absolute -left-12 top-10 w-44 h-44 opacity-90 hidden sm:block">
            <Image
              src="/assets/hero-cones.png"
              alt=""
              width={180}
              height={180}
              className="object-contain"
            />
          </div>
          {/* Right decorations */}
          <div className="absolute -right-8 bottom-4 w-48 h-48 opacity-90 hidden sm:block">
            <Image
              src="/assets/cta-decorations.png"
              alt=""
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Embedded Header Variant Hero */}
      <Header variant="hero" />

      {/* Title & Search Bar (Figma 55:857) */}
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] pt-6 md:pt-10 flex flex-col items-center text-center">
        <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-[44px] text-white tracking-tight leading-[1.2] mb-8">
          Find Your Next Course
        </h1>

        <div className="w-full max-w-[624px] z-10">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-3 sm:gap-4"
          >
            {/* Search Input Pill */}
            <div className="flex-1 h-[52px] bg-white rounded-full px-5 flex items-center gap-3 shadow-md">
              <Search className="w-5 h-5 text-neutral-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search"
                className="w-full bg-transparent border-none outline-none text-neutral-900 placeholder:text-neutral-400 font-sans text-sm md:text-base"
              />
            </div>

            {/* Courses Filter Button Pill */}
            <button
              type="button"
              className="h-[52px] px-6 rounded-full bg-secondary-400 hover:bg-[#c2ea1b] text-neutral-950 font-medium font-sans text-sm md:text-base flex items-center gap-2 shadow-md transition-colors cursor-pointer shrink-0"
            >
              <span>Courses</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 12 8">
                <path d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
