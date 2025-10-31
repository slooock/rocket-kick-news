"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsCard from "@/components/NewsCard";
import CategoryFilter from "@/components/CategoryFilter";

interface News {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  timeAgo: string;
  likes: number;
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);
  const [newsData, setNewsData] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news?limit=100');
        if (response.ok) {
          const data = await response.json();
          setNewsData(data.news || []);
        }
      } catch (error) {
        console.error('Erro ao carregar notícias:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const filteredNews = selectedCategory === "all" 
    ? newsData 
    : newsData.filter(news => news.category === selectedCategory);
  
  const displayedNews = filteredNews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredNews.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <main className="container mx-auto px-4 py-12">
          <p className="text-center">Carregando notícias...</p>
        </main>
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Últimas Notícias</h2>
              <p className="text-muted-foreground">
                Fique por dentro de tudo que acontece no mundo do futebol
              </p>
            </div>
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedNews.map((news, index) => {
              console.log('Index:', index, 'News:', news);
              if (index === 0) return null;
              const isBigCard = index === 1;
              return <NewsCard key={news.id} {...news} bigCard={isBigCard} />;
            })}
          </div>
        </section>

        {/* Load More */}
        {hasMore && (
          <div className="text-center mt-12">
            <button 
              onClick={loadMore}
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Carregar mais notícias
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-sm font-bold">⚽</span>
              </div>
              <span className="font-bold gradient-text">FutScore</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 FutScore. Todas as notícias de futebol em um só lugar.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
