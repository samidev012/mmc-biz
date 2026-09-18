"use client";

import { useEffect, useRef, useState } from "react";

export default function VantaDotsBackground({
  backgroundColor = "#050914",
  glowColor = "180, 200, 255",
  starCount = 180,
  bigStarCount = 10,
}) {
  const canvasRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width, height;
    let mouse = { x: 0, y: 0 };
    let t = 0;

    let stars = [];
    let bigStars = [];

    function resize() {
      const parent = canvas.parentElement;
      width = canvas.width = parent.offsetWidth;
      height = canvas.height = parent.offsetHeight;
    }

    function rn(min, max) {
      return Math.random() * (max - min) + min;
    }

    function createStars() {
  stars = Array.from({ length: starCount }, () => ({
    x: rn(0, width),
    y: rn(0, height),
    r: rn(0.5, 1.8),
    twinkleSpeed: rn(0.002, 0.008),
    twinklePhase: rn(0, Math.PI * 2),
    driftX: rn(-0.015, 0.015),
    driftY: rn(-0.01, 0.01),
  }));
}

    function createBigStars() {
  bigStars = Array.from({ length: bigStarCount }, () => ({
    baseX: rn(0, width),
    baseY: rn(0, height),
    r: rn(30, 90),
    ampX: rn(40, 120),
    ampY: rn(20, 60),
    speed: rn(0.02, 0.06),
    phase: rn(0, Math.PI * 2),
    opacity: rn(0.25, 0.55),
  }));
} 

    function drawBackground() {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);
    }

    function drawBigStars() {
      bigStars.forEach((s) => {
        const x = s.baseX + Math.sin(t * s.speed + s.phase) * s.ampX + mouse.x * 20;
        const y = s.baseY + Math.cos(t * s.speed * 0.7 + s.phase) * s.ampY + mouse.y * 12;

        const grad = ctx.createRadialGradient(x, y, 0, x, y, s.r);
        grad.addColorStop(0, `rgba(${glowColor}, ${s.opacity})`);
        grad.addColorStop(0.4, `rgba(${glowColor}, ${s.opacity * 0.35})`);
        grad.addColorStop(1, "transparent");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function drawStars() {
      stars.forEach((star) => {
        star.x += star.driftX;
        star.y += star.driftY;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        const twinkle = 0.4 + 0.6 * Math.abs(Math.sin(t * star.twinkleSpeed + star.twinklePhase));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
        ctx.fill();
      });
    }

    function draw() {
      drawBackground();
      drawBigStars();
      drawStars();
      t += 1;
      animationId = requestAnimationFrame(draw);
    }

    function handleMouseMove(e) {
  const rect = canvas.getBoundingClientRect();
  const targetX = (e.clientX - rect.left) / width - 0.5;
  const targetY = (e.clientY - rect.top) / height - 0.5;
  mouse.x += (targetX - mouse.x) * 0.05;
  mouse.y += (targetY - mouse.y) * 0.05;
}
    resize();
    createStars();
    createBigStars();
    draw();

    const handleResize = () => {
      resize();
      createStars();
      createBigStars();
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isClient, backgroundColor, glowColor, starCount, bigStarCount]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 h-full w-full"
    />
  );
}