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
      <div className="relative w-full h-[220px] rounded-[16px] overflow-hidden mb-6 bg-neutral-900 group">
        {!isPlaying ? (
          <>
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
              sizes="400px"
            />
            {/* Play Button Overlay */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors cursor-pointer"
              aria-label="Play course preview"
            >
              <div className="w-16 h-16 rounded-full bg-secondary-400 text-neutral-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 fill-neutral-950 ml-1" />
              </div>
            </button>
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur px-2.5 py-1 rounded text-white text-xs font-medium">
              Preview this course
            </div>
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

      {/* Pricing Row */}
      <div className="flex items-baseline gap-2 mb-6">
        <span className="font-heading font-bold text-3xl sm:text-4xl text-brand-blue">
          {course.price}
        </span>
        <span className="font-sans text-sm text-neutral-500 line-through">$89.00</span>
        <span className="ml-auto px-2.5 py-1 rounded-full bg-secondary-400/20 text-neutral-950 text-xs font-semibold">
          72% OFF
        </span>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 mb-8">
        <Link
          href={`/courses/${course.id}/lessons/${course.modules[0]?.lessons[0]?.id || "intro"}`}
          className="w-full h-12 rounded-full bg-secondary-400 hover:bg-[#c2ea1b] text-neutral-950 font-heading font-semibold text-base flex items-center justify-center transition-colors shadow-md cursor-pointer"
        >
          Enroll Now
        </Link>
        <button
          onClick={() => alert("Added to cart!")}
          className="w-full h-12 rounded-full border border-neutral-950 hover:bg-neutral-50 text-neutral-950 font-heading font-medium text-base flex items-center justify-center transition-colors cursor-pointer"
        >
          Add to Cart
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 mb-6">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>30-Day Money-Back Guarantee</span>
      </div>

      {/* Course Includes List (Figma "This course include") */}
      <div className="border-t border-neutral-100 pt-6">
        <h4 className="font-heading font-semibold text-sm text-neutral-950 mb-4">
          This course includes:
        </h4>
        <ul className="space-y-3 font-sans text-xs sm:text-sm text-neutral-700">
          <li className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-brand-blue shrink-0" />
            <span>{course.duration} on-demand video</span>
          </li>
          <li className="flex items-center gap-3">
            <BookOpen className="w-4 h-4 text-brand-blue shrink-0" />
            <span>{course.lessons} comprehensive modules</span>
          </li>
          <li className="flex items-center gap-3">
            <Download className="w-4 h-4 text-brand-blue shrink-0" />
            <span>12 downloadable resources</span>
          </li>
          <li className="flex items-center gap-3">
            <Award className="w-4 h-4 text-brand-blue shrink-0" />
            <span>Certificate of completion</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
