"use client";

import React from "react";
import { CheckCircle2, ChevronRight, ShieldCheck } from "lucide-react";
import Navbar from "@/components/navbar";

export default function OneToOnePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#111827]">
      <Navbar activePage="one-to-one" />

      <section className="relative overflow-hidden border-b border-black/10 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.12),_transparent_30%),linear-gradient(180deg,#FFFDF9_0%,#F7F1E8_100%)]">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-orange-200 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-[#0F766E]">
                <ShieldCheck className="h-4 w-4" />
                1 to 1 Support
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Personal support for Leaving Cert HL Maths
                <span className="block text-[#0F766E]">with a clear weekly plan.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                1 to 1 support for all ages and levels.
              </p>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Junior Cycle and Leaving Cert. Higher level and ordinary level.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://form.typeform.com/to/Clemi1KP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center rounded-2xl bg-[#0C1B33] px-7 text-base font-bold text-white hover:bg-[#16284A] transition-colors"
                >
                  Apply now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <Point>Monthly package</Point>
                <Point>Weekly structure</Point>
                <Point>Exam technique focus</Point>
                <Point>Matched to the right tutor</Point>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="rounded-[28px] border border-black/10 bg-white/60/95 shadow-xl shadow-[#DCCFBD]/50 p-7 sm:p-8">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0F766E]">How it works</p>
                <p className="mt-3 text-3xl font-black tracking-tight">Apply for support</p>
                <p className="mt-2 text-sm text-slate-600">We match you with the right tutor and confirm availability.</p>
                <p className="mt-2 text-sm text-slate-600">Pricing is shared after application.</p>
                <p className="mt-2 text-sm text-slate-600">Payment plans available.</p>

                <div className="mt-6 space-y-3">
                  <Bullet>Parent friendly onboarding on WhatsApp</Bullet>
                  <Bullet>Fixed weekly slot once scheduled</Bullet>
                  <Bullet>Clear focus topic each week</Bullet>
                </div>

                <a
                  href="https://form.typeform.com/to/Clemi1KP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-[#111827] text-base font-bold text-white hover:bg-black transition-colors"
                >
                  Apply for 1 to 1
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

function Point({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm font-semibold text-[#3C4658] shadow-sm">
      {children}
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0F766E]" />
      <p className="text-base leading-7 text-[#3C4658]">{children}</p>
    </div>
  );
}
