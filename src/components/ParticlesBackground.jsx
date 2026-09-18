
"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function VantaTrunkBackground({
  color = 0x0066ff,
  backgroundColor = 0x000000,
  spacing = 1.5,
  chaos = 3.5,
}) {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    let effect = vantaEffect;

    if (!effect) {
      import("vanta/dist/vanta.trunk.min").then((TRUNK) => {
        effect = TRUNK.default({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: color,
          backgroundColor: backgroundColor,
          spacing: spacing,
          chaos: chaos,
        });
        setVantaEffect(effect);
      });
    }

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 h-full w-full"
    />
  );
}
