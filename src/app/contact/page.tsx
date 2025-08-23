"use client"
import MessageForm from "@/components/main/MessageForm";
import Image from "next/image";
import { resumes, socialMediaLinks } from "../../../utils/constants";
import { 
  // Social Media Icons
  Github, 
  Linkedin, 
  Twitter as XIcon,
  Mail as MailIcon,
  Instagram, 
  Youtube as YoutubeIcon,
  Globe as GlobeIcon,
  ExternalLink,
  FileText,
  Download,
} from 'lucide-react';
import { motion } from "framer-motion";
import Dialog from "@/components/main/Dialog";
import Link from "next/link";

const getIcon = (title: string) => {
  const iconClass = "w-5 h-5";
  const titleLower = title.toLowerCase();
  
  // Social Media Icons
  if (titleLower.includes('github')) return <Github className={iconClass} />;
  if (titleLower.includes('linkedin')) return <Linkedin className={iconClass} />;
  if (titleLower.includes('twitter') || titleLower.includes('x.com')) return <XIcon className={iconClass} />;
  if (titleLower.includes('mail') || titleLower.includes('email') || titleLower.includes('gmail')) return <MailIcon className={iconClass} />;
  if (titleLower.includes('instagram')) return <Instagram className={iconClass} />;
  if (titleLower.includes('youtube')) return <YoutubeIcon className={iconClass} />;
  
  // Development & Coding Platforms
  if (titleLower.includes('codepen')) return <FileText className={iconClass} />;
  if (titleLower.includes('gitlab')) return <Github className={iconClass} />;
  if (titleLower.includes('bitbucket') || titleLower.includes('bit')) return <ExternalLink className={iconClass} />;
  if (titleLower.includes('git')) return <Github className={iconClass} />;
  if (titleLower.includes('code') || titleLower.includes('dev')) return <FileText className={iconClass} />;
  
  // Communication
  if (titleLower.includes('message') || titleLower.includes('chat')) return <MailIcon className={iconClass} />;
  if (titleLower.includes('send') || titleLower.includes('submit')) return <ExternalLink className={iconClass} />;
  if (titleLower.includes('contact') || titleLower.includes('@')) return <MailIcon className={iconClass} />;
  if (titleLower.includes('link')) return <ExternalLink className={iconClass} />;
  
  // Default icon for any other cases
  return <GlobeIcon className={iconClass} />;
};

const getPlatformColor = (title: string) => {
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes('github')) return 'from-gray-700 to-gray-900';
  if (lowerTitle.includes('linkedin')) return 'from-blue-600 to-blue-800';
  if (lowerTitle.includes('twitter')) return 'from-sky-400 to-sky-600';
  if (lowerTitle.includes('email')) return 'from-rose-500 to-pink-600';
  if (lowerTitle.includes('instagram')) return 'from-pink-500 to-purple-600';
  if (lowerTitle.includes('youtube')) return 'from-red-500 to-red-700';
  if (lowerTitle.includes('codepen')) return 'from-gray-800 to-gray-900';
  return 'from-indigo-500 to-purple-600';
};

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <section className="max-w-6xl mx-auto flex flex-col w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full">
            Get In Touch
          </span>
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-transparent">
            Let&apos;s Work Together
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Feel free to reach out through any platform below or send me a direct message.
          </motion.p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/5">
            <div className="relative group mb-12">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-all duration-700"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-xl">
                <Image loading="lazy" 
                  src={"/assets/images/profile-pic-removebg-preview.png"} 
                  alt="Profile Picture" 
                  width={300}
                  height={300}
                  unoptimized
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">
              <div className="mb-8">
                <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  Send Me a Message
                </motion.h2>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-gray-600 dark:text-gray-300">
                  Hey there! I&apos;m always excited to connect with like-minded people. Whether you have a project in mind, want to discuss potential opportunities, or just want to say hi, feel free to reach out. I&apos;ll do my best to get back to you as soon as possible!
                </motion.p>
              </div>
              <MessageForm />
            </div>
          </div>
        </motion.div>
        <div className="space-y-6">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
            <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></span>
            Connect With Me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {socialMediaLinks.map((link, index) => {
              const platformColor = getPlatformColor(link.title);
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1*index,staggerChildren: 0.2,stiffness: 100 }}
                  viewport={{amount:0.1,once:true}}
                  className={`group relative overflow-hidden p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 w-full`}
                >
                  <Link href={link.url} target="_blank" rel="noopener noreferrer">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                      <div className={`absolute inset-0 bg-gradient-to-br ${platformColor} opacity-0 group-hover:opacity-50`}></div>
                    </div>
                    <div className="relative z-10 flex items-center">
                      <div className={`flex-shrink-0 p-2.5 rounded-lg bg-gradient-to-br ${platformColor} text-white`}>
                        {getIcon(link.title)}
                      </div>
                      <div className="ml-4 flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {link.title}
                          </h3>
                          <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-mono truncate">
                          {new URL(link.url).hostname.replace('www.', '')}
                        </p>
                      </div>
                    </div>
                  </Link> 
                </motion.div>
              );
            })}
          </div>
          <div className="flex flex-col justify-center items-center flex-wrap gap-2 p-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-10 flex items-center">
              <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></span>
              Resumes
            </h3>
            <div className="flex flex-row justify-center items-center flex-wrap gap-2 p-2">
              {
                resumes.map((resume,index)=>{
                  const resumeUrl = resume.url;
                  return (
                    <Dialog
                      key={index}
                      title={
                        <div className="flex items-center gap-2 overflow-y-scroll">
                          <FileText className="w-5 h-5 text-blue-500" />
                          {resume.title}
                        </div>
                      }
                      description={
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Download className="w-4 h-4" />
                          <span>Click the download button to save a copy</span>
                        </div>
                      }
                      trigger={
                        <div 
                          className="group flex flex-col items-center justify-center gap-2 h-32 w-full p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition-colors cursor-pointer"
                        >
                          <FileText className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-colors" />
                          <span className="text-sm font-medium">{resume.title}</span>
                          <span className="text-xs text-gray-400">Click to view</span>
                        </div>
                      }
                    >
                      <div className="relative w-full h-[80vh] bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                        <div className="absolute top-0 left-0 right-0 bg-white dark:bg-gray-800 px-4 py-2 flex justify-between items-center border-b border-gray-200 dark:border-gray-700 z-10">
                          <span className="text-sm font-medium">{resume.title}</span>
                          <div className="flex items-center gap-2">
                            <Link
                              href={resumeUrl} 
                              download={`${resume.title.replace(/\s+/g, '_')}.pdf`}
                              className="p-2 text-gray-500 hover:text-blue-500 transition-colors"
                              title="Download PDF"
                            >
                              <Download className="w-5 h-5" />
                            </Link>
                            <Link 
                              href={resumeUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-2 text-gray-500 hover:text-blue-500 transition-colors"
                              title="Open in new tab"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </Link>
                          </div>
                        </div>
                        <iframe 
                          src={`${resumeUrl}#view=fitH`} 
                          className="w-full h-full pt-12"
                          title={`${resume.title} PDF`}
                        />
                      </div>
                    </Dialog>
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