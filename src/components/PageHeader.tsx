import { Search, Bell } from "lucide-react";
import logoSimbolo from "../assets/Logo-Simbolo.png";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <img src={logoSimbolo} alt="NetSecurity Logo" className="h-10 w-auto" />
        <div>
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            placeholder="Buscar..."
            className="h-10 w-56 rounded-lg border border-input bg-card pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <button className="relative flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent transition-colors">
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive" />
        </button>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
          AD
        </div>
      </div>
    </header>
  );
}
