"use client";

import React from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Navbar from "@/components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#0C1B33]">
      <Navbar activePage="home" />

      <section className="border-b border-[#E8DFD3]">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold tracking-wide text-orange-600">Leaving Cert HL Maths</p>

              <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Calm, clear progress in Higher Level Maths
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5F6470]">
                Cheze Grinds helps students perform on exam questions with a clear system built for the marking scheme.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/easter-crash-course"
                  className="inline-flex h-12 items-center rounded-xl bg-[#0C1B33] px-6 text-base font-bold text-white hover:bg-[#16284A] transition-colors"
                >
                  Join the Easter Course
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="/one-to-one"
                  className="inline-flex h-12 items-center rounded-xl border border-[#0C1B33]/15 bg-white px-6 text-base font-bold text-[#0C1B33] hover:bg-[#F7F1E8] transition-colors"
                >
                  Apply for 1 to 1 Support
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <Tick>Clear weekly structure</Tick>
                <Tick>Exam question method</Tick>
                <Tick>Confidence under pressure</Tick>
                <Tick>Support between sessions</Tick>
              </div>

              <p className="mt-8 text-sm font-semibold text-[#6B7280]">1,000 plus Irish students taught</p>
            </div>

            <div>
              <div className="overflow-hidden rounded-2xl border border-[#E8DFD3] bg-white">
                <img src="/assets/chisom-4x5.png" alt="Chisom" className="h-full w-full object-cover" />
              </div>
              <p className="mt-4 text-sm text-[#5F6470]">Chisom, Cheze Grinds</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight">What we help students fix</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Block title="Starting long questions" text="Students learn how to begin calmly and correctly, instead of guessing." />
            <Block title="Applying methods to exam questions" text="We focus on question types and marking scheme structure, not theory alone." />
            <Block title="Method marks" text="Clear steps that earn marks even under pressure." />
            <Block title="Consistency" text="A simple plan that makes improvement predictable week to week." />
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8DFD3] bg-[#F7F1E8]">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-sm font-bold tracking-wide text-orange-600">Testimonials</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">Results speak for themselves</h2>
            </div>
            <a
              href="/easter-crash-course"
              className="inline-flex h-11 items-center rounded-xl bg-[#0C1B33] px-5 text-sm font-bold text-white hover:bg-[#16284A] transition-colors"
            >
              View the Easter Course
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-[#E8DFD3] bg-white">
                <img src={`/assets/testimonials/review-${i + 1}.png`} alt={`Review ${i + 1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E8DFD3]">
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
          <p className="text-sm text-[#5F6470]">Cheze Grinds</p>
        </div>
      </footer>
    </div>
  );
}

function Tick({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
      <p className="text-base leading-7 text-[#3C4658]">{children}</p>
    </div>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-[#E8DFD3] bg-white p-7">
      <p className="text-lg font-black tracking-tight">{title}</p>
      <p className="mt-3 text-sm leading-7 text-[#5F6470]">{text}</p>
    </div>
  );
}
