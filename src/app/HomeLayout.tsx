"use client"
import localFont from "next/font/local";
import { useEffect } from "react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { Toaster } from "@/components/ui/toaster";
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
                    <Navbar/>
                    <Toaster/>
                    {children}
                    <Footer/>
                </ThemeProvider>
            </body>
        </html>
    )
}
