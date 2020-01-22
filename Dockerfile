FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

copy . .

EXPOSE 4002

CMD ["node", "app.js"]
