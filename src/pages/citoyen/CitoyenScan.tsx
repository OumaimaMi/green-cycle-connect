import RoleNavbar from "@/components/RoleNavbar";
import QRScanner from "@/components/QRScanner";
import RecycleForm from "@/components/RecycleForm";
import ActivityItem from "@/components/ActivityItem";

const navItems = [
  { label: "Accueil", path: "/citoyen", icon: "🏠" },
  { label: "Carte", path: "/citoyen/carte", icon: "🗺️" },
  { label: "Scan QR", path: "/citoyen/scan", icon: "📷" },
  { label: "Récompenses", path: "/citoyen/recompenses", icon: "🎁" },
];

const recentScans = [
  { icon: "📷", title: "Scan CTN-001", desc: "Conteneur Plastique — Tunis Centre", time: "Il y a 2h", points: "+25 WC" },
  { icon: "📷", title: "Scan CTN-003", desc: "Conteneur Papier — Ariana", time: "Hier", points: "+30 WC" },
  { icon: "📷", title: "Scan CTN-002", desc: "Conteneur Verre — La Marsa", time: "Il y a 3j", points: "+15 WC" },
];

const CitoyenScan = () => {
  return (
    <div className="min-h-screen bg-background">
      <RoleNavbar role="citoyen" items={navItems} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-foreground">📷 Scanner & Déclarer</h1>
          <p className="text-muted-foreground text-sm mt-1">Scannez un QR code ou déclarez manuellement votre recyclage</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <QRScanner />
          <RecycleForm role="citoyen" />
        </div>

        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-bold text-foreground mb-4">📋 Derniers scans</h2>
          {recentScans.map((s, i) => (
            <ActivityItem key={i} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CitoyenScan;
