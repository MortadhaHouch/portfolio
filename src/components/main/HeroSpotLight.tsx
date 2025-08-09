"use client";
import { useTheme } from "next-themes";
import { Spotlight } from "../ui/spotlight";
import { GridPattern } from "./GridPattern";
import Image from "next/image";
import { TypewriterEffectSmooth } from "./TypeWriterEffect";
export function HeroSpotLight() {
  const {theme} = useTheme();
  const words = [
    {
      text:"Where",
    },
    {
      text:"Creativity",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text:"comes",
    },
    {
      text:"in",
    },
    {
      text:"handy",
    },
    {
      text:"with",
    },
    {
      text: "capability",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <header
      className="h-[fit-content] w-full rounded-md flex flex-col items-center justify-center md:items-center md:justify-center bg-transparent antialiased bg-grid-white/[0.02] relative"
    >
      <Spotlight
        className="top-0 left-0 md:left-60 md:-top-20"
        fill={theme === "light" ? "black" : "white"}
      />
      <GridPattern>
        <div className="max-w-7xl mx-auto relative z-10 w-full h-auto pt-28 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-800 bg-opacity-50">
            <span itemProp="name">Mortadha Houch</span> <br />
            <span className="sr-only">- Full Stack Developer</span>
            <TypewriterEffectSmooth words={words} />
          </h1>
          <meta itemProp="jobTitle" content="Full Stack Developer" />
          <meta
            itemProp="description"
            content="Professional Full Stack Developer specializing in modern web technologies"
          />
          <div
            itemScope
            itemType="https://schema.org/Person"
            className="bg-primary"
            style={{
              width: "clamp(300px, 100%, 500px)",
              height: "clamp(300px, 100%, 500px)",
              borderRadius: "50%",
            }}
          >
            <Image
              src={"/assets/images/profile-pic-removebg-preview.png"}
              alt=""
              width={300}
              height={300}
              unoptimized
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                transformOrigin: "bottom",
                transition: ".5s",
                transitionTimingFunction: "ease-in-out",
                position: "relative",
              }}
              className="rounded-full mx-auto z-30 mt-8 hover:scale-110"
            />
          </div>
          <Image
            alt="scroll down"
            className="absolute bottom-[50px] z-30 bg-slate-800 backdrop-blur-lg rounded-full"
            width={50}
            height={50}
            src={"/assets/animations/scroll-animation.gif"}
          />
        </div>
      </GridPattern>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mortadha Houch",
            jobTitle: "Full Stack Developer",
            description:
              "Professional Full Stack Developer specializing in modern web technologies",
            url: "https://mortadha-houch.netlify.app",
            sameAs: [
              "https://github.com/MortadhaHouch",
              "https://linkedin.com/in/mortadha-houch",
            ],
          }),
        }}
      />
    </header>
  );
}