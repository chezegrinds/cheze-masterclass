"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Clock3,
  CheckCircle2,
  ChevronRight,
  Star,
  Target,
  MapPin,
  Users,
  Wifi,
} from "lucide-react";
import Navbar from "@/components/navbar";

export default function EasterCrashCourseLandingPage() {
  const crashCourseDate = useMemo(() => {
    return new Date("2026-04-03T11:00:00");
  }, []);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(crashCourseDate));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(crashCourseDate));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [crashCourseDate]);

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#111827]">

      <Navbar activePage="crash-course" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-black/10 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.12),_transparent_30%),linear-gradient(180deg,#FFFDF9_0%,#F7F1E8_100%)]">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-orange-200 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-[#0F766E]">Easter Revision Crash Course 2026</p>

              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Two days. Every topic that matters.
                <span className="block text-[#0F766E]">Walk into the exam ready.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                A focused 2-day crash course covering the biggest and most important topics on the Leaving Cert HL Maths paper.
              </p>

              <p className="mt-4 text-sm font-semibold text-[#6B7280]">
                1,000+ Irish students taught • Trusted exam-focused teaching • Built for Leaving Cert success
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://buy.stripe.com/aFa9AL4XJ0JeduMbJb2ZO1n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center rounded-2xl bg-[#0C1B33] px-7 text-base font-bold text-white hover:bg-[#16284A] transition-colors"
                >
                  Pay €99 — Join Online
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="/academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center rounded-2xl border border-black/10 bg-white/60 px-7 text-base font-bold text-[#111827] hover:bg-[#F0E9DC] transition-colors shadow-sm"
                >
                  View the Academy
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Countdown */}
              <div className="mt-8 rounded-[28px] border border-orange-200 bg-[#FFF7ED] p-5 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0F766E]">
                  Countdown to the crash course
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <CountdownCard value={timeLeft.days} label="Days" />
                  <CountdownCard value={timeLeft.hours} label="Hours" />
                  <CountdownCard value={timeLeft.minutes} label="Minutes" />
                  <CountdownCard value={timeLeft.seconds} label="Seconds" />
                </div>
                <p className="mt-4 text-sm font-semibold text-slate-600">
                  Online: Tue 7 & Wed 8 April
                </p>
                <p className="mt-2 text-sm font-bold text-[#0F766E]">
                  Bonus (LC 2025 Paper 1 & 2 breakdown) ends Sun 22 March · Online enrolment closes before the course starts
                </p>
              </div>

              <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-3">
                                <FeaturePill icon={<Wifi className="h-4 w-4" />} label="Online: Tue 7 & Wed 8 Apr" />
                <FeaturePill icon={<Clock3 className="h-4 w-4" />} label="11am – 4pm each day" />
              </div>
            </div>

            {/* What you'll walk away with */}
            <div className="lg:pl-4">
              <div className="rounded-[28px] border border-black/10 bg-white/60/95 shadow-xl shadow-[#DCCFBD]/50">
                <div className="p-7 sm:p-8">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F3E8D7] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#9A5B12]">
                    <Star className="h-3.5 w-3.5" />
                    What you'll walk away with
                  </div>
                  <div className="space-y-4">
                    <Bullet>A clear system for attacking any exam question confidently</Bullet>
                    <Bullet>Full coverage of the highest-frequency topics on the paper</Bullet>
                    <Bullet>Exam technique that stops you dropping marks on questions you understand</Bullet>
                    <Bullet>Replay access to every session so nothing is missed</Bullet>
                  </div>
                  <div className="mt-6 rounded-3xl bg-[#0C1B33] p-5 text-white">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0F766E]">Who this is for</p>
                    <p className="mt-3 text-base leading-7 text-slate-100">
                      Leaving Cert HL Maths students who want two focused days that cover what matters most.
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
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#0F766E]">Sound familiar?</p>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            The problem is not that you do not know maths.
            <span className="block text-[#0F766E]">It is that nobody has taught you how to perform.</span>
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <PainCard
            title="You understand it in class but blank in the exam"
            text="The material makes sense when your teacher explains it. But the moment you sit down in that exam hall, it is gone. That is not a knowledge problem — it is a connection problem. And it is fixable."
          />
          <PainCard
            title="You are putting in the hours but the grade is not moving"
            text="You are studying. You are doing the work. But come results day, it does not show. Hard work without the right method is just wasted time. This course gives you the method."
          />
          <PainCard
            title="You see the question and do not know where to begin"
            text="You read it twice, three times. Nothing clicks. So you skip it and hope for the best. This course teaches you exactly how to break down any question and start with confidence every single time."
          />
          <PainCard
            title="Panic is costing you marks you actually have"
            text="You know more than your results show. But pressure turns into anxiety, anxiety turns into mistakes, and mistakes turn into marks you should never have lost. Two focused days can change that."
          />
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#0F766E]">The programme</p>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Two days. The most important topics.</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Day 1 */}
          <div className="rounded-[28px] border border-black/10 bg-white/60 overflow-hidden shadow-sm">
            <div className="bg-[#111827] px-7 py-4">
              <p className="text-lg font-black text-white">Day 1</p>
              <p className="text-sm text-orange-100 mt-0.5">Tue 7 Apr (Online)</p>
            </div>
            <div className="p-7">
              <TimelineRow time="11:00 AM" topic="Probability & Statistics" desc="The most heavily examined topic on Paper 2. Covered in full." isBreak={false} />
              <TimelineDivider />
              <TimelineRow time="1:00 PM" topic="Break" desc="1 hour" isBreak={true} />
              <TimelineDivider />
              <TimelineRow time="2:00 PM" topic="Coordinate Geometry" desc="Lines and circles — everything you need for full marks." isBreak={false} />
              <TimelineDivider />
              <TimelineRow time="4:00 PM" topic="End of Day 1" desc="" isBreak={true} />
            </div>
          </div>

          {/* Day 2 */}
          <div className="rounded-[28px] border border-black/10 bg-white/60 overflow-hidden shadow-sm">
            <div className="bg-[#0C1B33] px-7 py-4">
              <p className="text-lg font-black text-white">Day 2</p>
              <p className="text-sm text-slate-400 mt-0.5">Wed 8 Apr (Online)</p>
            </div>
            <div className="p-7">
              <TimelineRow time="11:00 AM" topic="Differentiation & Integration" desc="The backbone of Paper 1. A systematic approach to every question type." isBreak={false} />
              <TimelineDivider />
              <TimelineRow time="1:00 PM" topic="Break" desc="1 hour" isBreak={true} />
              <TimelineDivider />
              <TimelineRow time="2:00 PM" topic="Complex Numbers & Functions" desc="High-value topics students consistently underperform on." isBreak={false} />
              <TimelineDivider />
              <TimelineRow time="4:00 PM" topic="End of Day 2" desc="" isBreak={true} />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section className="border-t border-black/10 bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-3">
            <SimpleCard>
              <Target className="h-8 w-8 text-[#0F766E]" />
              <h3 className="mt-5 text-2xl font-black tracking-tight">Clearer method</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">Know what to look for and how to begin without wasting time or second-guessing.</p>
            </SimpleCard>
            <SimpleCard>
              <CheckCircle2 className="h-8 w-8 text-[#0F766E]" />
              <h3 className="mt-5 text-2xl font-black tracking-tight">Better accuracy</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">Stop dropping marks through poor setup, wrong method choice, or weak structure.</p>
            </SimpleCard>
            <SimpleCard>
              <Star className="h-8 w-8 text-[#0F766E]" />
              <h3 className="mt-5 text-2xl font-black tracking-tight">Real confidence</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">Walk into the exam knowing you've put in two of the most focused days of your revision.</p>
            </SimpleCard>
          </div>
        </div>
      </section>

      {/* ── ONLINE SIGNUP ── */}
      <section id="online" className="border-t border-black/10 bg-[#FAF7F0]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0C1B33]">
              <Wifi className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0F766E]">Online — Tue 7 & Wed 8 April</p>
              <h2 className="text-2xl font-black tracking-tight">Join online — €99</h2>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="space-y-3">
                <SignupPoint>Live on Zoom across both days</SignupPoint>
                <SignupPoint>Replay access included</SignupPoint>
                <SignupPoint>Bonus: LC 2025 Paper 1 & 2 video breakdown (enrol by <strong>Sun 29 March, 11:59pm</strong>)</SignupPoint>
                <SignupPoint>Enrollment closes <strong>Sun 5 April, 11:59pm</strong></SignupPoint>
                <SignupPoint>Elite Academy members: <strong>€69</strong> (€30 off — use your discount code)</SignupPoint>
              </div>
              <div className="mt-6 rounded-[20px] border border-orange-200 bg-orange-50 p-4">
                <p className="text-sm font-bold text-[#0F766E]">Pay using the button to secure your spot (you’ll get instant confirmation).</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-xl shadow-[#DCCFBD]/50">
              <div className="p-8">
                <p className="text-lg font-black tracking-tight text-[#111827]">Secure your online spot</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Tap the button below to pay now. You’ll receive confirmation immediately.
                </p>
                <a
                  href="https://buy.stripe.com/aFa9AL4XJ0JeduMbJb2ZO1n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-[#0C1B33] px-7 text-base font-bold text-white hover:bg-[#16284A] transition-colors"
                >
                  Pay €99 — Join Online
                </a>
                <p className="mt-4 text-xs font-semibold text-[#6B7280]">
                  Elite Academy members: use your discount code at checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IN-PERSON SIGNUP ── */}

    </div>
  );
}

// ── TIMELINE COMPONENTS ──

function TimelineRow({ time, topic, desc, isBreak }: { time: string; topic: string; desc: string; isBreak: boolean }) {
  return (
    <div className="flex gap-4 py-4">
      <div className="min-w-[80px]">
        <p className="text-xs font-black uppercase tracking-wide text-[#0F766E]">{time}</p>
      </div>
      <div className="flex gap-3">
        <div className="mt-1 h-3 w-3 rounded-full shrink-0" style={{ background: isBreak ? "#E8DFD3" : "#F97316" }} />
        <div>
          <p className={`text-base font-black tracking-tight ${isBreak ? "text-[#9BA3B0]" : "text-[#111827]"}`}>{topic}</p>
          {desc && <p className="mt-0.5 text-sm text-slate-600">{desc}</p>}
        </div>
      </div>
    </div>
  );
}

function TimelineDivider() {
  return <div className="ml-[92px] h-px bg-[#E8DFD3]" />;
}

function SimpleCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[28px] border border-black/10 bg-white/60 p-7 shadow-sm">{children}</div>
  );
}

function FeaturePill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm font-semibold text-[#3C4658] shadow-sm">
      <span className="text-[#0F766E]">{icon}</span>
      <span>{label}</span>
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

function CountdownCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-2xl border border-[#F3D7B3] bg-white/60 px-4 py-5 text-center shadow-sm">
      <div className="text-3xl font-black tracking-tight text-[#111827]">{value}</div>
      <div className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#0F766E]">{label}</div>
    </div>
  );
}

function SignupPoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0F766E]" />
      <p className="text-base leading-7 text-[#3C4658]">{children}</p>
    </div>
  );
}

function SignupPointLight({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0F766E]" />
      <p className="text-base leading-7 text-slate-200">{children}</p>
    </div>
  );
}

function PainCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[24px] border border-black/10 bg-white/60 p-6 shadow-sm">
      <p className="text-base font-black leading-snug text-[#111827]">{title}</p>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function getTimeLeft(targetDate: Date) {
  const now = new Date();
  const irelandNow = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Dublin" }));
  const irelandTarget = new Date(targetDate.toLocaleString("en-US", { timeZone: "Europe/Dublin" }));
  const difference = irelandTarget.getTime() - irelandNow.getTime();

  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}
