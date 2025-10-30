"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";

import newsCelebration from "@/assets/news-celebration.jpg";
import newsTactics from "@/assets/news-tactics.jpg";
import newsTransfer from "@/assets/news-transfer.jpg";
import newsChampions from "@/assets/news-champions.jpg";
import newsBrasileiro from "@/assets/news-brasileiro.jpg";

const newsData = [
  {
    id: 1,
    image: newsCelebration,
    category: "Seleções",
    title: "Brasil confirma amistoso contra Argentina em março",
    excerpt: "A CBF anunciou oficialmente o clássico sul-americano que promete reunir as maiores estrelas do futebol mundial.",
    timeAgo: "há 2 horas",
    content: `A Confederação Brasileira de Futebol (CBF) confirmou oficialmente a realização do amistoso entre Brasil e Argentina, marcado para março de 2025. O clássico sul-americano será disputado no Estádio do Maracanã, no Rio de Janeiro, e promete ser um dos grandes eventos esportivos do ano.

O confronto marca a preparação das duas seleções para as Eliminatórias da Copa do Mundo. Segundo o presidente da CBF, o objetivo é testar diferentes formações táticas e dar rodagem aos jogadores que vêm se destacando em seus clubes.

A rivalidade histórica entre Brasil e Argentina sempre proporciona jogos emocionantes e de alto nível técnico. Com craques como Neymar, Vinicius Jr., Lionel Messi e outros astros em campo, a expectativa é de casa cheia no Maracanã.

Os ingressos serão colocados à venda nas próximas semanas, e a previsão é de que esgotem rapidamente. A partida terá transmissão ao vivo para todo o país e diversos países da América Latina.

Esta será a primeira vez em dois anos que as duas seleções se enfrentam em solo brasileiro. O último confronto entre as equipes terminou empatado em 1 a 1, em jogo válido pelas Eliminatórias disputado em Buenos Aires.`,
    featured: true,
  },
  {
    id: 2,
    image: newsCelebration,
    category: "Brasileirão",
    title: "Flamengo vence clássico e assume liderança do campeonato",
    excerpt: "Em partida emocionante no Maracanã, o Rubro-Negro conquistou os três pontos e disparou na ponta da tabela.",
    timeAgo: "há 3 horas",
    content: `O Flamengo conquistou uma vitória importante no clássico carioca realizado no Maracanã na noite desta quarta-feira. Com um gol nos minutos finais, o Rubro-Negro garantiu os três pontos e assumiu a liderança isolada do Campeonato Brasileiro.

A partida foi marcada por grande intensidade desde o início. O time da casa dominou as ações durante todo o primeiro tempo, criando diversas oportunidades de gol. A torcida presente no estádio não parou de apoiar em nenhum momento.

O técnico optou por uma formação mais ofensiva, apostando na velocidade pelos lados do campo. A estratégia funcionou perfeitamente, especialmente no segundo tempo, quando o time conseguiu furar o bloqueio defensivo adversário.

Com essa vitória, o Flamengo chega aos 45 pontos e abre três de vantagem para o segundo colocado. A equipe volta a campo no próximo domingo em busca de manter a excelente sequência de resultados positivos.`,
    featured: false,
  },
  {
    id: 3,
    image: newsChampions,
    category: "Champions League",
    title: "Real Madrid e Manchester City fazem duelo histórico nas quartas",
    excerpt: "Sorteio define confrontos das quartas de final com clássicos europeus de grande porte.",
    timeAgo: "há 5 horas",
    content: `O sorteio da UEFA Champions League definiu os confrontos das quartas de final, e o duelo entre Real Madrid e Manchester City promete ser o grande destaque da fase. Os dois gigantes europeus se enfrentam em busca de uma vaga nas semifinais.

Esta será a terceira vez consecutiva que as equipes se enfrentam nesta fase da competição. Nas duas últimas temporadas, os jogos foram decididos nos detalhes, com vitórias alternadas para cada lado.

O técnico do Real Madrid destacou em entrevista coletiva que a equipe está preparada para o desafio e confia no elenco experiente para buscar a classificação. Já o comandante do City ressaltou a importância de manter a concentração durante os 180 minutos.

Os jogos estão marcados para as próximas semanas, com a ida acontecendo em Manchester e a volta no Santiago Bernabéu. A expectativa é de grande público e transmissão para mais de 200 países.`,
  },
  {
    id: 4,
    image: newsTransfer,
    category: "Mercado da Bola",
    title: "Barcelona anuncia contratação de jovem promessa brasileira",
    excerpt: "Clube catalão investiu 40 milhões de euros na joia de 19 anos que se destacou no campeonato brasileiro.",
    timeAgo: "há 6 horas",
    content: `O Barcelona oficializou nesta quinta-feira a contratação de uma das maiores promessas do futebol brasileiro. O jovem atacante de 19 anos assinou contrato de cinco temporadas com o clube catalão.

O investimento de 40 milhões de euros marca uma das maiores contratações brasileiras da história recente do clube. A diretoria do Barcelona demonstrou confiança no potencial do jogador e acredita que ele será peça fundamental para o futuro da equipe.

O atleta se destacou no campeonato brasileiro marcando 15 gols e dando 8 assistências na última temporada. Sua velocidade, dribles e finalização chamaram atenção de diversos clubes europeus, mas foi o Barcelona que fechou o acordo.

A apresentação oficial está marcada para a próxima semana no Camp Nou. O jogador deve ser relacionado imediatamente e pode fazer sua estreia já no próximo fim de semana pela La Liga.`,
  },
  {
    id: 5,
    image: newsTactics,
    category: "Brasileirão",
    title: "Técnico do Palmeiras testa nova formação tática no treino",
    excerpt: "Preparador aposta em esquema ofensivo para próximo confronto decisivo pela competição nacional.",
    timeAgo: "há 8 horas",
    content: `O técnico do Palmeiras surpreendeu ao testar uma nova formação tática durante o treino desta manhã na Academia de Futebol. A mudança visa preparar a equipe para o confronto decisivo do próximo final de semana.

A principal alteração foi a utilização de três atacantes desde o início, buscando maior poder ofensivo. O treinador também testou diferentes combinações no meio-campo para manter o equilíbrio defensivo.

Segundo fontes do clube, a decisão foi tomada após análise detalhada do adversário e identificação de pontos fracos que podem ser explorados. Os jogadores se mostraram receptivos às mudanças e treinaram com intensidade.

O Palmeiras busca manter a boa fase e continuar na briga pela parte de cima da tabela. Com essa possível mudança tática, a expectativa é de um jogo mais propositivo e com maior volume ofensivo.`,
  },
  {
    id: 6,
    image: newsBrasileiro,
    category: "Brasileirão",
    title: "Torcida do Corinthians quebra recorde de público na temporada",
    excerpt: "Mais de 45 mil torcedores compareceram à Neo Química Arena no último domingo.",
    timeAgo: "há 10 horas",
    content: `A Neo Química Arena registrou o maior público da temporada no último domingo. Mais de 45 mil torcedores corinthianos compareceram ao estádio para apoiar o time em jogo decisivo do Campeonato Brasileiro.

A arquibancada lotada foi fundamental para impulsionar a equipe, que conseguiu buscar a virada no segundo tempo. O apoio da torcida foi destacado pelos jogadores como fator determinante para a vitória.

A diretoria do clube comemorou os números e anunciou que está trabalhando para manter essa média de público nos próximos jogos em casa. Promoções especiais e ações sociais fazem parte da estratégia.

Com esse resultado, o Corinthians se mantém firme na busca por seus objetivos na temporada. A próxima partida em casa já tem mais de 30 mil ingressos vendidos antecipadamente.`,
  },
  {
    id: 7,
    image: newsChampions,
    category: "Champions League",
    title: "Bayern de Munique goleia e se classifica para as semifinais",
    excerpt: "Time alemão fez 4 a 0 e avançou de forma convincente na competição europeia.",
    timeAgo: "há 12 horas",
    content: `O Bayern de Munique não tomou conhecimento do adversário e garantiu vaga nas semifinais da Champions League com uma goleada histórica. O time alemão mostrou toda sua força e qualidade técnica.

Com uma atuação impecável, o Bayern dominou o jogo do início ao fim. Os gols vieram de forma natural, com jogadas trabalhadas e finalizações precisas que não deram chances ao goleiro adversário.

O técnico elogiou a postura da equipe e destacou a importância de manter o foco nos próximos desafios. A classificação reforça o favoritismo do Bayern na busca pelo título continental.`,
  },
  {
    id: 8,
    image: newsTactics,
    category: "Seleções",
    title: "Seleção Brasileira convoca novos jogadores para eliminatórias",
    excerpt: "Técnico anuncia lista com surpresas e promete renovação no elenco para próximos jogos.",
    timeAgo: "há 14 horas",
    content: `A Seleção Brasileira divulgou a lista de convocados para os próximos jogos das eliminatórias da Copa do Mundo. A convocação trouxe algumas surpresas e aposta na renovação do elenco.

Entre os destaques estão jovens talentos que vêm se destacando no futebol brasileiro e europeu. O técnico explicou que a ideia é dar oportunidade para novos jogadores provarem seu valor.

A comissão técnica acredita que essa renovação será fundamental para o futuro da seleção. Os jogos acontecem nas próximas semanas em confrontos decisivos pelas eliminatórias.`,
  },
  {
    id: 9,
    image: newsTransfer,
    category: "Mercado da Bola",
    title: "Chelsea prepara proposta milionária por atacante brasileiro",
    excerpt: "Clube inglês está disposto a investir pesado para contratar o artilheiro da temporada.",
    timeAgo: "há 16 horas",
    content: `O Chelsea está preparando uma proposta milionária para contratar um dos principais atacantes do futebol brasileiro. O clube inglês monitora o jogador há meses e decidiu fazer uma oferta irrecusável.

O atleta é o artilheiro da temporada e chamou atenção de diversos clubes europeus. Sua velocidade, finalização e capacidade de decidir jogos são qualidades que impressionaram os olheiros do Chelsea.

As negociações devem avançar nas próximas semanas. O clube brasileiro está disposto a negociar mediante o pagamento da multa rescisória estipulada em contrato.`,
  },
  {
    id: 10,
    image: newsCelebration,
    category: "Brasileirão",
    title: "São Paulo vence fora de casa e entra no G4",
    excerpt: "Tricolor paulista conquistou vitória importante e agora está na zona de classificação para Libertadores.",
    timeAgo: "há 18 horas",
    content: `O São Paulo conquistou uma vitória fundamental jogando fora de casa e entrou na zona de classificação para a Libertadores. O time mostrou maturidade e competência para buscar os três pontos.

Com essa vitória, o Tricolor paulista chegou aos 35 pontos e subiu para a quarta posição. A equipe vem em crescimento e mostra sinais de que pode brigar por posições ainda melhores na tabela.

O técnico elogiou o desempenho dos jogadores e destacou a importância de manter a sequência positiva. Os próximos jogos serão decisivos para consolidar a posição no G4.`,
  },
  {
    id: 11,
    image: newsChampions,
    category: "Champions League",
    title: "PSG e Milan empatam em jogo eletrizante",
    excerpt: "Partida terminou 3 a 3 com gols nos minutos finais e muita emoção em Paris.",
    timeAgo: "há 20 horas",
    content: `PSG e Milan protagonizaram um dos jogos mais emocionantes da rodada da Champions League. A partida terminou empatada em 3 a 3, com direito a viradas, gols nos minutos finais e muito drama.

O jogo foi marcado pela alternância no placar. Quando parecia que uma equipe levaria a vitória, a outra buscava o empate com determinação e qualidade técnica.

Ambos os técnicos elogiaram o espetáculo proporcionado e destacaram a entrega dos jogadores. O resultado mantém as duas equipes vivas na briga pela classificação.`,
  },
  {
    id: 12,
    image: newsBrasileiro,
    category: "Brasileirão",
    title: "Grêmio anuncia retorno de ídolo ao clube",
    excerpt: "Veterano volta para casa e promete ajudar o time na luta contra o rebaixamento.",
    timeAgo: "há 22 horas",
    content: `O Grêmio anunciou o retorno de um de seus maiores ídolos. O jogador, que estava atuando no exterior, aceitou o desafio de ajudar o clube em momento delicado na tabela.

A contratação foi recebida com entusiasmo pela torcida. O atleta tem grande identificação com o clube e promete dar o máximo para ajudar o time a sair da zona de rebaixamento.

A apresentação oficial acontece nos próximos dias. O jogador já está treinando com o elenco e pode estrear no próximo fim de semana.`,
  },
  {
    id: 13,
    image: newsTransfer,
    category: "Mercado da Bola",
    title: "Juventus acerta contratação de meio-campista argentino",
    excerpt: "Clube italiano confirma acordo por cinco temporadas com jogador revelação da última temporada.",
    timeAgo: "há 1 dia",
    content: `A Juventus confirmou a contratação de um dos principais meio-campistas do futebol sul-americano. O argentino assinou contrato de cinco temporadas e chega para reforçar o meio de campo da equipe italiana.

O jogador se destacou na última temporada com passes decisivos, visão de jogo e gols importantes. A Juventus acompanhava o atleta há meses e finalmente conseguiu fechar o acordo.

O meio-campista será apresentado oficialmente na próxima semana e já está ansioso para começar sua trajetória no futebol italiano.`,
  },
  {
    id: 14,
    image: newsTactics,
    category: "Seleções",
    title: "Argentina lidera ranking FIFA após conquista da Copa América",
    excerpt: "Seleção albiceleste mantém primeira posição no ranking mundial de seleções.",
    timeAgo: "há 1 dia",
    content: `A Argentina manteve a primeira posição no ranking da FIFA após conquistar a Copa América. A seleção albiceleste consolidou sua posição como a melhor do mundo.

O título continental foi fundamental para manter a liderança. A equipe comandada pelo técnico mostra consistência e qualidade em todas as competições que disputa.

O Brasil aparece na terceira posição, logo atrás da França. A próxima atualização do ranking acontece após os jogos das eliminatórias.`,
  },
  {
    id: 15,
    image: newsChampions,
    category: "Champions League",
    title: "Liverpool vence Napoli e garante vaga antecipada nas oitavas",
    excerpt: "Time inglês dominou o confronto e já está matematicamente classificado para próxima fase.",
    timeAgo: "há 1 dia",
    content: `O Liverpool garantiu vaga antecipada nas oitavas de final da Champions League após vencer o Napoli em casa. O time inglês dominou o confronto do início ao fim.

Com essa vitória, o Liverpool chegou aos 15 pontos e não pode mais ser alcançado pelos times que estão fora da zona de classificação. A equipe mostrou força e maturidade.

O técnico elogiou o desempenho e destacou a importância de garantir a classificação antecipada. Agora o foco se volta para o campeonato nacional.`,
  },
  {
    id: 16,
    image: newsCelebration,
    category: "Brasileirão",
    title: "Athletico-PR faz goleada histórica no Brasileirão",
    excerpt: "Furacão aplicou 5 a 0 e alcançou a maior vitória da temporada na competição nacional.",
    timeAgo: "há 1 dia",
    content: `O Athletico-PR protagonizou uma das maiores goleadas da temporada do Brasileirão. O Furacão venceu por 5 a 0 e mostrou todo seu poderio ofensivo.

A equipe dominou o jogo desde o primeiro minuto. Os gols saíram com facilidade e o time adversário não conseguiu reagir à pressão imposta pelo Athletico.

Com essa vitória expressiva, o Furacão sobe na tabela e se aproxima do G6. O técnico comemorou o resultado e pediu foco para manter a sequência positiva.`,
  },
];

export default function NewsDetailPage() {
  const params = useParams();
  const newsId = parseInt(params.id as string);
  const news = newsData.find((n) => n.id === newsId);

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 500) + 100);
  const [comments, setComments] = useState<Array<{ id: number; author: string; text: string; timeAgo: string }>>([
    { id: 1, author: "João Silva", text: "Que jogo incrível! Time está muito bem.", timeAgo: "há 2 horas" },
    { id: 2, author: "Maria Santos", text: "Finalmente uma boa notícia!", timeAgo: "há 1 hora" },
  ]);
  const [newComment, setNewComment] = useState("");

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Notícia não encontrada</h1>
          <Link href="/">
            <Button>Voltar para home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          author: "Você",
          text: newComment,
          timeAgo: "agora",
        },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Badge className="mb-4">{news.category}</Badge>
            <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{news.timeAgo}</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
            <Image
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
              width={1200}
              height={675}
            />
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            {news.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-foreground/90 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex items-center gap-4 py-6 border-y border-border mb-8">
            <Button
              variant={liked ? "default" : "outline"}
              onClick={handleLike}
              className="gap-2"
            >
              <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
              {likes}
            </Button>
            <Button variant="outline" className="gap-2">
              <MessageCircle className="h-5 w-5" />
              {comments.length}
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 className="h-5 w-5" />
              Compartilhar
            </Button>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Comentários ({comments.length})</h2>

            <div className="mb-6">
              <Textarea
                placeholder="Adicione um comentário..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mb-3"
              />
              <Button onClick={handleAddComment}>Publicar comentário</Button>
            </div>

            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="card-gradient rounded-lg p-4 border border-border">
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-semibold">{comment.author}</span>
                    <span className="text-sm text-muted-foreground">{comment.timeAgo}</span>
                  </div>
                  <p className="text-foreground/90">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
