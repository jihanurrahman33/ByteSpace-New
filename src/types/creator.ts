import { Course } from "./course";

export interface CreatorSocialLinks {
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  github?: string;
  website?: string;
}

export interface Creator {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  coverImage?: string;
  bio: string;
  role: string;
  rating: number;
  totalReviews: number;
  totalStudents: number;
  totalCourses: number;
  isVerified?: boolean;
  socialLinks?: CreatorSocialLinks;
  courses?: Course[];
}

export interface CreatorFilterState {
  searchQuery: string;
  category: string;
  sortBy: string;
  page: number;
}
