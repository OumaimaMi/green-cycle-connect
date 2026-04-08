import RoleNavbar from "@/components/RoleNavbar";
import TunisMap from "@/components/TunisMap";
import { MapPin, Navigation } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const navItems = [
  { label: "Accueil", path: "/citoyen", icon: "🏠" },
  { label: "Carte", path: "/citoyen/carte", icon: "🗺️" },
  { label: "Scan QR", path: "/citoyen/scan", icon: "📷" },
  { label: "Récompenses", path: "/citoyen/recompenses", icon: "🎁" },
];

const nearbyPoints = [
  { name: "Conteneur #12 — Plastique", distance: "150m", fill: "45%" },
  { name: "Conteneur #8 — Verre", distance: "320m", fill: "70%" },
  { name: "Conteneur #5 — Papier", distance: "500m", fill: "20%" },
  { name: "Conteneur #15 — Mixte", distance: "800m", fill: "90%" },
];

const CitoyenCarte = () => {
  const [locating, setLocating] = useState(false);

  const handleGeolocate = () => {
    setLocating(true);
    setTimeout(() => {
      setLocating(false);
      toast.success("Position mise à jour : Tunis Centre");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <RoleNavbar role="citoyen" items={navItems} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground">🗺️ Carte & Géolocalisation</h1>
            <p className="text-muted-foreground text-sm mt-1">Trouvez les points de collecte les plus proches</p>
          </div>
          <button
            onClick={handleGeolocate}
            disabled={locating}
            className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition flex items-center gap-2 disabled:opacity-50"
          >
            <Navigation className={`w-4 h-4 ${locating ? "animate-pulse" : ""}`} />
            {locating ? "Localisation..." : "Me localiser"}
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TunisMap />
          </div>
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" /> Points proches
            </h2>
            <div className="space-y-3">
              {nearbyPoints.map((p, i) => (
                <div key={i} className="p-3 rounded-xl bg-secondary/50 border border-border/50">
                  <p className="text-sm font-bold text-foreground">{p.name}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-muted-foreground">📍 {p.distance}</span>
                    <span className={`text-xs font-bold ${parseInt(p.fill) > 80 ? "text-destructive" : "text-primary"}`}>
                      Rempli: {p.fill}
                    </span>
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

export default CitoyenCarte;
