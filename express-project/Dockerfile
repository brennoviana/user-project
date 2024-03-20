FROM node:20.11.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "--inspect=0.0.0.0", "src/index.js"]