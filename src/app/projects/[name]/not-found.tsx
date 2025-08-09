import { NotFound as NotFoundComponent } from '@/components/Icons/NotFound'
import Link from 'next/link'
export default function NotFound() {
  return (
    <main className='w-screen min-h-[100vh] flex flex-col justify-start items-center p-2 pt-28 relative dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>
      <div className='w-[clamp(300px,75%,600px)] h-[400px]'>
        <NotFoundComponent/>
      </div>
      <button className='py-2 px-4 bg-primary rounded-md'><Link href={'/projects'}>Go back to projects</Link></button>
    </main>
  )
}
