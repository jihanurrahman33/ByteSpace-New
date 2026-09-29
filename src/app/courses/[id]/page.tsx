"use client";

import { use, useMemo } from "react";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CourseDetailsHero } from "@/components/features/courses/course-details-hero";
import { Footer } from "@/components/layout/footer";
import { ALL_COURSES } from "@/lib/constants/courses-data";

export default function CourseDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const course = useMemo(() => {
    return ALL_COURSES.find((c) => c.id === resolvedParams.id) || ALL_COURSES[0];
  }, [resolvedParams.id]);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Hero Banner with Course Title, Meta, Video, and Floating Sidebar (Figma 55:4066) */}
      <CourseDetailsHero course={course} />

      {/* 2. Main Content (Left Column 725px) */}
      <main className="relative w-full bg-white flex-1">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] pt-12 md:pt-16 pb-24">
          <div className="w-full lg:w-[725px] flex flex-col">
            {/* Pill Tabs (Figma 55:4118 - About / Lessons / Reviews) */}
            <div className="flex items-center gap-3 mb-10">
              <Link
                href={`/courses/${course.id}`}
                className="h-[43px] px-6 rounded-full bg-[#D4FB20] text-[#242528] font-sans font-medium text-base flex items-center justify-center transition-colors"
              >
                About
              </Link>
              <Link
                href={`/courses/${course.id}/lessons/${course.modules[0]?.lessons[0]?.id || "intro"}`}
                className="h-[43px] px-6 rounded-full bg-[#F5F5F6] text-[#4B4C53] hover:text-[#242528] font-sans font-medium text-base flex items-center justify-center transition-colors"
              >
                Lessons
              </Link>
              <Link
                href={`/courses/${course.id}/reviews`}
                className="h-[43px] px-6 rounded-full bg-[#F5F5F6] text-[#4B4C53] hover:text-[#242528] font-sans font-medium text-base flex items-center justify-center transition-colors"
              >
                Reviews
              </Link>
            </div>

            {/* Description (Figma 55:4126) */}
            <div className="mb-10">
              <h2 className="font-heading font-semibold text-[20px] text-[#242528] mb-3">
                Description
              </h2>
              <div className="space-y-4 font-sans text-base text-[#4B4C53] leading-relaxed">
                <p>
                  Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                </p>
                <p>
                  In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                </p>
                <p>
                  As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
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
                {[
                  "Foundational Concepts",
                  "Design Principles Mastery",
                  "Advanced Techniques in Digital Creation",
                  "Project Showcase and Critique",
                  "Optimizing for Various Platforms",
                  "Digital Asset Management Best Practices",
                  "Monetization Strategies",
                  "Capstone Project: Building Your Portfolio",
                ].map((point, idx) => (
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
        </div>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
