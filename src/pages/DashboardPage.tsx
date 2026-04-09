import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from "recharts";
import DashboardLayout from "@/components/DashboardLayout";
import PageHeader from "@/components/PageHeader";
import { accessLogs, networkActivityData } from "@/data/mockData";

const logStatusColors: Record<string, string> = {
  Sucesso: "bg-success/10 text-success",
  Bloqueado: "bg-destructive/10 text-destructive",
  Aviso: "bg-warning/10 text-warning",
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <PageHeader title="Dashboard NetSecurity" subtitle="Visão geral da segurança comportamental" />

      {/* Network Activity */}
      <div className="dashboard-card mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Atividade de Rede</h2>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={networkActivityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="time" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
            <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
            <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Access Logs */}
      <div className="dashboard-card">
        <h2 className="text-lg font-semibold text-foreground">Logs de Acesso ao Vivo</h2>
        <p className="text-sm text-muted-foreground mb-4">Registro completo de atividades do sistema</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-foreground">
                <th className="pb-3 font-medium">Timestamp</th>
                <th className="pb-3 font-medium">Usuário</th>
                <th className="pb-3 font-medium">Ação</th>
                <th className="pb-3 font-medium">IP</th>
                <th className="pb-3 font-medium">Dispositivo</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-foreground">
              {accessLogs.map((log, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="py-4">{log.timestamp}</td>
                  <td className="py-4">{log.user}</td>
                  <td className="py-4">{log.action}</td>
                  <td className="py-4">{log.ip}</td>
                  <td className="py-4">{log.device}</td>
                  <td className="py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${logStatusColors[log.status]}`}>
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
