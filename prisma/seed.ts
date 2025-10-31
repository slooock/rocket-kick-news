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
    {
      title: 'Flamengo vence o Vasco em clássico carioca',
      excerpt: 'Com gol de Pedro, o Flamengo supera o Vasco no Maracanã e assume a liderança do campeonato.',
      content: 'Em um jogo disputado no Maracanã, o Flamengo venceu o Vasco por 1 a 0, com gol do atacante Pedro. A partida foi válida pela 10ª rodada do Campeonato Brasileiro. Com a vitória, o rubro-negro assume a liderança da competição, enquanto o Vasco permanece na zona de rebaixamento. O jogo foi marcado por muita disputa no meio-campo e poucas chances claras de gol. O gol da vitória saiu aos 35 minutos do segundo tempo, após bela jogada individual de Arrascaeta, que cruzou para Pedro completar de cabeça.',
      category: 'Brasileirão',
      image: '/assets/news-celebration.jpg',
      timeAgo: 'há 1 hora',
      likes: 520,
    },
    {
      title: 'São Paulo anuncia a contratação do técnico estrangeiro',
      excerpt: 'O São Paulo acertou a contratação do técnico argentino para a sequência da temporada.',
      content: 'O São Paulo Futebol Clube anunciou oficialmente a contratação do técnico argentino Hernán Crespo para comandar a equipe. O treinador, que estava no Defensa y Justicia, da Argentina, assinou contrato até o final de 2026. Crespo chega ao Morumbi com a missão de levar o time de volta aos títulos. A diretoria do clube aposta na filosofia de jogo ofensiva do treinador para resgatar o bom futebol da equipe. A apresentação oficial será na próxima segunda-feira.',
      category: 'Mercado da Bola',
      image: '/assets/news-tactics.jpg',
      timeAgo: 'há 3 horas',
      likes: 415,
    },
    {
      title: 'Clube brasileiro anuncia novo patrocinador master',
      excerpt: 'Acordo milionário promete fortalecer as finanças do clube para a temporada.',
      content: 'O clube anunciou um contrato de patrocínio de cinco anos com a empresa de tecnologia InovaTech. Os valores não foram divulgados, mas especula-se que seja um dos maiores da história do clube. O dinheiro será usado para quitar dívidas e investir em novas contratações.',
      category: 'Brasileirão',
      image: '/assets/news-celebration.jpg',
      timeAgo: 'há 1 hora',
      likes: 678,
    },
    {
      title: 'Estádio famoso passará por grande reforma',
      excerpt: 'Modernização visa melhorar a experiência do torcedor e a infraestrutura.',
      content: 'O estádio, um dos mais tradicionais do país, será fechado por um ano para uma reforma completa. O projeto inclui a instalação de uma cobertura retrátil, a troca de todos os assentos e a modernização dos vestiários e áreas de imprensa. O objetivo é transformar o estádio em uma arena multiuso.',
      category: 'Brasileirão',
      image: '/assets/hero-stadium.jpg',
      timeAgo: 'há 2 horas',
      likes: 890,
    },
    {
      title: 'Jogador estrela sofre lesão e desfalca time',
      excerpt: 'Departamento médico confirma a gravidade da lesão e o tempo de recuperação.',
      content: 'O principal jogador do time sofreu uma lesão no joelho durante o último treino e ficará afastado dos gramados por pelo menos seis meses. A ausência do craque é um grande golpe para as ambições do clube na temporada. O técnico terá que encontrar uma solução caseira para substituir o jogador.',
      category: 'Champions League',
      image: '/assets/news-champions.jpg',
      timeAgo: 'há 3 horas',
      likes: 1200,
    },
    {
      title: 'Técnico é demitido após sequência de maus resultados',
      excerpt: 'A diretoria decidiu pela mudança no comando técnico em busca de novos ares.',
      content: 'Após a derrota no clássico, a diretoria se reuniu e decidiu pela demissão do técnico. O time vinha de uma sequência de cinco jogos sem vitória, o que tornou a situação insustentável. Um novo nome deve ser anunciado nos próximos dias.',
      category: 'Brasileirão',
      image: '/assets/news-tactics.jpg',
      timeAgo: 'há 4 horas',
      likes: 340,
    },
    {
      title: 'Jovem promessa assina primeiro contrato profissional',
      excerpt: 'O futuro do clube parece promissor com a ascensão de novos talentos.',
      content: 'A jovem promessa de apenas 17 anos, destaque nas categorias de base, assinou seu primeiro contrato profissional. O vínculo é válido por três anos e tem uma multa rescisória de 50 milhões de euros. A torcida está animada com o futuro do jogador.',
      category: 'Mercado da Bola',
      image: '/assets/news-transfer.jpg',
      timeAgo: 'há 5 horas',
      likes: 950,
    },
    {
      title: 'Time do interior surpreende e avança na Copa do Brasil',
      excerpt: 'A zebra passeou e o time de menor investimento fez história na competição.',
      content: 'O time do interior, com uma folha salarial modesta, eliminou um dos gigantes do futebol brasileiro na Copa do Brasil. A vitória heroica, conquistada nos pênaltis, foi comemorada como um título pela pequena cidade. O time agora se prepara para o próximo desafio na competição.',
      category: 'Brasileirão',
      image: '/assets/news-brasileiro.jpg',
      timeAgo: 'há 6 horas',
      likes: 480,
    },
    {
      title: 'VAR gera polêmica em jogo decisivo do campeonato',
      excerpt: 'A tecnologia mais uma vez foi o centro das atenções e das reclamações.',
      content: 'A atuação do árbitro de vídeo (VAR) foi o principal assunto após o jogo. Um gol anulado nos acréscimos gerou muita reclamação por parte dos jogadores e da comissão técnica do time perdedor. A jogada será analisada pela comissão de arbitragem.',
      category: 'Champions League',
      image: '/assets/news-champions.jpg',
      timeAgo: 'há 7 horas',
      likes: 720,
    },
    {
      title: 'Atacante marca golaço de bicicleta e vira destaque',
      excerpt: 'A pintura rendeu ao jogador comparações com grandes craques do passado.',
      content: 'O atacante marcou um gol antológico de bicicleta, que selou a vitória de sua equipe. O lance espetacular rapidamente viralizou nas redes sociais e o jogador foi ovacionado pela torcida. O gol já é cotado para concorrer ao prêmio Puskás.',
      category: 'Brasileirão',
      image: '/assets/news-celebration.jpg',
      timeAgo: 'há 8 horas',
      likes: 1500,
    },
    {
      title: 'Goleiro defende pênalti no último minuto e garante vitória',
      excerpt: 'O herói improvável garantiu os três pontos com uma defesa espetacular.',
      content: 'O goleiro se tornou o grande herói da partida ao defender um pênalti no último minuto. A defesa garantiu a vitória magra por 1 a 0 e a manutenção do time na liderança do campeonato. O jogador foi carregado pelos companheiros após o apito final.',
      category: 'Brasileirão',
      image: '/assets/news-brasileiro.jpg',
      timeAgo: 'há 9 horas',
      likes: 1100,
    },
    {
      title: 'Clássico regional termina em empate sem gols',
      excerpt: 'Um jogo de muita marcação e pouca inspiração ofensiva.',
      content: 'O clássico de grande rivalidade terminou em um empate sem gols que não foi bom para nenhuma das equipes. O jogo foi muito truncado, com muitas faltas e poucas chances de gol. As duas equipes seguem pressionadas por melhores resultados.',
      category: 'Brasileirão',
      image: '/assets/hero-stadium.jpg',
      timeAgo: 'há 10 horas',
      likes: 250,
    },
    {
      title: 'CBF divulga calendário de competições para o próximo ano',
      excerpt: 'A organização do futebol brasileiro busca otimizar as datas e evitar conflitos.',
      content: 'A Confederação Brasileira de Futebol (CBF) divulgou o calendário completo para a próxima temporada. O documento busca harmonizar as competições nacionais e internacionais, reduzindo o número de jogos em datas FIFA. Os clubes agora podem planejar melhor o seu ano.',
      category: 'Seleções',
      image: '/assets/news-tactics.jpg',
      timeAgo: 'há 11 horas',
      likes: 400,
    },
    {
      title: 'Novo aplicativo de streaming transmitirá jogos ao vivo',
      excerpt: 'A novidade promete revolucionar a forma como os torcedores assistem aos jogos.',
      content: 'Uma nova plataforma de streaming, chamada PlayFutebol, anunciou que transmitirá com exclusividade os jogos de vários campeonatos estaduais. O serviço, que funcionará por assinatura, promete uma experiência interativa para o usuário, com câmeras exclusivas e estatísticas em tempo real.',
      category: 'Mercado da Bola',
      image: '/assets/news-transfer.jpg',
      timeAgo: 'há 12 horas',
      likes: 880,
    },
    {
      title: 'Ex-jogador assume cargo de diretor de futebol em grande clube',
      excerpt: 'A experiência do ex-atleta será fundamental na nova função.',
      content: 'Um dos maiores ídolos da história do clube está de volta, agora em uma nova função. O ex-jogador foi anunciado como o novo diretor de futebol e será responsável por toda a gestão do departamento. Sua experiência em campo é vista como um grande trunfo.',
      category: 'Mercado da Bola',
      image: '/assets/news-transfer.jpg',
      timeAgo: 'há 13 horas',
      likes: 620,
    },
    {
      title: 'Torcida organizada protesta em frente ao centro de treinamento',
      excerpt: 'Os torcedores cobraram mais empenho e melhores resultados da equipe.',
      content: 'Um grupo de torcedores organizados realizou um protesto pacífico em frente ao centro de treinamento do clube. Eles estenderam faixas e cantaram músicas de protesto, cobrando mais raça dos jogadores e criticando as decisões da diretoria. Ninguém da diretoria apareceu para conversar.',
      category: 'Brasileirão',
      image: '/assets/hero-stadium.jpg',
      timeAgo: 'há 14 horas',
      likes: 150,
    },
    {
      title: 'Time feminino conquista título inédito',
      excerpt: 'Uma campanha histórica coroada com a taça de campeão.',
      content: 'A equipe feminina de futebol do clube fez história ao conquistar o campeonato nacional pela primeira vez. A final, disputada em estádio lotado, foi emocionante e decidida nos minutos finais. O título coroa um trabalho de investimento e planejamento na modalidade.',
      category: 'Brasileirão',
      image: '/assets/news-celebration.jpg',
      timeAgo: 'há 15 horas',
      likes: 990,
    },
    {
      title: 'Ídolo do passado visita o clube e recebe homenagem',
      excerpt: 'A visita do craque emocionou torcedores e jogadores do elenco atual.',
      content: 'O clube prestou uma bela homenagem a um ídolo do passado que visitou o centro de treinamento. O ex-craque, que marcou época com a camisa do time, conversou com os jogadores do elenco atual, relembrou histórias e recebeu uma placa comemorativa. A torcida se emocionou com o reencontro.',
      category: 'Seleções',
      image: '/assets/news-celebration.jpg',
      timeAgo: 'há 16 horas',
      likes: 1300,
    },
    {
      title: 'Federação anuncia mudanças nas regras do campeonato',
      excerpt: 'As alterações visam tornar o jogo mais dinâmico e justo.',
      content: 'A federação que organiza o principal campeonato estadual anunciou um pacote de mudanças nas regras para a próxima edição. Entre as novidades estão o aumento do número de substituições e a implementação de um novo critério de desempate. As mudanças dividiram opiniões entre os clubes.',
      category: 'Brasileirão',
      image: '/assets/news-tactics.jpg',
      timeAgo: 'há 17 horas',
      likes: 320,
    },
    {
      title: 'Escândalo de arbitragem abala o futebol nacional',
      excerpt: 'Denúncias graves colocam em xeque a credibilidade das competições.',
      content: 'Gravações de áudio divulgadas pela imprensa revelaram um suposto esquema de manipulação de resultados envolvendo árbitros e dirigentes. O caso está sendo investigado pela polícia e pelo Superior Tribunal de Justiça Desportiva (STJD). O escândalo mancha a imagem do futebol brasileiro.',
      category: 'Brasileirão',
      image: '/assets/hero-stadium.jpg',
      timeAgo: 'há 18 horas',
      likes: 180,
    },
    {
      title: 'Clube lança novo uniforme inspirado em título histórico',
      excerpt: 'O novo manto resgata a memória de uma conquista inesquecível.',
      content: 'O departamento de marketing do clube lançou o novo uniforme para a temporada. O design é inspirado em um título histórico conquistado há 20 anos e foi muito elogiado pela torcida. A camisa já é um sucesso de vendas e a expectativa é que traga sorte para a equipe em campo.',
      category: 'Mercado da Bola',
      image: '/assets/news-transfer.jpg',
      timeAgo: 'há 19 horas',
      likes: 850,
    },
    {
      title: 'Eleições presidenciais agitam os bastidores do clube',
      excerpt: 'A disputa política interna definirá o futuro do clube para os próximos anos.',
      content: 'A eleição para presidente do clube, que acontecerá no final do ano, já movimenta os bastidores. Duas chapas de oposição se uniram para tentar derrotar o atual presidente, que buscará a reeleição. A campanha promete ser acirrada e cheia de reviravoltas.',
      category: 'Brasileirão',
      image: '/assets/news-tactics.jpg',
      timeAgo: 'há 20 horas',
      likes: 210,
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
