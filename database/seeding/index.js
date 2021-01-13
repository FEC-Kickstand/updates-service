const fs = require('fs');
const path = require('path');
const mysql = require('mysql');

const { connect, config } = require('../connector');
const { User, Project, Update } = require('../models');
const generateSeedData = require('./generateSeedData');

const PRIMARY_RECORDS = 100;

const pQuery = (con, query) => new Promise((resolve, reject) => {
  con.query(query, (err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve(res);
    }
  });
});

const closeConnection = con => new Promise((resolve, reject) => {
  con.end((err) => {
    if (err) {
      reject(err);
    } else {
      resolve('connection closed');
    }
  });
});

const createAndSeedDatabase = () => {
  const schema = fs.readFileSync(path.resolve(__dirname, '../schema.sql'), { encoding: 'utf8' });
  const data = generateSeedData(PRIMARY_RECORDS);

  const defaultDBConnection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: 'mysql',
    multipleStatements: true,
  });

  // establish a connection only for setting up the seed database
  // these connection settings are not for general operation
  const seedingConnection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    multipleStatements: true, // insecure setting, used only for creating database schema
  });

  // Connect to default mysql db.
  // Used because seed database does not yet exist.
  const seedDb = connect(defaultDBConnection)
    // create seed db
    .then((defaultCon) => {
      console.log('\nCONNECTION to default "mysql" database SUCCESSFUL\n');
      return pQuery(defaultCon, `CREATE DATABASE IF NOT EXISTS ${config.database}`);
    })
    // end connection to default mysql db
    // then connect to seed db
    .then(() => {
      console.log(`\nDATABASE "${config.database}" CREATED\n`);
      defaultDBConnection.end();
      return connect(seedingConnection);
    })
    // add tables to seed db
    .then((seedCon) => {
      console.log(`\nSEEDING CONNECTION TO "${config.database}" ESTABLISHED\n`);
      return pQuery(seedCon, schema);
    })
    // insert users seed
    .then((res) => {
      console.log(`\nSETUP SCHEMA for "${config.database}" RESULTS:\n`);
      console.log(res);
      return new User(seedingConnection).bulkInsert(data.users);
    })
    // insert projects seed
    .then(() => {
      console.log('\nINSERTED USERS\n');
      return new Project(seedingConnection).bulkInsert(data.projects);
    })
    // insert updates seed
    .then(() => {
      console.log('\nINSERTED PROJECTS\n');
      return new Update(seedingConnection).bulkInsert(data.updates);
    })
    .then(() => {
      console.log('\nINSERTED UPDATES\n\nSEEDING COMPLETE!');
      return closeConnection(seedingConnection);
    })
    .catch(console.error);

  return seedDb;
};


module.exports = createAndSeedDatabase;
