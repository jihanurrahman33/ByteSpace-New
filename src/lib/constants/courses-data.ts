import { CourseItem } from "@/components/features/courses/course-card";

export interface LessonItem {
  id: string;
  title: string;
  duration: string;
  videoUrl?: string;
  isCompleted?: boolean;
}

export interface ModuleItem {
  id: string;
  title: string;
  lessons: LessonItem[];
}

export interface ReviewItem {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface FullCourseDetails extends CourseItem {
  description: string;
  longDescription: string;
  whatYouWillLearn: string[];
  requirements: string[];
  instructor: {
    id: string;
    name: string;
    title: string;
    avatar: string;
    bio: string;
    studentsCount: number;
    coursesCount: number;
    rating: number;
  };
  modules: ModuleItem[];
  reviews: ReviewItem[];
}

export const ALL_COURSES: FullCourseDetails[] = [
  {
    id: "figma-basic",
    title: "Learn Figma from Basic",
    author: "by purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1581291518655-9523c932deb4?q=80&w=800&auto=format&fit=crop",
    description: "Master modern UI/UX design from scratch using Figma's cutting-edge auto-layout, design tokens, and components system.",
    longDescription: "Whether you are a complete beginner or looking to upgrade your digital design workflow, this course takes you step-by-step through the core tools of Figma. You will learn interface navigation, vector networks, typography scales, design token variables, interactive prototyping, and handoff to development.",
    whatYouWillLearn: [
      "Navigate Figma's modern interface with confidence",
      "Master Auto-Layout 5.0 with advanced wrap and min/max constraints",
      "Build scalable design systems with reusable components and tokens",
      "Create interactive and animated prototypes for mobile and web",
      "Collaborate effectively in multiplayer mode and hand off specs to engineers",
    ],
    requirements: [
      "A computer (Mac or Windows) with internet access",
      "A free Figma account",
      "No prior design experience necessary",
    ],
    instructor: {
      id: "purepearl",
      name: "purepearl studio",
      title: "Senior Product Designer & Design Educator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      bio: "PurePearl Studio is a collective of digital craftsmen and design educators specializing in high-converting product interfaces, design systems, and modern digital design pedagogy.",
      studentsCount: 14200,
      coursesCount: 6,
      rating: 4.8,
    },
    modules: [
      {
        id: "mod-1",
        title: "Module 1: Introduction to Figma & Workspace Setup",
        lessons: [
          { id: "les-1", title: "01. Introduction to Interface & Tools", duration: "12:40", isCompleted: true },
          { id: "les-2", title: "02. Setting up Frames, Grids & Artboards", duration: "14:15", isCompleted: true },
          { id: "les-3", title: "03. Vector Networks & Pen Tool Essentials", duration: "16:30", isCompleted: false },
        ],
      },
      {
        id: "mod-2",
        title: "Module 2: Auto-Layout & Responsive Components",
        lessons: [
          { id: "les-4", title: "04. Understanding Auto-Layout Directions & Padding", duration: "18:20", isCompleted: false },
          { id: "les-5", title: "05. Resizing Rules: Hug, Fill & Fixed Constraints", duration: "15:45", isCompleted: false },
          { id: "les-6", title: "06. Building Scalable Buttons & Input Fields", duration: "20:10", isCompleted: false },
          { id: "les-7", title: "07. Component Properties & Variants", duration: "22:05", isCompleted: false },
        ],
      },
      {
        id: "mod-3",
        title: "Module 3: Design Tokens & Variables",
        lessons: [
          { id: "les-8", title: "08. Creating Color & Typography Variables", duration: "14:50", isCompleted: false },
          { id: "les-9", title: "09. Dark Mode Switching with Modes", duration: "17:15", isCompleted: false },
          { id: "les-10", title: "10. Spacing & Radius System Setup", duration: "11:30", isCompleted: false },
        ],
      },
      {
        id: "mod-4",
        title: "Module 4: Prototyping & Developer Handoff",
        lessons: [
          { id: "les-11", title: "11. Smart Animate & Micro-interactions", duration: "19:40", isCompleted: false },
          { id: "les-12", title: "12. Interactive Components & States", duration: "21:10", isCompleted: false },
          { id: "les-13", title: "13. Dev Mode & Exporting Assets", duration: "15:05", isCompleted: false },
        ],
      },
    ],
    reviews: [
      {
        id: "rev-1",
        name: "Sarah Jenkins",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop",
        rating: 5,
        date: "2 weeks ago",
        comment: "This course completely demystified Auto Layout for me! The practical exercises and clean design token workflow are the best on any platform.",
      },
      {
        id: "rev-2",
        name: "David Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop",
        rating: 5,
        date: "1 month ago",
        comment: "Purepearl studio knows how to teach modern product design. I built my entire portfolio using the foundations taught in these lessons.",
      },
      {
        id: "rev-3",
        name: "Elena Rostova",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop",
        rating: 4.5,
        date: "2 months ago",
        comment: "Very concise, no fluff, straight to high-value techniques. Highly recommend to any aspiring designer or frontend dev.",
      },
    ],
  },
  {
    id: "digital-asset",
    title: "Build Digital Asset",
    author: "by purepearl studio",
    lessons: "24 Lessons",
    duration: "3 hours 40 mins",
    comments: "82 Comments",
    level: "Intermediate",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    category: "Featured",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    description: "Learn how to conceptualize, design, and package high-value digital design assets and icon libraries.",
    longDescription: "Step-by-step masterclass on creating sellable digital products: UI kits, 3D icon packs, vector illustrations, and component libraries.",
    whatYouWillLearn: [
      "Identify high-demand digital asset niches",
      "Maintain consistent geometry and stroke alignment across 100+ assets",
      "Packaging assets for Figma Community, Gumroad, and web marketplaces",
    ],
    requirements: ["Basic knowledge of vector editing"],
    instructor: {
      id: "purepearl",
      name: "purepearl studio",
      title: "Senior Product Designer & Design Educator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      bio: "PurePearl Studio is a collective of digital craftsmen and design educators.",
      studentsCount: 14200,
      coursesCount: 6,
      rating: 4.8,
    },
    modules: [],
    reviews: [],
  },
  {
    id: "big-data",
    title: "the Power of Big Data",
    author: "by purepearl studio",
    lessons: "19 Lessons",
    duration: "4 hours 10 mins",
    comments: "45 Comments",
    level: "All Levels",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    category: "Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    description: "Harness the power of data visualization, analytics pipelines, and decision-making architecture.",
    longDescription: "Understand foundational data architectures, query pipelines, dashboard visualizations, and metrics analysis.",
    whatYouWillLearn: ["Understand data models", "Build actionable visual dashboards"],
    requirements: ["No special math prerequisites"],
    instructor: {
      id: "purepearl",
      name: "purepearl studio",
      title: "Senior Product Designer & Design Educator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      bio: "PurePearl Studio is a collective of digital craftsmen and design educators.",
      studentsCount: 14200,
      coursesCount: 6,
      rating: 4.8,
    },
    modules: [],
    reviews: [],
  },
  {
    id: "productivity-self-care",
    title: "Balancing Productivity and Self-Care",
    author: "by purepearl studio",
    lessons: "12 Lessons",
    duration: "1 hour 45 mins",
    comments: "37 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    category: "Creative Marketing",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
    description: "Design mindful work rhythms, combat burnout, and establish sustainable creative energy.",
    longDescription: "A structured system for high-performing professionals to manage workloads without mental fatigue.",
    whatYouWillLearn: ["Time-blocking rituals", "Stress regulation routines", "Sustainable output planning"],
    requirements: ["Open mindset"],
    instructor: {
      id: "purepearl",
      name: "purepearl studio",
      title: "Senior Product Designer & Design Educator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      bio: "PurePearl Studio is a collective of digital craftsmen and design educators.",
      studentsCount: 14200,
      coursesCount: 6,
      rating: 4.8,
    },
    modules: [],
    reviews: [],
  },
  {
    id: "money-management",
    title: "Mastering Money Management",
    author: "by purepearl studio",
    lessons: "28 Lessons",
    duration: "5 hours 12 mins",
    comments: "94 Comments",
    level: "Intermediate",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
    description: "Personal and freelance financial planning, automated savings, and investments for digital creators.",
    longDescription: "Comprehensive financial literacy blueprint built especially for independent creators and freelancers.",
    whatYouWillLearn: ["Cashflow budgeting", "Tax buffers and retirement planning", "Emergency fund architectures"],
    requirements: ["Basic arithmetic"],
    instructor: {
      id: "purepearl",
      name: "purepearl studio",
      title: "Senior Product Designer & Design Educator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      bio: "PurePearl Studio is a collective of digital craftsmen and design educators.",
      studentsCount: 14200,
      coursesCount: 6,
      rating: 4.8,
    },
    modules: [],
    reviews: [],
  },
  {
    id: "idea-to-startup",
    title: "From Idea to Startup Success",
    author: "by purepearl studio",
    lessons: "32 Lessons",
    duration: "6 hours 30 mins",
    comments: "118 Comments",
    level: "Advanced",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    category: "Business",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    description: "Validate assumptions, launch MVPs, acquire early customers, and scale modern web ventures.",
    longDescription: "From napkin sketch to product-market fit: learn lean validation, rapid testing, and founder frameworks.",
    whatYouWillLearn: ["Idea validation frameworks", "Rapid prototyping", "Initial customer acquisition strategies"],
    requirements: ["Basic business curiosity"],
    instructor: {
      id: "purepearl",
      name: "purepearl studio",
      title: "Senior Product Designer & Design Educator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      bio: "PurePearl Studio is a collective of digital craftsmen and design educators.",
      studentsCount: 14200,
      coursesCount: 6,
      rating: 4.8,
    },
    modules: [],
    reviews: [],
  },
  // Additional courses to complete the 18 cards of Search Page
  {
    id: "motion-design-intro",
    title: "Intro to Modern Motion Design",
    author: "by purepearl studio",
    lessons: "15 Lessons",
    duration: "2 hours 45 mins",
    comments: "41 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    category: "Animation",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    description: "Principles of 2D animation, easing curves, and UI micro-interactions.",
    longDescription: "Learn keyframing, bounce physics, and smooth interface animations.",
    whatYouWillLearn: ["Animation easing", "Micro-interaction design"],
    requirements: ["Design software"],
    instructor: {
      id: "purepearl",
      name: "purepearl studio",
      title: "Senior Product Designer & Design Educator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      bio: "PurePearl Studio is a collective of digital craftsmen and design educators.",
      studentsCount: 14200,
      coursesCount: 6,
      rating: 4.8,
    },
    modules: [],
    reviews: [],
  },
  {
    id: "sound-design-essentials",
    title: "Sound Design Essentials for Creators",
    author: "by purepearl studio",
    lessons: "18 Lessons",
    duration: "3 hours 10 mins",
    comments: "29 Comments",
    level: "All Levels",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    category: "Music",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    description: "Capture, mix, and produce studio-grade audio for video, podcasts, and digital experiences.",
    longDescription: "Audio fundamentals, equalization, compression, and soundscape design.",
    whatYouWillLearn: ["Microphone techniques", "Audio post-production"],
    requirements: ["Any DAW or audio editor"],
    instructor: {
      id: "purepearl",
      name: "purepearl studio",
      title: "Senior Product Designer & Design Educator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      bio: "PurePearl Studio is a collective of digital craftsmen and design educators.",
      studentsCount: 14200,
      coursesCount: 6,
      rating: 4.8,
    },
    modules: [],
    reviews: [],
  },
  {
    id: "digital-illustration-guide",
    title: "Digital Illustration for Beginners",
    author: "by purepearl studio",
    lessons: "20 Lessons",
    duration: "4 hours 00 mins",
    comments: "63 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    rating: 4.5,
    category: "Drawing & Painting",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    description: "Learn color theory, composition, brush control, and digital painting fundamentals.",
    longDescription: "From line sketch to rendered digital canvas art.",
    whatYouWillLearn: ["Digital brushes", "Color harmonies", "Character proportions"],
    requirements: ["Drawing tablet or iPad"],
    instructor: {
      id: "purepearl",
      name: "purepearl studio",
      title: "Senior Product Designer & Design Educator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      bio: "PurePearl Studio is a collective of digital craftsmen and design educators.",
      studentsCount: 14200,
      coursesCount: 6,
      rating: 4.8,
    },
    modules: [],
    reviews: [],
  },
];
