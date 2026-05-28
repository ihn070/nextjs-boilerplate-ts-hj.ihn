"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  createUser,
  deleteUser,
  updateUser,
} from "@/app/dashboard/users/actions";
import { initialUserFormState, type UserFormState } from "@/app/dashboard/users/state";

type UserRecord = {
  id: string;
  name: string | null;
  email: string;
  createdAt: string;
  updatedAt: string;
};

function ActionMessage({
  state,
}: {
  state: UserFormState;
}) {
  if (state.status === "idle" || !state.message) {
    return null;
  }

  return (
    <p
      className={[
        "text-sm",
        state.status === "success"
          ? "text-emerald-700 dark:text-emerald-300"
          : "text-rose-600 dark:text-rose-300",
      ].join(" ")}
    >
      {state.message}
    </p>
  );
}

function UserRow({ user }: { user: UserRecord }) {
  const [updateState, updateAction, updatePending] = useActionState(
    updateUser,
    initialUserFormState
  );
  const [deleteState, deleteAction, deletePending] = useActionState(
    deleteUser,
    initialUserFormState
  );

  return (
    <div className="grid gap-4 rounded-[1.5rem] border border-emerald-100 bg-white p-4 shadow-[0_16px_45px_-35px_rgba(16,185,129,0.25)] xl:grid-cols-[1.2fr_0.6fr] dark:border-white/10 dark:bg-white/5">
      <form action={updateAction} className="grid gap-3">
        <input type="hidden" name="id" value={user.id} />

        <div className="grid gap-3 md:grid-cols-[1fr_1.2fr]">
          <label className="grid gap-2 text-sm">
            <span className="text-emerald-700 dark:text-emerald-300">Name</span>
            <input
              name="name"
              defaultValue={user.name ?? ""}
              className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm outline-none transition focus:border-emerald-400 dark:border-white/10 dark:bg-zinc-950/60"
              placeholder="Optional"
            />
          </label>

          <label className="grid gap-2 text-sm">
            <span className="text-emerald-700 dark:text-emerald-300">Email</span>
            <input
              name="email"
              defaultValue={user.email}
              className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm outline-none transition focus:border-emerald-400 dark:border-white/10 dark:bg-zinc-950/60"
              placeholder="name@example.com"
            />
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" disabled={updatePending}>
            {updatePending ? "Saving..." : "Save changes"}
          </Button>

          <Button
            type="submit"
            variant="destructive"
            formAction={deleteAction}
            disabled={deletePending}
          >
            {deletePending ? "Deleting..." : "Delete"}
          </Button>
        </div>

        <div className="text-xs text-zinc-500 dark:text-zinc-400">
          Created {new Date(user.createdAt).toLocaleString()} | Updated{" "}
          {new Date(user.updatedAt).toLocaleString()}
        </div>

        <div className="grid gap-1">
          <ActionMessage state={updateState} />
          <ActionMessage state={deleteState} />
        </div>
      </form>
    </div>
  );
}

export function UserCrudBoard({ users }: { users: UserRecord[] }) {
  const [createState, createAction, createPending] = useActionState(
    createUser,
    initialUserFormState
  );

  return (
    <div className="grid gap-6">
      <Card className="border-emerald-100 bg-white shadow-[0_24px_80px_-40px_rgba(16,185,129,0.3)] dark:border-white/10 dark:bg-white/5">
        <CardHeader className="border-b border-emerald-100/70 dark:border-white/10">
          <CardDescription className="text-emerald-600 dark:text-emerald-300">
            Database test bench
          </CardDescription>
          <CardTitle className="text-2xl">
            Create, edit, and delete Users
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 pt-4">
          <form
            action={createAction}
            className="grid gap-3 rounded-[1.5rem] border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/10"
          >
            <div className="grid gap-3 md:grid-cols-[1fr_1.2fr_auto]">
              <label className="grid gap-2 text-sm">
                <span className="text-emerald-700 dark:text-emerald-300">
                  Name
                </span>
                <input
                  name="name"
                  placeholder="HJ IHN"
                  className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm outline-none transition focus:border-emerald-400 dark:border-white/10 dark:bg-zinc-950/60"
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span className="text-emerald-700 dark:text-emerald-300">
                  Email
                </span>
                <input
                  name="email"
                  placeholder="demo@example.com"
                  className="h-11 rounded-xl border border-zinc-200 bg-white px-3 text-sm outline-none transition focus:border-emerald-400 dark:border-white/10 dark:bg-zinc-950/60"
                />
              </label>

              <div className="flex items-end">
                <Button type="submit" disabled={createPending}>
                  {createPending ? "Creating..." : "Create user"}
                </Button>
              </div>
            </div>

            <ActionMessage state={createState} />
          </form>

          <div className="grid gap-3">
            {users.length > 0 ? (
              users.map((user) => <UserRow key={user.id} user={user} />)
            ) : (
              <div className="rounded-[1.5rem] border border-dashed border-emerald-200 bg-emerald-50/60 p-8 text-sm text-zinc-500 dark:border-white/15 dark:bg-white/5 dark:text-zinc-400">
                No users yet. Create one above to start testing CRUD.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
