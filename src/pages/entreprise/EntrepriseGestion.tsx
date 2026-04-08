import RoleNavbar from "@/components/RoleNavbar";
import RecycleForm from "@/components/RecycleForm";
import { Users, Package, Settings } from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/entreprise", icon: "📊" },
  { label: "Gestion", path: "/entreprise/gestion", icon: "⚙️" },
  { label: "Analytics", path: "/entreprise/analytics", icon: "📈" },
];

const collecteurs = [
  { name: "Mohamed B.", zone: "Bab Souika, Le Bardo", status: "Actif", collected: "245 kg", rating: "4.8 ⭐" },
  { name: "Ali K.", zone: "Carthage, La Marsa", status: "Actif", collected: "312 kg", rating: "4.9 ⭐" },
  { name: "Sami T.", zone: "Ariana, Manouba", status: "Actif", collected: "180 kg", rating: "4.5 ⭐" },
  { name: "Karim M.", zone: "Ben Arous", status: "Inactif", collected: "95 kg", rating: "4.2 ⭐" },
];

const lots = [
  { id: "LOT-2026-041", type: "Plastique", qty: "380 kg", status: "Traité", date: "5 Avril 2026" },
  { id: "LOT-2026-040", type: "Verre", qty: "220 kg", status: "En cours", date: "4 Avril 2026" },
  { id: "LOT-2026-039", type: "Papier", qty: "150 kg", status: "Traité", date: "3 Avril 2026" },
  { id: "LOT-2026-038", type: "Métal", qty: "90 kg", status: "Traité", date: "2 Avril 2026" },
];

const plans = [
  { name: "Starter", price: "299 DT/mois", features: ["500 kg/mois", "Rapports basiques", "Email support"], current: false },
  { name: "Business", price: "799 DT/mois", features: ["2000 kg/mois", "Analytics avancés", "Account manager", "API access"], current: true },
  { name: "Enterprise", price: "Sur mesure", features: ["Illimité", "Rapports sur mesure", "Support premium 24/7", "Intégration ERP"], current: false },
];

const EntrepriseGestion = () => {
  return (
    <div className="min-h-screen bg-background">
      <RoleNavbar role="entreprise" items={navItems} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-foreground">⚙️ Gestion</h1>
          <p className="text-muted-foreground text-sm mt-1">Gérez vos collecteurs, lots et abonnement</p>
        </div>

        {/* Demande de collecte */}
        <div className="mb-8">
          <RecycleForm role="entreprise" />
        </div>

        {/* Collecteurs */}
        <div className="bg-card rounded-xl border border-border p-6 mb-6">
          <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" /> Collecteurs partenaires
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs font-bold text-muted-foreground py-3 px-2">Nom</th>
                  <th className="text-left text-xs font-bold text-muted-foreground py-3 px-2">Zone</th>
                  <th className="text-left text-xs font-bold text-muted-foreground py-3 px-2">Statut</th>
                  <th className="text-left text-xs font-bold text-muted-foreground py-3 px-2">Collecté</th>
                  <th className="text-left text-xs font-bold text-muted-foreground py-3 px-2">Note</th>
                </tr>
              </thead>
              <tbody>
                {collecteurs.map((c, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="py-3 px-2 text-sm font-semibold text-foreground">{c.name}</td>
                    <td className="py-3 px-2 text-sm text-muted-foreground">{c.zone}</td>
                    <td className="py-3 px-2">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        c.status === "Actif" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                      }`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-sm font-bold text-foreground">{c.collected}</td>
                    <td className="py-3 px-2 text-sm text-foreground">{c.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lots */}
        <div className="bg-card rounded-xl border border-border p-6 mb-6">
          <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-primary" /> Lots de déchets
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs font-bold text-muted-foreground py-3 px-2">ID Lot</th>
                  <th className="text-left text-xs font-bold text-muted-foreground py-3 px-2">Type</th>
                  <th className="text-left text-xs font-bold text-muted-foreground py-3 px-2">Quantité</th>
                  <th className="text-left text-xs font-bold text-muted-foreground py-3 px-2">Statut</th>
                  <th className="text-left text-xs font-bold text-muted-foreground py-3 px-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {lots.map((l, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="py-3 px-2 text-sm font-bold text-primary">{l.id}</td>
                    <td className="py-3 px-2 text-sm text-foreground">{l.type}</td>
                    <td className="py-3 px-2 text-sm font-semibold text-foreground">{l.qty}</td>
                    <td className="py-3 px-2">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        l.status === "Traité" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                      }`}>
                        {l.status}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-sm text-muted-foreground">{l.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Plans */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
            <Settings className="w-5 h-5 text-primary" /> Abonnement
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {plans.map((p, i) => (
              <div key={i} className={`rounded-xl p-6 border-2 transition ${p.current ? "border-primary bg-primary/5" : "border-border"}`}>
                {p.current && (
                  <span className="inline-block px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold mb-3">
                    Plan actuel
                  </span>
                )}
                <h3 className="text-lg font-extrabold text-foreground">{p.name}</h3>
                <p className="text-2xl font-extrabold text-primary mt-1 mb-4">{p.price}</p>
                <ul className="space-y-2">
                  {p.features.map((f, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="text-primary">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntrepriseGestion;
