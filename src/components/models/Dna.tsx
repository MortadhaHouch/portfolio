"use client"
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { lazy, Suspense } from "react";
const Dna_smoother_mesh = lazy(() => import("../3d/Dna_smoother_mesh"));
export default function Dna() {
  return (
    <Canvas className='w-[clamp(300px,40%,450px)] h-[clamp(300px,40%,450px)]'>
        <OrbitControls enableZoom={false} enablePan enableDamping enableRotate enabled/>
        <ambientLight intensity={1} />
        <directionalLight position={[1, 2, 1]} intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback="loading...">
          <Dna_smoother_mesh/>
        </Suspense>
    </Canvas>
  )
}
