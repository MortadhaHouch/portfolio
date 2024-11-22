import { GradualSpacing as GradualSpacingComponent } from "../ui/GradualSpacing";

export function GradualSpacing({text}:{text:string}) {
  return (
    <GradualSpacingComponent
      className="font-display text-center text-1xl font-bold -tracking-widest  text-black dark:text-white md:text-5xl md:leading-[5rem]"
      text={text}
    />
  );
}
