"use client";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { FaHome, FaInfoCircle, FaTasks } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "./Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 fixed top-5 left-auto right-auto w-[clamp(300px,80%,1200px)] rounded-2xl border backdrop-blur-lg z-50">
      <div className="h-full flex flex-row justify-center items-start gap-2">
        <Link href="/home">
          <h1 className="text-lg md:text-3xl font-bold">Portfolio</h1>
        </Link>
      </div>
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col justify-center items-center gap-2 p-2 md:flex md:flex-row md:justify-start md:items-start`}
      >
        <Button className="bg-slate-500 w-full md:w-auto">
          <Link
            href="/home"
            className="flex flex-row justify-center items-center gap-1 p-1"
          >
            <FaHome />
            <span>Home</span>
          </Link>
        </Button>
        <Button className="bg-slate-500 w-full md:w-auto">
          <Link
            href="/about"
            className="flex flex-row justify-center items-center gap-1 p-1"
          >
            <FaInfoCircle />
            <span>About</span>
          </Link>
        </Button>
        <Button className="bg-slate-500 w-full md:w-auto">
          <Link
            href="/projects"
            className="flex flex-row justify-center items-center gap-1 p-1"
          >
            <FaTasks />
            <span>Projects</span>
          </Link>
        </Button>
        <Button className="bg-slate-500 w-full md:w-auto">
          <Link
            href="/services"
            className="flex flex-row justify-center items-center gap-1 p-1"
          >
            <MdDesignServices />
            <span>Services</span>
          </Link>
        </Button>
        <ModeToggle />
      </nav>
    </header>
  );
}