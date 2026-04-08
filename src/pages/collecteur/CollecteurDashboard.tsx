import { Truck, Coins, MapPin, CheckCircle, Clock, AlertCircle } from "lucide-react";
import RoleNavbar from "@/components/RoleNavbar";
import StatCard from "@/components/StatCard";
import ActivityItem from "@/components/ActivityItem";
import NotificationPanel from "@/components/NotificationPanel";

const navItems = [
  { label: "Dashboard", path: "/collecteur", icon: "📊" },
  { label: "Carte", path: "/collecteur/carte", icon: "🗺️" },
  { label: "Collecte", path: "/collecteur/collecte", icon: "📦" },
];

const missions = [
  { zone: "Bab Souika", type: "Plastique", qty: "15 kg", status: "active" as const, reward: "45 DT" },
  { zone: "La Marsa", type: "Verre + Papier", qty: "22 kg", status: "active" as const, reward: "60 DT" },
  { zone: "Ariana", type: "Métal", qty: "8 kg", status: "pending" as const, reward: "30 DT" },
  { zone: "Le Bardo", type: "Plastique", qty: "12 kg", status: "completed" as const, reward: "35 DT" },
];

const statusConfig = {
  active: { label: "En cours", color: "bg-primary text-primary-foreground", icon: <Clock className="w-3.5 h-3.5" /> },
  pending: { label: "En attente", color: "bg-accent text-accent-foreground", icon: <AlertCircle className="w-3.5 h-3.5" /> },
  completed: { label: "Terminé", color: "bg-secondary text-secondary-foreground", icon: <CheckCircle className="w-3.5 h-3.5" /> },
};

const recentActivity = [
  { icon: "✅", title: "Collecte terminée", desc: "Le Bardo — 12 kg plastique", time: "Il y a 1h", points: "+35 DT" },
  { icon: "✅", title: "Collecte terminée", desc: "Carthage — 20 kg mixte", time: "Il y a 5h", points: "+55 DT" },
  { icon: "⭐", title: "Bonus performance", desc: "5 collectes cette semaine", time: "Hier", points: "+20 DT" },
];

const CollecteurDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <RoleNavbar role="collecteur" items={navItems} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground">Bonjour, Mohamed 🚛</h1>
            <p className="text-muted-foreground text-sm mt-1">Collecteur certifié ✅ — 3 missions en attente</p>
          </div>
          <NotificationPanel />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={<Coins className="w-5 h-5 text-primary" />} label="Revenus du mois" value="1,850 DT" sub="+12% vs mois dernier" accent />
          <StatCard icon={<Truck className="w-5 h-5 text-primary" />} label="Collectes" value="34" sub="Ce mois" />
          <StatCard icon={<MapPin className="w-5 h-5 text-primary" />} label="Zones couvertes" value="6" sub="Grand Tunis" />
          <StatCard icon={<CheckCircle className="w-5 h-5 text-primary" />} label="Taux réussite" value="96%" sub="Excellent" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" /> Missions actives
            </h2>
            <div className="space-y-3">
              {missions.map((m, i) => {
                const s = statusConfig[m.status];
                return (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-bold text-foreground">{m.zone}</p>
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${s.color}`}>
                          {s.icon} {s.label}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{m.type} — {m.qty}</p>
                    </div>
                    <span className="text-sm font-extrabold text-primary">{m.reward}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" /> Historique
            </h2>
            {recentActivity.map((a, i) => (
              <ActivityItem key={i} {...a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollecteurDashboard;
