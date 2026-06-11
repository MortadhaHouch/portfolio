"use client"
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { lazy, Suspense } from 'react'
const Sustainable_globe_model = lazy(() => import("../3d/Sustainable_globe"))

export default function Sustainable_globe() {
  return (
    <Canvas className='w-[clamp(300px,40%,450px)] h-[clamp(300px,40%,450px)]'>
        <OrbitControls enableZoom={false} enablePan enableDamping enableRotate enabled/>
        <ambientLight intensity={2.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense>
          <Sustainable_globe_model/>
        </Suspense>
    </Canvas>
  )
}
