"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Bookmark, Signal } from "lucide-react";
import { useState } from "react";

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
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="bg-white rounded-[24px] border border-neutral-100 p-4 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      {/* Course Thumbnail */}
      <Link href={`/courses/${course.id}`} className="block relative w-full h-[210px] rounded-[16px] overflow-hidden mb-4 cursor-pointer">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 373px"
        />
        {/* Overlay Top Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-1 z-10">
          <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-[11px] font-medium text-neutral-800 shadow-xs">
            {course.lessons}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-[11px] font-medium text-neutral-800 shadow-xs">
            {course.duration}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-[11px] font-medium text-neutral-800 shadow-xs">
            {course.comments}
          </span>
        </div>
      </Link>

      {/* Course Title & Author */}
      <div className="mb-4">
        <Link href={`/courses/${course.id}`}>
          <h3 className="font-heading font-semibold text-lg sm:text-xl text-neutral-950 mb-1 group-hover:text-brand-blue transition-colors line-clamp-1">
            {course.title}
          </h3>
        </Link>
        <p className="font-sans text-xs text-neutral-400">{course.author}</p>
      </div>

      {/* Level & Student Avatars */}
      <div className="flex items-center justify-between py-2 border-t border-neutral-100 mb-4">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-50 text-neutral-800 text-xs font-medium">
          <Signal className="w-3.5 h-3.5 text-neutral-500" />
          <span>{course.level}</span>
        </div>
        {/* Mini student avatars stack */}
        <div className="flex items-center -space-x-1.5">
          {[
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop",
          ].map((avatar, idx) => (
            <div
              key={idx}
              className="w-5 h-5 rounded-full border border-white overflow-hidden relative"
            >
              <Image src={avatar} alt="student" fill className="object-cover" sizes="20px" />
            </div>
          ))}
        </div>
      </div>

      {/* Price, Rating & Bookmark Button */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-baseline gap-1">
          <span className="font-heading font-semibold text-xl text-brand-blue">
            {course.price}
          </span>
          <span className="font-sans text-xs text-neutral-500">{course.period}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-neutral-700">{course.rating}</span>
            <Star className="w-4 h-4 fill-secondary-400 text-secondary-400" />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setBookmarked(!bookmarked);
            }}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
              bookmarked
                ? "bg-secondary-400 border-secondary-400 text-neutral-950"
                : "border-neutral-200 text-neutral-400 hover:text-neutral-950 hover:bg-neutral-50"
            }`}
            aria-label="Bookmark course"
          >
            <Bookmark
              className={`w-4 h-4 ${bookmarked ? "fill-neutral-950" : ""}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
