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
          {/* Main Hero Student Image */}
          <div className="relative w-[340px] sm:w-[460px] md:w-[560px] h-[360px] sm:h-[460px] md:h-[520px] rounded-t-3xl overflow-hidden drop-shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
              alt="ByteSpace student learning"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 340px, (max-width: 1200px) 460px, 560px"
            />
            {/* Subtle bottom gradient to blend cleanly */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-blue to-transparent opacity-40" />
          </div>

          {/* Floating Card 1: Learning Progress 55% (Figma 1:1797) */}
          <div className="absolute left-2 sm:-left-6 md:-left-12 top-1/4 sm:top-1/3 bg-white text-neutral-950 p-3.5 sm:p-4 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.18)] border border-white/60 text-left w-[170px] sm:w-[190px] animate-bounce-subtle z-20">
            <p className="text-xs font-medium text-neutral-700">Learning Progress</p>
            <p className="text-xl sm:text-2xl font-bold font-heading text-neutral-950 my-1">55%</p>
            <div className="w-full bg-[#F6F6F6] h-2 rounded-full overflow-hidden">
              <div className="bg-secondary-400 h-full w-[55%] rounded-full" />
            </div>
          </div>

          {/* Floating Card 2: Happy Students (Figma 1:1821) */}
          <div className="absolute right-2 sm:-right-8 md:-right-16 top-10 sm:top-16 bg-white text-neutral-950 p-3.5 sm:p-4 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.18)] border border-white/60 text-left z-20">
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-xs sm:text-sm font-semibold text-neutral-950 font-heading">
                Happy Students
              </span>
              <div className="flex items-center gap-1">
                <span className="text-xs sm:text-sm font-medium text-neutral-600">4.5 (240)</span>
                <Star className="w-3.5 h-3.5 fill-secondary-400 text-secondary-400" />
              </div>
            </div>
            {/* Avatar Stack */}
            <div className="flex items-center -space-x-2">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
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

          {/* Floating Card 3: UI/UX Design (Figma 46:126) */}
          <div className="absolute right-0 sm:right-2 md:-right-8 bottom-6 sm:bottom-12 bg-white text-neutral-950 px-4 py-3 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.18)] border border-white/60 text-left z-20">
            <p className="text-sm font-semibold font-heading text-neutral-950">UI/UX Design</p>
            <p className="text-xs text-neutral-500 font-sans mt-0.5">
              200 Courses <span className="mx-1">•</span> 1000+ Students
            </p>
          </div>

          {/* 3D Floating Ornaments (Cones & Torus, matching Figma 46:79) */}
          <div className="absolute -left-10 sm:-left-16 bottom-16 w-12 h-12 sm:w-16 sm:h-16 pointer-events-none drop-shadow-xl">
            <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
              <defs>
                <linearGradient id="silver-cone" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="50%" stopColor="#C0C4CC" />
                  <stop offset="100%" stopColor="#8E929B" />
                </linearGradient>
              </defs>
              <polygon points="32,4 58,54 6,54" fill="url(#silver-cone)" />
              <ellipse cx="32" cy="54" rx="26" ry="6" fill="#8E929B" />
            </svg>
          </div>

          <div className="absolute -right-8 sm:-right-12 top-1/2 w-10 h-10 sm:w-14 sm:h-14 pointer-events-none drop-shadow-xl">
            <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
              <defs>
                <linearGradient id="lime-cone" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5FFAE" />
                  <stop offset="60%" stopColor="#D4FB20" />
                  <stop offset="100%" stopColor="#8FB500" />
                </linearGradient>
              </defs>
              <polygon points="32,6 56,52 8,52" fill="url(#lime-cone)" />
              <ellipse cx="32" cy="52" rx="24" ry="6" fill="#8FB500" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
