FROM node:alpine

ARG YARN_PARAMS

ENV YARN_COMMAND=$YARN_PARAMS

COPY ./frontend .

WORKDIR .

RUN apk update \
    && apk add --no-cache git \
    && yarn install

EXPOSE 3000

CMD cd frontend && yarn $YARN_COMMAND
