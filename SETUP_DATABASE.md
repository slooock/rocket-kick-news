# 🗄️ Configuração do Banco de Dados MySQL

## 📋 Pré-requisitos

Certifique-se de ter o MySQL instalado e rodando.

## Passo 1️⃣: Instalar MySQL

### macOS (usando Homebrew):
```bash
brew install mysql
brew services start mysql
```

### Ou use Docker (recomendado):
```bash
docker run --name mysql-rocket-kick -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -d mysql:8
```

## Passo 2️⃣: Criar o Banco de Dados

Entre no MySQL:
```bash
mysql -u root -p
```

Execute os comandos SQL:
```sql
CREATE DATABASE rocket_kick_news CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
EXIT;
```

## Passo 3️⃣: Configurar a conexão

Edite o arquivo `.env` na raiz do projeto e ajuste as credenciais:

```env
DATABASE_URL="mysql://root:password@localhost:3306/rocket_kick_news"
```

**Substitua:**
- `root` pelo seu usuário MySQL
- `password` pela sua senha do MySQL

## Passo 4️⃣: Rodar as migrations

```bash
npm run prisma:migrate
```

Quando perguntado pelo nome da migration, digite: `init`

Isso irá:
- ✅ Criar as tabelas `News` e `Comment` no banco de dados
- ✅ Gerar o Prisma Client

## Passo 5️⃣: Popular o banco com dados de exemplo

```bash
npm run prisma:seed
```

Isso irá criar:
- 📰 3 notícias de exemplo
- 💬 2 comentários na primeira notícia

## Passo 6️⃣: Visualizar o banco de dados (Opcional)

Para abrir o Prisma Studio (interface visual):
```bash
npm run prisma:studio
```

Acesse: http://localhost:5555

## 🛠️ Scripts Disponíveis

```bash
# Gerar Prisma Client
npm run prisma:generate

# Criar/aplicar migrations
npm run prisma:migrate

# Popular banco de dados
npm run prisma:seed

# Abrir Prisma Studio
npm run prisma:studio
```

## 📊 Estrutura do Banco de Dados

### Tabela: News
- `id` - ID único da notícia
- `title` - Título
- `excerpt` - Resumo
- `content` - Conteúdo completo
- `category` - Categoria (Brasileirão, Champions League, etc.)
- `image` - Caminho da imagem
- `timeAgo` - Tempo relativo
- `featured` - Destaque na home
- `likes` - Número de curtidas
- `createdAt` - Data de criação
- `updatedAt` - Data de atualização

### Tabela: Comment
- `id` - ID único do comentário
- `author` - Nome do autor
- `text` - Texto do comentário
- `timeAgo` - Tempo relativo
- `newsId` - ID da notícia (relacionamento)
- `createdAt` - Data de criação

## 🔧 Troubleshooting

### ❌ Erro de conexão:
```bash
# Verifique se o MySQL está rodando
brew services list

# Ou no Docker
docker ps

# Teste a conexão
npx prisma db pull
```

### ❌ Erro de autenticação:
```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;
```

### ❌ Porta 3306 ocupada:
```bash
# Parar MySQL do Homebrew
brew services stop mysql

# Ou parar container Docker
docker stop mysql-rocket-kick
```

## 🚀 Próximos Passos

Após configurar o banco de dados:

1. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

2. As notícias agora virão do banco de dados MySQL!

3. Para conectar as páginas ao banco, consulte os arquivos em:
   - `src/lib/prisma.ts` - Cliente Prisma
   - API Routes (a criar) em `app/api/`
