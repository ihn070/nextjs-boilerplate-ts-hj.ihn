import { DashboardOverview } from "@/components/dashboard-overview";

export default function DashboardPage() {
  return (
    <main className="px-6 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <DashboardOverview />
      </div>
    </main>
  );
}
