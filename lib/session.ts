import "server-only";

import { randomUUID } from "crypto";

import { cookies } from "next/headers";

import { getSql } from "@/lib/db";
import {
  ADMIN_EMAIL,
  normalizeEmail,
  SESSION_COOKIE_NAME,
} from "@/lib/session-constants";

export type WorkspaceUser = {
  id: string;
  name: string | null;
  email: string;
};

function sessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  };
}

export async function ensureAdminUser() {
  const sql = getSql();
  const [user] = await sql<WorkspaceUser[]>`
    insert into "User" ("id", "name", "email", "createdAt", "updatedAt")
    values (${randomUUID()}, ${"Admin"}, ${ADMIN_EMAIL}, now(), now())
    on conflict ("email") do update set
      "name" = excluded."name",
      "updatedAt" = now()
    returning id, name, email
  `;

  return user ?? null;
}

export async function findUserByEmail(email: string) {
  const normalizedEmail = normalizeEmail(email);
  const sql = getSql();

  const [user] = await sql<WorkspaceUser[]>`
    select id, name, email
    from "User"
    where email = ${normalizedEmail}
    limit 1
  `;

  return user ?? null;
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const sessionEmail = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!sessionEmail) {
    return null;
  }

  return findUserByEmail(sessionEmail);
}

export async function setSession(email: string) {
  const cookieStore = await cookies();
  cookieStore.set(
    SESSION_COOKIE_NAME,
    normalizeEmail(email),
    sessionCookieOptions()
  );
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}
