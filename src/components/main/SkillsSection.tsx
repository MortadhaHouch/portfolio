'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { skills } from '../../../utils/constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AnimatedPin = dynamic(
  () => import('./AnimatedPin').then((mod) => mod.AnimatedPin),
  { ssr: false, loading: () => <div className="w-full h-32 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse"></div> }
);

// Group skills by category
const groupSkillsByCategory = () => {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);
};

// Format category name for display
const formatCategoryName = (category: string) => {
  return category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function SkillsSection() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    frontend: true,
    backend: true,
    database: true,
    devops: false,
    testing: false,
    'ui-ux': false,
    mobile: false,
    'data-science': false,
    architecture: false,
    other: false,
  });

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const skillsByCategory = groupSkillsByCategory();
  const categoryOrder = [
    'frontend',
    'backend',
    'database',
    'devops',
    'mobile',
    'data-science',
    'testing',
    'ui-ux',
    'architecture',
    'other'
  ];

  return (
    <section className="w-full flex flex-col items-center py-8 px-4 sm:px-6 relative z-10">
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'>
        Skills & Technologies
      </h2>
      
      <div className="w-full max-w-6xl mx-auto space-y-4 relative z-10">
        {categoryOrder.map((category) => {
          const categorySkills = skillsByCategory[category];
          if (!categorySkills) return null;
          
          const isExpanded = expandedCategories[category];
          const Icon = isExpanded ? ChevronUp : ChevronDown;
          
          return (
            <div 
              key={category} 
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-blue-500/30 transition-colors"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCategory(category);
                }}
                className="w-full flex items-center justify-between px-4 py-3 text-left text-lg font-medium text-gray-900 dark:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                  <span className="text-gray-900 dark:text-white">
                    {formatCategoryName(category)}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                    ({categorySkills.length})
                  </span>
                </span>
                <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
              </button>
              
              {isExpanded && (
                <div className="p-4 pt-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                  {categorySkills.map((skill, index) => (
                    <div key={`${category}-${index}`} className="relative z-10">
                      <AnimatedPin
                        url={skill.image}
                        title={skill.title}
                        description={skill.description}
                        proficiency={skill.proficiency}
                        category={skill.category}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <style jsx global>{`
        .proficiency-beginner {
          opacity: 0.7;
        }
        .proficiency-intermediate {
          opacity: 0.85;
        }
        .proficiency-advanced {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
