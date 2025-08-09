"use client"
import { GradualSpacing } from '@/components/main/GradualSpacingDemo'
import { Project, Status } from '../../../utils/types'
import Image from 'next/image'
import { useState, ChangeEvent } from 'react'
import { motion } from "framer-motion"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import {Swiper,SwiperSlide} from "swiper/react"
import { BorderBeam } from '../ui/border-beam'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { AnimatedTooltipPreview } from './AnimatedTooltipPreview'
export default function Projects({projects}:{projects:Project[]}) {
    const [filteredProject,setFilteredProject] = useState<Project[]>(projects)
    const [searchTerm,setSearchTerm] = useState<string>("");
    const {theme} = useTheme();
    const router = useRouter();
    function handleSearch(e:ChangeEvent<HTMLInputElement>){
        e.preventDefault();
        setSearchTerm(e.target.value);
        if(searchTerm.length > 0){
            setSearchTerm((val:string)=>{
                setFilteredProject(()=>projects.filter(p=>p.title.toLowerCase().includes(searchTerm.toLowerCase())))
                return val;
            })
        }else{
            setFilteredProject(projects);
        }
    }
    return (
    <section className='flex flex-col justify-center items-center flex-wrap gap-6 p-4 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='w-full max-w-4xl mx-auto text-center mb-8'
        >
            <GradualSpacing text="Here are some of my projects"/>
            <motion.div 
              className='mt-6 max-w-2xl mx-auto'
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <input 
                type='text' 
                placeholder='Search projects...' 
                value={searchTerm} 
                onChange={handleSearch} 
                className="flex h-12 w-full rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-1 text-base shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 dark:placeholder-gray-500"
              />
            </motion.div>
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full max-w-7xl mx-auto'>
            {
                filteredProject.map((project,index) => {
                    const isFound = project.title.toLowerCase().includes(searchTerm.toLowerCase());
                    return (
                        <motion.div 
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: isFound ? 0 : -30, opacity: isFound ? 1 : 0 }}
                          transition={{ 
                            duration: 0.5,
                            delay: index * 0.1,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                          whileHover={{ 
                            y: -10,
                            boxShadow: theme === 'dark' 
                              ? '0 20px 40px -10px rgba(0, 0, 0, 0.5)' 
                              : '0 20px 40px -10px rgba(0, 0, 0, 0.1)'
                          }}
                          className={`relative group flex flex-col justify-between items-center gap-4 p-6 rounded-xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden w-full h-[550px]`} 
                          key={index}
                        >
                            <BorderBeam delay={index*1}/>
                            <h3 className='text-2xl text-start font-bold'>{project.title}</h3>
                            <p className='text-sm text-start opacity-75'>{project.description.slice(0,30)}...</p>
                            <motion.div 
                              className="w-full h-60 rounded-lg overflow-hidden relative group"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.3 }}
                            >
                                <Swiper
                                    effect={'coverflow'}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={'auto'}
                                    coverflowEffect={{
                                        rotate: 5,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 2,
                                        slideShadows: true,
                                    }}
                                    pagination={{
                                        clickable: true,
                                        dynamicBullets: true,
                                    }}
                                    modules={[EffectCoverflow, Pagination]}
                                    className="w-full h-full"
                                >
                                {project.images && project.images.length > 0 ? (
                                    project.images.map((item, imgIndex) => (
                                        <SwiperSlide
                                            className="w-full h-full flex justify-center items-center"
                                            key={imgIndex}
                                        >
                                            <motion.div 
                                                className="w-full h-full relative"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <Image
                                                    src={item}
                                                    fill
                                                    className="object-cover rounded-lg group-hover:shadow-xl transition-all duration-300"
                                                    alt={`${project.title} screenshot ${imgIndex + 1}`}
                                                    priority={index < 3}
                                                />
                                            </motion.div>
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    <div className="w-full h-full bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                                        <span className="text-gray-400">No preview available</span>
                                    </div>
                                )}
                                </Swiper>
                            </motion.div>
                            <div className='w-full mt-4'>
                                <motion.div 
                                    className="flex flex-wrap justify-center gap-2 mb-4"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <AnimatedTooltipPreview items={project.technologies.map((tech, idx) => ({
                                        id: idx,
                                        image: project.icons[idx] || '',
                                        name: tech,
                                        designation: ""
                                    }))} />
                                </motion.div>
                                <motion.button 
                                    onClick={() => router.push(`/projects/${project.title}`)}
                                    className="relative w-full group overflow-hidden px-6 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:from-blue-700 hover:to-blue-600"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        View Project
                                        <svg 
                                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24" 
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M14 5l7 7m0 0l-7 7m7-7H3" 
                                            />
                                        </svg>
                                    </span>
                                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                                </motion.button>
                            </div>
                            <p className={`px-2 py-1 rounded-sm absolute bottom-0 right-0 rounded-t-none rounded-r-none rounded-bl-none rounded-br-sm rounded-tl-sm ${project.status === Status.DONE?"bg-green-600":'bg-yellow-600'}`}>{project.status.toString().split("_").join(" ")}</p>
                        </motion.div>
                    )
                })
            }
        </div>
    </section>
  )
}
