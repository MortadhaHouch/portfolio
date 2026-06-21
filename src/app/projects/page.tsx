import Projects from '@/components/main/Projects'
import { projects } from '../../../utils/constants'

export default function page() {
  return (
    <main
      className='w-screen min-h-screen flex flex-col justify-start items-center p-2 pt-28 relative bg-gradient-to-br from-gray-50 via-blue-50 to-sky-100 dark:from-gray-900 dark:via-slate-950 dark:to-slate-900'
    >
      <Projects projects={projects}/>
    </main>
  )
}
