"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsCard from "@/components/NewsCard";
import CategoryFilter from "@/components/CategoryFilter";

// Import images
import newsCelebration from "@/assets/news-celebration.jpg";
import newsTactics from "@/assets/news-tactics.jpg";
import newsTransfer from "@/assets/news-transfer.jpg";
import newsChampions from "@/assets/news-champions.jpg";
import newsBrasileiro from "@/assets/news-brasileiro.jpg";

const newsData = [
  {
    id: 1,
    image: newsCelebration,
    category: "Brasileirão",
    title: "Flamengo vence clássico e assume liderança do campeonato",
    excerpt: "Em partida emocionante no Maracanã, o Rubro-Negro conquistou os três pontos e disparou na ponta da tabela.",
    timeAgo: "há 3 horas",
    featured: true,
  },
  {
    id: 2,
    image: newsChampions,
    category: "Champions League",
    title: "Real Madrid e Manchester City fazem duelo histórico nas quartas",
    excerpt: "Sorteio define confrontos das quartas de final com clássicos europeus de grande porte.",
    timeAgo: "há 5 horas",
  },
  {
    id: 3,
    image: newsTransfer,
    category: "Mercado da Bola",
    title: "Barcelona anuncia contratação de jovem promessa brasileira",
    excerpt: "Clube catalão investiu 40 milhões de euros na joia de 19 anos que se destacou no campeonato brasileiro.",
    timeAgo: "há 6 horas",
  },
  {
    id: 4,
    image: newsTactics,
    category: "Brasileirão",
    title: "Técnico do Palmeiras testa nova formação tática no treino",
    excerpt: "Preparador aposta em esquema ofensivo para próximo confronto decisivo pela competição nacional.",
    timeAgo: "há 8 horas",
  },
  {
    id: 5,
    image: newsBrasileiro,
    category: "Brasileirão",
    title: "Torcida do Corinthians quebra recorde de público na temporada",
    excerpt: "Mais de 45 mil torcedores compareceram à Neo Química Arena no último domingo.",
    timeAgo: "há 10 horas",
  },
  {
    id: 6,
    image: newsChampions,
    category: "Champions League",
    title: "Bayern de Munique goleia e se classifica para as semifinais",
    excerpt: "Time alemão fez 4 a 0 e avançou de forma convincente na competição europeia.",
    timeAgo: "há 12 horas",
  },
  {
    id: 7,
    image: newsTactics,
    category: "Seleções",
    title: "Seleção Brasileira convoca novos jogadores para eliminatórias",
    excerpt: "Técnico anuncia lista com surpresas e promete renovação no elenco para próximos jogos.",
    timeAgo: "há 14 horas",
  },
  {
    id: 8,
    image: newsTransfer,
    category: "Mercado da Bola",
    title: "Chelsea prepara proposta milionária por atacante brasileiro",
    excerpt: "Clube inglês está disposto a investir pesado para contratar o artilheiro da temporada.",
    timeAgo: "há 16 horas",
  },
  {
    id: 9,
    image: newsCelebration,
    category: "Brasileirão",
    title: "São Paulo vence fora de casa e entra no G4",
    excerpt: "Tricolor paulista conquistou vitória importante e agora está na zona de classificação para Libertadores.",
    timeAgo: "há 18 horas",
  },
  {
    id: 10,
    image: newsChampions,
    category: "Champions League",
    title: "PSG e Milan empatam em jogo eletrizante",
    excerpt: "Partida terminou 3 a 3 com gols nos minutos finais e muita emoção em Paris.",
    timeAgo: "há 20 horas",
  },
  {
    id: 11,
    image: newsBrasileiro,
    category: "Brasileirão",
    title: "Grêmio anuncia retorno de ídolo ao clube",
    excerpt: "Veterano volta para casa e promete ajudar o time na luta contra o rebaixamento.",
    timeAgo: "há 22 horas",
  },
  {
    id: 12,
    image: newsTransfer,
    category: "Mercado da Bola",
    title: "Juventus acerta contratação de meio-campista argentino",
    excerpt: "Clube italiano confirma acordo por cinco temporadas com jogador revelação da última temporada.",
    timeAgo: "há 1 dia",
  },
  {
    id: 13,
    image: newsTactics,
    category: "Seleções",
    title: "Argentina lidera ranking FIFA após conquista da Copa América",
    excerpt: "Seleção albiceleste mantém primeira posição no ranking mundial de seleções.",
    timeAgo: "há 1 dia",
  },
  {
    id: 14,
    image: newsChampions,
    category: "Champions League",
    title: "Liverpool vence Napoli e garante vaga antecipada nas oitavas",
    excerpt: "Time inglês dominou o confronto e já está matematicamente classificado para próxima fase.",
    timeAgo: "há 1 dia",
  },
  {
    id: 15,
    image: newsCelebration,
    category: "Brasileirão",
    title: "Athletico-PR faz goleada histórica no Brasileirão",
    excerpt: "Furacão aplicou 5 a 0 e alcançou a maior vitória da temporada na competição nacional.",
    timeAgo: "há 1 dia",
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredNews = selectedCategory === "all" 
    ? newsData 
    : newsData.filter(news => news.category === selectedCategory);
  
  const displayedNews = filteredNews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredNews.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 8);
  };
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
            {displayedNews.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
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
