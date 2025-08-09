"use client"
import { useParams } from 'next/navigation'
import { notFound } from "next/navigation"
import { Project as ProjectType, Status } from '../../../../utils/types';
import { projects } from '../../../../utils/constants';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IoMdCheckmarkCircle } from "react-icons/io";
import { AnimatedTooltipPreview } from '@/components/main/AnimatedTooltipPreview';
import Image from 'next/image';
import Link from 'next/link';

export default function Project() {
  const params = useParams();
  const formattedParams = params.name.toString().split("%20").join(" ");
  const foundProject:ProjectType|undefined = projects.find((project)=>{return project.title.toLowerCase().includes(formattedParams.toLowerCase())});
  
  if(foundProject){
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <main className='w-full min-h-screen flex flex-col items-center p-4 pt-32 pb-16 relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl mx-auto relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
      >
        {/* Project Header */}
        <div className="p-8 pb-0">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {foundProject.title}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {foundProject.description}
          </motion.p>
        </div>

        {/* Project Gallery */}
        <motion.div 
          className="w-full h-[400px] md:h-[500px] relative overflow-hidden bg-gray-100 dark:bg-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Swiper
            effect="coverflow"
            modules={[Pagination, EffectCoverflow, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            className="w-full h-full"
          >
            {foundProject.images.map((image, idx) => (
              <SwiperSlide key={idx} className="flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={image}
                    alt={`${foundProject.title} screenshot ${idx + 1}`}
                    fill
                    className="object-contain"
                    priority={idx < 3}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Project Content */}
        <div className="p-8 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Features */}
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Key Features</h3>
              <motion.ul className="space-y-3">
                {foundProject.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    variants={item}
                    className="flex items-start space-x-3 p-4 bg-gray-600 dark:bg-gray-750 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <IoMdCheckmarkCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Technologies Used</h3>
              <div className="mb-8">
                <AnimatedTooltipPreview 
                  items={foundProject.technologies.map((tech, idx) => ({
                    id: idx,
                    image: foundProject.icons[idx],
                    name: tech,
                    designation: ""
                  }))} 
                />
              </div>

              {/* Project Links */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Project Links</h3>
                <div className="flex flex-wrap gap-3">
                  {foundProject.urls.map((url, idx) => {
                    const isGithub = url.includes('github.com');
                    const label = isGithub 
                      ? url.includes('-client') || url.includes('-frontend') 
                        ? 'Frontend Code' 
                        : 'Backend Code'
                      : 'Live Demo';
                    
                    return (
                      <motion.a
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                          isGithub 
                            ? 'bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600'
                            : 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600'
                        }`}
                        whileHover={{ y: -2, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isGithub ? <FaGithub /> : <FaExternalLinkAlt />}
                        {label}
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <motion.div 
          className={`absolute top-6 right-6 px-4 py-2 rounded-full text-sm font-medium ${
            foundProject.status === Status.DONE 
              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {foundProject.status.toString().split('_').join(' ')}
        </motion.div>

        {/* Back Button */}
        <motion.div 
          className="absolute -bottom-14 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <svg 
              className="w-5 h-5 transform rotate-180" 
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
            Back to Projects
          </Link>
        </motion.div>
      </motion.div>
    </main>
    )
  }else{
    return notFound();
  }
}
