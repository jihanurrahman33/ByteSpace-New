"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useCountUp } from "@/hooks/use-count-up";
import { useEffect, useState } from "react";

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
  const [ref, isIntersecting] = useIntersectionObserver<HTMLSpanElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const animatedValue = useCountUp({
    end: value,
    duration,
    enabled: isIntersecting,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {animatedValue}
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
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [currentWidth, setCurrentWidth] = useState(0);

  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => {
        setCurrentWidth(percent);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isIntersecting, percent]);

  return (
    <div ref={ref} className={className}>
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
