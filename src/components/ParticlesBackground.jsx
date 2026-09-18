
"use client";

import { useEffect, useRef } from "react";

export default function CircuitBlueprintBackground({
  colors = {
    ink: "#000000",
    paper: "#e6f0fa",
    steel: "#9a9a9a",
    line: "#2a2a2a",
    signal: "#0066ff",
    circuit: "#28a745",
  },
  pathCount = 10,
  gridSpacing = 48,
}) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });
  const startTimeRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width, height, dpr;
    let paths = [];

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // ---------- helpers ----------
    function hexToRgb(hex) {
      const bigint = parseInt(hex.replace("#", ""), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `${r}, ${g}, ${b}`;
    }

    function getPathLength(points) {
      let total = 0;
      for (let i = 0; i < points.length - 1; i++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[i + 1];
        total += Math.hypot(x2 - x1, y2 - y1);
      }
      return total;
    }

    function getPointAtDistance(points, dist) {
      let acc = 0;
      for (let i = 0; i < points.length - 1; i++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[i + 1];
        const segLen = Math.hypot(x2 - x1, y2 - y1);
        if (acc + segLen >= dist) {
          const t = segLen === 0 ? 0 : (dist - acc) / segLen;
          return [x1 + (x2 - x1) * t, y1 + (y2 - y1) * t];
        }
        acc += segLen;
      }
      return points[points.length - 1];
    }

    function drawPartialPath(ctx, points, distance) {
      let acc = 0;
      ctx.beginPath();
      ctx.moveTo(points[0][0], points[0][1]);
      for (let i = 0; i < points.length - 1; i++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[i + 1];
        const segLen = Math.hypot(x2 - x1, y2 - y1);
        if (acc + segLen <= distance) {
          ctx.lineTo(x2, y2);
        } else {
          const t = segLen === 0 ? 0 : (distance - acc) / segLen;
          ctx.lineTo(x1 + (x2 - x1) * t, y1 + (y2 - y1) * t);
          break;
        }
        acc += segLen;
      }
      ctx.stroke();
    }

    function generatePath() {
      let x = Math.round((Math.random() * width) / gridSpacing) * gridSpacing;
      let y = Math.round((Math.random() * height) / gridSpacing) * gridSpacing;
      const points = [[x, y]];
      let dir = ["up", "down", "left", "right"][Math.floor(Math.random() * 4)];
      const segments = 4 + Math.floor(Math.random() * 4);

      for (let i = 0; i < segments; i++) {
        const len = (1 + Math.floor(Math.random() * 4)) * gridSpacing;
        const opposite = { up: "down", down: "up", left: "right", right: "left" }[dir];
        const options = ["up", "down", "left", "right"].filter((d) => d !== opposite);
        dir = options[Math.floor(Math.random() * options.length)];

        let nx = x,
          ny = y;
        if (dir === "up") ny -= len;
        if (dir === "down") ny += len;
        if (dir === "left") nx -= len;
        if (dir === "right") nx += len;

        nx = Math.max(0, Math.min(width, nx));
        ny = Math.max(0, Math.min(height, ny));

        if (nx === x && ny === y) continue;
        points.push([nx, ny]);
        x = nx;
        y = ny;
      }
      return points;
    }

    function createPaths() {
      paths = Array.from({ length: pathCount }, () => {
        const points = generatePath();
        return {
          points,
          length: getPathLength(points),
          color: Math.random() > 0.65 ? colors.circuit : colors.signal,
          delay: Math.random() * 2000,
          drawDuration: 900 + Math.random() * 800,
          travelSpeed: 60 + Math.random() * 60,
          nodePulse: Math.random() * Math.PI * 2,
        };
      });
    }

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

    function drawGrid() {
      ctx.strokeStyle = `rgba(${hexToRgb(colors.steel)}, 0.15)`;
      ctx.lineWidth = 1;
      for (let x = 0; x <= width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // major grid lines
      ctx.strokeStyle = `rgba(${hexToRgb(colors.line)}, 0.12)`;
      ctx.lineWidth = 1;
      const majorStep = gridSpacing * 4;
      for (let x = 0; x <= width; x += majorStep) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += majorStep) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    }

    function draw(time) {
      if (!startTimeRef.current) startTimeRef.current = time;
      const elapsed = time - startTimeRef.current;

      ctx.fillStyle = colors.paper;
      ctx.fillRect(0, 0, width, height);
      drawGrid();

      paths.forEach((path) => {
        const localElapsed = elapsed - path.delay;
        if (localElapsed < 0) return;

        const progress = Math.min(localElapsed / path.drawDuration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const distance = eased * path.length;

        ctx.save();
        ctx.shadowColor = `rgba(${hexToRgb(path.color)}, 0.9)`;
        ctx.shadowBlur = 8;
        ctx.strokeStyle = `rgba(${hexToRgb(path.color)}, ${0.2 + 0.6 * eased})`;
        ctx.lineWidth = 2;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        drawPartialPath(ctx, path.points, distance);
        ctx.restore();

        if (progress >= 1) {
          const travelElapsed = localElapsed - path.drawDuration;
          const travelDistance =
            ((travelElapsed / 1000) * path.travelSpeed) % path.length;
          const [px, py] = getPointAtDistance(path.points, travelDistance);

          const grad = ctx.createRadialGradient(px, py, 0, px, py, 10);
          grad.addColorStop(0, `rgba(${hexToRgb(path.color)}, 1)`);
          grad.addColorStop(1, `rgba(${hexToRgb(path.color)}, 0)`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, 10, 0, Math.PI * 2);
          ctx.fill();

          const pulse = 3 + Math.sin(elapsed / 400 + path.nodePulse) * 1.5;
          [path.points[0], path.points[path.points.length - 1]].forEach(
            ([nx, ny]) => {
              ctx.beginPath();
              ctx.fillStyle = `rgba(${hexToRgb(colors.circuit)}, 0.9)`;
              ctx.shadowColor = `rgba(${hexToRgb(colors.circuit)}, 0.8)`;
              ctx.shadowBlur = 10;
              ctx.arc(nx, ny, pulse + 2, 0, Math.PI * 2);
              ctx.fill();
            }
          );
        }
      });

      // scanning beam
      const beamX = ((elapsed / 20) % (width + 400)) - 200;
      const beamGrad = ctx.createLinearGradient(beamX - 150, 0, beamX + 150, height);
      beamGrad.addColorStop(0, "rgba(0,0,0,0)");
      beamGrad.addColorStop(0.5, `rgba(${hexToRgb(colors.signal)}, 0.05)`);
      beamGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = beamGrad;
      ctx.fillRect(0, 0, width, height);

      // cursor torch light
      if (mouse.current.x !== null) {
        const grad = ctx.createRadialGradient(
          mouse.current.x,
          mouse.current.y,
          0,
          mouse.current.x,
          mouse.current.y,
          220
        );
        grad.addColorStop(0, `rgba(${hexToRgb(colors.signal)}, 0.08)`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.current.x, mouse.current.y, 220, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    function drawStatic() {
      ctx.fillStyle = colors.paper;
      ctx.fillRect(0, 0, width, height);
      drawGrid();
      paths.forEach((path) => {
        ctx.strokeStyle = `rgba(${hexToRgb(path.color)}, 0.6)`;
        ctx.lineWidth = 2;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        drawPartialPath(ctx, path.points, path.length);
      });
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
    createPaths();

    if (prefersReducedMotion) {
      drawStatic();
    } else {
      startTimeRef.current = null;
      animationId = requestAnimationFrame(draw);
    }

    const handleResize = () => {
      resize();
      createPaths();
      startTimeRef.current = null;
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
  }, [colors, pathCount, gridSpacing]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}


