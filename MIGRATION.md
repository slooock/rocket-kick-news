# Migração Vite → Next.js

## ✅ Mudanças Realizadas

### 1. Dependências
- ✅ Adicionado `next@latest`
- ✅ Adicionado `eslint-config-next`
- ✅ Removido `vite`, `@vitejs/plugin-react-swc`
- ✅ Removido `react-router-dom`
- ✅ Removido pacotes ESLint específicos do Vite
- ✅ Instalado `autoprefixer` e `postcss` (agora como CommonJS)

### 2. Estrutura de Arquivos
- ✅ Criado diretório `/app` (App Router do Next.js)
- ✅ Criado `app/layout.tsx` (Layout raiz)
- ✅ Criado `app/page.tsx` (Página inicial - convertida de `src/pages/Index.tsx`)
- ✅ Criado `app/not-found.tsx` (Página 404)
- ✅ Criado `app/providers.tsx` (Provider para React Query)
- ✅ Removido `src/pages/`, `src/App.tsx`, `src/main.tsx`
- ✅ Removido `index.html` (não necessário no Next.js)

### 3. Configuração
- ✅ Criado `next.config.mjs`
- ✅ Criado `.eslintrc.json` para Next.js
- ✅ Atualizado `tsconfig.json` para Next.js
- ✅ Convertido `postcss.config.js` para `postcss.config.cjs` (CommonJS)
- ✅ Atualizado `.gitignore` para Next.js
- ✅ Removido `vite.config.ts`, `tsconfig.app.json`, `tsconfig.node.json`

### 4. Scripts package.json
```json
{
  "dev": "next dev",        // Era: "vite"
  "build": "next build",    // Era: "vite build"
  "start": "next start",    // Novo
  "lint": "next lint"       // Era: "eslint ."
}
```

### 5. Componentes Atualizados

#### NewsCard.tsx
- ✅ Substituído `<img>` por `<Image>` do Next.js
- ✅ Atualizado tipo de prop `image` para aceitar `StaticImageData | string`

#### Hero.tsx  
- ✅ Substituído `<img>` por `<Image>` do Next.js
- ✅ Adicionado prop `fill` e `priority`

#### Outros
- ✅ Navbar, CategoryFilter - nenhuma mudança necessária
- ✅ Componentes UI (shadcn) - mantidos como estão

### 6. Metadata e SEO
- ✅ Migrado meta tags de `index.html` para `app/layout.tsx`
- ✅ Usando API `Metadata` do Next.js
- ✅ Configurado fonte Inter com `next/font/google`

## 🚀 Como Usar

```bash
# Desenvolvimento
npm run dev
# Acesse: http://localhost:3000

# Build de Produção
npm run build

# Start Production Server
npm start
```

## 📝 Notas Importantes

1. **PostCSS**: O arquivo foi renomeado para `.cjs` devido ao `"type": "module"` no package.json
2. **Images**: Todas as imagens agora usam o componente `<Image>` otimizado do Next.js
3. **Roteamento**: Migrado de React Router para App Router do Next.js
4. **Client Components**: Componentes que usam hooks React têm `"use client"` no topo
5. **Server Components**: Por padrão, componentes no `/app` são Server Components

## ⚠️ Problemas Conhecidos

- **Turbopack**: Às vezes pode ter problemas com cache. Solução: `rm -rf .next`
- **Autoprefixer**: Pode não aparecer em `npm list`. Solução: `npm install -D autoprefixer`

## 🔄 Próximos Passos Sugeridos

1. Adicionar mais páginas em `/app`
2. Implementar API Routes em `/app/api`
3. Configurar ISR ou SSG para páginas estáticas
4. Adicionar Middleware para autenticação
5. Otimizar imagens no diretório `/public`
