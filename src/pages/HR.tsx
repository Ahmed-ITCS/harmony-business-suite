import { MainLayout } from "@/components/layout/MainLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { Users, UserPlus, Clock, Award, Mail, Phone, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const departmentData = [
  { name: 'Engineering', employees: 45 },
  { name: 'Sales', employees: 32 },
  { name: 'Marketing', employees: 24 },
  { name: 'Operations', employees: 28 },
  { name: 'HR', employees: 12 },
  { name: 'Finance', employees: 15 },
];

const employees = [
  { id: 1, name: 'Sarah Johnson', role: 'Software Engineer', department: 'Engineering', email: 'sarah@company.com', phone: '+1 234 567 890', location: 'New York', status: 'active', avatar: 'SJ' },
  { id: 2, name: 'Michael Chen', role: 'Product Manager', department: 'Product', email: 'michael@company.com', phone: '+1 234 567 891', location: 'San Francisco', status: 'active', avatar: 'MC' },
  { id: 3, name: 'Emily Davis', role: 'Marketing Lead', department: 'Marketing', email: 'emily@company.com', phone: '+1 234 567 892', location: 'Chicago', status: 'on-leave', avatar: 'ED' },
  { id: 4, name: 'James Wilson', role: 'Sales Executive', department: 'Sales', email: 'james@company.com', phone: '+1 234 567 893', location: 'Boston', status: 'active', avatar: 'JW' },
  { id: 5, name: 'Lisa Anderson', role: 'HR Manager', department: 'HR', email: 'lisa@company.com', phone: '+1 234 567 894', location: 'Austin', status: 'active', avatar: 'LA' },
];

const HR = () => {
  return (
    <MainLayout title="Human Resources" subtitle="Employee management and HR analytics">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Employees"
          value="156"
          change={4.2}
          icon={Users}
          iconColor="text-hr"
          iconBg="bg-hr/10"
        />
        <StatCard
          title="New Hires"
          value="12"
          change={25}
          icon={UserPlus}
          iconColor="text-success"
          iconBg="bg-success/10"
        />
        <StatCard
          title="Avg. Attendance"
          value="94.2%"
          change={2.1}
          icon={Clock}
          iconColor="text-info"
          iconBg="bg-info/10"
        />
        <StatCard
          title="Open Positions"
          value="8"
          change={-12.5}
          icon={Award}
          iconColor="text-warning"
          iconBg="bg-warning/10"
        />
      </div>

      {/* Department Chart and Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 module-card animate-fade-in">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">Employees by Department</h3>
            <p className="text-sm text-muted-foreground">Headcount distribution</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" horizontal={true} vertical={false} />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }} />
                <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }} width={80} />
                <Tooltip />
                <Bar dataKey="employees" fill="hsl(280, 65%, 60%)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="module-card animate-fade-in">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">Quick Stats</h3>
            <p className="text-sm text-muted-foreground">HR metrics at a glance</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-muted-foreground">Turnover Rate</span>
              <span className="font-semibold text-foreground">4.2%</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-muted-foreground">Avg. Tenure</span>
              <span className="font-semibold text-foreground">3.5 years</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-muted-foreground">Training Hours</span>
              <span className="font-semibold text-foreground">24h/month</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
              <span className="text-muted-foreground">Satisfaction</span>
              <span className="font-semibold text-foreground">87%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Employee Directory */}
      <div className="table-container animate-fade-in">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Employee Directory</h3>
            <p className="text-sm text-muted-foreground">Manage your team members</p>
          </div>
          <Button>Add Employee</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {employees.map((emp) => (
                <tr key={emp.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-hr/10 flex items-center justify-center">
                        <span className="text-sm font-semibold text-hr">{emp.avatar}</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{emp.name}</p>
                        <p className="text-sm text-muted-foreground">{emp.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-3.5 w-3.5" />
                        {emp.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-3.5 w-3.5" />
                        {emp.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{emp.department}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {emp.location}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={emp.status === 'active' ? 'default' : 'secondary'}>
                      {emp.status === 'active' ? 'Active' : 'On Leave'}
                    </Badge>
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

export default HR;
