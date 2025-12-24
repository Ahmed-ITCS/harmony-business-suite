import { MainLayout } from "@/components/layout/MainLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { ModuleOverview } from "@/components/dashboard/ModuleOverview";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { DollarSign, Users, Package, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <MainLayout title="Dashboard" subtitle="Welcome back, John">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Revenue"
          value="$1,247,893"
          change={12.5}
          icon={DollarSign}
          iconColor="text-finance"
          iconBg="bg-finance/10"
        />
        <StatCard
          title="Total Employees"
          value="156"
          change={4.2}
          icon={Users}
          iconColor="text-hr"
          iconBg="bg-hr/10"
        />
        <StatCard
          title="Inventory Items"
          value="2,847"
          change={-2.1}
          icon={Package}
          iconColor="text-inventory"
          iconBg="bg-inventory/10"
        />
        <StatCard
          title="Production Rate"
          value="89%"
          change={7.8}
          icon={TrendingUp}
          iconColor="text-manufacturing"
          iconBg="bg-manufacturing/10"
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>

      {/* Module Quick Access */}
      <ModuleOverview />
    </MainLayout>
  );
};

export default Index;
