import { MainLayout } from "@/components/layout/MainLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { Factory, Gauge, Clock, CheckCircle, AlertCircle, PlayCircle, PauseCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const productionData = [
  { hour: '6AM', output: 120, target: 150 },
  { hour: '8AM', output: 145, target: 150 },
  { hour: '10AM', output: 160, target: 150 },
  { hour: '12PM', output: 130, target: 150 },
  { hour: '2PM', output: 155, target: 150 },
  { hour: '4PM', output: 148, target: 150 },
  { hour: '6PM', output: 142, target: 150 },
];

const productionOrders = [
  { id: 'PO-2024-156', product: 'Widget A-100', quantity: 500, completed: 425, status: 'in-progress', priority: 'high', dueDate: 'Dec 24, 2024' },
  { id: 'PO-2024-157', product: 'Assembly C-300', quantity: 200, completed: 200, status: 'completed', priority: 'medium', dueDate: 'Dec 22, 2024' },
  { id: 'PO-2024-158', product: 'Component B-200', quantity: 1000, completed: 0, status: 'pending', priority: 'low', dueDate: 'Dec 28, 2024' },
  { id: 'PO-2024-159', product: 'Product E-500', quantity: 300, completed: 150, status: 'in-progress', priority: 'high', dueDate: 'Dec 25, 2024' },
  { id: 'PO-2024-160', product: 'Material D-400', quantity: 750, completed: 600, status: 'in-progress', priority: 'medium', dueDate: 'Dec 26, 2024' },
];

const machines = [
  { id: 'M-001', name: 'CNC Machine 1', status: 'running', efficiency: 94, uptime: '23h 45m' },
  { id: 'M-002', name: 'Assembly Line A', status: 'running', efficiency: 88, uptime: '22h 30m' },
  { id: 'M-003', name: 'Packaging Unit 1', status: 'idle', efficiency: 0, uptime: '0h 0m' },
  { id: 'M-004', name: 'Quality Check Station', status: 'running', efficiency: 96, uptime: '24h 0m' },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'bg-success/10 text-success';
    case 'in-progress': return 'bg-info/10 text-info';
    case 'pending': return 'bg-muted text-muted-foreground';
    case 'running': return 'bg-success/10 text-success';
    case 'idle': return 'bg-warning/10 text-warning';
    case 'maintenance': return 'bg-destructive/10 text-destructive';
    default: return 'bg-muted text-muted-foreground';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'bg-destructive/10 text-destructive';
    case 'medium': return 'bg-warning/10 text-warning';
    case 'low': return 'bg-muted text-muted-foreground';
    default: return 'bg-muted text-muted-foreground';
  }
};

const Manufacturing = () => {
  return (
    <MainLayout title="Manufacturing" subtitle="Production planning and quality control">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Production Rate"
          value="89%"
          change={7.8}
          icon={Factory}
          iconColor="text-manufacturing"
          iconBg="bg-manufacturing/10"
        />
        <StatCard
          title="OEE Score"
          value="85.2%"
          change={3.4}
          icon={Gauge}
          iconColor="text-success"
          iconBg="bg-success/10"
        />
        <StatCard
          title="Cycle Time"
          value="4.2 min"
          change={-12.5}
          icon={Clock}
          iconColor="text-info"
          iconBg="bg-info/10"
        />
        <StatCard
          title="Quality Rate"
          value="98.5%"
          change={1.2}
          icon={CheckCircle}
          iconColor="text-hr"
          iconBg="bg-hr/10"
        />
      </div>

      {/* Production Chart and Machine Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 module-card animate-fade-in">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">Today's Production</h3>
            <p className="text-sm text-muted-foreground">Output vs target</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" vertical={false} />
                <XAxis dataKey="hour" axisLine={false} tickLine={false} tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="target" stroke="hsl(220, 9%, 70%)" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Target" />
                <Line type="monotone" dataKey="output" stroke="hsl(199, 89%, 48%)" strokeWidth={2} dot={{ fill: 'hsl(199, 89%, 48%)', strokeWidth: 0 }} name="Output" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="module-card animate-fade-in">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">Machine Status</h3>
            <p className="text-sm text-muted-foreground">Real-time monitoring</p>
          </div>
          <div className="space-y-3">
            {machines.map((machine, idx) => (
              <div key={machine.id} className="p-3 rounded-lg bg-muted/30 animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {machine.status === 'running' ? (
                      <PlayCircle className="h-4 w-4 text-success" />
                    ) : machine.status === 'idle' ? (
                      <PauseCircle className="h-4 w-4 text-warning" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-destructive" />
                    )}
                    <span className="font-medium text-foreground text-sm">{machine.name}</span>
                  </div>
                  <Badge className={getStatusColor(machine.status)}>{machine.status}</Badge>
                </div>
                {machine.status === 'running' && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Efficiency</span>
                    <span className="font-medium text-foreground">{machine.efficiency}%</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Production Orders Table */}
      <div className="table-container animate-fade-in">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Production Orders</h3>
            <p className="text-sm text-muted-foreground">Active and pending orders</p>
          </div>
          <Button>New Order</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Progress</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Due Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {productionOrders.map((order) => (
                <tr key={order.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm font-medium text-foreground">{order.id}</td>
                  <td className="px-6 py-4 text-foreground">{order.product}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3 min-w-[150px]">
                      <Progress value={(order.completed / order.quantity) * 100} className="h-2 flex-1" />
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {order.completed}/{order.quantity}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge className={getPriorityColor(order.priority)}>{order.priority}</Badge>
                  </td>
                  <td className="px-6 py-4">
                    <Badge className={getStatusColor(order.status)}>{order.status.replace('-', ' ')}</Badge>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{order.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};

export default Manufacturing;
