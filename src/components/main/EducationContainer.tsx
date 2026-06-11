"use client"
import { useRef } from 'react';
import { TimelineEntry } from '../ui/timeline'
import { GraduationCap } from 'lucide-react'
import {motion} from "framer-motion"
export default function EducationContainer({
    entry
}:{
    entry:TimelineEntry
}) {
    const isEducation = String(entry.badge || "").toLowerCase().includes("educ");
    const headerCoverRef = useRef<HTMLSpanElement>(null);
    const contentCoverRef = useRef<HTMLSpanElement>(null);
    const imgCoverRef = useRef<HTMLSpanElement>(null);
  return (
    <div className="flex flex-col justify-center items-start pt-10 md:pt-20 md:gap-10 w-full max-w-4xl mx-auto">
        <div className="relative w-full flex items-start gap-6">
            {/* timeline marker */}
            <div className="absolute left-2 md:left-8 top-8 md:top-10">
                <div className="h-10 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
                </div>
            </div>

            {/* content card */}
            <div className="ml-14 md:ml-20 w-full">
                <div className={"relative p-6 md:p-8 rounded-2xl border bg-gradient-to-br transition-shadow duration-200 " + (isEducation ? "from-white/60 via-sky-50 to-sky-100 dark:from-neutral-900/50 dark:via-neutral-900/40 dark:to-neutral-900/30 border-blue-200 dark:border-blue-900 shadow-md hover:shadow-xl" : "bg-popover border-muted")}>
                    <div className="flex items-center justify-between gap-4 relative">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 p-2 rounded-full">
                                <GraduationCap className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">{entry.title}</h3>
                                <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{entry.badge}</div>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center text-xs text-neutral-500">
                            {/* placeholder for date or small meta */}
                            {isEducation ? <span className="px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600">Education</span> : null}
                        </div>
                        <motion.span whileInView={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }} initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }} viewport={{ once: true }} transition={{ duration: 0.5 }} ref={headerCoverRef} className="absolute top-0 right-0 w-full h-full bg-blue-500 dark:bg-blue-700 rounded-md" />
                    </div>

                    <motion.div className="mt-4 text-md md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed relative">
                        {entry.description}
                        <motion.span whileInView={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }} initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }} viewport={{ once: true }} transition={{ duration: 0.5 }} ref={contentCoverRef} className="absolute top-0 right-0 w-full h-full bg-blue-500 dark:bg-blue-700 rounded-md" />
                    </motion.div>

                    {entry.component && (
                        <motion.div className="mt-4 w-full relative">
                            {entry.component}
                            <motion.span whileInView={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }} initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }} viewport={{ once: true }} transition={{ duration: 0.5 }} ref={imgCoverRef} className="absolute top-0 right-0 w-full h-full bg-blue-500 dark:bg-blue-700 rounded-md" />
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}
