import { BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area } from "recharts";
import RoleNavbar from "@/components/RoleNavbar";
import StatCard from "@/components/StatCard";
import { TrendingUp, Recycle, Package, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/entreprise", icon: "📊" },
  { label: "Gestion", path: "/entreprise/gestion", icon: "⚙️" },
  { label: "Analytics", path: "/entreprise/analytics", icon: "📈" },
];

const monthlyData = [
  { month: "Jan", plastique: 120, verre: 80, papier: 60, metal: 40 },
  { month: "Fév", plastique: 150, verre: 90, papier: 70, metal: 55 },
  { month: "Mar", plastique: 180, verre: 110, papier: 85, metal: 60 },
  { month: "Avr", plastique: 200, verre: 130, papier: 95, metal: 70 },
  { month: "Mai", plastique: 230, verre: 140, papier: 100, metal: 80 },
  { month: "Juin", plastique: 260, verre: 160, papier: 120, metal: 90 },
];

const pieData = [
  { name: "Plastique", value: 42, color: "hsl(152, 60%, 36%)" },
  { name: "Verre", value: 25, color: "hsl(160, 50%, 45%)" },
  { name: "Papier", value: 20, color: "hsl(145, 40%, 55%)" },
  { name: "Métal", value: 13, color: "hsl(140, 30%, 70%)" },
];

const trendData = [
  { week: "S1", collectes: 32, revenue: 2400 },
  { week: "S2", collectes: 38, revenue: 2800 },
  { week: "S3", collectes: 45, revenue: 3200 },
  { week: "S4", collectes: 42, revenue: 3100 },
  { week: "S5", collectes: 50, revenue: 3600 },
  { week: "S6", collectes: 55, revenue: 4000 },
];

const EntrepriseAnalytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <RoleNavbar role="entreprise" items={navItems} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-foreground">📈 Analytics</h1>
          <p className="text-muted-foreground text-sm mt-1">Données en temps réel et analyses avancées</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={<Package className="w-5 h-5 text-primary" />} label="Total collecté" value="6,830 kg" sub="6 derniers mois" accent />
          <StatCard icon={<TrendingUp className="w-5 h-5 text-primary" />} label="Croissance" value="+18%" sub="vs période précédente" />
          <StatCard icon={<Recycle className="w-5 h-5 text-primary" />} label="Taux recyclage" value="94%" sub="Objectif: 95%" />
          <StatCard icon={<ArrowUpRight className="w-5 h-5 text-primary" />} label="ROI estimé" value="340%" sub="Sur 6 mois" />
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" /> Collecte par mois (kg)
            </h2>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(145, 20%, 88%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="plastique" fill="hsl(152, 60%, 36%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="verre" fill="hsl(160, 50%, 45%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="papier" fill="hsl(145, 40%, 55%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="metal" fill="hsl(140, 30%, 70%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-bold text-foreground mb-4">Répartition matières</h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" label={({ name, value }) => `${name} ${value}%`}>
                  {pieData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-bold text-foreground mb-4">📊 Tendance collectes / semaine</h2>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(145, 20%, 88%)" />
                <XAxis dataKey="week" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="collectes" stroke="hsl(152, 60%, 36%)" fill="hsl(152, 60%, 36%)" fillOpacity={0.15} strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-lg font-bold text-foreground mb-4">💰 Revenus / semaine (DT)</h2>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(145, 20%, 88%)" />
                <XAxis dataKey="week" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="hsl(160, 50%, 45%)" strokeWidth={2} dot={{ fill: "hsl(160, 50%, 45%)" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntrepriseAnalytics;
