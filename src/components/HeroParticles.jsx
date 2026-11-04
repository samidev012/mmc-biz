'use client';

import { useEffect, useRef } from 'react';

export default function HeroParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas.parentElement;
    const context = canvas.getContext('2d');
    const pointer = { x: -9999, y: -9999 };
    let frame;
    let particles = [];
    let width = 0;
    let height = 0;

    const makeParticles = () => {
      const count = Math.min(155, Math.max(65, Math.floor((width * height) / 10500)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        originX: 0,
        originY: 0,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        size: Math.random() * 1.25 + 0.55,
        phase: Math.random() * Math.PI * 2,
      }));
      particles.forEach((particle) => { particle.originX = particle.x; particle.originY = particle.y; });
    };

    const resize = () => {
      const rect = section.getBoundingClientRect();
      const scale = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * scale;
      canvas.height = height * scale;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(scale, 0, 0, scale, 0, 0);
      makeParticles();
    };

    const movePointer = (event) => {
      const rect = section.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };
    const clearPointer = () => { pointer.x = -9999; pointer.y = -9999; };

    const draw = (time) => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle, index) => {
        const dx = pointer.x - particle.x;
        const dy = pointer.y - particle.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 145) {
          const force = (145 - distance) / 145;
          particle.vx -= (dx / (distance || 1)) * force * 0.075;
          particle.vy -= (dy / (distance || 1)) * force * 0.075;
        }
        particle.vx += (particle.originX - particle.x) * 0.00075;
        particle.vy += (particle.originY - particle.y) * 0.00075;
        particle.vx *= 0.975;
        particle.vy *= 0.975;
        particle.x += particle.vx;
        particle.y += particle.vy;

        const glow = distance < 165 ? (165 - distance) / 165 : 0;
        context.beginPath();
        context.fillStyle = `rgba(23, 132, 255, ${0.2 + glow * 0.7})`;
        context.arc(particle.x, particle.y, particle.size + glow * 1.6 + Math.sin(time / 1100 + particle.phase) * 0.16, 0, Math.PI * 2);
        context.fill();

        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
          const other = particles[otherIndex];
          const lineDistance = Math.hypot(particle.x - other.x, particle.y - other.y);
          if (lineDistance < 92) {
            context.beginPath();
            context.strokeStyle = `rgba(0, 102, 255, ${0.11 * (1 - lineDistance / 92)})`;
            context.lineWidth = 0.5;
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      });
      frame = window.requestAnimationFrame(draw);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(section);
    section.addEventListener('pointermove', movePointer);
    section.addEventListener('pointerleave', clearPointer);
    frame = window.requestAnimationFrame(draw);

    return () => {
      observer.disconnect();
      section.removeEventListener('pointermove', movePointer);
      section.removeEventListener('pointerleave', clearPointer);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particles" aria-hidden="true" />;
}
