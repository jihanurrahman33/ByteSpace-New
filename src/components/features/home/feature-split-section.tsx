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

            {/* 3 Stats (Figma 34:774, 34:777, 34:780) */}
            <div className="flex flex-wrap items-center gap-8 sm:gap-12 pt-4 border-t border-neutral-200/60">
              <div>
                <p className="font-heading font-semibold text-3xl md:text-4xl text-neutral-950">
                  12K
                </p>
                <p className="font-sans text-sm text-neutral-500 mt-1">Students</p>
              </div>
              <div className="w-px h-12 bg-neutral-200 hidden sm:block" />
              <div>
                <p className="font-heading font-semibold text-3xl md:text-4xl text-neutral-950">
                  70+
                </p>
                <p className="font-sans text-sm text-neutral-500 mt-1">Courses</p>
              </div>
              <div className="w-px h-12 bg-neutral-200 hidden sm:block" />
              <div>
                <p className="font-heading font-semibold text-3xl md:text-4xl text-neutral-950">
                  16
                </p>
                <p className="font-sans text-sm text-neutral-500 mt-1">Creators</p>
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
            <div className="absolute -top-6 -left-4 sm:-left-8 bg-white p-3 sm:p-4 rounded-2xl shadow-[0_16px_36px_rgba(0,0,0,0.12)] border border-neutral-100 w-[200px] sm:w-[220px] z-10">
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
            <div className="absolute -top-6 -left-4 sm:-left-8 bg-brand-blue text-white p-4 rounded-2xl shadow-[0_16px_36px_rgba(0,59,226,0.3)] w-[190px] sm:w-[210px] z-10">
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs text-neutral-100">Total Revenue</p>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 text-secondary-400" />
                </div>
              </div>
              <p className="text-2xl font-bold font-heading text-white">$1,200.38</p>
              {/* Mini Trend Line */}
              <div className="mt-2 h-6 flex items-end gap-1">
                <div className="w-3 h-2 bg-white/30 rounded-xs" />
                <div className="w-3 h-3 bg-white/40 rounded-xs" />
                <div className="w-3 h-4 bg-white/60 rounded-xs" />
                <div className="w-3 h-3 bg-white/50 rounded-xs" />
                <div className="w-3 h-5 bg-white/80 rounded-xs" />
                <div className="w-3 h-6 bg-secondary-400 rounded-xs" />
              </div>
            </div>

            {/* Floating Blue Students Card (Bottom Right) */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-brand-blue text-white p-4 rounded-2xl shadow-[0_16px_36px_rgba(0,59,226,0.3)] w-[180px] z-10">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-secondary-400" />
                <span className="text-xs text-neutral-100">Enrolled</span>
              </div>
              <p className="text-xl font-bold font-heading text-white">4,850+</p>
              <p className="text-[11px] text-neutral-200 mt-0.5">Active Learners</p>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="flex flex-col text-left order-1 lg:order-2">
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-[44px] text-neutral-950 leading-[1.2] mb-6">
              Create & Manage Courses Easily.
            </h2>
            <p className="font-sans text-neutral-700 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* 4 Feature Checklist Points (Figma 34:903, 34:906, 34:909, 34:912) */}
            <div className="flex flex-col gap-4 mb-8">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-secondary-400 flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-4 h-4 text-neutral-950 stroke-[3]" />
                  </div>
                  <span className="font-sans font-medium text-base md:text-lg text-neutral-950">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <Link
                href="/creators"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-sm md:text-base transition-colors shadow-sm"
              >
                Learn More About Teaching
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
