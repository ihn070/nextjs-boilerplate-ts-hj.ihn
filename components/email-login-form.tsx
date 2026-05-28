"use client";

import { useActionState } from "react";

import { loginWithEmail } from "@/app/login/actions";
import { initialLoginState, type LoginState } from "@/app/login/state";
import { Button } from "@/components/ui/button";

function LoginMessage({ state }: { state: LoginState }) {
  if (state.status === "idle" || !state.message) {
    return null;
  }

  return (
    <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-500/20 dark:bg-rose-500/10 dark:text-rose-200">
      {state.message}
    </p>
  );
}

export function EmailLoginForm() {
  const [state, action, pending] = useActionState(
    loginWithEmail,
    initialLoginState
  );

  return (
    <form action={action} className="grid gap-4">
      <label className="grid gap-2 text-sm">
        <span className="font-medium text-emerald-700 dark:text-emerald-300">
          Email
        </span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="admin@samung.com"
          className="h-12 rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none transition focus:border-emerald-400 dark:border-white/10 dark:bg-zinc-950/60"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={pending} className="h-12 px-5">
          {pending ? "Checking..." : "Continue with email"}
        </Button>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Only emails that exist in the User table can sign in.
        </p>
      </div>

      <LoginMessage state={state} />
    </form>
  );
}
