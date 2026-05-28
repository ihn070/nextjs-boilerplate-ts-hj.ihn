'use server';

import { redirect } from "next/navigation";

import { ADMIN_EMAIL, isValidEmail, normalizeEmail } from "@/lib/session-constants";
import {
  clearSession,
  ensureAdminUser,
  findUserByEmail,
  setSession,
} from "@/lib/session";

import type { LoginState } from "./state";

function readField(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

export async function loginWithEmail(
  _state: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = normalizeEmail(readField(formData, "email"));

  if (!email) {
    return { status: "error", message: "Email is required." };
  }

  if (!isValidEmail(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  await ensureAdminUser();

  const user = await findUserByEmail(email);

  if (!user) {
    return {
      status: "error",
      message: `No account found for ${email}. Try ${ADMIN_EMAIL} or add the email to the User table first.`,
    };
  }

  await setSession(user.email);
  redirect("/dashboard");
}

export async function signOut() {
  await clearSession();
  redirect("/login");
}
