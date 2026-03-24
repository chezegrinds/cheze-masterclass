"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/navbar";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#070B12] text-white">
      <Navbar activePage="services" />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-slate-300">Our services</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Choose the right support.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200">
            All of our tutoring is built around building learning and study systems that translate to exam performance.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ServiceCard
              title="Easter Online Crash Course"
              desc="Two focused days. Highest impact topics and exam performance training. Leaving Cert HL only."
              cta="View Easter course"
              href="/easter-crash-course"
            />
            <ServiceCard
              title="Weekly Academy"
              desc="Weekly live classes, resources, and structure. Built for Leaving Cert HL students who want consistent progress."
              cta="View Academy"
              href="/academy"
            />
            <ServiceCard
              title="1 to 1 Support"
              desc="Fully tailored plan and close support with a tutor. Junior Cycle and Leaving Cert. Higher and ordinary. Starts at 110 per month."
              cta="Apply for 1 to 1"
              href="/one-to-one"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-slate-300">The difference</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Beyond the classroom.</h2>
          <p className="mt-6 max-w-4xl text-base leading-7 text-slate-200">
            Students often feel like they are improving because they understand lessons. Then exam results let them down. We focus on building the study system and performance under pressure so results match the effort.
          </p>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, desc, cta, href }: { title: string; desc: string; cta: string; href: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
      <p className="text-xl font-black tracking-tight">{title}</p>
      <p className="mt-3 text-sm leading-7 text-slate-200">{desc}</p>
      <a
        href={href}
        className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#0F766E] text-sm font-bold text-white hover:bg-[#0B5F59] transition-colors"
      >
        {cta}
        <ChevronRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
}
