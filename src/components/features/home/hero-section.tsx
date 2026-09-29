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

      {/* Ellipse 7: Neon Lime Arc behind Hero Student (Figma Ellipse 7) */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          boxSizing: "border-box",
          width: "1149px",
          height: "1149px",
          left: "calc(50% - 1149px / 2)",
          top: "582px",
          border: "320px solid #CBFC01",
          opacity: 0.85,
        }}
      />

      {/* Embedded Header Variant Hero */}
      <Header variant="hero" />

      {/* Main Hero Content (Figma Hero 1:1768) */}
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] pt-8 md:pt-14 pb-0 flex flex-col items-center text-center">
        {/* Frame 1: Headline & Subtitle */}
        <div className="max-w-[935px] flex flex-col items-center gap-8 mb-14">
          {/* Get Access to Hundreds Courses Available */}
          <h1 className="font-heading font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-white tracking-[-0.01em] leading-[1.2] max-w-[935px]">
            Get Access to Hundreds Courses Available
          </h1>

          {/* Unlock your creativity, gain valuable knowledge... */}
          <p className="font-sans text-[#E5E6E8] text-base md:text-[18px] max-w-[819px] leading-[1.6]">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        {/* Search_Bar (Figma Search_Bar 1:1772) */}
        <div className="w-full max-w-[581px] mb-16 z-10">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-4 w-full"
          >
            {/* Input Pill */}
            <div className="flex-1 h-[52px] bg-white rounded-[24px] px-6 flex items-center gap-2 shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
              <Search className="w-6 h-6 text-[#82868E] shrink-0" />
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="w-full bg-transparent border-none outline-none text-[#242528] placeholder:text-[#82868E] font-sans text-[18px] leading-[1.6]"
              />
            </div>
            {/* Search Button */}
            <button
              type="submit"
              className="h-[46px] w-[104px] rounded-[24px] bg-[#D4FB20] hover:bg-[#c2ea1b] text-[#242528] font-medium font-sans text-[18px] leading-[1.2] flex items-center justify-center transition-colors cursor-pointer shrink-0"
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
          <div className="absolute left-0 sm:left-4 md:-left-8 top-12 sm:top-16 bg-white/95 backdrop-blur-[10px] text-[#242528] p-4 rounded-[16px] shadow-[0_16px_40px_rgba(0,0,0,0.18)] border border-white/60 text-left z-20 w-[208px]">
            <p className="text-[16px] font-medium font-sans text-[#242528] leading-[1.2]">UI/UX Design</p>
            <p className="text-[12px] text-[#82868E] font-sans leading-[1.6] mt-1 flex items-center gap-1">
              <span>200 Courses</span>
              <span>•</span>
              <span>1000+ Students</span>
            </p>
          </div>

          {/* Floating Card 2: Learning Progress 55% (Figma 1:1797) */}
          <div className="absolute right-0 sm:right-4 md:-right-8 top-16 sm:top-24 bg-white/95 backdrop-blur-[10px] text-[#242528] p-4 rounded-[16px] shadow-[0_16px_40px_rgba(0,0,0,0.18)] border border-white/60 text-left w-[232px] z-20">
            <p className="text-[14px] font-medium font-sans text-[#242528] leading-[1.2]">Learning Progress</p>
            <p className="text-[48px] font-semibold font-heading text-[#242528] tracking-[-0.01em] leading-[1.2] my-1">55%</p>
            <div className="w-[200px] bg-[#F6F6F6] h-[8px] rounded-[24px] overflow-hidden">
              <div className="bg-[#D4FB20] h-full w-[112px] rounded-[24px]" />
            </div>
          </div>

          {/* Floating Card 3: Happy Students (Figma 1:1821) */}
          <div className="absolute left-2 sm:-left-4 md:-left-12 bottom-12 sm:bottom-16 bg-white/95 backdrop-blur-[10px] text-[#242528] p-4 rounded-[16px] shadow-[0_16px_40px_rgba(0,0,0,0.18)] border border-white/60 text-left w-[258px] z-20">
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-[16px] font-medium text-[#242528] font-sans leading-[1.2]">
                Happy Students
              </span>
              <div className="flex items-center gap-1">
                <span className="text-[12px] font-normal text-[#242528] font-sans">4.5 (240)</span>
                <Star className="w-4 h-4 fill-[#D4FB20] text-[#D4FB20]" />
              </div>
            </div>
            {/* Avatar Stack */}
            <div className="flex items-center -space-x-4">
              {[
                "/assets/testimonials/sarah-m.png",
                "/assets/creators/student-1.png",
                "/assets/creators/student-2.png",
                "/assets/creators/student-3.png",
                "/assets/creators/student-5.png",
              ].map((src, idx) => (
                <div
                  key={idx}
                  className="w-[43px] h-[43px] rounded-full border-2 border-white overflow-hidden relative shrink-0"
                >
                  <Image src={src} alt="student avatar" fill className="object-cover" sizes="43px" />
                </div>
              ))}
              <div className="w-[43px] h-[43px] rounded-full border-2 border-white bg-[#D4FB20] text-[#242528] flex items-center justify-center text-[12px] font-bold font-sans shrink-0 z-10">
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
