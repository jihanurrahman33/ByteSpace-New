"use client";

interface CoursesFilterTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function CoursesFilterTabs({
  tabs,
  activeTab,
  onTabChange,
}: CoursesFilterTabsProps) {
  return (
    <div className="w-full overflow-x-auto no-scrollbar scroll-smooth py-2 sm:py-4">
      <div className="flex items-center justify-start md:justify-center min-w-max gap-2 sm:gap-3 px-1 sm:px-6">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`h-9 sm:h-11 px-3.5 sm:px-5 rounded-full text-xs sm:text-sm font-medium font-sans whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-secondary-400 text-neutral-950 font-semibold shadow-xs"
                  : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}
