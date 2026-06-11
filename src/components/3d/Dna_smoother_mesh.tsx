"use client"
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';


export default function Dna_smoother_mesh() {
  const group = useRef<Group>(null)
  const { scene, animations } = useGLTF('/assets/3d/dna_smoother_mesh.glb')
  const { actions } = useAnimations(animations, group);
  const firstAction = actions[Object.keys(actions)[0]]; // Try the first animation
  useFrame(() => {
    if (actions) {
      if (firstAction) firstAction.setDuration(7.5).play()
    }
  });
  return (
    <primitive ref={group} object={scene} scale={1.5} position={[0, 0, 0]} />
  )
}

useGLTF.preload('/assets/3d/dna_smoother_mesh.glb')
