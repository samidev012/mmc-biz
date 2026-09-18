
"use client";

import { useEffect, useRef, useState } from "react";

export default function VantaTrunkBackground({ 
  chaos = 3.5,
  color = 0x0066ff,
  backgroundColor = 0xe6f0fa,
  spacing = 20,
  amplitude = 15
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
    let time = 0;

    const colors = {
      ink: "#000000",
      paper: "#e6f0fa",
      steel: "#9a9a9a",
      line: "#2a2a2a",
      signal: "#0066ff",
      circuit: "#28a745"
    };

    function resize() {
      const parent = canvas.parentElement;
      width = canvas.width = parent.offsetWidth;
      height = canvas.height = parent.offsetHeight;
    }

    // 3D Point class
    class Point3D {
      constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.baseY = y;
      }

      project() {
        const scale = 400 / (400 + this.z);
        return {
          x: this.x * scale + width / 2,
          y: this.y * scale + height / 2,
          scale: scale
        };
      }
    }

    // Trunk segment
    class TrunkSegment {
      constructor(gridX, gridY, depth) {
        this.gridX = gridX;
        this.gridY = gridY;
        this.depth = depth;
        
        this.x = (gridX - 10) * spacing;
        this.y = (gridY - 10) * spacing;
        this.z = depth * spacing;
        
        this.points = [];
        this.createPoints();
      }

      createPoints() {
        // Create 4 corner points for the segment
        const s = spacing;
        this.points = [
          new Point3D(this.x, this.y, this.z),
          new Point3D(this.x + s, this.y, this.z),
          new Point3D(this.x + s, this.y + s, this.z),
          new Point3D(this.x, this.y + s, this.z)
        ];
      }

      update() {
        this.points.forEach((point, i) => {
          // Wave animation based on mouse and time
          const distX = (point.x / spacing - mouse.x * 20 + 10) / 5;
          const distY = (point.y / spacing - mouse.y * 20 + 10) / 5;
          const dist = Math.sqrt(distX * distX + distY * distY);
          
          const wave1 = Math.sin(time * 0.02 + dist * 0.5) * amplitude;
          const wave2 = Math.cos(time * 0.015 + point.x * 0.05 + point.z * 0.03) * amplitude * 0.5;
          const mouseEffect = Math.sin(dist - time * 0.05) * amplitude * chaos * 0.3;
          
          point.y = point.baseY + wave1 + wave2 + mouseEffect;
        });
        
        this.z -= 1.5; // Move towards camera
        
        if (this.z < -spacing * 2) {
          this.z = spacing * 20;
          this.points.forEach(p => p.z = this.z);
        } else {
          this.points.forEach(p => p.z = this.z);
        }
      }

      draw() {
        const projected = this.points.map(p => p.project());
        
        // Calculate depth-based color
        const depthRatio = (this.z + spacing * 2) / (spacing * 22);
        const brightness = Math.max(0.2, Math.min(1, depthRatio));
        
        // Draw filled quad with gradient
        ctx.beginPath();
        ctx.moveTo(projected[0].x, projected[0].y);
        projected.forEach((p, i) => {
          if (i > 0) ctx.lineTo(p.x, p.y);
        });
        ctx.closePath();
        
        // Fill with depth-based color
        const alpha = brightness * 0.15;
        ctx.fillStyle = `rgba(0, 102, 255, ${alpha})`;
        ctx.fill();
        
        // Draw edges
        ctx.strokeStyle = brightness > 0.6 
          ? `rgba(0, 102, 255, ${brightness * 0.8})` 
          : `rgba(154, 154, 154, ${brightness * 0.5})`;
        ctx.lineWidth = brightness * 1.5;
        ctx.stroke();
        
        // Add highlights on high points
        const avgY = this.points.reduce((sum, p) => sum + p.y, 0) / 4;
        if (avgY < this.points[0].baseY - amplitude * 0.7) {
          const centerX = projected.reduce((sum, p) => sum + p.x, 0) / 4;
          const centerY = projected.reduce((sum, p) => sum + p.y, 0) / 4;
          
          const gradient = ctx.createRadialGradient(
            centerX, centerY, 0,
            centerX, centerY, spacing * brightness
          );
          gradient.addColorStop(0, `rgba(40, 167, 69, ${brightness * 0.6})`);
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(centerX, centerY, spacing * brightness, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    let segments = [];

    function createTrunk() {
      segments = [];
      const gridSize = 20;
      const depthLayers = 22;
      
      for (let d = 0; d < depthLayers; d++) {
        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            segments.push(new TrunkSegment(i, j, d));
          }
        }
      }
    }

    function drawBackground() {
      // Radial gradient background
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) * 0.7
      );
      gradient.addColorStop(0, colors.paper);
      gradient.addColorStop(0.6, "#d0e5f5");
      gradient.addColorStop(1, "#b8d9f0");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    function drawAmbientParticles() {
      for (let i = 0; i < 30; i++) {
        const x = (Math.sin(time * 0.01 + i) * 0.5 + 0.5) * width;
        const y = (Math.cos(time * 0.008 + i * 0.5) * 0.5 + 0.5) * height;
        const size = Math.sin(time * 0.05 + i) * 2 + 3;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 102, 255, ${0.1 + Math.sin(time * 0.03 + i) * 0.1})`;
        ctx.fill();
      }
    }

    function drawMouseRipple() {
      const rippleSize = 100 + Math.sin(time * 0.05) * 20;
      const gradient = ctx.createRadialGradient(
        mouse.x * width, mouse.y * height, 0,
        mouse.x * width, mouse.y * height, rippleSize
      );
      gradient.addColorStop(0, 'rgba(40, 167, 69, 0.15)');
      gradient.addColorStop(0.5, 'rgba(0, 102, 255, 0.1)');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    function draw() {
      drawBackground();
      
      time++;
      
      // Sort segments by depth (painter's algorithm)
      segments.sort((a, b) => b.z - a.z);
      
      // Update and draw
      segments.forEach(segment => {
        segment.update();
        segment.draw();
      });
      
      drawAmbientParticles();
      drawMouseRipple();
      
      animationId = requestAnimationFrame(draw);
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / width;
      mouse.y = (e.clientY - rect.top) / height;
    }

    function handleTouchMove(e) {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = (e.touches[0].clientX - rect.left) / width;
        mouse.y = (e.touches[0].clientY - rect.top) / height;
      }
    }

    resize();
    createTrunk();
    draw();

    const handleResize = () => {
      resize();
      createTrunk();
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [chaos, amplitude, spacing, isClient]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 h-full w-full"
      style={{ touchAction: 'none' }}
    />
  );
}
