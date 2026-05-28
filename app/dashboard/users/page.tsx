export const dynamic = "force-dynamic";

import { getSql } from "@/lib/db";
import { UserCrudBoard } from "@/components/user-crud-board";

export default async function UsersPage() {
  const sql = getSql();
  const users = await sql<
    {
      id: string;
      name: string | null;
      email: string;
      createdAt: Date;
      updatedAt: Date;
    }[]
  >`
    select
      id,
      name,
      email,
      "createdAt",
      "updatedAt"
    from "User"
    order by "createdAt" desc
  `;

  const payload = users.map((user: (typeof users)[number]) => ({
    ...user,
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString(),
  }));

  return (
    <main className="px-6 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <section className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_24px_80px_-40px_rgba(16,185,129,0.3)] dark:border-white/10 dark:bg-white/5">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-300">
            Users CRUD
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Live database tester
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            This page talks to Neon through Prisma. Use it to create demo users,
            edit email addresses, and delete rows while watching the database
            update immediately.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">
                Total users
              </p>
              <p className="mt-3 text-3xl font-semibold">{users.length}</p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">
                Latest
              </p>
              <p className="mt-3 text-sm font-semibold">
                {users[0]?.email ?? "No records yet"}
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">
                Note
              </p>
              <p className="mt-3 text-sm font-semibold">
                Changes revalidate this page and the dashboard.
              </p>
            </div>
          </div>
        </section>

        <UserCrudBoard users={payload} />
      </div>
    </main>
  );
}
