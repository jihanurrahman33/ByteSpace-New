export type CourseLevel = "All Levels" | "Beginner" | "Intermediate" | "Expert";

export type CourseSortOption =
  | "Most Popular"
  | "Highest Rated"
  | "Newest"
  | "Price: Low to High"
  | "Price: High to Low";

export interface CourseReview {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface CourseLesson {
  id: string;
  title: string;
  duration: string;
  videoUrl?: string;
  isFree?: boolean;
}

export interface CourseChapter {
  id: string;
  title: string;
  duration: string;
  lessons: CourseLesson[];
}

export interface Course {
  id: string;
  title: string;
  category: string;
  author: string;
  authorAvatar?: string;
  lessons: string;
  lessonCount?: number;
  duration: string;
  comments: string;
  level: CourseLevel | string;
  price: string;
  priceNum?: number;
  period: string;
  rating: number;
  reviewsCount?: number;
  image: string;
  description?: string;
  whatYouWillLearn?: string[];
  requirements?: string[];
  chapters?: CourseChapter[];
  reviews?: CourseReview[];
  enrolledStudents?: number;
  isFeatured?: boolean;
}

export interface CourseFilterState {
  searchQuery: string;
  category: string;
  level: string;
  sortBy: CourseSortOption | string;
  page: number;
  itemsPerPage: number;
}
