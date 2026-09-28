import { HeroSection } from "@/components/features/home/hero-section";
import { PartnerLogos } from "@/components/features/home/partner-logos";
import { FeaturedCoursesSection } from "@/components/features/home/featured-courses";
import { ExploreCategoriesSection } from "@/components/features/home/explore-categories";
import { FeatureSplitSection } from "@/components/features/home/feature-split-section";
import { CreatorCtaSection } from "@/components/features/home/creator-cta";
import { TestimonialsSection } from "@/components/features/home/testimonials-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-secondary-400 selection:text-neutral-950">
      {/* 1. Hero Section (Hero_Frame 1:1695) */}
      <HeroSection />

      {/* 2. Partner Logos Bar (Frame 2 1:1794) */}
      <PartnerLogos />

      {/* 3. Featured Courses Section & Category Pills (Frame 3 12:101 & Frame 8 33:683) */}
      <FeaturedCoursesSection />

      {/* 4. Explore Diverse Learning Paths (Frame 9 34:684 & Frame 10 34:725) */}
      <ExploreCategoriesSection />

      {/* 5. Feature Split Showcase (Frame 15 34:1159) */}
      <FeatureSplitSection />

      {/* 6. Creator CTA Section (CTA_Frame 34:1161) */}
      <CreatorCtaSection />

      {/* 7. Community Testimonials Section (Testimonials_Frame 34:1175) */}
      <TestimonialsSection />

      {/* 8. Footer (Footer 34:1256) */}
      <Footer />
    </div>
  );
}
