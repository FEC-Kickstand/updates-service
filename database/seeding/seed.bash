#!/bin/bash
mysql -u root < "database/schema.sql"
node "database/seeding/index.js"