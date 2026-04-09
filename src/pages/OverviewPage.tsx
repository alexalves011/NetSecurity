import { Users, ShieldOff, Brain, Key, TrendingUp, TrendingDown, Clock, MapPin } from "lucide-react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import DashboardLayout from "@/components/DashboardLayout";
import PageHeader from "@/components/PageHeader";
import { overviewStats, radarData, threatTimeline } from "@/data/mockData";

const iconMap: Record<string, React.ElementType> = { Users, ShieldOff, Brain, Key };

const statusColors: Record<string, string> = {
  Bloqueado: "bg-destructive/10 text-destructive",
  Verificado: "bg-success/10 text-success",
  Pendente: "bg-warning/10 text-warning",
};

const statIconColors = [
  "bg-primary/10 text-primary",
  "bg-success/10 text-success",
  "bg-warning/10 text-warning",
  "bg-destructive/10 text-destructive",
];

export default function OverviewPage() {
  return (
    <DashboardLayout>
      <PageHeader title="Dashboard NetSecurity" subtitle="Visão geral da segurança comportamental" />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {overviewStats.map((stat, i) => {
          const Icon = iconMap[stat.icon];
          return (
            <div key={stat.label} className="stat-card flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                <div className={`flex items-center gap-1 mt-2 text-xs font-medium ${stat.trendUp ? "text-success" : "text-destructive"}`}>
                  {stat.trendUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {stat.trend}
                </div>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${statIconColors[i]}`}>
                <Icon size={20} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Radar Chart */}
        <div className="lg:col-span-2 dashboard-card">
          <h2 className="text-lg font-semibold text-foreground">Hub Comportamental IA</h2>
          <p className="text-sm text-muted-foreground mb-4">Análise em tempo real dos padrões biométricos</p>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis dataKey="metric" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
              <Radar dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--chart-teal))" fillOpacity={0.5} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Threat Timeline */}
        <div className="dashboard-card">
          <h2 className="text-lg font-semibold text-foreground">Linha do Tempo de Ameaças</h2>
          <p className="text-sm text-muted-foreground mb-6">Eventos recentes de segurança</p>
          <div className="space-y-6">
            {threatTimeline.map((event, i) => (
              <div key={i} className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-primary" />
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock size={12} />
                    {event.time}
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[event.status]}`}>
                    {event.status}
                  </span>
                </div>
                <p className="text-sm font-semibold text-foreground">{event.title}</p>
                <p className="text-xs text-muted-foreground">{event.user}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                  <MapPin size={10} />
                  {event.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
