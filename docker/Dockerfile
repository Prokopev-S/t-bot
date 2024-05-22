FROM node:22.2-alpine3.19 AS builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY main.js main.js
COPY rocket.jpg rocket.jpg
COPY .env .env

CMD ["npm", "start"] 
