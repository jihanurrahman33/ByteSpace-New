"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Check, ShieldCheck, Clock, BookOpen, Award, Download } from "lucide-react";
import { FullCourseDetails } from "@/lib/constants/courses-data";
import { useState } from "react";

interface CourseSidebarCardProps {
  course: FullCourseDetails;
}

export function CourseSidebarCard({ course }: CourseSidebarCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white rounded-[24px] border border-neutral-100 shadow-[0_16px_40px_rgba(0,0,0,0.08)] p-6 overflow-hidden sticky top-8">
      {/* Video Preview Frame (Figma 55:4202) */}
      <div className="relative w-full h-[240px] rounded-[20px] overflow-hidden mb-6 bg-neutral-900 group">
        {!isPlaying ? (
          <>
            <Image
              src="/assets/courses/video-preview-girl.png"
              alt="Course Video Preview"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="420px"
              priority
            />
            {/* Play Button Overlay (Glass circle) */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors cursor-pointer"
              aria-label="Play course preview"
            >
              <div className="w-16 h-16 rounded-full bg-white/70 backdrop-blur-md text-neutral-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 fill-neutral-900 ml-1" />
              </div>
            </button>
          </>
        ) : (
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Course Preview Video"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      {/* Curriculum Outline Preview (Figma 55:4206) */}
      <div className="mb-6">
        <h4 className="font-heading font-semibold text-base text-neutral-950 mb-3">
          112 Lessons (24 hours)
        </h4>
        <div className="space-y-2.5 text-xs text-neutral-600 font-sans">
          <div className="flex items-center justify-between py-1 border-b border-neutral-100">
            <span className="font-medium text-neutral-900">01 Introduction to Digital Assets</span>
            <span className="text-brand-blue font-medium">12 mins</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-neutral-100">
            <span className="font-medium text-neutral-900">02 Design Principles for Impacts</span>
            <span className="text-brand-blue font-medium">21 mins</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-neutral-100">
            <span className="font-medium text-neutral-900">03 Advanced Techniques in Digital Creation</span>
            <span className="text-brand-blue font-medium">16 mins</span>
          </div>
          <p className="text-[11px] text-neutral-400 pt-1">99 more videos</p>
        </div>
      </div>

      <p className="font-sans text-xs text-neutral-500 mb-4 leading-relaxed">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      {/* Pricing Row */}
      <div className="flex items-baseline gap-1.5 mb-5">
        <span className="font-heading font-bold text-3xl sm:text-4xl text-brand-blue">
          {course.price}
        </span>
        <span className="font-sans text-xs text-neutral-500">{course.period}</span>
      </div>

      {/* Enroll Action */}
      <div className="mb-6">
        <Link
          href={`/courses/${course.id}/lessons/${course.modules[0]?.lessons[0]?.id || "intro"}`}
          className="w-full h-12 rounded-full bg-secondary-400 hover:bg-[#c2ea1b] text-neutral-950 font-heading font-semibold text-base flex items-center justify-center transition-colors shadow-sm cursor-pointer"
        >
          Enroll Now
        </Link>
      </div>

      {/* Course Includes List (Figma "This course include") */}
      <div className="border-t border-neutral-100 pt-6 mb-6">
        <h4 className="font-heading font-semibold text-sm text-neutral-950 mb-3">
          This course include
        </h4>
        <ul className="space-y-2.5 font-sans text-xs text-neutral-600">
          <li className="flex items-center gap-2.5">
            <BookOpen className="w-4 h-4 text-brand-blue shrink-0" />
            <span>Learning Resources</span>
          </li>
          <li className="flex items-center gap-2.5">
            <Play className="w-4 h-4 text-brand-blue shrink-0" />
            <span>Quality Lesson Videos</span>
          </li>
          <li className="flex items-center gap-2.5">
            <Award className="w-4 h-4 text-brand-blue shrink-0" />
            <span>Certificate of Completion</span>
          </li>
          <li className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
            <span>Private Consultation</span>
          </li>
        </ul>
      </div>

      {/* Instructor Mini Card (Figma PurePearl Studio) */}
      <div className="border-t border-neutral-100 pt-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-neutral-100">
            <Image
              src="/assets/creators/purepearl-studio.png"
              alt="PurePearl Studio"
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div>
            <h5 className="font-heading font-semibold text-sm text-neutral-950">
              PurePearl Studio
            </h5>
            <p className="font-sans text-[11px] text-neutral-500">Professional Creator</p>
          </div>
        </div>

        <Link
          href={`/creators/${course.instructor.id}`}
          className="w-full h-9 rounded-full border border-neutral-200 hover:border-neutral-900 text-neutral-900 font-sans text-xs font-medium flex items-center justify-center transition-colors cursor-pointer"
        >
          See Full Profile
        </Link>
      </div>
    </div>
  );
}
