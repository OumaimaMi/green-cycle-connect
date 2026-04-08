import { Link } from "react-router-dom";
import { Recycle, Shield, Coins, Truck, BarChart3, Users, QrCode, MapPin, Gift, Bell } from "lucide-react";
import heroImg from "@/assets/hero-illustration.jpg";
import Navbar from "@/components/Navbar";

const features = [
  { icon: <QrCode className="w-6 h-6" />, title: "Scan QR", desc: "Scannez les conteneurs pour enregistrer vos dépôts instantanément." },
  { icon: <MapPin className="w-6 h-6" />, title: "Géolocalisation", desc: "Trouvez les points de collecte les plus proches en temps réel." },
  { icon: <Gift className="w-6 h-6" />, title: "Récompenses", desc: "Échangez vos WasteCoins contre des cadeaux et bons d'achat." },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Suivi & Stats", desc: "Suivez votre impact environnemental avec des données détaillées." },
  { icon: <Bell className="w-6 h-6" />, title: "Notifications", desc: "Restez informé des collectes, badges et promotions." },
  { icon: <Shield className="w-6 h-6" />, title: "Blockchain", desc: "Traçabilité complète et transparente de chaque collecte." },
];

const segments = [
  {
    icon: "",
    title: "Citoyens",
    desc: "Accueil, Carte, Scan QR et Récompenses — recyclez et gagnez.",
    link: "/citoyen",
    cta: "Espace Citoyen",
    pages: ["Accueil", "Carte", "Scan QR", "Récompenses"],
  },
  {
    icon: "",
    title: "Collecteurs",
    desc: "Dashboard, Carte et Gestion des collectes — optimisez vos revenus.",
    link: "/collecteur",
    cta: "Espace Collecteur",
    pages: ["Dashboard", "Carte", "Collecte"],
  },
  {
    icon: "",
    title: "Entreprises",
    desc: "Dashboard, Gestion et Analytics — pilotez votre activité de recyclage.",
    link: "/entreprise",
    cta: "Espace Entreprise",
    pages: ["Dashboard", "Gestion", "Analytics"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-secondary text-primary text-xs font-bold mb-4">
            🌱 Recyclage intelligent
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-4">
            Transformez vos <span className="text-primary">déchets</span> en valeur
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md">
            TounesClean connecte citoyens, collecteurs et entreprises grâce à la blockchain pour un recyclage récompensé et traçable.
          </p>
          <div className="flex gap-3">
            <Link to="/citoyen" className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition">
              Commencer maintenant
            </Link>
            <a href="#features" className="px-6 py-3 rounded-xl border border-border text-foreground font-bold text-sm hover:bg-secondary transition">
              Découvrir
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={heroImg} alt="TounesClean recyclage intelligent" className="rounded-2xl shadow-xl w-full max-w-lg" width={1280} height={720} />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-foreground mb-10">
            Fonctionnalités <span className="text-primary">clés</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-primary mb-4">
                  {f.icon}
                </div>
                <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-foreground mb-10">
          Une solution pour <span className="text-primary">chaque acteur</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {segments.map((s, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border p-8 flex flex-col items-center text-center hover:border-primary/40 hover:shadow-lg transition">
              <span className="text-5xl mb-4">{s.icon}</span>
              <h3 className="text-xl font-extrabold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {s.pages.map((p, j) => (
                  <span key={j} className="px-2 py-1 rounded-md bg-secondary text-xs font-semibold text-secondary-foreground">
                    {p}
                  </span>
                ))}
              </div>
              <Link to={s.link} className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition">
                {s.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-muted-foreground">
          TounesClean © 2026 — Recyclage intelligent pour la Tunisie 🇹🇳
        </div>
      </footer>
    </div>
  );
};

export default Index;
