# AgendaPresidência

Este projeto é uma aplicação web full-stack que permite aos usuários gerenciar agendas, incluindo a criação, atualização, 
exclusão e listagem de agendas. O backend é desenvolvido utilizando Node.js, Express e SQLite, enquanto o frontend utiliza React e Vite. 
A aplicação é containerizada usando Docker para facilitar a implantação e execução.

## Tecnologias Utilizadas

- **Front-end**: React + Vite
- **Back-end**: Node.js
- **Integração de API**: Axios
- **Estilização**: Styled-componets.css
- **Gerenciamento de Pacotes**: NPM
- **Ícones**: React-icons
- **Framework UI**: React Bootstrap
- **Build**: Docker

## Funcionalidades

- Criação de usuário
- Autenticação com JWT
- CRUD de agendas
- Integração com uma API para obter dados da agenda.
- Persistência do contador em armazenamento local.
- Atualização automática do estado da agenda.

## Requisitos
   Para rodar este projeto em sua máquina local, você precisará de:
   - Docker e Docker Compose
   - Node.js (se preferir rodar fora do Docker)

## Instruções para Execução Local

Para executar a aplicação em sua máquina local, siga os seguintes passos:

1. Clone o repositório e acesse a pasta do projeto:
    ```bash
    git clone https://github.com/LucasFMarques2/agendaPresidencia
    cd agendaPresidencia
2. Configuração do Backend
  1.Navegue até a pasta agenda-api
     ```bash
     cd agenda-api
  2.Altere o nome do arquivo ".exemple.env" para ".env"
  3.Crie uma chave HASH, pode ser pelo site [MD5 Hash](https://www.md5hashgenerator.com/)
  4.adicione o seguinte conteúdo no arquivo ".env"
  
       PORT=5150
       AUTH_SECRET=chave_hash_gerada

3. Executando a Aplicação com Docker
  1.Navegue para o diretório raiz do projeto:
     ```bash
       cd ../
  2.Construa e execute os containers Docker:
     
     docker-compose up --build
  3.Abra o navegador e acesse:
   - Frontend: http://localhost:3000
   - Backend: A API do backend estará disponível em http://localhost:5150


Este README inclui uma descrição do projeto, as ferramentas utilizadas, as instruções de instalação e configuração, como rodar o projeto e as versões das depedencias com o `package.json`.

Esse projeto foi desenvolvido por Lucas Freitas Marques. 
