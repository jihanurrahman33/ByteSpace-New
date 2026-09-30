import Image from "next/image";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "James L.",
    role: "UI/UX Designer",
    avatar: "/assets/testimonials/james-l.png",
    quote:
      "ByteSpace revolutionized my career! Courses are engaging, practical, and current. Proud to be part of this transformative community.",
  },
  {
    id: "2",
    name: "Sarah M.",
    role: "Digital Marketer",
    avatar: "/assets/testimonials/sarah-m.png",
    quote:
      "As a creator, ByteSpace provides the ideal space to share knowledge and build a loyal audience. Empowering and supportive, it's a game-changer.",
  },
  {
    id: "3",
    name: "Alex B.",
    role: "Aspiring Web Developer",
    avatar: "/assets/testimonials/alex-b.png",
    quote:
      "ByteSpace ignited my tech passion! Instructors are industry experts, projects are real-world. Ready to launch my web dev career.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative w-full bg-[#FAFAFA] overflow-hidden border-t border-neutral-100">
      {/* Figma Background Radial Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Upper-Right Lime Glow */}
        <div
          className="absolute left-[650px] -top-[250px] w-[950px] h-[950px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(203, 252, 1, 0.45) 0%, rgba(203, 252, 1, 0.18) 45%, rgba(203, 252, 1, 0.04) 70%, transparent 100%)",
          }}
        />

        {/* Lower-Left Blue Glow */}
        <div
          className="absolute -left-[250px] top-[330px] w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 59, 226, 0.18) 0%, rgba(0, 59, 226, 0.06) 50%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] pt-12 sm:pt-16 md:pt-20 lg:pt-[84px] pb-12 sm:pb-16 md:pb-20 lg:pb-[58px]">
        {/* Header & Subtitle (Figma Testimonials_Frame Text) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-12 mb-10 sm:mb-14 lg:mb-[76px]">
          <h2 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-black leading-[1.2] tracking-[-0.01em] max-w-[480px]">
            Discover What Our <br className="hidden sm:inline" />
            Community Is Saying
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-[18px] text-[#4F4F4F] leading-relaxed sm:leading-[1.6] max-w-[555px]">
            At ByteSpace, our vibrant community of learners and creators is at the
            heart of what we do. Hear directly from those who have experienced the
            transformative journey of learning and creating on our platform. Explore
            testimonials that reflect the diverse perspectives of enthusiastic learners
            and accomplished creators.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid (Figma Testimonial_Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[42px] items-start">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] p-6 pb-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Avatar (exact 80x80, circular, no border/shadow) */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Author Details: Name & Role stacked vertically */}
              <div className="mt-4 sm:mt-6 flex flex-col gap-1">
                <h3 className="font-heading font-semibold text-lg sm:text-[20px] text-black leading-[1.2]">
                  {item.name}
                </h3>
                <p className="font-sans text-sm sm:text-[16px] text-[#003BE2] font-normal leading-[1.4]">
                  {item.role}
                </p>
              </div>

              {/* Quote */}
              <p className="mt-6 sm:mt-8 font-sans text-[#4F4F4F] text-sm sm:text-[16px] leading-relaxed sm:leading-[29px]">
                &quot;{item.quote}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
