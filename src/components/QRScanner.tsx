import { useState } from "react";
import { QrCode, Camera, CheckCircle, X } from "lucide-react";
import { toast } from "sonner";

const mockQRResults = [
  { id: "CTN-001", type: "Conteneur Plastique", location: "Tunis Centre", capacity: "75%", points: 25 },
  { id: "CTN-002", type: "Conteneur Verre", location: "La Marsa", capacity: "40%", points: 15 },
  { id: "CTN-003", type: "Conteneur Papier", location: "Ariana", capacity: "90%", points: 30 },
  { id: "CTN-004", type: "Conteneur Métal", location: "Carthage", capacity: "20%", points: 20 },
];

const QRScanner = () => {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<(typeof mockQRResults)[0] | null>(null);

  const startScan = () => {
    setScanning(true);
    setResult(null);
    // Simulate scanning
    setTimeout(() => {
      const randomResult = mockQRResults[Math.floor(Math.random() * mockQRResults.length)];
      setResult(randomResult);
      setScanning(false);
      toast.success(`QR Code scanné: ${randomResult.id}`);
    }, 2000);
  };

  const confirmDeposit = () => {
    if (result) {
      toast.success(`+${result.points} WasteCoins ! Dépôt confirmé au ${result.type}`);
      setResult(null);
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
        <QrCode className="w-5 h-5 text-primary" /> Scanner QR Code
      </h2>

      {!scanning && !result && (
        <div className="text-center py-8">
          <div className="w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
            <QrCode className="w-12 h-12 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Scannez le QR code du conteneur pour enregistrer votre dépôt et gagner des WasteCoins
          </p>
          <button
            onClick={startScan}
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition flex items-center gap-2 mx-auto"
          >
            <Camera className="w-4 h-4" /> Lancer le scan
          </button>
        </div>
      )}

      {scanning && (
        <div className="text-center py-8">
          <div className="w-48 h-48 rounded-2xl border-4 border-primary/30 border-dashed flex items-center justify-center mx-auto mb-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent animate-pulse" />
            <QrCode className="w-16 h-16 text-primary animate-pulse" />
          </div>
          <p className="text-sm font-semibold text-foreground">Scan en cours...</p>
          <p className="text-xs text-muted-foreground mt-1">Pointez vers le QR code du conteneur</p>
        </div>
      )}

      {result && (
        <div className="space-y-4">
          <div className="bg-secondary/50 rounded-xl p-4 border border-border">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-foreground">QR Code détecté</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-muted-foreground">ID Conteneur</p>
                <p className="text-sm font-bold text-foreground">{result.id}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Type</p>
                <p className="text-sm font-bold text-foreground">{result.type}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Localisation</p>
                <p className="text-sm font-bold text-foreground">{result.location}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Remplissage</p>
                <p className="text-sm font-bold text-foreground">{result.capacity}</p>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 rounded-xl p-4 text-center">
            <p className="text-2xl font-extrabold text-primary">+{result.points} WC</p>
            <p className="text-xs text-muted-foreground mt-1">WasteCoins à gagner</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setResult(null)}
              className="flex-1 px-4 py-2.5 rounded-lg border border-border text-sm font-semibold text-foreground hover:bg-secondary transition"
            >
              <X className="w-4 h-4 inline mr-1" /> Annuler
            </button>
            <button
              onClick={confirmDeposit}
              className="flex-1 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition"
            >
              <CheckCircle className="w-4 h-4 inline mr-1" /> Confirmer dépôt
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRScanner;
