import Link from "next/link";
import Image from "next/image";

export function CreatorCtaSection() {
  return (
    <section className="relative w-full min-h-[440px] md:h-[488px] py-14 sm:py-16 md:py-0 bg-brand-blue overflow-hidden flex items-center justify-center">
      {/* 120px Architectural Grid Lines (matching Figma 12:224 Group 4) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
        <svg
          className="w-full h-full"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="cta-grid"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 120 0 L 0 0 0 120"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      {/* Authentic Figma 3D Floating Ornaments (Figma 46:78, at x: -118px, y: -162px, 1714x803) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1440px] h-[488px] pointer-events-none overflow-hidden z-0">
        <div className="absolute -left-[118px] -top-[162px] w-[1714px] h-[803px]">
          <Image
            src="/assets/cta-decorations.png"
            alt="ByteSpace 3D decorations"
            width={1714}
            height={803}
            className="w-full h-full object-contain pointer-events-none"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 w-[964px] max-w-full px-4 sm:px-6 flex flex-col items-center text-center gap-6 sm:gap-8 md:gap-10">
        {/* Title (Figma 34:1171: 710x106, Poppins SemiBold 44px, line-height 120%, -1% letter-spacing) */}
        <h2 className="w-[710px] max-w-full font-heading font-semibold text-2xl sm:text-3xl md:text-[44px] text-neutral-50 leading-[1.2] tracking-[-0.01em]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        {/* Subtitle (Figma 34:1172: 964x87, Satoshi Regular 16px, line-height 29px) */}
        <p className="w-[964px] max-w-full font-sans text-neutral-50 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-[29px] opacity-90">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        {/* Action Button (Figma 34:1173: 172x46, radius 24px, #CBFC01) */}
        <div>
          <Link
            href="/creators"
            className="inline-flex items-center justify-center h-[46px] px-6 rounded-[24px] bg-[#CBFC01] hover:bg-[#b8e400] text-neutral-950 font-sans font-medium text-sm transition-colors cursor-pointer shadow-md"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
