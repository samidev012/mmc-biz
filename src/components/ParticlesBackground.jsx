"use client";

import Lightfall from "./Lightfall";

export default function VantaDotsBackground() {
  return (
    <Lightfall
      className="pointer-events-auto absolute inset-0 h-full w-full"
      colors={['#0a1128', '#000000', '#06170f']}
      backgroundColor="#000000"
      speed={0.5}
      streakCount={4}
      streakWidth={1}
      streakLength={1}
      glow={1}
      density={0.6}
      twinkle={1}
      zoom={3}
      backgroundGlow={0.5}
      opacity={1}
      mouseInteraction={true}
      mouseStrength={0.5}
      mouseRadius={1}
      mouseDampening={0.15}
    />
  );
}