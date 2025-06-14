import {
  OverviewCards,
  RecentOrders,
  // TopProducts,
  SalesChart,
} from "../../components/dashboard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <RecentOrders />
      {/* <TopProducts /> */}
      <SalesChart />
      <OverviewCards />
    </div>
  );
}
