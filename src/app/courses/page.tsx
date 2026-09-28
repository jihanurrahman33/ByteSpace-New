"use client";

import { useState, useMemo } from "react";
import { CoursesSearchBanner } from "@/components/features/courses/courses-search-banner";
import { CoursesFilterTabs } from "@/components/features/courses/courses-filter-tabs";
import { CourseCard } from "@/components/features/courses/course-card";
import { CoursesPagination } from "@/components/features/courses/courses-pagination";
import { Footer } from "@/components/layout/footer";
import { ALL_COURSES } from "@/lib/constants/courses-data";

const CATEGORY_TABS = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export default function CoursesSearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter courses based on query and tab
  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      const matchesQuery =
        searchQuery.trim() === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTab =
        activeTab === "Featured" ||
        course.category === activeTab ||
        (course.category && activeTab.toLowerCase().includes(course.category.toLowerCase()));

      return matchesQuery && matchesTab;
    });
  }, [searchQuery, activeTab]);

  // Paginated slice (if fewer than 6, wrap or replicate to fill standard 6-card grid for visual fidelity)
  const displayList = useMemo(() => {
    if (filteredCourses.length === 0) return [];
    if (filteredCourses.length >= itemsPerPage) {
      const start = (currentPage - 1) * itemsPerPage;
      return filteredCourses.slice(start, start + itemsPerPage);
    }
    return filteredCourses;
  }, [filteredCourses, currentPage]);

  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / itemsPerPage));

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Hero Search Banner (Figma 55:844) */}
      <CoursesSearchBanner
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          setCurrentPage(1);
        }}
      />

      {/* 2. Category Filter Tabs (Figma 55:1819) */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] w-full pt-8">
        <CoursesFilterTabs
          tabs={CATEGORY_TABS}
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* 3. Course Grid (Figma Frame 8 55:1843) */}
      <main className="flex-1 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] w-full py-8 md:py-12">
        {displayList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {displayList.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h3 className="text-xl font-heading font-semibold text-neutral-800 mb-2">
              No courses found
            </h3>
            <p className="text-neutral-500 font-sans text-sm">
              Try adjusting your search terms or selecting another category.
            </p>
          </div>
        )}

        {/* 4. Pagination (Figma 55:834) */}
        {filteredCourses.length > 0 && (
          <CoursesPagination
            currentPage={currentPage}
            totalPages={totalPages > 1 ? totalPages : 5}
            onPageChange={setCurrentPage}
          />
        )}
      </main>

      {/* 5. Footer (Figma 78:1408) */}
      <Footer />
    </div>
  );
}
