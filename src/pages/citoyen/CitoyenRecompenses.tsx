import { Coins, Gift, Star, ArrowRight } from "lucide-react";
import RoleNavbar from "@/components/RoleNavbar";
import { useState } from "react";
import { toast } from "sonner";

const navItems = [
  { label: "Accueil", path: "/citoyen", icon: "🏠" },
  { label: "Carte", path: "/citoyen/carte", icon: "🗺️" },
  { label: "Scan QR", path: "/citoyen/scan", icon: "📷" },
  { label: "Récompenses", path: "/citoyen/recompenses", icon: "🎁" },
];

const rewards = [
  { id: 1, icon: "☕", name: "Bon café", desc: "Un café gratuit chez nos partenaires", cost: 50, category: "Alimentation" },
  { id: 2, icon: "🎬", name: "Ticket cinéma", desc: "Une place de cinéma gratuite", cost: 100, category: "Loisirs" },
  { id: 3, icon: "🛒", name: "Bon d'achat 10 DT", desc: "Bon d'achat dans les supermarchés partenaires", cost: 200, category: "Shopping" },
  { id: 4, icon: "📱", name: "Recharge mobile 5 DT", desc: "Recharge téléphonique tous opérateurs", cost: 80, category: "Télécom" },
  { id: 5, icon: "🌳", name: "Planter un arbre", desc: "Un arbre planté en votre nom en Tunisie", cost: 150, category: "Environnement" },
  { id: 6, icon: "🎁", name: "Kit recyclage", desc: "Kit de tri sélectif pour la maison", cost: 120, category: "Environnement" },
];

const history = [
  { icon: "☕", name: "Bon café", date: "2 Avril 2026", cost: -50 },
  { icon: "📱", name: "Recharge mobile 5 DT", date: "28 Mars 2026", cost: -80 },
  { icon: "🌳", name: "Planter un arbre", date: "15 Mars 2026", cost: -150 },
];

const CitoyenRecompenses = () => {
  const [balance] = useState(1250);

  const handleClaim = (reward: (typeof rewards)[0]) => {
    if (balance < reward.cost) {
      toast.error("Solde insuffisant !");
      return;
    }
    toast.success(`${reward.icon} ${reward.name} réclamé ! -${reward.cost} WC`);
  };

  return (
    <div className="min-h-screen bg-background">
      <RoleNavbar role="citoyen" items={navItems} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-foreground">🎁 Récompenses</h1>
          <p className="text-muted-foreground text-sm mt-1">Échangez vos WasteCoins contre des récompenses</p>
        </div>

        {/* Balance */}
        <div className="bg-primary rounded-2xl p-6 mb-8 flex items-center justify-between">
          <div>
            <p className="text-primary-foreground/70 text-sm font-medium">Votre solde</p>
            <p className="text-4xl font-extrabold text-primary-foreground">{balance.toLocaleString()} WC</p>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
            <Coins className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>

        {/* Rewards grid */}
        <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Gift className="w-5 h-5 text-primary" /> Catalogue
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {rewards.map((r) => (
            <div key={r.id} className="bg-card rounded-xl border border-border p-5 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{r.icon}</span>
                <div>
                  <p className="text-sm font-bold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.category}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-4 flex-1">{r.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-primary">{r.cost} WC</span>
                <button
                  onClick={() => handleClaim(r)}
                  disabled={balance < r.cost}
                  className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition disabled:opacity-40 flex items-center gap-1"
                >
                  Échanger <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* History */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" /> Historique des échanges
          </h2>
          <div className="space-y-3">
            {history.map((h, i) => (
              <div key={i} className="flex items-center gap-3 py-3 border-b border-border last:border-0">
                <span className="text-xl">{h.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{h.name}</p>
                  <p className="text-xs text-muted-foreground">{h.date}</p>
                </div>
                <span className="text-sm font-bold text-destructive">{h.cost} WC</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitoyenRecompenses;
