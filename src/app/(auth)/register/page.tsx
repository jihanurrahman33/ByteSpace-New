"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Account created for ${name || "User"} (${email})!`);
  };

  return (
    <div className="min-h-screen w-full bg-brand-blue relative overflow-hidden flex items-center justify-center">
      {/* 120px Architectural Grid Lines (matching Figma 49:156 Group 4) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
        <svg
          className="w-full h-full"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="auth-grid"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 120 0 L 0 0 0 120"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#auth-grid)" />
        </svg>
      </div>

      {/* Mobile & Tablet Layout (< 1024px) */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:hidden">
        {/* Logo */}
        <div className="mb-6">
          <Link href="/" className="inline-block" aria-label="ByteSpace Home">
            <svg
              width="36"
              height="40"
              viewBox="0 0 29 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0L0 21C0 26.799 4.70101 31.5 10.5 31.5L10.5 10.5Z"
                fill="#CBFC01"
              />
              <path
                d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21L21 21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z"
                fill="#CBFC01"
              />
              <path
                d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21L21 21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z"
                fill="#CBFC01"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Header Text */}
        <div className="text-center max-w-[440px] mb-6 px-2">
          <h1 className="font-heading font-semibold text-xl text-[#F5F5F6] tracking-tight mb-2">
            Sign up and come in
          </h1>
          <p className="font-sans text-xs sm:text-sm text-neutral-200 leading-relaxed">
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
          </p>
        </div>

        {/* Mobile Form Card */}
        <div className="w-full max-w-[480px] bg-white rounded-[24px] shadow-[0_24px_64px_rgba(0,0,0,0.25)] p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <p className="font-sans text-sm font-normal text-brand-blue mb-1">
                Create an Account
              </p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-neutral-950">
                Welcome to ByteSpace
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
              <div>
                <label className="block font-sans text-xs sm:text-sm font-medium text-neutral-950 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jamie Davis"
                  className="w-full h-[48px] px-4 rounded-[12px] border border-[#E5E6E8] bg-white font-sans text-sm sm:text-base text-neutral-950 placeholder-[#82868E] outline-none focus:border-brand-blue transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block font-sans text-xs sm:text-sm font-medium text-neutral-950 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  className="w-full h-[48px] px-4 rounded-[12px] border border-[#E5E6E8] bg-white font-sans text-sm sm:text-base text-neutral-950 placeholder-[#82868E] outline-none focus:border-brand-blue transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block font-sans text-xs sm:text-sm font-medium text-neutral-950 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="w-full h-[48px] px-4 rounded-[12px] border border-[#E5E6E8] bg-white font-sans text-sm sm:text-base text-neutral-950 placeholder-[#82868E] outline-none focus:border-brand-blue transition-colors"
                  required
                />
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  className="w-full sm:w-[123px] h-[46px] rounded-[24px] bg-[#CBFC01] hover:bg-[#b8e400] text-neutral-950 font-sans font-medium text-sm flex items-center justify-center transition-colors cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>

          <div className="text-center font-sans text-sm sm:text-base text-[#4B4C53] mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-brand-blue font-medium hover:underline ml-1 cursor-pointer"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Figma 1440x1024 Canvas Coordinate Container (>= 1024px) */}
      <div className="hidden lg:block relative w-full max-w-[1440px] h-[1024px] mx-auto overflow-hidden">
        {/* Top Header Logo (Figma 47:501, only the yellow logo icon at x: 122px, y: 35px) */}
        <div className="absolute left-[120px] top-[35px] z-30">
          <Link href="/" className="inline-block" aria-label="ByteSpace Home">
            <svg
              width="29"
              height="32"
              viewBox="0 0 29 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0L0 21C0 26.799 4.70101 31.5 10.5 31.5L10.5 10.5Z"
                fill="#CBFC01"
              />
              <path
                d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21L21 21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z"
                fill="#CBFC01"
              />
              <path
                d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21L21 21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z"
                fill="#CBFC01"
              />
            </svg>
          </Link>
        </div>

        {/* Left Headline & Subtitle (Figma 47:498 at x: 122px, y: 120px) */}
        <div className="absolute left-[120px] top-[120px] w-[475px] z-20">
          <h1 className="font-heading font-semibold text-[20px] leading-[24px] tracking-[-0.2px] text-[#F5F5F6]">
            Sign up and come in
          </h1>
          <p className="font-sans font-normal text-[18px] leading-[28.8px] text-[#F5F5F6] mt-4">
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
          </p>
        </div>

        {/* Overlapping Floating Course Showcase Cards & 3D Artwork (Figma Group 7 15254:194 at x: 97px, y: 305px, 548x585) */}
        <div className="absolute left-[97px] top-[305px] w-[548px] h-[585px] z-10 pointer-events-none">
          <Image
            src="/assets/auth-cards.png"
            alt="ByteSpace course showcase"
            width={548}
            height={585}
            className="w-full h-full object-contain pointer-events-none"
            priority
          />
        </div>

        {/* Right Register Form Frame (Figma 47:362 at x: 741px, y: 120px, 579x784, radius 24px) */}
        <div className="absolute left-[741px] top-[120px] w-[579px] h-[784px] bg-white rounded-[24px] shadow-[0_24px_64px_rgba(0,0,0,0.25)] p-[61px_63px] z-20 flex flex-col justify-between">
          <div>
            {/* Form Title (Figma 47:365) */}
            <div className="mb-8">
              <p className="font-sans text-base font-normal text-brand-blue mb-1">
                Create an Account
              </p>
              <h2 className="font-heading font-bold text-[44px] leading-[1.15] text-neutral-950">
                Welcome to ByteSpace
              </h2>
            </div>

            {/* Inputs Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block font-sans text-sm font-medium text-neutral-950 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jamie Davis"
                  className="w-full h-[52px] px-4 rounded-[12px] border border-[#E5E6E8] bg-white font-sans text-base text-neutral-950 placeholder-[#82868E] outline-none focus:border-brand-blue transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block font-sans text-sm font-medium text-neutral-950 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  className="w-full h-[52px] px-4 rounded-[12px] border border-[#E5E6E8] bg-white font-sans text-base text-neutral-950 placeholder-[#82868E] outline-none focus:border-brand-blue transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block font-sans text-sm font-medium text-neutral-950 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="w-full h-[52px] px-4 rounded-[12px] border border-[#E5E6E8] bg-white font-sans text-base text-neutral-950 placeholder-[#82868E] outline-none focus:border-brand-blue transition-colors"
                  required
                />
              </div>

              {/* Submit Button (Figma 47:381, 123x46, radius 24px, #CBFC01, self-end) */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="w-[123px] h-[46px] rounded-[24px] bg-[#CBFC01] hover:bg-[#b8e400] text-neutral-950 font-sans font-medium text-sm flex items-center justify-center transition-colors cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>

          {/* Bottom Login Link (Figma 47:383) */}
          <div className="text-center font-sans text-base text-[#4B4C53]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-brand-blue font-medium hover:underline ml-1 cursor-pointer"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
