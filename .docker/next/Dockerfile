FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

RUN chown -R node /app/node_modules
USER node

CMD ["npm", "run", "dev"]