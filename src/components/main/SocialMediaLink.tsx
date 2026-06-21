"use client"
import {motion} from "framer-motion"
import Link from "next/link"
import { 
  // Social Media Icons
  Github, 
  Linkedin, 
  Twitter as XIcon,
  Mail as MailIcon,
  Instagram, 
  Youtube as YoutubeIcon,
  Globe as GlobeIcon,
  ExternalLink,
  FileText,
} from 'lucide-react';
const getIcon = (title: string) => {
    const iconClass = "w-5 h-5";
    const titleLower = title.toLowerCase();
    
    // Social Media Icons
    if (titleLower.includes('github')) return <Github className={iconClass} />;
    if (titleLower.includes('linkedin')) return <Linkedin className={iconClass} />;
    if (titleLower.includes('twitter') || titleLower.includes('x.com')) return <XIcon className={iconClass} />;
    if (titleLower.includes('mail') || titleLower.includes('email') || titleLower.includes('gmail')) return <MailIcon className={iconClass} />;
    if (titleLower.includes('instagram')) return <Instagram className={iconClass} />;
    if (titleLower.includes('youtube')) return <YoutubeIcon className={iconClass} />;
    
    // Development & Coding Platforms
    if (titleLower.includes('codepen')) return <FileText className={iconClass} />;
    if (titleLower.includes('gitlab')) return <Github className={iconClass} />;
    if (titleLower.includes('bitbucket') || titleLower.includes('bit')) return <ExternalLink className={iconClass} />;
    if (titleLower.includes('git')) return <Github className={iconClass} />;
    if (titleLower.includes('code') || titleLower.includes('dev')) return <FileText className={iconClass} />;
    
    // Communication
    if (titleLower.includes('message') || titleLower.includes('chat')) return <MailIcon className={iconClass} />;
    if (titleLower.includes('send') || titleLower.includes('submit')) return <ExternalLink className={iconClass} />;
    if (titleLower.includes('contact') || titleLower.includes('@')) return <MailIcon className={iconClass} />;
    if (titleLower.includes('link')) return <ExternalLink className={iconClass} />;
    
    // Default icon for any other cases
    return <GlobeIcon className={iconClass} />;
};

const getPlatformColor = (title: string) => {
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes('github')) return 'from-gray-700 to-gray-900';
    if (lowerTitle.includes('linkedin')) return 'from-blue-600 to-blue-800';
    if (lowerTitle.includes('twitter')) return 'from-sky-400 to-sky-600';
    if (lowerTitle.includes('email')) return 'from-rose-500 to-pink-600';
    if (lowerTitle.includes('instagram')) return 'from-pink-500 to-sky-500';
    if (lowerTitle.includes('youtube')) return 'from-red-500 to-red-700';
    if (lowerTitle.includes('codepen')) return 'from-gray-800 to-gray-900';
    return 'from-blue-500 to-sky-500';
};
export const SocialMediaLink = ({
    title,
    url,
    index
}:{
    title: string,
    url: string,
    index: number
}) => {
    const platformColor = getPlatformColor(title);
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{opacity: 1,x: 0 }}
            transition={{ duration: 0.1*index,staggerChildren: 0.2,stiffness: 100 }}
            viewport={{amount:0.1,once:true}}
            className={`group relative overflow-hidden p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 w-full`}
        >
            <Link href={url} target="_blank" rel="noopener noreferrer">
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${platformColor} opacity-0 group-hover:opacity-50`}></div>
            </div>
            <div className="relative z-10 flex items-center">
                <div className={`flex-shrink-0 p-2.5 rounded-lg bg-gradient-to-br ${platformColor} text-white`}>
                {getIcon(title)}
                </div>
                <div className="ml-4 flex-1 min-w-0">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {title}
                    </h3>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-mono truncate">
                    {new URL(url).hostname.replace('www.', '')}
                </p>
                </div>
            </div>
            </Link> 
        </motion.div>
    )
}