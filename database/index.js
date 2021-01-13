const mysql = require('mysql');
const { connect, config } = require('./connector');
const Model = require('./models');
const seedDatabase = require('./seeding');

const { env } = process;
const connection = mysql.createConnection(config);

if (env.IS_DOCKER_CONTAINER === 'true' || env.RE_SEED === 'true') {
  seedDatabase()
    .then(() => connect(connection))
    .catch(console.error);
} else {
  connect(connection)
    .catch(console.error);
}

module.exports = Model.init(connection);
