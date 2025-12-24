import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  DollarSign,
  Users,
  Package,
  UserCircle,
  Factory,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: DollarSign, label: "Finance", path: "/finance" },
  { icon: Users, label: "HR", path: "/hr" },
  { icon: Package, label: "Inventory", path: "/inventory" },
  { icon: UserCircle, label: "CRM", path: "/crm" },
  { icon: Factory, label: "Manufacturing", path: "/manufacturing" },
];

const bottomItems = [
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: HelpCircle, label: "Help", path: "/help" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-sidebar border-r border-sidebar-border">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-3 px-6 border-b border-sidebar-border">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Factory className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-sidebar-foreground">NexusERP</h1>
            <p className="text-xs text-sidebar-muted">Enterprise Suite</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          <p className="px-3 mb-2 text-xs font-medium uppercase tracking-wider text-sidebar-muted">
            Modules
          </p>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "sidebar-link",
                  isActive && "sidebar-link-active"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="border-t border-sidebar-border px-3 py-4 space-y-1">
          {bottomItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="sidebar-link"
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
          <button className="sidebar-link w-full text-destructive/80 hover:text-destructive hover:bg-destructive/10">
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>

        {/* User Profile */}
        <div className="border-t border-sidebar-border p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-sidebar-accent flex items-center justify-center">
              <span className="text-sm font-semibold text-sidebar-foreground">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">John Doe</p>
              <p className="text-xs text-sidebar-muted truncate">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
