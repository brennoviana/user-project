FROM node:21.7.1

WORKDIR /usr/src/app

COPY package*.json ./


COPY . . 

RUN npm install

EXPOSE 3001

CMD ["npm", "run", "dev"]
