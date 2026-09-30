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
    { label: "Featured Categories", href: "/courses" },
    { label: "Business", href: "/courses" },
    { label: "IT", href: "/courses" },
    { label: "Design", href: "/courses" },
  ];

  const browseCol2 = [
    { label: "Development", href: "/courses" },
    { label: "Marketing", href: "/courses" },
    { label: "Photography", href: "/courses" },
    { label: "Finance", href: "/courses" },
    { label: "Sport", href: "/courses" },
  ];

  const platformCol = [
    { label: "Become a Creator", href: "/creators" },
    { label: "Affiliate Program", href: "/courses" },
    { label: "Contact", href: "/courses" },
    { label: "Help", href: "/courses" },
    { label: "About", href: "/courses" },
  ];

  return (
    <footer className="w-full bg-white border-t border-neutral-100 text-neutral-950 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[120px] pt-12 sm:pt-16 md:pt-20 pb-10">
        {/* Main Content Area (Figma Node 34:1257) */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 sm:gap-12 lg:gap-16 pb-12 sm:pb-16 md:pb-24">
          {/* Left Column: Brand & Newsletter (Figma Node 34:1259) */}
          <div className="w-full lg:max-w-[528px] flex flex-col gap-6 sm:gap-8 lg:gap-10">
            {/* Logo and Tagline (Node 34:1260) */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <Logo variant="light" />
              <p className="text-neutral-950 text-sm leading-[1.6] max-w-[420px]">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            {/* Newsletter Subscription Form (Node 34:1265) */}
            <div className="flex flex-col gap-4">
              {subscribed ? (
                <div className="h-[52px] flex items-center px-6 rounded-full bg-[#CBFC01]/20 border border-[#CBFC01] text-neutral-950 text-sm font-medium">
                  ✓ Thank you for subscribing to ByteSpace updates!
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full"
                >
                  {/* Email Input (Node 34:1267) */}
                  <div className="relative flex-1 min-w-0">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full h-[48px] sm:h-[52px] px-5 sm:px-6 rounded-full bg-white border border-[#CED0D3] text-neutral-950 text-sm sm:text-base placeholder:text-neutral-500 focus:outline-none focus:border-brand-blue transition-colors"
                    />
                  </div>

                  {/* Search / Submit Button (Node 34:1269) */}
                  <button
                    type="submit"
                    className="h-[46px] sm:h-[48px] px-6 rounded-full bg-[#D4FB20] hover:bg-[#c2ea1b] text-neutral-950 text-base sm:text-lg font-medium transition-colors flex items-center justify-center shrink-0 cursor-pointer shadow-xs"
                  >
                    Search
                  </button>
                </form>
              )}

              {/* Legal disclaimer */}
              <p className="text-xs leading-[1.6] text-neutral-700">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Columns: Navigation Links (Figma Node 34:1272) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 lg:max-w-[580px] w-full pt-1">
            {/* Column 1 (Figma Node 34:1273) */}
            <ul className="flex flex-col gap-3 sm:gap-4">
              {browseCol1.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-800 hover:text-brand-blue transition-colors py-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 2 (Figma Node 34:1281) */}
            <ul className="flex flex-col gap-3 sm:gap-4">
              {browseCol2.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-800 hover:text-brand-blue transition-colors py-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 3 (Figma Node 34:1288) */}
            <ul className="flex flex-col gap-3 sm:gap-4 col-span-2 sm:col-span-1">
              {platformCol.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-800 hover:text-brand-blue transition-colors py-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider Line (Figma Node 34:1297) */}
        <div className="w-full h-px bg-neutral-100 my-6" />

        {/* Bottom Copyright & Legal Links (Figma Node 34:1298) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
          <p className="text-center sm:text-left">
            @ 2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/courses"
              className="hover:text-brand-blue transition-colors py-1"
            >
              Privacy Policy
            </Link>
            <Link
              href="/courses"
              className="hover:text-brand-blue transition-colors py-1"
            >
              Terms of Service
            </Link>
            <Link
              href="/courses"
              className="hover:text-brand-blue transition-colors py-1"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
