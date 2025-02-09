# Agenda

Bem-vindo ao projeto **Agenda**! Esta aplicação permite registrar e listar contatos de pessoas, oferecendo funcionalidades de edição, exclusão e criação de novos contatos. A aplicação também inclui uma opção de login e criação de usuários, tudo desenvolvido seguindo o padrão MVC (Model-View-Controller).

https://github.com/user-attachments/assets/99ec569e-fa14-410d-9c94-e0b21e219fb1

## Funcionalidades

- Cadastro e autenticação de usuários
- Criação de novos contatos
- Edição de contatos existentes
- Exclusão de contatos
- Listagem de contatos

## Requisitos

- Node.js (versão 12 ou superior)
- MongoDB
- NPM ou Yarn

## Configuração do Ambiente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/agenda.git
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure o arquivo `.env`:**

   Crie um arquivo chamado `.env` na raiz do projeto e configure a string de conexão do MongoDB:

   ```plaintext
   MONGO_URI=mongodb://usuario:senha@localhost:27017/nome_do_banco
   SESSION_SECRET=seu_segredo_de_sessao
   ```

4. **Inicialize o banco de dados:**

   Certifique-se de que o MongoDB está rodando e o banco de dados está criado.

## Estrutura do Projeto

- **src/**
  - `controllers/` - Controladores da aplicação
  - `models/` - Modelos de dados (Schemas do Mongoose)
  - `views/` - Arquivos de visualização (EJS)
  - `routes/` - Definições de rotas
  - `config/` - Configurações da aplicação
  - `middlewares/` - Middlewares para autenticação

- **public/**
  - `js/` - Arquivos JavaScript

- **frontend/**
  - `css/` - Arquivos CSS

- **main.js** - Ponto de entrada da aplicação

## Como Executar

1. **Inicie o servidor:**

   ```bash
   npm start
   ```

2. **Acesse a aplicação pelo navegador:**  
   `http://localhost:3000`

## Contribuição

Se você deseja contribuir com este projeto, sinta-se à vontade para enviar um pull request ou abrir uma issue.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
