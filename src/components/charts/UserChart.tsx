import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Mon", users: 30 },
  { name: "Tue", users: 45 },
  { name: "Wed", users: 60 },
  { name: "Thu", users: 40 },
  { name: "Fri", users: 90 },
  { name: "Sat", users: 75 },
  { name: "Sun", users: 50 },
];

export default function UserChart() {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
      <h2 className="font-semibold mb-4">Weekly Users</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
