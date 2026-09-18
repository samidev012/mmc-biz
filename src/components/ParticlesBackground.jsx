
"use client";

import { useEffect, useRef } from "react";

export default function AuroraGradientBackground({
  colors = {
    signal: "0, 102, 255",   // #0066ff
    circuit: "40, 167, 69",  // #28a745
  },
  bg = "#000",
}) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width, height, dpr;
    let orbs = [];
    let noiseCanvas, noisePattern;

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

    function createOrbs() {
      orbs = [
        {
          baseX: width * 0.85,
          baseY: height * 0.15,
          color: colors.signal,
          radius: Math.max(width, height) * 0.45,
          alpha: 0.45,
          orbitX: 120,
          orbitY: 80,
          speed: 0.00025,
          phase: 0,
          pulseSpeed: 0.0006,
        },
        {
          baseX: width * 0.15,
          baseY: height * 0.85,
          color: colors.circuit,
          radius: Math.max(width, height) * 0.4,
          alpha: 0.25,
          orbitX: 100,
          orbitY: 130,
          speed: 0.0002,
          phase: 2,
          pulseSpeed: 0.0005,
        },
        {
          baseX: width * 0.5,
          baseY: height * 0.5,
          color: colors.signal,
          radius: Math.max(width, height) * 0.3,
          alpha: 0.12,
          orbitX: 160,
          orbitY: 100,
          speed: 0.00018,
          phase: 4,
          pulseSpeed: 0.0004,
        },
      ];
    }

    function createNoise() {
      noiseCanvas = document.createElement("canvas");
      noiseCanvas.width = 150;
      noiseCanvas.height = 150;
      const nctx = noiseCanvas.getContext("2d");
      const imageData = nctx.createImageData(150, 150);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const val = Math.random() * 255;
        imageData.data[i] = val;
        imageData.data[i + 1] = val;
        imageData.data[i + 2] = val;
        imageData.data[i + 3] = 12; // very subtle
      }
      nctx.putImageData(imageData, 0, 0);
      noisePattern = ctx.createPattern(noiseCanvas, "repeat");
    }

    function drawGrid() {
      const spacing = 60;
      ctx.strokeStyle = "rgba(255,255,255,0.025)";
      ctx.lineWidth = 1;
      for (let x = 0; x <= width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    }

    function draw(time) {
      // base background
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      drawGrid();

      // draw orbs (blend mode for that layered glow feel)
      ctx.globalCompositeOperation = "screen";

      orbs.forEach((orb) => {
        const x = orb.baseX + Math.cos(time * orb.speed + orb.phase) * orb.orbitX;
        const y = orb.baseY + Math.sin(time * orb.speed + orb.phase) * orb.orbitY;
        const pulse = 1 + Math.sin(time * orb.pulseSpeed + orb.phase) * 0.12;
        const r = orb.radius * pulse;

        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, `rgba(${orb.color}, ${orb.alpha})`);
        grad.addColorStop(0.5, `rgba(${orb.color}, ${orb.alpha * 0.3})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      });

      // mouse reactive glow
      if (mouse.current.x !== null) {
        const grad = ctx.createRadialGradient(
          mouse.current.x,
          mouse.current.y,
          0,
          mouse.current.x,
          mouse.current.y,
          250
        );
        grad.addColorStop(0, `rgba(${colors.signal}, 0.15)`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.current.x, mouse.current.y, 250, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";

      // noise overlay for premium grain feel
      if (noisePattern) {
        ctx.fillStyle = noisePattern;
        ctx.fillRect(0, 0, width, height);
      }

      // vignette
      const vignette = ctx.createRadialGradient(
        width / 2, height / 2, height * 0.3,
        width / 2, height / 2, height * 0.9
      );
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(1, "rgba(0,0,0,0.5)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

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
    createOrbs();
    createNoise();
    animationId = requestAnimationFrame(draw);

    const handleResize = () => {
      resize();
      createOrbs();
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
  }, [colors, bg]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
