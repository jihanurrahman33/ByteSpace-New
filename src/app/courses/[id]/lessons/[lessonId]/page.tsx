"use client";

import { use, useMemo } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Video } from "lucide-react";
import { CourseDetailsHero } from "@/components/features/courses/course-details-hero";
import { CourseSidebarCard } from "@/components/features/courses/course-sidebar-card";
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
      {/* 1. Royal Blue Hero Banner (matching Figma 60:102) */}
      <CourseDetailsHero course={course} activeTab="lessons" />

      {/* 2. Main Content + Right Sticky Sidebar Layout */}
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] w-full py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Left 2-Columns: Module List & Lessons */}
          <div className="lg:col-span-2 space-y-10">
            {/* Pill Tabs (Figma 60:102 - About / Lesson / Reviews) */}
            <div className="flex items-center gap-3">
              <Link
                href={`/courses/${course.id}`}
                className="h-9 px-5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-sans font-medium text-sm flex items-center justify-center transition-colors"
              >
                About
              </Link>
              <Link
                href={`/courses/${course.id}/lessons/${course.modules[0]?.lessons[0]?.id || "intro"}`}
                className="h-9 px-5 rounded-full bg-secondary-400 text-neutral-950 font-sans font-medium text-sm flex items-center justify-center shadow-xs"
              >
                Lesson
              </Link>
              <Link
                href={`/courses/${course.id}/reviews`}
                className="h-9 px-5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-sans font-medium text-sm flex items-center justify-center transition-colors"
              >
                Reviews
              </Link>
            </div>

            {/* Explore the Modules Section */}
            <div>
              <h2 className="font-heading font-semibold text-2xl text-neutral-950 mb-3">
                Explore the Modules
              </h2>
              <p className="font-sans text-neutral-700 text-sm md:text-base leading-relaxed">
                Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
              </p>
            </div>

            {/* Lesson List with Neon Lime Video Camera Badges */}
            <div className="space-y-6">
              <h3 className="font-heading font-semibold text-xl text-neutral-950 mb-2">
                Lesson List
              </h3>
              <div className="space-y-4">
                {modulesList.map((mod, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-neutral-100 bg-white hover:border-neutral-200 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary-400 text-neutral-950 flex items-center justify-center shrink-0 shadow-xs">
                      <Video className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-base text-neutral-950 mb-1">
                        {mod.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {mod.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lesson Content Section */}
            <div>
              <h3 className="font-heading font-semibold text-xl text-neutral-950 mb-2">
                Lesson Content
              </h3>
              <p className="font-sans text-neutral-700 text-sm md:text-base leading-relaxed">
                Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
              </p>
            </div>

            {/* Lesson Progress Tracking Section */}
            <div>
              <h3 className="font-heading font-semibold text-xl text-neutral-950 mb-2">
                Lesson Progress Tracking
              </h3>
              <p className="font-sans text-neutral-700 text-sm md:text-base leading-relaxed mb-6">
                Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
              </p>

              {/* Progress Box (Figma 60:102) */}
              <div className="p-6 rounded-2xl border border-neutral-200/80 bg-white shadow-xs max-w-xl">
                <p className="text-xs font-medium text-neutral-600 mb-1">Learning Progress</p>
                <p className="font-heading font-bold text-3xl text-neutral-950 mb-3">55%</p>
                <div className="w-full bg-neutral-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-secondary-400 h-full w-[55%] rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Video Preview & Enrollment Card */}
          <div className="lg:col-span-1">
            <CourseSidebarCard course={course} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
