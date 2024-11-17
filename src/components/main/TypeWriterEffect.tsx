"use client";
import { TypewriterEffectSmooth as TypewriterEffectSmoothComponent } from "../ui/typewriter-effect";
export function TypewriterEffectSmooth() {
  const words = [
    {
      text: "Where",
    },
    {
      text: "creativity",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "fuels",
    },
    {
      text: "functionality",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <TypewriterEffectSmoothComponent words={words} />
  );
}
