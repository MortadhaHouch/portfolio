import { Canvas } from "@react-three/fiber";
import { Dna_smoother_mesh } from "../3d/Dna_smoother_mesh";
import { OrbitControls } from "@react-three/drei";

export default function Dna() {
  return (
    <Canvas className='w-[clamp(300px,40%,450px)] h-[clamp(300px,40%,450px)]'>
        <OrbitControls enableZoom={false} enablePan enableDamping enableRotate enabled/>
        <ambientLight intensity={1} />
        <directionalLight position={[1, 2, 1]} intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Dna_smoother_mesh/>
    </Canvas>
  )
}
