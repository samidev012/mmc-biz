"use client";

import { useEffect, useRef, useState } from "react";

export default function ParticlesBackground({ 
  density = 80, 
  color = "0, 102, 255",
  enableMouse = true,
  particleGlow = true 
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];
    let width, height;
    let mouse = mouseRef.current;

    function resize() {
      const parent = canvas.parentElement;
      width = canvas.width = parent.offsetWidth;
      height = canvas.height = parent.offsetHeight;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.r = Math.random() * 2.5 + 0.8;
        this.baseVx = (Math.random() - 0.5) * 0.4;
        this.baseVy = (Math.random() - 0.5) * 0.4;
        this.vx = this.baseVx;
        this.vy = this.baseVy;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        // Mouse interaction
        if (enableMouse && mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 150;

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            this.vx = this.baseVx - (dx / dist) * force * 2;
            this.vy = this.baseVy - (dy / dist) * force * 2;
          } else {
            this.vx += (this.baseVx - this.vx) * 0.05;
            this.vy += (this.baseVy - this.vy) * 0.05;
          }
        }

        // Position update with wave motion
        this.x += this.vx + Math.sin(Date.now() * 0.001 + this.pulsePhase) * 0.3;
        this.y += this.vy + Math.cos(Date.now() * 0.001 + this.pulsePhase) * 0.3;

        // Wrap around screen
        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;
        if (this.y < -10) this.y = height + 10;
        if (this.y > height + 10) this.y = -10;

        // Pulsing effect
        this.pulsePhase += this.pulseSpeed;
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        const size = this.r * pulse;

        if (particleGlow) {
          // Outer glow
          const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, size * 4
          );
          gradient.addColorStop(0, `rgba(${color}, ${this.opacity * 0.8})`);
          gradient.addColorStop(0.5, `rgba(${color}, ${this.opacity * 0.3})`);
          gradient.addColorStop(1, `rgba(${color}, 0)`);
          
          ctx.beginPath();
          ctx.arc(this.x, this.y, size * 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Core particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${this.opacity})`;
        ctx.shadowBlur = particleGlow ? 15 : 0;
        ctx.shadowColor = `rgba(${color}, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function createParticles() {
      particles = Array.from({ length: density }, () => new Particle());
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 120;

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.25;
            
            // Gradient line
            const gradient = ctx.createLinearGradient(p.x, p.y, q.x, q.y);
            gradient.addColorStop(0, `rgba(${color}, ${opacity * p.opacity})`);
            gradient.addColorStop(1, `rgba(${color}, ${opacity * q.opacity})`);

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }

        // Connect to mouse
        if (enableMouse && mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180;

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.4;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${color}, ${opacity})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
      }
    }

    function draw() {
      // Smooth trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      connectParticles();

      // Mouse cursor glow
      if (enableMouse && mouse.x !== null && mouse.y !== null) {
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 80
        );
        gradient.addColorStop(0, `rgba(${color}, 0.15)`);
        gradient.addColorStop(1, `rgba(${color}, 0)`);
        
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 80, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    resize();
    createParticles();
    draw();

    const handleResize = () => {
      resize();
      createParticles();
    };

    window.addEventListener("resize", handleResize);
    
    if (enableMouse) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [density, color, enableMouse, particleGlow, isClient]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 h-full w-full"
      style={{ background: "radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)" }}
    />
  );
}