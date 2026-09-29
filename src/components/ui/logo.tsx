import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

interface LogoProps {
  variant?: "light" | "dark" | "hero";
  className?: string;
  showText?: boolean;
}

export function Logo({ variant = "hero", className, showText = true }: LogoProps) {
  const isLight = variant === "light" || variant === "dark";

  if (!showText) {
    return (
      <Link href="/" className={cn("inline-flex items-center", className)} aria-label="ByteSpace Home">
        <Image
          src="/assets/logo-mark.svg"
          alt="ByteSpace"
          width={29}
          height={32}
          className="w-[29px] h-[32px]"
          priority
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center transition-opacity hover:opacity-90 select-none",
        className
      )}
      aria-label="ByteSpace Home"
    >
      <Image
        src={isLight ? "/assets/logo-dark.svg" : "/assets/logo-white.svg"}
        alt="ByteSpace"
        width={171}
        height={35}
        className="h-[35px] w-auto"
        priority
      />
    </Link>
  );
}
