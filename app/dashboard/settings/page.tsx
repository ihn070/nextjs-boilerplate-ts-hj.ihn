import Link from "next/link";

const settings = [
  {
    label: "Email notifications",
    value: "Enabled",
    note: "Keep updates visible for the demo account.",
  },
  {
    label: "Theme",
    value: "Auto",
    note: "Follows the system color scheme.",
  },
  {
    label: "Workspace mode",
    value: "Signed-in demo",
    note: "No Google OAuth flow on this branch of the app.",
  },
];

export default function SettingsPage() {
  return (
    <main className="px-6 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className="rounded-[2rem] border border-zinc-200/80 bg-white/85 p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.3)] backdrop-blur dark:border-white/10 dark:bg-white/5">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
            Settings
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Workspace settings
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            A placeholder settings page for the sidebar route. You can replace
            these cards with real toggles, forms, and preferences later.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {settings.map((item) => (
            <article
              key={item.label}
              className="rounded-[1.75rem] border border-zinc-200/80 bg-white/85 p-7 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.25)] backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                {item.label}
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-tight">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                {item.note}
              </p>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-zinc-200/80 bg-white/85 p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.3)] backdrop-blur dark:border-white/10 dark:bg-white/5">
          <Link
            href="/dashboard"
            className="inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Back to dashboard
          </Link>
        </section>
      </div>
    </main>
  );
}
