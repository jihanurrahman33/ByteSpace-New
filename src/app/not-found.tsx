import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Top 404 Hero Section (Figma Frame 63:409: 1440x957, #003BE2) */}
      <section className="relative w-full h-[960px] bg-brand-blue overflow-hidden flex flex-col">
        {/* 120px Architectural Grid Lines (matching Figma 63:410 Group 4, opacity 0.12) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
          <svg
            className="w-full h-full"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="notfound-grid"
                width="120"
                height="120"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 120 0 L 0 0 0 120"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#notfound-grid)" />
          </svg>
        </div>

        {/* 1440px Coordinate Space */}
        <div className="relative w-full max-w-[1440px] h-full mx-auto">
          {/* Header (Figma 1440x120) */}
          <Header variant="hero" />

          {/* Giant "404" Background Typography (Figma Node 63:643: 920x480 at y: 160px) */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[160px] w-[920px] h-[480px] pointer-events-none select-none font-heading font-semibold text-[480px] leading-[1] tracking-[-4.8px] text-center flex items-center justify-center"
            style={{
              background:
                "linear-gradient(180deg, #CBFC01 0%, rgba(203, 252, 1, 0.96) 25%, rgba(203, 252, 1, 0.81) 50.5%, rgba(203, 252, 1, 0.61) 68%, rgba(255, 255, 255, 0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            aria-hidden="true"
          >
            404
          </div>

          {/* Foreground Message & CTA (Figma Node 63:638: 935x311 at y: 521px) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[521px] w-[935px] max-w-full px-4 flex flex-col items-center text-center z-10">
            {/* Title (Figma Node 63:639: Poppins SemiBold, 72px, leading 86.4px, -0.72px letter spacing) */}
            <h1 className="font-heading font-semibold text-[40px] sm:text-[56px] md:text-[72px] text-white leading-[1.2] tracking-[-0.72px]">
              The page you are looking for doesn’t exist
            </h1>

            {/* Subtitle (Figma Node 63:640: Satoshi Regular, 18px, leading 28.8px, #F5F5F6/80) */}
            <p className="font-sans font-normal text-base md:text-[18px] leading-[28.8px] text-neutral-100/80 max-w-[486px] mt-4">
              Try to use a correct url or go back to homepage to start again
            </p>

            {/* Action Button (Figma Node 63:641: 163x46, radius 24px, #CBFC01) */}
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center w-[163px] h-[46px] rounded-[24px] bg-[#CBFC01] hover:bg-[#b8e400] text-neutral-950 font-sans font-medium text-[18px] leading-[21.6px] transition-colors shadow-md cursor-pointer"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Footer (Figma 78:1457) */}
      <Footer />
    </div>
  );
}
