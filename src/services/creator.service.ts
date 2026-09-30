import { Creator } from "@/types/creator";
import { ALL_COURSES } from "@/lib/constants/courses-data";

export const CREATORS_DATA: Creator[] = [
  {
    id: "purepearl",
    name: "Purepearl Studio",
    handle: "@purepearl",
    avatar: "/assets/creators/purepearl-avatar.png",
    bio: "Design studio crafting top-tier UI/UX, product design, and creative workflows for modern creators.",
    role: "Lead UI/UX Designer & Educator",
    rating: 4.8,
    totalReviews: 240,
    totalStudents: 12000,
    totalCourses: 16,
    isVerified: true,
  },
];

export class CreatorService {
  static getAllCreators(): Creator[] {
    return CREATORS_DATA;
  }

  static getCreatorById(id: string): Creator | undefined {
    const cleanId = id.toLowerCase().replace(/[^a-z0-9]/g, "");
    return CREATORS_DATA.find(
      (c) => c.id.toLowerCase() === cleanId || cleanId.includes(c.id.toLowerCase())
    ) || CREATORS_DATA[0]; // fallback to primary creator
  }

  static getCreatorCourses(creatorId?: string) {
    if (!creatorId) return ALL_COURSES;
    const clean = creatorId.toLowerCase();
    return ALL_COURSES.filter(
      (c) =>
        c.author.toLowerCase().includes(clean) ||
        (c.instructor && c.instructor.id.toLowerCase().includes(clean))
    );
  }
}
