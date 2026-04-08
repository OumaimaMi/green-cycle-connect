import { Coins, Recycle, Trophy, TrendingUp, Flame, Star } from "lucide-react";
import RoleNavbar from "@/components/RoleNavbar";
import StatCard from "@/components/StatCard";
import ActivityItem from "@/components/ActivityItem";
import NotificationPanel from "@/components/NotificationPanel";
import { Progress } from "@/components/ui/progress";

const navItems = [
  { label: "Accueil", path: "/citoyen", icon: "🏠" },
  { label: "Carte", path: "/citoyen/carte", icon: "🗺️" },
  { label: "Scan QR", path: "/citoyen/scan", icon: "📷" },
  { label: "Récompenses", path: "/citoyen/recompenses", icon: "🎁" },
];

const activities = [
  { icon: "♻️", title: "Plastique recyclé", desc: "2.5 kg déposé à Conteneur #12", time: "Il y a 2h", points: "+25 WC" },
  { icon: "🏆", title: "Challenge complété", desc: "\"7 jours consécutifs de tri\"", time: "Hier", points: "+100 WC" },
  { icon: "♻️", title: "Verre recyclé", desc: "1.2 kg déposé à Conteneur #8", time: "Il y a 2j", points: "+15 WC" },
  { icon: "🎁", title: "Récompense réclamée", desc: "Bon café 5 DT", time: "Il y a 3j", points: "-50 WC" },
];

const challenges = [
  { icon: "🔥", title: "Série de 7 jours", progress: 71, current: "5/7 jours" },
  { icon: "🌍", title: "Recycler 10 kg", progress: 45, current: "4.5/10 kg" },
  { icon: "⭐", title: "Inviter 3 amis", progress: 33, current: "1/3 amis" },
];

const CitoyenAccueil = () => {
  return (
    <div className="min-h-screen bg-background">
      <RoleNavbar role="citoyen" items={navItems} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground">Bonjour, Ahmed 👋</h1>
            <p className="text-muted-foreground text-sm mt-1">Niveau Éco-Héros 🌟 — Continuez à recycler !</p>
          </div>
          <NotificationPanel />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={<Coins className="w-5 h-5 text-primary" />} label="WasteCoins" value="1,250" sub="+125 cette semaine" accent />
          <StatCard icon={<Recycle className="w-5 h-5 text-primary" />} label="Total recyclé" value="47 kg" sub="Ce mois" />
          <StatCard icon={<Trophy className="w-5 h-5 text-primary" />} label="Classement" value="#12" sub="Grand Tunis" />
          <StatCard icon={<TrendingUp className="w-5 h-5 text-primary" />} label="Impact CO₂" value="-23 kg" sub="Économisé" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Recycle className="w-5 h-5 text-primary" /> Activité récente
            </h2>
            <div>
              {activities.map((a, i) => (
                <ActivityItem key={i} {...a} />
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Flame className="w-5 h-5 text-primary" /> Challenges actifs
            </h2>
            <div className="space-y-5">
              {challenges.map((c, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold flex items-center gap-2">
                      <span>{c.icon}</span> {c.title}
                    </span>
                    <span className="text-xs text-muted-foreground">{c.current}</span>
                  </div>
                  <Progress value={c.progress} className="h-2" />
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-border">
              <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" /> Badges obtenus
              </h3>
              <div className="flex gap-2 flex-wrap">
                {["🌱 Débutant", "♻️ Recycleur", "🔥 Série 7j", "🏆 Top 20"].map((b, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-secondary text-xs font-semibold text-secondary-foreground">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitoyenAccueil;
