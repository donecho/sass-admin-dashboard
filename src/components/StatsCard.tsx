import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  color,
}: StatsCardProps) {
  return (
    <div
      className="
        bg-white dark:bg-slate-800
        p-6 rounded-xl shadow-sm
        flex items-center justify-between
        transition hover:shadow-lg hover:-translate-y-1
      "
    >
      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {title}
        </p>
        <h2 className="text-2xl font-bold mt-1">{value}</h2>
      </div>

      <div className={`p-3 rounded-lg ${color} shadow-lg`}>
        <Icon size={22} className="text-white" />
      </div>
    </div>
  );
}
