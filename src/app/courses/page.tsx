"use client";

import { useState, useMemo } from "react";
import { CoursesSearchBanner } from "@/components/features/courses/courses-search-banner";
import { CoursesFilterBar } from "@/components/features/courses/courses-filter-bar";
import { CoursesFilterTabs } from "@/components/features/courses/courses-filter-tabs";
import { CourseCard, CourseItem } from "@/components/features/courses/course-card";
import { CoursesPagination } from "@/components/features/courses/courses-pagination";
import { Footer } from "@/components/layout/footer";

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

const BASE_COURSES: CourseItem[] = [
  {
    id: "figma-from-basic",
    title: "Learn Figma from Basic",
    author: "by purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    image: "/assets/courses/course-figma.png",
    category: "Design",
  },
  {
    id: "build-digital-asset",
    title: "Build Digital Asset",
    author: "by purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    image: "/assets/courses/course-digital-asset.png",
    category: "Design",
  },
  {
    id: "power-of-big-data",
    title: "the Power of Big Data",
    author: "by purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    image: "/assets/courses/course-big-data.png",
    category: "Data",
  },
  {
    id: "productivity-self-care",
    title: "Balancing Productivity and Self-Care",
    author: "by purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    image: "/assets/courses/course-productivity.png",
    category: "Wellness",
  },
  {
    id: "money-management",
    title: "Mastering Money Management",
    author: "by purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    image: "/assets/courses/course-money-management.png",
    category: "Finance",
  },
  {
    id: "idea-to-startup",
    title: "From Idea to Startup Success",
    author: "by purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    image: "/assets/courses/course-startup-success.png",
    category: "Business",
  },
];

// Exact 18 cards from Figma 55:1843 (3 cycles of 6 cards)
const FIGMA_18_COURSES: CourseItem[] = [
  ...BASE_COURSES.map((c, i) => ({ ...c, id: `${c.id}-1` })),
  ...BASE_COURSES.map((c, i) => ({ ...c, id: `${c.id}-2` })),
  ...BASE_COURSES.map((c, i) => ({ ...c, id: `${c.id}-3` })),
];

export default function CoursesSearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter courses based on query and tab
  const filteredCourses = useMemo(() => {
    return FIGMA_18_COURSES.filter((course) => {
      const matchesQuery =
        searchQuery.trim() === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTab =
        activeTab === "Featured" ||
        (course.category && activeTab.toLowerCase().includes(course.category.toLowerCase()));

      return matchesQuery && matchesTab;
    });
  }, [searchQuery, activeTab]);

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

      {/* 2. Filter Bar & Category Tabs (Figma 55:168 & 55:1819) */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] w-full pt-4">
        {/* Filter Bar (Filter, Level, Category, Most relevant) */}
        <CoursesFilterBar />

        {/* Categories Tab pills */}
        <div className="pt-2">
          <CoursesFilterTabs
            tabs={CATEGORY_TABS}
            activeTab={activeTab}
            onTabChange={(tab) => {
              setActiveTab(tab);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {/* 3. Course Grid (Figma Frame 8 55:1843: 18 Cards, 3 columns x 6 rows) */}
      <main className="flex-1 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] w-full py-8 md:py-12">
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredCourses.map((course) => (
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

        {/* 4. Pagination (Figma Auto Layout Horizontal 55:834) */}
        <CoursesPagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </main>

      {/* 5. Shared Footer (Figma 78:1408) */}
      <Footer />
    </div>
  );
}
