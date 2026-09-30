"use client";

import { useMemo } from "react";
import { useCoursesStore } from "@/stores/use-courses-store";
import { CourseService } from "@/services/course.service";

export function useCourses() {
  const {
    searchQuery,
    selectedCategory,
    selectedLevel,
    selectedFilter,
    sortBy,
    currentPage,
    itemsPerPage,
    setSearchQuery,
    setSelectedCategory,
    setSelectedLevel,
    setSelectedFilter,
    setSortBy,
    setCurrentPage,
    resetFilters,
  } = useCoursesStore();

  const { courses, total, totalPages } = useMemo(() => {
    return CourseService.filterCourses({
      searchQuery,
      category: selectedCategory,
      level: selectedLevel,
      sortBy,
      page: currentPage,
      itemsPerPage,
    });
  }, [searchQuery, selectedCategory, selectedLevel, sortBy, currentPage, itemsPerPage]);

  return {
    courses,
    total,
    totalPages,
    searchQuery,
    selectedCategory,
    selectedLevel,
    selectedFilter,
    sortBy,
    currentPage,
    setSearchQuery,
    setSelectedCategory,
    setSelectedLevel,
    setSelectedFilter,
    setSortBy,
    setCurrentPage,
    resetFilters,
  };
}
