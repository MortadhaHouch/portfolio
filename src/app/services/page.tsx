import { Meteor } from "@/components/main/Meteor";
import { ThreeDCard } from "@/components/main/ThreeDCard";
import { specialties } from "../../../utils/constants";
import { ShineBorder } from "@/components/main/ShineBorder";
export default function page() {
  return (
    <main className='w-screen min-h-[100vh] flex flex-col justify-start items-center p-2 pt-28 relative'>
      <section className="w-full h-auto flex flex-col justify-center items-center gap-2 p-2">
        <h2 className="text-2xl sm:text-3xl md:text-5xl from-black to-gray-300/80">technical specialties</h2>
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
              <h3 className="text-2xl md:text-3xl">{specialties.uxui.stack}</h3>
              <p className="text-md">{specialties.uxui.description}</p>
              <ThreeDCard images={specialties.uxui.images}/>
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
