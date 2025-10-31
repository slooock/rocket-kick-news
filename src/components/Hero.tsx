"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


interface FeaturedNews {
  id: number;
  title: string;
  excerpt: string;
  timeAgo: string;
  image: string;
}

const Hero = () => {
  const [featuredNews, setFeaturedNews] = useState<FeaturedNews | null>(null);

  useEffect(() => {
    const fetchFeaturedNews = async () => {
      try {
        const response = await fetch('/api/news?limit=1');
        if (response.ok) {
          const data = await response.json();
          if (data.news && data.news.length > 0) {
            setFeaturedNews(data.news[0]);
          }
        }
      } catch (error) {
        console.error('Erro ao carregar notícia em destaque:', error);
      }
    };

    fetchFeaturedNews();
  }, []);

  if (!featuredNews) {
    return null;
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image 
          src={featuredNews.image} 
          alt={featuredNews.title} 
          className="w-full h-full object-cover opacity-40"
          fill
          priority
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
              {featuredNews.title}
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {featuredNews.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href={`/news/${featuredNews.id}`}>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Ler Matéria Completa
                </Button>
              </Link>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{featuredNews.timeAgo}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
