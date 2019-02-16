FROM node:10.15.1-slim

RUN mkdir /usr/src/itsme

WORKDIR /usr/src/itsme

COPY ./package.json ./

COPY ./yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "start"]
