import { projects } from '../../../utils/constants';
import Projects from '@/components/main/Projects'
export default function page() {
  return (
    <main
      className='w-screen min-h-[100vh] flex flex-col justify-start items-center p-2 pt-28 relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'
    >
      <Projects projects={projects}/>
    </main>
  )
}
