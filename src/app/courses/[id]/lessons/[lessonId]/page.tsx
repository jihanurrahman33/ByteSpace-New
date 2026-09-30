"use client";

import { use, useMemo } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Video } from "lucide-react";
import { CourseDetailsHero } from "@/components/features/courses/course-details-hero";
import { Footer } from "@/components/layout/footer";
import { ALL_COURSES } from "@/lib/constants/courses-data";

export default function CourseLessonsPage({
  params,
}: {
  params: Promise<{ id: string; lessonId: string }>;
}) {
  const resolvedParams = use(params);
  const course = useMemo(() => {
    return ALL_COURSES.find((c) => c.id === resolvedParams.id) || ALL_COURSES[0];
  }, [resolvedParams.id]);

  if (!course) {
    notFound();
  }

  const modulesList = [
    {
      title: "Module 1: Introduction to Digital Assets",
      desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      title: "Module 2: Design Principles for Impact",
      desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      title: "Module 4: User-Centric Design Strategies",
      desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      title: "Module 5: Interactive Media and Engagement",
      desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      title: "Module 6: Project Showcase and Critique",
      desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Hero Banner with Course Title, Meta, Video, and Floating Sidebar (Figma 60:102) */}
      <CourseDetailsHero course={course} />

      {/* 2. Main Content (Left Column 723px) */}
      <main className="relative w-full bg-white flex-1">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] pt-8 md:pt-16 pb-16 md:pb-24">
          <div className="w-full lg:w-[723px] flex flex-col">
            {/* Pill Tabs (Figma 60:104 - About / Lesson / Reviews) */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-10">
              <Link
                href={`/courses/${course.id}`}
                className="h-[40px] sm:h-[43px] px-4 sm:px-6 rounded-full bg-[#F5F5F6] text-[#4B4C53] hover:text-[#242528] font-sans font-medium text-sm sm:text-base flex items-center justify-center transition-colors"
              >
                About
              </Link>
              <Link
                href={`/courses/${course.id}/lessons/${course.modules[0]?.lessons[0]?.id || "intro"}`}
                className="h-[40px] sm:h-[43px] px-4 sm:px-6 rounded-full bg-[#D4FB20] text-[#242528] font-sans font-medium text-sm sm:text-base flex items-center justify-center transition-colors"
              >
                Lesson
              </Link>
              <Link
                href={`/courses/${course.id}/reviews`}
                className="h-[40px] sm:h-[43px] px-4 sm:px-6 rounded-full bg-[#F5F5F6] text-[#4B4C53] hover:text-[#242528] font-sans font-medium text-sm sm:text-base flex items-center justify-center transition-colors"
              >
                Reviews
              </Link>
            </div>

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
                  <div key={idx} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-[72px] sm:h-[72px] rounded-[16px] sm:rounded-[24px] bg-[#D4FB20] text-[#242528] flex items-center justify-center shrink-0">
                      <Video className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#242528]" />
                    </div>
                    <div className="flex-1 pt-0.5 sm:pt-1">
                      <h4 className="font-heading font-semibold text-sm sm:text-base text-[#242528] mb-1">
                        {mod.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-base text-[#4B4C53] leading-relaxed">
                        {mod.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lesson Content Section */}
            <div className="mb-10">
              <h3 className="font-heading font-semibold text-[20px] text-[#242528] mb-3">
                Lesson Content
              </h3>
              <p className="font-sans text-base text-[#4B4C53] leading-relaxed">
                Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
              </p>
            </div>

            {/* Lesson Progress Tracking Section */}
            <div>
              <h3 className="font-heading font-semibold text-[20px] text-[#242528] mb-3">
                Lesson Progress Tracking
              </h3>
              <p className="font-sans text-base text-[#4B4C53] leading-relaxed mb-6">
                Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
              </p>

              {/* Progress Box (Figma 60:668) */}
              <div className="w-full rounded-[16px] border border-[#CED0D3] bg-white p-6">
                <p className="font-sans text-xs text-[#242528] mb-1">Learning Progress</p>
                <p className="font-heading font-bold text-3xl text-[#242528] mb-4">55%</p>
                <div className="w-full bg-[#E5E6E8] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#D4FB20] h-full w-[55%] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
