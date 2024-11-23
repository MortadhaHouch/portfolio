"use client"
import { useParams } from 'next/navigation'
import {notFound} from "next/navigation"
import { Project as ProjectType, Status } from '../../../../utils/types';
import { projects } from '../../../../utils/constants';
import {motion} from "framer-motion"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { A11y, Autoplay, EffectCoverflow, Pagination, Parallax, Scrollbar } from 'swiper/modules';
import {Swiper,SwiperSlide} from "swiper/react"
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import { AnimatedTooltipPreview } from '@/components/main/AnimatedTooltipPreview';
export default function Project() {
  const params = useParams();
  const formattedParams = params.name.toString().split("%20").join(" ");
  const foundProject:ProjectType|undefined = projects.find((project)=>{return project.title.toLowerCase().includes(formattedParams.toLowerCase())});
  if(foundProject){
    return (
      <main className='w-screen min-h-[100vh] flex flex-col justify-start items-center p-2 pt-28 relative'>
        <motion.div className="w-auto relative flex flex-col justify-start items-center gap-2 p-4 py-5 rounded-sm shadow-sm shadow-slate-500">
        <h3 className='text-2xl text-start font-bold'>{foundProject.title}</h3>
        <p className='text-lg text-start'>{foundProject.description}</p>
        <ul className='w-full list-none flex flex-col justify-start items-start gap-2 p-2'>
          {foundProject.features.map((feature,index) => {
            return (
              <motion.li initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:.25*index,delay:.1*index}} viewport={{margin:"-100px"}} key={index} className='text-sm w-full opacity-75 flex flex-row justify-start items-center gap-2 hover:gap-4'><IoIosArrowForward size={20}/><span>{feature}</span></motion.li>
            )
          })}
        </ul>
        <div className='flex justify-center items-center w-[clamp(350px,450px,550px)] h-[400px]'>
          <Swiper
            scrollbar={{draggable: false}}
            effect="coverflow"
            modules={[Pagination,Parallax,Scrollbar,A11y,Autoplay,EffectCoverflow]}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{clickable:true,dynamicBullets:true}}
            style={{width:"100%",height:"400px"}}
            grabCursor={true}
            autoplay={{
              delay:3000,
              disableOnInteraction:false,
            }}
            className='flex justify-center items-center w-[clamp(350px,450px,550px)] h-[400px]'
          >
        {
          foundProject.images && foundProject.images.map((item,index)=>{
            return (
              <SwiperSlide
                className=' w-[clamp(300px,450px,550px)] h-[clamp(250px,350px,auto)] flex flex-row justify-center items-center'
                key={index}
              >
                <Image
                  src={item}
                  height={300}
                  width={500}
                  className="object-contain rounded-xl group-hover/card:shadow-xl aspect-[5/4] object-center"
                  alt="thumbnail"
                />
              </SwiperSlide>
            )
          })
        }
        </Swiper>
        </div>
        <AnimatedTooltipPreview items={foundProject.technologies.map((tech,idx)=>{
          return {
            id: idx,
            image:foundProject.icons[idx],
            designation:"",
            name:tech
          }
        })}/>
        <div className='flex flex-row justify-center items-center gap-2 flex-wrap'>
          {
            foundProject.urls.map((url,idx)=>{
              return (
                <button key={idx} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <Link href={url} className='flex flex-row justify-center items-center gap-1 p-1'>see {url.includes("-client")||url.includes("-frontend") && url.includes("-client")||url.includes("-frontend")?"frontend":"backend"} code on github</Link>
                </button>
              )
            })
          }
        </div>
        <p className={`px-2 py-1 rounded-sm absolute bottom-0 right-0 rounded-t-none rounded-r-none rounded-bl-none rounded-br-sm rounded-tl-sm ${foundProject.status === Status.DONE?"bg-green-600":'bg-yellow-600'}`}>{foundProject.status.toString().split("_").join(" ")}</p>
      </motion.div>
      <button className='py-2 px-4 bg-primary rounded-md'><Link href={'/projects'} target='_blank'>Go back to projects</Link></button>
      </main>
    )
  }else{
    return notFound();
  }
}
