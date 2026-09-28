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
    <section className="w-full bg-neutral-50 py-12 md:py-16 border-b border-neutral-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-[72px]">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-12 md:h-14 px-6 py-2.5 rounded-full bg-white shadow-xs flex items-center justify-center border border-neutral-200/50 hover:shadow-md transition-shadow"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-6 md:h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
