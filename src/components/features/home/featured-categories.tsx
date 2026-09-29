import Image from "next/image";
import Link from "next/link";

interface CategoryItem {
  id: string;
  name: string;
  iconSrc: string;
  href: string;
}

const FEATURED_CATEGORIES: CategoryItem[] = [
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

export function FeaturedCategoriesSection() {
  return (
    <section className="w-full bg-white pb-14 md:pb-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        {/* Featured Categories Header (Figma Heading 11:22) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10">
          <div>
            <span className="text-[18px] font-medium text-[#7F30F7] font-sans block mb-2">
              Featured Categories
            </span>
            <h2 className="font-heading font-medium text-3xl sm:text-4xl lg:text-[44px] text-black leading-[1.2] max-w-[694px]">
              Innovative Paths to Knowledge
            </h2>
          </div>
          <Link
            href="/courses"
            className="inline-flex items-center justify-center h-10 px-6 rounded-[24px] bg-[#C1E338] hover:bg-[#b0d227] text-[#3A3B3F] font-sans font-medium text-[16px] transition-colors shrink-0"
          >
            View More
          </Link>
        </div>

        {/* 6 Category Cards (Figma Categories_Card 11:28, 167x167px, #F5F5F6 fill, 24px radius) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
          {FEATURED_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="w-full max-w-[167px] h-[167px] rounded-[24px] bg-[#F5F5F6] hover:bg-[#E8E8EA] transition-all flex flex-col items-center justify-center gap-3 text-center group cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Image
                  src={cat.iconSrc}
                  alt={cat.name}
                  width={36}
                  height={36}
                  className="w-9 h-9 object-contain"
                />
              </div>
              <span className="font-sans font-medium text-[18px] text-[#242528] group-hover:text-brand-blue transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
