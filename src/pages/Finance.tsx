import { MainLayout } from "@/components/layout/MainLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { DollarSign, TrendingUp, TrendingDown, CreditCard, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const revenueData = [
  { month: 'Jan', value: 45000 },
  { month: 'Feb', value: 52000 },
  { month: 'Mar', value: 48000 },
  { month: 'Apr', value: 61000 },
  { month: 'May', value: 55000 },
  { month: 'Jun', value: 67000 },
];

const expenseCategories = [
  { name: 'Salaries', value: 45, color: 'hsl(234, 89%, 60%)' },
  { name: 'Operations', value: 25, color: 'hsl(280, 65%, 60%)' },
  { name: 'Marketing', value: 15, color: 'hsl(142, 71%, 45%)' },
  { name: 'R&D', value: 15, color: 'hsl(38, 92%, 50%)' },
];

const transactions = [
  { id: 'TRX-001', type: 'income', description: 'Invoice #INV-2024-089', amount: 12500, date: 'Dec 22, 2024', status: 'completed' },
  { id: 'TRX-002', type: 'expense', description: 'Office Supplies', amount: -450, date: 'Dec 21, 2024', status: 'completed' },
  { id: 'TRX-003', type: 'income', description: 'Invoice #INV-2024-088', amount: 8750, date: 'Dec 20, 2024', status: 'pending' },
  { id: 'TRX-004', type: 'expense', description: 'Cloud Services', amount: -2340, date: 'Dec 19, 2024', status: 'completed' },
  { id: 'TRX-005', type: 'income', description: 'Invoice #INV-2024-087', amount: 15000, date: 'Dec 18, 2024', status: 'completed' },
];

const Finance = () => {
  return (
    <MainLayout title="Finance" subtitle="Financial overview and transactions">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Revenue"
          value="$1,247,893"
          change={12.5}
          icon={DollarSign}
          iconColor="text-finance"
          iconBg="bg-finance/10"
        />
        <StatCard
          title="Total Expenses"
          value="$847,234"
          change={-3.2}
          icon={CreditCard}
          iconColor="text-hr"
          iconBg="bg-hr/10"
        />
        <StatCard
          title="Net Profit"
          value="$400,659"
          change={24.8}
          icon={TrendingUp}
          iconColor="text-success"
          iconBg="bg-success/10"
        />
        <StatCard
          title="Outstanding"
          value="$52,340"
          change={-8.1}
          icon={TrendingDown}
          iconColor="text-warning"
          iconBg="bg-warning/10"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 module-card animate-fade-in">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">Revenue Trend</h3>
            <p className="text-sm text-muted-foreground">Last 6 months performance</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(234, 89%, 60%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(234, 89%, 60%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }} tickFormatter={(v) => `$${v/1000}k`} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="hsl(234, 89%, 60%)" strokeWidth={2} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="module-card animate-fade-in">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">Expense Breakdown</h3>
            <p className="text-sm text-muted-foreground">By category</p>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseCategories}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {expenseCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {expenseCategories.map((cat) => (
              <div key={cat.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                <span className="text-sm text-muted-foreground">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="table-container animate-fade-in">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Recent Transactions</h3>
            <p className="text-sm text-muted-foreground">Your latest financial activities</p>
          </div>
          <Button>View All</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Transaction</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${tx.type === 'income' ? 'bg-success/10' : 'bg-destructive/10'}`}>
                        {tx.type === 'income' ? (
                          <ArrowUpRight className="h-4 w-4 text-success" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-destructive" />
                        )}
                      </div>
                      <span className="font-medium text-foreground">{tx.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{tx.description}</td>
                  <td className="px-6 py-4 text-muted-foreground">{tx.date}</td>
                  <td className="px-6 py-4">
                    <Badge variant={tx.status === 'completed' ? 'default' : 'secondary'}>
                      {tx.status}
                    </Badge>
                  </td>
                  <td className={`px-6 py-4 text-right font-semibold ${tx.amount > 0 ? 'text-success' : 'text-destructive'}`}>
                    {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount).toLocaleString()}
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

export default Finance;
