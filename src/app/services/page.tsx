import { Meteor } from "@/components/main/Meteor";
import { ThreeDCard } from "@/components/main/ThreeDCard";
import { specialties } from "../../../utils/constants";
import { ShineBorder } from "@/components/main/ShineBorder";
export default function page() {
  return (
    <main className='w-full min-h-screen flex flex-col items-center pt-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>
      <section className="w-full max-w-7xl mx-auto flex flex-col items-center gap-8 py-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Technical Specialties
        </h2>
        <div className="w-full h-auto flex flex-row justify-center items-center flex-wrap gap-2 p-2">
          <ShineBorder>
            <div className="flex flex-col justify-center items-center gap-2 p-2 rounded-lg w-[clamp(350px,45%,450px)]">
              <h3 className="text-2xl md:text-3xl">{specialties.frontend.stack}</h3>
              <p className="text-md">{specialties.frontend.description}</p>
              <ThreeDCard images={specialties.frontend.image}/>
            </div>
          </ShineBorder>
          <ShineBorder>
            <div className="flex flex-col justify-center items-center gap-2 p-2 rounded-lg w-[clamp(350px,45%,450px)]">
              <h3 className="text-2xl md:text-3xl">{specialties.backend.stack}</h3>
              <p className="text-md">{specialties.backend.description}</p>
              <ThreeDCard images={specialties.backend.image}/>
            </div>
          </ShineBorder>
          <ShineBorder>
            <div className="flex flex-col justify-center items-center gap-2 p-2 rounded-lg w-[clamp(350px,45%,450px)]">
              <h3 className="text-2xl md:text-3xl">{specialties.fullstack.stack}</h3>
              <p className="text-md">{specialties.fullstack.description}</p>
              <ThreeDCard images={specialties.fullstack.image}/>
            </div>
          </ShineBorder>
          <ShineBorder>
            <div className="flex flex-col justify-center items-center gap-2 p-2 rounded-lg w-[clamp(350px,45%,450px)]">
              <h3 className="text-2xl md:text-3xl">{specialties.mobile.stack}</h3>
              <p className="text-md">{specialties.mobile.description}</p>
              <ThreeDCard images={specialties.mobile.image}/>
            </div>
          </ShineBorder>
        </div>
      </section>
      <section className="w-full h-auto flex flex-row justify-center items-center flex-wrap gap-2 p-2">
        <h2 className="text-2xl sm:text-3xl md:text-5xl from-black to-gray-300/80">Tools</h2>
        <div className="w-full h-auto flex flex-row justify-center items-center flex-wrap gap-2 p-2">
          <ShineBorder>
            <div className="flex flex-col justify-center items-center gap-2 p-2 rounded-lg w-[clamp(350px,45%,450px)]">
              <h3 className="text-2xl md:text-3xl">{specialties.ux_ui.stack}</h3>
              <p className="text-md">{specialties.ux_ui.description}</p>
              <ThreeDCard images={specialties.ux_ui.images}/>
            </div>
          </ShineBorder>
          <ShineBorder>
            <div className="flex flex-col justify-center items-center gap-2 p-2 rounded-lg w-[clamp(350px,45%,450px)]">
              <h3 className="text-2xl md:text-3xl">{specialties.vcs.stack}</h3>
              <p className="text-md">{specialties.vcs.description}</p>
              <ThreeDCard images={specialties.vcs.images}/>
            </div>
          </ShineBorder>
        </div>
      </section>
      <Meteor/>
    </main>
  )
}
