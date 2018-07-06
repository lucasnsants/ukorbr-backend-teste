FROM node:latest

COPY . /starter
COPY package.json /starter/package.json

WORKDIR /starter

RUN yarn install

CMD ["yarn", "run", "dev"]

EXPOSE 8888
