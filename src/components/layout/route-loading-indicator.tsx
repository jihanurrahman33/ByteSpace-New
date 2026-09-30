"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { LogoLoader } from "@/components/ui/logo-loader";

export function RouteLoadingIndicator() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentUrl = `${pathname}?${searchParams.toString()}`;
  const [isLoading, setIsLoading] = useState(false);
  const [lastUrl, setLastUrl] = useState(currentUrl);

  // Synchronize loading reset upon route arrival without cascading effect renders
  if (isLoading && lastUrl !== currentUrl) {
    setLastUrl(currentUrl);
    setIsLoading(false);
  }

  // Intercept click on internal links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Ignore external, hash links, mailto, tel, target="_blank"
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        target.getAttribute("target") === "_blank" ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      // If clicking same path and no query change, don't trigger
      const currentUrl = `${window.location.pathname}${window.location.search}`;
      if (href === currentUrl || href === window.location.pathname) {
        return;
      }

      setIsLoading(true);
    };

    // Listen for custom global loader events (e.g. filters, pagination)
    const handleCustomLoading = (e: Event) => {
      const customEvent = e as CustomEvent<{ duration?: number }>;
      const duration = customEvent.detail?.duration || 350;
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, duration);
    };

    document.addEventListener("click", handleClick, { capture: true });
    window.addEventListener("bytespace-loading", handleCustomLoading);

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      window.removeEventListener("bytespace-loading", handleCustomLoading);
    };
  }, [pathname]);

  // Fallback safety timeout
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return <LogoLoader fullscreen />;
}

export function triggerGlobalLoading(durationMs: number = 350) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("bytespace-loading", { detail: { duration: durationMs } })
    );
  }
}
