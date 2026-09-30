import { ALL_COURSES, FullCourseDetails } from "@/lib/constants/courses-data";
import { CourseFilterState, CourseSortOption } from "@/types/course";

export class CourseService {
  /**
   * Retrieve all courses in the catalog
   */
  static getAllCourses(): FullCourseDetails[] {
    return ALL_COURSES;
  }

  /**
   * Retrieve course by ID
   */
  static getCourseById(id: string): FullCourseDetails | undefined {
    return ALL_COURSES.find((course) => course.id === id);
  }

  /**
   * Retrieve featured courses for homepage showcase
   */
  static getFeaturedCourses(limit = 6): FullCourseDetails[] {
    return ALL_COURSES.slice(0, limit);
  }

  /**
   * Filter and sort courses based on search criteria
   */
  static filterCourses(filters: Partial<CourseFilterState>): {
    courses: FullCourseDetails[];
    total: number;
    totalPages: number;
  } {
    const {
      searchQuery = "",
      category = "All",
      level = "All Levels",
      sortBy = "Most Popular" as CourseSortOption,
      page = 1,
      itemsPerPage = 6,
    } = filters;

    let result = [...ALL_COURSES];

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.author.toLowerCase().includes(q) ||
          (c.category && c.category.toLowerCase().includes(q))
      );
    }

    // Filter by Category
    if (category && category !== "All" && category !== "Featured") {
      result = result.filter((c) => {
        if (!c.category) return false;
        const cCat = c.category.toLowerCase();
        const fCat = category.toLowerCase();
        return cCat.includes(fCat) || fCat.includes(cCat);
      });
    }

    // Filter by Level
    if (level && level !== "All Levels") {
      result = result.filter(
        (c) => c.level.toLowerCase() === level.toLowerCase()
      );
    }

    // Sort courses
    result.sort((a, b) => {
      switch (sortBy) {
        case "Highest Rated":
          return b.rating - a.rating;
        case "Price: Low to High": {
          const pA = parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0;
          const pB = parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0;
          return pA - pB;
        }
        case "Price: High to Low": {
          const pA = parseFloat(a.price.replace(/[^0-9.]/g, "")) || 0;
          const pB = parseFloat(b.price.replace(/[^0-9.]/g, "")) || 0;
          return pB - pA;
        }
        case "Newest":
        case "Most Popular":
        default:
          return 0; // Default curated order
      }
    });

    const total = result.length;
    const totalPages = Math.max(1, Math.ceil(total / itemsPerPage));
    const startIndex = (page - 1) * itemsPerPage;
    const paginatedCourses = result.slice(startIndex, startIndex + itemsPerPage);

    return {
      courses: paginatedCourses,
      total,
      totalPages,
    };
  }

  /**
   * Get unique course categories
   */
  static getCategories(): string[] {
    const categories = new Set<string>();
    ALL_COURSES.forEach((c) => {
      if (c.category) categories.add(c.category);
    });
    return Array.from(categories);
  }
}
