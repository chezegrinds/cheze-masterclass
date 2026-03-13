"use client";

import React from "react";
import {
  CheckCircle2,
  ChevronRight,
  Star,
  Zap,
  BookOpen,
  Users,
  Video,
  MessageCircle,
  Clock3,
  ShieldCheck,
  Tag,
} from "lucide-react";
import Navbar from "@/components/navbar";

export default function ChezeEliteAcademyPage() {
  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#0C1B33]">

      <Navbar activePage="academy" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-[#E8DFD3] bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.12),_transparent_30%),linear-gradient(180deg,#FFFDF9_0%,#F7F1E8_100%)]">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-orange-200 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
                <Star className="h-4 w-4" />
                Cheze Elite Maths Academy
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Not just better at maths.
                <span className="block text-orange-500">Better at performing in the exam.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5F6470] sm:text-xl">
                A performance-driven community for Leaving Cert HL Maths students. Two live classes every week, a full on-demand video library, and the support system to go from understanding the material to actually delivering on exam day.
              </p>

              <p className="mt-4 text-sm font-semibold text-[#6B7280]">
                1,000+ Irish students taught · Trusted exam-focused teaching · Built for Leaving Cert success
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#join"
                  className="inline-flex h-12 items-center rounded-2xl bg-[#0C1B33] px-7 text-base font-bold text-white hover:bg-[#16284A] transition-colors"
                >
                  Join the Academy — €94/mo
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#what-you-get"
                  className="inline-flex h-12 items-center rounded-2xl border border-[#E8DFD3] bg-[#FFFDF9] px-7 text-base font-bold text-[#0C1B33] hover:bg-[#F0E9DC] transition-colors shadow-sm"
                >
                  See what's included
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                <FeaturePill icon={<Video className="h-4 w-4" />} label="2 live classes/week" />
                <FeaturePill icon={<BookOpen className="h-4 w-4" />} label="On-demand video library" />
                <FeaturePill icon={<Users className="h-4 w-4" />} label="Performance-driven community" />
              </div>
            </div>

            {/* Summary card */}
            <div className="lg:pl-4">
              <div className="rounded-[28px] border border-[#E8DFD3] bg-[#FFFDF9]/95 shadow-xl shadow-[#DCCFBD]/50">
                <div className="p-7 sm:p-8">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F3E8D7] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#9A5B12]">
                    <Star className="h-3.5 w-3.5" />
                    What you'll walk away with
                  </div>
                  <div className="space-y-4">
                    <Bullet>Two live classes every week — taught directly by Cheze</Bullet>
                    <Bullet>A full on-demand video library covering the entire course, available 24/7</Bullet>
                    <Bullet>A community where your questions get answered outside of class</Bullet>
                    <Bullet>Exam performance training — answer structure, technique, and how to deliver under pressure</Bullet>
                    <Bullet>Discounts on all live courses and events throughout the year</Bullet>
                  </div>
                  <div className="mt-6 rounded-3xl bg-[#0C1B33] p-5 text-white">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">Who this is for</p>
                    <p className="mt-3 text-base leading-7 text-slate-100">
                      Leaving Cert HL Maths students who want more than understanding — who want to actually perform when it counts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="max-w-3xl mb-10">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-orange-500">Sound familiar?</p>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Understanding the material is only half the battle.
            <span className="block text-orange-500">Performing in the exam is the other half.</span>
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <PainCard
            title="You understand it in class but blank in the exam"
            text="The material makes sense when it's explained. But sitting alone with the paper, it disappears. That's not a knowledge problem — it's a performance problem. And it's exactly what the Academy is built to fix."
          />
          <PainCard
            title="You're putting in hours but your grade isn't moving"
            text="Hard work without the right system is just wasted time. The Academy gives you structure — live classes, a clear video library, and a community that keeps you focused on what actually matters."
          />
          <PainCard
            title="You know the answer but you're losing marks on how you write it"
            text="Examiners reward students who answer the right way. The Academy teaches you how to structure every answer so you stop dropping marks on questions you already understand."
          />
          <PainCard
            title="You're going at it alone with no support between lessons"
            text="HL Maths is hard. Going it alone is harder. Inside the Academy you can ask questions any time and get replies — surrounded by driven students all pushing for the same result."
          />
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section id="what-you-get" className="border-t border-[#E8DFD3] bg-[#FFFDF9]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-orange-500">Everything included</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">One membership. Everything you need.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <IncludedCard
              icon={<Video className="h-6 w-6 text-orange-500" />}
              title="2 Live Classes Every Week"
              desc="Two live sessions every week, taught directly by Cheze. Real-time teaching, real questions answered in the moment, and the accountability of showing up consistently week after week."
            />
            <IncludedCard
              icon={<BookOpen className="h-6 w-6 text-orange-500" />}
              title="Full On-Demand Video Library"
              desc="The entire HL Maths course taught in shorter, focused videos — available 24/7. Watch at your own pace, rewatch before the exam, and never get stuck on a topic alone."
            />
            <IncludedCard
              icon={<MessageCircle className="h-6 w-6 text-orange-500" />}
              title="Community Q&A — Any Time"
              desc="Ask questions outside of class and get replies. A community of driven students and Cheze himself — the support doesn't stop when the live class ends."
            />
            <IncludedCard
              icon={<Zap className="h-6 w-6 text-orange-500" />}
              title="Exam Performance Training"
              desc="Understanding maths and performing in an exam are two different things. The Academy trains you in answer structure, question approach, and how to actually deliver under pressure."
            />
            <IncludedCard
              icon={<Clock3 className="h-6 w-6 text-orange-500" />}
              title="Replay Access to Every Session"
              desc="Every live class is recorded. If something comes up, you never miss out — watch it back whenever suits you and stay fully up to date."
            />
            <IncludedCard
              icon={<Tag className="h-6 w-6 text-orange-500" />}
              title="Member Discounts on All Events"
              desc="Academy members get exclusive discounts on all Cheze live events, crash courses, and anything else that runs throughout the year."
            />
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="border-t border-[#E8DFD3] bg-[#F7F1E8]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-orange-500">What students say</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Results speak for themselves.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <TestimonialCard
              quote="I went from being completely lost in class to actually knowing how to attack exam questions. The live sessions are the best part — Cheze explains things in a way that actually sticks."
              name="Aoife M."
              detail="Leaving Cert 2025"
            />
            <TestimonialCard
              quote="It's not just maths help — it's learning how to perform. I stopped dropping marks on questions I knew the answer to. That's the difference this made."
              name="Ciarán D."
              detail="Leaving Cert 2025"
            />
            <TestimonialCard
              quote="Worth every cent. The video library alone is unreal — I've gone back over topics three or four times and it clicks more every time."
              name="Sophie K."
              detail="Leaving Cert 2026"
            />
          </div>
        </div>
      </section>

      {/* ── PRICING / JOIN ── */}
      <section id="join" className="border-t border-[#E8DFD3] bg-[#FFFDF9]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-orange-500">Pricing</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Simple, transparent pricing.</h2>
            <p className="mt-4 text-lg text-[#5F6470]">Cancel any time. No long contracts. Just results.</p>
          </div>

          {/* Single pricing card — centred */}
          <div className="mx-auto max-w-md">
            <div className="rounded-[28px] border-2 border-orange-400 bg-[#0C1B33] p-8 shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-300">Monthly membership</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-6xl font-black text-white">€94</span>
                <span className="mb-2 text-base font-semibold text-slate-400">/month</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">Full access to everything. Cancel any time.</p>

              <div className="mt-6 space-y-3">
                <PricingLineLight>2 live classes every week</PricingLineLight>
                <PricingLineLight>Full on-demand video library — 24/7 access</PricingLineLight>
                <PricingLineLight>Community Q&A outside of class</PricingLineLight>
                <PricingLineLight>Exam performance & answer structure training</PricingLineLight>
                <PricingLineLight>Replay access to every session</PricingLineLight>
                <PricingLineLight>Member discounts on all live events & courses</PricingLineLight>
              </div>

              <a
                href="https://www.skool.com/cheze-grinds-academy-8823/about"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-orange-500 px-6 py-4 text-base font-bold text-white hover:bg-orange-600 transition-colors"
              >
                Join the Academy — €94/mo
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              <ShieldCheck className="h-5 w-5 text-orange-500 shrink-0" />
              <p className="text-sm font-semibold text-[#5F6470]">Cancel any time — no notice period, no penalty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-[#E8DFD3] bg-[#F7F1E8]">
        <div className="mx-auto max-w-3xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-orange-500">FAQ</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Common questions.</h2>
          </div>
          <div className="space-y-5">
            <FaqCard
              q="What year is this for?"
              a="The Academy is built for Leaving Cert students taking Higher Level Maths — whether you are in 5th or 6th year."
            />
            <FaqCard
              q="What happens if I miss a live class?"
              a="Every live session is recorded and uploaded. Watch it back any time — you never fall behind."
            />
            <FaqCard
              q="How is this different from a standard grind?"
              a="A standard grind is one session a week with nothing in between. The Academy gives you two live classes, a full on-demand video library, a community where your questions get answered any time, and exam performance training — all for less than the price of two grinds a month."
            />
            <FaqCard
              q="Is this just about understanding maths, or about the exam?"
              a="The focus is the exam. Understanding the material is step one. The Academy also trains you on how to actually perform — answer structure, how to approach questions under pressure, and how to stop dropping marks on things you already know."
            />
            <FaqCard
              q="Can I cancel any time?"
              a="Yes. No notice period, no penalty. You are never locked in."
            />
            <FaqCard
              q="I am in 5th year — is it worth joining now?"
              a="Absolutely. Students who join in 5th year go into 6th year with the habits, structure, and confidence already built. They have a massive head start."
            />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#0C1B33] text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-8 lg:py-20">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-orange-300">Ready to get started?</p>
          <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Stop going at it alone.
            <span className="block text-orange-500">Join the Academy today.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Two live classes a week. A full on-demand video library. A performance-driven community. Everything you need to walk into the exam ready.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.skool.com/cheze-grinds-academy-8823/about"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center rounded-2xl bg-orange-500 px-8 text-base font-bold text-white hover:bg-orange-600 transition-colors"
            >
              Join the Academy — €94/mo
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

// ── COMPONENTS ──

function FeaturePill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-[#E8DFD3] bg-[#FFFDF9] px-4 py-3 text-sm font-semibold text-[#3C4658] shadow-sm">
      <span className="text-orange-500">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
      <p className="text-base leading-7 text-[#3C4658]">{children}</p>
    </div>
  );
}

function PainCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[24px] border border-[#E8DFD3] bg-[#FFFDF9] p-6 shadow-sm">
      <p className="text-base font-black leading-snug text-[#0C1B33]">{title}</p>
      <p className="mt-3 text-sm leading-7 text-[#5F6470]">{text}</p>
    </div>
  );
}

function IncludedCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-[24px] border border-[#E8DFD3] bg-[#FFFDF9] p-6 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 border border-orange-100">
        {icon}
      </div>
      <p className="text-base font-black text-[#0C1B33]">{title}</p>
      <p className="mt-2 text-sm leading-7 text-[#5F6470]">{desc}</p>
    </div>
  );
}

function TestimonialCard({ quote, name, detail }: { quote: string; name: string; detail: string }) {
  return (
    <div className="rounded-[24px] border border-[#E8DFD3] bg-[#FFFDF9] p-6 shadow-sm">
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
        ))}
      </div>
      <p className="text-sm leading-7 text-[#3C4658]">"{quote}"</p>
      <div className="mt-4 border-t border-[#E8DFD3] pt-4">
        <p className="text-sm font-black text-[#0C1B33]">{name}</p>
        <p className="text-xs text-[#9BA3B0]">{detail}</p>
      </div>
    </div>
  );
}

function PricingLineLight({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-300" />
      <p className="text-sm text-slate-200">{children}</p>
    </div>
  );
}

function FaqCard({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-[20px] border border-[#E8DFD3] bg-[#FFFDF9] p-6">
      <p className="text-base font-black text-[#0C1B33]">{q}</p>
      <p className="mt-2 text-sm leading-7 text-[#5F6470]">{a}</p>
    </div>
  );
}
