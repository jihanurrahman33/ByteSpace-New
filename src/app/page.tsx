import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Container with Figma Electric Blue (#003BE2) */}
      <section className="bg-brand-blue text-neutral-50 relative overflow-hidden">
        {/* Header - Hero / Transparent Variant */}
        <Header variant="hero" />

        {/* Hero Preview Placeholder */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] py-16 md:py-24 flex flex-col items-center text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-400 text-neutral-950 text-xs md:text-sm font-medium tracking-wide mb-6">
            ByteSpace Learning Platform
          </span>
          <h1 className="font-heading font-semibold text-4xl md:text-6xl lg:text-7xl max-w-4xl tracking-tight leading-[1.1] mb-6">
            We ignite opportunity by setting the world in motion.
          </h1>
          <p className="font-sans text-neutral-50/80 text-base md:text-xl max-w-2xl leading-relaxed mb-8">
            Experience next-generation learning with top creators, interactive lessons, and structured masterclasses.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="h-12 px-8 rounded-full bg-secondary-400 hover:bg-secondary-500 text-neutral-950 font-medium text-base transition-colors cursor-pointer">
              Explore Courses
            </button>
            <button className="h-12 px-8 rounded-full border border-white/30 hover:bg-white/10 text-neutral-50 font-medium text-base transition-colors cursor-pointer">
              Become a Creator
            </button>
          </div>
        </div>
      </section>

      {/* Light Header Showcase (Used on Courses, Search, Profile pages) */}
      <section className="py-12 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] mb-4">
          <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 mb-2">
            Light Variant (For Content & Inner Pages)
          </p>
        </div>
        <Header variant="light" className="shadow-xs" />
      </section>

      {/* Main Spacer */}
      <main className="flex-1 py-16 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        <div className="p-8 rounded-2xl border border-neutral-100 bg-white">
          <h2 className="text-2xl font-bold font-heading mb-2 text-neutral-950">
            Figma Header & Footer Components
          </h2>
          <p className="text-neutral-600 text-sm leading-relaxed max-w-2xl">
            Designed to 1:1 match the ByteSpace Figma design tokens, vector logo geometry, typography scales (Clash Display, Poppins, Satoshi), and exact auto-layout spacings.
          </p>
        </div>
      </main>

      {/* Exact Figma Footer */}
      <Footer />
    </div>
  );
}
