"use client"
import { Canvas } from "@react-three/fiber"
import React, { Suspense, useRef } from "react"
import {Desktop} from "../3d/Desktop"
import { OrbitControls } from "@react-three/drei"

export default function DesktopModel({currentTheme}:{currentTheme?:string}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return (
    <Canvas ref={canvasRef} shadows frameloop="always" className='w-full h-full'>
      <ambientLight intensity={1}/>
      <directionalLight position={[1,2,1]} intensity={2}/>
      <pointLight position={[1,1,1]} intensity={5}/>
      <OrbitControls enableDamping={true} enableZoom={false} enablePan enableRotate/>
      <Suspense fallback={"loading..."}>
        <Desktop currentTheme={currentTheme}/>
      </Suspense>
    </Canvas>
  )
}