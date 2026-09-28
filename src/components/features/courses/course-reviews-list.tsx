"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { ReviewItem } from "@/lib/constants/courses-data";

interface CourseReviewsListProps {
  rating: number;
  reviews: ReviewItem[];
}

export function CourseReviewsList({ rating, reviews }: CourseReviewsListProps) {
  const ratingDistribution = [
    { stars: 5, pct: 85 },
    { stars: 4, pct: 10 },
    { stars: 3, pct: 3 },
    { stars: 2, pct: 1 },
    { stars: 1, pct: 1 },
  ];

  return (
    <div className="w-full space-y-10">
      {/* Rating Overview Box */}
      <div className="p-8 rounded-[24px] bg-neutral-50 border border-neutral-100 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Overall Score */}
        <div className="flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-neutral-200/60 pb-6 md:pb-0 md:pr-6">
          <span className="font-heading font-bold text-5xl sm:text-6xl text-neutral-950 mb-2">
            {rating}
          </span>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-secondary-400 text-secondary-400" />
            ))}
          </div>
          <span className="font-sans text-sm text-neutral-500">Course Rating</span>
        </div>

        {/* Breakdown Bars */}
        <div className="col-span-2 space-y-2.5">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-4 text-xs sm:text-sm font-sans">
              <div className="flex items-center gap-1 w-16 text-neutral-700 shrink-0">
                <span>{item.stars} stars</span>
              </div>
              <div className="flex-1 h-3 bg-neutral-200/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary-400 rounded-full"
                  style={{ width: `${item.pct}%` }}
                />
              </div>
              <span className="w-10 text-right text-neutral-500 text-xs">{item.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Review Cards */}
      <div className="space-y-6">
        <h3 className="font-heading font-semibold text-xl text-neutral-950">
          Student Reviews ({reviews.length})
        </h3>
        <div className="divide-y divide-neutral-100">
          {reviews.map((rev) => (
            <div key={rev.id} className="py-6 first:pt-0">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-neutral-100">
                    <Image src={rev.avatar} alt={rev.name} fill className="object-cover" sizes="48px" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm sm:text-base text-neutral-950">
                      {rev.name}
                    </h4>
                    <span className="font-sans text-xs text-neutral-400">{rev.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(rev.rating)
                          ? "fill-secondary-400 text-secondary-400"
                          : "text-neutral-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="font-sans text-neutral-700 text-sm leading-relaxed">
                {rev.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
