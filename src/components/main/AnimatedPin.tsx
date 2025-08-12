"use client";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";
import { motion } from "framer-motion";
import Dialog from "./Dialog";
import { Eye, Code, Star } from "lucide-react";
import { Badge } from "../ui/badge";

export function AnimatedPin({ title, url, description,proficiency,category }: { title: string; url?: string; description: string,proficiency?: 'beginner' | 'intermediate' | 'advanced',category?: 'frontend' | 'backend' | 'database' | 'devops' | 'testing' | 'ui-ux' | 'mobile' | 'data-science' | 'architecture' | 'other' }) {
  const getProfiencyStyle = (p:'beginner' | 'intermediate' | 'advanced') =>{
    switch (p) {
      case "beginner":
        return "bg-blue-500"
        break;
      case "intermediate":
        return "bg-green-500"
        break;
      case "advanced":
        return "bg-red-500"
        break;
      default:
        break;
    }
  }
  return (
    <motion.div 
      className="w-full h-full flex items-center justify-center z-30 p-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        margin: "-50px",
        once: true
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }}
    >
      <PinContainer
        title={title}
        href="#"
        className="w-full h-full"
      >
        <div className="flex flex-col justify-between items-center p-3 h-full w-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors duration-300 relative">
          <Badge className={`${getProfiencyStyle(proficiency)} text-white -top-3 -right-3 absolute`}>
            {proficiency}
          </Badge>
          <div className="text-center">
            <h3 className="text-base font-bold text-slate-700 mb-1 line-clamp-1 dark:text-gray-300">
              {title}
            </h3>
            <p className="text-xs line-clamp-2 min-h-[2rem] dark:text-gray-300">
              {description}
            </p>
          </div>
          
          {url && (
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0 my-1">
              <Image loading="lazy" 
                src={url} 
                fill
                className="object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105" 
                alt={title}
                priority={false}
              />
            </div>
          )}
          
          <div className="w-full flex justify-center mt-2">
            <Dialog
              title={title}
              description={description}
              className="flex flex-col items-center gap-6"
              trigger={
                <span className="inline-flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  <Eye className="h-3.5 w-3.5" />
                  View details
                </span>
              }
            >
              <div className="relative w-full h-48 sm:h-56 md:h-64 bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden">
                {url && (
                  <Image loading="lazy" 
                    src={url}
                    fill
                    className="object-contain p-4"
                    alt={title}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={false}
                  />
                )}
              </div>
              
              <div className="w-full space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    <span>{proficiency}</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Code className="h-3 w-3 text-blue-500" />
                    <span>{category}</span>
                  </Badge>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {description}
                </p>
              </div>
            </Dialog>
          </div>
        </div>
      </PinContainer>
    </motion.div>
  );
}
