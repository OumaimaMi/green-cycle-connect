import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapMarker {
  lat: number;
  lng: number;
  label: string;
  type: "citoyen" | "collecteur" | "entreprise" | "conteneur";
}

const markerColors = {
  citoyen: "#2d9d5e",
  collecteur: "#e67e22",
  entreprise: "#3498db",
  conteneur: "#8e44ad",
};

const markerEmojis = {
  citoyen: "👤",
  collecteur: "🚛",
  entreprise: "🏭",
  conteneur: "📦",
};

const markers: MapMarker[] = [
  { lat: 36.8065, lng: 10.1815, label: "Centre Tunis — Point de collecte", type: "conteneur" },
  { lat: 36.8100, lng: 10.1660, label: "Ahmed — Citoyen actif", type: "citoyen" },
  { lat: 36.8190, lng: 10.1660, label: "Fatma — Citoyenne", type: "citoyen" },
  { lat: 36.7950, lng: 10.1400, label: "Mohamed — Collecteur", type: "collecteur" },
  { lat: 36.8300, lng: 10.2100, label: "Ali — Collecteur certifié", type: "collecteur" },
  { lat: 36.8520, lng: 10.3250, label: "EcoRecycle — Entreprise", type: "entreprise" },
  { lat: 36.8860, lng: 10.3230, label: "GreenTech Tunisia — Entreprise", type: "entreprise" },
  { lat: 36.8700, lng: 10.1660, label: "Point de collecte Bab Souika", type: "conteneur" },
  { lat: 36.7890, lng: 10.2200, label: "Karim — Citoyen", type: "citoyen" },
  { lat: 36.8400, lng: 10.1960, label: "Sami — Collecteur", type: "collecteur" },
  { lat: 36.8530, lng: 10.2680, label: "Point de collecte La Marsa", type: "conteneur" },
  { lat: 36.8620, lng: 10.3050, label: "Carthage — Point de collecte", type: "conteneur" },
  { lat: 36.8350, lng: 10.0960, label: "Le Bardo — Collecteur", type: "collecteur" },
  { lat: 36.8600, lng: 10.1640, label: "Ariana — Entreprise recyclage", type: "entreprise" },
  { lat: 36.7430, lng: 10.2220, label: "Ben Arous — Citoyen", type: "citoyen" },
  { lat: 36.8080, lng: 10.1960, label: "Manouba — Collecteur", type: "collecteur" },
  { lat: 36.8180, lng: 10.3060, label: "La Goulette — Point de collecte", type: "conteneur" },
  { lat: 36.8680, lng: 10.3490, label: "Sidi Bou Said — Citoyen", type: "citoyen" },
];

const TunisMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current).setView([36.82, 10.18], 12);
    mapInstanceRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    markers.forEach((m) => {
      const color = markerColors[m.type];
      const emoji = markerEmojis[m.type];

      const icon = L.divIcon({
        html: `<div style="background:${color};width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);">${emoji}</div>`,
        className: "",
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      L.marker([m.lat, m.lng], { icon })
        .addTo(map)
        .bindPopup(`<strong>${m.label}</strong><br/><span style="color:${color};font-weight:bold;text-transform:capitalize;">${m.type}</span>`);
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="p-4 border-b border-border flex flex-wrap items-center gap-4">
        <h2 className="text-lg font-bold text-foreground">🗺️ Carte — Grand Tunis</h2>
        <div className="flex gap-3 flex-wrap">
          {Object.entries(markerColors).map(([type, color]) => (
            <span key={type} className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
              <span style={{ background: color }} className="w-3 h-3 rounded-full inline-block" />
              {markerEmojis[type as keyof typeof markerEmojis]} {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          ))}
        </div>
      </div>
      <div ref={mapRef} style={{ height: 450 }} />
    </div>
  );
};

export default TunisMap;
