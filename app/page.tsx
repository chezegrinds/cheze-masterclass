"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Clock3,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Star,
  Target,
  MapPin,
  Users,
  Wifi,
} from "lucide-react";

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
    <div className="min-h-screen bg-[#F7F1E8] text-[#0C1B33]">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-[#E8DFD3] bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.12),_transparent_30%),linear-gradient(180deg,#FFFDF9_0%,#F7F1E8_100%)]">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-orange-200 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          {/* Logo */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-[#F1EBDC] bg-[#0C1B33] shadow-md">
              <img src="/cheze-logo.png" alt="Cheze Grinds logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-xl font-black tracking-tight">Cheze Grinds</p>
              <p className="text-sm text-[#6B7280]">Leaving Cert Higher Level Maths</p>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
                <AlertTriangle className="h-4 w-4" />
                Easter Revision Crash Course 2026
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Two days. Every topic that matters.
                <span className="block text-orange-500">Walk into the exam ready.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5F6470] sm:text-xl">
                A focused 2-day crash course covering the biggest and most important topics on the Leaving Cert HL Maths paper.
              </p>

              <p className="mt-4 text-sm font-semibold text-[#6B7280]">
                1,000+ Irish students taught • Trusted exam-focused teaching • Built for Leaving Cert success
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#online" className="inline-flex h-12 items-center rounded-2xl bg-[#0C1B33] px-7 text-base font-bold text-white hover:bg-[#16284A] transition-colors">
                  Join Online — €99
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#inperson" className="inline-flex h-12 items-center rounded-2xl border border-[#E8DFD3] bg-[#FFFDF9] px-7 text-base font-bold text-[#0C1B33] hover:bg-[#F0E9DC] transition-colors shadow-sm">
                  Cork In-Person — €249
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Countdown */}
              <div className="mt-8 rounded-[28px] border border-orange-200 bg-[#FFF7ED] p-5 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">
                  Countdown to the crash course
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <CountdownCard value={timeLeft.days} label="Days" />
                  <CountdownCard value={timeLeft.hours} label="Hours" />
                  <CountdownCard value={timeLeft.minutes} label="Minutes" />
                  <CountdownCard value={timeLeft.seconds} label="Seconds" />
                </div>
                <p className="mt-4 text-sm font-semibold text-[#5F6470]">
                  Cork in-person: Fri 3 & Sat 4 April · Online: Tue 7 & Wed 8 April
                </p>
                <p className="mt-2 text-sm font-bold text-orange-600">
                  Online capped at 100 seats · Cork capped at 50 seats
                </p>
              </div>

              <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-3">
                <FeaturePill icon={<MapPin className="h-4 w-4" />} label="Cork: Fri 3 & Sat 4 Apr" />
                <FeaturePill icon={<Wifi className="h-4 w-4" />} label="Online: Tue 7 & Wed 8 Apr" />
                <FeaturePill icon={<Clock3 className="h-4 w-4" />} label="11am – 4pm each day" />
              </div>
            </div>

            {/* What you'll walk away with */}
            <div className="lg:pl-4">
              <div className="rounded-[28px] border border-[#E8DFD3] bg-[#FFFDF9]/95 shadow-xl shadow-[#DCCFBD]/50">
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
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">Who this is for</p>
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

      {/* ── VSL ── */}
      <section className="border-b border-[#E8DFD3] bg-[#FFFDF9]">
        <div className="mx-auto max-w-4xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-orange-500">Watch this first</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Everything you need to know.</h2>
          </div>
          {/* ── REPLACE the div below with your video embed (YouTube, Vimeo, Wistia, etc.) ── */}
          <div className="relative w-full overflow-hidden rounded-[24px] border-2 border-dashed border-orange-300 bg-orange-50 shadow-lg" style={{ aspectRatio: "16/9" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0C1B33] shadow-md">
                <svg className="h-8 w-8 text-orange-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-base font-black text-[#0C1B33]">Your VSL goes here</p>
              <p className="text-sm text-[#6B7280]">Replace this placeholder with your video embed code</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-orange-500">The programme</p>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Two days. The most important topics.</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Day 1 */}
          <div className="rounded-[28px] border border-[#E8DFD3] bg-[#FFFDF9] overflow-hidden shadow-sm">
            <div className="bg-orange-500 px-7 py-4">
              <p className="text-lg font-black text-white">Day 1</p>
              <p className="text-sm text-orange-100 mt-0.5">Fri 3 Apr (Cork) · Tue 7 Apr (Online)</p>
            </div>
            <div className="p-7">
              <TimelineRow time="11:00 AM" topic="Probability & Statistics" desc="The most heavily examined topic on Paper 2. Covered in full." isBreak={false} />
              <TimelineDivider />
              <TimelineRow time="12:30 PM" topic="Break" desc="1 hour" isBreak={true} />
              <TimelineDivider />
              <TimelineRow time="1:30 PM" topic="Coordinate Geometry" desc="Lines and circles — everything you need for full marks." isBreak={false} />
              <TimelineDivider />
              <TimelineRow time="4:00 PM" topic="End of Day 1" desc="" isBreak={true} />
            </div>
          </div>

          {/* Day 2 */}
          <div className="rounded-[28px] border border-[#E8DFD3] bg-[#FFFDF9] overflow-hidden shadow-sm">
            <div className="bg-[#0C1B33] px-7 py-4">
              <p className="text-lg font-black text-white">Day 2</p>
              <p className="text-sm text-slate-400 mt-0.5">Sat 4 Apr (Cork) · Wed 8 Apr (Online)</p>
            </div>
            <div className="p-7">
              <TimelineRow time="11:00 AM" topic="Differentiation & Integration" desc="The backbone of Paper 1. A systematic approach to every question type." isBreak={false} />
              <TimelineDivider />
              <TimelineRow time="12:30 PM" topic="Break" desc="1 hour" isBreak={true} />
              <TimelineDivider />
              <TimelineRow time="1:30 PM" topic="Complex Numbers & Functions" desc="High-value topics students consistently underperform on." isBreak={false} />
              <TimelineDivider />
              <TimelineRow time="4:00 PM" topic="End of Day 2" desc="" isBreak={true} />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section className="border-t border-[#E8DFD3] bg-[#FFFDF9]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-3">
            <SimpleCard>
              <Target className="h-8 w-8 text-orange-500" />
              <h3 className="mt-5 text-2xl font-black tracking-tight">Clearer method</h3>
              <p className="mt-3 text-base leading-7 text-[#5F6470]">Know what to look for and how to begin without wasting time or second-guessing.</p>
            </SimpleCard>
            <SimpleCard>
              <CheckCircle2 className="h-8 w-8 text-orange-500" />
              <h3 className="mt-5 text-2xl font-black tracking-tight">Better accuracy</h3>
              <p className="mt-3 text-base leading-7 text-[#5F6470]">Stop dropping marks through poor setup, wrong method choice, or weak structure.</p>
            </SimpleCard>
            <SimpleCard>
              <Star className="h-8 w-8 text-orange-500" />
              <h3 className="mt-5 text-2xl font-black tracking-tight">Real confidence</h3>
              <p className="mt-3 text-base leading-7 text-[#5F6470]">Walk into the exam knowing you've put in two of the most focused days of your revision.</p>
            </SimpleCard>
          </div>
        </div>
      </section>

      {/* ── ONLINE SIGNUP ── */}
      <section id="online" className="border-t border-[#E8DFD3] bg-[#F7F1E8]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0C1B33]">
              <Wifi className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-500">Online — Tue 7 & Wed 8 April</p>
              <h2 className="text-2xl font-black tracking-tight">Join online — €99</h2>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="space-y-3">
                <SignupPoint>Live on Zoom across both days</SignupPoint>
                <SignupPoint>Replay access included</SignupPoint>
                <SignupPoint>Capped at 100 seats — limited availability</SignupPoint>
                <SignupPoint>Elite Academy members: <strong>€69</strong> (€30 off — use your discount code)</SignupPoint>
              </div>
              <div className="mt-6 rounded-[20px] border border-orange-200 bg-orange-50 p-4">
                <p className="text-sm font-bold text-orange-700">Fill out the form below and complete payment to secure your spot.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-[#E8DFD3] bg-white shadow-xl shadow-[#DCCFBD]/50">
              <iframe
                title="Easter Crash Course — Online Sign Up"
                src="https://form.typeform.com/to/REPLACE_ONLINE_TYPEFORM_ID"
                className="h-[600px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── IN-PERSON SIGNUP ── */}
      <section id="inperson" className="bg-[#0C1B33] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">In-person · Cork — Fri 3 & Sat 4 April</p>
              <h2 className="text-2xl font-black tracking-tight">Cork intensive — €249</h2>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="space-y-3">
                <SignupPointLight>€50 non-refundable deposit to secure your seat</SignupPointLight>
                <SignupPointLight>€199 balance paid on arrival (cash or card)</SignupPointLight>
                <SignupPointLight>Hard cap of 50 students — no exceptions</SignupPointLight>
                <SignupPointLight>Elite Academy members: <strong className="text-white">€199 total</strong> (€50 off — use your discount code)</SignupPointLight>
              </div>
              <div className="mt-6 rounded-[20px] border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-bold text-orange-300">Fill out the form below and complete the €50 deposit to secure your spot. Once 50 deposits are paid, Cork is closed.</p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-slate-400">
                <Users className="h-4 w-4" />
                <p className="text-sm font-semibold">50 seats · Cork venue TBC</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#FFFDF9] shadow-2xl">
              <iframe
                title="Easter Crash Course — Cork In-Person Sign Up"
                src="https://form.typeform.com/to/REPLACE_INPERSON_TYPEFORM_ID"
                className="h-[650px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// ── TIMELINE COMPONENTS ──

function TimelineRow({ time, topic, desc, isBreak }: { time: string; topic: string; desc: string; isBreak: boolean }) {
  return (
    <div className="flex gap-4 py-4">
      <div className="min-w-[80px]">
        <p className="text-xs font-black uppercase tracking-wide text-orange-500">{time}</p>
      </div>
      <div className="flex gap-3">
        <div className="mt-1 h-3 w-3 rounded-full shrink-0" style={{ background: isBreak ? "#E8DFD3" : "#F97316" }} />
        <div>
          <p className={`text-base font-black tracking-tight ${isBreak ? "text-[#9BA3B0]" : "text-[#0C1B33]"}`}>{topic}</p>
          {desc && <p className="mt-0.5 text-sm text-[#5F6470]">{desc}</p>}
        </div>
      </div>
    </div>
  );
}

function TimelineDivider() {
  return <div className="ml-[92px] h-px bg-[#E8DFD3]" />;
}

// ── OTHER COMPONENTS ──

function SimpleCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[28px] border border-[#E8DFD3] bg-[#FFFDF9] p-7 shadow-sm">{children}</div>
  );
}

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

function CountdownCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="rounded-2xl border border-[#F3D7B3] bg-[#FFFDF9] px-4 py-5 text-center shadow-sm">
      <div className="text-3xl font-black tracking-tight text-[#0C1B33]">{value}</div>
      <div className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">{label}</div>
    </div>
  );
}

function SignupPoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
      <p className="text-base leading-7 text-[#3C4658]">{children}</p>
    </div>
  );
}

function SignupPointLight({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
      <p className="text-base leading-7 text-slate-200">{children}</p>
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