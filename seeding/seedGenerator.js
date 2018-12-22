const mysql = require('mysql');
const loginInfo = require('./db.env.config');
const generateAllSeedData = require('./seedingUtils');
const initializeSequelize = require('./db');

const data = generateAllSeedData(100);

function seedDatabase() {
  const { User, Project, Update, sequelizeConnection, sequelize } = initializeSequelize();

  sequelizeConnection
    .then(() => User.sync())
    .then(() => Project.sync())
    .then(() => Update.sync())
    .then(() => User.bulkCreate(data.users))
    .then(() => Project.bulkCreate(data.projects))
    .then(() => Update.bulkCreate(data.updates))
    .then(() => {
      console.log('Database has been seeded');
      sequelize.close();
    })
    .catch(err => console.error(err));
}

const connection = mysql.createConnection(loginInfo);
connection.connect();
connection.query('DROP DATABASE if exists kickstarter;', dropErr => {
  if (dropErr) {
    return console.error(dropErr);
  }
  console.log('"kickstarter" database dropped');
  connection.query('CREATE DATABASE kickstarter;', createErr => {
    if (createErr) {
      return console.error(createErr);
    }
    console.log('NEW "kickstarter" database created!');
    connection.end();
    seedDatabase();
    return undefined;
  });
  return undefined;
});

module.exports = seedDatabase;
