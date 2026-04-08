import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Citoyen
import CitoyenAccueil from "./pages/citoyen/CitoyenAccueil";
import CitoyenCarte from "./pages/citoyen/CitoyenCarte";
import CitoyenScan from "./pages/citoyen/CitoyenScan";
import CitoyenRecompenses from "./pages/citoyen/CitoyenRecompenses";

// Collecteur
import CollecteurDashboard from "./pages/collecteur/CollecteurDashboard";
import CollecteurCarte from "./pages/collecteur/CollecteurCarte";
import CollecteurCollecte from "./pages/collecteur/CollecteurCollecte";

// Entreprise
import EntrepriseDashboard from "./pages/entreprise/EntrepriseDashboard";
import EntrepriseGestion from "./pages/entreprise/EntrepriseGestion";
import EntrepriseAnalytics from "./pages/entreprise/EntrepriseAnalytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Citoyen */}
          <Route path="/citoyen" element={<CitoyenAccueil />} />
          <Route path="/citoyen/carte" element={<CitoyenCarte />} />
          <Route path="/citoyen/scan" element={<CitoyenScan />} />
          <Route path="/citoyen/recompenses" element={<CitoyenRecompenses />} />

          {/* Collecteur */}
          <Route path="/collecteur" element={<CollecteurDashboard />} />
          <Route path="/collecteur/carte" element={<CollecteurCarte />} />
          <Route path="/collecteur/collecte" element={<CollecteurCollecte />} />

          {/* Entreprise */}
          <Route path="/entreprise" element={<EntrepriseDashboard />} />
          <Route path="/entreprise/gestion" element={<EntrepriseGestion />} />
          <Route path="/entreprise/analytics" element={<EntrepriseAnalytics />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
