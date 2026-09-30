"use client";

import Image from "next/image";
import { Check, Star } from "lucide-react";
import { AnimatedNumber, AnimatedProgressBar } from "@/components/ui/animated-number";

const HAPPY_STUDENTS_AVATARS = [
  "/assets/home/avatars/student-avatar-1.png",
  "/assets/home/avatars/student-avatar-2.png",
  "/assets/home/avatars/student-avatar-3.png",
  "/assets/home/avatars/student-avatar-4.png",
  "/assets/home/avatars/student-avatar-5.png",
  "/assets/home/avatars/student-avatar-6.png",
  "/assets/home/avatars/student-avatar-7.png",
];

const COURSE_CARD_AVATARS = [
  "/assets/creators/student-1.png",
  "/assets/creators/student-2.png",
  "/assets/creators/student-3.png",
  "/assets/creators/student-5.png",
];

const FIGMA_IMAGE_DROP_SHADOW =
  "drop-shadow(0.5px 0.74px 3px rgba(0, 0, 0, 0.04)) drop-shadow(2.2px 3.2px 5.7px rgba(0, 0, 0, 0.06)) drop-shadow(5.4px 7.7px 9.6px rgba(0, 0, 0, 0.07)) drop-shadow(10.2px 14.6px 16px rgba(0, 0, 0, 0.08)) drop-shadow(17px 24px 24px rgba(0, 0, 0, 0.09)) drop-shadow(26px 37px 36px rgba(0, 0, 0, 0.10)) drop-shadow(37px 53px 56px rgba(0, 0, 0, 0.105)) drop-shadow(51px 73px 72px rgba(0, 0, 0, 0.13))";

export function FeatureSplitSection() {
  return (
    <section className="relative w-full bg-[#FAFAFA] overflow-hidden">
      {/* Figma Frame 15 Atmospheric Smoke / Ambient Diffusion Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden blur-[90px] md:blur-[120px] will-change-transform">
        {/* Top-Left Lime Smoke Plume */}
        <div
          className="absolute -left-[180px] -top-[480px] w-[1100px] h-[1100px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(203, 252, 1, 0.42) 0%, rgba(203, 252, 1, 0.20) 28%, rgba(203, 252, 1, 0.06) 55%, transparent 75%)",
          }}
        />

        {/* Top-Right Blue Smoke Plume */}
        <div
          className="absolute left-[780px] -top-[480px] w-[1100px] h-[1100px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 59, 226, 0.12) 0%, rgba(0, 59, 226, 0.05) 30%, rgba(0, 59, 226, 0.01) 55%, transparent 75%)",
          }}
        />

        {/* Middle-Left Blue Smoke Plume */}
        <div
          className="absolute -left-[500px] top-[180px] w-[1100px] h-[1100px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 59, 226, 0.18) 0%, rgba(0, 59, 226, 0.08) 30%, rgba(0, 59, 226, 0.02) 55%, transparent 75%)",
          }}
        />

        {/* Right Middle Blue Smoke Plume */}
        <div
          className="absolute left-[700px] top-[740px] w-[1100px] h-[1100px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 59, 226, 0.22) 0%, rgba(0, 59, 226, 0.10) 30%, rgba(0, 59, 226, 0.03) 55%, transparent 75%)",
          }}
        />

        {/* Bottom-Left Lime Smoke Plume */}
        <div
          className="absolute -left-[280px] top-[900px] w-[750px] h-[750px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(203, 252, 1, 0.50) 0%, rgba(203, 252, 1, 0.22) 30%, rgba(203, 252, 1, 0.06) 55%, transparent 75%)",
          }}
        />
      </div>

      {/* Main Container matching Figma Frame 16 (1258px wide) */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:pl-[121px] lg:pr-[61px] pt-12 sm:pt-16 md:pt-20 lg:pt-[100px] pb-10 sm:pb-12 md:pb-16 lg:pb-[72px] flex flex-col gap-14 sm:gap-16 lg:gap-[72px]">
        {/* ========================================================================= */}
        {/* Showcase 1: Learner Growth (Figma Frame 13, 1258x552)                     */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 min-h-0 lg:min-h-[552px]">
          {/* Left Text Column (Figma 34:768: 574x404) */}
          <div className="w-full lg:w-[574px] flex flex-col">
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] lg:leading-[52.8px] text-[#242528] max-w-[577px] tracking-tight">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            <p className="font-sans font-normal text-sm sm:text-base lg:text-[18px] lg:leading-[28.8px] text-[#4B4C53] max-w-[477px] mt-6 sm:mt-8 lg:mt-10">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Statistics (Figma 34:773: 12K Students, 70+ Courses, 16 Creators) */}
            <div className="mt-8 sm:mt-10 flex items-center gap-8 sm:gap-10 lg:gap-[56px] flex-wrap">
              <div className="flex flex-col">
                <span className="font-heading font-medium text-2xl sm:text-3xl lg:text-[36px] lg:leading-[44px] text-[#003BE2]">
                  <AnimatedNumber value={12} suffix="K" />
                </span>
                <span className="font-sans font-normal text-sm sm:text-base lg:text-[18px] lg:leading-[29px] text-[#4B4C53]">
                  Students
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-medium text-2xl sm:text-3xl lg:text-[36px] lg:leading-[44px] text-[#003BE2]">
                  <AnimatedNumber value={70} suffix="+" />
                </span>
                <span className="font-sans font-normal text-sm sm:text-base lg:text-[18px] lg:leading-[29px] text-[#4B4C53]">
                  Courses
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-medium text-2xl sm:text-3xl lg:text-[36px] lg:leading-[44px] text-[#003BE2]">
                  <AnimatedNumber value={16} />
                </span>
                <span className="font-sans font-normal text-sm sm:text-base lg:text-[18px] lg:leading-[29px] text-[#4B4C53]">
                  Creators
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Composition (Figma Frame 11: 621x552) */}
          <div className="w-full lg:w-[621px] flex justify-center items-center overflow-visible">
            <div className="relative w-[621px] h-[552px] shrink-0 origin-top transform scale-[0.48] min-[360px]:scale-[0.54] min-[390px]:scale-[0.59] min-[430px]:scale-[0.66] sm:scale-[0.82] md:scale-95 lg:scale-100 mb-[-260px] min-[360px]:mb-[-230px] min-[390px]:mb-[-200px] min-[430px]:mb-[-160px] sm:mb-[-80px] md:mb-[-20px] lg:mb-0">
              {/* 1. Main Course Card (Figma 34:1055: 373x384 at left: 0, top: 0) */}
              <div className="absolute left-0 top-0 w-[373px] h-[384px] bg-white rounded-[24px] border border-[#CED0D3] p-4 flex flex-col justify-between z-0">
                {/* Thumbnail with Frosted Badges */}
                <div className="w-[341px] h-[195px] rounded-[12px] relative overflow-hidden bg-neutral-100">
                  <Image
                    src="/assets/courses/course-figma.png"
                    alt="Learn Figma from Basic"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="h-8 px-3 rounded-full bg-black/40 backdrop-blur-[8px] text-white font-sans font-medium text-xs flex items-center">
                      17 Lessons
                    </span>
                    <span className="h-8 px-3 rounded-full bg-black/40 backdrop-blur-[8px] text-white font-sans font-medium text-xs flex items-center">
                      2 hours 16 mins
                    </span>
                    <span className="h-8 px-3 rounded-full bg-black/40 backdrop-blur-[8px] text-white font-sans font-medium text-xs flex items-center">
                      59 Comments
                    </span>
                  </div>
                </div>

                {/* Title, Creator, and Top-Right Rating (Figma 34:1064 & 34:1083) */}
                <div className="relative flex items-start justify-between">
                  <div>
                    <h3 className="font-heading font-semibold text-[20px] leading-[28px] text-[#242528]">
                      Learn Figma from Basic
                    </h3>
                    <p className="font-sans text-xs text-[#4F4F4F] mt-0.5">by purepearl studio</p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 pt-0.5">
                    <span className="font-sans font-medium text-[18px] text-[#242528]">4.5</span>
                    <Star className="w-5 h-5 fill-[#94969C] text-[#94969C]" />
                  </div>
                </div>

                {/* Metadata: Beginner & Avatar Stack (Figma 34:1068) */}
                <div className="flex items-center justify-between">
                  <div className="h-8 px-3 rounded-full bg-[#F5F5F6] text-[#242528] text-xs font-medium font-sans flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 17h4v4H2v-4zm6-5h4v9H8v-9zm6-5h4v14h-4V7zm6-5h4v19h-4V2z" />
                    </svg>
                    Beginner
                  </div>
                  <div className="flex items-center -space-x-2">
                    {COURSE_CARD_AVATARS.map((src, idx) => (
                      <div
                        key={idx}
                        className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative shrink-0"
                      >
                        <Image src={src} alt="student" fill className="object-cover" sizes="32px" />
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-[#D4FB20] text-[#242528] text-[10px] font-bold font-sans flex items-center justify-center shrink-0">
                      26+
                    </div>
                  </div>
                </div>

                {/* Price Row (Figma 34:1080) */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-semibold text-[20px] text-[#003BE2]">$25</span>
                    <span className="font-sans text-xs text-[#4B4C53]">/lifetime</span>
                  </div>
                </div>
              </div>

              {/* 2. Lime-Green Decorative 3D Spiral Element (Figma 34:981: 215x215 at left: 406, top: 67) */}
              <div className="absolute left-[406px] top-[67px] w-[215px] h-[215px] pointer-events-none z-0">
                <Image
                  src="/assets/home/lime-spiral-decor.png"
                  alt="Lime decorative element"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* 3. Main Person Image (Figma 34:971: 577x540 at left: 0, top: 12) */}
              <div
                className="absolute left-0 top-[12px] w-[577px] h-[540px] pointer-events-none z-10"
                style={{ filter: FIGMA_IMAGE_DROP_SHADOW }}
              >
                <Image
                  src="/assets/hero-student.png"
                  alt="Learner with laptop and headphones"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* 4. Learning Progress Card (Figma 34:1031: 232x138 at left: 345, top: 213) */}
              <div className="absolute left-[345px] top-[213px] w-[232px] h-[138px] bg-white rounded-[16px] p-4 shadow-[0_16px_36px_rgba(0,0,0,0.08)] backdrop-blur-[20px] z-20 flex flex-col justify-between">
                <div>
                  <p className="font-sans font-medium text-base leading-[24px] text-[#242528]">
                    Learning Progress
                  </p>
                  <p className="font-heading font-semibold text-[48px] leading-[57.6px] tracking-[-0.48px] text-[#242528] mt-1">
                    <AnimatedNumber value={55} suffix="%" />
                  </p>
                </div>
                <AnimatedProgressBar
                  percent={56}
                  className="w-[200px] h-[8px] rounded-[24px] bg-[#F6F6F6] overflow-hidden"
                  barClassName="h-[8px] rounded-[24px] bg-[#D4FB20]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Showcase 2: Creator Platform (Figma Frame 14, 1200x596)                   */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-0 min-h-0 lg:min-h-[596px]">
          {/* Left Visual Composition (Figma Frame 12: 541x596) */}
          <div className="w-full lg:w-[541px] flex justify-center items-center overflow-visible">
            <div className="relative w-[541px] h-[596px] shrink-0 origin-top transform scale-[0.50] min-[360px]:scale-[0.56] min-[390px]:scale-[0.62] min-[430px]:scale-[0.70] sm:scale-[0.85] md:scale-95 lg:scale-100 mb-[-260px] min-[360px]:mb-[-220px] min-[390px]:mb-[-190px] min-[430px]:mb-[-150px] sm:mb-[-70px] md:mb-[-20px] lg:mb-0">
              {/* 1. Total Revenue Card (Figma 34:987: 232x119 at left: 0, top: 44) */}
              <div className="absolute left-0 top-[44px] w-[232px] h-[119px] bg-[#003BE2] text-white rounded-[16px] p-4 shadow-[0_16px_36px_rgba(0,59,226,0.3)] z-0 flex flex-col justify-between">
                <div>
                  <p className="font-sans font-medium text-base leading-[19.2px] text-[#F5F5F6]">
                    Total Revenue
                  </p>
                  <p className="font-sans text-[10px] leading-[12px] text-[#F5F5F6] mt-0.5">
                    July 1-28
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-heading font-semibold text-2xl leading-[32px] text-[#F5F5F6]">
                    $120.29
                  </p>
                  <span className="px-2 py-0.5 rounded-[4px] bg-[#D4FB20] text-[#242528] text-[10px] font-medium font-sans leading-[20px]">
                    +12$
                  </span>
                </div>
                <div className="w-[200px] h-[8px] rounded-[24px] bg-white overflow-hidden">
                  <div className="w-[112px] h-[8px] rounded-[24px] bg-[#D4FB20]" />
                </div>
              </div>

              {/* 2. Year to Date Card (Figma 34:998: 134x135 at left: 0, top: 194) */}
              <div className="absolute left-0 top-[194px] w-[134px] h-[135px] bg-[#003BE2] text-white rounded-[16px] p-4 shadow-[0_16px_36px_rgba(0,59,226,0.3)] z-0 flex flex-col justify-between">
                <div>
                  <p className="font-sans font-medium text-base leading-[19.2px] text-[#F5F5F6]">
                    Year to Date
                  </p>
                  <p className="font-sans text-[10px] leading-[12px] text-[#F5F5F6] mt-0.5">2023</p>
                </div>
                <p className="font-heading font-semibold text-2xl leading-[32px] text-[#F5F5F6]">
                  $1,200.38
                </p>
                <div>
                  <span className="inline-block px-2 py-0.5 rounded-[4px] bg-[#D4FB20] text-[#242528] text-[10px] font-medium font-sans leading-[20px]">
                    +12$
                  </span>
                </div>
              </div>

              {/* 3. Lime Spiral Decorative Element (Figma 34:1006: 215x215 at left: 305, top: 114) */}
              <div className="absolute left-[305px] top-[114px] w-[215px] h-[215px] pointer-events-none z-0">
                <Image
                  src="/assets/home/lime-spiral-decor.png"
                  alt="Lime spiral decoration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* 4. Female Creator Image (Figma 34:1011: 435x596 at left: 28, top: 0) */}
              <div
                className="absolute left-[28px] top-0 w-[435px] h-[596px] pointer-events-none z-10"
                style={{ filter: FIGMA_IMAGE_DROP_SHADOW }}
              >
                <Image
                  src="/assets/creator-woman.png"
                  alt="Female creator hosting courses"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* 5. Happy Students Card (Figma 34:1038: 258x123 at left: 283, top: 413) */}
              <div className="absolute left-[283px] top-[413px] w-[258px] h-[123px] bg-white rounded-[16px] p-4 shadow-[0_16px_36px_rgba(0,0,0,0.08)] backdrop-blur-[20px] z-20 flex flex-col justify-between">
                <div className="flex flex-col">
                  <span className="font-sans font-medium text-base leading-[24px] text-[#242528]">
                    Happy Students
                  </span>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="font-sans text-[10px] leading-[15px] text-[#82868E]">
                      4.5 (240)
                    </span>
                    <Star className="w-4 h-4 fill-[#D4FB20] text-[#D4FB20]" />
                  </div>
                </div>
                <div className="flex items-center -space-x-[16px]">
                  {HAPPY_STUDENTS_AVATARS.map((src, i) => (
                    <div
                      key={i}
                      className="w-[43px] h-[43px] rounded-full border-2 border-white overflow-hidden relative shrink-0"
                    >
                      <Image src={src} alt="student" fill className="object-cover" sizes="43px" />
                    </div>
                  ))}
                  <div className="w-[43px] h-[43px] rounded-full border-2 border-white bg-[#D4FB20] text-[#242528] text-xs font-bold font-sans flex items-center justify-center shrink-0">
                    2K+
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column (Figma 34:897: 580x388) */}
          <div className="w-full lg:w-[580px] flex flex-col">
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] lg:leading-[52.8px] text-[#242528] max-w-[391px] tracking-tight">
              Create & Manage
              <br />
              Courses Easily.
            </h2>

            <p className="font-sans font-normal text-sm sm:text-base lg:text-[18px] lg:leading-[28.8px] text-[#4B4C53] max-w-[574px] mt-6 sm:mt-8 lg:mt-10">
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* 4 Feature Checklist Points with #003BE2 filled checkmarks */}
            <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:gap-4">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#003BE2] flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                  </div>
                  <span className="font-sans font-medium text-base sm:text-[18px] leading-[21.6px] text-[#242528]">
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
