import MessageForm from '@/components/main/MessageForm'
import { Particles } from '@/components/main/Particles'
import EarthModel from '@/components/models/EarthModel'
import SkillsSection from "@/components/main/SkillsSection";
import { TracingBeam } from '@/components/main/TracingBeam';
export default function About() {
  return (
    <main className='w-screen min-h-[100vh] flex flex-row justify-center items-center flex-wrap p-2 relative border-none py-28'>
      <TracingBeam className="px-6 flex flex-row justify-center items-center flex-wrap gap-3 p-2">
        <SkillsSection/>
        <Particles className='w-full h-auto flex flex-row justify-center items-center gap-2 flex-wrap p-2'>
          <MessageForm/>
          <div className='w-[clamp(300px,75%,400px)] h-[400px]'>
            <EarthModel/>
          </div>
        </Particles>
      </TracingBeam>
    </main>
  )
}
