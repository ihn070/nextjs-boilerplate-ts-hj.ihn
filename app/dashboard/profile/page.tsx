import Link from "next/link";

const profileRows = [
  { label: "Name", value: "HJ IHN" },
  { label: "Email", value: "hj.ihn@samsung.com" },
  { label: "Role", value: "Workspace owner" },
  { label: "Status", value: "Active session" },
];

export default function ProfilePage() {
  return (
    <main className="px-6 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_24px_80px_-40px_rgba(16,185,129,0.3)] dark:border-white/10 dark:bg-white/5">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-300">
            Profile
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Signed-in account
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            This profile page keeps the demo login account visible so you can
            wire UI and API calls against a stable identity.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_24px_80px_-40px_rgba(16,185,129,0.3)] dark:border-white/10 dark:bg-white/5">
            <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-emerald-200 bg-emerald-50/60 p-8 text-center dark:border-white/10 dark:bg-white/5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-2xl font-semibold text-white">
                HI
              </div>
              <h2 className="mt-5 text-2xl font-semibold">HJ IHN</h2>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                hj.ihn@samsung.com
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_24px_80px_-40px_rgba(16,185,129,0.3)] dark:border-white/10 dark:bg-white/5">
            <div className="grid gap-4 sm:grid-cols-2">
              {profileRows.map((row) => (
                <div
                  key={row.label}
                  className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">
                    {row.label}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                    {row.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/dashboard"
                className="inline-flex rounded-full bg-emerald-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-600 dark:bg-emerald-400 dark:text-zinc-950 dark:hover:bg-emerald-300"
              >
                Back to dashboard
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
