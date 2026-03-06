"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Clock3,
  CheckCircle2,
  AlertTriangle,
  CalendarDays,
  ChevronRight,
  Star,
  Video,
  Target,
} from "lucide-react";

export default function ProbabilityMasterclassLandingPage() {
  const typeformEmbedUrl = useMemo(() => {
    return "https://form.typeform.com/to/REPLACE_WITH_YOUR_TYPEFORM_ID";
  }, []);

  const masterclassDate = useMemo(() => {
    return new Date("2026-03-08T18:30:00");
  }, []);

  const [timeLeft, setTimeLeft] = useState(getTimeLeft(masterclassDate));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
  setMounted(true);
}, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(masterclassDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [masterclassDate]);

  const scrollToSignup = () => {
    const el = document.getElementById("signup");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#0C1B33]">
      <section className="relative overflow-hidden border-b border-[#E8DFD3] bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.12),_transparent_30%),linear-gradient(180deg,#FFFDF9_0%,#F7F1E8_100%)]">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-orange-200 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-16">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-[#F1EBDC] bg-[#0C1B33] shadow-md">
                <img
                  src="/cheze-logo.png"
                  alt="Cheze Grinds logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-xl font-black tracking-tight">Cheze Grinds</p>
                <p className="text-sm text-[#6B7280]">
                  Leaving Cert Higher Level Maths
                </p>
              </div>
            </div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
              <AlertTriangle className="h-4 w-4" />
              Paper 2 Probability Masterclass
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Stop panicking at probability questions.
              <span className="block text-orange-500">
                Learn exactly how to attack them.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5F6470] sm:text-xl">
              A focused masterclass for Leaving Cert Higher Level Maths students
              who keep getting stuck on probability worded questions, lose
              confidence fast, and want a clear system for one of Paper 2's hardest topics.
            </p>
            
            <p className="mt-4 text-sm font-semibold text-[#6B7280]">
              1,000+ Irish students taught • Trusted exam-focused teaching • Built for Leaving Cert success
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#signup"
              className="inline-flex h-12 items-center rounded-2xl bg-[#0C1B33] px-7 text-base font-bold text-white hover:bg-[#16284A]"
              >
              Secure Your Spot (€15)
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>

              <div className="rounded-2xl border border-[#E8DFD3] bg-[#FFFDF9] px-4 py-3 text-sm font-semibold text-[#3C4658] shadow-sm">
                €15 one-time payment
              </div>
            </div>

            <div className="mt-8 rounded-[28px] border border-orange-200 bg-[#FFF7ED] p-5 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">
                Countdown to the live class
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <CountdownCard value={timeLeft.days} label="Days" />
                <CountdownCard value={timeLeft.hours} label="Hours" />
                <CountdownCard value={timeLeft.minutes} label="Minutes" />
                <CountdownCard value={timeLeft.seconds} label="Seconds" />
              </div>

              <p className="mt-4 text-sm font-semibold text-[#5F6470]">
                Sunday 8 March 2026 • 6:30 PM to 8:00 PM
              </p>

              <p className="mt-2 text-sm font-bold text-orange-600">
                Live class limited to 50 students
              </p>
            </div>

            <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-3">
              <FeaturePill
                icon={<CalendarDays className="h-4 w-4" />}
                label="This Sunday 08/03"
              />
              <FeaturePill
                icon={<Clock3 className="h-4 w-4" />}
                label="Live online class"
              />
              <FeaturePill
                icon={<Video className="h-4 w-4" />}
                label="Exam-focused teaching"
              />
            </div>
          </div>

          <div className="lg:pl-4">
            <div className="rounded-[28px] border border-[#E8DFD3] bg-[#FFFDF9]/95 shadow-xl shadow-[#DCCFBD]/50">
              <div className="p-7 sm:p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F3E8D7] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#9A5B12]">
                  <Star className="h-3.5 w-3.5" />
                  What you’ll walk away with
                </div>

                <div className="space-y-4">
                  <Bullet>
                    A step-by-step approach to reading and breaking down
                    probability worded questions
                  </Bullet>
                  <Bullet>
                    The key probability ideas, patterns, and traps that
                    repeatedly show up in Leaving Cert questions
                  </Bullet>
                  <Bullet>
                    A sharper method for choosing the right formula and starting
                    correctly under pressure
                  </Bullet>
                  <Bullet>
                    More confidence, less hesitation, and a clearer plan for
                    Paper 2
                  </Bullet>
                </div>

                <div className="mt-6 rounded-3xl bg-[#0C1B33] p-5 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
                    Who this is for
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-100">
                    Students who know probability is costing them marks and want
                    one session that makes the topic finally click.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-orange-500">
            The real problem
          </p>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Probability becomes a nightmare when you do not know how to start.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#5F6470]">
            To get good at exam questions you just need two things. You need to know the course and understand probability. You need to be able to connect worded problems to the course that you've learned. That's it.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <PainCard
            title="You read the question and freeze"
            text="You know probability is what we are using, but you do not know how to translate the wording into the correct maths."
          />
          <PainCard
            title="You keep losing marks on setup"
            text="Even when your maths skills are fine, if you do not know how to construct the solution your marks are gone."
          />
          <PainCard
            title="You do not trust your answers"
            text="You finish the question but still feel unsure whether you attacked it the right way."
          />
          <PainCard
            title="Paper 2 pressure makes it worse"
            text="Under exam timing, weak structure turns into panic and panic turns into avoidable mistakes."
          />
        </div>
      </section>

      <section className="border-y border-[#E8DFD3] bg-[#FFFDF9]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-orange-500">
                Inside the class
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                This is not random revision. It is a system.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#5F6470]">
                The class is built to help students stop guessing and start
                recognising how probability questions really work in the exam.
              </p>
            </div>

            <div className="grid gap-4">
              <TeachCard
                title="How to decode probability wording"
                text="Learn how to slow the question down, identify what it is really asking, and set up the right solutions with ease."
              />
              <TeachCard
                title="How to choose the correct method"
                text="Know when to use the main probability rules and how to avoid using the wrong approach."
              />
              <TeachCard
                title="How to structure full-mark solutions"
                text="See how to lay out answers in a clean, examiner-friendly way."
              />
              <TeachCard
                title="How to handle exam-style twists"
                text="Practice the kind of changes in wording that usually throw students off and learn how to stay composed 24/7."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <SimpleCard>
            <Target className="h-8 w-8 text-orange-500" />
            <h3 className="mt-5 text-2xl font-black tracking-tight">
              Clearer method
            </h3>
            <p className="mt-3 text-base leading-7 text-[#5F6470]">
              You will know what to look for in a question and how to begin
              without wasting time.
            </p>
          </SimpleCard>

          <SimpleCard>
            <CheckCircle2 className="h-8 w-8 text-orange-500" />
            <h3 className="mt-5 text-2xl font-black tracking-tight">
              Better accuracy
            </h3>
            <p className="mt-3 text-base leading-7 text-[#5F6470]">
              You will avoid common traps and stop dropping easy marks through
              confusion or poor structure.
            </p>
          </SimpleCard>

          <SimpleCard>
            <Star className="h-8 w-8 text-orange-500" />
            <h3 className="mt-5 text-2xl font-black tracking-tight">
              More confidence
            </h3>
            <p className="mt-3 text-base leading-7 text-[#5F6470]">
              You will walk into Paper 2 feeling more in control of one of the
              topics students fear most.
            </p>
          </SimpleCard>
        </div>
      </section>

      <section id="signup" className="bg-[#0C1B33] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.75fr_1.25fr] lg:px-8 lg:py-20">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-orange-300">
              Reserve your spot
            </p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Join the Probability Masterclass for €15.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Let's get to work.
            </p>

            <div className="mt-8 space-y-3 text-slate-200">
              <SignupPoint>
                Name
              </SignupPoint>
              <SignupPoint>
                Email
              </SignupPoint>
              <SignupPoint>
                Number
              </SignupPoint>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#FFFDF9] shadow-2xl">
            <iframe
              title="Probability Masterclass Sign Up"
              src={typeformEmbedUrl}
              className="h-[720px] w-full"
            />
          </div>
        </div>
      </section>
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

function FeaturePill({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
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
      <p className="text-lg font-black tracking-tight text-[#0C1B33]">
        {title}
      </p>
      <p className="mt-3 text-base leading-7 text-[#5F6470]">{text}</p>
    </div>
  );
}

function TeachCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[24px] border border-[#E8DFD3] bg-[#F3E8D7]/45 p-6 shadow-sm">
      <p className="text-xl font-black tracking-tight text-[#0C1B33]">
        {title}
      </p>
      <p className="mt-3 text-base leading-7 text-[#5F6470]">{text}</p>
    </div>
  );
}

function CountdownCard({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-[#F3D7B3] bg-[#FFFDF9] px-4 py-5 text-center shadow-sm">
      <div className="text-3xl font-black tracking-tight text-[#0C1B33]">
        {value}
      </div>
      <div className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
        {label}
      </div>
    </div>
  );
}

function SignupPoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
      <p className="text-base leading-7">{children}</p>
    </div>
  );
}

function getTimeLeft(targetDate: Date) {
  const now = new Date();

  const irelandNow = new Date(
    now.toLocaleString("en-US", { timeZone: "Europe/Dublin" })
  );

  const irelandTarget = new Date(
    targetDate.toLocaleString("en-US", { timeZone: "Europe/Dublin" })
  );

  const difference = irelandTarget.getTime() - irelandNow.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
}