"use client";

import React, { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

export type ActivePage = "home" | "services" | "academy" | "crash-course" | "one-to-one";

export default function Navbar({ activePage }: { activePage: ActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const linkBase = "rounded-lg px-4 py-2 text-sm font-bold transition-colors";
  const linkInactive = "text-[#f1eeda]/90 hover:bg-white/5";
  const linkActive = "bg-white/10 text-[#f1eeda]";

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#102233]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <a href="/" className="flex items-center gap-3 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5">
            <img src="/cheze-logo.png" alt="Cheze Grinds" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-black tracking-tight text-[#f1eeda] leading-none">Cheze Grinds</p>
            <p className="text-xs text-[#f1eeda]/70 leading-none mt-0.5">Maths grinds and exam performance</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          <a href="/" className={`${linkBase} ${activePage === "home" ? linkActive : linkInactive}`}>Home</a>

          <div className="relative">
            <button
              type="button"
              className={`${linkBase} ${activePage === "services" || activePage === "academy" || activePage === "one-to-one" ? linkActive : linkInactive}`}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Our Services
            </button>

            {servicesOpen && (
              <div className="absolute left-0 mt-2 w-56 overflow-hidden rounded-xl border border-white/10 bg-[#0B1220] shadow-xl">
                <a
                  href="/services"
                  className="block px-4 py-3 text-sm font-bold text-[#f1eeda] hover:bg-white/5"
                  onClick={() => setServicesOpen(false)}
                >
                  Overview
                </a>
                <a
                  href="/academy"
                  className="block px-4 py-3 text-sm font-bold text-[#f1eeda] hover:bg-white/5"
                  onClick={() => setServicesOpen(false)}
                >
                  Weekly Academy
                </a>
                <a
                  href="/one-to-one"
                  className="block px-4 py-3 text-sm font-bold text-[#f1eeda] hover:bg-white/5"
                  onClick={() => setServicesOpen(false)}
                >
                  1 to 1 Support
                </a>
              </div>
            )}
          </div>

          <a href="/easter-crash-course" className={`${linkBase} ${activePage === "crash-course" ? linkActive : linkInactive}`}>Easter Course</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/one-to-one"
            className="inline-flex h-9 items-center rounded-lg bg-[#0F766E] px-4 text-sm font-bold text-[#f1eeda] hover:bg-[#0B5F59] transition-colors"
          >
            Apply for 1 to 1
            <ChevronRight className="ml-1 h-3.5 w-3.5" />
          </a>
        </div>

        <button
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#f1eeda]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#102233] px-6 py-4 space-y-2">
          <a href="/" className="block rounded-lg px-4 py-3 text-sm font-bold text-[#f1eeda] hover:bg-white/5" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/services" className="block rounded-lg px-4 py-3 text-sm font-bold text-[#f1eeda] hover:bg-white/5" onClick={() => setMenuOpen(false)}>Our Services</a>
          <a href="/academy" className="block rounded-lg px-4 py-3 text-sm font-bold text-[#f1eeda] hover:bg-white/5" onClick={() => setMenuOpen(false)}>Weekly Academy</a>
          <a href="/one-to-one" className="block rounded-lg px-4 py-3 text-sm font-bold text-[#f1eeda] hover:bg-white/5" onClick={() => setMenuOpen(false)}>1 to 1 Support</a>
          <a href="/easter-crash-course" className="block rounded-lg px-4 py-3 text-sm font-bold text-[#f1eeda] hover:bg-white/5" onClick={() => setMenuOpen(false)}>Easter Course</a>
        </div>
      )}
    </nav>
  );
}
