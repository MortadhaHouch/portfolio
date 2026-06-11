"use client"
import { Canvas } from "@react-three/fiber"
import React, { lazy, Suspense } from "react"
import { OrbitControls } from "@react-three/drei"
import { useTheme } from "next-themes"
const Desktop = lazy(() => import("../3d/Desktop"))
export default function DesktopModel() {
  const themeState = useTheme()
  return (
    <Canvas shadows frameloop="always" className='w-full h-full'>
      <ambientLight intensity={1}/>
      <directionalLight position={[1,2,1]} intensity={2}/>
      <pointLight position={[1,1,1]} intensity={5}/>
      <OrbitControls enableDamping={true} enableZoom={false} enablePan enableRotate/>
      <Suspense fallback={"loading..."}>
        <Desktop theme={themeState.theme as "system"|"dark"|"light"}/>
      </Suspense>
    </Canvas>
  )
}