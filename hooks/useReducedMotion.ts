'use client';

import { useReducedMotion as useMotionReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const motionReduced = useMotionReducedMotion();
  const [override, setOverride] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Allow developer testing override: e.g., ?reducedMotion=true
      const param = new URLSearchParams(window.location.search).get('reducedMotion');
      if (param === 'true') {
        setOverride(true);
      } else if (param === 'false') {
        setOverride(false);
      } else {
        const stored = localStorage.getItem('prefers-reduced-motion');
        if (stored === 'true') {
          setOverride(true);
        } else if (stored === 'false') {
          setOverride(false);
        }
      }
    }
  }, []);

  if (override !== null) return override;
  return !!motionReduced;
}
