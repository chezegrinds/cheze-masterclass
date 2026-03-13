"use client";

import React, { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

export default function Navbar({ activePage }: { activePage: "academy" | "crash-course" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#E8DFD3] bg-[#FFFDF9]/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-[#F1EBDC] bg-[#0C1B33] shadow-sm">
            <img src="/cheze-logo.png" alt="Cheze Grinds" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-black tracking-tight text-[#0C1B33] leading-none">Cheze Grinds</p>
            <p className="text-xs text-[#9BA3B0] leading-none mt-0.5">Leaving Cert HL Maths</p>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          <a
            href="/"
            className={`rounded-xl px-4 py-2 text-sm font-bold transition-colors ${
              activePage === "academy"
                ? "bg-[#0C1B33] text-white"
                : "text-[#5F6470] hover:bg-[#F0E9DC] hover:text-[#0C1B33]"
            }`}
          >
            Elite Academy
          </a>
          <a
            href="/easter-crash-course"
            className={`rounded-xl px-4 py-2 text-sm font-bold transition-colors ${
              activePage === "crash-course"
                ? "bg-[#0C1B33] text-white"
                : "text-[#5F6470] hover:bg-[#F0E9DC] hover:text-[#0C1B33]"
            }`}
          >
            Easter Crash Course
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.skool.com/cheze-grinds-academy-8823/about"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-xl bg-orange-500 px-4 text-sm font-bold text-white hover:bg-orange-600 transition-colors"
          >
            Join the Academy
            <ChevronRight className="ml-1 h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-[#E8DFD3] bg-[#F7F1E8] text-[#0C1B33]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#E8DFD3] bg-[#FFFDF9] px-6 py-4 space-y-2">
          <a
            href="/"
            className={`block rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
              activePage === "academy"
                ? "bg-[#0C1B33] text-white"
                : "text-[#3C4658] hover:bg-[#F0E9DC]"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Elite Academy
          </a>
          <a
            href="/easter-crash-course"
            className={`block rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
              activePage === "crash-course"
                ? "bg-[#0C1B33] text-white"
                : "text-[#3C4658] hover:bg-[#F0E9DC]"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Easter Crash Course
          </a>
          <a
            href="https://www.skool.com/cheze-grinds-academy-8823/about"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white text-center hover:bg-orange-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Join the Academy →
          </a>
        </div>
      )}
    </nav>
  );
}
