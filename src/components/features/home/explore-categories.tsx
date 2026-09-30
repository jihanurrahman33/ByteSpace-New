import Image from "next/image";
import Link from "next/link";

interface CategoryItem {
  id: string;
  name: string;
  iconSrc: string;
  href: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: "design",
    name: "Design",
    iconSrc: "/assets/icons/category-design.svg",
    href: "/courses",
  },
  {
    id: "development",
    name: "Development",
    iconSrc: "/assets/icons/category-development.svg",
    href: "/courses",
  },
  {
    id: "it-software",
    name: "IT & Software",
    iconSrc: "/assets/icons/category-it-software.svg",
    href: "/courses",
  },
  {
    id: "business",
    name: "Business",
    iconSrc: "/assets/icons/category-business.svg",
    href: "/courses",
  },
  {
    id: "marketing",
    name: "Marketing",
    iconSrc: "/assets/icons/category-marketing.svg",
    href: "/courses",
  },
  {
    id: "photography",
    name: "Photography",
    iconSrc: "/assets/icons/category-photography.svg",
    href: "/courses",
  },
];

export function ExploreCategoriesSection() {
  return (
    <section className="w-full bg-white pb-14 sm:pb-20 md:pb-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px]">
        {/* Section Heading & Subtitle (Figma Frame 9_34_684) */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl md:text-[36px] text-[#040819] leading-[1.2] mb-3 sm:mb-4">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-[18px] text-[#82868E] max-w-[917px] mx-auto leading-[1.6]">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid with Icon Circles (Figma Frame 10_34_725) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 md:gap-8 justify-items-center">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="w-full max-w-[167px] min-h-[140px] sm:h-[167px] rounded-[24px] border border-[#CED0D3] bg-white hover:border-[#D4FB20] hover:shadow-[0_12px_28px_rgba(212,251,32,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center p-3 sm:p-4 text-center group cursor-pointer"
            >
              {/* 60x60 Neon Lime Circle Icon Box (Figma Frame 4 fill:#D4FB20) */}
              <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-full bg-[#D4FB20] flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform duration-300 shadow-xs shrink-0">
                <Image
                  src={cat.iconSrc}
                  alt={cat.name}
                  width={28}
                  height={28}
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
              </div>
              {/* Category Title */}
              <span className="font-sans font-medium text-xs sm:text-sm md:text-base lg:text-[18px] text-[#242528] group-hover:text-brand-blue transition-colors line-clamp-1">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
