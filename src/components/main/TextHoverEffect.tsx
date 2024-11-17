import React from "react";
import { TextHoverEffect as TextHoverEffectComponent } from "@/components/ui/text-hover-effect";

export function TextHoverEffect({text}:{text:string}) {
  return (
    <div className="h-[40rem] flex items-center justify-center absolute">
      <TextHoverEffectComponent text={text} />
    </div>
  );
}
