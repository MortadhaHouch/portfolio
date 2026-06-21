'use client';
import { cn } from '@/lib/utils';
import { Code2, Zap } from 'lucide-react';
import { useState } from 'react';
import { Skill } from '../../../utils/types';
import Image from 'next/image';
export default function SkillCard({
  title,
  description,
  image,
  proficiency
}: Skill) {
  const [isFlipped, setIsFlipped] = useState(false);
  const getProficiencyClassName = (p:"beginner" | "intermediate" | "advanced") => {
    switch (p) {
      case "beginner":
        return "bg-blue-500 border-blue-500/20 dark:border-blue-400/30"
      case "intermediate":
        return "bg-green-500 border-green-500/20 dark:border-green-400/30"
      case "advanced":
        return "bg-red-500 border-red-500/20 dark:border-red-400/30"
      default:
        return ""
    }
  }
  return (
    <div
      className="group relative h-[300px] w-full max-w-[300px] [perspective:2000px] flex flex-col items-center justify-center gap-4"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          'relative h-full w-full',
          '[transform-style:preserve-3d]',
          'transition-all duration-700',
          isFlipped
            ? '[transform:rotateY(180deg)]'
            : '[transform:rotateY(0deg)]',
        )}
      >
        {/* Front of card */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(0deg)] [backface-visibility:hidden]',
            'overflow-hidden rounded-2xl',
            'bg-gradient-to-br from-white via-slate-50 to-slate-100',
            'dark:from-zinc-900 dark:via-zinc-900/95 dark:to-zinc-800',
            'border border-slate-200 dark:border-zinc-800/50',
            'shadow-lg dark:shadow-xl',
            'transition-all duration-700',
            'group-hover:shadow-xl dark:group-hover:shadow-2xl',
            'group-hover:border-primary/20 dark:group-hover:border-primary/30',
            'group-hover:scale-[1.03] group-hover:-translate-y-1',
            "flex flex-col items-center justify-center",
            isFlipped ? 'opacity-0' : 'opacity-100',
          )}
        >
          <span className={cn("text-sm font-semibold text-white uppercase tracking-widest absolute top-4 left-4 p-1 rounded-md", getProficiencyClassName(proficiency))}>{proficiency}</span>
          <div className="from-primary/5 dark:from-primary/10 absolute inset-0 bg-gradient-to-br via-transparent to-blue-500/5 dark:to-blue-500/10" />

          {/* Animated code blocks */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex h-[100px] w-[200px] flex-col items-center justify-center gap-2">
              {/* Code blocks animation */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    'h-3 w-full rounded-sm',
                    'from-primary/20 via-primary/30 to-primary/20 bg-gradient-to-r',
                    'animate-[slideIn_2s_ease-in-out_infinite]',
                    'opacity-0',
                  )}
                  style={{
                    width: `${60 + Math.random() * 40}%`,
                    animationDelay: `${i * 0.2}s`,
                    marginLeft: `${Math.random() * 20}%`,
                  }}
                />
              ))}

              {/* Central rocket icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={cn(
                    'min-h-[100px] min-w-[100px] rounded-xl',
                    'from-slate-300 via-slate-200 to-slate-100 dark:from-blue-950 dark:to-blue-900 bg-gradient-to-br',
                    'flex items-center justify-center',
                    'shadow-primary/25 shadow-lg',
                    'animate-pulse',
                    'transition-all duration-500 group-hover:scale-110 group-hover:rotate-12',
                    "p-2"
                  )}
                >
                  <Image src={image} width={100} height={100} alt={title} className='rounded-md'/>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom content */}
          <div className="absolute right-0 bottom-0 left-0 p-5">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg leading-snug font-semibold tracking-tight text-zinc-900 transition-all duration-500 ease-out group-hover:translate-y-[-4px] dark:text-white text-center">
                {title}
              </h3>
              <div className="group/icon relative">
                <div
                  className={cn(
                    'absolute inset-[-8px] rounded-lg transition-opacity duration-300',
                    'from-primary/20 via-primary/10 bg-gradient-to-br to-transparent',
                    'opacity-0 group-hover/icon:opacity-100',
                  )}
                />
                <Zap className="text-primary relative z-10 h-5 w-5 transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:rotate-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(180deg)] [backface-visibility:hidden]',
            'rounded-2xl p-5',
            'bg-gradient-to-br from-white via-slate-50 to-slate-100',
            'dark:from-zinc-900 dark:via-zinc-900/95 dark:to-zinc-800',
            'border border-slate-200 dark:border-zinc-800',
            'shadow-lg dark:shadow-xl',
            'flex flex-col',
            'transition-all duration-700',
            'group-hover:shadow-xl dark:group-hover:shadow-2xl',
            'group-hover:border-primary/20 dark:group-hover:border-primary/30',
            !isFlipped ? 'opacity-0' : 'opacity-100',
          )}
        >
          {/* Background gradient */}
          <div className="from-primary/5 dark:from-primary/10 absolute inset-0 rounded-2xl bg-gradient-to-br via-transparent to-blue-500/5 dark:to-blue-500/10" />

          <div className="relative z-10 flex-1 space-y-5">
            <div className="space-y-2">
              <div className="mb-2 flex items-center gap-2">
                <div className="from-primary via-primary/90 to-primary/80 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
                  <Code2 className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg text-center font-semibold tracking-tight text-zinc-900 transition-all duration-500 ease-out group-hover:translate-y-[-2px] dark:text-white">
                  {title}
                </h3>
              </div>
              <p className="line-clamp-2 text-sm tracking-tight text-zinc-600 transition-all duration-500 ease-out group-hover:translate-y-[-2px] dark:text-zinc-400">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}