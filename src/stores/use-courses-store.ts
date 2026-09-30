import { create } from "zustand";
import { CourseSortOption } from "@/types/course";

interface CoursesState {
  // Search & Filters
  searchQuery: string;
  activeCategoryTab: string;
  selectedCategory: string;
  selectedLevel: string;
  selectedFilter: string;
  sortBy: CourseSortOption | string;

  // Pagination
  currentPage: number;
  itemsPerPage: number;

  // Course Details
  activeDetailTab: "about" | "lessons" | "reviews";

  // Actions
  setSearchQuery: (query: string) => void;
  setActiveCategoryTab: (tab: string) => void;
  setSelectedCategory: (category: string) => void;
  setSelectedLevel: (level: string) => void;
  setSelectedFilter: (filter: string) => void;
  setSortBy: (sort: CourseSortOption | string) => void;
  setCurrentPage: (page: number) => void;
  setActiveDetailTab: (tab: "about" | "lessons" | "reviews") => void;
  resetFilters: () => void;
}

export const useCoursesStore = create<CoursesState>((set) => ({
  searchQuery: "",
  activeCategoryTab: "Featured",
  selectedCategory: "All Categories",
  selectedLevel: "All Levels",
  selectedFilter: "all",
  sortBy: "Most Popular",
  currentPage: 1,
  itemsPerPage: 6,
  activeDetailTab: "about",

  setSearchQuery: (searchQuery) => set({ searchQuery, currentPage: 1 }),
  setActiveCategoryTab: (activeCategoryTab) => set({ activeCategoryTab, currentPage: 1 }),
  setSelectedCategory: (selectedCategory) => set({ selectedCategory, currentPage: 1 }),
  setSelectedLevel: (selectedLevel) => set({ selectedLevel, currentPage: 1 }),
  setSelectedFilter: (selectedFilter) => set({ selectedFilter, currentPage: 1 }),
  setSortBy: (sortBy) => set({ sortBy }),
  setCurrentPage: (currentPage) => set({ currentPage }),
  setActiveDetailTab: (activeDetailTab) => set({ activeDetailTab }),
  resetFilters: () =>
    set({
      searchQuery: "",
      activeCategoryTab: "Featured",
      selectedCategory: "All Categories",
      selectedLevel: "All Levels",
      selectedFilter: "all",
      sortBy: "Most Popular",
      currentPage: 1,
    }),
}));
