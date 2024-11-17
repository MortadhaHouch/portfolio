"use client";
import { useTheme } from "next-themes";
import { Spotlight } from "../ui/spotlight";
import { GridPattern } from "./GridPattern";
import Image from "next/image";
import { TypewriterEffectSmooth } from "./TypeWriterEffect";
import WelcomeText from "../Icons/WelcomeText";
export function HeroSpotLight() {
    const {theme} = useTheme();
  return (
    <div className={`h-[fit-content] w-full rounded-md flex flex-col items-center justify-center md:items-center md:justify-center bg-transparent antialiased bg-grid-white/[0.02] relative`}>
      <Spotlight
        className="top-0 left-0 md:left-60 md:-top-20"
        fill={theme==="light"?"black":"white"}
      />
      <GridPattern>
        <div className="max-w-7xl mx-auto relative z-10 w-full h-auto pt-28 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Mortadha Houch <br /><TypewriterEffectSmooth/>
          </h1>
          <div
            style={{
              width:"clamp(300px, 100%, 500px)",
              height:"clamp(300px, 100%, 500px)",
              backgroundColor:"rgb(62,204,114)",
              borderRadius:"50%",
            }} 
          >
            <Image 
              src={"/assets/images/profile-pic-removebg-preview.png"} 
              alt="" 
              width={300} 
              height={300} 
              style={{
                objectFit:"cover",
                width:"100%",
                height:"100%",
                transformOrigin:"bottom",
                transition:".5s",
                transitionTimingFunction:"ease-in-out",
                position:"relative"
              }} 
              className="rounded-full mx-auto mt-8 hover:scale-110" 
            />
          </div>
          <WelcomeText className="absolute"/>
        </div>
      </GridPattern>
    </div>
  );
}