import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  variant?: 'default' | 'warning' | 'success';
}

const StatCard = ({ title, value, icon: Icon, variant = 'default' }: StatCardProps) => {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-glow hover:border-primary/30",
      "animate-fade-in"
    )}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className={cn(
            "text-3xl font-bold",
            variant === 'warning' && "text-warning",
            variant === 'success' && "text-success",
            variant === 'default' && "text-foreground"
          )}>
            {value}
          </p>
        </div>
        <div className={cn(
          "p-3 rounded-lg",
          variant === 'warning' && "bg-warning/10",
          variant === 'success' && "bg-success/10",
          variant === 'default' && "bg-primary/10"
        )}>
          <Icon className={cn(
            "h-6 w-6",
            variant === 'warning' && "text-warning",
            variant === 'success' && "text-success",
            variant === 'default' && "text-primary"
          )} />
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className={cn(
          "w-full h-full rounded-full blur-3xl",
          variant === 'warning' && "bg-warning",
          variant === 'success' && "bg-success",
          variant === 'default' && "bg-primary"
        )} />
      </div>
    </div>
  );
};

export default StatCard;
