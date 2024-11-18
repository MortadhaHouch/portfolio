import { GradualSpacing } from '@/components/main/GradualSpacingDemo'
import React from 'react'

export default function page() {
  return (
    <main
      className='w-screen min-h-[100vh] flex flex-col justify-start items-center p-2 relative'
    >
      <section className="w-full min-h-[100vh] h-auto flex flex-col justify-start items-center py-28">
        <div className='flex flex-row justify-evenly items-center flex-wrap p-2'>
          <GradualSpacing text="Here are some of my projects"/>
          <input type='text' placeholder='search' className="flex h-9 w-[clamp(300px,75%,450px)] rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"/>
        </div>
      </section>
    </main>
  )
}
