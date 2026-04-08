import RoleNavbar from "@/components/RoleNavbar";
import RecycleForm from "@/components/RecycleForm";
import QRScanner from "@/components/QRScanner";
import ActivityItem from "@/components/ActivityItem";
import { Package } from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/collecteur", icon: "📊" },
  { label: "Carte", path: "/collecteur/carte", icon: "🗺️" },
  { label: "Collecte", path: "/collecteur/collecte", icon: "📦" },
];

const todayCollections = [
  { icon: "📦", title: "Collecte Bab Souika", desc: "15 kg Plastique — Livré au centre", time: "Il y a 1h", points: "+45 DT" },
  { icon: "📦", title: "Collecte Carthage", desc: "20 kg Mixte — En transit", time: "Il y a 3h", points: "+55 DT" },
  { icon: "📦", title: "Collecte Le Bardo", desc: "12 kg Plastique — Livré", time: "Il y a 5h", points: "+35 DT" },
];

const CollecteurCollecte = () => {
  return (
    <div className="min-h-screen bg-background">
      <RoleNavbar role="collecteur" items={navItems} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-foreground">📦 Gestion des collectes</h1>
          <p className="text-muted-foreground text-sm mt-1">Enregistrez et suivez vos collectes du jour</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <QRScanner />
          <RecycleForm role="collecteur" />
        </div>

        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-primary" /> Collectes du jour
          </h2>
          {todayCollections.map((c, i) => (
            <ActivityItem key={i} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollecteurCollecte;
