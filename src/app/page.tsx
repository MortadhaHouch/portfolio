import { BackgroundBeams } from '@/components/main/BackgroundBeams'
import { HeroSpotLight } from '@/components/main/HeroSpotLight'
import { Timeline } from '@/components/main/Timeline'
import { HoverImageLinks } from '@/components/main/LinkPreview'
import ContactUs from '@/components/main/ContactUs'
export default function HomePage() {
  // Structured data for the homepage
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Mortadha Houch - Full Stack Developer',
    description: 'Portfolio of Mortadha Houch, a Full Stack Developer specializing in modern web technologies.',
    url: 'https://mortadha-houch.netlify.app',
    mainEntity: {
      '@type': 'Person',
      name: 'Mortadha Houch',
      jobTitle: 'Full Stack Developer',
      url: 'https://mortadha-houch.netlify.app',
      sameAs: [
        'https://github.com/MortadhaHouch',
        'https://linkedin.com/in/mortadha-houch'
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className='w-full min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-50 via-blue-50 to-sky-100 dark:from-gray-900 dark:via-slate-950 dark:to-slate-900'>
        {/* Hero Section */}
        <section className="w-full min-h-screen flex flex-col justify-center items-center" aria-label="Introduction">
          <HeroSpotLight />
        </section>

        {/* Experience Timeline */}
        <section className="items-center py-16" aria-label="Education">
          <Timeline />
        </section>
        <section className="w-full py-16" aria-label="Links">
          <HoverImageLinks/>
        </section>
        {/* Contact Section */}
        <section className="w-full py-16 relative" aria-label="Contact Me">
          <BackgroundBeams>
            <div className='max-w-7xl justify-center items-center mx-auto h-full flex flex-col'>
              <h2 className="text-3xl font-bold mb-8">Let&apos;s Work Together</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>
            <ContactUs />
          </BackgroundBeams>
        </section>
      </main>
    </>
  )
}