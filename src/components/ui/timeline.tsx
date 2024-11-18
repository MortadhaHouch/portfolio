"use client";
import { Item } from "@radix-ui/react-dropdown-menu";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { TracingBeam } from "../main/TracingBeam";

interface TimelineEntry {
    title: string;
    description: string;
    badge: string;
    image: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const titleSpanRefs = useRef<HTMLSpanElement[]>([]);
    const descriptionSpanRefs = useRef<HTMLSpanElement[]>([]);
    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
            ref={containerRef}
        >
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-center items-center pt-10 md:pt-40 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>
                            <h3 className="hidden md:block text-2xl font-bold text-neutral-500 dark:text-neutral-500 pl-5">
                                {item.badge}
                            </h3>
                        </div>
                        <h2 
                            className="text-2xl md:text-4xl font-bold p-13 relative ml-13"
                        >
                            <motion.span
                                className="absolute w-full h-full top-0 left-0 bg-primary"
                                initial={{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}
                                whileInView={{
                                    clipPath:"polygon(0 0, 0 0, 0 100%, 0% 100%)",
                                }}
                                viewport={{
                                    margin:"-100px"
                                }}
                                ref={(r)=>{
                                    if(r){
                                        titleSpanRefs.current.push(r);
                                    }
                                }}
                                transition={{
                                    duration:1.5,
                                    ease:"easeInOut",
                                    type:"spring"
                                }}
                            >
                            </motion.span>
                            {item.title}
                        </h2>
                        <p 
                            className="w-[clamp(300px,100%,600px)] p-13 relative ml-13"
                        >
                            <motion.span
                                className="absolute w-full h-full top-0 left-0 bg-primary"
                                initial={{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}
                                whileInView={{
                                    clipPath:"polygon(0 0, 0 0, 0 100%, 0% 100%)",
                                }}
                                transition={{
                                    duration:1.5,
                                    ease:"easeInOut",
                                    type:"spring"
                                }}
                                viewport={{
                                    margin:"-100px"
                                }}
                                ref={(r)=>{
                                    if(r){
                                        descriptionSpanRefs.current.push(r);
                                    }
                                }}></motion.span>
                        {item.description}</p>
                        <Image src={item.image} alt="blog thumbnail" height="450" width="450" className="rounded-lg mb-10 object-cover w-[clamp(300px,100%,600px)] h-[clamp(300px,100%,600px)] pointer-events-none}"/>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                <motion.div
                    style={{
                        height: heightTransform,
                        opacity: opacityTransform,
                    }}
                    className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                />
                </div>
            </div>
            </div>
    );
};
