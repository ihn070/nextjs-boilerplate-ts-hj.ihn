import Link from "next/link";

import { DashboardOverview } from "@/components/dashboard-overview";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { getCurrentUser } from "@/lib/session";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f5f8f5_0%,_#eef5ef_100%)] text-zinc-950 dark:bg-[linear-gradient(180deg,_#08110c_0%,_#0f1713_100%)] dark:text-zinc-50">
      <div className="min-h-screen lg:grid lg:grid-cols-[292px_1fr]">
        <div className="border-b border-emerald-100/80 bg-white/90 backdrop-blur lg:border-b-0 lg:border-r dark:border-white/10 dark:bg-zinc-950/80">
          <DashboardSidebar currentEmail={currentUser?.email} />
        </div>

        <section className="px-6 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
            <section className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-[0_20px_70px_-40px_rgba(16,185,129,0.35)] dark:border-white/10 dark:bg-white/5">
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="bg-[linear-gradient(135deg,_rgba(16,185,129,0.12),_rgba(255,255,255,0.98)_65%)] p-8 sm:p-10 dark:bg-[linear-gradient(135deg,_rgba(16,185,129,0.16),_rgba(8,17,12,0.85)_65%)]">
                  <p className="text-sm font-medium uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-300">
                    Portal Home
                  </p>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Email login workspace
                  </h1>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
                    This workspace opens with the sidebar and dashboard in view,
                    while login is handled by a simple email lookup against the
                    database.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {currentUser ? (
                      <div className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-medium text-white shadow-[0_14px_30px_-18px_rgba(16,185,129,0.8)]">
                        Signed in as {currentUser.email}
                      </div>
                    ) : (
                      <Link
                        href="/login"
                        className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-medium text-white shadow-[0_14px_30px_-18px_rgba(16,185,129,0.8)] transition-colors hover:bg-emerald-600"
                      >
                        Go to login
                      </Link>
                    )}
                    <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-medium text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-200">
                      Database-backed access
                    </div>
                  </div>
                </div>

                <div className="border-t border-emerald-100 bg-zinc-50 p-8 sm:p-10 lg:border-l lg:border-t-0 dark:border-white/10 dark:bg-white/5">
                  <div className="rounded-[1.75rem] border border-dashed border-emerald-200 bg-white p-6 dark:border-emerald-500/20 dark:bg-zinc-950/40">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                      Quick Access
                    </p>
                    <div className="mt-4 rounded-3xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                      <p className="text-sm text-emerald-700 dark:text-emerald-200">
                        Enter the login page to authenticate with an email that
                        exists in the User table.
                      </p>
                    </div>
                    <div className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                      <p>• Email-only sign in keeps the flow lightweight.</p>
                      <p>• The admin account is ready for quick testing.</p>
                      <p>• Dashboard routes stay protected after login.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <DashboardOverview />
          </div>
        </section>
      </div>
    </main>
  );
}
