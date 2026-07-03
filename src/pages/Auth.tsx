import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const Auth = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<"citoyen" | "collecteur" | "entreprise">("citoyen");

  useEffect(() => {
    const redirectByRole = async () => {
      if (!user) return;
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .maybeSingle();
      const role = data?.role;
      if (role === "collecteur") navigate("/collecteur", { replace: true });
      else if (role === "entreprise") navigate("/entreprise", { replace: true });
      else if (role === "citoyen") navigate("/citoyen", { replace: true });
      else navigate("/", { replace: true });
    };
    redirectByRole();
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: { full_name: fullName, role },
          },
        });
        if (error) throw error;
        toast.success("Compte créé ! Vérifie ton email pour confirmer.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Bienvenue 👋");
      }
    } catch (err: any) {
      toast.error(err.message || "Erreur d'authentification");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center gap-2 justify-center mb-8">
          <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
            <Leaf className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-extrabold text-foreground">TounesClean</span>
        </Link>

        <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-lg">
          <h1 className="text-2xl font-extrabold text-foreground mb-1">
            {mode === "login" ? "Connexion" : "Créer un compte"}
          </h1>
          <p className="text-sm text-muted-foreground mb-6">
            {mode === "login" ? "Connecte-toi pour accéder à ton espace" : "Rejoins le mouvement écologique 🌱"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-1.5">Nom complet</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Mohamed Ben Ali"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-1.5">Je suis</label>
                  <div className="grid grid-cols-3 gap-2">
                    {([
                      { v: "citoyen", l: "👤 Citoyen" },
                      { v: "collecteur", l: "🚛 Collecteur" },
                      { v: "entreprise", l: "🏭 Entreprise" },
                    ] as const).map((opt) => (
                      <button
                        type="button"
                        key={opt.v}
                        onClick={() => setRole(opt.v)}
                        className={`px-2 py-2 rounded-xl text-xs font-bold transition ${
                          role === opt.v
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {opt.l}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-bold text-foreground mb-1.5">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="toi@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-foreground mb-1.5">Mot de passe</label>
              <input
                type="password"
                required
                minLength={4}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-secondary/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Patiente..." : mode === "login" ? "Se connecter" : "Créer mon compte"}
            </button>
          </form>

          <button
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="w-full mt-4 text-sm text-muted-foreground hover:text-primary transition"
          >
            {mode === "login" ? "Pas de compte ? S'inscrire" : "Déjà inscrit ? Se connecter"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
