import Link from "next/link";

const routeCards = [
  {
    title: "Email Login",
    href: "/login",
    body: "Sign in with a database-backed email-only flow.",
  },
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
    title: "Users CRUD",
    href: "/dashboard/users",
    body: "Create, edit, and delete live database records.",
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

export function DashboardOverview() {
  return (
    <>
      <section className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_20px_70px_-45px_rgba(16,185,129,0.35)] dark:border-white/10 dark:bg-white/5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-300">
              Dashboard
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Portal overview
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
              The dashboard now feels closer to a polished portal: bright
              surfaces, calmer spacing, and clear entry points for login,
              database testing, and supporting pages.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
            Database-ready workspace
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-[0_14px_30px_-24px_rgba(16,185,129,0.35)] dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">
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
            className="group rounded-[1.75rem] border border-zinc-200 bg-white p-7 shadow-[0_16px_50px_-36px_rgba(16,185,129,0.28)] transition-transform hover:-translate-y-0.5 hover:border-emerald-200 dark:border-white/10 dark:bg-white/5"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">
              Section
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              {card.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              {card.body}
            </p>
            <p className="mt-6 text-sm font-medium text-emerald-700 transition-colors group-hover:translate-x-1 dark:text-emerald-300">
              Open page →
            </p>
          </Link>
        ))}
      </section>
    </>
  );
}
