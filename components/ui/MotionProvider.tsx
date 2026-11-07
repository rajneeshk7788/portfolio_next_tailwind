'use client';

import { MotionConfig } from 'framer-motion';

/** Applies the visitor's reduced-motion preference to every animation. */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
