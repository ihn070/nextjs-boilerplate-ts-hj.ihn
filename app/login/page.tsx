import Link from "next/link";
import { redirect } from "next/navigation";

import { EmailLoginForm } from "@/components/email-login-form";
import { getCurrentUser } from "@/lib/session";

export default async function LoginPage() {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f5f8f5_0%,_#eef5ef_100%)] px-6 py-10 text-zinc-950 dark:bg-[linear-gradient(180deg,_#08110c_0%,_#0f1713_100%)] dark:text-zinc-50 sm:px-8 lg:px-10">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[2.2rem] border border-emerald-100 bg-white p-8 shadow-[0_24px_80px_-44px_rgba(16,185,129,0.35)] dark:border-white/10 dark:bg-white/5 sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-300">
            Email Login
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Sign in with your email
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            This workspace checks whether your email exists in the User table.
            No password, no OAuth, just a fast database lookup.
          </p>

          <div className="mt-8 grid gap-3">
            <div className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50/70 p-5 dark:border-emerald-500/20 dark:bg-emerald-500/10">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-300">
                Admin account
              </p>
              <p className="mt-3 text-sm font-semibold">
                admin@samung.com
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                If the account does not exist yet, it will be seeded into the
                User table the first time you sign in.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-5 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                What you get
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                <li>• Email-only sign in backed by the database</li>
                <li>• Dashboard routes are protected after login</li>
                <li>• Sign out clears the session cookie immediately</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-100 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-200"
            >
              Back to home
            </Link>
          </div>
        </section>

        <section className="rounded-[2.2rem] border border-emerald-100 bg-white p-8 shadow-[0_24px_80px_-44px_rgba(16,185,129,0.35)] dark:border-white/10 dark:bg-white/5 sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-300">
            Access Form
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Enter an email to continue
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Use any email that already exists in the database. The default demo
            account is ready for quick testing.
          </p>

          <div className="mt-8 rounded-[1.75rem] border border-dashed border-emerald-200 bg-emerald-50/60 p-6 dark:border-white/10 dark:bg-white/5">
            <EmailLoginForm />
          </div>
        </section>
      </div>
    </main>
  );
}
