# FutScore - Notícias de Futebol

Um portal de notícias de futebol moderno construído com Next.js.

## 🚀 Tecnologias

Este projeto foi transformado de Vite + React para Next.js e utiliza:

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **React 18** - Biblioteca UI
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **Radix UI** - Componentes acessíveis
- **TanStack Query** - Gerenciamento de estado
- **next-themes** - Suporte a temas

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Lint
npm run lint
```

## 🔧 Estrutura do Projeto

```
rocket-kick-news/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página inicial
│   ├── not-found.tsx      # Página 404
│   └── providers.tsx      # Providers React Query
├── src/
│   ├── components/        # Componentes React
│   ├── assets/           # Imagens e recursos
│   ├── hooks/            # Custom Hooks
│   ├── lib/              # Utilitários
│   └── index.css         # Estilos globais
├── public/               # Arquivos estáticos
└── next.config.mjs       # Configuração Next.js
```

## 🌐 Deploy

Este projeto pode ser facilmente deployado em:

- **Vercel** (Recomendado) - [Deploy automático](https://vercel.com)
- **Netlify**
- **AWS Amplify**
- Qualquer plataforma que suporte Next.js

## 📝 Notas de Migração

Este projeto foi migrado de Vite para Next.js. As principais mudanças incluem:

- Migração de React Router para Next.js App Router
- Substituição de tags `<img>` por `<Image>` do Next.js
- Configuração de PostCSS para Turbopack
- Remoção de dependências do Vite
- Adição de Server Components e Client Components
