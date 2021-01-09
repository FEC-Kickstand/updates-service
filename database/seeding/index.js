const { connection, promisifiedConnection } = require('../connection');
const { User, Project, Update } = require('../models');
const generateSeedData = require('./generateSeedData');

const data = generateSeedData(10);

promisifiedConnection
  .then(() => User.bulkInsert(data.users))
  .then(() => Project.bulkInsert(data.projects))
  .then(() => Update.bulkInsert(data.updates))
  .then(console.log)
  .catch(console.error)
  .finally(() => connection.end());
