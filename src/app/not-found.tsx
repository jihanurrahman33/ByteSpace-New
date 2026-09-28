import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Top 404 Hero Section (Figma Frame 63:409: 1440x957, #003BE2) */}
      <section className="relative w-full min-h-[860px] lg:h-[957px] bg-brand-blue flex flex-col justify-between overflow-hidden">
        {/* 120px Architectural Grid Lines (Figma Group 4: 63:410, 12% white opacity) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
          }}
        />

        {/* Floating 3D Geometric Ornaments */}
        {/* Top-Left Ornament (Figma Node 63:453: 332x331 at x: -76, y: 149) */}
        <div
          className="absolute -top-6 -left-16 sm:-left-8 md:top-24 md:-left-12 w-64 h-64 md:w-80 md:h-80 pointer-events-none select-none opacity-85 z-0"
          aria-hidden="true"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-secondary-400/30 via-primary-400/20 to-transparent blur-2xl animate-pulse" />
          <div className="absolute inset-6 rounded-3xl bg-gradient-to-br from-white/20 via-white/5 to-transparent backdrop-blur-md border border-white/25 rotate-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-secondary-400/60 to-white/40 shadow-inner" />
          </div>
        </div>

        {/* Top-Right Ornament (Figma Node 63:449: 222x222 at x: 1161, y: 169) */}
        <div
          className="absolute top-28 right-4 md:top-36 md:right-16 lg:right-28 w-44 h-44 md:w-56 md:h-56 pointer-events-none select-none opacity-80 z-0"
          aria-hidden="true"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white/30 via-primary-300/30 to-secondary-400/40 backdrop-blur-lg border border-white/30 shadow-[0_20px_40px_rgba(0,0,0,0.25)] flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-secondary-400 to-white/80 opacity-90 shadow-[inset_-4px_-4px_12px_rgba(0,0,0,0.3)]" />
          </div>
        </div>

        {/* Bottom-Left Ornament (Figma Node 63:447: 188x188 at x: 34, y: 632) */}
        <div
          className="absolute bottom-12 left-4 md:bottom-20 md:left-12 w-36 h-36 md:w-48 md:h-48 pointer-events-none select-none opacity-75 z-0"
          aria-hidden="true"
        >
          <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-secondary-400/40 via-white/10 to-transparent border border-white/20 backdrop-blur-md -rotate-12 shadow-[0_15px_35px_rgba(0,0,0,0.3)] flex items-center justify-center">
            <div className="w-16 h-16 rounded-xl bg-white/20 rotate-45 border border-white/40 shadow-sm" />
          </div>
        </div>

        {/* Bottom-Right Ornament (Figma Node 63:451: 357x356 at x: 1214, y: 571) */}
        <div
          className="absolute -bottom-10 -right-16 sm:-right-8 md:bottom-8 md:-right-8 w-72 h-72 md:w-88 md:h-88 pointer-events-none select-none opacity-90 z-0"
          aria-hidden="true"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tl from-secondary-400/35 via-primary-400/20 to-transparent blur-xl" />
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-white/30 via-secondary-400/20 to-transparent backdrop-blur-md border border-white/30 shadow-[0_25px_60px_rgba(0,0,0,0.35)] flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-secondary-400 via-secondary-300 to-white/90 shadow-lg" />
          </div>
        </div>

        {/* Transparent Hero Header (Figma Node 78:2779) */}
        <Header variant="hero" />

        {/* Center Content Section */}
        <div className="relative flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-16 z-10">
          {/* Giant "404" Background Typography (Figma Node 63:643: 480px Poppins SemiBold) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none font-heading font-semibold text-[170px] sm:text-[280px] md:text-[380px] lg:text-[480px] leading-none tracking-tighter"
            style={{
              background:
                "linear-gradient(180deg, #D4FB20 0%, rgba(212, 251, 32, 0.96) 25%, rgba(212, 251, 32, 0.75) 50%, rgba(212, 251, 32, 0.25) 75%, rgba(255, 255, 255, 0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            aria-hidden="true"
          >
            404
          </div>

          {/* Foreground Message & CTA (Figma Node 63:638) */}
          <div className="relative z-10 max-w-[935px] text-center flex flex-col items-center gap-8 mt-12 md:mt-24">
            {/* Title (Figma Node 63:639: Poppins 600, 72px, #FFFFFF) */}
            <h1 className="font-heading font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[72px] text-white leading-[1.15] tracking-tight">
              The page you are looking for doesn’t exist
            </h1>

            {/* Subtitle (Figma Node 63:640: Satoshi 400, 18px, #E5E6E8) */}
            <p className="font-sans text-neutral-100 text-base sm:text-lg max-w-[560px] leading-relaxed">
              Try to use a correct url or go back to homepage to start again
            </p>

            {/* Action Button (Figma Node 63:641 & 63:642: 46px pill, #D4FB20) */}
            <Link
              href="/"
              className="inline-flex items-center justify-center h-[46px] px-8 rounded-full bg-secondary-400 hover:bg-secondary-500 active:scale-95 text-neutral-950 font-sans font-medium text-lg transition-all duration-200 shadow-md cursor-pointer select-none"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Subtle Bottom Accent Gradient Transition */}
        <div className="w-full h-8 bg-gradient-to-b from-transparent to-brand-blue/30 pointer-events-none" />
      </section>

      {/* Exact Figma Footer (Node 78:1457) */}
      <Footer />
    </div>
  );
}
