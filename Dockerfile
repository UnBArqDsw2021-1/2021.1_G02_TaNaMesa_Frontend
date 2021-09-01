FROM node:alpine

ARG YARN_PARAMS

ENV YARN_COMMAND=$YARN_PARAMS

WORKDIR /app

COPY frontend/package.json /app

RUN apk update \
    && apk add --no-cache git \
    && yarn install

COPY frontend/ /app

EXPOSE 3000

CMD yarn $YARN_COMMAND
