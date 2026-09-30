"use client";

export function CoursesFilterBar() {
  return (
    <div className="w-full flex flex-wrap items-center justify-between gap-3 sm:gap-4 py-4 sm:py-6">
      {/* Left Filter Group */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <button
          type="button"
          className="h-[44px] sm:h-[48px] px-3.5 sm:px-5 rounded-full border border-[#CED0D3] bg-white text-[#242528] font-sans text-xs sm:text-sm font-normal flex items-center gap-1.5 sm:gap-2 hover:bg-neutral-50 transition-colors cursor-pointer"
        >
          <svg
            className="w-4 h-4 text-[#242528]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <span>Filter</span>
        </button>

        <button
          type="button"
          className="h-[44px] sm:h-[48px] px-3.5 sm:px-5 rounded-full border border-[#CED0D3] bg-white text-[#242528] font-sans text-xs sm:text-sm font-normal flex items-center gap-1.5 sm:gap-2 hover:bg-neutral-50 transition-colors cursor-pointer"
        >
          <svg
            className="w-4 h-4 text-[#242528]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M2 17h4v4H2v-4zm6-5h4v9H8v-9zm6-5h4v14h-4V7zm6-5h4v19h-4V2z" />
          </svg>
          <span>Level</span>
        </button>

        <button
          type="button"
          className="h-[44px] sm:h-[48px] px-3.5 sm:px-5 rounded-full border border-[#CED0D3] bg-white text-[#242528] font-sans text-xs sm:text-sm font-normal flex items-center gap-1.5 sm:gap-2 hover:bg-neutral-50 transition-colors cursor-pointer"
        >
          <svg
            className="w-4 h-4 text-[#242528]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          <span>Category</span>
        </button>
      </div>

      {/* Right Sort Button */}
      <div>
        <button
          type="button"
          className="h-[48px] px-5 rounded-full border border-[#CED0D3] bg-white text-[#242528] font-sans text-sm font-normal flex items-center gap-2 hover:bg-neutral-50 transition-colors cursor-pointer"
        >
          <svg
            className="w-4 h-4 text-[#242528]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 4h18M3 8h12M3 12h8M3 16h4"
            />
          </svg>
          <span>Most relevant</span>
        </button>
      </div>
    </div>
  );
}
