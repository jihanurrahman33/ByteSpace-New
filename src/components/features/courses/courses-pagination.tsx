"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface CoursesPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function CoursesPagination({
  currentPage,
  totalPages,
  onPageChange,
}: CoursesPaginationProps) {
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-6 py-8 sm:py-12">
      {/* Prev Button (Figma 48x48 rounded-full border border-[#CED0D3]) */}
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#CED0D3] bg-white flex items-center justify-center text-[#242528] hover:bg-neutral-50 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer shrink-0"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#242528]" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-3 sm:gap-6">
        {pages.map((page) => {
          const isActive = currentPage === page;
          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`font-sans text-base sm:text-[18px] min-w-[28px] h-[28px] sm:min-w-[32px] sm:h-[32px] flex items-center justify-center transition-all cursor-pointer ${
                isActive
                  ? "text-[#242528] font-bold"
                  : "text-[#82868E] hover:text-[#242528] font-normal"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button (Figma 48x48 rounded-full border border-[#CED0D3]) */}
      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#CED0D3] bg-white flex items-center justify-center text-[#242528] hover:bg-neutral-50 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer shrink-0"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#242528]" />
      </button>
    </div>
  );
}
