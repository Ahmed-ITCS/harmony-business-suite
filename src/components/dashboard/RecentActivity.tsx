import { DollarSign, UserPlus, Package, FileText, Factory } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    type: "finance",
    icon: DollarSign,
    title: "Invoice #INV-2024-089 paid",
    description: "Payment received from Acme Corp",
    time: "2 min ago",
    iconBg: "bg-finance/10",
    iconColor: "text-finance",
  },
  {
    id: 2,
    type: "hr",
    icon: UserPlus,
    title: "New employee onboarded",
    description: "Sarah Johnson joined the Engineering team",
    time: "15 min ago",
    iconBg: "bg-hr/10",
    iconColor: "text-hr",
  },
  {
    id: 3,
    type: "inventory",
    icon: Package,
    title: "Low stock alert",
    description: "Widget A-100 is running low (23 units left)",
    time: "1 hour ago",
    iconBg: "bg-inventory/10",
    iconColor: "text-inventory",
  },
  {
    id: 4,
    type: "crm",
    icon: FileText,
    title: "New deal created",
    description: "Enterprise license for TechStart Inc",
    time: "2 hours ago",
    iconBg: "bg-crm/10",
    iconColor: "text-crm",
  },
  {
    id: 5,
    type: "manufacturing",
    icon: Factory,
    title: "Production order completed",
    description: "Batch #PO-2024-156 finished",
    time: "3 hours ago",
    iconBg: "bg-manufacturing/10",
    iconColor: "text-manufacturing",
  },
];

export function RecentActivity() {
  return (
    <div className="module-card animate-fade-in">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
        <p className="text-sm text-muted-foreground">Latest updates across modules</p>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className="flex items-start gap-4 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={cn("p-2 rounded-lg shrink-0", activity.iconBg)}>
              <activity.icon className={cn("h-4 w-4", activity.iconColor)} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{activity.title}</p>
              <p className="text-sm text-muted-foreground truncate">{activity.description}</p>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
