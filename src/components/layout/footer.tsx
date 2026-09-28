"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const browseCol1 = [
    { label: "Featured Courses", href: "/courses" },
    { label: "Featured Categories", href: "/courses?tab=categories" },
    { label: "Business", href: "/courses?category=business" },
    { label: "IT", href: "/courses?category=it" },
    { label: "Design", href: "/courses?category=design" },
  ];

  const browseCol2 = [
    { label: "Development", href: "/courses?category=development" },
    { label: "Marketing", href: "/courses?category=marketing" },
    { label: "Photography", href: "/courses?category=photography" },
    { label: "Finance", href: "/courses?category=finance" },
    { label: "Sport", href: "/courses?category=sport" },
  ];

  const platformCol = [
    { label: "Become a Creator", href: "/creators/register" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ];

  return (
    <footer className="w-full bg-white border-t border-neutral-100 text-neutral-950 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] pt-16 md:pt-20 pb-10">
        {/* Main Content Area (Figma Node 34:1257) */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 pb-16 md:pb-24">
          {/* Left Column: Brand & Newsletter (Figma Node 34:1259) */}
          <div className="w-full lg:max-w-[528px] flex flex-col gap-10">
            {/* Logo and Tagline (Node 34:1260) */}
            <div className="flex flex-col gap-4">
              <Logo variant="light" />
              <p className="text-neutral-950 text-sm leading-[1.6] max-w-[420px]">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            {/* Newsletter Subscription Form (Node 34:1265) */}
            <div className="flex flex-col gap-4">
              {subscribed ? (
                <div className="h-[52px] flex items-center px-6 rounded-full bg-secondary-100 text-neutral-950 text-sm font-medium">
                  ✓ Thank you for subscribing to ByteSpace updates!
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
                >
                  {/* Email Input (Node 34:1267) */}
                  <div className="relative flex-1">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full h-[52px] px-6 rounded-full bg-white border border-[#CED0D3] text-neutral-950 text-base placeholder:text-neutral-500 focus:outline-none focus:border-neutral-950 transition-colors"
                    />
                  </div>

                  {/* Search / Submit Button (Node 34:1269) */}
                  <button
                    type="submit"
                    className="h-[46px] px-6 rounded-full bg-secondary-400 hover:bg-secondary-500 text-neutral-950 text-lg font-medium transition-colors flex items-center justify-center flex-shrink-0 cursor-pointer"
                  >
                    Search
                  </button>
                </form>
              )}

              {/* Legal disclaimer */}
              <p className="text-xs leading-[1.6] text-neutral-950/80">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Columns: Navigation Links (Figma Node 34:1272) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 lg:max-w-[580px] w-full">
            {/* Column 1: Browse (Node 34:1273) */}
            <div className="flex flex-col gap-6">
              <h3 className="text-base font-medium text-neutral-950">Browse</h3>
              <ul className="flex flex-col gap-4">
                {browseCol1.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-neutral-950/90 hover:text-brand-blue transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Browse (Categories continuation) (Node 34:1281) */}
            <div className="flex flex-col gap-6">
              <span className="hidden sm:block text-base font-medium text-transparent select-none" aria-hidden="true">
                &nbsp;
              </span>
              <ul className="flex flex-col gap-4">
                {browseCol2.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-neutral-950/90 hover:text-brand-blue transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Platform (Node 34:1288) */}
            <div className="flex flex-col gap-6 col-span-2 sm:col-span-1">
              <h3 className="text-base font-medium text-neutral-950">Platform</h3>
              <ul className="flex flex-col gap-4">
                {platformCol.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-neutral-950/90 hover:text-brand-blue transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider Line (Figma Node 34:1297) */}
        <div className="w-full h-px bg-neutral-100 my-6" />

        {/* Bottom Copyright & Legal Links (Figma Node 34:1298) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-950">
          <p className="text-center sm:text-left">
            @ 2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-brand-blue transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-brand-blue transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies-settings"
              className="hover:text-brand-blue transition-colors"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
