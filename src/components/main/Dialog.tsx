import { DialogTrigger, Dialog as DialogRoot, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface DialogProps {
  title: React.ReactNode;
  description: React.ReactNode;
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function Dialog({
  title,
  description,
  trigger,
  children,
  className = ""
}: DialogProps) {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-xs h-7 px-2 gap-1.5">
          {trigger}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="p-0"
        >
          <DialogHeader className="px-6 pt-6 pb-4 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {title}
                </DialogTitle>
                {description && (
                  <DialogDescription className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {description}
                  </DialogDescription>
                )}
              </div>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </DialogTrigger>
            </div>
          </DialogHeader>
          
          <div className={`p-6 ${className}`}>
            {children}
          </div>
          
          <DialogFooter className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <DialogTrigger asChild>
              <Button type="button">
                Close
              </Button>
            </DialogTrigger>
          </DialogFooter>
        </motion.div>
      </DialogContent>
    </DialogRoot>
  );
}
