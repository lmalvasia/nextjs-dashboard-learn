import CardWrapper, { Card } from "@/src/components/dashboard/cards";
import LatestInvoices from "@/src/components/dashboard/latest-invoices";
import RevenueChart from "@/src/components/dashboard/revenue-chart";
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from "@/src/components/skeletons";
import { fetchCardData } from "@/src/services/data";
import { lusitana } from "@/src/utils/fonts";
import { Suspense } from "react";

const Dashboard = async () => {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
};

export default Dashboard;