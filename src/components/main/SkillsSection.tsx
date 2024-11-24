import dynamic from "next/dynamic"
import { skills } from "../../../utils/constants"
const AnimatedPin = dynamic(() => import('./AnimatedPin').then(mod => mod.AnimatedPin), {
    ssr: false
  });

export default function SkillsSection() {
  return (
        <section className="w-full min-h-[100vh] h-auto flex flex-col justify-center items-center flex-wrap gap-3 p-2">
            <h2 className='relative text-3xl md:text-6xl font-bold from-black/30 to-gray-300/30'>Skills</h2>
            <div className="flex flex-row justify-center items-center gap-2 p-1 flex-wrap">
                {
                    skills.map((skill,index) =>{
                        return (
                            <AnimatedPin key={index} url={skill.image} title={skill.title} description={skill.description}/>
                        )
                    })
                }
            </div>
        </section>
  )
}
