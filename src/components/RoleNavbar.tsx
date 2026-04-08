import { Link, useLocation } from "react-router-dom";
import { Leaf, Menu, X, Home } from "lucide-react";
import { useState } from "react";

interface NavItem {
  label: string;
  path: string;
  icon: string;
}

interface RoleNavbarProps {
  role: "citoyen" | "collecteur" | "entreprise";
  items: NavItem[];
}

const roleConfig = {
  citoyen: { label: "Citoyen", emoji: "👤", color: "bg-primary" },
  collecteur: { label: "Collecteur", emoji: "🚛", color: "bg-accent" },
  entreprise: { label: "Entreprise", emoji: "🏭", color: "bg-primary" },
};

const RoleNavbar = ({ role, items }: RoleNavbarProps) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const config = roleConfig[role];

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Leaf className="w-4 h-4 text-primary-foreground" />
            </div>
          </Link>
          <div className="h-6 w-px bg-border" />
          <span className="text-sm font-extrabold text-foreground flex items-center gap-1.5">
            {config.emoji} {config.label}
          </span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            to="/"
            className="px-3 py-1.5 rounded-lg text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <Home className="w-4 h-4" />
          </Link>
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <span>{item.icon}</span> {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-card p-4 space-y-1">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block px-4 py-3 rounded-lg text-sm font-semibold text-muted-foreground hover:bg-secondary"
          >
            🏠 Accueil
          </Link>
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              {item.icon} {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default RoleNavbar;
