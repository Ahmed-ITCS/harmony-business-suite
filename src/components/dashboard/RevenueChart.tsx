import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', revenue: 45000, expenses: 32000 },
  { month: 'Feb', revenue: 52000, expenses: 35000 },
  { month: 'Mar', revenue: 48000, expenses: 31000 },
  { month: 'Apr', revenue: 61000, expenses: 38000 },
  { month: 'May', revenue: 55000, expenses: 34000 },
  { month: 'Jun', revenue: 67000, expenses: 40000 },
  { month: 'Jul', revenue: 72000, expenses: 42000 },
  { month: 'Aug', revenue: 68000, expenses: 39000 },
  { month: 'Sep', revenue: 75000, expenses: 44000 },
  { month: 'Oct', revenue: 82000, expenses: 46000 },
  { month: 'Nov', revenue: 79000, expenses: 45000 },
  { month: 'Dec', revenue: 91000, expenses: 50000 },
];

export function RevenueChart() {
  return (
    <div className="module-card animate-fade-in">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Revenue Overview</h3>
        <p className="text-sm text-muted-foreground">Monthly revenue vs expenses</p>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(234, 89%, 60%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(234, 89%, 60%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(280, 65%, 60%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(280, 65%, 60%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" vertical={false} />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(0, 0%, 100%)',
                border: '1px solid hsl(220, 13%, 91%)',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="hsl(234, 89%, 60%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              name="Revenue"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="hsl(280, 65%, 60%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorExpenses)"
              name="Expenses"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
