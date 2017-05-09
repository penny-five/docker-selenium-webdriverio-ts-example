FROM node:7.10.0-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --pure-lockfile

COPY index.html .

EXPOSE 8080

CMD ["yarn", "start"]
