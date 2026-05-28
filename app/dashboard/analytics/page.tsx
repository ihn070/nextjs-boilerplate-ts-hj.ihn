import Link from "next/link";

const stats = [
  { label: "Weekly visits", value: "1,284" },
  { label: "Active users", value: "342" },
  { label: "Conversion", value: "8.4%" },
  { label: "Growth", value: "+12.1%" },
];

const bars = [68, 52, 81, 44, 92, 63, 74];

export default function AnalyticsPage() {
  return (
    <main className="px-6 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <section className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_24px_80px_-40px_rgba(16,185,129,0.3)] dark:border-white/10 dark:bg-white/5">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-300">
            Analytics
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Metrics overview
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            A sample analytics page for the dashboard sidebar. This is just
            placeholder data so you can wire real charts later.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <article
              key={item.label}
              className="rounded-[1.5rem] border border-emerald-100 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(16,185,129,0.25)] dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">
                {item.label}
              </p>
              <p className="mt-3 text-3xl font-semibold tracking-tight">
                {item.value}
              </p>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_24px_80px_-40px_rgba(16,185,129,0.3)] dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-300">
                Activity
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Sample weekly trend
              </h2>
            </div>
            <Link
              href="/dashboard"
              className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-100 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-200 dark:hover:bg-emerald-500/20"
            >
              Back to dashboard
            </Link>
          </div>

          <div className="mt-8 flex items-end gap-3">
            {bars.map((height, index) => (
              <div key={index} className="flex flex-1 flex-col items-center gap-3">
                <div
                  className="w-full rounded-t-2xl bg-emerald-500 dark:bg-emerald-300"
                  style={{ height: `${height * 2}px` }}
                />
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {index + 1}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
