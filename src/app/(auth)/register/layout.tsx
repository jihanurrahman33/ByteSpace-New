import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Join ByteSpace to unlock high-impact courses from industry experts.",
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
