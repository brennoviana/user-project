FROM node:20.11.1

WORKDIR /usr/src/app

COPY package*.json ./
COPY . . 

RUN npm install

EXPOSE 3000
EXPOSE 9229

#START
# CMD ["sh", "-c", "npm run build && node dist/index.js"]

#DEV
CMD ["npm", "run", "dev"]
