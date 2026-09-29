import Link from "next/link";
import Image from "next/image";

export function CreatorCtaSection() {
  return (
    <section className="relative w-full bg-brand-blue py-20 md:py-28 text-center overflow-hidden">
      {/* 120px Architectural Grid Lines (matching Figma 12:224 Group 4) */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
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
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      {/* Authentic Figma 3D Floating Ornaments (Figma 46:78) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/assets/cta-decorations.png"
          alt="ByteSpace 3D decorations"
          fill
          className="object-cover opacity-90 pointer-events-none"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] flex flex-col items-center">
        {/* Title */}
        <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-[44px] text-neutral-50 leading-[1.2] max-w-3xl mb-6">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-neutral-100 text-base md:text-lg leading-relaxed max-w-3xl mb-8">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        {/* Action Button */}
        <div>
          <Link
            href="/creators/join"
            className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-secondary-400 hover:bg-[#c2ea1b] text-neutral-950 font-sans font-medium text-base md:text-lg transition-colors shadow-lg cursor-pointer"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
