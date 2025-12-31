"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 px-6 py-4",
        isScrolled ? "glass border-b" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-10 w-10 gold-gradient flex items-center justify-center rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500">
             <span className="text-black font-serif font-bold text-lg -rotate-45 group-hover:-rotate-90 transition-transform duration-500">S</span>
          </div>
          <span className="text-xl font-serif font-semibold tracking-wider text-primary">
            SHARIAH<span className="text-white">COMPLIANCE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted"
              )}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 top-full w-full glass border-b p-6 md:hidden flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-lg font-medium",
                pathname === item.href ? "text-primary" : "text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
