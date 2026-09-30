"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface CoursesFilterBarProps {
  selectedLevel?: string;
  onLevelChange?: (level: string) => void;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  selectedSort?: string;
  onSortChange?: (sort: string) => void;
  selectedFilter?: string;
  onFilterChange?: (filter: string) => void;
}

const LEVEL_OPTIONS = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const CATEGORY_OPTIONS = [
  "All Categories",
  "UI/UX Design",
  "Design",
  "Development",
  "Business",
  "Marketing",
  "Data",
  "Wellness",
  "Animation",
  "Music",
  "Drawing & Painting",
];
const SORT_OPTIONS = [
  { label: "Most relevant", value: "relevant" },
  { label: "Highest Rated", value: "rating" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];
const FILTER_OPTIONS = [
  { label: "All Courses", value: "all" },
  { label: "Top Rated (4.5+)", value: "top-rated" },
  { label: "Under $30", value: "under-30" },
  { label: "Most Popular", value: "popular" },
];

export function CoursesFilterBar({
  selectedLevel = "All Levels",
  onLevelChange,
  selectedCategory = "All Categories",
  onCategoryChange,
  selectedSort = "relevant",
  onSortChange,
  selectedFilter = "all",
  onFilterChange,
}: CoursesFilterBarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const currentSortLabel =
    SORT_OPTIONS.find((s) => s.value === selectedSort)?.label || "Most relevant";
  const currentFilterLabel =
    FILTER_OPTIONS.find((f) => f.value === selectedFilter)?.label || "Filter";

  return (
    <div
      ref={containerRef}
      className="relative z-30 w-full grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-between gap-2.5 sm:gap-4 py-3 sm:py-6"
    >
      {/* Left Filter Group (Unwrapped via contents on mobile, flex on sm+) */}
      <div className="contents sm:flex sm:flex-wrap sm:items-center sm:gap-2 md:gap-3">
        {/* 1. Filter Dropdown */}
        <div className="relative w-full sm:w-auto">
          <button
            type="button"
            onClick={() => toggleDropdown("filter")}
            className={cn(
              "w-full sm:w-auto h-[42px] sm:h-[48px] px-3 sm:px-5 rounded-full border text-xs sm:text-sm font-sans flex items-center justify-between sm:justify-start gap-1.5 sm:gap-2 transition-all cursor-pointer",
              selectedFilter !== "all"
                ? "bg-[#D4FB20] border-[#D4FB20] text-[#242528] font-semibold"
                : "border-[#CED0D3] bg-white text-[#242528] font-normal hover:bg-neutral-50"
            )}
            aria-expanded={openDropdown === "filter"}
          >
            <div className="flex items-center gap-1.5 sm:gap-2 truncate">
              <svg
                className="w-4 h-4 text-current shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <span className="truncate">{selectedFilter === "all" ? "Filter" : currentFilterLabel}</span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 ml-0.5 opacity-70 shrink-0" />
          </button>

          {openDropdown === "filter" && (
            <div className="absolute left-0 top-[calc(100%+6px)] w-48 max-w-[calc(100vw-32px)] bg-white border border-[#CED0D3] rounded-[16px] shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              {FILTER_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onFilterChange?.(opt.value);
                    setOpenDropdown(null);
                  }}
                  className={cn(
                    "w-full px-4 py-2.5 text-left text-xs sm:text-sm font-sans flex items-center justify-between hover:bg-neutral-50 transition-colors cursor-pointer",
                    selectedFilter === opt.value
                      ? "text-[#003BE2] font-semibold bg-neutral-50"
                      : "text-[#242528]"
                  )}
                >
                  <span>{opt.label}</span>
                  {selectedFilter === opt.value && (
                    <Check className="w-4 h-4 text-[#003BE2]" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 2. Level Dropdown */}
        <div className="relative w-full sm:w-auto">
          <button
            type="button"
            onClick={() => toggleDropdown("level")}
            className={cn(
              "w-full sm:w-auto h-[42px] sm:h-[48px] px-3 sm:px-5 rounded-full border text-xs sm:text-sm font-sans flex items-center justify-between sm:justify-start gap-1.5 sm:gap-2 transition-all cursor-pointer",
              selectedLevel !== "All Levels"
                ? "bg-[#D4FB20] border-[#D4FB20] text-[#242528] font-semibold"
                : "border-[#CED0D3] bg-white text-[#242528] font-normal hover:bg-neutral-50"
            )}
            aria-expanded={openDropdown === "level"}
          >
            <div className="flex items-center gap-1.5 sm:gap-2 truncate">
              <svg
                className="w-4 h-4 text-current shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2 17h4v4H2v-4zm6-5h4v9H8v-9zm6-5h4v14h-4V7zm6-5h4v19h-4V2z" />
              </svg>
              <span className="truncate">{selectedLevel === "All Levels" ? "Level" : selectedLevel}</span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 ml-0.5 opacity-70 shrink-0" />
          </button>

          {openDropdown === "level" && (
            <div className="absolute right-0 sm:right-auto sm:left-0 top-[calc(100%+6px)] w-44 max-w-[calc(100vw-32px)] bg-white border border-[#CED0D3] rounded-[16px] shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              {LEVEL_OPTIONS.map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => {
                    onLevelChange?.(lvl);
                    setOpenDropdown(null);
                  }}
                  className={cn(
                    "w-full px-4 py-2.5 text-left text-xs sm:text-sm font-sans flex items-center justify-between hover:bg-neutral-50 transition-colors cursor-pointer",
                    selectedLevel === lvl
                      ? "text-[#003BE2] font-semibold bg-neutral-50"
                      : "text-[#242528]"
                  )}
                >
                  <span>{lvl}</span>
                  {selectedLevel === lvl && (
                    <Check className="w-4 h-4 text-[#003BE2]" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 3. Category Dropdown */}
        <div className="relative w-full sm:w-auto">
          <button
            type="button"
            onClick={() => toggleDropdown("category")}
            className={cn(
              "w-full sm:w-auto h-[42px] sm:h-[48px] px-3 sm:px-5 rounded-full border text-xs sm:text-sm font-sans flex items-center justify-between sm:justify-start gap-1.5 sm:gap-2 transition-all cursor-pointer",
              selectedCategory !== "All Categories"
                ? "bg-[#D4FB20] border-[#D4FB20] text-[#242528] font-semibold"
                : "border-[#CED0D3] bg-white text-[#242528] font-normal hover:bg-neutral-50"
            )}
            aria-expanded={openDropdown === "category"}
          >
            <div className="flex items-center gap-1.5 sm:gap-2 truncate">
              <svg
                className="w-4 h-4 text-current shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span className="truncate max-w-[85px] sm:max-w-[120px]">
                {selectedCategory === "All Categories" ? "Category" : selectedCategory}
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 ml-0.5 opacity-70 shrink-0" />
          </button>

          {openDropdown === "category" && (
            <div className="absolute left-0 top-[calc(100%+6px)] w-52 max-w-[calc(100vw-32px)] max-h-64 overflow-y-auto bg-white border border-[#CED0D3] rounded-[16px] shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              {CATEGORY_OPTIONS.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    onCategoryChange?.(cat);
                    setOpenDropdown(null);
                  }}
                  className={cn(
                    "w-full px-4 py-2.5 text-left text-xs sm:text-sm font-sans flex items-center justify-between hover:bg-neutral-50 transition-colors cursor-pointer",
                    selectedCategory === cat
                      ? "text-[#003BE2] font-semibold bg-neutral-50"
                      : "text-[#242528]"
                  )}
                >
                  <span className="truncate">{cat}</span>
                  {selectedCategory === cat && (
                    <Check className="w-4 h-4 text-[#003BE2] shrink-0" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Sort Button Dropdown */}
      <div className="relative w-full sm:w-auto">
        <button
          type="button"
          onClick={() => toggleDropdown("sort")}
          className={cn(
            "w-full sm:w-auto h-[42px] sm:h-[48px] px-3 sm:px-5 rounded-full border text-xs sm:text-sm font-sans flex items-center justify-between sm:justify-start gap-1.5 sm:gap-2 transition-all cursor-pointer",
            selectedSort !== "relevant"
              ? "bg-[#D4FB20] border-[#D4FB20] text-[#242528] font-semibold"
              : "border-[#CED0D3] bg-white text-[#242528] font-normal hover:bg-neutral-50"
          )}
          aria-expanded={openDropdown === "sort"}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 truncate">
            <svg
              className="w-4 h-4 text-current shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 4h18M3 8h12M3 12h8M3 16h4"
              />
            </svg>
            <span className="truncate max-w-[90px] sm:max-w-none">{currentSortLabel}</span>
          </div>
          <ChevronDown className="w-3.5 h-3.5 ml-0.5 opacity-70 shrink-0" />
        </button>

        {openDropdown === "sort" && (
          <div className="absolute right-0 top-[calc(100%+6px)] w-48 max-w-[calc(100vw-32px)] bg-white border border-[#CED0D3] rounded-[16px] shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
            {SORT_OPTIONS.map((sort) => (
              <button
                key={sort.value}
                type="button"
                onClick={() => {
                  onSortChange?.(sort.value);
                  setOpenDropdown(null);
                }}
                className={cn(
                  "w-full px-4 py-2.5 text-left text-xs sm:text-sm font-sans flex items-center justify-between hover:bg-neutral-50 transition-colors cursor-pointer",
                  selectedSort === sort.value
                    ? "text-[#003BE2] font-semibold bg-neutral-50"
                    : "text-[#242528]"
                )}
              >
                <span>{sort.label}</span>
                {selectedSort === sort.value && (
                  <Check className="w-4 h-4 text-[#003BE2]" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
