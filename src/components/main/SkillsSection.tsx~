"use client"
import {motion} from "framer-motion"
import { TracingBeam } from '@/components/main/TracingBeam'
import { skills } from "@/lib/constants"
import { AnimatedPin } from "./AnimatedPin"

export default function SkillsSection() {
  return (
    <TracingBeam className="px-6 flex flex-row justify-center items-center flex-wrap gap-3 p-2">
        <section className="w-full min-h-[100vh] h-auto flex flex-col justify-center items-center flex-wrap gap-3 p-2">
            <h2 className='relative text-3xl md:text-6xl font-bold'>
                <motion.span
                    className="absolute w-full h-full top-0 left-0 bg-primary"
                    initial={{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}
                    whileInView={{
                        clipPath:"polygon(0 0, 0 0, 0 100%, 0% 100%)",
                    }}
                    viewport={{
                        margin:"-100px"
                    }}
                    transition={{
                        duration:1.5,
                        ease:"easeInOut",
                        type:"spring"
                    }}
                >
                </motion.span>Skills</h2>
            <div className="flex flex-row justify-center items-center gap-2 p-1 flex-wrap">
                {/* {
                    skills.map((skill,index) =>{
                        return (
                            // <AnimatedPin key={index} title={skill.title} description={skill.description}/>
                        )
                    })
                } */}
            </div>
        </section>
    </TracingBeam>
  )
}
