import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import heroImage from "@/assets/hero-stadium.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Stadium" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-[600px] flex items-end pb-16 pt-32">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              🔥 Notícia em Destaque
            </Badge>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Brasil confirma amistoso contra Argentina em março
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A CBF anunciou oficialmente o clássico sul-americano que promete 
              reunir as maiores estrelas do futebol mundial. O confronto marca 
              a preparação das seleções para as Eliminatórias.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Ler Matéria Completa
              </Button>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Publicado há 2 horas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
