# 📝 Todo App - React + Rails API

Este projeto é uma aplicação simples de lista de tarefas (_to-do list_) que utiliza **React** no front-end e **Ruby on Rails** como API no back-end. O objetivo é praticar a integração entre um frontend moderno com um backend robusto, utilizando uma estrutura em duas camadas.


## 🚀 Tecnologias

- ⚛️ **React** — biblioteca para a construção da interface
- 💎 **Ruby on Rails (API Mode)** — framework web back-end
- 🌐 **Axios** — consumo da API REST
- 🗃️ **SQLite3** — banco de dados local para desenvolvimento


## ⚙️ Funcionalidades

- Criar tarefas com título e descrição
- Marcar/desmarcar tarefas como concluídas
- Deletar tarefas
- Estilização com CSS Modules
- Integração entre React ↔ Rails (via CORS)

## 🛠️ Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/react-rails-todo.git
cd react-rails-todo
```

### 2. Suba o backend (Rails)

```bash
cd backend
bundle install
rails db:create db:migrate db:seed
rails s
```
A API estará disponível em: http://localhost:3000

### 3. Inicie o frontend (React)
 
```bash
cd ../frontend
npm install
npm start
```
O app será servido em: http://localhost:3001

## 📮 Rotas da API
GET    /api/todos              → Lista todas as tarefas  

POST   /api/todos              → Cria uma nova tarefa  

GET    /api/todos/:id          → Retorna uma tarefa específica 

PATCH  /api/todos/:id          → Atualiza uma tarefa existente 

DELETE /api/todos/:id          → Remove uma tarefa  

PATCH  /api/todos/:id/update_completed → Atualiza apenas o status `completed` da tarefa  

## 📌 Observações

- A aplicação foi desenvolvida em ambiente **WSL** para garantir o funcionamento do Ruby on Rails no Windows.
- O backend foi criado no modo **API-only**, ideal para integração com front-ends como React, Vue ou apps mobile.
- O front-end consome a API local em `http://localhost:3000`, com permissões CORS configuradas para `http://localhost:3001`.
- O projeto é modular, com separação clara entre front-end e back-end, facilitando manutenções futuras.
