import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...');

  // Limpar dados existentes
  await prisma.comment.deleteMany();
  await prisma.news.deleteMany();

  // Criar notícias
  const news1 = await prisma.news.create({
    data: {
      title: 'Flamengo vence clássico e assume liderança do campeonato',
      excerpt: 'Em partida emocionante no Maracanã, o Rubro-Negro conquistou os três pontos e disparou na ponta da tabela.',
      content: `O Flamengo conquistou uma vitória importante no clássico carioca realizado no Maracanã na noite desta quarta-feira. Com um gol nos minutos finais, o Rubro-Negro garantiu os três pontos e assumiu a liderança isolada do Campeonato Brasileiro.

A partida foi marcada por grande intensidade desde o início. O time da casa dominou as ações durante todo o primeiro tempo, criando diversas oportunidades de gol. A torcida presente no estádio não parou de apoiar em nenhum momento.

O técnico optou por uma formação mais ofensiva, apostando na velocidade pelos lados do campo. A estratégia funcionou perfeitamente, especialmente no segundo tempo, quando o time conseguiu furar o bloqueio defensivo adversário.

Com essa vitória, o Flamengo chega aos 45 pontos e abre três de vantagem para o segundo colocado. A equipe volta a campo no próximo domingo em busca de manter a excelente sequência de resultados positivos.`,
      category: 'Brasileirão',
      image: '/assets/news-celebration.jpg',
      timeAgo: 'há 3 horas',
      featured: true,
      likes: 234,
      comments: {
        create: [
          {
            author: 'João Silva',
            text: 'Que jogo incrível! Time está muito bem.',
            timeAgo: 'há 2 horas',
          },
          {
            author: 'Maria Santos',
            text: 'Finalmente uma boa notícia!',
            timeAgo: 'há 1 hora',
          },
        ],
      },
    },
  });

  const news2 = await prisma.news.create({
    data: {
      title: 'Real Madrid e Manchester City fazem duelo histórico nas quartas',
      excerpt: 'Sorteio define confrontos das quartas de final com clássicos europeus de grande porte.',
      content: `O sorteio da UEFA Champions League definiu os confrontos das quartas de final, e o duelo entre Real Madrid e Manchester City promete ser o grande destaque da fase. Os dois gigantes europeus se enfrentam em busca de uma vaga nas semifinais.

Esta será a terceira vez consecutiva que as equipes se enfrentam nesta fase da competição. Nas duas últimas temporadas, os jogos foram decididos nos detalhes, com vitórias alternadas para cada lado.

O técnico do Real Madrid destacou em entrevista coletiva que a equipe está preparada para o desafio e confia no elenco experiente para buscar a classificação. Já o comandante do City ressaltou a importância de manter a concentração durante os 180 minutos.

Os jogos estão marcados para as próximas semanas, com a ida acontecendo em Manchester e a volta no Santiago Bernabéu. A expectativa é de grande público e transmissão para mais de 200 países.`,
      category: 'Champions League',
      image: '/assets/news-champions.jpg',
      timeAgo: 'há 5 horas',
      featured: false,
      likes: 187,
    },
  });

  const news3 = await prisma.news.create({
    data: {
      title: 'Barcelona anuncia contratação de jovem promessa brasileira',
      excerpt: 'Clube catalão investiu 40 milhões de euros na joia de 19 anos que se destacou no campeonato brasileiro.',
      content: `O Barcelona oficializou nesta quinta-feira a contratação de uma das maiores promessas do futebol brasileiro. O jovem atacante de 19 anos assinou contrato de cinco temporadas com o clube catalão.

O investimento de 40 milhões de euros marca uma das maiores contratações brasileiras da história recente do clube. A diretoria do Barcelona demonstrou confiança no potencial do jogador e acredita que ele será peça fundamental para o futuro da equipe.

O atleta se destacou no campeonato brasileiro marcando 15 gols e dando 8 assistências na última temporada. Sua velocidade, dribles e finalização chamaram atenção de diversos clubes europeus, mas foi o Barcelona que fechou o acordo.

A apresentação oficial está marcada para a próxima semana no Camp Nou. O jogador deve ser relacionado imediatamente e pode fazer sua estreia já no próximo fim de semana pela La Liga.`,
      category: 'Mercado da Bola',
      image: '/assets/news-transfer.jpg',
      timeAgo: 'há 6 horas',
      featured: false,
      likes: 312,
    },
  });

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
