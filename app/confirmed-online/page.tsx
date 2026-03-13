export default function ConfirmedOnline() {
  const googleCalendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" +
    encodeURIComponent("LC HL Maths Easter Crash Course — Online") +
    "&dates=20260407T100000Z/20260408T150000Z" +
    "&details=" +
    encodeURIComponent(
      "Day 1: Tue 7 Apr — Probability & Statistics + Coordinate Geometry\nDay 2: Wed 8 Apr — Differentiation & Integration + Complex Numbers & Functions\n\nZoom link will be sent to your email before the class."
    ) +
    "&location=" +
    encodeURIComponent("Online — Zoom");

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20260407T110000
DTEND:20260407T160000
SUMMARY:LC HL Maths Easter Crash Course — Day 1
DESCRIPTION:Probability & Statistics + Coordinate Geometry. Zoom link will be sent to your email before the class.
LOCATION:Online — Zoom
END:VEVENT
BEGIN:VEVENT
DTSTART:20260408T110000
DTEND:20260408T160000
SUMMARY:LC HL Maths Easter Crash Course — Day 2
DESCRIPTION:Differentiation & Integration + Complex Numbers & Functions. Zoom link will be sent to your email before the class.
LOCATION:Online — Zoom
END:VEVENT
END:VCALENDAR`;

  const icsHref = `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#0C1B33]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.12),_transparent_30%),linear-gradient(180deg,#FFFDF9_0%,#F7F1E8_100%)]">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-orange-200 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-4xl items-center px-6 py-16 lg:px-8">
          <div className="w-full rounded-[32px] border border-[#E8DFD3] bg-[#FFFDF9]/95 p-8 shadow-xl shadow-[#DCCFBD]/50 sm:p-12">

            {/* Logo */}
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-[#F1EBDC] bg-[#0C1B33] shadow-md">
                <img src="/cheze-logo.png" alt="Cheze Grinds" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="text-lg font-black tracking-tight">Cheze Grinds</p>
                <p className="text-sm text-[#6B7280]">Leaving Cert Higher Level Maths</p>
              </div>
            </div>

            {/* Badge */}
            <div className="mb-4 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
              Payment confirmed ✓
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              You're in.
              <span className="block text-orange-500">See you on Zoom.</span>
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-8 text-[#5F6470]">
              Your place on the <strong>Easter Revision Crash Course</strong> is confirmed. Here's everything you need to know.
            </p>

            {/* Date cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <DayCard
                day="Day 1"
                date="Tuesday 7 April 2026"
                time="11:00 AM – 4:00 PM"
                topics="Probability & Statistics · Coordinate Geometry"
                accent="orange"
              />
              <DayCard
                day="Day 2"
                date="Wednesday 8 April 2026"
                time="11:00 AM – 4:00 PM"
                topics="Differentiation & Integration · Complex Numbers & Functions"
                accent="navy"
              />
            </div>

            {/* WhatsApp Community */}
            <div className="mt-8 rounded-[24px] border border-[#E8DFD3] bg-[#F3E8D7]/45 p-6">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-500">
                Step 1 — Join the WhatsApp Community
              </p>
              <p className="mt-3 text-base leading-7 text-[#3C4658]">
                This is where you'll get your Zoom link, reminders, and any updates before and during the course. Join now so you don't miss anything.
              </p>
              <a
                href="https://chat.whatsapp.com/LO7KVWyJXv45VpCL0meQOF?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 text-base font-bold text-white transition hover:bg-[#1ebe5d]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.121 1.527 5.855L0 24l6.334-1.507A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.213-3.76.894.952-3.653-.234-.374A9.818 9.818 0 1112 21.818z"/>
                </svg>
                Join the WhatsApp Community
              </a>
            </div>

            {/* Add to calendar */}
            <div className="mt-6 rounded-[24px] border border-[#E8DFD3] bg-[#FFFDF9] p-6">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-500">
                Step 2 — Add to your calendar
              </p>
              <p className="mt-3 text-base leading-7 text-[#3C4658]">
                Block out both days now so nothing gets in the way.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-2xl bg-[#0C1B33] px-6 py-4 text-base font-bold text-white transition hover:bg-[#16284A]"
                >
                  Add to Google Calendar
                </a>
                <a
                  href={icsHref}
                  download="easter-crash-course-online.ics"
                  className="inline-flex items-center rounded-2xl bg-orange-500 px-6 py-4 text-base font-bold text-white transition hover:bg-orange-600"
                >
                  Add to Apple / Outlook
                </a>
              </div>
            </div>

            {/* Important note */}
            <div className="mt-8 rounded-[24px] bg-[#0C1B33] p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
                Important
              </p>
              <p className="mt-3 max-w-xl text-base leading-7 text-slate-200">
                Your spot is locked in — you don't need to do anything else right now. Just keep an eye on your email in the days before each session for your Zoom link and reminders.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

function DayCard({
  day, date, time, topics, accent,
}: {
  day: string; date: string; time: string; topics: string; accent: "orange" | "navy";
}) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-[#E8DFD3] bg-[#FFFDF9] shadow-sm">
      <div className={`px-6 py-3 ${accent === "orange" ? "bg-orange-500" : "bg-[#0C1B33]"}`}>
        <p className="text-sm font-black text-white">{day}</p>
      </div>
      <div className="p-5">
        <p className="text-base font-black text-[#0C1B33]">{date}</p>
        <p className="mt-1 text-sm font-semibold text-orange-500">{time}</p>
        <p className="mt-2 text-sm leading-6 text-[#5F6470]">{topics}</p>
      </div>
    </div>
  );
}

function Step({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
      <p className="text-base leading-7 text-[#3C4658]">{text}</p>
    </div>
  );
}
