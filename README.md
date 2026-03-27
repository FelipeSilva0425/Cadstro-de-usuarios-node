🚀 Sistema de Cadastro de Usuários - API REST

📌 Sobre o Projeto

Este projeto é uma API RESTful de cadastro de usuários, desenvolvida com Node.js, com o objetivo de praticar e consolidar conceitos fundamentais de desenvolvimento backend.

A aplicação permite realizar operações completas de CRUD (Create, Read, Update, Delete), utilizando banco de dados MongoDB e testes de requisições com Thunder Client.

🧠 Objetivo

Construir uma aplicação do absoluto zero, simulando um ambiente real de backend, focando em:

Estrutura profissional de projeto
Manipulação de dados com banco NoSQL
Criação de rotas REST
Boas práticas de desenvolvimento
🏗️ Como o Projeto Foi Planejado

O sistema foi projetado seguindo uma arquitetura simples, porém escalável:

Separação de responsabilidades (rotas, controllers, models)
Uso de Express para gerenciamento de rotas
Integração com MongoDB via Mongoose
Simulação de requisições reais com Thunder Client

Além disso, o projeto já está preparado para evolução futura, onde será desenvolvido um frontend que consumirá essa API.

⚙️ Tecnologias Utilizadas
Node.js
Express.js
MongoDB
Mongoose
Thunder Client
JavaScript
🔗 Rotas da API
Método	Endpoint	Descrição
GET	/usuarios	Lista todos os usuários
POST	/usuarios	Cria um novo usuário
PUT	/usuarios/:id	Atualiza um usuário
DELETE	/usuarios/:id	Remove um usuário
🧪 Testes da API

As requisições foram testadas utilizando:

Thunder Client (extensão do VS Code)

Simulando chamadas reais de um frontend consumindo a API.

📁 Estrutura do Projeto
📦 user-register-api
 ┣ 📂 src
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 models
 ┃ ┣ 📂 routes
 ┃ ┗ 📜 server.js
 ┣ 📜 package.json
 ┗ 📜 README.md
🚀 Como Rodar o Projeto
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse a pasta
cd seu-repositorio

# Instale as dependências
npm install

# Rode o servidor
npm run dev
🌐 Deploy

🔗 Backend em produção:
👉 COLE AQUI O LINK DO SEU DEPLOY

📸 Demonstração
🖥️ API rodando

🧪 Testes no Thunder Client

📊 Banco de Dados (MongoDB)

🔮 Próximas Etapas
Desenvolvimento do Frontend
Integração com a API
Interface para cadastro de usuários
Sistema completo Full Stack
🏷️ Tags
nodejs
javascript
express
mongodb
mongoose
api-rest
crud
backend
fullstack
web-development
thunder-client
developer
💡 Aprendizados

Criar um projeto do zero, mesmo que simples, é um dos maiores desafios no início da jornada como desenvolvedor.

Esse projeto reforça:

Lógica de backend
Estrutura de APIs
Integração com banco de dados
Pensamento de sistema real
📌 Autor

Desenvolvido por Felipe Silva 🚀

⭐ Contribuição

Se quiser contribuir:

Faça um fork
Crie uma branch
Envie um pull request
📜 Licença

Este projeto está sob a licença MIT.
