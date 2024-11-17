"use client"
import { Canvas } from "@react-three/fiber";
import Island from "../3d/Island"
import { OrbitControls } from "@react-three/drei";
import Phoenix_bird from "../3d/Phoenix_bird";
import Sky from "../3d/Sky";
export default function IslandModel() {
  return (
    <Canvas className="w-[clamp(300px, 100%, 100vw)] h-[clamp(300px, 100%, 100vh)]">
        <ambientLight intensity={0.75} />
        <OrbitControls enableDamping={true} enablePan enableRotate enableZoom={false} enabled/>
        <directionalLight position={[1, 2, 1]} intensity={0.75} />
        <pointLight position={[1,1,1]} />
        <Sky/>
        <Island />
        <Phoenix_bird/>
    </Canvas>
  )
}
