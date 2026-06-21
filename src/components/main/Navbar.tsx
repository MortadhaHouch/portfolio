"use client";
import {
  Navbar as NavbarComponent,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Briefcase, CircleUserRound, Info, MonitorCog } from "lucide-react";

export default function Navbar() {
  const navItems = [
    {
      name: "About",
      link: "/about",
      icon:Info
    },
    {
      name: "Projects",
      link: "/projects",
      icon:Briefcase
    },
    {
      name: "Contact",
      link: "/contact",
      icon:CircleUserRound
    },
    {
      name: "Services",
      link: "/services",
      icon:MonitorCog
    }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="relative w-full">
      <NavbarComponent>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary" className="p-0 dark:text-neutral-300 dark:hover:text-neutral-300">
              <ModeToggle className="p-2 dark:text-neutral-300 dark:hover:text-neutral-300 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700" />
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full justify-center items-center p-0"
              >
                <ModeToggle className="bg-transparent border-none w-full h-full p-2" />
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </NavbarComponent>

      {/* Navbar */}
    </div>
  );
}