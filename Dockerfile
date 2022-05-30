# pull official base image
FROM 869525123420.dkr.ecr.us-east-1.amazonaws.com/node:16-alpine as node

# set working directory
WORKDIR /app


ADD ./package.json ./


COPY . .
RUN apk add --no-cache git curl
RUN yarn
RUN yarn build

RUN ls -lah

CMD ["yarn", "cosmos"]
#RUN ls build


#FROM nginx:1.13.12-alpine

#COPY --from=node /app/build /usr/share/nginx/html
#RUN apk update

#RUN ls /usr/share/nginx/html

#RUN apk add ca-certificates wget && wget https://gist.githubusercontent.com/ratulbasak/5530bcfb208d6027a6dea0ab5504898c/raw/e6e9c1944dc5e83001eff04545f88980aa9abeb4/nginx.conf -O /etc/nginx/conf.d/default.conf && rm -rf /var/cache/apk/*

