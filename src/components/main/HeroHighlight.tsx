"use client";
import { motion } from "framer-motion";
import { HeroHighlight as HeroHighlightComponent, Highlight } from "../ui/hero-highlight";
import { Button } from "../ui/moving-border";

export function HeroHighlight() {
  return (
    <HeroHighlightComponent className="flex flex-col justify-center items-center gap-5 p-2">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-xl md:text-2xl lg:text-3xl px-4 font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Are you looking for a skilled and passionate developer to bring your ideas to life? With my expertise in web and mobile development, I deliver innovative and reliable solutions tailored to your needs. From creating modern, user-friendly interfaces to ensuring robust backend systems, I’ve got you covered. Let’s collaborate to make your vision a reality!
      </motion.h1>
      <Highlight className="md:text-3xl text-black dark:text-white">
        🚀 Let’s Build Something Great Together
      </Highlight>
      <Button
        borderRadius="1.75rem"
        className="bg-white text-2xl dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Hire me
      </Button>
    </HeroHighlightComponent>
  );
}
