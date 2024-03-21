FROM node:20.11.1

WORKDIR /usr/src/app

COPY package*.json ./

COPY . . 

RUN npm install


EXPOSE 3000
EXPOSE 9229

# RUN npm run build
# CMD ["npm", "run", "start"]

# CMD ["sh", "-c", "npm run build && node --inspect=0.0.0.0:9229 dist/index.js"]
CMD ["npm", "run", "dev"]
