# Usar uma imagem do Node.js como base para o build do React
FROM node:14 as build-stage

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar os arquivos de dependências
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Build da aplicação
RUN npm run build

# Usar uma imagem do Nginx para servir a aplicação
FROM nginx:alpine

# Copiar o build gerado para o diretório padrão do Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html  

# Expor a porta 80 para o Nginx
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
