"use client";

import React from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Navbar from "@/components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#0C1B33]">
      <Navbar activePage="home" />

      <section className="border-b border-[#E8DFD3]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-500">Leaving Cert HL Maths</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Calm, structured maths support
                <span className="block">for parents who want results.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5F6470]">
                Cheze Grinds helps students stop blanking on long questions and start scoring consistently using a clear system built for the marking scheme.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/easter-crash-course"
                  className="inline-flex h-12 items-center rounded-xl bg-[#0C1B33] px-7 text-base font-bold text-white hover:bg-[#16284A] transition-colors"
                >
                  Join the Easter Course
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="/one-to-one"
                  className="inline-flex h-12 items-center rounded-xl border border-[#E8DFD3] bg-white px-7 text-base font-bold text-[#0C1B33] hover:bg-[#F7F1E8] transition-colors"
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

              <p className="mt-10 text-sm font-semibold text-[#6B7280]">1,000 plus Irish students taught</p>
            </div>

            <div className="lg:pl-10">
              <div className="overflow-hidden rounded-2xl border border-[#E8DFD3] bg-[#F7F1E8]">
                <img src="/assets/chisom-4x5.png" alt="Chisom" className="h-full w-full object-cover" />
              </div>
              <p className="mt-4 text-sm text-[#5F6470]">
                Chisom. Leaving Cert HL Maths.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-500">The problem</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Most students do the work but still lose marks.</h2>
              <p className="mt-4 text-base leading-7 text-[#5F6470]">
                Parents usually see effort. The missing piece is exam performance.
              </p>
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

      <section className="border-t border-[#E8DFD3] bg-[#FFFDF9]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-500">How it works</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">A simple system that translates to marks.</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Step title="Start questions correctly" text="Know what they are asking and how to begin without guessing." />
            <Step title="Choose the right method fast" text="Recognise question types and pick the method that earns marks." />
            <Step title="Write for method marks" text="Clear steps that the examiner can award marks for under pressure." />
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8DFD3]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-500">Reviews</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Parents want proof. Here it is.</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-[#E8DFD3] bg-white">
                <img src={`/assets/testimonials/review-${i + 1}.png`} alt={`Review ${i + 1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="/easter-crash-course"
              className="inline-flex h-12 items-center rounded-xl bg-[#0C1B33] px-7 text-base font-bold text-white hover:bg-[#16284A] transition-colors"
            >
              Join the Easter Course
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="/academy"
              className="inline-flex h-12 items-center rounded-xl border border-[#E8DFD3] bg-white px-7 text-base font-bold text-[#0C1B33] hover:bg-[#F7F1E8] transition-colors"
            >
              View the Academy
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E8DFD3] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <p className="text-sm text-[#5F6470]">Cheze Grinds. Leaving Cert HL Maths.</p>
        </div>
      </footer>
    </div>
  );
}

function LineItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 border border-[#E8DFD3] rounded-xl bg-white px-4 py-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
      <p className="text-sm font-semibold text-[#3C4658]">{children}</p>
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-[#E8DFD3] bg-white p-6">
      <p className="text-base font-black leading-snug">{title}</p>
      <p className="mt-3 text-sm leading-7 text-[#5F6470]">{text}</p>
    </div>
  );
}

function Step({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-[#E8DFD3] bg-white p-7">
      <p className="text-xl font-black tracking-tight">{title}</p>
      <p className="mt-3 text-sm leading-7 text-[#5F6470]">{text}</p>
    </div>
  );
}
