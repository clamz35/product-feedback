FROM node:16-alpine as dev

ENV HOST='0.0.0.0'
ENV PORT='3000'

WORKDIR /webapp

COPY ./ /webapp

RUN yarn

EXPOSE 3000

# CMD [ "yarn", "generate" ]

# FROM node:lts-alpine as build-stage
# WORKDIR /app
# COPY package*.json ./
# RUN yarn
# COPY . .
# RUN yarn generate

# # production stage
# FROM nginx:stable-alpine as production-stage
# COPY --from=build-stage /app/src/.output/public /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# FROM node:16-alpine as dev

# WORKDIR /webapp

# ENV HOST='0.0.0.0'
# ENV PORT='3000'

# COPY ./ /webapp

# RUN yarn

# EXPOSE 3000



FROM node:lts-alpine as production

WORKDIR /webapp

ENV HOST='0.0.0.0'
ENV PORT='3000'

COPY ./ /webapp

RUN yarn

RUN yarn build

EXPOSE 3000