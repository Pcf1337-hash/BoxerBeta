export const easings = {
  out: [0.22, 1, 0.36, 1] as const,        // Out-Expo, default
  inOut: [0.83, 0, 0.17, 1] as const,      // Pin-pong transitions
  spring: { type: "spring", damping: 30, stiffness: 220 } as const,
} as const;

export const durations = {
  fast: 0.3,
  base: 0.6,
  slow: 1.0,
  hero: 1.4,
} as const;

export const stagger = {
  tight: 0.04,
  default: 0.08,
  loose: 0.14,
} as const;
