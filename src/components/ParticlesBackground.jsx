"use client";

import { useEffect, useRef, useState } from "react";

export default function CircuitFlowBackground({ 
  intensity = "medium" // "low", "medium", "high"
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
    let width, height;
    let mouse = mouseRef.current;

    // Color palette
    const colors = {
      ink: "#000000",
      paper: "#e6f0fa",
      steel: "#9a9a9a",
      line: "#2a2a2a",
      signal: "#0066ff",
      circuit: "#28a745"
    };

    // Circuit nodes
    let nodes = [];
    let connections = [];
    let pulses = [];
    let floatingCircles = [];
    let gridLines = [];

    function resize() {
      const parent = canvas.parentElement;
      width = canvas.width = parent.offsetWidth;
      height = canvas.height = parent.offsetHeight;
    }

    // Node class (circuit points)
    class Node {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.active = false;
        this.activeTime = 0;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        // Subtle float animation
        this.x = this.baseX + Math.sin(Date.now() * 0.0005 + this.pulsePhase) * 3;
        this.y = this.baseY + Math.cos(Date.now() * 0.0007 + this.pulsePhase) * 3;

        // Mouse proximity activation
        if (mouse.x && mouse.y) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          this.active = dist < 150;
        }

        if (this.active) {
          this.activeTime = Math.min(this.activeTime + 0.05, 1);
        } else {
          this.activeTime = Math.max(this.activeTime - 0.02, 0);
        }
      }

      draw() {
        // Outer ring when active
        if (this.activeTime > 0) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, 8 * this.activeTime, 0, Math.PI * 2);
          ctx.strokeStyle = colors.signal + Math.floor(this.activeTime * 100).toString(16).padStart(2, '0');
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Core node
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = this.active ? colors.signal : colors.steel;
        ctx.fill();

        // Inner glow
        if (this.active) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = colors.paper;
          ctx.fill();
        }
      }
    }

    // Connection class (lines between nodes)
    class Connection {
      constructor(node1, node2) {
        this.node1 = node1;
        this.node2 = node2;
        this.pulseProgress = Math.random();
      }

      update() {
        this.pulseProgress += 0.01;
        if (this.pulseProgress > 1) this.pulseProgress = 0;
      }

      draw() {
        const active = this.node1.active || this.node2.active;
        
        // Main line
        ctx.beginPath();
        ctx.moveTo(this.node1.x, this.node1.y);
        ctx.lineTo(this.node2.x, this.node2.y);
        ctx.strokeStyle = active ? colors.signal + "40" : colors.steel + "20";
        ctx.lineWidth = active ? 2 : 1;
        ctx.stroke();

        // Pulse effect
        if (active) {
          const x = this.node1.x + (this.node2.x - this.node1.x) * this.pulseProgress;
          const y = this.node1.y + (this.node2.y - this.node1.y) * this.pulseProgress;
          
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, 15);
          gradient.addColorStop(0, colors.circuit + "ff");
          gradient.addColorStop(0.5, colors.signal + "80");
          gradient.addColorStop(1, colors.signal + "00");
          
          ctx.beginPath();
          ctx.arc(x, y, 15, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }
    }

    // Floating geometric shapes
    class FloatingCircle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.r = Math.random() * 40 + 20;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.type = Math.random() > 0.5 ? 'circle' : 'square';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        if (this.x < -this.r) this.x = width + this.r;
        if (this.x > width + this.r) this.x = -this.r;
        if (this.y < -this.r) this.y = height + this.r;
        if (this.y > height + this.r) this.y = -this.r;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        if (this.type === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, this.r, 0, Math.PI * 2);
          ctx.strokeStyle = colors.signal + Math.floor(this.opacity * 255).toString(16).padStart(2, '0');
          ctx.lineWidth = 2;
          ctx.stroke();
        } else {
          ctx.strokeStyle = colors.circuit + Math.floor(this.opacity * 255).toString(16).padStart(2, '0');
          ctx.lineWidth = 2;
          ctx.strokeRect(-this.r/2, -this.r/2, this.r, this.r);
        }

        ctx.restore();
      }
    }

    // Grid lines
    class GridLine {
      constructor(isVertical) {
        this.isVertical = isVertical;
        this.position = 0;
        this.speed = 0.3;
        this.opacity = 0.1;
      }

      update() {
        if (this.isVertical) {
          this.position += this.speed;
          if (this.position > width) this.position = 0;
        } else {
          this.position += this.speed;
          if (this.position > height) this.position = 0;
        }
      }

      draw() {
        ctx.beginPath();
        if (this.isVertical) {
          ctx.moveTo(this.position, 0);
          ctx.lineTo(this.position, height);
        } else {
          ctx.moveTo(0, this.position);
          ctx.lineTo(width, this.position);
        }
        ctx.strokeStyle = colors.line + Math.floor(this.opacity * 255).toString(16).padStart(2, '0');
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    function createNetwork() {
      nodes = [];
      connections = [];
      
      const spacing = 120;
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      // Create nodes in grid
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing + spacing/2 + (Math.random() - 0.5) * 20;
          const y = j * spacing + spacing/2 + (Math.random() - 0.5) * 20;
          nodes.push(new Node(x, y));
        }
      }

      // Create connections
      nodes.forEach((node, i) => {
        nodes.slice(i + 1).forEach(otherNode => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < spacing * 1.5 && Math.random() > 0.5) {
            connections.push(new Connection(node, otherNode));
          }
        });
      });
    }

    function createFloatingShapes() {
      const count = intensity === "high" ? 15 : intensity === "medium" ? 10 : 5;
      floatingCircles = Array.from({ length: count }, () => new FloatingCircle());
    }

    function createGrid() {
      gridLines = [];
      for (let i = 0; i < 20; i++) {
        gridLines.push(new GridLine(true));
        gridLines.push(new GridLine(false));
      }
    }

    function drawBackground() {
      // Gradient background
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height)
      );
      gradient.addColorStop(0, colors.paper);
      gradient.addColorStop(1, "#d0e5f5");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    function drawMouseGlow() {
      if (!mouse.x || !mouse.y) return;

      const gradient = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, 200
      );
      gradient.addColorStop(0, colors.signal + "30");
      gradient.addColorStop(0.5, colors.circuit + "15");
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    function draw() {
      drawBackground();

      // Grid
      gridLines.forEach(line => {
        line.update();
        line.draw();
      });

      // Floating shapes
      floatingCircles.forEach(circle => {
        circle.update();
        circle.draw();
      });

      // Connections
      connections.forEach(connection => {
        connection.update();
        connection.draw();
      });

      // Nodes
      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      // Mouse glow
      drawMouseGlow();

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
    createNetwork();
    createFloatingShapes();
    createGrid();
    draw();

    const handleResize = () => {
      resize();
      createNetwork();
      createFloatingShapes();
      createGrid();
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [intensity, isClient]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 h-full w-full"
    />
  );
}