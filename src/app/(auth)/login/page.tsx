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

          {/* Right Column: Login Form Frame (Figma Register_Frame 49:220) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] bg-white rounded-[32px] p-8 sm:p-12 shadow-[0_24px_64px_rgba(0,0,0,0.25)] border border-white/80 text-neutral-950">
              <div className="mb-8">
                <p className="font-sans text-sm font-medium text-brand-blue mb-1">
                  Sign In
                </p>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-950">
                  Welcome Back
                </h2>
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
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="h-11 px-8 rounded-full bg-secondary-400 hover:bg-[#c2ea1b] text-neutral-950 font-heading font-medium text-sm transition-colors shadow-md cursor-pointer"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              {/* Or Divider (Figma 49:230) */}
              <div className="relative my-8 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200" />
                </div>
                <span className="relative px-4 bg-white text-xs text-neutral-400 font-sans">
                  or
                </span>
              </div>

              {/* Social Login Buttons (Facebook & Google, Figma 49:233) */}
              <div className="flex items-center justify-center gap-4 mb-8">
                {/* Facebook */}
                <button
                  type="button"
                  className="w-12 h-12 rounded-full border border-neutral-200 hover:border-neutral-400 flex items-center justify-center text-neutral-950 transition-colors cursor-pointer"
                  aria-label="Login with Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>

                {/* Google */}
                <button
                  type="button"
                  className="w-12 h-12 rounded-full border border-neutral-200 hover:border-neutral-400 flex items-center justify-center text-neutral-950 transition-colors cursor-pointer"
                  aria-label="Login with Google"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </button>
              </div>

              {/* New user link */}
              <div className="text-center pt-2 font-sans text-xs sm:text-sm text-neutral-600">
                New user?{" "}
                <Link
                  href="/register"
                  className="font-medium text-brand-blue hover:underline cursor-pointer"
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
