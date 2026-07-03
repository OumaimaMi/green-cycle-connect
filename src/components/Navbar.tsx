import { Link, useLocation, useNavigate } from "react-router-dom";
import { Leaf, Menu, X, LogIn, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "Citoyen", path: "/citoyen" },
  { label: "Collecteur", path: "/collecteur" },
  { label: "Entreprise", path: "/entreprise" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);

  const handleAuthClick = async () => {
    if (user) {
      await signOut();
      navigate("/");
    } else {
      navigate("/auth");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-extrabold text-foreground">TounesClean</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path))
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={handleAuthClick}
            className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1.5"
          >
            {user ? <><LogOut className="w-4 h-4" /> Déconnexion</> : <><LogIn className="w-4 h-4" /> Connexion</>}
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-card p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path))
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
