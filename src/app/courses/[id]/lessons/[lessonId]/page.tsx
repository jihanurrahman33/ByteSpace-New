"use client";

import { use, useMemo, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Share2,
  Download,
  BookOpen,
  MessageSquare,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CourseSyllabus } from "@/components/features/courses/course-syllabus";
import { ALL_COURSES } from "@/lib/constants/courses-data";

export default function CourseLessonsPage({
  params,
}: {
  params: Promise<{ id: string; lessonId: string }>;
}) {
  const resolvedParams = use(params);
  const [activeTab, setActiveTab] = useState<"notes" | "resources" | "discussion">("notes");
  const [isCompleted, setIsCompleted] = useState(false);

  const course = useMemo(() => {
    return ALL_COURSES.find((c) => c.id === resolvedParams.id) || ALL_COURSES[0];
  }, [resolvedParams.id]);

  if (!course) {
    notFound();
  }

  // Find active lesson
  const allLessons = useMemo(() => {
    return course.modules.flatMap((m) => m.lessons);
  }, [course]);

  const currentLessonIndex = useMemo(() => {
    const idx = allLessons.findIndex((l) => l.id === resolvedParams.lessonId);
    return idx >= 0 ? idx : 0;
  }, [allLessons, resolvedParams.lessonId]);

  const currentLesson = allLessons[currentLessonIndex] || {
    id: "les-1",
    title: "01. Introduction to Interface & Tools",
    duration: "12:40",
  };

  const prevLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
  const nextLesson =
    currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Light Header Variant */}
      <Header variant="light" className="border-b border-neutral-100" />

      {/* Breadcrumb & Navigation Bar */}
      <div className="bg-neutral-50 border-b border-neutral-200/60 py-3.5 px-6 md:px-12 lg:px-[120px]">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-sans">
            <Link href="/courses" className="text-neutral-500 hover:text-neutral-900">
              Courses
            </Link>
            <span className="text-neutral-400">/</span>
            <Link
              href={`/courses/${course.id}`}
              className="text-neutral-500 hover:text-neutral-900 line-clamp-1 max-w-[200px] sm:max-w-none"
            >
              {course.title}
            </Link>
            <span className="text-neutral-400">/</span>
            <span className="font-medium text-neutral-950 line-clamp-1">
              {currentLesson.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {prevLesson ? (
              <Link
                href={`/courses/${course.id}/lessons/${prevLesson.id}`}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 text-xs sm:text-sm font-medium text-neutral-800 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </Link>
            ) : null}

            {nextLesson ? (
              <Link
                href={`/courses/${course.id}/lessons/${nextLesson.id}`}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-secondary-400 hover:bg-[#c2ea1b] text-xs sm:text-sm font-semibold text-neutral-950 transition-colors shadow-xs"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      {/* Main Workspace (Video Player + Sidebar) */}
      <main className="flex-1 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] w-full py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left 2-Cols: Video Player & Lesson Materials */}
          <div className="lg:col-span-2 space-y-6">
            {/* 16:9 Video Player Container */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-neutral-950 shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
                title={currentLesson.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Lesson Title & Actions Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100">
              <div>
                <h1 className="font-heading font-semibold text-xl sm:text-2xl text-neutral-950">
                  {currentLesson.title}
                </h1>
                <p className="font-sans text-xs text-neutral-400 mt-1">
                  Duration: {currentLesson.duration} • Module Lesson {currentLessonIndex + 1} of{" "}
                  {allLessons.length}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsCompleted(!isCompleted)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    isCompleted
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-neutral-100 hover:bg-neutral-200 text-neutral-800"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isCompleted ? "Completed" : "Mark Complete"}</span>
                </button>

                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: currentLesson.title, url: window.location.href });
                    }
                  }}
                  className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-50 transition-colors cursor-pointer"
                  aria-label="Share lesson"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Lesson Tabs: Notes, Resources, Discussion */}
            <div>
              <div className="flex items-center gap-6 border-b border-neutral-200 mb-6">
                <button
                  onClick={() => setActiveTab("notes")}
                  className={`pb-3 font-heading font-medium text-sm sm:text-base border-b-2 transition-all cursor-pointer ${
                    activeTab === "notes"
                      ? "border-secondary-400 text-neutral-950 font-semibold"
                      : "border-transparent text-neutral-400 hover:text-neutral-700"
                  }`}
                >
                  Lesson Notes
                </button>
                <button
                  onClick={() => setActiveTab("resources")}
                  className={`pb-3 font-heading font-medium text-sm sm:text-base border-b-2 transition-all cursor-pointer ${
                    activeTab === "resources"
                      ? "border-secondary-400 text-neutral-950 font-semibold"
                      : "border-transparent text-neutral-400 hover:text-neutral-700"
                  }`}
                >
                  Resources & Downloads
                </button>
                <button
                  onClick={() => setActiveTab("discussion")}
                  className={`pb-3 font-heading font-medium text-sm sm:text-base border-b-2 transition-all cursor-pointer ${
                    activeTab === "discussion"
                      ? "border-secondary-400 text-neutral-950 font-semibold"
                      : "border-transparent text-neutral-400 hover:text-neutral-700"
                  }`}
                >
                  Discussion & Q&A
                </button>
              </div>

              {activeTab === "notes" && (
                <div className="prose prose-neutral max-w-none font-sans text-neutral-700 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    In this lesson, we break down the core user interface of Figma, discussing canvas
                    navigation, zooming conventions, artboard structures, and toolbar operations.
                  </p>
                  <h4 className="font-heading font-semibold text-neutral-950 text-base">
                    Key Takeaways:
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Hold Spacebar to pan across complex Figma canvases effortlessly.</li>
                    <li>Utilize Frame presets (F key) tailored to standard iOS and web viewports.</li>
                    <li>Group vs. Frame distinction: Always prefer Frames for Auto Layout scaling.</li>
                  </ul>
                </div>
              )}

              {activeTab === "resources" && (
                <div className="space-y-3">
                  {[
                    { name: "Starter-UI-Kit.fig", size: "14.2 MB" },
                    { name: "Design-Tokens-CheatSheet.pdf", size: "2.1 MB" },
                    { name: "Keyboard-Shortcuts-Poster.png", size: "1.8 MB" },
                  ].map((file, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/50 hover:bg-neutral-100/60 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Download className="w-4 h-4 text-brand-blue" />
                        <div>
                          <p className="font-heading font-medium text-sm text-neutral-900">
                            {file.name}
                          </p>
                          <span className="text-xs text-neutral-400">{file.size}</span>
                        </div>
                      </div>
                      <button className="px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-medium text-neutral-800 hover:bg-neutral-50 cursor-pointer shadow-xs">
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "discussion" && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl border border-neutral-100 bg-neutral-50">
                    <p className="font-sans text-sm text-neutral-700">
                      Have questions about this lesson? Ask your peers and instructors in the
                      community thread below.
                    </p>
                  </div>
                  <textarea
                    placeholder="Ask a question or share your thoughts..."
                    className="w-full p-4 rounded-2xl border border-neutral-200 outline-none focus:border-brand-blue text-sm font-sans resize-none h-24"
                  />
                  <div className="flex justify-end">
                    <button className="px-6 py-2.5 rounded-full bg-neutral-950 text-white font-medium text-sm hover:bg-neutral-800 transition-colors cursor-pointer">
                      Post Question
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right 1-Col: Syllabus Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-100 mb-2">
              <h3 className="font-heading font-semibold text-base text-neutral-950 mb-1">
                Course Syllabus
              </h3>
              <p className="font-sans text-xs text-neutral-500">
                {course.modules.length} Modules • {allLessons.length} Lessons
              </p>
            </div>
            <CourseSyllabus
              courseId={course.id}
              modules={course.modules}
              activeLessonId={currentLesson.id}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
