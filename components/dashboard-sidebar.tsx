"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  CalendarDays,
  House,
  LayoutDashboard,
  Settings,
  UserCircle2,
  UserRoundPen,
} from "lucide-react";

import { signOut } from "@/app/login/actions";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/", icon: House },
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Users", href: "/dashboard/users", icon: UserRoundPen },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "Schedule", href: "/dashboard/schedule", icon: CalendarDays },
  { label: "Profile", href: "/dashboard/profile", icon: UserCircle2 },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar({
  currentEmail,
}: {
  currentEmail?: string | null;
}) {
  const pathname = usePathname();

  return (
    <aside className="flex h-full flex-col bg-white/90 px-5 py-6 backdrop-blur dark:bg-zinc-950/80">
      <div className="mb-8 rounded-[1.75rem] border border-emerald-100 bg-emerald-50/60 p-5 dark:border-emerald-500/20 dark:bg-emerald-500/10">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-300">
          Workspace
        </p>
        <h1 className="mt-3 text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          HJ IHN
        </h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          {currentEmail ?? "Email login required"}
        </p>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === item.href
              : item.href === "/dashboard"
              ? pathname === item.href
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={[
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                isActive
                  ? "bg-emerald-500 text-white shadow-[0_12px_30px_-18px_rgba(16,185,129,0.8)] dark:bg-emerald-400 dark:text-zinc-950"
                  : "text-zinc-600 hover:bg-emerald-50 dark:text-zinc-300 dark:hover:bg-white/5",
              ].join(" ")}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-3xl border border-emerald-100 bg-white p-4 dark:border-white/10 dark:bg-white/5">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">
          Session
        </p>
        <p className="mt-3 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
          {currentEmail ? "Signed in" : "Not signed in"}
        </p>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
          {currentEmail ?? "Use email login to enter the workspace."}
        </p>

        {currentEmail ? (
          <form action={signOut} className="mt-4">
            <Button
              type="submit"
              variant="secondary"
              size="sm"
              className="w-full"
            >
              Sign out
            </Button>
          </form>
        ) : (
          <Link
            href="/login"
            className="mt-4 inline-flex h-9 w-full items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 px-3 text-sm font-medium text-emerald-700 transition-colors hover:bg-emerald-100 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-200"
          >
            Go to login
          </Link>
        )}
      </div>
    </aside>
  );
}
