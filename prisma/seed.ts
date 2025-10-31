import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...');

  // Limpar dados existentes
  await prisma.comment.deleteMany();
  await prisma.news.deleteMany();

  // Criar todas as notícias
  const newsData = [
    {
      title: 'Brasil confirma amistoso contra Argentina em março',
      excerpt: 'A CBF anunciou oficialmente o clássico sul-americano que promete reunir as maiores estrelas do futebol mundial.',
      content: `A Confederação Brasileira de Futebol (CBF) confirmou oficialmente a realização do amistoso entre Brasil e Argentina, marcado para março de 2025. O clássico sul-americano será disputado no Estádio do Maracanã, no Rio de Janeiro, e promete ser um dos grandes eventos esportivos do ano.

O confronto marca a preparação das duas seleções para as Eliminatórias da Copa do Mundo. Segundo o presidente da CBF, o objetivo é testar diferentes formações táticas e dar rodagem aos jogadores que vêm se destacando em seus clubes.

A rivalidade histórica entre Brasil e Argentina sempre proporciona jogos emocionantes e de alto nível técnico. Com craques como Neymar, Vinicius Jr., Lionel Messi e outros astros em campo, a expectativa é de casa cheia no Maracanã.

Os ingressos serão colocados à venda nas próximas semanas, e a previsão é de que esgotem rapidamente. A partida terá transmissão ao vivo para todo o país e diversos países da América Latina.

Esta será a primeira vez em dois anos que as duas seleções se enfrentam em solo brasileiro. O último confronto entre as equipes terminou empatado em 1 a 1, em jogo válido pelas Eliminatórias disputado em Buenos Aires.`,
      category: 'Seleções',
      image: '/assets/news-celebration.jpg',
      timeAgo: 'há 2 horas',
      likes: 456,
    },
    {
      title: 'Real Madrid e Manchester City fazem duelo histórico nas quartas',
      excerpt: 'Sorteio define confrontos das quartas de final com clássicos europeus de grande porte.',
      content: `O sorteio da UEFA Champions League definiu os confrontos das quartas de final, e o duelo entre Real Madrid e Manchester City promete ser o grande destaque da fase. Os dois gigantes europeus se enfrentam em busca de uma vaga nas semifinais.

Esta será a terceira vez consecutiva que as equipes se enfrentam nesta fase da competição. Nas duas últimas temporadas, os jogos foram decididos nos detalhes, com vitórias alternadas para cada lado.

O técnico do Real Madrid destacou em entrevista coletiva que a equipe está preparada para o desafio e confia no elenco experiente para buscar a classificação. Já o comandante do City ressaltou a importância de manter a concentração durante os 180 minutos.

Os jogos estão marcados para as próximas semanas, com a ida acontecendo em Manchester e a volta no Santiago Bernabéu. A expectativa é de grande público e transmissão para mais de 200 países.`,
      category: 'Champions League',
      image: '/assets/news-champions.jpg',
      timeAgo: 'há 5 horas',
      likes: 187,
    },
    {
      title: 'Barcelona anuncia contratação de jovem promessa brasileira',
      excerpt: 'Clube catalão investiu 40 milhões de euros na joia de 19 anos que se destacou no campeonato brasileiro.',
      content: `O Barcelona oficializou nesta quinta-feira a contratação de uma das maiores promessas do futebol brasileiro. O jovem atacante de 19 anos assinou contrato de cinco temporadas com o clube catalão.

O investimento de 40 milhões de euros marca uma das maiores contratações brasileiras da história recente do clube. A diretoria do Barcelona demonstrou confiança no potencial do jogador e acredita que ele será peça fundamental para o futuro da equipe.

O atleta se destacou no campeonato brasileiro marcando 15 gols e dando 8 assistências na última temporada. Sua velocidade, dribles e finalização chamaram atenção de diversos clubes europeus, mas foi o Barcelona que fechou o acordo.

A apresentação oficial está marcada para a próxima semana no Camp Nou. O jogador deve ser relacionado imediatamente e pode fazer sua estreia já no próximo fim de semana pela La Liga.`,
      category: 'Mercado da Bola',
      image: '/assets/news-transfer.jpg',
      timeAgo: 'há 6 horas',
      likes: 312,
    },
    {
      title: 'Técnico do Palmeiras testa nova formação tática no treino',
      excerpt: 'Preparador aposta em esquema ofensivo para próximo confronto decisivo pela competição nacional.',
      content: `O técnico do Palmeiras surpreendeu ao testar uma nova formação tática durante o treino desta manhã na Academia de Futebol. A mudança visa preparar a equipe para o confronto decisivo do próximo final de semana.

A principal alteração foi a utilização de três atacantes desde o início, buscando maior poder ofensivo. O treinador também testou diferentes combinações no meio-campo para manter o equilíbrio defensivo.

Segundo fontes do clube, a decisão foi tomada após análise detalhada do adversário e identificação de pontos fracos que podem ser explorados. Os jogadores se mostraram receptivos às mudanças e treinaram com intensidade.

O Palmeiras busca manter a boa fase e continuar na briga pela parte de cima da tabela. Com essa possível mudança tática, a expectativa é de um jogo mais propositivo e com maior volume ofensivo.`,
      category: 'Brasileirão',
      image: '/assets/news-tactics.jpg',
      timeAgo: 'há 8 horas',
      likes: 143,
    },
    {
      title: 'Torcida do Corinthians quebra recorde de público na temporada',
      excerpt: 'Mais de 45 mil torcedores compareceram à Neo Química Arena no último domingo.',
      content: `A Neo Química Arena registrou o maior público da temporada no último domingo. Mais de 45 mil torcedores corinthianos compareceram ao estádio para apoiar o time em jogo decisivo do Campeonato Brasileiro.

A arquibancada lotada foi fundamental para impulsionar a equipe, que conseguiu buscar a virada no segundo tempo. O apoio da torcida foi destacado pelos jogadores como fator determinante para a vitória.

A diretoria do clube comemorou os números e anunciou que está trabalhando para manter essa média de público nos próximos jogos em casa. Promoções especiais e ações sociais fazem parte da estratégia.

Com esse resultado, o Corinthians se mantém firme na busca por seus objetivos na temporada. A próxima partida em casa já tem mais de 30 mil ingressos vendidos antecipadamente.`,
      category: 'Brasileirão',
      image: '/assets/news-brasileiro.jpg',
      timeAgo: 'há 10 horas',
      likes: 289,
    },
  ];

  // Adicionar mais notícias...
  for (const news of newsData) {
    await prisma.news.create({ data: news });
  }

  // Adicionar comentários na primeira notícia
  const firstNews = await prisma.news.findFirst();
  if (firstNews) {
    await prisma.comment.createMany({
      data: [
        {
          author: 'João Silva',
          text: 'Que jogo incrível! Time está muito bem.',
          timeAgo: 'há 2 horas',
          newsId: firstNews.id,
        },
        {
          author: 'Maria Santos',
          text: 'Finalmente uma boa notícia!',
          timeAgo: 'há 1 hora',
          newsId: firstNews.id,
        },
      ],
    });
  }

  console.log('✅ Seed concluído com sucesso!');
  console.log(`📰 ${await prisma.news.count()} notícias criadas`);
  console.log(`💬 ${await prisma.comment.count()} comentários criados`);
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
