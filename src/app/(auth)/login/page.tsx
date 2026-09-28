"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Eye, EyeOff } from "lucide-react";
import { Header } from "@/components/layout/header";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logged in as ${email}!`);
  };

  return (
    <div className="min-h-screen bg-brand-blue text-neutral-50 relative overflow-hidden flex flex-col justify-between">
      {/* 120px Architectural Grid Lines (matching Figma 49:196 Group 4) */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
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
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#login-grid)" />
        </svg>
      </div>

      {/* Floating 3D Ornaments */}
      <div className="absolute left-8 bottom-12 w-20 h-20 pointer-events-none drop-shadow-xl hidden xl:block">
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="log-lime-cone" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5FFAE" />
              <stop offset="60%" stopColor="#D4FB20" />
              <stop offset="100%" stopColor="#8FB500" />
            </linearGradient>
          </defs>
          <polygon points="32,6 56,52 8,52" fill="url(#log-lime-cone)" />
          <ellipse cx="32" cy="52" rx="24" ry="6" fill="#8FB500" />
        </svg>
      </div>

      {/* Embedded Header Variant Hero */}
      <Header variant="hero" />

      {/* Main Split Layout Container */}
      <main className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px] w-full flex-1 flex items-center py-10 md:py-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (Figma Text 49:244 + Floating Course Showcase) */}
          <div className="lg:col-span-6 flex flex-col">
            <h1 className="font-heading font-semibold text-3xl sm:text-5xl md:text-[54px] text-white tracking-tight leading-[1.15] mb-4">
              Sign in with ease
            </h1>
            <p className="font-sans text-neutral-100 text-base sm:text-lg leading-relaxed max-w-lg mb-12">
              Experience a seamless and efficient sign-in process that grants you instant access
              to a world of knowledge.
            </p>

            {/* Overlapping Floating Course Showcase Card (Figma 49:251 & 49:282) */}
            <div className="relative w-full max-w-[380px] h-[340px] hidden sm:block">
              {/* Back Card */}
              <div className="absolute top-0 right-0 w-[300px] bg-white/90 backdrop-blur rounded-[20px] p-4 shadow-xl border border-white/40 transform translate-x-4 -rotate-3 opacity-75">
                <div className="relative w-full h-28 rounded-xl overflow-hidden mb-2 bg-neutral-200">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
                    alt="Course Preview"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
                <p className="font-heading font-semibold text-xs text-neutral-900">
                  the Power of Big Data
                </p>
                <p className="font-sans text-[10px] text-neutral-500">by purepearl studio</p>
              </div>

              {/* Front Card */}
              <div className="absolute top-6 left-0 w-[320px] bg-white rounded-[24px] p-4 shadow-2xl border border-white/60">
                <div className="relative w-full h-32 rounded-xl overflow-hidden mb-3">
                  <Image
                    src="https://images.unsplash.com/photo-1581291518655-9523c932deb4?w=500&h=250&fit=crop"
                    alt="Learn Figma from Basic"
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/95 text-[10px] font-semibold text-neutral-900">
                    17 Lessons
                  </div>
                </div>
                <h4 className="font-heading font-semibold text-sm text-neutral-950 mb-0.5">
                  Learn Figma from Basic
                </h4>
                <p className="font-sans text-xs text-neutral-400 mb-2">by purepearl studio</p>
                <div className="flex items-center justify-between pt-1 border-t border-neutral-100">
                  <span className="font-heading font-bold text-sm text-brand-blue">$25</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-neutral-700">4.5</span>
                    <Star className="w-3.5 h-3.5 fill-secondary-400 text-secondary-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Login Form Frame (Figma Register_Frame 49:220) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[560px] bg-white rounded-[32px] p-8 sm:p-12 shadow-[0_24px_64px_rgba(0,0,0,0.25)] border border-white/80 text-neutral-950">
              <div className="mb-8">
                <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-neutral-950 mb-1">
                  Sign In
                </h2>
                <p className="font-sans text-sm text-neutral-500">Welcome Back</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
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
                  <div className="flex items-center justify-between mb-2">
                    <label className="font-heading font-medium text-xs sm:text-sm text-neutral-800">
                      Password
                    </label>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Password reset link sent to your email!");
                      }}
                      className="font-sans text-xs text-brand-blue hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
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
                  Sign In
                </button>
              </form>

              {/* New user link */}
              <div className="text-center mt-8 pt-6 border-t border-neutral-100 font-sans text-sm text-neutral-600">
                New user?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-brand-blue hover:underline cursor-pointer"
                >
                  Create an account
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
