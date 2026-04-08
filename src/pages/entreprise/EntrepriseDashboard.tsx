import { Package, TrendingUp, Recycle, FileText } from "lucide-react";
import RoleNavbar from "@/components/RoleNavbar";
import StatCard from "@/components/StatCard";
import ActivityItem from "@/components/ActivityItem";
import NotificationPanel from "@/components/NotificationPanel";

const navItems = [
  { label: "Dashboard", path: "/entreprise", icon: "📊" },
  { label: "Gestion", path: "/entreprise/gestion", icon: "⚙️" },
  { label: "Analytics", path: "/entreprise/analytics", icon: "📈" },
];

const recentActivity = [
  { icon: "📦", title: "Réception déchets", desc: "450 kg plastique — Collecteur Mohamed", time: "Il y a 2h", points: "+450 kg" },
  { icon: "✅", title: "Lot traité", desc: "LOT-2026-041 — 380 kg recyclés", time: "Il y a 5h" },
  { icon: "📋", title: "Nouveau contrat", desc: "Partenariat avec municipalité Ariana", time: "Hier" },
  { icon: "🚛", title: "Livraison planifiée", desc: "22 kg Verre — Collecteur Ali", time: "Demain" },
];

const EntrepriseDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <RoleNavbar role="entreprise" items={navItems} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground">EcoRecycle Tunisia 🏭</h1>
            <p className="text-muted-foreground text-sm mt-1">Plan Business 🏢 — Vue d'ensemble</p>
          </div>
          <NotificationPanel />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={<Package className="w-5 h-5 text-primary" />} label="Déchets reçus" value="1,450 kg" sub="Ce mois" accent />
          <StatCard icon={<TrendingUp className="w-5 h-5 text-primary" />} label="Économies" value="12,300 DT" sub="-18% coûts" />
          <StatCard icon={<Recycle className="w-5 h-5 text-primary" />} label="Taux tri" value="94%" sub="+3% vs mois dernier" />
          <StatCard icon={<FileText className="w-5 h-5 text-primary" />} label="Collecteurs actifs" value="28" sub="Grand Tunis" />
        </div>

        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-bold text-foreground mb-4">📋 Activité récente</h2>
          {recentActivity.map((a, i) => (
            <ActivityItem key={i} {...a} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntrepriseDashboard;
