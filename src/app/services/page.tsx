'use client'
import { Meteor } from "@/components/main/Meteor";
import { ThreeDCard } from "@/components/main/ThreeDCard";
import { ShineBorder } from "@/components/main/ShineBorder";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { ComputerIcon, LucideProps, PenTool, Server, Smartphone, Sparkles, Zap } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes, useRef } from "react";

const SpecialtyCard = ({ 
  specialty,
  delay = 0,
}: { 
  specialty: Specialty; 
  delay?: number;
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay + 0.2
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-[300px] sm:w-[300px] lg:w-[400px] cursor-pointer"
    >
      <motion.div
        whileHover="hover"
        variants={hoverVariants}
        className="h-full"
      >
        <ShineBorder>
          <div className="relative flex flex-col justify-between items-center gap-4 p-6 rounded-xl h-full min-h-96 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-sky-500/5 dark:from-blue-500/10 dark:to-sky-500/10 group-hover:from-blue-500/10 group-hover:to-sky-500/15 dark:group-hover:from-blue-500/15 dark:group-hover:to-sky-500/20 transition-all duration-300 rounded-lg" />
            
            {/* Icon */}
            <motion.div 
              className="relative z-10"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-sky-500/20 dark:from-blue-400/30 dark:to-sky-400/30 group-hover:from-blue-500/30 group-hover:to-sky-500/30 transition-all duration-300">
                <specialty.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </motion.div>

            {/* Title */}
            <div className="relative z-10 text-center">
              <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-400 dark:to-sky-400 capitalize group-hover:from-blue-500 group-hover:to-sky-400 transition-all duration-300">
                {specialty.stack}
              </h3>
            </div>

            {/* Description */}
            <motion.p 
              className="relative z-10 text-sm sm:text-base text-center text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3"
              whileHover={{ opacity: 1 }}
            >
              {specialty.description}
            </motion.p>

            {/* Technologies badges */}
            <div className="relative z-10 flex flex-wrap gap-2 justify-center items-center">
              {specialty.technologies.slice(0, 3).map((tech: string, idx: number) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: delay + 0.3 + idx * 0.1 }}
                  className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-500/10 dark:bg-blue-400/20 text-blue-700 dark:text-blue-300 border border-blue-500/20 dark:border-blue-400/30 group-hover:bg-blue-500/20 dark:group-hover:bg-blue-400/30 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
              {specialty.technologies.length > 3 && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: delay + 0.5 }}
                  className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-500/10 dark:bg-gray-400/20 text-gray-700 dark:text-gray-300 border border-gray-500/20 dark:border-gray-400/30"
                >
                  +{specialty.technologies.length - 3} more
                </motion.span>
              )}
            </div>

            {/* 3D Card Image */}
            <motion.div
              variants={imageVariants}
              className="relative z-10 w-full mt-2"
            >
              <ThreeDCard images={specialty.images} />
            </motion.div>
          </div>
        </ShineBorder>
      </motion.div>
    </motion.div>
  );
};

export default function page() {
  return (
    <main className='w-full min-h-screen flex flex-col items-center justify-center gap-12 pt-20 pb-12 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-sky-100 dark:from-gray-900 dark:via-slate-950 dark:to-slate-900 overflow-hidden'>
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-7xl mx-auto text-center space-y-4"
      >
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-400/20 border border-blue-500/20 dark:border-blue-400/30"
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Technical Expertise</span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 dark:from-blue-400 dark:via-sky-300 dark:to-blue-300">
            Services & Specialties
          </span>
        </h1>

        <motion.p 
          className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I offer comprehensive technical solutions across the full development stack, combining creative design with robust backend architecture to deliver exceptional results.
        </motion.p>
      </motion.div>

      {/* Technical Specialties Section */}
      <section className="w-full max-w-7xl mx-auto gap-8 pt-12">
        <motion.div 
          className="max-w-7xl flex flex-col justify-center items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-500/20 dark:border-gray-400/30 shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Core Specialties
            </h2>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-sky-500" />
          <div className="w-full flex flex-row flex-wrap justify-center items-center gap-6">
            {
              developmentSpecialties.map((specialty: Specialty, idx: number) => (
                <SpecialtyCard
                  key={idx}
                  specialty={specialty}
                />
              ))
            }
          </div>
        </motion.div>

      </section>

      {/* Tools & Design Section */}
      <section className="w-full max-w-7xl mx-auto gap-8 border-t border-gray-500 dark:border-gray-300 pt-12">
        <motion.div 
          className="max-w-7xl flex flex-col justify-center items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-500/20 dark:border-gray-400/30 shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Tools & Design
            </h2>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-sky-600 to-blue-500" />
          <div className="w-full flex flex-row flex-wrap justify-center items-center gap-6">
            {
              tools.map((specialty: Specialty, idx: number) => (
                <SpecialtyCard
                  key={idx}
                  specialty={specialty}
                  delay={idx * 0.1}
                />
              ))
            }
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="w-full max-w-4xl mx-auto mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="relative p-8 rounded-2xl border border-blue-500/20 dark:border-blue-400/30 bg-gradient-to-br from-blue-500/5 via-transparent to-sky-500/5 dark:from-blue-500/10 dark:via-gray-900 dark:to-sky-500/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10 text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Ready to bring your project to life?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Let&apos;s collaborate to create something exceptional. Get in touch today.
            </p>
            <motion.a 
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold hover:from-blue-700 hover:to-sky-600 transition-all duration-300 mt-4"
            >
              Get in Touch
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                →
              </motion.span>
            </motion.a>
          </div>
        </div>
      </motion.section>

      <Meteor />
    </main>
  )
}
const specialties:Specialty[] = [
  {
    stack:"frontend",
    technologies:["HTML", "CSS","bootstrap","tailwind","Javascript","typescript","react","next.js"],
    images:[
      "/assets/tech/specialties/html.webp",
      "/assets/tech/specialties/css.png",
      "/assets/tech/specialties/js.webp",
      "/assets/tech/specialties/tailwind.webp",
      "/assets/tech/specialties/ts.webp",
      "/assets/tech/specialties/react.png",
    ],
    description:"I bring ideas to life with stunning, responsive designs powered by React, Next.js, Tailwind CSS, and Bootstrap. From sleek websites to dynamic apps, I deliver interfaces that captivate and engage users across all devices.",
    icon: ComputerIcon
  },
  {
    stack:"backend",
    technologies:["Javascript","typescript","nodejs","express","fastify","springBoot","mysql","mongodb","mongoose","prisma","postgres"],
    images:[
      "/assets/tech/specialties/spring.webp",
      "/assets/tech/specialties/sql.webp",
      "/assets/tech/specialties/nodejs.png",
      "/assets/tech/specialties/mysql.webp",
      "/assets/tech/specialties/api-programming.png",
      "/assets/tech/specialties/fullstack.jpg"
    ],
    description:"Building fast, secure, and scalable backends is my forte. Using Node.js, Express, Fastify, and Prisma, I design APIs and databases that ensure your application runs smoothly, even under heavy demands.",
    icon:Server
  },
  {
    stack:"fullstack",
    technologies:["react","nodejs","express","mongodb/mongoose","springBoot","mysql","postgres"],
    images:[
      "/assets/tech/specialties/3988051.webp",
      "/assets/tech/specialties/6454136.webp",
      "/assets/tech/specialties/6454138.webp",
      "/assets/tech/specialties/dev.webp",
      "/assets/tech/specialties/developer.webp",
    ],
    description:"Seamlessly bridging frontend creativity with backend power, I offer end-to-end solutions tailored to your needs. From intuitive UI to secure authentication, I deliver polished, functional, and scalable applications.",
    icon:ComputerIcon
  },
  {
    stack:"mobile",
    technologies:["react native"],
    images:[
      "/assets/tech/specialties/ts.webp",
      "/assets/tech/specialties/react.png",
      "/assets/tech/specialties/mobile.webp",
      "/assets/tech/skills/ionic.png",
    ],
    description:"Reach your audience anywhere with cross-platform mobile apps. With React Native, I develop sleek, intuitive applications that deliver exceptional performance on both iOS and Android.",
    icon: Smartphone
  },
  {
    stack:"ui-ux",
    technologies:["figma","sketch","adobe XD"],
    images:[
      "/assets/tech/specialties/figma.webp",
      "/assets/tech/specialties/xd.webp",
      "/assets/tech/specialties/uxui1.webp",
      "/assets/tech/specialties/uxui2.webp",
      "/assets/tech/specialties/uxui3.webp",
    ],
    description:"I craft user-centric designs that blend beauty with functionality. From intuitive navigation to pixel-perfect layouts, I ensure every interaction feels seamless and engaging, leaving a lasting impression on your users.",
    icon:PenTool
  },
  {
    stack:"devops",
    technologies:["git"],
    images:[
      "/assets/tech/specialties/git.webp",
      "/assets/tech/specialties/vcs1.webp",
      "/assets/tech/specialties/vcs2.webp",
    ],
    description:"I excel in collaborative environments, leveraging Git and platforms like GitHub to streamline workflows. With a strong focus on version control, I ensure seamless teamwork, efficient code integration, and minimal conflicts for faster project delivery.",
    icon:Server
  },
];
const tools = specialties.filter(specialty => ["ui-ux","devops"].includes(specialty.stack));
const developmentSpecialties = specialties.filter(specialty => ["frontend","backend","fullstack","mobile"].includes(specialty.stack));
export type Specialty = {
    stack :"frontend" | "backend" | "fullstack" | "devops" | "testing" | "ui-ux" | "mobile" | "data-science" | "architecture" | "other"
    technologies: string[];
    images: string[];
    description: string;
    icon:ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}