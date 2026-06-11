"use client"
import { cn } from '@/lib/utils';
import Lottie from 'react-lottie';
import { animations } from '../../../utils/constants';

export default function Software({
    className
}:{
    className?:string
}) {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animations.software,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  return (
    <div className={cn("w-full h-full border border-gray-400 dark:border-gray-600 rounded-lg",className)}>
        <Lottie options={defaultOptions} />
    </div>
  )
}
