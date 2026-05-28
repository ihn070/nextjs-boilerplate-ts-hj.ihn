import type { ReactNode } from "react";
import { redirect } from "next/navigation";

import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { getCurrentUser } from "@/lib/session";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f5f8f5_0%,_#eef5ef_100%)] text-zinc-950 dark:bg-[linear-gradient(180deg,_#08110c_0%,_#0f1713_100%)] dark:text-zinc-50 lg:grid lg:grid-cols-[292px_1fr]">
      <div className="border-b border-emerald-100/80 lg:border-b-0 lg:border-r dark:border-white/10">
        <DashboardSidebar currentEmail={currentUser.email} />
      </div>

      <div className="min-h-0">
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
