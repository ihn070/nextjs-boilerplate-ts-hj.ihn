import Link from "next/link";

const events = [
  { time: "09:30", title: "Standup", note: "Team sync and blockers." },
  { time: "11:00", title: "Design review", note: "Dashboard flow polish." },
  { time: "14:00", title: "API check-in", note: "Confirm data model shape." },
  { time: "16:30", title: "Wrap-up", note: "Prep notes for tomorrow." },
];

export default function SchedulePage() {
  return (
    <main className="px-6 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className="rounded-[2rem] border border-zinc-200/80 bg-white/85 p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.3)] backdrop-blur dark:border-white/10 dark:bg-white/5">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
            Schedule
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Weekly planner
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            This page acts as a sample calendar view. It is linked from the
            sidebar and can later be wired to a real scheduler.
          </p>
        </section>

        <section className="rounded-[2rem] border border-zinc-200/80 bg-white/85 p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.3)] backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.time}
                className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    {event.time}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold">{event.title}</h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                  {event.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/dashboard"
              className="inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Back to dashboard
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
