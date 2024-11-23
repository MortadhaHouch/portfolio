"use client"

import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import AnimationData from "../../public/assets/animations/Animation - loading.json"
import dynamic from "next/dynamic";
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
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export default function HomeLayout({children}:{children:React.ReactNode}) {
    const [isSeen,setIsSeen] = useState<boolean>(false);
    useEffect(() => {
        import('lenis').then(({ default: Lenis }) => {
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
                autoResize: true,
                gestureOrientation: "both",
            });
        
            function raf(time: number) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
        
            requestAnimationFrame(raf);
        
            return () => lenis.destroy();
        });
    }, []);
    useEffect(()=>{
        setIsSeen(true);
        setTimeout(()=>{
            setIsSeen(false);
        },2500)
    },[])
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
                    {
                        isSeen && (
                            <section
                                style={{
                                    clipPath:`${isSeen?"circle(100% at 50% 50%)":"circle(0% at 50% 50%)"}`,
                                    transition:"clip-path .25s"
                                }}
                                className="fixed top-0 left-0 w-screen h-screen z-[60] bg-slate-600 flex justify-center items-center">
                                <Lottie animationData={AnimationData}/>
                            </section>
                        )
                    }
                    {children}
                    <Footer/>
                </ThemeProvider>
            </body>
        </html>
    )
}
