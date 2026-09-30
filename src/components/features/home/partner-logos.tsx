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
    <section className="w-full bg-[#F5F5F6] min-h-[120px] md:h-[202px] py-8 md:py-0 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-12 lg:px-[154px] flex items-center justify-center sm:justify-between gap-6 sm:gap-8 lg:gap-[72px] flex-wrap sm:flex-nowrap">
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
              className="w-auto h-6 sm:h-8 lg:h-[41px] max-w-[130px] sm:max-w-none object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
