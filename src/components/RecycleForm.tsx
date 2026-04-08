import { useState } from "react";
import { PlusCircle, X } from "lucide-react";
import { toast } from "sonner";

const wasteTypes = ["Plastique", "Verre", "Papier", "Métal", "Organique", "Électronique", "Textile", "Mixte"];

interface RecycleFormProps {
  role: "citoyen" | "collecteur" | "entreprise";
}

const RecycleForm = ({ role }: RecycleFormProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ type: "", quantity: "", location: "", description: "" });

  const labels = {
    citoyen: { title: "Déclarer un recyclage", desc: "Ajoutez ce que vous avez recyclé", btn: "Ajouter recyclage" },
    collecteur: { title: "Déclarer une collecte", desc: "Enregistrez votre collecte", btn: "Ajouter collecte" },
    entreprise: { title: "Demande de collecte", desc: "Demandez une collecte de déchets", btn: "Nouvelle demande" },
  };

  const l = labels[role];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.type || !formData.quantity || !formData.location) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
    toast.success(role === "entreprise" ? "Demande envoyée avec succès !" : "Enregistré avec succès !");
    setFormData({ type: "", quantity: "", location: "", description: "" });
    setOpen(false);
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
          <PlusCircle className="w-5 h-5 text-primary" /> {l.title}
        </h2>
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition"
          >
            {l.btn}
          </button>
        )}
        {open && (
          <button onClick={() => setOpen(false)} className="p-1 rounded-lg hover:bg-secondary transition">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        )}
      </div>

      {!open && <p className="text-sm text-muted-foreground">{l.desc}</p>}

      {open && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-foreground mb-1.5 block">Type de déchet *</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:ring-2 focus:ring-ring outline-none"
              >
                <option value="">Sélectionner...</option>
                {wasteTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground mb-1.5 block">Quantité (kg) *</label>
              <input
                type="number"
                step="0.1"
                min="0"
                placeholder="Ex: 5.0"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:ring-2 focus:ring-ring outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground mb-1.5 block">Localisation *</label>
            <select
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:ring-2 focus:ring-ring outline-none"
            >
              <option value="">Sélectionner une zone...</option>
              {["Tunis Centre", "Bab Souika", "La Marsa", "Carthage", "Ariana", "Le Bardo", "Manouba", "Ben Arous", "La Goulette", "Sidi Bou Said"].map((z) => (
                <option key={z} value={z}>{z}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground mb-1.5 block">Description (optionnel)</label>
            <textarea
              placeholder="Détails supplémentaires..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={2}
              className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:ring-2 focus:ring-ring outline-none resize-none"
            />
          </div>

          <div className="flex gap-3 justify-end">
            <button type="button" onClick={() => setOpen(false)} className="px-4 py-2.5 rounded-lg border border-border text-sm font-semibold text-foreground hover:bg-secondary transition">
              Annuler
            </button>
            <button type="submit" className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition">
              Enregistrer
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default RecycleForm;
