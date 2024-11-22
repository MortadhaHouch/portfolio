import { TypewriterEffectSmooth as TypewriterEffectSmoothComponent } from "../ui/typewriter-effect";
export interface TypewriterEffectProps {
  text: string;
  className?: string;
}
export function TypewriterEffectSmooth({words}:{words:TypewriterEffectProps[]}) {
  return (
    <TypewriterEffectSmoothComponent words={words} />
  );
}
