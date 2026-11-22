import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';

interface CountUpProps {
  target: number;
  decimals?: number;
  suffix?: string;
  durationMs?: number;
  className?: string;
}

export function CountUp({
  target,
  decimals = 0,
  suffix = '',
  durationMs = 1350,
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 'some' });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<number>(
    prefersReducedMotion ? target : 0
  );

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      setDisplayValue(target);
      return;
    }

    let rafId = 0;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(target * eased);

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setDisplayValue(target);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, target, durationMs, prefersReducedMotion]);

  const formatted =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : Math.round(displayValue).toLocaleString('en-IN');

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {formatted}
      {suffix}
    </span>
  );
}
