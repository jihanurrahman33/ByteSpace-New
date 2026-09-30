"use client";

import { useState, useEffect } from "react";
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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={cn(
          "w-full transition-colors z-40",
          isLight
            ? "bg-white border-b border-neutral-100 text-neutral-950"
            : "bg-transparent text-neutral-50",
          className
        )}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] h-16 sm:h-20 md:h-[120px] flex items-center justify-between">
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
                "text-base font-normal transition-colors py-2 px-1",
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
                "text-base font-normal transition-colors py-2 px-1",
                isLight
                  ? "text-neutral-700 hover:text-neutral-950"
                  : "text-neutral-50/90 hover:text-neutral-50"
              )}
            >
              Join Us
            </Link>

            {/* Cart Icon (Exact Figma SVG Node 1:1786) */}
            <Link
              href="/courses"
              aria-label="Shopping Cart"
              className={cn(
                "p-2 transition-opacity hover:opacity-80 flex items-center justify-center min-w-[44px] min-h-[44px]",
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

          {/* Mobile Right Controls: Cart & Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/courses"
              aria-label="Shopping Cart"
              className={cn(
                "p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg transition-colors",
                isLight
                  ? "text-neutral-950 hover:bg-neutral-100"
                  : "text-neutral-50 hover:bg-white/10"
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
              onClick={() => setMobileMenuOpen(true)}
              className={cn(
                "p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg transition-colors cursor-pointer",
                isLight
                  ? "text-neutral-950 hover:bg-neutral-100"
                  : "text-neutral-50 hover:bg-white/10"
              )}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Viewport Mobile Menu Drawer (Fixed, Portal-Style to escape overflow-hidden containers) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden flex">
          {/* Backdrop overlay with fade */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Slide-in Container */}
          <div
            className={cn(
              "relative ml-auto w-full max-w-[320px] sm:max-w-[360px] h-full flex flex-col justify-between p-6 shadow-2xl transition-transform",
              isLight
                ? "bg-white text-neutral-950"
                : "bg-[#002FB5] text-neutral-50 border-l border-white/10"
            )}
          >
            {/* Top Bar inside Drawer: Logo & Close Button */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-current/10">
                <Logo variant={isLight ? "light" : "hero"} />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 pt-6" aria-label="Mobile Navigation">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "h-12 px-4 rounded-xl flex items-center text-lg font-medium transition-colors",
                        isActive
                          ? isLight
                            ? "bg-neutral-100 text-neutral-950 font-semibold"
                            : "bg-white/15 text-[#D4FB20] font-semibold"
                          : isLight
                          ? "text-neutral-700 hover:bg-neutral-50"
                          : "text-neutral-100 hover:bg-white/10"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions: Sign In, Join Us */}
            <div className="pt-6 border-t border-current/10 flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "h-12 rounded-full border flex items-center justify-center text-base font-medium transition-colors",
                  isLight
                    ? "border-neutral-300 text-neutral-950 hover:bg-neutral-50"
                    : "border-white/30 text-white hover:bg-white/10"
                )}
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="h-12 rounded-full bg-[#D4FB20] text-[#242528] flex items-center justify-center text-base font-semibold hover:bg-[#c2ea1b] transition-colors shadow-sm"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
