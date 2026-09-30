"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

export interface CourseItem {
  id: string;
  title: string;
  author: string;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
  price: string;
  period: string;
  rating: number;
  image: string;
  category?: string;
}

interface CourseCardProps {
  course: CourseItem;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-[24px] border border-[#CED0D3] p-4 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between group">
      {/* Course Thumbnail (Figma 341x195px corner:12px) */}
      <Link
        href={`/courses/${course.id}`}
        className="block relative w-full h-[180px] sm:h-[195px] rounded-[12px] overflow-hidden bg-[#443131] cursor-pointer"
      >
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 373px"
        />
        {/* Frosted Badges at bottom of thumbnail (Figma 13:251) */}
        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between gap-1 z-10">
          <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-[24px] bg-[#F6F6F6]/70 backdrop-blur-[8px] text-[9.5px] sm:text-[11px] font-medium text-[#242528] font-sans truncate">
            {course.lessons}
          </span>
          <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-[24px] bg-[#F6F6F6]/70 backdrop-blur-[8px] text-[9.5px] sm:text-[11px] font-medium text-[#242528] font-sans truncate">
            {course.duration}
          </span>
          <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-[24px] bg-[#F6F6F6]/70 backdrop-blur-[8px] text-[9.5px] sm:text-[11px] font-medium text-[#242528] font-sans truncate">
            {course.comments}
          </span>
        </div>
      </Link>

      {/* Course Details Body */}
      <div className="flex flex-col flex-1 justify-between">
        <div>
          {/* Title & Rating Row */}
          <div className="flex items-start justify-between gap-2 mt-4">
            <div className="flex-1 min-w-0">
              <Link href={`/courses/${course.id}`}>
                <h3 className="font-heading font-semibold text-lg sm:text-[20px] text-[#242528] leading-[1.2] group-hover:text-[#003BE2] transition-colors truncate">
                  {course.title}
                </h3>
              </Link>
              <p className="font-sans text-[12px] text-[#82868E] mt-1">
                {course.author}
              </p>
            </div>
            <div className="flex items-center gap-1 shrink-0 mt-0.5">
              <span className="text-base sm:text-[18px] text-[#242528] font-sans font-medium leading-none">
                {course.rating}
              </span>
              <Star className="w-4 h-4 fill-[#94969C] text-[#94969C]" />
            </div>
          </div>

          {/* Level & Student Count with Mini Avatars and 26+ Circle Badge (Figma 13:262) */}
          <div className="flex items-center gap-2.5 sm:gap-3 mt-4">
            <span className="px-3 py-1 rounded-[24px] bg-[#F5F5F6] text-[#4B4C53] text-[12px] font-medium font-sans flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#4B4C53]">
                <path d="M2 17h4v4H2v-4zm6-5h4v9H8v-9zm6-5h4v14h-4V7zm6-5h4v19h-4V2z" />
              </svg>
              {course.level}
            </span>
            <div className="flex items-center -space-x-1.5">
              {[
                "/assets/testimonials/sarah-m.png",
                "/assets/creators/student-1.png",
                "/assets/creators/student-2.png",
                "/assets/creators/student-3.png",
              ].map((avatar, idx) => (
                <div
                  key={idx}
                  className="w-5 h-5 rounded-full border border-white overflow-hidden relative shrink-0"
                >
                  <Image src={avatar} alt="student" fill className="object-cover" sizes="20px" />
                </div>
              ))}
              <div className="w-5 h-5 rounded-full border border-white bg-[#D4FB20] text-[#242528] text-[9px] font-bold flex items-center justify-center shrink-0">
                26+
              </div>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1 mt-4 pt-1">
          <span className="font-heading font-semibold text-lg sm:text-[20px] text-[#003BE2]">
            {course.price}
          </span>
          <span className="font-sans text-[12px] text-[#82868E]">
            {course.period}
          </span>
        </div>
      </div>
    </div>
  );
}
