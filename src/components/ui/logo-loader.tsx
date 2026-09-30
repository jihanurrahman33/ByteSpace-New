"use client";

import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface LogoLoaderProps {
  fullscreen?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function LogoLoader({
  fullscreen = false,
  className,
  size = "md",
}: LogoLoaderProps) {
  const content = (
    <div className="flex flex-col items-center justify-center gap-3">
      {/* Zoom in / zoom out animated logo */}
      <div
        className={cn(
          "relative flex items-center justify-center animate-logo-zoom transition-transform will-change-transform",
          size === "sm" && "w-10 h-10",
          size === "md" && "w-16 h-16 sm:w-20 sm:h-20",
          size === "lg" && "w-24 h-24 sm:w-28 sm:h-28"
        )}
      >
        {/* Soft atmospheric radial glow matching brand lime */}
        <div className="absolute inset-0 bg-[#D4FB20]/30 rounded-full blur-xl scale-125 pointer-events-none" />
        
        {/* Logo Dark with ByteSpace typography */}
        {size === "sm" ? (
          <Image
            src="/assets/logo-mark.svg"
            alt="ByteSpace Loading..."
            width={36}
            height={40}
            className="w-8 h-8 object-contain drop-shadow-sm"
            priority
          />
        ) : (
          <Image
            src="/assets/logo-dark.svg"
            alt="ByteSpace Loading..."
            width={171}
            height={35}
            className="h-9 sm:h-11 w-auto object-contain drop-shadow-md"
            priority
          />
        )}
      </div>
    </div>
  );

  if (fullscreen) {
    return (
      <div
        className={cn(
          "fixed inset-0 z-[9999] bg-white/85 backdrop-blur-[6px] flex items-center justify-center transition-all duration-300 pointer-events-auto",
          className
        )}
        aria-live="polite"
        aria-busy="true"
      >
        {content}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-full py-16 flex items-center justify-center",
        className
      )}
      aria-live="polite"
      aria-busy="true"
    >
      {content}
    </div>
  );
}
