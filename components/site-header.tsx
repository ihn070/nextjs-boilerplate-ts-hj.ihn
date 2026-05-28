import Link from "next/link";

const headerLinks = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Users", href: "/dashboard/users" },
  { label: "Analytics", href: "/dashboard/analytics" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100/80 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-white/10 dark:bg-zinc-950/85">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="flex items-center gap-3 self-start">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500 text-base font-bold text-white shadow-[0_12px_30px_-16px_rgba(16,185,129,0.8)]">
              N
            </span>
            <div>
              <p className="text-lg font-semibold tracking-tight text-emerald-700 dark:text-emerald-300">
                HJ IHN Workspace
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Naver-style portal workspace
              </p>
            </div>
          </Link>

          <div className="flex flex-1 items-center gap-3 lg:mx-8">
            <div className="flex h-12 flex-1 items-center rounded-full border-2 border-emerald-500 bg-white px-4 shadow-[0_10px_30px_-22px_rgba(16,185,129,0.7)] dark:bg-zinc-950">
              <span className="mr-3 text-lg font-semibold text-emerald-500">
                N
              </span>
              <input
                aria-label="Search"
                placeholder="Search workspace pages, users, or analytics"
                className="h-full w-full bg-transparent text-sm outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
              />
            </div>

            <button className="hidden h-12 shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-5 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-100 lg:inline-flex dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-200">
              Search
            </button>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-2">
          {headerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-emerald-200 hover:text-emerald-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-emerald-400/30 dark:hover:text-emerald-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
