import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 900 },
  { name: "Mar", sales: 700 },
  { name: "Apr", sales: 1200 },
  { name: "May", sales: 1000 },
  { name: "Jun", sales: 1400 },
];

export default function SalesChart() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
      <h2 className="font-semibold mb-4">Sales Overview</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
