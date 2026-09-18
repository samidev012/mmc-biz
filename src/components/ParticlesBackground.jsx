"use client";

import { useEffect, useRef } from "react";

export default function ModernAnimatedBackground({
  density = 70,
  colors = ["99, 102, 241", "168, 85, 247", "56, 189, 248", "236, 72, 153"],
  blobColors = ["99, 102, 241", "236, 72, 153", "56, 189, 248"],
}) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];
    let blobs = [];
    let width, height, dpr;
    let lastTime = 0;

    function resize() {
      const parent = canvas.parentElement;
      dpr = window.devicePixelRatio || 1;
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles() {
      particles = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    }

    function createBlobs() {
      blobs = Array.from({ length: blobColors.length }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.min(width, height) * (0.25 + Math.random() * 0.15),
        color: blobColors[i % blobColors.length],
        angle: Math.random() * Math.PI * 2,
        speed: 0.0003 + Math.random() * 0.0004,
        radiusOffset: 40 + Math.random() * 60,
      }));
    }

    function drawBlobs(time) {
      blobs.forEach((b) => {
        b.angle += b.speed;
        const bx = b.x + Math.cos(b.angle) * b.radiusOffset;
        const by = b.y + Math.sin(b.angle) * b.radiusOffset;

        const gradient = ctx.createRadialGradient(bx, by, 0, bx, by, b.r);
        gradient.addColorStop(0, `rgba(${b.color}, 0.25)`);
        gradient.addColorStop(1, `rgba(${b.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(bx, by, b.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function drawParticles(delta) {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse interaction — gentle push away
        if (mouse.current.x !== null) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 140;
          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            p.vx += (dx / dist) * force * 0.02;
            p.vy += (dy / dist) * force * 0.02;
          }
        }

        // Damping so speed stays smooth
        p.vx *= 0.98;
        p.vy *= 0.98;

        p.x += p.vx * delta;
        p.y += p.vy * delta;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, 0.8)`;
        ctx.shadowColor = `rgba(${p.color}, 0.8)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${p.color}, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }

    function draw(time) {
      const delta = Math.min((time - lastTime) / 16.67, 3); // normalize to ~60fps
      lastTime = time;

      ctx.clearRect(0, 0, width, height);
      drawBlobs(time);
      drawParticles(delta);

      animationId = requestAnimationFrame(draw);
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouse.current.x = null;
      mouse.current.y = null;
    }

    resize();
    createParticles();
    createBlobs();
    animationId = requestAnimationFrame(draw);

    const handleResize = () => {
      resize();
      createParticles();
      createBlobs();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [density, colors, blobColors]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}