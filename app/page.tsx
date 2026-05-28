import Link from "next/link";

const projectFacts = [
  { label: "Owner", value: "HJ IHN" },
  { label: "Email", value: "hj.ihn@samsung.com" },
  { label: "Mode", value: "Signed-in demo" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(24,24,27,0.12),_transparent_36%),linear-gradient(180deg,_#fafaf9_0%,_#f4f4f5_100%)] text-zinc-950 dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_36%),linear-gradient(180deg,_#09090b_0%,_#111827_100%)] dark:text-zinc-50">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-12 sm:px-10 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-zinc-200/80 bg-white/80 p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.35)] backdrop-blur dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
              Info
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              HJ IHN workspace overview
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
              This root page is kept as an information screen. The actual
              working area lives in the dashboard route, which opens with a
              sidebar and task-focused layout.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {projectFacts.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-zinc-950 dark:text-zinc-50">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Go to dashboard
              </Link>
              <div className="inline-flex h-12 items-center rounded-full border border-zinc-200 bg-white px-5 text-sm text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                Logged in as hj.ihn@samsung.com
              </div>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-zinc-200/80 bg-zinc-950 p-8 text-zinc-50 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.5)] dark:border-white/10">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-400">
              Quick Notes
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm text-zinc-400">Current page</p>
                <p className="mt-2 text-lg font-medium">Info only</p>
              </div>
              <div>
                <p className="text-sm text-zinc-400">Dashboard</p>
                <p className="mt-2 text-lg font-medium">
                  Separate route with sidebar navigation
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-400">Session state</p>
                <p className="mt-2 text-lg font-medium">
                  Fixed signed-in demo account
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
