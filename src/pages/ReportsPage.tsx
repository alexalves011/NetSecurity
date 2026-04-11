import {
  ShieldCheck,
  AlertCircle,
  FileText,
  CheckCircle,
  Download,
  Calendar,
  Shield,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from "recharts";
import DashboardLayout from "@/components/DashboardLayout";
import PageHeader from "@/components/PageHeader";
import logoSimbolo from "../assets/Logo-Simbolo.png";
import {
  complianceStats,
  auditScoreData,
  dataCategoryData,
  lgpdRequirements,
  recentReports,
} from "@/data/mockData";

const statIcons: Record<string, React.ElementType> = {
  ShieldCheck,
  AlertCircle,
  FileText,
  CheckCircle,
};
const statusStyleMap: Record<string, string> = {
  Ótimo: "bg-success/10 text-success",
  Atenção: "bg-warning/10 text-warning",
  Normal: "bg-muted text-muted-foreground",
};
const reportStatusColors: Record<string, string> = {
  Disponível: "bg-success/10 text-success",
  Processando: "bg-warning/10 text-warning",
};

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Relatórios & Compliance"
        subtitle="Transparência de dados e conformidade LGPD"
      />

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {complianceStats.map((stat) => {
          const Icon = statIcons[stat.icon];
          return (
            <div
              key={stat.label}
              className="stat-card flex items-start justify-between"
            >
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground mt-1">
                  {stat.value}
                </p>
                <span
                  className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyleMap[stat.status]}`}
                >
                  {stat.status}
                </span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon size={20} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="dashboard-card">
          <h2 className="text-lg font-semibold text-foreground">
            Pontuação de Auditoria
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Evolução da conformidade nos últimos 7 meses
          </p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={auditScoreData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="month"
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              />
              <YAxis
                domain={[85, 100]}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              />
              <Bar
                dataKey="score"
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-card">
          <h2 className="text-lg font-semibold text-foreground">
            Categorias de Dados
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Distribuição de tipos de dados protegidos
          </p>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={dataCategoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, value }) => `${name} ${value}%`}
              >
                {dataCategoryData.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* LGPD Requirements */}
      <div className="dashboard-card mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Requisitos LGPD
            </h2>
            <p className="text-sm text-muted-foreground">
              Status de conformidade com a Lei Geral de Proteção de Dados
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
            <Download size={16} />
            Baixar Relatório LGPD
          </button>
        </div>
        <div className="space-y-6">
          {lgpdRequirements.map((req) => (
            <div key={req.name}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {req.progress === 100 ? (
                    <CheckCircle2 size={18} className="text-success" />
                  ) : (
                    <AlertTriangle size={18} className="text-warning" />
                  )}
                  <span className="text-sm font-medium text-foreground">
                    {req.name}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">
                    {req.progress}%
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${req.progress === 100 ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}
                  >
                    {req.status}
                  </span>
                </div>
              </div>
              <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${req.progress === 100 ? "bg-success" : "bg-warning"}`}
                  style={{ width: `${req.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Reports */}
      <div className="dashboard-card mb-8">
        <h2 className="text-lg font-semibold text-foreground">
          Relatórios Recentes
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          Histórico de documentos e auditorias geradas
        </p>
        <div className="space-y-4">
          {recentReports.map((report, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-3 border-b border-border last:border-0"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <FileText size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {report.name}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                    <Calendar size={10} />
                    {report.date} • {report.size} • {report.type}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${reportStatusColors[report.status]}`}
                >
                  {report.status}
                </span>
                {report.status === "Disponível" && (
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent transition-colors">
                    <Download size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LGPD Transparency */}
      <div className="dashboard-card text-center py-12">
        <img
          src={logoSimbolo}
          alt="NetSecurity Logo"
          className="mx-auto h-12 w-auto mb-4"
        />
        <h3 className="text-xl font-bold text-foreground mb-2">
          Compromisso com a Transparência
        </h3>
        <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-6">
          Nossa plataforma está em total conformidade com a LGPD (Lei nº
          13.709/2018). Todos os dados são criptografados, auditados
          regularmente e processados com consentimento explícito.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
            <FileText size={16} />
            Ver Política de Privacidade
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors">
            <Download size={16} />
            Exportar Meus Dados
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
