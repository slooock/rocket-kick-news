import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-xl font-bold">⚽</span>
            </div>
            <h1 className="text-2xl font-bold gradient-text">FutScore</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Brasileirão
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Champions League
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Mercado da Bola
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a href="/news/create">
              <Button variant="outline">Criar Post</Button>
            </a>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
