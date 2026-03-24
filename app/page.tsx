"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <Navbar activePage="home" />

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-slate-500">Cheze Grinds</p>
              <h1 className="mt-4 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
                Learning is not the problem.
                <span className="block">Exam performance is.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Cheze Grinds is built for not only learning maths, but building learning and study systems with the focus of boosting exam performance.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="/services"
                  className="inline-flex h-12 items-center rounded-lg bg-[#111827] px-7 text-base font-bold text-white hover:bg-black transition-colors"
                >
                  View our services
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="/one-to-one"
                  className="inline-flex h-12 items-center rounded-lg border border-black/10 bg-white px-7 text-base font-bold text-[#111827] hover:bg-slate-50 transition-colors"
                >
                  1 to 1 starts at 110 per month
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                <Stat value="2 to 3" label="grade average increase" />
                <Stat value="1,000+" label="Irish students taught" />
                <Stat value="79" label="academy members" />
              </div>
            </div>

            <div className="lg:pl-10">
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-slate-50">
                <img src="/assets/chisom-4x5.png" alt="Chisom" className="h-full w-full object-cover" />
              </div>
              <p className="mt-4 text-sm text-slate-600">Chisom, Founder of Cheze Grinds</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
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
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-slate-500">Social proof</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Results speak for themselves.</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                <img src={`/assets/testimonials/review-${i + 1}.png`} alt={`Review ${i + 1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <p className="text-sm text-slate-600">Cheze Grinds</p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5">
      <p className="text-3xl font-black tracking-tight">{value}</p>
      <p className="mt-2 text-sm font-semibold text-slate-600">{label}</p>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-7">
      <p className="text-xl font-black tracking-tight">{title}</p>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}
