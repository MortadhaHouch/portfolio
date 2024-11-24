// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
"use client"
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
let theme:string;
export const Desktop = ({currentTheme}:{currentTheme?:string}) => {
  const group = useRef<Group>(null);
  theme = currentTheme || 'light';
  const { animations, scene } = useGLTF(theme==='dark'?"/assets/3d/programmer_desktop_3d_pc_dark.glb":"/assets/3d/programmer_desktop_3d_pc_light.glb");
  const { actions } = useAnimations(animations, group);
  const firstAction = actions[Object.keys(actions)[0]];
  useFrame(()=>{
    if(firstAction){
      firstAction.play();
    }
  })
  return (
    <primitive ref={group} object={scene} scale={.8} position={[0, 0, 0]} />
  )
}
useGLTF.preload(theme==='dark'?"/assets/3d/programmer_desktop_3d_pc_dark.glb":"/assets/3d/programmer_desktop_3d_pc_light.glb")