"use client";

import React from "react";
import { CheckCircle2, ChevronRight, ShieldCheck, Star } from "lucide-react";
import Navbar from "@/components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#0C1B33]">
      <Navbar activePage="home" />

      <section className="relative overflow-hidden border-b border-[#E8DFD3] bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.12),_transparent_30%),linear-gradient(180deg,#FFFDF9_0%,#F7F1E8_100%)]">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-orange-200 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
                <ShieldCheck className="h-4 w-4" />
                Leaving Cert HL Maths
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Raise your child’s grade with exam method,
                <span className="block text-orange-500">not more stress.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5F6470] sm:text-xl">
                Cheze Grinds helps students stop blanking on long questions and start scoring consistently using a clear system built for the marking scheme.
              </p>

              <p className="mt-4 text-sm font-semibold text-[#6B7280]">
                1,000 plus Irish students taught
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/easter-crash-course"
                  className="inline-flex h-12 items-center rounded-2xl bg-[#0C1B33] px-7 text-base font-bold text-white hover:bg-[#16284A] transition-colors"
                >
                  Join the Easter Course
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="/one-to-one"
                  className="inline-flex h-12 items-center rounded-2xl border border-[#E8DFD3] bg-[#FFFDF9] px-7 text-base font-bold text-[#0C1B33] hover:bg-[#F0E9DC] transition-colors shadow-sm"
                >
                  Apply for 1 to 1 Support
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <Pill>Clear weekly structure</Pill>
                <Pill>Exam question method</Pill>
                <Pill>Confidence under pressure</Pill>
                <Pill>Support between sessions</Pill>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="rounded-[28px] border border-[#E8DFD3] bg-[#FFFDF9]/95 shadow-xl shadow-[#DCCFBD]/50 p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-2xl border border-[#E8DFD3] bg-[#F7F1E8]">
                    <img src="/assets/chisom-4x5.png" alt="Chisom" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-lg font-black tracking-tight">Chisom</p>
                    <p className="text-sm text-[#5F6470]">Cheze Grinds</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <MiniPoint>Built for Leaving Cert HL Maths</MiniPoint>
                  <MiniPoint>Focus on exam performance and method marks</MiniPoint>
                  <MiniPoint>Premium support for parents and students</MiniPoint>
                </div>

                <div className="mt-6 rounded-2xl bg-[#0C1B33] p-5 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">Quick start</p>
                  <p className="mt-3 text-base leading-7 text-slate-100">
                    The fastest way in is the Easter Online Crash Course.
                  </p>
                  <a
                    href="/easter-crash-course"
                    className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-2xl bg-orange-500 text-sm font-bold text-white hover:bg-orange-600 transition-colors"
                  >
                    View the Easter Course
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-orange-500">The problem</p>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Most students do the work but still lose marks.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Card title="Blanking in the exam" text="They understand in class but go blank when it is just them and the paper." />
          <Card title="Starting long questions" text="They do not know how to begin, so they panic and waste time." />
          <Card title="No grade movement" text="They do exam questions but do not improve because the method is not clear." />
          <Card title="Pressure and mistakes" text="Pressure causes silly errors and lost method marks." />
        </div>
      </section>

      <section className="border-t border-[#E8DFD3] bg-[#FFFDF9]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-orange-500">How it works</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">A simple system that translates to marks.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <StepCard title="Start questions correctly" text="Know what they are asking and how to begin without guessing." />
            <StepCard title="Choose the right method fast" text="Recognise question types and pick the method that earns marks." />
            <StepCard title="Write for method marks" text="Clear steps that the examiner can award marks for under pressure." />
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8DFD3] bg-[#F7F1E8]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-orange-500">Proof</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Results speak for themselves.</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-[24px] border border-[#E8DFD3] bg-white shadow-sm">
                <img src={`/assets/testimonials/review-${i + 1}.png`} alt={`Review ${i + 1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/easter-crash-course"
              className="inline-flex h-12 items-center rounded-2xl bg-[#0C1B33] px-7 text-base font-bold text-white hover:bg-[#16284A] transition-colors"
            >
              Join the Easter Course
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E8DFD3] bg-[#FFFDF9]">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#5F6470]">Cheze Grinds</p>
            <p className="text-sm text-[#9BA3B0]">Leaving Cert HL Maths</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#E8DFD3] bg-[#FFFDF9] px-4 py-3 text-sm font-semibold text-[#3C4658] shadow-sm">
      {children}
    </div>
  );
}

function MiniPoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
      <p className="text-base leading-7 text-[#3C4658]">{children}</p>
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[24px] border border-[#E8DFD3] bg-[#FFFDF9] p-6 shadow-sm">
      <p className="text-base font-black leading-snug text-[#0C1B33]">{title}</p>
      <p className="mt-3 text-sm leading-7 text-[#5F6470]">{text}</p>
    </div>
  );
}

function StepCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[28px] border border-[#E8DFD3] bg-[#FFFDF9] p-7 shadow-sm">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#F3E8D7] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#9A5B12]">
        <Star className="h-3.5 w-3.5" />
        Step
      </div>
      <p className="text-xl font-black tracking-tight">{title}</p>
      <p className="mt-3 text-sm leading-7 text-[#5F6470]">{text}</p>
    </div>
  );
}
