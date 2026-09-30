import Image from "next/image";

export function PartnerLogos() {
  const logos = [
    { src: "/images/partners/logo_0.svg", alt: "Partner Logo 1", width: 167, height: 41 },
    { src: "/images/partners/logo_1.svg", alt: "Partner Logo 2", width: 168, height: 41 },
    { src: "/images/partners/logo_2.svg", alt: "Partner Logo 3", width: 170, height: 41 },
    { src: "/images/partners/logo_3.svg", alt: "Partner Logo 4", width: 170, height: 41 },
    { src: "/images/partners/logo_4.svg", alt: "Partner Logo 5", width: 169, height: 42 },
  ];

  return (
    <section className="relative w-full bg-[#F5F5F6] min-h-[96px] sm:min-h-[120px] md:h-[202px] py-6 sm:py-8 md:py-0 flex items-center justify-center overflow-hidden">
      {/* Desktop & Tablet View (>= sm): Exact Figma Row */}
      <div className="hidden sm:flex w-full max-w-[1440px] px-6 md:px-12 lg:px-[154px] items-center justify-between gap-8 lg:gap-[72px]">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center shrink-0 transition-opacity hover:opacity-80"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="w-auto h-8 lg:h-[41px] object-contain"
            />
          </div>
        ))}
      </div>

      {/* Mobile View (< sm): Smooth Infinite Marquee Ticker with Edge Fade Masks */}
      <div className="sm:hidden relative w-full overflow-hidden flex items-center py-2">
        {/* Left Edge Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#F5F5F6] to-transparent z-10" />
        {/* Right Edge Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#F5F5F6] to-transparent z-10" />

        {/* Scrolling Track */}
        <div className="animate-marquee flex items-center gap-8">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`marquee-${index}`}
              className="flex items-center justify-center shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="w-auto h-7 max-w-[130px] object-contain opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
