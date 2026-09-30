import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Suspense } from "react";
import { RouteLoadingIndicator } from "@/components/layout/route-loading-indicator";

export const metadata: Metadata = {
  title: "ByteSpace - Unlock Your Potential with Modern Learning",
  description: "Explore diverse learning paths, professional courses, and creator communities on ByteSpace.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <RouteLoadingIndicator />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
