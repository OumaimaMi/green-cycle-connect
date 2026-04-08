interface ActivityItemProps {
  icon: string;
  title: string;
  desc: string;
  time: string;
  points?: string;
}

const ActivityItem = ({ icon, title, desc, time, points }: ActivityItemProps) => (
  <div className="flex items-center gap-3 py-3 border-b border-border last:border-0">
    <span className="text-xl">{icon}</span>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-semibold text-foreground truncate">{title}</p>
      <p className="text-xs text-muted-foreground">{desc}</p>
    </div>
    <div className="text-right shrink-0">
      {points && <p className="text-sm font-bold text-primary">{points}</p>}
      <p className="text-xs text-muted-foreground">{time}</p>
    </div>
  </div>
);

export default ActivityItem;
