"use client";

import React from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Navbar from "@/components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#111827]">
      <Navbar activePage="home" />

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0F766E]">Leaving Cert HL Maths</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Structured maths support that parents can trust.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Cheze Grinds helps students stop blanking on long questions and start scoring consistently using a clear system built for the marking scheme.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/easter-crash-course"
                  className="inline-flex h-12 items-center rounded-xl bg-[#111827] px-7 text-base font-bold text-white hover:bg-black transition-colors"
                >
                  Join the Easter Course
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="/one-to-one"
                  className="inline-flex h-12 items-center rounded-xl border border-black/10 bg-transparent px-7 text-base font-bold text-[#111827] hover:bg-white/60 transition-colors"
                >
                  Apply for 1 to 1 Support
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <LineItem>Clear weekly structure</LineItem>
                <LineItem>Exam question method</LineItem>
                <LineItem>Confidence under pressure</LineItem>
                <LineItem>Support between sessions</LineItem>
              </div>

              <p className="mt-10 text-sm font-semibold text-slate-600">1,000 plus Irish students taught</p>
            </div>

            <div className="lg:pl-10">
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-white/60">
                <img src="/assets/chisom-4x5.png" alt="Chisom" className="h-full w-full object-cover" />
              </div>
              <p className="mt-4 text-sm text-slate-600">Chisom. Leaving Cert HL Maths.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0F766E]">The problem</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Most students do the work but still lose marks.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">Parents usually see effort. The missing piece is exam performance.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card title="Blanking in the exam" text="They understand in class but go blank when it is just them and the paper." />
              <Card title="Starting long questions" text="They do not know how to begin, so they panic and waste time." />
              <Card title="No grade movement" text="They do exam questions but do not improve because the method is not clear." />
              <Card title="Pressure and mistakes" text="Pressure causes silly errors and lost method marks." />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white/50">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0F766E]">How it works</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">A simple system that translates to marks.</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Step title="Start questions correctly" text="Know what they are asking and how to begin without guessing." />
            <Step title="Choose the right method fast" text="Recognise question types and pick the method that earns marks." />
            <Step title="Write for method marks" text="Clear steps that the examiner can award marks for under pressure." />
          </div>
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0F766E]">Reviews</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Parents want proof. Here it is.</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                <img src={`/assets/testimonials/review-${i + 1}.png`} alt={`Review ${i + 1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="/easter-crash-course"
              className="inline-flex h-12 items-center rounded-xl bg-[#111827] px-7 text-base font-bold text-white hover:bg-black transition-colors"
            >
              Join the Easter Course
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="/academy"
              className="inline-flex h-12 items-center rounded-xl border border-black/10 bg-transparent px-7 text-base font-bold text-[#111827] hover:bg-white/60 transition-colors"
            >
              View the Academy
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <p className="text-sm text-slate-600">Cheze Grinds. Leaving Cert HL Maths.</p>
        </div>
      </footer>
    </div>
  );
}

function LineItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 border border-black/10 rounded-xl bg-white/60 px-4 py-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0F766E]" />
      <p className="text-sm font-semibold text-slate-700">{children}</p>
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/60 p-6">
      <p className="text-base font-black leading-snug">{title}</p>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function Step({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/60 p-7">
      <p className="text-xl font-black tracking-tight">{title}</p>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}
