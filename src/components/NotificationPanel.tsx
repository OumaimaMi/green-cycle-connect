import { Bell, X } from "lucide-react";
import { useState } from "react";

interface Notification {
  id: number;
  icon: string;
  title: string;
  desc: string;
  time: string;
  read: boolean;
}

const defaultNotifications: Notification[] = [
  { id: 1, icon: "♻️", title: "Collecte confirmée", desc: "Votre recyclage de 3kg plastique a été validé", time: "Il y a 5 min", read: false },
  { id: 2, icon: "🏆", title: "Nouveau badge !", desc: "Vous avez obtenu le badge 'Recycleur Pro'", time: "Il y a 1h", read: false },
  { id: 3, icon: "📍", title: "Point de collecte proche", desc: "Un nouveau conteneur a été ajouté à 200m", time: "Il y a 2h", read: true },
  { id: 4, icon: "💰", title: "+50 WasteCoins", desc: "Récompense pour votre série de 5 jours", time: "Hier", read: true },
];

const NotificationPanel = () => {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(defaultNotifications);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-lg hover:bg-secondary transition"
      >
        <Bell className="w-5 h-5 text-foreground" />
        {unreadCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-12 z-50 w-80 bg-card rounded-xl border border-border shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="text-sm font-bold text-foreground">Notifications</h3>
              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <button onClick={markAllRead} className="text-xs text-primary font-semibold hover:underline">
                    Tout lire
                  </button>
                )}
                <button onClick={() => setOpen(false)} className="p-1 hover:bg-secondary rounded">
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className={`flex items-start gap-3 p-4 border-b border-border last:border-0 ${
                    !n.read ? "bg-secondary/50" : ""
                  }`}
                >
                  <span className="text-lg mt-0.5">{n.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground">{n.title}</p>
                    <p className="text-xs text-muted-foreground">{n.desc}</p>
                    <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
                  </div>
                  {!n.read && <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NotificationPanel;
