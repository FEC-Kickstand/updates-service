# Kickstand - Updates Service

# Description
> Kickstand is a crowd-funding web application.
> This Updates Microservice handles project "Update" posts - a way for project owners to update funders about the progress of the fund-raising effort.

## Related Projects

  - https://github.com/FEC-Kickstand/rewards-module-svc
  - https://github.com/FEC-Kickstand/funding-widget-svc
  - https://github.com/FEC-Kickstand/comments-module
  - https://github.com/FEC-Kickstand/rewards-module-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Dependendencies
*Requires node.js and mysql version 5.7*

## Run in development
  - Copy `env-config/EXAMPLE_ENV` and rename copy to `env-config/.dev.env`.
  - Note: if another name is chosen for this .env file, the dotenv config path in the npm script `start:dev` must be changed to match.
  - If necessary, change environment variables in this file to match your environment.
  - Other than `DB_PASSWORD`, the example environment variables are most likely fine.
  - Can set `RE_SEED=false` after first run of application to disable automatic database reseeding.
```
# install dependencies (run from root directory)
npm install
# run webpack in first terminal
npm run build:dev
# start the application server
npm run start:dev
# Open browser to localhost:3000
# OR localhost:3000/<projectId> where <projectId> is a valid project record in the seed database
```

## Run in docker
*Docker and docker-compose must be installed*
  - Copy `env-config/EXAMPLE_ENV` and rename copy to `env-config/.env`.
  - Note: if a name other than `env-config/.env` is chosen, `env-file` must be changed to match in both `docker-compose.yml` and `docker-rebuild.bash`
  - Set `DB_PASSWORD=''` to something other than an empty string
  - Set `IS_DOCKER_CONTAINER=true`
  - install npm dependencies:
```
npm install
```
  - Build and run the necessary containers by running the `docker-rebuild.bash` script in the root directory:
```
bash docker-rebuild.bash
```
  - Building the images, running the containers, and seeding the database will take a minute or two.
  - Once `SEEDING COMPLETE!` prints in the terminal, the application should be running and can be navigated to in the browser.
  - If changes are made to the application, the containers must be rebuilt with the same `docker-rebuild.bash` script (which will also remove the previously built containers).
  - To remove previously built containers without rebuilding, run `docker-compose --env-file ./env-config/.env down`.