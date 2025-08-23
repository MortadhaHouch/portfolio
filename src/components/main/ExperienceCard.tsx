"use client"
import { Experience } from "../../../utils/types";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge"; 
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { Building, GlobeIcon } from "lucide-react";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      className="w-full"
    >
      <Card className="w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex justify-between items-start gap-4">
            <div>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                {experience.position}
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 dark:text-gray-300 mt-1">
                {experience.company}
              </CardDescription>
            </div>
            <Badge variant="outline" className="text-sm font-medium px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
              {experience.startDate} - {experience.endDate}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {experience.description && (
            <p className="text-gray-700 dark:text-gray-300">
              {experience.description}
            </p>
          )}
          
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">Key Responsibilities:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-400">
              {experience.tasks.map((task, index) => (
                <li key={index} className="text-sm">{task}</li>
              ))}
            </ul>
          </div>
          
          {experience.technologies && experience.technologies.length > 0 && (
            <div className="pt-2">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                <AnimatedTooltip 
                    items={experience.technologies.map((tech,index)=>({id:index,name:"",designation:"tech",image:tech}))}
                />
              </div>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="border-t flex flex-col justify-between items-start gap-2 border-gray-200 dark:border-gray-800 pt-4">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center">
              <GlobeIcon className="w-4 h-4 mr-1.5" />
              {experience.location}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Building className="w-4 h-4 mr-1.5" />
            <span>{experience.company}</span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
