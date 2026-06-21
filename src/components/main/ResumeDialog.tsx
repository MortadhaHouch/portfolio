import { 
    Dialog, 
    DialogTrigger,
    DialogContent,
    DialogClose,
    DialogHeader,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogOverlay
} from '../ui/dialog'
import { Button } from '../ui/button'
import { File } from 'lucide-react'
import { ResumeContainer } from './ResumeContainer'

export default function ResumeDialog({
    title,
    url
}:{
    title: string,
    url: string
}) {
  return (
        <Dialog>
            <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="
                            group relative h-auto overflow-hidden rounded-xl
                            border border-slate-200/70 dark:border-slate-700/70
                            bg-white/60 dark:bg-slate-900/60
                            backdrop-blur-md
                            px-4 py-3
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:border-cyan-400/50
                            hover:shadow-lg hover:shadow-cyan-500/10
                        "
                        >
                        {/* Background Glow */}
                        <span className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-cyan-500/20 blur-3xl transition-all duration-500 group-hover:scale-125" />
                        <span className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-indigo-500/20 blur-3xl transition-all duration-500 group-hover:scale-125" />

                        {/* Animated Border */}
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 via-transparent to-indigo-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <div className="relative z-10 flex items-center gap-4">
                            {/* Icon */}
                            <div
                                className="
                                flex h-12 w-12 items-center justify-center
                                rounded-lg
                                bg-gradient-to-br
                                from-cyan-500
                                to-blue-600
                                text-white
                                shadow-md
                                transition-transform duration-300
                                group-hover:scale-110
                                group-hover:rotate-3"
                            >
                                <File className="h-5 w-5" />
                            </div>

                            {/* Text */}
                            <div className="flex flex-col items-start">
                                <span className="text-sm font-semibold tracking-wide">
                                    {title}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    Open document
                                </span>
                            </div>
                        </div>
                        </Button>
            </DialogTrigger>
                <DialogOverlay className="backdrop-blur-md bg-gradient-to-tr from-gray-50 via-blue-50 to-sky-100 dark:bg-gray-900/50 inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none"/>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        <ResumeContainer
                            title={title} 
                            url={url}
                        />
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button>Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

