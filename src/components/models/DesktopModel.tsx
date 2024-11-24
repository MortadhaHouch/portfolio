"use client"
import { Canvas } from "@react-three/fiber"
import React, { Suspense, useRef } from "react"
import {Desktop} from "../3d/Desktop"
import { OrbitControls } from "@react-three/drei"
import { useTheme } from "next-themes"

export default function DesktopModel() {
  const {theme}  = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return (
    <Canvas ref={canvasRef} shadows frameloop="always" className='w-full h-full'>
      <ambientLight intensity={1}/>
      <directionalLight position={[1,2,1]} intensity={1}/>
      <pointLight position={[1,1,1]} />
      <OrbitControls enableDamping={true} enableZoom={false} enablePan enableRotate/>
      <Suspense fallback={"loading..."}>
        <Desktop texture={theme === "dark"?"assets/images/portfolio_dark.png":"assets/images/portfolio_light.png"}/>
      </Suspense>
    </Canvas>
  )
}