export default function MasterclassConfirmed() {
  const googleCalendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" +
    encodeURIComponent("LC HL Maths Probability Masterclass") +
    "&dates=20260308T183000Z/20260308T200000Z" +
    "&details=" +
    encodeURIComponent(
      "Live Probability Masterclass with Cheze Grinds. Zoom link will be sent to your email and WhatsApp before the class."
    ) +
    "&location=" +
    encodeURIComponent("Online");

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20260308T183000Z
DTEND:20260308T200000Z
SUMMARY:LC HL Maths Probability Masterclass
DESCRIPTION:Live Probability Masterclass with Cheze Grinds. Zoom link will be sent to your email and WhatsApp before the class.
LOCATION:Online
END:VEVENT
END:VCALENDAR`;

  const icsHref = `data:text/calendar;charset=utf8,${encodeURIComponent(
    icsContent
  )}`;

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#0C1B33]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.12),_transparent_30%),linear-gradient(180deg,#FFFDF9_0%,#F7F1E8_100%)]">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-orange-200 blur-3xl" />
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-5xl items-center px-6 py-16 lg:px-8">
          <div className="w-full rounded-[32px] border border-[#E8DFD3] bg-[#FFFDF9]/95 p-8 shadow-xl shadow-[#DCCFBD]/50 sm:p-12">
            <div className="mb-8 flex items-center gap-4">
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

            <div className="mb-4 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
              Payment confirmed
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              You’re in.
              <span className="block text-orange-500">
                Your spot is officially secured.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5F6470]">
              Your place for the <strong>Leaving Cert HL Maths Probability Masterclass</strong> is now confirmed.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <InfoCard
                title="Date"
                text="Sunday 8 March 2026"
              />
              <InfoCard
                title="Time"
                text="6:30 PM – 8:00 PM"
              />
              <InfoCard
                title="Location"
                text="Zoom"
              />
            </div>

            <div className="mt-8 rounded-[24px] border border-[#E8DFD3] bg-[#F3E8D7]/45 p-6">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-500">
                What happens next
              </p>

              <div className="mt-4 space-y-3 text-[#3C4658]">
                <Step text="You’ll receive the Zoom link before the class." />
                <Step text="You’ll get reminders by email and WhatsApp." />
                <Step text="Add it to your calendar now so you don’t miss it." />
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-orange-500">
                Add to calendar
              </p>

              <div className="flex flex-wrap gap-3">
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
                  download="probability-masterclass.ics"
                  className="inline-flex items-center rounded-2xl bg-orange-500 px-6 py-4 text-base font-bold text-white transition hover:bg-orange-600"
                >
                  Add to Apple / Outlook
                </a>
              </div>
            </div>

            <div className="mt-10 rounded-[24px] bg-[#0C1B33] p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
                Important
              </p>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-100">
                Your place is already confirmed. You do not need to do anything else right now.
                Just make sure you keep an eye on your email and WhatsApp before the class.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[24px] border border-[#E8DFD3] bg-[#FFFDF9] p-5 shadow-sm">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-500">
        {title}
      </p>
      <p className="mt-2 text-lg font-bold text-[#0C1B33]">{text}</p>
    </div>
  );
}

function Step({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
      <p className="text-base leading-7">{text}</p>
    </div>
  );
}