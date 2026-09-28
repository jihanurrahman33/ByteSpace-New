import Link from "next/link";
import { cn } from "@/lib/utils/cn";

interface LogoProps {
  variant?: "light" | "dark" | "hero";
  className?: string;
  showText?: boolean;
}

export function Logo({ variant = "hero", className, showText = true }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-3 group transition-opacity hover:opacity-90 select-none",
        className
      )}
      aria-label="ByteSpace Home"
    >
      {/* Exact Figma Vector Mark (Node 1:1788) */}
      <svg
        width="29"
        height="32"
        viewBox="0 0 29 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z"
          fill="#D4FB20"
        />
        <path
          d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5H18.375Z"
          fill="#D4FB20"
        />
        <path
          d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5H18.375Z"
          fill="#D4FB20"
        />
      </svg>

      {/* Exact Figma Brand Typography (Node 1:1789) */}
      {showText && (
        <span
          className={cn(
            "font-display font-bold text-2xl tracking-tight leading-none",
            isLight ? "text-neutral-950" : "text-neutral-50"
          )}
        >
          ByteSpace
        </span>
      )}
    </Link>
  );
}
