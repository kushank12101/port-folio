"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// A row of extruded bars representing a forecast-vs-actual ledger.
// Heights are deliberately irregular, like a real variance series,
// and gently breathe to suggest a live, recalculating model —
// not a generic spinning hero object.

const BAR_COUNT = 18;

function seededHeights(count: number): number[] {
  // Deterministic pseudo-series so SSR/CSR match and it never looks random/jittery on reload.
  const base = [0.4, 0.62, 0.5, 0.78, 0.66, 0.9, 0.7, 0.55, 0.82, 0.6, 0.95, 0.72, 0.5, 0.84, 0.68, 0.58, 0.76, 0.46];
  return base.slice(0, count);
}

function ForecastBars() {
  const group = useRef<THREE.Group>(null);
  const heights = useMemo(() => seededHeights(BAR_COUNT), []);
  const gap = 0.42;
  const totalWidth = (BAR_COUNT - 1) * gap;

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.children.forEach((mesh, i) => {
      const m = mesh as THREE.Mesh;
      const offset = i * 0.32;
      const breathe = Math.sin(t * 0.6 + offset) * 0.05;
      const targetScale = heights[i] + breathe;
      m.scale.y = THREE.MathUtils.lerp(m.scale.y, Math.max(0.12, targetScale), 0.04);
      m.position.y = (m.scale.y * 1.6) / 2 - 0.8;
    });
    group.current.rotation.y = Math.sin(t * 0.08) * 0.12;
  });

  return (
    <group ref={group} position={[-totalWidth / 2, 0, 0]}>
      {heights.map((h, i) => {
        const isPeak = h > 0.85;
        return (
          <mesh key={i} position={[i * gap, 0, 0]} scale={[1, h, 1]}>
            <boxGeometry args={[0.22, 1.6, 0.22]} />
            <meshStandardMaterial
              color={isPeak ? "#C2410C" : "#8B6F3E"}
              roughness={0.35}
              metalness={0.55}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.65} color="#FAF8F3" />
      <directionalLight position={[4, 5, 4]} intensity={1.1} color="#FFF8E8" />
      <directionalLight position={[-4, -2, -3]} intensity={0.3} color="#2F4538" />
    </>
  );
}

export default function ForecastRibbon() {
  return (
    <div className="h-full w-full" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 1.1, 7.2], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Lights />
        <ForecastBars />
      </Canvas>
    </div>
  );
}
