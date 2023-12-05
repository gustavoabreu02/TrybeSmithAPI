# Projeto TrybeSmith

Este projeto tem como objetivo criar uma API de uma loja de itens medievais utilizando Typescript.

## Tecnologias Utilizadas

- typescript
- node.js
- dotenv
- express
- express-async-errors
- joi
- join
- jsonwebtoken
- mysql2

## Funcionalidades

Através da API desenvolvida será possível realizar as seguintes operações básicas em um banco de dados:

- Criação de novos itens medievais
- Leitura de itens medievais existentes
- Atualização de itens medievais
- Exclusão de itens medievais

## Camadas da Aplicação

Para alcançar as funcionalidades descritas acima, foram desenvolvidas as seguintes camadas da aplicação:

- Models: responsável por definir as entidades do banco de dados
- Service: responsável por manipular as entidades do banco de dados
- Controllers: responsável por receber as requisições e fornecer as respostas através dos endpoints

## Endpoints

Foram criados alguns endpoints para manipulação dos dados do banco de dados, tais como:

- /products: endpoint responsável por manipular os dados dos produtos da loja.
- /login: endpoint responsável pela autenticação de usuários.
- /users: endpoint responsável por manipular os dados dos usuários da loja.
- /orders: endpoint responsável por manipular os dados dos pedidos realizados pelos usuários.

## Executando o projeto

Para executar o projeto, basta seguir os seguintes passos:

1. Clonar este repositório
2. Instalar as dependências com o comando `npm install`
3. Criar um arquivo `.env` com as variáveis de ambiente necessárias para conexão com o banco de dados
4. Executar o comando `npm run dev` para iniciar o servidor

## Conclusão

Este projeto apresenta uma solução de uma API de uma loja de itens medievais utilizando Typescript e outras tecnologias populares. Sinta-se livre para clonar e utilizar este projeto como base para seus próprios projetos!

## Autores

- [@gustavoabreu02](https://www.github.com/gustavoabreu02)
