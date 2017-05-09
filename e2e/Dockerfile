FROM node:7.10.0-alpine

RUN apk update && apk add python make g++

RUN yarn global add node-gyp

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --pure-lockfile

COPY tsconfig.json .
COPY wdio.conf.js .
COPY test ./test
COPY screenshots ./screenshots

CMD ["yarn", "test"]
