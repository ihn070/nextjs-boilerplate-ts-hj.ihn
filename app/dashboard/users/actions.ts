'use server';

import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";

import { getSql } from "@/lib/db";
import type { UserFormState } from "./state";

function readField(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

function normalizeEmail(email: string) {
  return email.toLowerCase();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function toFriendlyError(error: unknown) {
  const maybeError = error as { code?: string } | null;

  if (maybeError?.code === "23505") {
    return "That email is already in use.";
  }

  return error instanceof Error ? error.message : "Something went wrong.";
}

export async function createUser(
  _state: UserFormState,
  formData: FormData
): Promise<UserFormState> {
  const name = readField(formData, "name");
  const email = normalizeEmail(readField(formData, "email"));

  if (!email) {
    return { status: "error", message: "Email is required." };
  }

  if (!isValidEmail(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }

  try {
    const sql = getSql();
    const [user] = await sql<{ email: string }[]>`
      insert into "User" ("id", "name", "email", "createdAt", "updatedAt")
      values (${randomUUID()}, ${name || null}, ${email}, now(), now())
      returning "email"
    `;

    revalidatePath("/dashboard/users");
    revalidatePath("/dashboard");

    return {
      status: "success",
      message: `Created ${user.email}.`,
    };
  } catch (error) {
    return { status: "error", message: toFriendlyError(error) };
  }
}

export async function updateUser(
  _state: UserFormState,
  formData: FormData
): Promise<UserFormState> {
  const id = readField(formData, "id");
  const name = readField(formData, "name");
  const email = normalizeEmail(readField(formData, "email"));

  if (!id) {
    return { status: "error", message: "Missing user id." };
  }

  if (!email) {
    return { status: "error", message: "Email is required." };
  }

  if (!isValidEmail(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }

  try {
    const sql = getSql();
    const [user] = await sql<{ email: string }[]>`
      update "User"
      set
        "name" = ${name || null},
        "email" = ${email},
        "updatedAt" = now()
      where id = ${id}
      returning "email"
    `;

    if (!user) {
      return { status: "error", message: "User not found." };
    }

    revalidatePath("/dashboard/users");
    revalidatePath("/dashboard");

    return {
      status: "success",
      message: `Saved ${user.email}.`,
    };
  } catch (error) {
    return { status: "error", message: toFriendlyError(error) };
  }
}

export async function deleteUser(
  _state: UserFormState,
  formData: FormData
): Promise<UserFormState> {
  const id = readField(formData, "id");

  if (!id) {
    return { status: "error", message: "Missing user id." };
  }

  try {
    const sql = getSql();
    const [user] = await sql<{ email: string }[]>`
      delete from "User"
      where id = ${id}
      returning "email"
    `;

    if (!user) {
      return { status: "error", message: "User not found." };
    }

    revalidatePath("/dashboard/users");
    revalidatePath("/dashboard");

    return {
      status: "success",
      message: `Deleted ${user.email}.`,
    };
  } catch (error) {
    return { status: "error", message: toFriendlyError(error) };
  }
}
