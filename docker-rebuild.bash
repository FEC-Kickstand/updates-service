#!/bin/bash
npm run build:prod
docker-compose --env-file ./env-config/.env down
echo "Ignore above error if no previous versions of these containers existed."
docker build -t kickstand-server .
docker-compose --env-file ./env-config/.env up