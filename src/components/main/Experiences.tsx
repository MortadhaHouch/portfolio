"use client"
import { experiences } from "../../../utils/constants";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

export default function Experiences() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="w-full py-12 md:py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Professional Journey
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-600 dark:text-gray-400 md:text-lg">
              A timeline of my professional experience and growth in the tech industry
            </p>
          </div>
          
          <motion.div 
            className="space-y-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
