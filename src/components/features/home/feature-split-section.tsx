import Image from "next/image";
import Link from "next/link";
import { Check, TrendingUp, Star, Users } from "lucide-react";

export function FeatureSplitSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 md:py-32 overflow-hidden border-t border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] flex flex-col gap-24 md:gap-36">
        {/* Showcase 1: Learner Growth (Figma Frame 13) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="flex flex-col text-left">
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-[44px] text-neutral-950 leading-[1.2] mb-6">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="font-sans text-neutral-700 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* 3 Stats (Figma Frame 13: 12K Students, 70+ Courses, 16 Creators) */}
            <div className="flex flex-wrap items-center gap-8 sm:gap-14 pt-4 border-t border-neutral-200/60">
              <div>
                <p className="font-heading font-medium text-3xl md:text-[36px] text-brand-blue tracking-[-0.01em] leading-[1.2]">
                  12K
                </p>
                <p className="font-sans text-[18px] text-[#4B4C53] mt-1 leading-[1.6]">Students</p>
              </div>
              <div className="w-px h-12 bg-neutral-200 hidden sm:block" />
              <div>
                <p className="font-heading font-medium text-3xl md:text-[36px] text-brand-blue tracking-[-0.01em] leading-[1.2]">
                  70+
                </p>
                <p className="font-sans text-[18px] text-[#4B4C53] mt-1 leading-[1.6]">Courses</p>
              </div>
              <div className="w-px h-12 bg-neutral-200 hidden sm:block" />
              <div>
                <p className="font-heading font-medium text-3xl md:text-[36px] text-brand-blue tracking-[-0.01em] leading-[1.2]">
                  16
                </p>
                <p className="font-sans text-[18px] text-[#4B4C53] mt-1 leading-[1.6]">Creators</p>
              </div>
            </div>
          </div>

          {/* Right Visual Showcase (Figma Frame 11) */}
          <div className="relative w-full max-w-[540px] mx-auto lg:max-w-none h-[420px] sm:h-[480px] rounded-3xl overflow-visible flex items-center justify-center">
            {/* Main Visual Image */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-neutral-100">
              <Image
                src="/assets/hero-student.png"
                alt="Professional learning together"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
            </div>

            {/* Floating Mini Course Card (Top Left) */}
            <div className="absolute -top-6 -left-4 sm:-left-8 bg-white p-3 sm:p-4 rounded-2xl shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-[#CED0D3] w-[200px] sm:w-[220px] z-10">
              <div className="relative w-full h-24 rounded-lg overflow-hidden mb-2">
                <Image
                  src="/assets/courses/course-figma.png"
                  alt="Course preview"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <p className="font-heading font-semibold text-xs sm:text-sm text-neutral-950 line-clamp-1">
                Learn Figma from Basic
              </p>
              <div className="flex items-center justify-between mt-1">
                <span className="font-heading font-bold text-xs text-brand-blue">$25</span>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-neutral-600">4.5</span>
                  <Star className="w-3 h-3 fill-secondary-400 text-secondary-400" />
                </div>
              </div>
            </div>

            {/* Floating Progress Card (Bottom Right) */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white p-4 rounded-2xl shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-neutral-100 w-[180px] sm:w-[200px] z-10">
              <p className="text-xs font-medium text-neutral-600">Learning Progress</p>
              <p className="text-xl font-bold font-heading text-neutral-950 my-1">55%</p>
              <div className="w-full bg-[#F6F6F6] h-2 rounded-full overflow-hidden">
                <div className="bg-secondary-400 h-full w-[55%] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Showcase 2: Creator Platform (Figma Frame 14) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Visual Showcase (Figma Frame 12) */}
          <div className="relative w-full max-w-[540px] mx-auto lg:max-w-none h-[420px] sm:h-[480px] rounded-3xl overflow-visible flex items-center justify-center order-2 lg:order-1">
            {/* Main Visual Image */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-neutral-100">
              <Image
                src="/assets/creator-woman.png"
                alt="Creator hosting courses"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
            </div>

            {/* Floating Blue Revenue Card (Top Left) */}
            <div className="absolute -top-6 -left-4 sm:-left-8 bg-brand-blue text-[#F5F5F6] p-4 rounded-[16px] shadow-[0_16px_36px_rgba(0,59,226,0.3)] w-[210px] sm:w-[232px] z-10 backdrop-blur-[10px]">
              <div className="flex items-center justify-between mb-1">
                <div>
                  <p className="text-[16px] font-medium font-sans text-[#F5F5F6] leading-[1.2]">Total Revenue</p>
                  <p className="text-[10px] font-sans text-[#F5F5F6]/80 leading-[1.2] mt-0.5">July 1-28</p>
                </div>
                <div className="px-2 py-0.5 rounded-full bg-[#CBFC01] text-[#242528] text-[10px] font-medium">
                  +12$
                </div>
              </div>
              <p className="text-[24px] font-semibold font-heading text-[#F5F5F6] my-1 leading-[1.33]">$120.29</p>
              <div className="w-full bg-white h-[8px] rounded-[24px] overflow-hidden mt-2">
                <div className="bg-[#D4FB20] h-full w-[56%] rounded-[24px]" />
              </div>
            </div>

            {/* Floating Blue Year-to-Date Card (Bottom Left) */}
            <div className="absolute -bottom-6 -left-2 sm:-left-4 bg-brand-blue text-[#F5F5F6] p-4 rounded-[16px] shadow-[0_16px_36px_rgba(0,59,226,0.3)] w-[140px] sm:w-[150px] z-10 backdrop-blur-[10px]">
              <div className="flex items-center justify-between mb-1">
                <div>
                  <p className="text-[14px] font-medium font-sans text-[#F5F5F6]">Year to Date</p>
                  <p className="text-[10px] font-sans text-[#F5F5F6]/80">2023</p>
                </div>
                <div className="px-1.5 py-0.5 rounded-full bg-[#CBFC01] text-[#242528] text-[9px] font-medium">
                  +12$
                </div>
              </div>
              <p className="text-[18px] font-semibold font-heading text-[#F5F5F6] mt-1">$1,200.38</p>
            </div>

            {/* Floating Happy Students Card (Bottom Right, Figma 34:1038) */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white p-3 sm:p-4 rounded-[16px] shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-[#CED0D3] w-[200px] sm:w-[240px] z-10">
              <div className="flex flex-col gap-0 mb-1.5">
                <span className="text-[13px] sm:text-[15px] font-medium text-[#242528] font-sans leading-[1.2]">
                  Happy Students
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[10px] sm:text-[11px] font-normal text-[#242528] font-sans">
                    4.5 (240)
                  </span>
                  <Star className="w-3 h-3 fill-[#D4FB20] text-[#D4FB20]" />
                </div>
              </div>
              <div className="flex items-center -space-x-2">
                {[
                  "/assets/testimonials/sarah-m.png",
                  "/assets/creators/student-1.png",
                  "/assets/creators/student-2.png",
                  "/assets/creators/student-3.png",
                ].map((src, idx) => (
                  <div
                    key={idx}
                    className="w-6 h-6 rounded-full border-2 border-white overflow-hidden relative shrink-0"
                  >
                    <Image src={src} alt="student" fill className="object-cover" sizes="24px" />
                  </div>
                ))}
                <div className="w-6 h-6 rounded-full border-2 border-white bg-[#D4FB20] text-[#242528] flex items-center justify-center text-[8px] font-bold font-sans shrink-0">
                  2K+
                </div>
              </div>
            </div>
          </div>

            {/* Right Text Column */}
            <div className="flex flex-col text-left order-1 lg:order-2">
              <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-[44px] text-neutral-950 leading-[1.2] mb-6">
                Create & Manage Courses Easily.
              </h2>
              <p className="font-sans text-[#242528] font-bold text-base md:text-[18px] leading-[1.56] mb-8 max-w-xl">
                ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>

              {/* 4 Feature Checklist Points (Figma Frame 14: #003BE2 blue vectors) */}
              <div className="flex flex-col gap-4">
                {[
                  "Share Your Expertise",
                  "Monetize Your Passion",
                  "Flexibility and Autonomy",
                  "Build a Community",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                    </div>
                    <span className="font-sans font-medium text-base md:text-[18px] text-[#242528]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
