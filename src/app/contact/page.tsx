"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import ContactUs from "@/components/main/ContactUs";
import { resumes, socialMediaLinks } from "../../../utils/constants";
import ResumeDialog from "@/components/main/ResumeDialog";
import { SocialMediaLink } from "@/components/main/SocialMediaLink";



export default function ContactPage() {
  return (
    <main className="w-full min-h-screen pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-sky-100 dark:from-gray-900 dark:via-slate-950 dark:to-slate-900">
      <section className="max-w-7xl h-full mx-auto flex flex-col w-full justify-center items-center gap-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full">
            Get In Touch
          </span>
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 text-transparent">
            Let&apos;s Work Together
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Feel free to reach out through any platform below or send me a direct message.
          </motion.p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex flex-col justify-center items-center gap-12">
          <div className="w-full lg:w-2/5">
            <div className="relative group mb-12">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-sky-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-all duration-700"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-xl">
                <Image loading="lazy" 
                  src={"/assets/images/profile.jpg"} 
                  alt="Profile Picture" 
                  width={300}
                  height={300}
                  unoptimized
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          <ContactUs >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex justify-center items-center">
              <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full mr-3"></span>
              Get In Touch
            </h2>
          </ContactUs>
        </motion.div>
        <div className="space-y-6">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex justify-center items-center">
            <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full mr-3"></span>
            Connect With Me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
            {socialMediaLinks.map((link, index) => {
              return (
                <SocialMediaLink key={index} index={index} title={link.title} url={link.url}/>
              );
            })}
          </div>
          <div className="flex flex-col justify-center items-center gap-2 p-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 flex items-center">
              <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full mr-3"></span>
              Resumes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
              {
                resumes.map((resume,idx)=>{
                  return (
                    <ResumeDialog key={idx} title={resume.title} url={resume.url}/>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}