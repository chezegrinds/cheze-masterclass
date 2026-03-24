"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#102233] text-[#f1eeda]">
      <Navbar activePage="home" />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#f1eeda]/80">Cheze Grinds</p>
            <h1 className="mt-5 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Learning is not the problem.
              <span className="block text-[#7FE2D7]">Exam performance is.</span>
            </h1>
            <p className="mt-8 text-lg leading-8 text-[#f1eeda]/90">
              Cheze Grinds is built for not only learning maths, but building learning and study systems with the focus of boosting exam performance.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/services"
                className="inline-flex h-12 items-center rounded-lg bg-[#0F766E] px-7 text-base font-bold text-[#f1eeda] hover:bg-[#0B5F59] transition-colors"
              >
                View our services
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/one-to-one"
                className="inline-flex h-12 items-center rounded-lg border border-white/15 bg-white/5 px-7 text-base font-bold text-[#f1eeda] hover:bg-white/10 transition-colors"
              >
                1 to 1 starts at 110 per month
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              <Stat value="2 to 3" label="grade average increase" />
              <Stat value="200+" label="students helped directly" />
              <Stat value="600+" label="students helped directly" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-3">
            <Feature title="Study systems" text="We rebuild how students learn, revise, and retain so it transfers to exams." />
            <Feature title="Exam execution" text="We train performance under time pressure so results match the effort." />
            <Feature title="Accountability" text="Clear structure, weekly plan, and support so students stay consistent." />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#f1eeda]/80">Social proof</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Results speak for themselves.</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img src={`/assets/testimonials/review-${i + 1}.png`} alt={`Review ${i + 1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <p className="text-sm text-[#f1eeda]/70">Cheze Grinds</p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-3xl font-black tracking-tight">{value}</p>
      <p className="mt-2 text-sm font-semibold text-[#f1eeda]/80">{label}</p>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
      <p className="text-xl font-black tracking-tight">{title}</p>
      <p className="mt-3 text-sm leading-7 text-[#f1eeda]/90">{text}</p>
    </div>
  );
}
