<p align="center">
 <img src="src/assets/Logo-Simbolo.png" alt="NetSecurity Logo" width="160" />
</p>

# NetSecurity

[![Status](https://img.shields.io/badge/status-WIP-orange)](https://github.com)
[![Tech](https://img.shields.io/badge/tech-React%2FVite-blue)](https://vitejs.dev)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.1.0-lightgrey)](https://github.com)

## Visão Geral

NetSecurity é um projeto acadêmico da disciplina de **Análise e Modelagem de Sistemas** da Universidade Cruzeiro do Sul, desenvolvido como uma solução de cibersegurança empresarial para **prevenção de ataques de phishing**. A plataforma combina **biometria comportamental de digitação (Keystroke Dynamics)** com **MFA adaptativo** para proteger acessos de PMEs e garantir conformidade com a **LGPD**.

### Por que NetSecurity?

NetSecurity utiliza IA para identificar padrões de digitação em tempo real, detectar comportamentos suspeitos e aplicar controles de acesso adaptativos antes que uma sessão seja comprometida. O foco é reduzir riscos de fraude e ataques de engenharia social em ambientes corporativos.

## Funcionalidades Principais

- ✅ Monitoramento de IA em tempo real para análise comportamental
- ✅ Dashboard de Riscos que identifica anomalias de acesso
- ✅ Configuração de Sensibilidade para ajustar o nível de detecção
- ✅ Relatórios de Compliance para auditoria e conformidade LGPD

## Tecnologias Utilizadas

| Camada       | Tecnologias                                        | Comentário                                                  |
| ------------ | -------------------------------------------------- | ----------------------------------------------------------- |
| Frontend     | React.js · Vite · Ant Design · Tailwind CSS · Less | Interface responsiva e modular para dashboards empresariais |
| Visualização | Recharts                                           | Gráficos dinâmicos de risco e conformidade                  |
| Prototipação | Figma                                              | Fluxo de interface pensado para operações de segurança      |

## Instalação

### Pré-requisitos

- Node.js v18 ou superior
- npm 10+ (ou equivalente)

### Passos

```bash
git clone https://github.com/seu-usuario/NetSecurity.git
cd NetSecurity
npm install
npm run dev
```

## Estrutura de Pastas

```text
NetSecurity/
├─ public/
│  ├─ logo-simbolo.png
│  ├─ site.webmanifest
│  └─ favicon.ico
├─ src/
│  ├─ assets/
│  │  └─ Logo-Simbolo.png
│  ├─ components/
│  │  ├─ DashboardLayout.tsx
│  │  ├─ PageHeader.tsx
│  │  ├─ AppSidebar.tsx
│  │  └─ ui/
│  ├─ data/
│  │  └─ mockData.ts
│  ├─ pages/
│  │  ├─ DashboardPage.tsx
│  │  ├─ OverviewPage.tsx
│  │  ├─ ReportsPage.tsx
│  │  └─ SettingsPage.tsx
│  ├─ hooks/
│  └─ main.tsx
├─ index.html
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

## Status do Projeto

Atualmente em **Work in Progress**. A arquitetura já está alinhada para suportar uma solução de segurança escalável, com foco em proteção de dados, análise comportamental e geração de relatórios de conformidade.

## Objetivo

Este repositório visa demonstrar um protótipo funcional que une segurança comportamental, monitoramento inteligente e experiência de usuário robusta para apoiar a operação de PMEs contra ataques de phishing e acessos não autorizados.
