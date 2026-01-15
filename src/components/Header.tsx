import { Wrench } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg gradient-primary shadow-glow">
            <Wrench className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">
              Bengkel <span className="text-gradient">Wonoyoso</span>
            </h1>
            <p className="text-xs text-muted-foreground">Sistem Manajemen Persediaan</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
