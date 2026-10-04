import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: "increase" | "decrease";
  };
  icon: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
}

export function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  iconColor = "text-primary",
  iconBgColor = "bg-primary/10",
}: StatsCardProps) {
  return (
    <div className="rounded-xl border border-dark-700 bg-dark-900 p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-400">{title}</p>
          <p className="mt-2 text-3xl font-bold text-white">{value}</p>
          {change && (
            <p
              className={cn(
                "mt-2 text-sm font-medium",
                change.type === "increase" ? "text-accent-green" : "text-accent-red"
              )}
            >
              {change.type === "increase" ? "+" : "-"}
              {Math.abs(change.value)}%{" "}
              <span className="text-gray-500">from last week</span>
            </p>
          )}
        </div>
        <div className={cn("rounded-lg p-3", iconBgColor)}>
          <Icon className={cn("h-6 w-6", iconColor)} />
        </div>
      </div>
    </div>
  );
}
