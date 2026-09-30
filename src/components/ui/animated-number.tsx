"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  duration = 1200,
  className,
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const updateNumber = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(easeOutProgress * value);

            setDisplayValue(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateNumber);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(updateNumber);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={containerRef} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

interface AnimatedProgressBarProps {
  percent: number;
  duration?: number;
  className?: string;
  barClassName?: string;
}

export function AnimatedProgressBar({
  percent,
  duration = 1200,
  className = "w-full bg-[#F6F6F6] h-[8px] rounded-[24px] overflow-hidden",
  barClassName = "bg-[#D4FB20] h-full rounded-[24px]",
}: AnimatedProgressBarProps) {
  const [currentWidth, setCurrentWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // Trigger smooth width expansion
          setTimeout(() => {
            setCurrentWidth(percent);
          }, 100);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [percent]);

  return (
    <div ref={containerRef} className={className}>
      <div
        className={barClassName}
        style={{
          width: `${currentWidth}%`,
          transition: `width ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        }}
      />
    </div>
  );
}
