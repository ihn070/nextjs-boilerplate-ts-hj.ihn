import Link from "next/link";

const routeCards = [
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    body: "Sample charts, usage signals, and KPI cards.",
  },
  {
    title: "Schedule",
    href: "/dashboard/schedule",
    body: "A simple weekly planner and upcoming tasks view.",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    body: "A fixed account profile for hj.ihn@samsung.com.",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    body: "Preferences, workspace options, and app controls.",
  },
];

const metrics = [
  { label: "Open tasks", value: "12" },
  { label: "Team members", value: "4" },
  { label: "Deploy status", value: "Healthy" },
  { label: "Last sync", value: "Just now" },
];

export default function DashboardPage() {
  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(24,24,27,0.18),_transparent_28%),linear-gradient(180deg,_#f4f4f5_0%,_#e4e4e7_100%)] px-6 py-8 dark:bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_28%),linear-gradient(180deg,_#09090b_0%,_#111827_100%)] sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <section className="rounded-[2rem] border border-zinc-200/80 bg-white/85 p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.3)] backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                Dashboard
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Welcome, HJ IHN
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
                This is the dashboard home. Use the sidebar to jump into each
                sample page and keep building without the Google sign-in flow.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-700 dark:text-emerald-300">
              Active session: hj.ihn@samsung.com
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                  {metric.label}
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-tight">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          {routeCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-[1.75rem] border border-zinc-200/80 bg-white/85 p-7 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.25)] backdrop-blur transition-transform hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Section
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                {card.body}
              </p>
              <p className="mt-6 text-sm font-medium text-zinc-950 transition-colors group-hover:translate-x-1 dark:text-zinc-50">
                Open page -
              </p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
