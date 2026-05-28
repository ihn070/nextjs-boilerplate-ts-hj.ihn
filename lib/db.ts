import "server-only";

import postgres from "postgres";

const globalForSql = globalThis as unknown as {
  sql?: ReturnType<typeof postgres>;
};

export function getSql() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required.");
  }

  globalForSql.sql ??= postgres(databaseUrl, {
    max: 1,
    prepare: false,
    ssl: "require",
  });

  return globalForSql.sql;
}
