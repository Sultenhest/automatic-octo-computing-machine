FROM node:16.20.2-bullseye-slim

WORKDIR /src

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]