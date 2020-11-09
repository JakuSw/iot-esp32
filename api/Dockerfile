FROM node:13.12.0-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY . .

RUN npm install 

CMD ["node", "main.js"]