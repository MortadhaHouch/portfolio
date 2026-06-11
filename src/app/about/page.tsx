import { Particles } from '@/components/main/Particles'
import SkillsSection from "@/components/main/SkillsSection";
import { TracingBeam } from '@/components/main/TracingBeam';
import Experiences from '@/components/main/Experiences';
import Certificates from '@/components/main/Certificates';
import GithubProfile from '@/components/main/GithubProfile';
import { GitHubStats } from '@/components/main/GitHubStats';
import ContactUs from '@/components/main/ContactUs';
export default function About() {
  return (
    <main className='w-full min-h-screen py-28 px-4 relative bg-gradient-to-br from-gray-50 via-blue-50 to-sky-100 dark:from-gray-900 dark:via-slate-950 dark:to-slate-900'>
      <section className="w-full py-16" aria-label="Professional Experience">
        <Experiences />
      </section>
      <section className="w-full py-16" aria-label="Certificates">
        <Certificates />
      </section>
      <section className="w-full py-16" aria-label="Github Profile">
        <GithubProfile />
        <GitHubStats username="MortadhaHouch" />
      </section>
      <TracingBeam className="w-full h-full max-w-7xl mx-auto flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center gap-8 py-12">
          <div className="w-full">
            <SkillsSection/>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-8">
            <Particles className='w-full justify-center items-center mx-auto h-full flex flex-col'>
              <ContactUs/>
            </Particles>
          </div>
        </div>
      </TracingBeam>
    </main>
  )
}
