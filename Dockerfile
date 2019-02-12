FROM node:8.12.0-alpine

# Uncomment line below for prod
# RUN mkdir -p /src/app

# Uncomment line below for prod
# WORKDIR /src/app

# Comment out line below for prod
WORKDIR /bindmount

# Uncomment line below for prod
# COPY . /src/app

RUN yarn install

EXPOSE 80

# for Dev
# CMD ["npm", "run", "start:dev"]

# Uncomment line below for prod
CMD ["npm", "run", "start:prod"]
