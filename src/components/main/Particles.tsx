"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import {Particles as ParticlesComponent} from "@/components/ui/particles";

export function Particles({children,className}:{children:React.ReactNode,className?:string}) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className={`relative ${className}`}>
      <div className="relative z-10">
        {children}
      </div>
      <div className="absolute inset-0 pointer-events-none z-0">
        <ParticlesComponent
          className="w-full h-full"
          quantity={100}
          ease={120}
          color={color}
          refresh
        />
      </div>
    </div>
  );
}
