"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  // Update height on mount and when content changes
  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    };
    
    // Initial height
    updateHeight();
    
    // Update on window resize
    window.addEventListener('resize', updateHeight);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateHeight);
  }, [children]); // Re-run when children change

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <div className={cn("relative w-full max-w-6xl mx-auto", className)}>
      {/* Decorative elements with pointer-events-none to prevent blocking interactions */}
      <div className="absolute -left-4 md:-left-20 top-3 pointer-events-none z-10">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "white" : "var(--emerald-500)",
              borderColor:
                scrollYProgress.get() > 0 ? "white" : "var(--emerald-600)",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${Math.max(svgHeight, 100)}`}
          width="20"
          height={svgHeight || '100%'}
          className="ml-4 block"
          aria-hidden="true"
          style={{ minHeight: '100%' }}
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${(svgHeight || 100) * 0.8} l -18 24V ${svgHeight || 100}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${(svgHeight || 100) * 0.8} l -18 24V ${svgHeight || 100}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="rgb(34,197,94)" stopOpacity="0" />
              <stop stopColor="rgb(34,197,94)" />
              <stop offset="0.325" stopColor="rgb(34,197,94)" />
              <stop offset="1" stopColor="rgb(34,197,94)" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Content with proper z-index and event handling */}
      <div 
        ref={contentRef} 
        className="relative z-20 w-full"
        style={{
          // Ensure content is above the decorative elements
          position: 'relative',
          // Prevent the content from being squished by the absolute positioned elements
          marginLeft: '2.5rem', // ml-10 equivalent
          width: 'calc(100% - 2.5rem)'
        }}
      >
        {children}
      </div>
    </div>
  );
};
