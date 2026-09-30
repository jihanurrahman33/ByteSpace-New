"use client";

import { use, useMemo, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
import { Check, Video, Star } from "lucide-react";
import Image from "next/image";
import { CourseDetailsHero } from "@/components/features/courses/course-details-hero";
import { Footer } from "@/components/layout/footer";
import { CourseService } from "@/services/course.service";
import { cn } from "@/lib/utils/cn";

type TabType = "about" | "lessons" | "reviews";

const ALL_REVIEWS = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    time: "a year ago",
    rating: 5,
    avatar: "/assets/testimonials/james-l.png",
    comment:
      "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    name: "Albert Flores",
    role: "UI/UX Designer",
    time: "a year ago",
    rating: 5,
    avatar: "/assets/testimonials/sarah-m.png",
    comment:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: "Cody Fisher",
    role: "Product Designer",
    time: "a year ago",
    rating: 4,
    avatar: "/assets/testimonials/alex-b.png",
    comment:
      "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique dimension to learning.",
  },
  {
    name: "Brooklyn Simmons",
    role: "Digital Marketer",
    time: "a year ago",
    rating: 5,
    avatar: "/assets/testimonials/james-l.png",
    comment:
      "The lessons on optimizing assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging pacing kept me motivated throughout.",
  },
];

export default function CourseDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const searchParams = useSearchParams();

  // Clean course id (strip optional suffix like -1, -2)
  const normalizedId = resolvedParams.id.replace(/-[0-9]+$/, "");

  const course = useMemo(() => {
    return (
      CourseService.getCourseById(normalizedId) ||
      CourseService.getCourseById(resolvedParams.id) ||
      CourseService.getAllCourses()[0]
    );
  }, [normalizedId, resolvedParams.id]);

  if (!course) {
    notFound();
  }

  // Initial tab from query param ?tab=... or default to "about"
  const tabParam = searchParams.get("tab") as TabType;
  const initialTab: TabType =
    tabParam === "about" || tabParam === "lessons" || tabParam === "reviews"
      ? tabParam
      : "about";
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);
  const [lastParamTab, setLastParamTab] = useState(initialTab);
  const [selectedRatingFilter, setSelectedRatingFilter] = useState("All rating");

  // Sync tab if query param changes externally
  if (
    tabParam &&
    (tabParam === "about" || tabParam === "lessons" || tabParam === "reviews") &&
    tabParam !== lastParamTab
  ) {
    setLastParamTab(tabParam);
    setActiveTab(tabParam);
  }

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    // Update url search param without reloading page
    window.history.replaceState(null, "", `/courses/${resolvedParams.id}?tab=${tab}`);
  };

  const modulesList = [
    {
      title: "Module 1: Introduction to Course Essentials",
      desc: "Lay the groundwork with fundamental techniques, interface orientation, and essential software tools.",
    },
    {
      title: "Module 2: Core Principles for High Impact",
      desc: "Master the foundational theories that drive successful projects, from composition and typography to execution.",
    },
    {
      title: "Module 3: Advanced Hands-On Workflows",
      desc: "Dive deep into modern real-world production pipelines, responsive layouts, and optimization techniques.",
    },
    {
      title: "Module 4: Interactive Components & Strategies",
      desc: "Learn user-centric patterns, dynamic feedback states, and micro-interactions for polished results.",
    },
    {
      title: "Module 5: Project Showcase & Critique",
      desc: "Perfect presentation techniques, incorporate structured feedback, and prepare projects for stakeholder review.",
    },
    {
      title: "Module 6: Multi-Platform Export & Delivery",
      desc: "Package and deploy deliverables across web, mobile, and digital marketplaces seamlessly.",
    },
  ];

  const filteredReviews = useMemo(() => {
    if (selectedRatingFilter === "All rating") return ALL_REVIEWS;
    const targetRating = parseInt(selectedRatingFilter, 10);
    return ALL_REVIEWS.filter((r) => r.rating === targetRating);
  }, [selectedRatingFilter]);

  const ratingBars = [
    { stars: 5, count: 720, percent: "80%" },
    { stars: 4, count: 120, percent: "45%" },
    { stars: 3, count: 21, percent: "20%" },
    { stars: 2, count: 12, percent: "12%" },
    { stars: 1, count: 16, percent: "16%" },
  ];

  const filterButtons = ["All rating", "5", "4", "3", "2", "1"];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Hero Banner with Course Title, Meta, Video, and Floating Sidebar (Figma 55:4066) */}
      <CourseDetailsHero course={course} />

      {/* 2. Main Content (Left Column 725px) */}
      <main className="relative w-full bg-white flex-1">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] pt-8 md:pt-16 pb-16 md:pb-24">
          <div className="w-full lg:w-[725px] flex flex-col">
            {/* Pill Tabs (Figma 55:4118 - About / Lessons / Reviews) */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-10">
              <button
                type="button"
                onClick={() => handleTabChange("about")}
                className={cn(
                  "h-[40px] sm:h-[43px] px-5 sm:px-6 rounded-full font-sans font-medium text-sm sm:text-base flex items-center justify-center transition-all cursor-pointer",
                  activeTab === "about"
                    ? "bg-[#D4FB20] text-[#242528] shadow-xs"
                    : "bg-[#F5F5F6] text-[#4B4C53] hover:text-[#242528] hover:bg-[#EAEAEA]"
                )}
              >
                About
              </button>
              <button
                type="button"
                onClick={() => handleTabChange("lessons")}
                className={cn(
                  "h-[40px] sm:h-[43px] px-5 sm:px-6 rounded-full font-sans font-medium text-sm sm:text-base flex items-center justify-center transition-all cursor-pointer",
                  activeTab === "lessons"
                    ? "bg-[#D4FB20] text-[#242528] shadow-xs"
                    : "bg-[#F5F5F6] text-[#4B4C53] hover:text-[#242528] hover:bg-[#EAEAEA]"
                )}
              >
                Lessons
              </button>
              <button
                type="button"
                onClick={() => handleTabChange("reviews")}
                className={cn(
                  "h-[40px] sm:h-[43px] px-5 sm:px-6 rounded-full font-sans font-medium text-sm sm:text-base flex items-center justify-center transition-all cursor-pointer",
                  activeTab === "reviews"
                    ? "bg-[#D4FB20] text-[#242528] shadow-xs"
                    : "bg-[#F5F5F6] text-[#4B4C53] hover:text-[#242528] hover:bg-[#EAEAEA]"
                )}
              >
                Reviews
              </button>
            </div>

            {/* TAB 1: ABOUT */}
            {activeTab === "about" && (
              <div className="animate-in fade-in duration-200">
                {/* Description (Figma 55:4126) */}
                <div className="mb-10">
                  <h2 className="font-heading font-semibold text-[20px] text-[#242528] mb-3">
                    Description
                  </h2>
                  <div className="space-y-4 font-sans text-base text-[#4B4C53] leading-relaxed">
                    <p>
                      {course.longDescription ||
                        `Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "${course.title}". This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content.`}
                    </p>
                    <p>
                      In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the core concepts that form the backbone of the subject. Understand the fundamental tools and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                    </p>
                    <p>
                      As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into advanced techniques. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                    </p>
                  </div>
                </div>

                {/* Sneak Peak (Figma 55:4128) */}
                <div className="mb-10">
                  <h3 className="font-heading font-semibold text-[20px] text-[#242528] mb-4">
                    Sneak Peak
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { src: "/assets/courses/sneak-peak-1.png", alt: "Wireframing" },
                      { src: "/assets/courses/sneak-peak-2.png", alt: "Design System" },
                      { src: "/assets/courses/sneak-peak-3.png", alt: "Desktop UI" },
                      { src: "/assets/courses/sneak-peak-4.png", alt: "Mobile UI" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="relative w-full h-[125px] rounded-[16px] overflow-hidden"
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover"
                          sizes="167px"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Points (Figma 55:4134) */}
                <div>
                  <h3 className="font-heading font-semibold text-[20px] text-[#242528] mb-4">
                    Key Points
                  </h3>
                  <div className="space-y-3">
                    {(course.whatYouWillLearn?.length > 0
                      ? course.whatYouWillLearn
                      : [
                          "Foundational Concepts",
                          "Design Principles Mastery",
                          "Advanced Techniques in Digital Creation",
                          "Project Showcase and Critique",
                          "Optimizing for Various Platforms",
                          "Digital Asset Management Best Practices",
                          "Monetization Strategies",
                          "Capstone Project: Building Your Portfolio",
                        ]
                    ).map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-[18px] h-[18px] rounded-full bg-[#003BE2] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                        </div>
                        <span className="font-sans text-base text-[#242528]">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: LESSONS */}
            {activeTab === "lessons" && (
              <div className="animate-in fade-in duration-200">
                {/* Explore the Modules (Figma 60:104) */}
                <div className="mb-8 sm:mb-10">
                  <h2 className="font-heading font-semibold text-[20px] text-[#242528] mb-3">
                    Explore the Modules
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-[#4B4C53] leading-relaxed">
                    Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                  </p>
                </div>

                {/* Lesson List (Figma 60:104) */}
                <div className="mb-8 sm:mb-10">
                  <h3 className="font-heading font-semibold text-[20px] text-[#242528] mb-6">
                    Lesson List
                  </h3>
                  <div className="space-y-6">
                    {modulesList.map((mod, idx) => (
                      <div key={idx} className="flex items-start gap-3 sm:gap-4 p-3 rounded-[16px] hover:bg-neutral-50 transition-colors">
                        <div className="w-12 h-12 sm:w-[64px] sm:h-[64px] rounded-[16px] bg-[#D4FB20] text-[#242528] flex items-center justify-center shrink-0">
                          <Video className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#242528]" />
                        </div>
                        <div className="flex-1 pt-0.5 sm:pt-1">
                          <h4 className="font-heading font-semibold text-sm sm:text-base text-[#242528] mb-1">
                            {mod.title}
                          </h4>
                          <p className="font-sans text-xs sm:text-sm text-[#4B4C53] leading-relaxed">
                            {mod.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: REVIEWS */}
            {activeTab === "reviews" && (
              <div className="animate-in fade-in duration-200">
                {/* What Learners Are Saying Section */}
                <div className="mb-8 sm:mb-10">
                  <h2 className="font-heading font-semibold text-[20px] text-[#242528] mb-3">
                    What Learners Are Saying
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-[#4B4C53] leading-relaxed">
                    Discover what our learners have to say about their experience with &apos;{course.title}&apos;. Read authentic reviews and feedback from our community.
                  </p>
                </div>

                {/* Ratings Summary Box (Figma 60:1294: 723x226) */}
                <div className="w-full rounded-[16px] border border-[#CED0D3] bg-white p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-8 mb-8 sm:mb-10">
                  {/* Neon Lime Rating Square */}
                  <div className="w-[96px] h-[96px] sm:w-[104px] sm:h-[104px] rounded-[16px] bg-[#D4FB20] text-[#242528] flex flex-col items-center justify-center shrink-0">
                    <span className="font-sans text-xs font-medium text-[#242528]">Ratings</span>
                    <span className="font-heading font-bold text-3xl sm:text-4xl text-[#242528]">4.7</span>
                  </div>

                  {/* Breakdown Bars */}
                  <div className="flex-1 w-full space-y-3">
                    {ratingBars.map((bar) => (
                      <div key={bar.stars} className="flex items-center gap-2 sm:gap-3 text-xs text-[#4B4C53]">
                        <div className="w-full bg-[#E5E6E8] h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-[#D4FB20] h-full rounded-full transition-all duration-500"
                            style={{ width: bar.percent }}
                          />
                        </div>
                        <div className="flex items-center gap-0.5 shrink-0">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-[#242528] text-[#242528]"
                            />
                          ))}
                        </div>
                        <span className="w-8 text-right font-medium text-[#4B4C53] shrink-0 font-sans">
                          {bar.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Reviews Section */}
                <div>
                  <h3 className="font-heading font-semibold text-[20px] text-[#242528] mb-4">
                    Individual Reviews:
                  </h3>

                  {/* Filter Pills */}
                  <div className="flex flex-wrap items-center gap-2 mb-8">
                    {filterButtons.map((btn) => {
                      const isActive = selectedRatingFilter === btn;
                      return (
                        <button
                          key={btn}
                          type="button"
                          onClick={() => setSelectedRatingFilter(btn)}
                          className={cn(
                            "h-[40px] px-5 rounded-full text-sm font-medium font-sans transition-colors cursor-pointer flex items-center gap-1.5",
                            isActive
                              ? "bg-[#D4FB20] text-[#242528]"
                              : "bg-white border border-[#CED0D3] text-[#242528] hover:bg-[#F5F5F6]"
                          )}
                        >
                          {btn !== "All rating" && (
                            <Star className="w-3.5 h-3.5 fill-current text-current" />
                          )}
                          <span>{btn}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Reviews Cards */}
                  <div className="space-y-6">
                    {filteredReviews.map((rev, idx) => (
                      <div
                        key={idx}
                        className="p-5 sm:p-8 rounded-[24px] border border-[#CED0D3] bg-white flex flex-col"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-[#CED0D3]">
                              <Image
                                src={rev.avatar}
                                alt={rev.name}
                                fill
                                className="object-cover"
                                sizes="48px"
                              />
                            </div>
                            <div>
                              <h4 className="font-heading font-semibold text-base text-[#242528]">
                                {rev.name}
                              </h4>
                              <p className="font-sans text-xs text-[#82868E]">{rev.role}</p>
                            </div>
                          </div>
                          <span className="font-sans text-xs text-[#82868E]">{rev.time}</span>
                        </div>

                        {/* Star Rating */}
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#242528] text-[#242528]" />
                          ))}
                        </div>

                        <p className="font-sans text-base text-[#4B4C53] leading-relaxed">
                          &quot;{rev.comment}&quot;
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
