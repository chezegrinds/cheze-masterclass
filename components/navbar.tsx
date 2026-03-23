"use client";

import React, { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

export type ActivePage = "home" | "academy" | "crash-course" | "one-to-one";

export default function Navbar({ activePage }: { activePage: ActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (isActive: boolean) =>
    `rounded-xl px-4 py-2 text-sm font-bold transition-colors ${
      isActive ? "bg-[#111827] text-white" : "text-slate-700 hover:bg-white/60 hover:text-[#111827]"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#FAF7F0]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <a href="/" className="flex items-center gap-3 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-[#F1EBDC] bg-[#0C1B33] shadow-sm">
            <img src="/cheze-logo.png" alt="Cheze Grinds" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-black tracking-tight text-[#0C1B33] leading-none">Cheze Grinds</p>
            <p className="text-xs text-[#9BA3B0] leading-none mt-0.5">Leaving Cert HL Maths</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          <a href="/" className={linkClass(activePage === "home")}>Home</a>
          <a href="/easter-crash-course" className={linkClass(activePage === "crash-course")}>Easter Course</a>
          <a href="/academy" className={linkClass(activePage === "academy")}>Academy</a>
          <a href="/one-to-one" className={linkClass(activePage === "one-to-one")}>1 to 1</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/easter-crash-course"
            className="inline-flex h-9 items-center rounded-xl bg-[#111827] px-4 text-sm font-bold text-white hover:bg-black transition-colors"
          >
            Join Easter Course
            <ChevronRight className="ml-1 h-3.5 w-3.5" />
          </a>
        </div>

        <button
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-[#E8DFD3] bg-[#F7F1E8] text-[#0C1B33]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#E8DFD3] bg-[#FFFDF9] px-6 py-4 space-y-2">
          <a href="/" className={linkClass(activePage === "home")} onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/easter-crash-course" className={linkClass(activePage === "crash-course")} onClick={() => setMenuOpen(false)}>Easter Course</a>
          <a href="/academy" className={linkClass(activePage === "academy")} onClick={() => setMenuOpen(false)}>Academy</a>
          <a href="/one-to-one" className={linkClass(activePage === "one-to-one")} onClick={() => setMenuOpen(false)}>1 to 1</a>
          <a
            href="/easter-crash-course"
            className="block rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white text-center hover:bg-orange-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Join Easter Course
          </a>
        </div>
      )}
    </nav>
  );
}
