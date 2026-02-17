import StatsCard from "../components/StatsCard";
import SalesChart from "../components/charts/SalesChart";
import UserChart from "../components/charts/UserChart";
import { DollarSign, Users, ShoppingCart } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <StatsCard
          title="Revenue"
          value="$24,500"
          icon={DollarSign}
          color="bg-green-500"
        />

        <StatsCard
          title="Users"
          value="1,245"
          icon={Users}
          color="bg-blue-500"
        />

        <StatsCard
          title="Orders"
          value="320"
          icon={ShoppingCart}
          color="bg-purple-500"
        />
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <SalesChart />
        <UserChart />
      </div>
    </>
  );
}
