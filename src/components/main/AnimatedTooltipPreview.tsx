"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
interface TechType {
    id: number;
    name: string;
    designation: string;
    image: string;
}

export function AnimatedTooltipPreview({items}:{items:TechType[]}) {
  return (
    <div className="flex flex-row items-center justify-center mb-3 w-full">
      <AnimatedTooltip items={items} />
    </div>
  );
}
