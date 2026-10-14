FROM node:16.20.2-buster

WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]