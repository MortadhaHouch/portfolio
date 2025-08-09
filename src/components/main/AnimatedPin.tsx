"use client";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image"
import {motion} from "framer-motion"
export function AnimatedPin({title,url,description}:{title:string,url?:string,description:string}) {
  return (
    <motion.div 
      className="h-[400px] w-[400px] flex items-center justify-center z-30"
      initial={{x:-100,opacity:0}}
      whileInView={{x:0,opacity:1}}
      viewport={{
        margin:"-50px",
        once:false
      }}
      transition={{
        duration:1,
        type:"spring"
      }}
    >
      <PinContainer
        title={title}
        href="#"
      >
        <div
          className="flex basis-full flex-col justify-center items-center p-4 tracking-tight text-slate-100/50 sm:basis-1/2 min-w-[20rem] max-w-[40rem] aspect-square">
          <h3 className={`max-w-xs !pb-2 !m-0 font-bold text-base`}>
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {description.length>30?description.slice(0,30)+"...":description}
            </span>
          </div>
          {
            url &&(
              <Image src={url} width={200} height={200} className="object-cover mix-blend-color-burn aspect-square rounded-md" alt={title}/>
            )
          }
        </div>
      </PinContainer>
    </motion.div>
  );
}
