"use client";

import { useEffect, useState, useRef } from "react";

interface UseCountUpOptions {
  end: number;
  start?: number;
  duration?: number;
  enabled?: boolean;
}

export function useCountUp({
  end,
  start = 0,
  duration = 1200,
  enabled = true,
}: UseCountUpOptions): number {
  const [value, setValue] = useState(start);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + easeOut * (end - start));

      setValue(current);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, start, duration, enabled]);

  return value;
}
