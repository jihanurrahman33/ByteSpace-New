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
    href: "/courses?category=design",
  },
  {
    id: "development",
    name: "Development",
    iconSrc: "/assets/icons/category-development.svg",
    href: "/courses?category=development",
  },
  {
    id: "it-software",
    name: "IT & Software",
    iconSrc: "/assets/icons/category-it-software.svg",
    href: "/courses?category=it-software",
  },
  {
    id: "business",
    name: "Business",
    iconSrc: "/assets/icons/category-business.svg",
    href: "/courses?category=business",
  },
  {
    id: "marketing",
    name: "Marketing",
    iconSrc: "/assets/icons/category-marketing.svg",
    href: "/courses?category=marketing",
  },
  {
    id: "photography",
    name: "Photography",
    iconSrc: "/assets/icons/category-photography.svg",
    href: "/courses?category=photography",
  },
];

export function ExploreCategoriesSection() {
  return (
    <section className="w-full bg-white pb-20 md:pb-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        {/* Section Heading & Subtitle (Figma Frame 9_34_684) */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-14">
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl text-[#040819] leading-[1.25] mb-4">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="font-sans text-neutral-400 text-base md:text-lg leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid (Figma Frame 10_34_725) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-8 justify-items-center">
          {CATEGORIES.map((cat) => {
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className="w-full max-w-[170px] aspect-square rounded-[24px] border border-neutral-200/80 bg-white hover:border-secondary-400 hover:shadow-[0_12px_28px_rgba(212,251,32,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center group cursor-pointer"
              >
                {/* 60x60 Neon Lime Circle Icon Box (Figma Frame 4) */}
                <div className="w-[60px] h-[60px] rounded-full bg-secondary-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xs">
                  <Image
                    src={cat.iconSrc}
                    alt={cat.name}
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                </div>
                {/* Category Title */}
                <span className="font-sans font-medium text-base sm:text-lg text-neutral-950 group-hover:text-brand-blue transition-colors">
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
