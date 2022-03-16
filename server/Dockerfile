FROM node:14.14.0-alpine

WORKDIR /app

COPY ./package.json ./

RUN npm install --save npm-git-install
RUN npm install

COPY . .

CMD ["npm", "run", "dev"]