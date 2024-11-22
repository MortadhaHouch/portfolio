"use client"

import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";
import localFont from "next/font/local";
import Lenis from 'lenis'
import { useEffect } from "react";
import { ThemeProvider } from "@/providers/ThemeProvider";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function HomeLayout({children}:{children:React.ReactNode}) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Example easing function
            smoothWheel:true,
            autoResize:true,
            gestureOrientation:"both",
        })
        function raf(time:number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        return () => {
            lenis.destroy()
        }
    }, [])
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange={false}
                >
                    <Header/>
                    {children}
                    <Footer/>
                </ThemeProvider>
            </body>
        </html>
    )
}
