"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logged in as ${email}!`);
  };

  return (
    <div className="min-h-screen w-full bg-brand-blue relative overflow-hidden flex items-center justify-center">
      {/* 120px Architectural Grid Lines (matching Figma 49:196 Group 4) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
        <svg
          className="w-full h-full"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="login-grid"
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
          <rect width="100%" height="100%" fill="url(#login-grid)" />
        </svg>
      </div>

      {/* 1440x1024 Canvas Coordinate Container */}
      <div className="relative w-full max-w-[1440px] h-[1024px] mx-auto overflow-hidden">
        {/* Top Header Logo (Figma 49:247, only the yellow logo icon at x: 122px, y: 35px) */}
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

        {/* Left Headline & Subtitle (Figma 49:244 at x: 122px, y: 120px) */}
        <div className="absolute left-[120px] top-[120px] w-[475px] z-20">
          <h1 className="font-heading font-semibold text-[20px] leading-[24px] tracking-[-0.2px] text-[#F5F5F6]">
            Sign in with ease
          </h1>
          <p className="font-sans font-normal text-[18px] leading-[28.8px] text-[#F5F5F6] mt-4">
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>
        </div>

        {/* Overlapping Floating Course Showcase Cards & 3D Artwork (Figma Group 8 15254:195 at x: 97px, y: 305px, 548x585) */}
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

        {/* Right Login Form Frame (Figma 49:220 at x: 741px, y: 120px, 579x784, radius 24px) */}
        <div className="absolute left-[741px] top-[120px] w-[579px] h-[784px] bg-white rounded-[24px] shadow-[0_24px_64px_rgba(0,0,0,0.25)] p-[61px_63px] z-20 flex flex-col justify-between">
          <div>
            {/* Form Title (Figma) */}
            <div className="mb-8">
              <p className="font-sans text-base font-normal text-brand-blue mb-1">
                Sign In
              </p>
              <h2 className="font-heading font-bold text-[44px] leading-[1.15] text-neutral-950">
                Welcome Back
              </h2>
            </div>

            {/* Inputs Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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

              {/* Submit Button (Figma, 114x46, radius 24px, #CBFC01, self-end) */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="w-[114px] h-[46px] rounded-[24px] bg-[#CBFC01] hover:bg-[#b8e400] text-neutral-950 font-sans font-medium text-sm flex items-center justify-center transition-colors cursor-pointer"
                >
                  Sign In
                </button>
              </div>
            </form>

            {/* Divider "or" */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-[1px] bg-[#E5E6E8]" />
              <span className="font-sans text-base text-[#82868E]">or</span>
              <div className="flex-1 h-[1px] bg-[#E5E6E8]" />
            </div>

            {/* Social Buttons (Facebook & Google, 72x72, radius 24px, border #D1D1D1) */}
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                className="w-[72px] h-[72px] rounded-[24px] border border-[#D1D1D1] bg-white hover:border-[#999999] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Login with Facebook"
              >
                <svg className="w-8 h-8 fill-black" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              <button
                type="button"
                className="w-[72px] h-[72px] rounded-[24px] border border-[#D1D1D1] bg-white hover:border-[#999999] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Login with Google"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.4 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.16 0 9.98 0 12s.45 3.84 1.24 5.42l4.04-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.6 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom Register Link (Figma) */}
          <div className="text-center font-sans text-base text-[#4B4C53]">
            New user?{" "}
            <Link
              href="/register"
              className="text-brand-blue font-medium hover:underline ml-1 cursor-pointer"
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
