"use client"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Desktop from "../3d/Desktop"
import { OrbitControls } from "@react-three/drei"

export default function DesktopModel() {
  return (
    <Canvas shadows frameloop="always" className='w-[clamp(300px,40%,450px)] h-[clamp(300px,40%,450px)]'>
      <ambientLight intensity={0.75}/>
      <directionalLight position={[1,2,1]} intensity={0.75}/>
      <pointLight position={[1,1,1]} />
      <OrbitControls enableDamping={true} enableZoom={false} enablePan enableRotate/>
        <Suspense fallback={"loading..."}>
          <Desktop/>
        </Suspense>
    </Canvas>
  )
}
