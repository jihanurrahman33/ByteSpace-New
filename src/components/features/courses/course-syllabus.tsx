"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, PlayCircle, CheckCircle2 } from "lucide-react";
import { ModuleItem } from "@/lib/constants/courses-data";

interface CourseSyllabusProps {
  courseId: string;
  modules: ModuleItem[];
  activeLessonId?: string;
}

export function CourseSyllabus({
  courseId,
  modules,
  activeLessonId,
}: CourseSyllabusProps) {
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({
    [modules[0]?.id || ""]: true,
    [modules[1]?.id || ""]: true,
  });

  const toggleModule = (modId: string) => {
    setOpenModules((prev) => ({ ...prev, [modId]: !prev[modId] }));
  };

  return (
    <div className="w-full space-y-4">
      {modules.map((mod, modIdx) => {
        const isOpen = !!openModules[mod.id];
        return (
          <div
            key={mod.id}
            className="border border-neutral-200/80 rounded-2xl overflow-hidden bg-white shadow-xs"
          >
            {/* Module Accordion Header */}
            <button
              onClick={() => toggleModule(mod.id)}
              className="w-full px-6 py-4.5 bg-neutral-50 flex items-center justify-between hover:bg-neutral-100/70 transition-colors text-left cursor-pointer"
            >
              <div>
                <h4 className="font-heading font-semibold text-base sm:text-lg text-neutral-950">
                  {mod.title}
                </h4>
                <p className="font-sans text-xs text-neutral-500 mt-0.5">
                  {mod.lessons.length} Lessons
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-neutral-600 shadow-xs">
                {isOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </div>
            </button>

            {/* Lessons List */}
            {isOpen && (
              <div className="divide-y divide-neutral-100">
                {mod.lessons.map((lesson) => {
                  const isActive = activeLessonId === lesson.id;
                  return (
                    <Link
                      key={lesson.id}
                      href={`/courses/${courseId}/lessons/${lesson.id}`}
                      className={`px-6 py-3.5 flex items-center justify-between transition-colors ${
                        isActive
                          ? "bg-secondary-400/15 border-l-4 border-secondary-400 font-medium text-neutral-950"
                          : "hover:bg-neutral-50/70 text-neutral-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {lesson.isCompleted ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <PlayCircle className="w-4 h-4 text-neutral-400 shrink-0" />
                        )}
                        <span className="font-sans text-sm">{lesson.title}</span>
                      </div>
                      <span className="font-sans text-xs text-neutral-400">
                        {lesson.duration}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
