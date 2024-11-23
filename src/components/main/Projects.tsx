"use client"
import { GradualSpacing } from '@/components/main/GradualSpacingDemo'
import { Project, Status } from '../../../utils/types'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import {motion} from "framer-motion"
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
    <section className='flex flex-col justify-center items-center flex-wrap gap-2 p-2'>
        <div className='flex flex-row justify-evenly items-center flex-wrap p-2'>
            <GradualSpacing text="Here are some of my projects"/>
            <input type='text' placeholder='search' value={searchTerm} onChange={handleSearch} className="flex h-9 w-[clamp(300px,75%,450px)] rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"/>
        </div>
        <div className='flex flex-row justify-center items-center flex-wrap gap-4 p-1'>
            {
                filteredProject.map((project,index) => {
                    const isFound = project.title.toLowerCase().includes(searchTerm.toLowerCase());
                    return (
                        <motion.div initial={{y:isFound?0:-50,opacity:isFound?1:0}} transition={{duration:.25}} animate={{y:isFound?0:-50,opacity:isFound?1:0}} className={`relative flex flex-col justify-evenly items-center gap-2 p-4 py-5 rounded-sm shadow-sm ${theme === 'dark'?'border-slate-700':'border-slate-300'} shadow-slate-500 border-[.5px] w-[clamp(300px,30%,350px)] h-[500px]`} key={index}>
                            <BorderBeam delay={index*1}/>
                            <h3 className='text-2xl text-start font-bold'>{project.title}</h3>
                            <p className='text-sm text-start opacity-75'>{project.description.slice(0,30)}...</p>
                            <div>
                                <Swiper
                                    effect={'coverflow'}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={'auto'}
                                    coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                    }}
                                    pagination={true}
                                    modules={[EffectCoverflow, Pagination]}
                                    className="w-auto h-auto flex flex-row justify-center items-center"
                                >
                                {
                                    project.images && project.images.map((item,index)=>{
                                        return (
                                            <SwiperSlide
                                                className='w-auto h-auto flex justify-center items-center'
                                                key={index}
                                            >
                                                <Image
                                                    src={item}
                                                    width={300}
                                                    height={200}
                                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl aspect-square object-center"
                                                    alt="thumbnail"
                                                />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                                </Swiper>
                            </div>
                            <div className='flex flex-col justify-between items-center gap-1'>
                                <AnimatedTooltipPreview items={project.technologies.map((i,idx)=>{
                                    return {
                                        id: idx,
                                        image:project.icons[idx],
                                        designation:"",
                                        name:i
                                    }
                                })}/>
                                <button onClick={() => router.push(`/projects/${project.title}`)} className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                                    <span className="absolute inset-0 overflow-hidden rounded-full">
                                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    </span>
                                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                                        <span className='text-xl'>
                                            View project
                                        </span>
                                        <svg
                                            fill="none"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.75 8.75L14.25 12L10.75 15.25"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </div>
                                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                                </button>
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
