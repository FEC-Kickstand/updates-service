const mysql = require('mysql');

const connectPromise = (config) => {
  const connection = mysql.createConnection(config);
  return new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err) reject(err);
      else resolve(connection);
    });
  });
};

const queryPromise = (connection, queryStr) => new Promise((resolve, reject) => {
  connection.query(queryStr, (err) => {
    if (err) reject(err);
    else resolve(connection);
  });
});

const endConnectionPromise = connection => new Promise((resolve, reject) => {
  connection.end((err) => {
    if (err) reject(err);
    else resolve(connection);
  });
});

const initializeDatabase = config => connectPromise(config)
  .then((connection) => {
    console.log('drop database...');
    const query1 = 'DROP DATABASE if exists kickstand;';
    return queryPromise(connection, query1);
  })
  .then((connection) => {
    console.log('"kickstand" database dropped.');
    const query2 = 'CREATE DATABASE kickstand;';
    return queryPromise(connection, query2);
  })
  .then((connection) => {
    console.log('NEW "kickstand" database created!');
    return endConnectionPromise(connection);
  })
  .catch(err => console.error('error in initializing db "kickstand"', err.stack));

module.exports = initializeDatabase;
