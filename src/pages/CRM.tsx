import { MainLayout } from "@/components/layout/MainLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { UserCircle, TrendingUp, Target, Clock, Mail, Phone, Building } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const deals = [
  { id: 1, company: 'TechStart Inc', contact: 'Alex Rivera', value: 75000, stage: 'negotiation', probability: 80, dueDate: 'Jan 15, 2025' },
  { id: 2, company: 'Global Systems', contact: 'Maria Santos', value: 120000, stage: 'proposal', probability: 60, dueDate: 'Jan 20, 2025' },
  { id: 3, company: 'Innovate Corp', contact: 'David Kim', value: 45000, stage: 'qualified', probability: 40, dueDate: 'Feb 01, 2025' },
  { id: 4, company: 'NextGen Solutions', contact: 'Emma Watson', value: 95000, stage: 'closed-won', probability: 100, dueDate: 'Dec 20, 2024' },
  { id: 5, company: 'Digital First', contact: 'James Brown', value: 55000, stage: 'discovery', probability: 20, dueDate: 'Feb 15, 2025' },
];

const contacts = [
  { id: 1, name: 'Alex Rivera', company: 'TechStart Inc', email: 'alex@techstart.com', phone: '+1 555 123 4567', type: 'Decision Maker' },
  { id: 2, name: 'Maria Santos', company: 'Global Systems', email: 'maria@globalsys.com', phone: '+1 555 234 5678', type: 'Influencer' },
  { id: 3, name: 'David Kim', company: 'Innovate Corp', email: 'david@innovate.com', phone: '+1 555 345 6789', type: 'Champion' },
  { id: 4, name: 'Emma Watson', company: 'NextGen Solutions', email: 'emma@nextgen.com', phone: '+1 555 456 7890', type: 'Decision Maker' },
];

const pipeline = [
  { stage: 'Discovery', count: 12, value: '$180,000' },
  { stage: 'Qualified', count: 8, value: '$320,000' },
  { stage: 'Proposal', count: 6, value: '$450,000' },
  { stage: 'Negotiation', count: 4, value: '$280,000' },
];

const getStageColor = (stage: string) => {
  switch (stage) {
    case 'discovery': return 'bg-muted text-muted-foreground';
    case 'qualified': return 'bg-info/10 text-info';
    case 'proposal': return 'bg-warning/10 text-warning';
    case 'negotiation': return 'bg-hr/10 text-hr';
    case 'closed-won': return 'bg-success/10 text-success';
    case 'closed-lost': return 'bg-destructive/10 text-destructive';
    default: return 'bg-muted text-muted-foreground';
  }
};

const CRM = () => {
  return (
    <MainLayout title="CRM" subtitle="Customer relationships and sales pipeline">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Active Deals"
          value="524"
          change={15.3}
          icon={UserCircle}
          iconColor="text-crm"
          iconBg="bg-crm/10"
        />
        <StatCard
          title="Pipeline Value"
          value="$2.4M"
          change={22.1}
          icon={TrendingUp}
          iconColor="text-success"
          iconBg="bg-success/10"
        />
        <StatCard
          title="Win Rate"
          value="68%"
          change={5.2}
          icon={Target}
          iconColor="text-info"
          iconBg="bg-info/10"
        />
        <StatCard
          title="Avg. Deal Cycle"
          value="32 days"
          change={-8.4}
          icon={Clock}
          iconColor="text-hr"
          iconBg="bg-hr/10"
        />
      </div>

      {/* Pipeline and Contacts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="module-card animate-fade-in">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">Sales Pipeline</h3>
            <p className="text-sm text-muted-foreground">Deals by stage</p>
          </div>
          <div className="space-y-3">
            {pipeline.map((stage, idx) => (
              <div key={stage.stage} className="p-4 rounded-lg bg-muted/30 animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{stage.stage}</span>
                  <span className="font-semibold text-foreground">{stage.value}</span>
                </div>
                <p className="text-sm text-muted-foreground">{stage.count} deals</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 module-card animate-fade-in">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">Key Contacts</h3>
            <p className="text-sm text-muted-foreground">Important relationships</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {contacts.map((contact, idx) => (
              <div key={contact.id} className="p-4 rounded-lg bg-muted/30 animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-crm/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-semibold text-crm">{contact.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground truncate">{contact.name}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Building className="h-3.5 w-3.5" />
                      <span className="truncate">{contact.company}</span>
                    </div>
                    <Badge variant="secondary" className="mt-2 text-xs">{contact.type}</Badge>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-border space-y-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-3.5 w-3.5" />
                    <span className="truncate">{contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-3.5 w-3.5" />
                    {contact.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deals Table */}
      <div className="table-container animate-fade-in">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Active Deals</h3>
            <p className="text-sm text-muted-foreground">Track your sales opportunities</p>
          </div>
          <Button>New Deal</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Stage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Probability</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Due Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {deals.map((deal) => (
                <tr key={deal.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-crm/10 flex items-center justify-center">
                        <Building className="h-5 w-5 text-crm" />
                      </div>
                      <span className="font-medium text-foreground">{deal.company}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{deal.contact}</td>
                  <td className="px-6 py-4 font-semibold text-foreground">${deal.value.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <Badge className={getStageColor(deal.stage)}>
                      {deal.stage.replace('-', ' ')}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-crm rounded-full" style={{ width: `${deal.probability}%` }} />
                      </div>
                      <span className="text-sm text-muted-foreground">{deal.probability}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{deal.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};

export default CRM;
