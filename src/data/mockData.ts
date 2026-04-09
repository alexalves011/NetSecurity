export const overviewStats = [
  { label: "Usuários Ativos", value: "1,234", icon: "Users", trend: "+12.5%", trendUp: true },
  { label: "Ameaças Bloqueadas", value: "47", icon: "ShieldOff", trend: "-8.2%", trendUp: false },
  { label: "Confiança da IA", value: "98.7%", icon: "Brain", trend: "+2.1%", trendUp: true },
  { label: "Gatilhos MFA", value: "23", icon: "Key", trend: "+15.3%", trendUp: true },
];

export const radarData = [
  { metric: "Velocidade de Digitação", value: 78 },
  { metric: "Padrão de Movimento", value: 65 },
  { metric: "Horário de Acesso", value: 90 },
  { metric: "Dispositivo Habitual", value: 55 },
  { metric: "Localização", value: 72 },
];

export const threatTimeline = [
  { time: "14:32", title: "Tentativa de Login Suspeita", user: "carlos.silva@empresa.com", location: "São Paulo, BR", status: "Bloqueado" as const },
  { time: "13:15", title: "Padrão de Digitação Anormal", user: "maria.santos@empresa.com", location: "Rio de Janeiro, BR", status: "Verificado" as const },
  { time: "11:47", title: "Acesso de Novo Dispositivo", user: "joao.oliveira@empresa.com", location: "Belo Horizonte, BR", status: "Pendente" as const },
  { time: "10:22", title: "MFA Verificação Solicitada", user: "ana.costa@empresa.com", location: "Curitiba, BR", status: "Verificado" as const },
];

export const auditScoreData = [
  { month: "Out", score: 91 },
  { month: "Nov", score: 93 },
  { month: "Dez", score: 95 },
  { month: "Jan", score: 94 },
  { month: "Fev", score: 96 },
  { month: "Mar", score: 97 },
  { month: "Abr", score: 98 },
];

export const dataCategoryData = [
  { name: "Dados Pessoais", value: 38, fill: "hsl(214, 100%, 40%)" },
  { name: "Logs de Acesso", value: 28, fill: "hsl(0, 84%, 60%)" },
  { name: "Dados Sensíveis", value: 19, fill: "hsl(38, 92%, 50%)" },
  { name: "Dados Financeiros", value: 15, fill: "hsl(142, 71%, 45%)" },
];

export const lgpdRequirements = [
  { name: "Consentimento do Titular", progress: 100, status: "Concluído" },
  { name: "Direito ao Esquecimento", progress: 100, status: "Concluído" },
  { name: "Portabilidade de Dados", progress: 100, status: "Concluído" },
  { name: "Notificação de Incidentes", progress: 100, status: "Concluído" },
  { name: "Registro de Atividades", progress: 95, status: "Em Progresso" },
];

export const recentReports = [
  { name: "Relatório de Conformidade LGPD - Q1 2026", date: "31/03/2026", size: "2.4 MB", type: "Compliance", status: "Disponível" },
  { name: "Auditoria de Segurança - Março 2026", date: "27/03/2026", size: "1.8 MB", type: "Security", status: "Disponível" },
  { name: "Relatório de Incidentes - Março 2026", date: "24/03/2026", size: "856 KB", type: "Incidents", status: "Disponível" },
  { name: "Análise de Dados Pessoais - Q1 2026", date: "04/04/2026", size: "3.2 MB", type: "Data Analysis", status: "Processando" },
];

export const complianceStats = [
  { label: "Conformidade LGPD", value: "98.5%", status: "Ótimo", icon: "ShieldCheck" },
  { label: "Auditorias Pendentes", value: "3", status: "Atenção", icon: "AlertCircle" },
  { label: "Relatórios Gerados", value: "47", status: "Normal", icon: "FileText" },
  { label: "Dados Protegidos", value: "1.2M", status: "Ótimo", icon: "CheckCircle" },
];

export const users = [
  { name: "Carlos Silva", initials: "CS", email: "carlos.silva@empresa.com", role: "Admin", status: "Ativo", lastLogin: "2026-04-09 14:35", sensitivity: "Alta" },
  { name: "Maria Santos", initials: "MS", email: "maria.santos@empresa.com", role: "Funcionário", status: "Ativo", lastLogin: "2026-04-09 13:42", sensitivity: "Média" },
  { name: "João Oliveira", initials: "JO", email: "joao.oliveira@empresa.com", role: "Funcionário", status: "Ativo", lastLogin: "2026-04-09 11:28", sensitivity: "Média" },
  { name: "Ana Costa", initials: "AC", email: "ana.costa@empresa.com", role: "Admin", status: "Ativo", lastLogin: "2026-04-09 10:15", sensitivity: "Alta" },
  { name: "Pedro Alves", initials: "PA", email: "pedro.alves@empresa.com", role: "Funcionário", status: "Inativo", lastLogin: "2026-04-05 16:45", sensitivity: "Baixa" },
];

export const accessLogs = [
  { timestamp: "2026-04-09 14:35:12", user: "carlos.silva@empresa.com", action: "Login", ip: "192.168.1.45", device: "Chrome - Windows", status: "Sucesso" },
  { timestamp: "2026-04-09 14:33:08", user: "maria.santos@empresa.com", action: "Acesso ao Dashboard", ip: "192.168.1.78", device: "Firefox - macOS", status: "Sucesso" },
  { timestamp: "2026-04-09 14:30:45", user: "joao.oliveira@empresa.com", action: "Login Bloqueado", ip: "203.0.113.42", device: "Chrome - Android", status: "Bloqueado" },
  { timestamp: "2026-04-09 14:28:19", user: "ana.costa@empresa.com", action: "MFA Verificação", ip: "192.168.1.92", device: "Safari - iOS", status: "Aviso" },
  { timestamp: "2026-04-09 14:25:33", user: "pedro.alves@empresa.com", action: "Logout", ip: "192.168.1.55", device: "Edge - Windows", status: "Sucesso" },
];

export const networkActivityData = [
  { time: "00:00", value: 12 }, { time: "02:00", value: 8 }, { time: "04:00", value: 15 },
  { time: "06:00", value: 10 }, { time: "08:00", value: 25 }, { time: "10:00", value: 18 },
  { time: "12:00", value: 22 }, { time: "14:00", value: 30 }, { time: "16:00", value: 20 },
  { time: "18:00", value: 15 }, { time: "20:00", value: 10 }, { time: "23:59", value: 5 },
];
