"use client"
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "../3d/Stylized_planet";

export default function EarthModel() {
  return (
    <Canvas className='w-full h-full'>
      <OrbitControls enableZoom={false} enablePan enableDamping enableRotate enabled/>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback="loading...">
        <Earth/>
      </Suspense>
    </Canvas>
  )
}
