ARG NODE_VERSION=13.6
ARG APP_DIR=/opt/pepe-frontend

# Creates the builder image and fetch dependencies
FROM node:$NODE_VERSION as builder

ARG APP_DIR
WORKDIR $APP_DIR

COPY package.json ./
COPY yarn.lock ./

RUN ["yarn", "install"]

COPY . .

# Lints the code
FROM node:$NODE_VERSION as linting

ARG APP_DIR
WORKDIR $APP_DIR

COPY --from=builder $APP_DIR/ .

RUN ["yarn", "lint"]

# Unit tests
FROM node:$NODE_VERSION as unit-testing

ARG APP_DIR
WORKDIR $APP_DIR

COPY --from=builder $APP_DIR/ .

RUN ["yarn", "test", "--watchAll", "false"]

# Build the app
FROM node:$NODE_VERSION-alpine as release

ARG APP_DIR
WORKDIR $APP_DIR

COPY --from=builder $APP_DIR/ .

RUN ["yarn", "build"]

# Serve files with nginx
FROM nginx:latest as serve

ARG APP_DIR
WORKDIR $APP_DIR

COPY --from=release $APP_DIR/build/ /usr/share/nginx/html/
