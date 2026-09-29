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
    <section className="w-full bg-[#F5F5F6] py-16 md:py-20 border-b border-neutral-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        {/* Partner Logos (Figma Frame 2 1:1794, 167x41px white boxes) */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-[40px]">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-[167px] h-[41px] bg-white rounded-[8px] flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity shadow-xs border border-neutral-200/40"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-6 md:h-7 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
