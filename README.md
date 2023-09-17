# Projeto Blog API

Este é um projeto para o desenvolvimento de uma API e banco de dados destinados à criação de conteúdo para um blog. A API é construída em Node.js e faz uso do pacote Sequelize para operações CRUD (Create, Read, Update, Delete) em postagens, categorias e usuários.

## Requisitos

Aqui estão os principais requisitos do projeto:

### 1. Migrations

- Crie migrações para as tabelas `users`, `categories`, `blog_posts` e `posts_categories`, seguindo as diretrizes de nomenclatura e estrutura definidas no diagrama de Entidade-Relacionamento.

### 2. Modelo User

- Crie o modelo `User` no arquivo `src/models/User.js` com as propriedades corretas, seguindo as diretrizes do diagrama de Entidade-Relacionamento.

### 3. Endpoint POST /login

- Implemente o endpoint `POST /login` para autenticação de usuários.

### 4. Endpoint POST /user

- Implemente o endpoint `POST /user` para adicionar um novo usuário ao banco de dados.

### 5. Endpoint GET /user

- Implemente o endpoint `GET /user` para listar todos os usuários do banco de dados.

### 6. Endpoint GET /user/:id

- Implemente o endpoint `GET /user/:id` para buscar um usuário pelo ID.

### 7. Modelo Category

- Crie o modelo `Category` no arquivo `src/models/Category.js` com as propriedades corretas, seguindo as diretrizes do diagrama de Entidade-Relacionamento.

### 8. Endpoint POST /categories

- Implemente o endpoint `POST /categories` para adicionar uma nova categoria ao banco de dados.

### 9. Endpoint GET /categories

- Implemente o endpoint `GET /categories` para listar todas as categorias do banco de dados.

### 10. Modelo BlogPost

- Crie o modelo `BlogPost` no arquivo `src/models/BlogPost.js` com as propriedades e associações corretas, seguindo as diretrizes do diagrama de Entidade-Relacionamento. O modelo deve ter uma associação N:1 com o modelo `User`.

### 11. Modelo PostCategory

- Crie o modelo `PostCategory` no arquivo `src/models/PostCategory.js` com as propriedades e associações corretas, seguindo as diretrizes do diagrama de Entidade-Relacionamento. O modelo deve ter uma associação N:N entre os modelos `BlogPost` e `Category`.

### 12. Endpoint POST /post

- Implemente o endpoint `POST /post` para adicionar um novo blog post e vinculá-lo a categorias.

### 13. Endpoint GET /post

- Implemente o endpoint `GET /post` para listar todos os blog posts, incluindo informações sobre o autor e as categorias.

### 14. Endpoint GET /post/:id

- Implemente o endpoint `GET /post/:id` para buscar um blog post pelo ID.

### 15. Endpoint PUT /post/:id

- Implemente o endpoint `PUT /post/:id` para permitir a alteração de um post, desde que o usuário seja o autor do post.

Lembre-se de validar o token nas requisições que exigem autenticação.

## Configuração

Para executar o projeto, siga estas etapas:

1. Clone este repositório no seu ambiente de desenvolvimento.
2. Execute `npm install` para instalar as dependências.
3. Configure as variáveis de ambiente, como o banco de dados, no arquivo `.env`.
4. Execute `npm run migrate` para criar as tabelas no banco de dados.
5. Execute `npm start` para iniciar o servidor.

Agora, você pode acessar a API em `http://localhost:3000`.

## Conclusão

Este projeto visa criar uma API robusta para gerenciar conteúdo de um blog, incluindo usuários, categorias e posts. Certifique-se de seguir os requisitos e diretrizes especificados para obter um sistema funcional e seguro.
