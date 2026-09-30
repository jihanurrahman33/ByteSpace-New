import type { Metadata } from "next";
import { CreatorService } from "@/services/creator.service";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const creator = CreatorService.getCreatorById(id);
  const name = creator ? creator.name : "Creator Profile";
  const bio = creator ? creator.bio : "Learn from top creators on ByteSpace.";

  return {
    title: `${name} - Creator Profile`,
    description: bio,
  };
}

export default function CreatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
