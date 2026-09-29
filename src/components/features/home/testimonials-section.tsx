import Image from "next/image";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "sarah",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    avatar: "/assets/testimonials/sarah-m.png",
  },
  {
    id: "james",
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    avatar: "/assets/testimonials/james-l.png",
  },
  {
    id: "alex",
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    avatar: "/assets/testimonials/alex-b.png",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 md:py-28 overflow-hidden border-t border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        {/* Header & Subtitle (Figma Testimonials_Frame Text: side-by-side flex layout) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-12 mb-16 md:mb-20">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-[44px] text-black leading-[1.2] max-w-[577px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="font-sans text-[18px] text-[#4F4F4F] leading-[1.6] max-w-[560px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid (Figma Testimonial_Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-6"
            >
              {/* Avatar + Author Details */}
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 border border-neutral-100 shadow-xs">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-[20px] text-black leading-[1.2]">
                    {item.name}
                  </h3>
                  <p className="font-sans text-[18px] text-[#003BE2] font-normal leading-[1.6]">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="font-sans text-[#4F4F4F] text-[18px] leading-[1.6]">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
