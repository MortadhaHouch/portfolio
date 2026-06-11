"use client"

import * as React from "react"
import { ComputerIcon, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle({
  className,
}:{
  className?: string
}) {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className={className}>
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-1">
        <DropdownMenuItem onClick={() => setTheme("light")} className="flex justify-start items-center gap-2">
          <Sun className="mr-2 h-4 w-4" /><span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="flex justify-start items-center gap-2">
          <Moon className="mr-2 h-4 w-4" /><span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="flex justify-start items-center gap-2">
          <ComputerIcon className="mr-2 h-4 w-4" /><span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
