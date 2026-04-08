import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}

const StatCard = ({ icon, label, value, sub, accent }: StatCardProps) => (
  <div className={`rounded-xl p-5 flex flex-col gap-2 ${accent ? "bg-primary text-primary-foreground" : "bg-card border border-border"}`}>
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${accent ? "bg-primary-foreground/20" : "bg-secondary"}`}>
      {icon}
    </div>
    <p className={`text-xs font-medium ${accent ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{label}</p>
    <p className="text-2xl font-extrabold">{value}</p>
    {sub && <p className={`text-xs ${accent ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{sub}</p>}
  </div>
);

export default StatCard;
