import { BackgroundBeams } from '@/components/main/BackgroundBeams'
import {HeroSpotLight} from '@/components/main/HeroSpotLight'
import { Timeline } from '@/components/main/TimelineDemo'
import { TypewriterEffectProps, TypewriterEffectSmooth } from '@/components/main/TypeWriterEffect'
import MessageForm from '@/components/main/MessageForm'
export default function page() {
  const words:TypewriterEffectProps[] = [
    {
      text: 'What',
    },
    {
      text: 'are',
    },
    {
      text: 'you',
    },
    {
      text:"waiting"
    },
    {
      text:"for"
    }
  ]
  return (
    <main className='w-screen min-h-[100vh] flex flex-col justify-start items-center p-2 relative'>
      <section className="w-full min-h-[100vh] h-auto flex flex-col justify-center items-center">
        <HeroSpotLight/>
      </section>
      <Timeline/>
      <BackgroundBeams>
        <TypewriterEffectSmooth words={words}/>
        <MessageForm cta="Hire me"/>
      </BackgroundBeams>
    </main>
  )
}