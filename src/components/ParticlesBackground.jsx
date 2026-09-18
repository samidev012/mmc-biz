
"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function DotsWaveBackground({
  colorSignal = 0x0066ff,
  colorCircuit = 0x28a745,
  backgroundColor = 0x000000,
  dotSize = 2.2,
  spacing = 32,
  showLines = true,
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    let width = mount.offsetWidth;
    let height = mount.offsetHeight;

    // ---------- Scene setup ----------
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 5000);
    camera.position.set(0, 250, 350);
    camera.tx = 0;
    camera.ty = 250;
    camera.tz = 350;
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(backgroundColor, 1);
    mount.appendChild(renderer.domElement);

    // ---------- Dot grid ----------
    const points = [];
    const gridColors = [];
    const colorA = new THREE.Color(colorSignal);
    const colorB = new THREE.Color(colorCircuit);
    const range = 25;

    for (let i = -range; i <= range; i++) {
      for (let j = -range; j <= range; j++) {
        const x = i * spacing;
        const z = j * spacing;
        const y = Math.random() * 5 - 150;
        points.push(new THREE.Vector3(x, y, z));

        const mixed = colorA.clone().lerp(colorB, Math.random() * 0.6);
        gridColors.push(mixed.r, mixed.g, mixed.b);
      }
    }

    const starsGeometry = new THREE.BufferGeometry().setFromPoints(points);
    starsGeometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(gridColors, 3)
    );

    const starsMaterial = new THREE.PointsMaterial({
      size: dotSize,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });

    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // ---------- Sphere burst lines ----------
    let linesMesh;
    if (showLines) {
      const linePoints = [];
      for (let i = 0; i < 160; i++) {
        const f1 = 40 + Math.random() * 20;
        const f2 = f1 + 12 + Math.random() * 8;
        const z = Math.random() * 2 - 1;
        const r = Math.sqrt(1 - z * z);
        const theta = Math.random() * Math.PI * 2;
        const y = Math.sin(theta) * r;
        const x = Math.cos(theta) * r;
        linePoints.push(new THREE.Vector3(x * f1, y * f1, z * f1));
        linePoints.push(new THREE.Vector3(x * f2, y * f2, z * f2));
      }
      const linesGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: colorSignal,
        transparent: true,
        opacity: 0.35,
      });
      linesMesh = new THREE.LineSegments(linesGeo, lineMaterial);
      linesMesh.position.set(0, 40, 0);
      scene.add(linesMesh);
    }

    // ---------- Fog for depth ----------
    scene.fog = new THREE.FogExp2(backgroundColor, 0.0016);

    // ---------- Animation loop ----------
    let animationId;
    let t = 0;
    const mouse = { x: 0.5, y: 0.5 };

    function animate() {
      t += 1;

      const posArray = starsGeometry.attributes.position.array;
      for (let k = 0; k < posArray.length; k += 3) {
        const x = posArray[k];
        const z = posArray[k + 2];
        posArray[k + 1] =
          -150 + 8 * Math.sin(z * 0.02 + x * 0.015 + t * 0.02);
      }
      starsGeometry.attributes.position.needsUpdate = true;

      const rate = 0.02;
      camera.position.x += (camera.tx - camera.position.x) * rate;
      camera.position.y += (camera.ty - camera.position.y) * rate;
      camera.position.z += (camera.tz - camera.position.z) * rate;
      camera.lookAt(0, 0, 0);

      if (linesMesh) {
        linesMesh.rotation.y += 0.0012;
        linesMesh.rotation.x += 0.0006;
        linesMesh.rotation.z += 0.0004;
      }

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    }
    animate();

    // ---------- Mouse parallax ----------
    function handleMouseMove(e) {
      const rect = mount.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = (e.clientY - rect.top) / rect.height;
      camera.tx = (mouse.x - 0.5) * 120;
      camera.ty = 220 + mouse.y * 60;
    }
    window.addEventListener("mousemove", handleMouseMove);

    // ---------- Resize ----------
    function handleResize() {
      width = mount.offsetWidth;
      height = mount.offsetHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener("resize", handleResize);

    // ---------- Cleanup ----------
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      starsGeometry.dispose();
      starsMaterial.dispose();
      if (linesMesh) {
        linesMesh.geometry.dispose();
        linesMesh.material.dispose();
      }
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [colorSignal, colorCircuit, backgroundColor, dotSize, spacing, showLines]);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
