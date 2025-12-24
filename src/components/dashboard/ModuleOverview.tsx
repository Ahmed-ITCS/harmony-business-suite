import { Link } from "react-router-dom";
import { ArrowRight, DollarSign, Users, Package, UserCircle, Factory } from "lucide-react";
import { cn } from "@/lib/utils";

const modules = [
  {
    name: "Finance",
    description: "Track revenue, expenses, and financial reports",
    icon: DollarSign,
    path: "/finance",
    gradient: "bg-gradient-finance",
    stats: { primary: "$1.2M", label: "Total Revenue" },
  },
  {
    name: "Human Resources",
    description: "Manage employees, payroll, and attendance",
    icon: Users,
    path: "/hr",
    gradient: "bg-gradient-hr",
    stats: { primary: "156", label: "Employees" },
  },
  {
    name: "Inventory",
    description: "Monitor stock levels and manage products",
    icon: Package,
    path: "/inventory",
    gradient: "bg-gradient-inventory",
    stats: { primary: "2,847", label: "Items in Stock" },
  },
  {
    name: "CRM",
    description: "Track customers, leads, and sales pipeline",
    icon: UserCircle,
    path: "/crm",
    gradient: "bg-gradient-crm",
    stats: { primary: "524", label: "Active Deals" },
  },
  {
    name: "Manufacturing",
    description: "Production planning and quality control",
    icon: Factory,
    path: "/manufacturing",
    gradient: "bg-gradient-manufacturing",
    stats: { primary: "89%", label: "Efficiency" },
  },
];

export function ModuleOverview() {
  return (
    <div className="module-card animate-fade-in">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Quick Access</h3>
        <p className="text-sm text-muted-foreground">Navigate to your modules</p>
      </div>
      <div className="grid gap-3">
        {modules.map((module, index) => (
          <Link
            key={module.name}
            to={module.path}
            className="group flex items-center gap-4 rounded-xl p-4 transition-all duration-200 hover:bg-secondary/50"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className={cn("p-3 rounded-xl text-primary-foreground", module.gradient)}>
              <module.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground">{module.name}</p>
              <p className="text-sm text-muted-foreground truncate">{module.description}</p>
            </div>
            <div className="text-right hidden sm:block">
              <p className="font-semibold text-foreground">{module.stats.primary}</p>
              <p className="text-xs text-muted-foreground">{module.stats.label}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}
