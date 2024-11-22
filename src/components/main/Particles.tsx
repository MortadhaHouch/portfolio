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
    <div className={className}>
      {children}
      <ParticlesComponent
        className="absolute inset-0 border-none"
        quantity={100}
        ease={120}
        color={color}
        refresh
      />
    </div>
  );
}
