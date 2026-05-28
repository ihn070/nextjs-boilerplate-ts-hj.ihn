import type { ReactNode } from "react";
import { DashboardSidebar } from "@/components/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 lg:grid lg:grid-cols-[280px_1fr]">
      <div className="border-b border-zinc-200/80 lg:border-b-0 lg:border-r dark:border-white/10">
        <DashboardSidebar />
      </div>

      <div className="min-h-0">
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
