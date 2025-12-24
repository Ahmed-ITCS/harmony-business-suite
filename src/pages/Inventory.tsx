import { MainLayout } from "@/components/layout/MainLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { Package, AlertTriangle, TrendingUp, Boxes, MoreVertical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const inventoryItems = [
  { id: 'SKU-001', name: 'Widget A-100', category: 'Electronics', quantity: 1250, minStock: 100, maxStock: 2000, price: 45.99, status: 'in-stock' },
  { id: 'SKU-002', name: 'Component B-200', category: 'Parts', quantity: 23, minStock: 50, maxStock: 500, price: 12.50, status: 'low-stock' },
  { id: 'SKU-003', name: 'Assembly C-300', category: 'Finished Goods', quantity: 450, minStock: 100, maxStock: 800, price: 129.99, status: 'in-stock' },
  { id: 'SKU-004', name: 'Material D-400', category: 'Raw Materials', quantity: 0, minStock: 200, maxStock: 1000, price: 8.75, status: 'out-of-stock' },
  { id: 'SKU-005', name: 'Product E-500', category: 'Finished Goods', quantity: 890, minStock: 150, maxStock: 1200, price: 89.00, status: 'in-stock' },
  { id: 'SKU-006', name: 'Supply F-600', category: 'Consumables', quantity: 67, minStock: 100, maxStock: 400, price: 5.25, status: 'low-stock' },
];

const categories = [
  { name: 'Electronics', items: 342, value: '$156,780' },
  { name: 'Parts', items: 856, value: '$45,230' },
  { name: 'Finished Goods', items: 234, value: '$298,500' },
  { name: 'Raw Materials', items: 567, value: '$67,890' },
  { name: 'Consumables', items: 848, value: '$23,450' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'in-stock': return 'bg-success/10 text-success';
    case 'low-stock': return 'bg-warning/10 text-warning';
    case 'out-of-stock': return 'bg-destructive/10 text-destructive';
    default: return 'bg-muted text-muted-foreground';
  }
};

const Inventory = () => {
  return (
    <MainLayout title="Inventory" subtitle="Stock management and product tracking">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Items"
          value="2,847"
          change={5.3}
          icon={Package}
          iconColor="text-inventory"
          iconBg="bg-inventory/10"
        />
        <StatCard
          title="Low Stock Alerts"
          value="12"
          change={-25}
          icon={AlertTriangle}
          iconColor="text-warning"
          iconBg="bg-warning/10"
        />
        <StatCard
          title="Stock Value"
          value="$591,850"
          change={8.7}
          icon={TrendingUp}
          iconColor="text-success"
          iconBg="bg-success/10"
        />
        <StatCard
          title="Categories"
          value="5"
          change={0}
          icon={Boxes}
          iconColor="text-info"
          iconBg="bg-info/10"
        />
      </div>

      {/* Categories Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 module-card animate-fade-in">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">Stock Levels</h3>
            <p className="text-sm text-muted-foreground">Real-time inventory status</p>
          </div>
          <div className="space-y-4">
            {inventoryItems.slice(0, 4).map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-foreground truncate">{item.name}</p>
                    <span className="text-sm text-muted-foreground">{item.quantity} / {item.maxStock}</span>
                  </div>
                  <Progress value={(item.quantity / item.maxStock) * 100} className="h-2" />
                </div>
                <Badge className={getStatusColor(item.status)}>
                  {item.status.replace('-', ' ')}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="module-card animate-fade-in">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">Categories</h3>
            <p className="text-sm text-muted-foreground">Inventory by category</p>
          </div>
          <div className="space-y-3">
            {categories.map((cat, idx) => (
              <div key={cat.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                <div>
                  <p className="font-medium text-foreground">{cat.name}</p>
                  <p className="text-sm text-muted-foreground">{cat.items} items</p>
                </div>
                <span className="font-semibold text-foreground">{cat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="table-container animate-fade-in">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Inventory Items</h3>
            <p className="text-sm text-muted-foreground">Complete stock list</p>
          </div>
          <Button>Add Item</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">SKU</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {inventoryItems.map((item) => (
                <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm text-muted-foreground">{item.id}</td>
                  <td className="px-6 py-4 font-medium text-foreground">{item.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{item.category}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{item.quantity}</span>
                      <span className="text-muted-foreground">/ {item.maxStock}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-foreground">${item.price.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <Badge className={getStatusColor(item.status)}>
                      {item.status.replace('-', ' ')}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};

export default Inventory;
