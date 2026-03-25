# Prova - Tecnologia e Construção de Software 2

Este projeto é uma API REST desenvolvida como parte da avaliação para a disciplina de **Tecnologia e Construção de Software 2**. A aplicação implementa um sistema de CRUD (Create, Read, Update, Delete) para gestão de usuários, perfis e endereços, utilizando o framework **NestJS** e o ORM **Prisma**.

## 🚀 Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/)**: Framework Node.js progressivo para construção de aplicativos do lado do servidor eficientes e escaláveis.
- **[Prisma](https://www.prisma.io/)**: ORM de última geração para Node.js e TypeScript.
- **[PostgreSQL](https://www.postgresql.org/)**: Sistema de gerenciamento de banco de dados relacional.
- **[Swagger](https://swagger.io/)**: Ferramenta para documentação de APIs (disponível na rota `/api`).
- **[Docker](https://www.docker.com/)**: Plataforma para desenvolver, enviar e executar aplicações em containers.
- **Class Validator/Transformer**: Para validação e transformação de dados de entrada.

## 📊 Estrutura de Dados (Prisma Schema)

O banco de dados está estruturado com os seguintes modelos e relacionamentos:

- **Profile**: Representa o perfil do usuário. Possui uma relação de 1 para N com `User`.
- **User**: Representa o usuário do sistema. Possui uma relação N para 1 com `Profile` e uma relação de 1 para 1 com `Address`.
- **Address**: Representa o endereço de um usuário. Possui uma relação de 1 para 1 com `User` (com deleção em cascata).

## 🛠️ Configuração do Ambiente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Docker](https://www.docker.com/) e Docker Compose
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Configure as variáveis de ambiente:**
    Crie ou edite o arquivo `.env` na raiz do projeto com as credenciais do banco de dados (baseie-se no `.env.example` se disponível ou no `docker-compose.yml`).

3.  **Suba o banco de dados (Docker):**
    ```bash
    docker-compose up -d
    ```

4.  **Execute as migrações do Prisma:**
    ```bash
    npx prisma migrate dev
    ```

5.  **Gere o Prisma Client:**
    ```bash
    npx prisma generate
    ```

## 🏃 Executando a Aplicação

```bash
# Modo de desenvolvimento (com hot-reload)
npm run start:dev

# Modo de produção
npm run build
npm run start:prod
```

A aplicação estará disponível em `http://localhost:3000`.

## 📖 Documentação da API

A documentação interativa da API (Swagger UI) pode ser acessada em:
`http://localhost:3000/api`

Lá você encontrará todos os endpoints disponíveis para:
- `GET /profiles`, `POST /profiles`, etc.
- `GET /users`, `POST /users`, etc.
- `GET /addresses`, `POST /addresses`, etc.

## ✅ Funcionalidades Implementadas

- **Validação Global**: Utilização de `ValidationPipe` para garantir a integridade dos dados enviados.
- **Transformação de Dados**: Conversão automática de tipos nos DTOs.
- **Gestão de Relacionamentos**: CRUD completo lidando com chaves estrangeiras e relações complexas entre as tabelas.
- **Deleção em Cascata**: Configurado para remover endereços vinculados quando um usuário é deletado.
