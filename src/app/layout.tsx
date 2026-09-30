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
import { RouteTitleManager } from "@/components/layout/route-title-manager";

export const metadata: Metadata = {
  title: {
    default: "ByteSpace - Unlock Your Potential with Modern Learning",
    template: "%s | ByteSpace",
  },
  description: "Explore diverse learning paths, professional courses, and creator communities on ByteSpace.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/assets/logo-mark.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "64x64" },
    ],
    shortcut: "/icon.svg",
    apple: "/assets/logo-mark.svg",
  },
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
          <RouteTitleManager />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
