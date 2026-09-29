"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils/cn";

interface HeaderProps {
  variant?: "hero" | "light";
  className?: string;
}

export function Header({ variant = "hero", className }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLight = variant === "light";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Creators", href: "/creators" },
  ];

  return (
    <header
      className={cn(
        "w-full transition-colors z-50",
        isLight
          ? "bg-white border-b border-neutral-100 text-neutral-950"
          : "bg-transparent text-neutral-50",
        className
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] h-20 md:h-[120px] flex items-center justify-between">
        {/* Logo (Node 1:1787) */}
        <Logo variant={isLight ? "light" : "hero"} />

        {/* Desktop Navigation Links (Node 1:1779) */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-base transition-colors relative py-1",
                  isActive
                    ? isLight
                      ? "font-medium text-neutral-950"
                      : "font-medium text-neutral-50"
                    : isLight
                    ? "font-normal text-neutral-600 hover:text-neutral-950"
                    : "font-normal text-neutral-50/80 hover:text-neutral-50"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Auth & Cart (Node 1:1783) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="/login"
            className={cn(
              "text-base font-normal transition-colors",
              isLight
                ? "text-neutral-700 hover:text-neutral-950"
                : "text-neutral-50/90 hover:text-neutral-50"
            )}
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className={cn(
              "text-base font-normal transition-colors",
              isLight
                ? "text-neutral-700 hover:text-neutral-950"
                : "text-neutral-50/90 hover:text-neutral-50"
            )}
          >
            Join Us
          </Link>

          {/* Cart Icon (Exact Figma SVG Node 1:1786) */}
          <Link
            href="/cart"
            aria-label="Shopping Cart"
            className={cn(
              "p-1 transition-opacity hover:opacity-80 flex items-center justify-center",
              isLight ? "text-neutral-950" : "text-neutral-50"
            )}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 stroke-current"
            >
              <path
                d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-4">
          <Link
            href="/cart"
            aria-label="Shopping Cart"
            className={cn(
              "p-1.5",
              isLight ? "text-neutral-950" : "text-neutral-50"
            )}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z" />
            </svg>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "p-2 rounded-lg transition-colors",
              isLight
                ? "text-neutral-950 hover:bg-neutral-100"
                : "text-neutral-50 hover:bg-white/10"
            )}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={cn(
            "md:hidden px-6 py-6 border-b transition-all space-y-4",
            isLight
              ? "bg-white border-neutral-200 text-neutral-950"
              : "bg-primary-900 border-white/10 text-neutral-50"
          )}
        >
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base py-1 font-medium hover:opacity-80"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-current/10 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base py-1 font-normal"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-center py-2.5 rounded-full font-medium text-base transition-colors",
                isLight
                  ? "bg-neutral-950 text-white"
                  : "bg-secondary-400 text-neutral-950"
              )}
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
