"use client";

import { useEffect, useRef, useState } from "react";

export default function VantaDotsBackground({ 
  color = "#0066ff",
  color2 = "#ffffff",
  backgroundColor = "#000000",
  size = 3,
  spacing = 35,
  showLines = true
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width, height;
    let mouse = mouseRef.current;
    let t = 0;

    const camera = { x: 0, y: 250, z: 50, tx: 0, ty: 50, tz: 350, fov: 50 };

    let stars = [];
    let lines = [];
    let linesRotation = { x: 0, y: 0, z: 0 };

    function resize() {
      const parent = canvas.parentElement;
      width = canvas.width = parent.offsetWidth;
      height = canvas.height = parent.offsetHeight;
    }

    function project3D(x, y, z) {
      const scale = camera.fov * 10 / (camera.fov * 10 + z - camera.z);
      const x2d = (x - camera.x) * scale + width / 2;
      const y2d = (y - camera.y) * scale + height / 2;
      return { x: x2d, y: y2d, scale };
    }

    function rotatePoint(x, y, z, rx, ry, rz) {
      let y1 = y * Math.cos(rx) - z * Math.sin(rx);
      let z1 = y * Math.sin(rx) + z * Math.cos(rx);
      let x1 = x * Math.cos(ry) + z1 * Math.sin(ry);
      let z2 = -x * Math.sin(ry) + z1 * Math.cos(ry);
      let x2 = x1 * Math.cos(rz) - y1 * Math.sin(rz);
      let y2 = x1 * Math.sin(rz) + y1 * Math.cos(rz);
      return { x: x2, y: y2, z: z2 };
    }

    function rn(min, max) {
      return Math.random() * (max - min) + min;
    }

    function createStars() {
      stars = [];
      const space = spacing;
      for (let i = -30; i <= 30; i++) {
        for (let j = -30; j <= 30; j++) {
          stars.push({
            x: i * space + space / 2,
            baseY: rn(0, 5) - 150,
            y: rn(0, 5) - 150,
            z: j * space + space / 2,
          });
        }
      }
    }

    function createLines() {
      lines = [];
      for (let i = 0; i < 200; i++) {
        const f1 = rn(40, 60);
        const f2 = f1 + rn(12, 20);
        const z = rn(-1, 1);
        const r = Math.sqrt(1 - z * z);
        const theta = rn(0, Math.PI * 2);
        const y = Math.sin(theta) * r;
        const x = Math.cos(theta) * r;
        lines.push({ x1: x * f1, y1: y * f1, z1: z * f1, x2: x * f2, y2: y * f2, z2: z * f2 });
      }
    }

    function updateCamera() {
      const rate = 0.003;
      camera.x += (camera.tx - camera.x) * rate;
      camera.y += (camera.ty - camera.y) * rate;
      camera.z += (camera.tz - camera.z) * rate;
    }

    function updateStars() {
      stars.forEach((star) => {
        star.y = star.baseY + 0.1 * Math.sin(star.z * 0.02 + star.x * 0.015 + t * 0.02);
      });
    }

    function drawBackground() {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      const gradTopRight = ctx.createRadialGradient(width, 0, 0, width, 0, Math.max(width, height) * 0.8);
      gradTopRight.addColorStop(0, color + "73");
      gradTopRight.addColorStop(0.4, "transparent");
      ctx.fillStyle = gradTopRight;
      ctx.fillRect(0, 0, width, height);

      const gradBottomLeft = ctx.createRadialGradient(0, height, 0, 0, height, Math.max(width, height) * 0.7);
      gradBottomLeft.addColorStop(0, color2 + "40");
      gradBottomLeft.addColorStop(0.35, "transparent");
      ctx.fillStyle = gradBottomLeft;
      ctx.fillRect(0, 0, width, height);
    }

    function drawStars() {
      stars.forEach((star) => {
        const projected = project3D(star.x, star.y, star.z);
        if (projected.scale > 0 && projected.scale < 10) {
          const starSize = size * projected.scale;
          const alpha = Math.min(1, projected.scale * 0.8);

          const gradient = ctx.createRadialGradient(projected.x, projected.y, 0, projected.x, projected.y, starSize * 3);
          gradient.addColorStop(0, color + Math.floor(alpha * 255).toString(16).padStart(2, "0"));
          gradient.addColorStop(0.5, color + Math.floor(alpha * 100).toString(16).padStart(2, "0"));
          gradient.addColorStop(1, "transparent");

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(projected.x, projected.y, starSize * 3, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = color;
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(projected.x, projected.y, starSize, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      });
    }

    function drawLines() {
      if (!showLines) return;

      linesRotation.z += 0.002;
      linesRotation.x += 0.0008;
      linesRotation.y += 0.0005;

      lines.forEach((line) => {
        const p1 = rotatePoint(line.x1, line.y1, line.z1, linesRotation.x, linesRotation.y, linesRotation.z);
        const p2 = rotatePoint(line.x2, line.y2, line.z2, linesRotation.x, linesRotation.y, linesRotation.z);

        const proj1 = project3D(p1.x, p1.y, p1.z);
        const proj2 = project3D(p2.x, p2.y, p2.z);

        if (proj1.scale > 0 && proj2.scale > 0) {
          const avgScale = (proj1.scale + proj2.scale) / 2;
          const alpha = Math.min(0.6, avgScale * 0.5);

          ctx.beginPath();
          ctx.moveTo(proj1.x, proj1.y);
          ctx.lineTo(proj2.x, proj2.y);
          ctx.strokeStyle = color2 + Math.floor(alpha * 255).toString(16).padStart(2, "0");
          ctx.lineWidth = avgScale * 1.5;
          ctx.stroke();
        }
      });
    }

    function draw() {
      drawBackground();
      updateCamera();
      updateStars();
      drawLines();
      drawStars();
      t++;
      animationId = requestAnimationFrame(draw);
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / width;
      mouse.y = (e.clientY - rect.top) / height;
      camera.tx = (mouse.x - 0.5) * 100;
      camera.ty = 50 + mouse.y * 50;
    }

    function handleTouchMove(e) {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = (e.touches[0].clientX - rect.left) / width;
        mouse.y = (e.touches[0].clientY - rect.top) / height;
        camera.tx = (mouse.x - 0.5) * 100;
        camera.ty = 50 + mouse.y * 50;
      }
    }

    resize();
    createStars();
    createLines();
    draw();

    const handleResize = () => resize();

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [color, color2, backgroundColor, size, spacing, showLines, isClient]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 h-full w-full"
      style={{ touchAction: "none" }}
    />
  );
}