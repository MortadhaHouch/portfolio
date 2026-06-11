"use client"
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';


export default function Sustainable_globe_model() {
  const group = useRef<Group|null>(null)
  const { scene, animations } = useGLTF('/assets/3d/sustainable_globe.glb')
  const { actions } = useAnimations(animations, group);
  const firstAction = actions[Object.keys(actions)[0]];
  useFrame(() => {
    if(firstAction){
      firstAction.play();
    }
  });
  return (
    <primitive ref={group} object={scene} scale={1.5} position={[0, 0, 0]} />
  )
}

useGLTF.preload('/assets/3d/sustainable_globe.glb')
