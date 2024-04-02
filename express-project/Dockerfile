FROM node:21.7.1

WORKDIR /usr/src/app

COPY package*.json ./
COPY . . 

RUN npm install

EXPOSE 3000
EXPOSE 9229

#DEV
# CMD ["npm", "run", "dev"]

#START
CMD ["npm", "run", "start"]
