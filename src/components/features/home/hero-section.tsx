"use client";

import Image from "next/image";
import { Search, Star } from "lucide-react";
import { Header } from "@/components/layout/header";

export function HeroSection() {
  return (
    <section className="relative w-full bg-brand-blue text-neutral-50 overflow-hidden">
      {/* 120px Architectural Grid Lines (matching Figma 12:224 Group 4) */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <svg
          className="w-full h-full"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid"
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
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Radial Glow Highlight (Figma Ellipse 7) */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-40 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(212, 251, 32, 0.45) 0%, rgba(0, 59, 226, 0) 70%)",
        }}
      />

      {/* Embedded Header Variant Hero */}
      <Header variant="hero" />

      {/* Main Hero Content */}
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] pt-8 md:pt-14 pb-0 flex flex-col items-center text-center">
        {/* Headline */}
        <h1 className="font-heading font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[72px] text-white tracking-tight leading-[1.12] max-w-4xl mb-5">
          Get Access to Hundreds Courses Available
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-neutral-100 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar (Figma Search_Bar 1:1772) */}
        <div className="w-full max-w-[540px] mb-14 z-10">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="h-[54px] md:h-[60px] bg-white rounded-full pl-5 pr-2 flex items-center justify-between shadow-[0_12px_32px_rgba(0,0,0,0.18)]"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Search className="w-5 h-5 text-neutral-400 shrink-0" />
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="w-full bg-transparent border-none outline-none text-neutral-900 placeholder:text-neutral-400 font-sans text-sm md:text-base"
              />
            </div>
            <button
              type="submit"
              className="h-10 md:h-11 px-6 rounded-full bg-secondary-400 hover:bg-[#c2ea1b] text-neutral-950 font-medium font-sans text-sm md:text-base tracking-wide transition-colors cursor-pointer shrink-0"
            >
              Search
            </button>
          </form>
        </div>

        {/* Central Visual Container with 3D Accents and Floating Cards */}
        <div className="relative w-full max-w-[800px] flex justify-center items-end">
          {/* Main Hero Student Image (Figma 1:1796) */}
          <div className="relative w-[340px] sm:w-[460px] md:w-[578px] h-[360px] sm:h-[460px] md:h-[541px] overflow-hidden drop-shadow-2xl">
            <Image
              src="/assets/hero-student.png"
              alt="ByteSpace student learning"
              fill
              priority
              className="object-contain object-bottom"
              sizes="(max-width: 768px) 340px, (max-width: 1200px) 460px, 578px"
            />
          </div>

          {/* Floating Card 1: UI/UX Design (Figma 46:126) */}
          <div className="absolute left-0 sm:left-4 md:-left-8 top-12 sm:top-16 bg-white text-neutral-950 px-4 py-3 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.18)] border border-white/60 text-left z-20">
            <p className="text-sm font-semibold font-heading text-neutral-950">UI/UX Design</p>
            <p className="text-xs text-neutral-500 font-sans mt-0.5">
              200 Courses <span className="mx-1">•</span> 1000+ Students
            </p>
          </div>

          {/* Floating Card 2: Learning Progress 55% (Figma 1:1797) */}
          <div className="absolute right-0 sm:right-4 md:-right-8 top-16 sm:top-24 bg-white text-neutral-950 p-4 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.18)] border border-white/60 text-left w-[180px] sm:w-[220px] z-20">
            <p className="text-xs font-medium text-neutral-700">Learning Progress</p>
            <p className="text-2xl sm:text-3xl font-bold font-heading text-neutral-950 my-1">55%</p>
            <div className="w-full bg-[#F6F6F6] h-2.5 rounded-full overflow-hidden">
              <div className="bg-secondary-400 h-full w-[55%] rounded-full" />
            </div>
          </div>

          {/* Floating Card 3: Happy Students (Figma 1:1821) */}
          <div className="absolute left-2 sm:-left-4 md:-left-12 bottom-12 sm:bottom-16 bg-white text-neutral-950 p-3.5 sm:p-4 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.18)] border border-white/60 text-left z-20">
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-xs sm:text-sm font-semibold text-neutral-950 font-heading">
                Happy Students
              </span>
              <div className="flex items-center gap-1">
                <span className="text-xs sm:text-sm font-medium text-neutral-600">4.8 (240)</span>
                <Star className="w-3.5 h-3.5 fill-secondary-400 text-secondary-400" />
              </div>
            </div>
            {/* Avatar Stack */}
            <div className="flex items-center -space-x-2">
              {[
                "/assets/testimonials/sarah-m.png",
                "/assets/creators/student-1.png",
                "/assets/creators/student-2.png",
                "/assets/creators/student-3.png",
              ].map((src, idx) => (
                <div
                  key={idx}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden relative"
                >
                  <Image src={src} alt="student avatar" fill className="object-cover" sizes="32px" />
                </div>
              ))}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-secondary-400 text-neutral-950 flex items-center justify-center text-[10px] sm:text-xs font-bold font-sans">
                2K+
              </div>
            </div>
          </div>

          {/* 3D Floating Cones & Ornaments (Figma 46:79) */}
          <div className="absolute -inset-10 sm:-inset-16 pointer-events-none z-10">
            <Image
              src="/assets/hero-cones.png"
              alt="Figma 3D decorations"
              fill
              className="object-contain pointer-events-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
