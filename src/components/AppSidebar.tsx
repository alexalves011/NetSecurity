import { Shield, LayoutDashboard, FileText, Settings, Moon, Sun } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { icon: Shield, path: "/", label: "Visão Geral" },
  { icon: LayoutDashboard, path: "/dashboard", label: "Dashboard" },
  { icon: FileText, path: "/reports", label: "Relatórios" },
  { icon: Settings, path: "/settings", label: "Configurações" },
];

export default function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path === "/dashboard" && location.pathname === "/dashboard") return true;
    if (path !== "/" && path !== "/dashboard" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-16 flex-col items-center justify-between border-r border-sidebar-border bg-sidebar py-6">
      <div className="flex flex-col items-center gap-6">
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              title={item.label}
              className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              }`}
            >
              <item.icon size={20} />
            </button>
          );
        })}
      </div>
      <button
        onClick={toggleTheme}
        className="flex h-10 w-10 items-center justify-center rounded-xl text-sidebar-foreground hover:bg-sidebar-accent/50 transition-all"
        title="Alternar tema"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </aside>
  );
}
