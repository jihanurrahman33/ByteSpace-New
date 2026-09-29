"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Video, Award, MessageSquare } from "lucide-react";
import { FullCourseDetails } from "@/lib/constants/courses-data";

interface CourseSidebarCardProps {
  course: FullCourseDetails;
}

export function CourseSidebarCard({ course }: CourseSidebarCardProps) {
  return (
    <div className="w-[412px] max-w-full bg-white rounded-[24px] border border-[#CED0D3] shadow-[0_24px_64px_rgba(0,0,0,0.12)] p-8 flex flex-col gap-6">
      {/* Curriculum Outline Preview (Figma 55:4206) */}
      <div>
        <h4 className="font-heading font-semibold text-lg text-neutral-950 mb-4">
          112 Lessons (24 hours)
        </h4>
        <div className="space-y-3 text-sm text-neutral-600 font-sans">
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
          <p className="text-xs text-[#82868E] pt-1">99 more videos</p>
        </div>
      </div>

      <p className="font-sans text-xs text-[#82868E] leading-relaxed">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      {/* Pricing Row */}
      <div className="flex items-baseline gap-1.5">
        <span className="font-heading font-bold text-3xl sm:text-4xl text-brand-blue">
          {course.price}
        </span>
        <span className="font-sans text-sm text-[#82868E]">{course.period}</span>
      </div>

      {/* Enroll Action */}
      <div>
        <Link
          href={`/courses/${course.id}/lessons/${course.modules[0]?.lessons[0]?.id || "intro"}`}
          className="w-full h-[46px] rounded-full bg-[#CBFC01] hover:bg-[#b8e400] text-neutral-950 font-sans font-medium text-base flex items-center justify-center transition-colors cursor-pointer"
        >
          Enroll Now
        </Link>
      </div>

      {/* Course Includes List (Figma "This course include") */}
      <div className="border-t border-neutral-100 pt-6">
        <h4 className="font-heading font-semibold text-sm text-neutral-950 mb-4">
          This course include
        </h4>
        <div className="space-y-3 font-sans text-xs text-[#4B4C53]">
          <div className="flex items-center gap-3">
            <BookOpen className="w-4 h-4 text-brand-blue shrink-0" />
            <span>Learning Resources</span>
          </div>
          <div className="flex items-center gap-3">
            <Video className="w-4 h-4 text-brand-blue shrink-0" />
            <span>Quality Lesson Videos</span>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-4 h-4 text-brand-blue shrink-0" />
            <span>Certificate of Completion</span>
          </div>
          <div className="flex items-center gap-3">
            <MessageSquare className="w-4 h-4 text-brand-blue shrink-0" />
            <span>Private Consultation</span>
          </div>
        </div>
      </div>

      {/* Instructor Showcase */}
      <div className="border-t border-neutral-100 pt-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0">
            <Image
              src="/assets/testimonials/james-l.png"
              alt="PurePearl Studio"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h5 className="font-heading font-semibold text-sm text-neutral-950">
              PurePearl Studio
            </h5>
            <p className="font-sans text-xs text-[#82868E]">Professional Creator</p>
          </div>
        </div>

        <p className="font-sans text-xs text-[#82868E] mb-4 leading-relaxed">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <Link
          href="/creators/purepearl-studio"
          className="w-full h-10 rounded-full border border-[#CED0D3] hover:bg-neutral-50 text-neutral-950 font-sans font-medium text-xs flex items-center justify-center transition-colors cursor-pointer"
        >
          See Full Profile
        </Link>
      </div>
    </div>
  );
}
