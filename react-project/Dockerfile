# Escolha a imagem base do Node.js
FROM node:20.11.1
# Defina o diretório de trabalho no container
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json (se disponível)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta em que o servidor Vite será executado
EXPOSE 3001

# Inicie o servidor de desenvolvimento Vite
CMD ["npm", "run", "dev"]
