# FROM node:latest
FROM node:10-alpine3.10

# Prod
RUN mkdir -p /src/app

# Prod
WORKDIR /src/app

# Dev
# WORKDIR /bindmount

# Prod
COPY . /src/app

RUN npm install --production

EXPOSE 3000

# Dev
CMD ["npm", "run", "start:container"]

# Prod
# CMD ["npm", "run", "start:prod"]
