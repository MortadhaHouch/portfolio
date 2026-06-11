import { Contact, GithubIcon, HomeIcon, Info, LightbulbIcon, Puzzle } from "lucide-react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-8 w-full overflow-hidden pt-16 pb-8">
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
        <div className="absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>
      </div>
      <div className="glass relative mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-2xl px-6 py-10 md:flex-row justify-evenly">
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="mb-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-700 text-2xl font-extrabold text-white shadow-md">
              <LightbulbIcon className="h-5 w-5" />
            </span>
            <span className="bg-gradient-to-br from-blue-200 to-blue-500 bg-clip-text text-xl font-semibold tracking-tight text-transparent">
              Mortadha Houch
            </span>
          </a>
          <p className="text-foreground mb-6 max-w-xs text-center text-sm md:text-left">
            Portfolio of Mortadha Houch, a Full Stack Software Developer specializing in
            modern web technologies.
          </p>
          <div className="mt-2 flex gap-3 text-blue-400">
            <a
              href="https://github.com/MortadhaHouch"
              aria-label="GitHub"
              className="hover:text-foreground transition"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mortadha-houch/"
              aria-label="LinkedIn"
              className="hover:text-foreground transition"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <nav className="flex w-full flex-col justify-center items-center gap-9 text-center md:text-left">
          <div>
            <h3>
              <span className="bg-gradient-to-br from-blue-200 to-blue-500 bg-clip-text text-lg font-semibold tracking-tight text-transparent mb-4">Quick Links</span>
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start gap-1 text-sm">
                <span className="mr-1 w-6 h-6 text-foreground/70 bg-gradient-to-br from-blue-400 to-blue-700 rounded-full shadow-blue-500/50 hover:shadow-lg flex items-center justify-center" >
                  <HomeIcon className="h-4 w-4 text-foreground/70" />
                </span>
                <Link href="/" className="text-foreground/70">
                  Home
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-1 text-sm">
                <span className="mr-1 w-6 h-6 text-foreground/70 bg-gradient-to-br from-blue-400 to-blue-700 rounded-full shadow-blue-500/50 hover:shadow-lg flex items-center justify-center" >
                  <Contact className="h-4 w-4 text-foreground/70" />
                </span>
                <Link href="/contact" className="text-foreground/70">
                  Contact
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-1 text-sm">
                <span className="mr-1 w-6 h-6 text-foreground/70 bg-gradient-to-br from-blue-400 to-blue-700 rounded-full shadow-blue-500/50 hover:shadow-lg flex items-center justify-center" >
                  <Info className="h-4 w-4 text-foreground/70" />
                </span>
                <Link href="/about" className="text-foreground/70">
                  About
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-1 text-sm">
                <span className="mr-1 w-6 h-6 text-foreground/70 bg-gradient-to-br from-blue-400 to-blue-700 rounded-full shadow-blue-500/50 hover:shadow-lg flex items-center justify-center" >
                  <Puzzle className="h-4 w-4 text-foreground/70" />
                </span>
                <Link href="/services" className="text-foreground/70">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="text-foreground relative z-10 mt-10 text-center text-xs">
        <span>&copy; {new Date().getFullYear()} Mortadha Houch</span>
      </div>
    </footer>
  );
}
