"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Eye, EyeOff } from "lucide-react";
import { Header } from "@/components/layout/header";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Account created for ${name || "User"} (${email})!`);
  };

  return (
    <div className="min-h-screen bg-brand-blue text-neutral-50 relative overflow-hidden flex flex-col justify-between">
      {/* 120px Architectural Grid Lines (matching Figma 49:156 Group 4) */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
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
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#auth-grid)" />
        </svg>
      </div>

      {/* Floating 3D Ornaments */}
      <div className="absolute left-8 bottom-12 w-20 h-20 pointer-events-none drop-shadow-xl hidden xl:block">
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="reg-lime-cone" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5FFAE" />
              <stop offset="60%" stopColor="#D4FB20" />
              <stop offset="100%" stopColor="#8FB500" />
            </linearGradient>
          </defs>
          <polygon points="32,6 56,52 8,52" fill="url(#reg-lime-cone)" />
          <ellipse cx="32" cy="52" rx="24" ry="6" fill="#8FB500" />
        </svg>
      </div>

      {/* Embedded Header Variant Hero */}
      <Header variant="hero" />

      {/* Main Split Layout Container */}
      <main className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] w-full flex-1 flex items-center py-10 md:py-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (Figma Text 47:498 + Floating Course Showcase) */}
          <div className="lg:col-span-6 flex flex-col">
            <h1 className="font-heading font-semibold text-3xl sm:text-5xl md:text-[54px] text-white tracking-tight leading-[1.15] mb-4">
              Sign up and come in
            </h1>
            <p className="font-sans text-neutral-100 text-base sm:text-lg leading-relaxed max-w-lg mb-12">
              The registration process is straightforward, uncomplicated, and efficient, allowing
              users to sign up quickly, easily, and at no cost
            </p>

            {/* Overlapping Floating Course Showcase Cards & 3D Artwork (Figma 15254:194) */}
            <div className="relative w-full max-w-[460px] hidden sm:block">
              <Image
                src="/assets/auth-cards.png"
                alt="ByteSpace course preview & community"
                width={480}
                height={520}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Right Column: Register Form Frame (Figma Register_Frame 47:362) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] bg-white rounded-[32px] p-8 sm:p-12 shadow-[0_24px_64px_rgba(0,0,0,0.25)] border border-white/80 text-neutral-950">
              <div className="mb-8">
                <p className="font-sans text-sm font-medium text-brand-blue mb-1">
                  Create an Account
                </p>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-950">
                  Welcome to ByteSpace
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block font-heading font-medium text-xs sm:text-sm text-neutral-800 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jamie Davis"
                    className="w-full h-12 px-4.5 rounded-xl border border-neutral-200 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue font-sans text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-heading font-medium text-xs sm:text-sm text-neutral-800 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="designer@example.com"
                    className="w-full h-12 px-4.5 rounded-xl border border-neutral-200 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue font-sans text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block font-heading font-medium text-xs sm:text-sm text-neutral-800 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="********"
                      className="w-full h-12 px-4.5 pr-12 rounded-xl border border-neutral-200 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue font-sans text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full h-12 rounded-full bg-secondary-400 hover:bg-[#c2ea1b] text-neutral-950 font-heading font-semibold text-base transition-colors shadow-md mt-6 cursor-pointer"
                >
                  Continue
                </button>
              </form>

              {/* Already have an account */}
              <div className="text-center mt-8 pt-6 border-t border-neutral-100 font-sans text-sm text-neutral-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-brand-blue hover:underline cursor-pointer"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="py-6 text-center text-xs text-white/50 font-sans">
        © {new Date().getFullYear()} ByteSpace Inc. All rights reserved.
      </div>
    </div>
  );
}
