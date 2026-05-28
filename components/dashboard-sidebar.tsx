"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  CalendarDays,
  LayoutDashboard,
  Settings,
  UserCircle2,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "Schedule", href: "/dashboard/schedule", icon: CalendarDays },
  { label: "Profile", href: "/dashboard/profile", icon: UserCircle2 },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full flex-col bg-white/90 px-5 py-6 backdrop-blur dark:bg-zinc-950/80">
      <div className="mb-8">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
          Workspace
        </p>
        <h1 className="mt-3 text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          HJ IHN
        </h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          hj.ihn@samsung.com
        </p>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/dashboard"
              ? pathname === item.href
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={[
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                isActive
                  ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/5",
              ].join(" ")}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-3xl border border-zinc-200 bg-zinc-50 p-4 dark:border-white/10 dark:bg-white/5">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Session
        </p>
        <p className="mt-3 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
          Active demo login
        </p>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
          Signed in as hj.ihn@samsung.com
        </p>
      </div>
    </aside>
  );
}
