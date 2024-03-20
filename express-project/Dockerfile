FROM node:20.11.1

# Cria um diretório para armazenar o código da aplicação
WORKDIR /usr/src/app

# Copia o arquivo package.json e instala as dependências
COPY package*.json ./
RUN npm install

# Copia os arquivos do projeto para o diretório de trabalho
COPY . .

# Expõe a porta em que o aplicativo será executado
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["node", "--inspect=0.0.0.0", "src/index.js"]