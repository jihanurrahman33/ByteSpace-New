"use client";

import { useState, useMemo } from "react";
import { CoursesSearchBanner } from "@/components/features/courses/courses-search-banner";
import { CoursesFilterBar } from "@/components/features/courses/courses-filter-bar";
import { CoursesFilterTabs } from "@/components/features/courses/courses-filter-tabs";
import { CourseCard } from "@/components/features/courses/course-card";
import { CoursesPagination } from "@/components/features/courses/courses-pagination";
import { LogoLoader } from "@/components/ui/logo-loader";
import { Footer } from "@/components/layout/footer";
import { useCoursesStore } from "@/stores/use-courses-store";
import { CourseService } from "@/services/course.service";

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
  const {
    searchQuery,
    setSearchQuery,
    activeCategoryTab: activeTab,
    setActiveCategoryTab: setActiveTab,
    selectedLevel,
    setSelectedLevel,
    selectedCategory,
    setSelectedCategory,
    sortBy: selectedSort,
    setSortBy: setSelectedSort,
    selectedFilter,
    setSelectedFilter,
    currentPage,
    setCurrentPage,
  } = useCoursesStore();

  const [isLoadingGrid, setIsLoadingGrid] = useState(false);

  const triggerLoading = () => {
    setIsLoadingGrid(true);
    setTimeout(() => {
      setIsLoadingGrid(false);
    }, 280);
  };

  // Retrieve base catalog through CourseService
  const allCourses = useMemo(() => {
    return CourseService.getAllCourses();
  }, []);

  // Filter courses based on query, tab, level, category, filter, and sort
  const filteredCourses = useMemo(() => {
    const result = allCourses.filter((course) => {
      // 1. Text Search Query
      const matchesQuery =
        searchQuery.trim() === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.author.toLowerCase().includes(searchQuery.toLowerCase());

      // 2. Category Tab Chips
      const matchesTab =
        activeTab === "Featured" ||
        (course.category &&
          (course.category.toLowerCase().includes(activeTab.toLowerCase()) ||
            activeTab.toLowerCase().includes(course.category.toLowerCase())));

      // 3. Level Filter
      const matchesLevel =
        selectedLevel === "All Levels" || course.level === selectedLevel;

      // 4. Category Dropdown Filter
      const matchesCategory =
        selectedCategory === "All Categories" ||
        (course.category &&
          (course.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
            selectedCategory.toLowerCase().includes(course.category.toLowerCase())));

      // 5. Special Filter Options
      let matchesFilter = true;
      if (selectedFilter === "top-rated") {
        matchesFilter = course.rating >= 4.5;
      } else if (selectedFilter === "under-30") {
        const priceNum = parseFloat(course.price.replace(/[^0-9.]/g, "")) || 0;
        matchesFilter = priceNum <= 30;
      }

      return (
        matchesQuery &&
        matchesTab &&
        matchesLevel &&
        matchesCategory &&
        matchesFilter
      );
    });

    // 6. Sorting
    if (selectedSort === "rating" || selectedSort === "Highest Rated") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === "price-asc" || selectedSort === "Price: Low to High") {
      result.sort((a, b) => {
        const pA = parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0;
        const pB = parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0;
        return pA - pB;
      });
    } else if (selectedSort === "price-desc" || selectedSort === "Price: High to Low") {
      result.sort((a, b) => {
        const pA = parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0;
        const pB = parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0;
        return pB - pA;
      });
    }

    return result;
  }, [
    allCourses,
    searchQuery,
    activeTab,
    selectedLevel,
    selectedCategory,
    selectedSort,
    selectedFilter,
  ]);

  const itemsPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / itemsPerPage));
  const effectivePage = Math.min(currentPage, totalPages);

  const paginatedCourses = useMemo(() => {
    const startIndex = (effectivePage - 1) * itemsPerPage;
    return filteredCourses.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredCourses, effectivePage]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Hero Search Banner (Figma 55:844) */}
      <CoursesSearchBanner
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          setCurrentPage(1);
          triggerLoading();
        }}
      />

      {/* 2. Filter Bar & Category Tabs (Figma 55:168 & 55:1819) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] w-full pt-4">
        {/* Filter Bar (Filter, Level, Category, Most relevant) */}
        <CoursesFilterBar
          selectedLevel={selectedLevel}
          onLevelChange={(level) => {
            setSelectedLevel(level);
            setCurrentPage(1);
            triggerLoading();
          }}
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => {
            setSelectedCategory(cat);
            setCurrentPage(1);
            triggerLoading();
          }}
          selectedSort={selectedSort}
          onSortChange={(sort) => {
            setSelectedSort(sort);
            triggerLoading();
          }}
          selectedFilter={selectedFilter}
          onFilterChange={(filter) => {
            setSelectedFilter(filter);
            setCurrentPage(1);
            triggerLoading();
          }}
        />

        {/* Categories Tab pills */}
        <div className="pt-2">
          <CoursesFilterTabs
            tabs={CATEGORY_TABS}
            activeTab={activeTab}
            onTabChange={(tab) => {
              setActiveTab(tab);
              setCurrentPage(1);
              triggerLoading();
            }}
          />
        </div>
      </div>

      {/* 3. Course Grid (Figma Frame 8 55:1843: 6 Cards per page) */}
      <main className="relative flex-1 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] w-full py-8 md:py-12 min-h-[500px]">
        {isLoadingGrid ? (
          <div className="w-full py-28 flex items-center justify-center">
            <LogoLoader size="md" />
          </div>
        ) : paginatedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {paginatedCourses.map((course, idx) => (
              <CourseCard key={`${course.id}-${idx}`} course={course} />
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

        {/* 4. Pagination */}
        <CoursesPagination
          currentPage={effectivePage}
          totalPages={totalPages}
          onPageChange={(page) => {
            setCurrentPage(page);
            triggerLoading();
            window.scrollTo({ top: 380, behavior: "smooth" });
          }}
        />
      </main>

      {/* 5. Shared Footer */}
      <Footer />
    </div>
  );
}
