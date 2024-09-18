# Usar a imagem oficial do Node.js como base
FROM node:14

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar os arquivos de dependências
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Instalar o Knex globalmente para rodar migrations
RUN npm install -g knex

# Expor a porta que a aplicação usa
EXPOSE ${PORT}

# Comando para rodar migrations e iniciar o servidor
CMD ["sh", "-c", "npx knex migrate:latest && npm start"]
