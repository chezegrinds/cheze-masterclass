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
    // Counts down to the first event — in-person Cork, Friday 3rd April
    return new Date("2026-04-03T10:00:00");
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
                Two days. Eight hours. Every topic that matters.
                <span className="block text-orange-500">
                  Walk into the exam ready.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5F6470] sm:text-xl">
                A focused 2-day crash course for Leaving Cert Higher Level Maths students
                who want to stop guessing and start attacking exam questions with a clear,
                proven system — covering the biggest and most important topics on the paper.
              </p>

              <p className="mt-4 text-sm font-semibold text-[#6B7280]">
                1,000+ Irish students taught • Trusted exam-focused teaching • Built for Leaving Cert success
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#online"
                  className="inline-flex h-12 items-center rounded-2xl bg-[#0C1B33] px-7 text-base font-bold text-white hover:bg-[#16284A] transition-colors"
                >
                  Join Online — €99
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#inperson"
                  className="inline-flex h-12 items-center rounded-2xl border border-[#E8DFD3] bg-[#FFFDF9] px-7 text-base font-bold text-[#0C1B33] hover:bg-[#F0E9DC] transition-colors shadow-sm"
                >
                  Cork In-Person — €50 deposit
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
                  Cork in-person strictly capped at 50 students
                </p>
              </div>

              <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-3">
                <FeaturePill icon={<MapPin className="h-4 w-4" />} label="Cork: Fri 3 & Sat 4 Apr" />
                <FeaturePill icon={<Wifi className="h-4 w-4" />} label="Online: Tue 7 & Wed 8 Apr" />
                <FeaturePill icon={<Clock3 className="h-4 w-4" />} label="4 hrs teaching per day" />
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
                    <Bullet>A clear system for reading and attacking any exam question — even ones you've never seen before</Bullet>
                    <Bullet>Full coverage of the biggest and highest-frequency topics across both papers</Bullet>
                    <Bullet>Exam technique that stops you dropping marks on questions you actually understand</Bullet>
                    <Bullet>A timed mock exam on Day 2 with a full debrief — so you know exactly where you stand</Bullet>
                    <Bullet>Replay access to every session so nothing is missed</Bullet>
                  </div>
                  <div className="mt-6 rounded-3xl bg-[#0C1B33] p-5 text-white">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
                      Who this is for
                    </p>
                    <p className="mt-3 text-base leading-7 text-slate-100">
                      Leaving Cert HL Maths students who want two focused days that
                      cover what matters most — and leave feeling prepared, not overwhelmed.
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
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-orange-500">
              Watch this first
            </p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Everything you need to know about the crash course.
            </h2>
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

      {/* ── THE PROBLEM ── */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-orange-500">
            The real problem
          </p>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            It is not that you do not know maths. It is that you do not know how to connect what you know to what you see.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#5F6470]">
            Every piece of maths is out there for free. So why isn't everyone getting their H1?
            Because understanding something in class and performing under exam conditions are two completely different skills.
            This crash course teaches you both.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <PainCard
            title="You understand it in class but blank in the exam"
            text="You know the material. But when the clock starts ticking, the connection between what you see and what you know disappears."
          />
          <PainCard
            title="You lose marks on setup, not on the maths"
            text="Your algebra is fine. But if you don't construct the solution correctly from the start, the marks are gone before you've written a line."
          />
          <PainCard
            title="You don't trust your own answers"
            text="You finish a question and still feel like you attacked it the wrong way. That uncertainty is what this course eliminates."
          />
          <PainCard
            title="Easter is your last real window"
            text="After Easter it is straight into revision and mocks. Two focused days now can change the trajectory of everything that follows."
          />
        </div>
      </section>

      {/* ── WHAT'S COVERED ── */}
      <section className="border-y border-[#E8DFD3] bg-[#FFFDF9]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-orange-500">
                The programme
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Two days. The most important topics. Done properly.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#5F6470]">
                Every session is built around how questions actually appear in the exam —
                not just theory, but the exact reasoning process that gets you full marks.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <DayCard day="Day 1" topics={["Algebra & functions", "Trigonometry", "Coordinate geometry"]} colour="orange" />
                <DayCard day="Day 2" topics={["Calculus — diff. & integration", "Statistics & probability", "Timed mock + full debrief"]} colour="navy" />
              </div>
              <p className="mt-4 text-sm text-[#6B7280]">
                Cork: Fri 3 & Sat 4 April · Online: Tue 7 & Wed 8 April<br />
                10:00 AM – 12:30 PM · Break 12:30 – 1:30 PM · 1:30 PM – 4:00 PM each day
              </p>
            </div>

            <div className="grid gap-4">
              <TeachCard
                title="How to decode any exam question"
                text="Learn to slow the question down, identify exactly what it is asking, and start the solution without hesitation."
              />
              <TeachCard
                title="How to choose the correct method"
                text="Know which approach to use and why — and stop second-guessing yourself mid-question."
              />
              <TeachCard
                title="How to structure full-mark solutions"
                text="See exactly how to lay out answers in a way that picks up every available mark."
              />
              <TeachCard
                title="How to perform under timed pressure"
                text="Practice the logical reasoning process until it becomes automatic — so exam conditions don't rattle you."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <SimpleCard>
            <Target className="h-8 w-8 text-orange-500" />
            <h3 className="mt-5 text-2xl font-black tracking-tight">Clearer method</h3>
            <p className="mt-3 text-base leading-7 text-[#5F6470]">
              You will know what to look for in a question and how to begin without wasting time or second-guessing.
            </p>
          </SimpleCard>
          <SimpleCard>
            <CheckCircle2 className="h-8 w-8 text-orange-500" />
            <h3 className="mt-5 text-2xl font-black tracking-tight">Better accuracy</h3>
            <p className="mt-3 text-base leading-7 text-[#5F6470]">
              Stop dropping marks through poor setup, wrong method choice, or weak structure under pressure.
            </p>
          </SimpleCard>
          <SimpleCard>
            <Star className="h-8 w-8 text-orange-500" />
            <h3 className="mt-5 text-2xl font-black tracking-tight">Real confidence</h3>
            <p className="mt-3 text-base leading-7 text-[#5F6470]">
              Walk into the exam knowing you have put in two of the most focused and effective days of your revision.
            </p>
          </SimpleCard>
        </div>
      </section>

      {/* ── ONLINE SIGNUP ── */}
      <section id="online" className="border-t border-[#E8DFD3] bg-[#FFFDF9]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0C1B33]">
              <Wifi className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-500">Online</p>
              <h2 className="text-2xl font-black tracking-tight">Join online — €99</h2>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-lg leading-8 text-[#5F6470]">
                Live on Zoom across both days. Replay access included. Open to students anywhere in Ireland.
              </p>
              <div className="mt-6 space-y-3 text-[#3C4658]">
                <SignupPoint>Full 2-day live programme on Zoom</SignupPoint>
                <SignupPoint>Replay access sent within 24 hours</SignupPoint>
                <SignupPoint>Same content as the in-person event</SignupPoint>
                <SignupPoint>€79 for Elite Academy members (€20 off)</SignupPoint>
              </div>
              <div className="mt-6 rounded-[20px] border border-orange-200 bg-orange-50 p-4">
                <p className="text-sm font-bold text-orange-700">One payment of €99. No hidden fees.</p>
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
              <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-300">In-person · Cork</p>
              <h2 className="text-2xl font-black tracking-tight">Cork intensive — €250</h2>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-lg leading-8 text-slate-300">
                Small group, two tutors, full two days in person. Strictly capped at 50 students.
                Secure your seat with a €50 deposit now — remaining €200 paid on arrival.
              </p>
              <div className="mt-6 space-y-3 text-slate-200">
                <SignupPointLight>€50 non-refundable deposit to secure your seat</SignupPointLight>
                <SignupPointLight>€200 balance paid on arrival (cash or card)</SignupPointLight>
                <SignupPointLight>2 tutors — small group, focused environment</SignupPointLight>
                <SignupPointLight>Hard cap of 50 students — no exceptions</SignupPointLight>
                <SignupPointLight>€230 total for Elite Academy members (€20 off)</SignupPointLight>
              </div>
              <div className="mt-6 rounded-[20px] border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-bold text-orange-300">
                  Once 50 deposits are paid, the Cork event is closed. No waitlist.
                </p>
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

// ── SUB-COMPONENTS ──

function DayCard({ day, topics, colour }: { day: string; topics: string[]; colour: "orange" | "navy" }) {
  const bg = colour === "orange" ? "bg-orange-500" : "bg-[#0C1B33]";
  return (
    <div className="rounded-[20px] border border-[#E8DFD3] bg-[#FFFDF9] overflow-hidden shadow-sm">
      <div className={`${bg} px-5 py-3`}>
        <p className="text-sm font-black text-white">{day}</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {topics.map((t) => (
          <div key={t} className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-orange-400 shrink-0" />
            <p className="text-sm font-semibold text-[#3C4658]">{t}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SimpleCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[28px] border border-[#E8DFD3] bg-[#FFFDF9] p-7 shadow-sm">
      {children}
    </div>
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

function PainCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[24px] border border-[#E8DFD3] bg-[#FFFDF9] p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1">
      <p className="text-lg font-black tracking-tight text-[#0C1B33]">{title}</p>
      <p className="mt-3 text-base leading-7 text-[#5F6470]">{text}</p>
    </div>
  );
}

function TeachCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[24px] border border-[#E8DFD3] bg-[#F3E8D7]/45 p-6 shadow-sm">
      <p className="text-xl font-black tracking-tight text-[#0C1B33]">{title}</p>
      <p className="mt-3 text-base leading-7 text-[#5F6470]">{text}</p>
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
