"use client";

import Image from "next/image";
import { Search, Star } from "lucide-react";
import { Header } from "@/components/layout/header";
import { AnimatedNumber, AnimatedProgressBar } from "@/components/ui/animated-number";

export function HeroSection() {
  return (
    <section className="relative w-full bg-[#003BE2] text-neutral-50 overflow-hidden min-h-[660px] sm:min-h-[860px] md:min-h-[960px] lg:h-[1024px]">
      {/* 
        Unified 1440x1024 Desktop Canvas
        All elements share this single parent container and coordinate system
      */}
      <div className="relative w-full max-w-[1440px] h-full min-h-[660px] sm:min-h-[860px] md:min-h-[960px] lg:min-h-[1024px] mx-auto overflow-hidden">
        {/* 1. 120px Architectural Grid Lines (matching Figma 12:224 Group 4) */}
        <div className="absolute inset-0 pointer-events-none opacity-12 z-0">
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
                  strokeWidth="2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        {/* 2. Header (Figma Header_Frame 1:1778, top: 0, left: 0, height: 120px) */}
        <Header variant="hero" className="absolute top-0 left-0 w-full z-40" />

        {/* 3. Upper Portion: Headline, Subtitle & Search Bar (Figma Hero 1:1768, top: 169px) */}
        <div className="absolute top-16 sm:top-24 md:top-28 lg:top-[169px] left-1/2 -translate-x-1/2 w-full max-w-[1200px] px-4 sm:px-6 flex flex-col items-center text-center z-20">
          {/* Frame 1: Headline & Subtitle */}
          <div className="max-w-[935px] flex flex-col items-center">
            {/* Get Access to Hundreds Courses Available */}
            <h1 className="font-heading font-semibold text-[28px] sm:text-5xl lg:text-[72px] text-white tracking-[-0.01em] leading-[1.15] sm:leading-[1.2] max-w-[935px]">
              Get Access to Hundreds Courses Available
            </h1>

            {/* Unlock your creativity, gain valuable knowledge... */}
            <p className="font-sans text-[#E5E6E8] text-xs sm:text-base lg:text-[18px] max-w-[340px] sm:max-w-[840px] leading-[1.5] sm:leading-[1.6] mt-2 sm:mt-6 lg:mt-8">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
            </p>
          </div>

          {/* Search_Bar (Figma Search_Bar 1:1772, height: 52px, max-w: 581px) */}
          <div className="w-full max-w-[340px] sm:max-w-[480px] lg:max-w-[581px] mt-4 sm:mt-8 lg:mt-[60px]">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 sm:gap-4 w-full"
            >
              {/* Input Pill */}
              <div className="flex-1 min-w-0 h-[44px] sm:h-[52px] bg-white rounded-[24px] px-3.5 sm:px-6 flex items-center gap-2 shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
                <Search className="w-4 h-4 sm:w-6 sm:h-6 text-[#82868E] shrink-0" />
                <input
                  type="text"
                  placeholder="Course, topic, creator"
                  className="w-full min-w-0 bg-transparent border-none outline-none text-[#242528] placeholder:text-[#82868E] font-sans text-xs sm:text-[18px] leading-[1.6]"
                />
              </div>
              {/* Search Button */}
              <button
                type="submit"
                className="h-[44px] sm:h-[48px] px-4 sm:px-6 sm:w-[104px] rounded-[24px] bg-[#D4FB20] hover:bg-[#c2ea1b] text-[#242528] font-medium font-sans text-xs sm:text-[18px] leading-[1.2] flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-sm"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        {/* 4. Ellipse 7: Neon Lime Arc behind Hero Student (Figma Ellipse 7, top: 582px, 1149x1149px, border: 320px) */}
        <div
          className="absolute pointer-events-none rounded-full left-1/2 -translate-x-1/2 z-1 hidden sm:block"
          style={{
            boxSizing: "border-box",
            width: "1149px",
            height: "1149px",
            top: "582px",
            border: "320px solid #CBFC01",
          }}
        />

        {/* Mobile Arc: scaled proportionally for smaller viewports */}
        <div
          className="absolute pointer-events-none rounded-full left-1/2 -translate-x-1/2 z-1 sm:hidden"
          style={{
            boxSizing: "border-box",
            width: "400px",
            height: "400px",
            top: "370px",
            border: "80px solid #CBFC01",
          }}
        />

        {/* 5. 3D Floating Cones & Ornaments (Figma 46:79 3d ornament, 1719x803px, top: 221px) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[140px] sm:top-[221px] w-[960px] sm:w-[1400px] lg:w-[1719px] h-[450px] sm:h-[650px] lg:h-[803px] pointer-events-none z-15">
          <Image
            src="/assets/hero-cones.png"
            alt="ByteSpace 3D decorations"
            fill
            className="object-contain pointer-events-none"
            priority
          />
        </div>

        {/* 6. Main Hero Student Image (Figma 1:1796, 578x541px, bottom: 0, centered) */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[290px] sm:w-[420px] md:w-[480px] lg:w-[578px] h-[320px] sm:h-[400px] md:h-[450px] lg:h-[541px] z-10 overflow-hidden drop-shadow-2xl">
          <Image
            src="/assets/hero-student.png"
            alt="ByteSpace student learning"
            fill
            priority
            className="object-contain object-bottom"
            sizes="(max-width: 640px) 290px, (max-width: 768px) 420px, (max-width: 1200px) 480px, 578px"
          />
        </div>

        {/* 7. Floating Card 1: UI/UX Design (Figma 46:126, top: 639px, left: calc(50% - 316px), 208x70px) */}
        <div className="absolute left-2.5 sm:left-[calc(50%-260px)] lg:left-[calc(50%-316px)] top-[335px] sm:top-[580px] lg:top-[639px] bg-white/95 backdrop-blur-[20px] text-[#242528] p-2 sm:p-4 rounded-[14px] sm:rounded-[16px] shadow-[0_16px_40px_rgba(0,0,0,0.18)] border border-white/60 text-left z-25 w-[138px] sm:w-[208px]">
          <p className="text-[11px] sm:text-[16px] font-medium font-sans text-[#242528] leading-[1.2]">
            UI/UX Design
          </p>
          <p className="text-[8.5px] sm:text-[12px] text-[#82868E] font-sans leading-[1.5] mt-0.5 sm:mt-1 flex items-center gap-1 whitespace-nowrap">
            <span>200 Courses</span>
            <span>•</span>
            <span>1000+ Students</span>
          </p>
        </div>

        {/* 8. Floating Card 2: Learning Progress 55% (Figma 1:1797, top: 651px, left: calc(50% + 122px), 232x131px) */}
        <div className="absolute right-2.5 sm:right-auto sm:left-[calc(50%+80px)] lg:left-[calc(50%+122px)] top-[345px] sm:top-[600px] lg:top-[651px] bg-white/95 backdrop-blur-[20px] text-[#242528] p-2.5 sm:p-4 rounded-[14px] sm:rounded-[16px] shadow-[0_16px_40px_rgba(0,0,0,0.18)] border border-white/60 text-left w-[138px] sm:w-[190px] lg:w-[232px] z-25">
          <p className="text-[10px] sm:text-[14px] font-medium font-sans text-[#242528] leading-[1.2]">
            Learning Progress
          </p>
          <p className="text-xl sm:text-3xl lg:text-[48px] font-semibold font-heading text-[#242528] tracking-[-0.01em] leading-[1.2] my-0.5 sm:my-1">
            <AnimatedNumber value={55} suffix="%" />
          </p>
          <AnimatedProgressBar
            percent={56}
            className="w-full bg-[#F6F6F6] h-[4px] sm:h-[8px] rounded-[24px] overflow-hidden"
            barClassName="bg-[#D4FB20] h-full rounded-[24px]"
          />
        </div>

        {/* 9. Floating Card 3: Happy Students (Figma 1:1821, top: 837px, left: calc(50% - 392px), 258x121px) */}
        <div className="absolute left-2.5 sm:left-[calc(50%-280px)] lg:left-[calc(50%-392px)] bottom-4 sm:bottom-auto sm:top-[780px] lg:top-[837px] bg-white/95 backdrop-blur-[20px] text-[#242528] p-2 sm:p-4 rounded-[14px] sm:rounded-[16px] shadow-[0_16px_40px_rgba(0,0,0,0.18)] border border-white/60 text-left w-[165px] sm:w-[258px] z-25">
          <div className="flex flex-col gap-0 mb-1 sm:mb-2">
            <span className="text-[11px] sm:text-[16px] font-medium text-[#242528] font-sans leading-[1.2]">
              Happy Students
            </span>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-[9px] sm:text-[12px] font-normal text-[#242528] font-sans">
                4.5 (240)
              </span>
              <Star className="w-2.5 h-2.5 sm:w-4 sm:h-4 fill-[#D4FB20] text-[#D4FB20]" />
            </div>
          </div>
          {/* Avatar Stack */}
          <div className="flex items-center -space-x-2 sm:-space-x-4">
            {[
              "/assets/testimonials/sarah-m.png",
              "/assets/creators/student-1.png",
              "/assets/creators/student-2.png",
              "/assets/creators/student-3.png",
              "/assets/creators/student-5.png",
            ].map((src, idx) => (
              <div
                key={idx}
                className="w-5 h-5 sm:w-[43px] sm:h-[43px] rounded-full border border-white sm:border-2 overflow-hidden relative shrink-0"
              >
                <Image
                  src={src}
                  alt="student avatar"
                  fill
                  className="object-cover"
                  sizes="43px"
                />
              </div>
            ))}
            <div className="w-5 h-5 sm:w-[43px] sm:h-[43px] rounded-full border border-white sm:border-2 bg-[#D4FB20] text-[#242528] flex items-center justify-center text-[7px] sm:text-[12px] font-bold font-sans shrink-0 z-10">
              2K+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
