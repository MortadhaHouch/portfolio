import { BackgroundBeams } from '@/components/main/BackgroundBeams'
import { HeroHighlight } from '@/components/main/HeroHighlight'
import { HeroParallax } from '@/components/main/HeroParallax'
import { HeroSpotLight } from '@/components/main/HeroSpotLight'
import { Timeline } from '@/components/main/TimelineDemo'
import { TracingBeam } from '@/components/main/TracingBeam'
import DesktopModel from '@/components/models/DesktopModel'
import IslandModel from '@/components/models/IslandModel'
import { Marquee } from '@/components/ui/marquee'
import React from 'react'

export default function page() {
  return (
    <main className='w-screen min-h-[100vh] flex flex-col justify-start items-center p-2 relative'>
        <section className="w-full min-h-[100vh] h-auto flex flex-col justify-center items-center">
          <HeroSpotLight/>
        </section>
        {/* <section className="w-screen h-[100vh] flex flex-col justify-center items-center">
            <IslandModel/>
        </section>
        <section className="w-screen h-[100vh] flex flex-col justify-center items-center">
            <DesktopModel/>
        </section> */}
        <section className="w-full h-[100vh] flex flex-col justify-center items-center">
            <HeroHighlight/>
        </section>
        {/* <HeroParallax/> */}
        {/* <TracingBeam/>*/}
        <Timeline/>
        <section className="w-full h-[100vh] flex flex-col justify-center items-center">
          {/* <Marquee/> */}
        </section>
        <BackgroundBeams/>
    </main>
  )
}
