import RoleNavbar from "@/components/RoleNavbar";
import TunisMap from "@/components/TunisMap";
import { Navigation } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const navItems = [
  { label: "Dashboard", path: "/collecteur", icon: "📊" },
  { label: "Carte", path: "/collecteur/carte", icon: "🗺️" },
  { label: "Collecte", path: "/collecteur/collecte", icon: "📦" },
];

const activeMissions = [
  { zone: "Bab Souika", distance: "1.2 km", type: "Plastique — 15 kg", reward: "45 DT" },
  { zone: "La Marsa", distance: "8.5 km", type: "Verre + Papier — 22 kg", reward: "60 DT" },
  { zone: "Ariana", distance: "4.3 km", type: "Métal — 8 kg", reward: "30 DT" },
];

const CollecteurCarte = () => {
  const [locating, setLocating] = useState(false);

  const handleGeolocate = () => {
    setLocating(true);
    setTimeout(() => {
      setLocating(false);
      toast.success("Position mise à jour !");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <RoleNavbar role="collecteur" items={navItems} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground">🗺️ Carte des missions</h1>
            <p className="text-muted-foreground text-sm mt-1">Visualisez vos missions et itinéraires</p>
          </div>
          <button
            onClick={handleGeolocate}
            disabled={locating}
            className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition flex items-center gap-2 disabled:opacity-50"
          >
            <Navigation className={`w-4 h-4 ${locating ? "animate-pulse" : ""}`} />
            {locating ? "Localisation..." : "Ma position"}
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TunisMap />
          </div>
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-bold text-foreground mb-4">🎯 Missions à proximité</h2>
            <div className="space-y-3">
              {activeMissions.map((m, i) => (
                <div key={i} className="p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-bold text-foreground">{m.zone}</p>
                    <span className="text-xs text-muted-foreground">📍 {m.distance}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{m.type}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-extrabold text-primary">{m.reward}</span>
                    <button className="px-3 py-1 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition">
                      Accepter
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollecteurCarte;
