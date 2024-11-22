
import { HeroHighlight } from '@/components/main/HeroHighlight';
import { projects } from '../../../utils/constants';
import Projects from '@/components/main/Projects'
export default function page() {
  return (
    <main
      className='w-screen min-h-[100vh] flex flex-col justify-start items-center p-2 pt-28 relative'
    >
      <Projects projects={projects}/>
      <HeroHighlight/>
    </main>
  )
}
