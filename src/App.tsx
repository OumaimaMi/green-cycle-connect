import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

import CitoyenAccueil from "./pages/citoyen/CitoyenAccueil";
import CitoyenCarte from "./pages/citoyen/CitoyenCarte";
import CitoyenScan from "./pages/citoyen/CitoyenScan";
import CitoyenRecompenses from "./pages/citoyen/CitoyenRecompenses";

import CollecteurDashboard from "./pages/collecteur/CollecteurDashboard";
import CollecteurCarte from "./pages/collecteur/CollecteurCarte";
import CollecteurCollecte from "./pages/collecteur/CollecteurCollecte";

import EntrepriseDashboard from "./pages/entreprise/EntrepriseDashboard";
import EntrepriseGestion from "./pages/entreprise/EntrepriseGestion";
import EntrepriseAnalytics from "./pages/entreprise/EntrepriseAnalytics";

const queryClient = new QueryClient();

const protect = (el: JSX.Element) => <ProtectedRoute>{el}</ProtectedRoute>;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />

            <Route path="/citoyen" element={protect(<CitoyenAccueil />)} />
            <Route path="/citoyen/carte" element={protect(<CitoyenCarte />)} />
            <Route path="/citoyen/scan" element={protect(<CitoyenScan />)} />
            <Route path="/citoyen/recompenses" element={protect(<CitoyenRecompenses />)} />

            <Route path="/collecteur" element={protect(<CollecteurDashboard />)} />
            <Route path="/collecteur/carte" element={protect(<CollecteurCarte />)} />
            <Route path="/collecteur/collecte" element={protect(<CollecteurCollecte />)} />

            <Route path="/entreprise" element={protect(<EntrepriseDashboard />)} />
            <Route path="/entreprise/gestion" element={protect(<EntrepriseGestion />)} />
            <Route path="/entreprise/analytics" element={protect(<EntrepriseAnalytics />)} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
