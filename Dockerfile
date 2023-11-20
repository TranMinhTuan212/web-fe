FROM --platform=linux/amd64 node:16-alpine AS BUILD_IMAGE

RUN mkdir -p /home/node/app/

RUN apk add --update vim python3 make g++ && rm -rf /var/cache/apk/* 


WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:16-alpine

WORKDIR /home/node/app

COPY --from=BUILD_IMAGE /home/node/app .

RUN npm install

EXPOSE 3000

CMD [ "npm" , "start" ]


