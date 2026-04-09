import { useState } from "react";
import { Crown, Users as UsersIcon, Pencil, Trash2, Plus, Shield, Settings, Bell, Lock } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import PageHeader from "@/components/PageHeader";
import { users } from "@/data/mockData";

const sensitivityLevels = [
  { id: "low", label: "Low", desc: "Menos alertas, mais flexível", badge: "Baixa", badgeColor: "bg-success/10 text-success" },
  { id: "medium", label: "Medium", desc: "Equilíbrio entre segurança e usabilidade", badge: "Média", badgeColor: "bg-warning/10 text-warning" },
  { id: "high", label: "High", desc: "Máxima segurança, mais alertas", badge: "Alta", badgeColor: "bg-destructive/10 text-destructive" },
];

const sensitivityColors: Record<string, string> = {
  Alta: "bg-destructive/10 text-destructive",
  Média: "bg-warning/10 text-warning",
  Baixa: "bg-success/10 text-success",
};

const statusColors: Record<string, string> = {
  Ativo: "bg-success/10 text-success",
  Inativo: "bg-destructive/10 text-destructive",
};

export default function SettingsPage() {
  const [sensitivity, setSensitivity] = useState("medium");
  const [mfa, setMfa] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <DashboardLayout>
      <PageHeader title="Configurações & IAM" subtitle="Gerenciamento de usuários, funções e sensibilidade da IA" />

      {/* AI Sensitivity & General Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="dashboard-card">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Sensibilidade da IA</h2>
              <p className="text-sm text-muted-foreground">Ajuste o nível de detecção de anomalias comportamentais</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Shield size={20} />
            </div>
          </div>
          <div className="space-y-3">
            {sensitivityLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSensitivity(level.id)}
                className={`w-full flex items-center justify-between rounded-xl border p-4 text-left transition-all ${
                  sensitivity === level.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${sensitivity === level.id ? "border-primary" : "border-muted-foreground/40"}`}>
                    {sensitivity === level.id && <div className="h-2 w-2 rounded-full bg-primary" />}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{level.label}</p>
                    <p className="text-xs text-muted-foreground">{level.desc}</p>
                  </div>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${level.badgeColor}`}>
                  {level.badge}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Configurações Gerais</h2>
              <p className="text-sm text-muted-foreground">Preferências de segurança e notificações</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Settings size={20} />
            </div>
          </div>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Lock size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Autenticação Multifator (MFA)</p>
                  <p className="text-xs text-muted-foreground">Camada extra de segurança</p>
                </div>
              </div>
              <button
                onClick={() => setMfa(!mfa)}
                className={`relative h-6 w-11 rounded-full transition-colors ${mfa ? "bg-success" : "bg-muted"}`}
              >
                <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-card shadow transition-transform ${mfa ? "left-[22px]" : "left-0.5"}`} />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Bell size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Notificações por Email</p>
                  <p className="text-xs text-muted-foreground">Alertas de segurança</p>
                </div>
              </div>
              <button
                onClick={() => setEmailNotifications(!emailNotifications)}
                className={`relative h-6 w-11 rounded-full transition-colors ${emailNotifications ? "bg-success" : "bg-muted"}`}
              >
                <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-card shadow transition-transform ${emailNotifications ? "left-[22px]" : "left-0.5"}`} />
              </button>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <p className="text-sm font-medium text-foreground">Timeout de Sessão</p>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Desconexão automática por inatividade</p>
              <select className="w-full rounded-lg border border-input bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option>1 hora</option>
                <option>30 minutos</option>
                <option>2 horas</option>
                <option>4 horas</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Roles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="dashboard-card">
          <div className="flex items-center gap-3 mb-3">
            <Crown size={20} className="text-warning" />
            <h3 className="text-lg font-semibold text-foreground">Função: Administrador</h3>
          </div>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>• Acesso total ao sistema</li>
            <li>• Gerenciamento de usuários e permissões</li>
            <li>• Configuração de sensibilidade da IA</li>
            <li>• Visualização de todos os relatórios</li>
            <li>• Exportação de dados LGPD</li>
          </ul>
        </div>
        <div className="dashboard-card">
          <div className="flex items-center gap-3 mb-3">
            <UsersIcon size={20} className="text-warning" />
            <h3 className="text-lg font-semibold text-foreground">Função: Funcionário</h3>
          </div>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>• Acesso ao dashboard pessoal</li>
            <li>• Visualização de próprias atividades</li>
            <li>• Gerenciamento de MFA pessoal</li>
            <li>• Acesso limitado a relatórios</li>
            <li>• Solicitação de exportação de dados pessoais</li>
          </ul>
        </div>
      </div>

      {/* User Management Table */}
      <div className="dashboard-card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Gerenciamento de Usuários</h2>
            <p className="text-sm text-muted-foreground">Adicione, edite ou remova usuários e defina suas permissões</p>
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
            <Plus size={16} />
            Adicionar Usuário
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted-foreground">
                <th className="pb-3 font-medium">Usuário</th>
                <th className="pb-3 font-medium">Email</th>
                <th className="pb-3 font-medium">Função</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Último Login</th>
                <th className="pb-3 font-medium">Sensibilidade</th>
                <th className="pb-3 font-medium">Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email} className="border-t border-border">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                        {user.initials}
                      </div>
                      <span className="font-medium text-foreground">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-muted-foreground">{user.email}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-2 text-foreground">
                      {user.role === "Admin" ? <Crown size={14} className="text-warning" /> : <UsersIcon size={14} className="text-muted-foreground" />}
                      {user.role}
                    </div>
                  </td>
                  <td className="py-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[user.status]}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 text-muted-foreground">{user.lastLogin}</td>
                  <td className="py-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${sensitivityColors[user.sensitivity]}`}>
                      {user.sensitivity}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <button className="text-muted-foreground hover:text-foreground transition-colors"><Pencil size={16} /></button>
                      <button className="text-muted-foreground hover:text-destructive transition-colors"><Trash2 size={16} /></button>
                    </div>
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
